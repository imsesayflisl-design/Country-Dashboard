# Implementation Plan — Country Dashboard
**Version:** 1.0  
**Date:** May 26, 2026  
**Time Budget:** 90 minutes  

---

## Phase 1 — Project Setup (10 min)

### Step 1.1 — Bootstrap Next.js App
```bash
npx create-next-app@latest country-dashboard
# Options to select:
# ✅ TypeScript → Yes
# ✅ Tailwind CSS → Yes
# ✅ App Router → Yes
# ✅ ESLint → Yes
```

### Step 1.2 — Folder Structure
```
country-dashboard/
├── app/
│   ├── page.tsx                  # Homepage with search bar
│   ├── layout.tsx                # Root layout
│   └── country/
│       └── [name]/
│           └── page.tsx          # Dashboard page
├── components/
│   ├── SearchBar.tsx
│   ├── CountryCard.tsx
│   ├── WeatherCard.tsx
│   └── CurrencyCard.tsx
├── lib/
│   ├── fetchCountry.ts           # REST Countries API call
│   ├── fetchWeather.ts           # Open-Meteo API call
│   └── fetchCurrency.ts          # Frankfurter API call
└── types/
    └── index.ts                  # Shared TypeScript types
```

### Step 1.3 — Deploy Skeleton to Vercel Early
```bash
git init
git add .
git commit -m "initial setup"
# Push to GitHub, then connect repo to Vercel
# This gives you a live URL immediately
```

> ⚡ Deploy early — even an empty app satisfies the "is it deployed?" criteria while you keep building.

---

## Phase 2 — Type Definitions (5 min)

Create `types/index.ts` with the shapes of all API responses:

```typescript
// REST Countries
export type Country = {
  name: { common: string; official: string };
  capital: string[];
  flags: { png: string; svg: string };
  languages: { [key: string]: string };
  currencies: { [code: string]: { name: string; symbol: string } };
  latlng: [number, number];
  region: string;
  subregion: string;
};

// Open-Meteo
export type Weather = {
  current_weather: {
    temperature: number;
    windspeed: number;
    weathercode: number;
  };
};

// Frankfurter
export type ExchangeRates = {
  base: string;
  rates: { USD: number; EUR: number; GBP: number };
};
```

---

## Phase 3 — API Layer (15 min)

### Step 3.1 — REST Countries (`lib/fetchCountry.ts`)
```typescript
export async function fetchCountry(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
  );
  if (!res.ok) throw new Error("Country not found");
  const data = await res.json();
  return data[0]; // Return first match
}
```

### Step 3.2 — Open-Meteo (`lib/fetchWeather.ts`)
```typescript
export async function fetchWeather(lat: number, lon: number) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  if (!res.ok) throw new Error("Weather data unavailable");
  return res.json();
}
```

### Step 3.3 — Frankfurter (`lib/fetchCurrency.ts`)
```typescript
export async function fetchCurrency(currencyCode: string) {
  const res = await fetch(
    `https://api.frankfurter.app/latest?from=${currencyCode}&to=USD,EUR,GBP`
  );
  if (!res.ok) throw new Error("Exchange rate data unavailable");
  return res.json();
}
```

---

## Phase 4 — Pages (20 min)

### Step 4.1 — Homepage (`app/page.tsx`)

- Render a centered `SearchBar` component
- On form submit, redirect to `/country/[name]`

```typescript
// app/page.tsx
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-2">🌍 Country Dashboard</h1>
      <p className="text-gray-500 mb-8">Search any country for weather, currency & more</p>
      <SearchBar />
    </main>
  );
}
```

### Step 4.2 — Country Dashboard Page (`app/country/[name]/page.tsx`)

- This is a **server component** — fetch all 3 APIs in parallel using `Promise.all`
- Pass data down to card components

```typescript
// app/country/[name]/page.tsx
import { fetchCountry } from "@/lib/fetchCountry";
import { fetchWeather } from "@/lib/fetchWeather";
import { fetchCurrency } from "@/lib/fetchCurrency";
import CountryCard from "@/components/CountryCard";
import WeatherCard from "@/components/WeatherCard";
import CurrencyCard from "@/components/CurrencyCard";

export default async function CountryPage({ params }: { params: { name: string } }) {
  const country = await fetchCountry(params.name);

  const [lat, lon] = country.latlng;
  const currencyCode = Object.keys(country.currencies)[0];

  // Fetch weather + currency in parallel
  const [weather, currency] = await Promise.all([
    fetchWeather(lat, lon).catch(() => null),
    fetchCurrency(currencyCode).catch(() => null),
  ]);

  return (
    <main className="max-w-4xl mx-auto p-8">
      <a href="/" className="text-blue-500 hover:underline mb-6 block">← Back to Search</a>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CountryCard country={country} />
        <WeatherCard weather={weather} capital={country.capital?.[0]} />
        <CurrencyCard currency={currency} currencyCode={currencyCode} />
      </div>
    </main>
  );
}
```

---

## Phase 5 — Components (20 min)

### Step 5.1 — SearchBar (`components/SearchBar.tsx`)
```typescript
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) router.push(`/country/${query.trim()}`);
  };

  return (
    <div className="flex gap-2 w-full max-w-md">
      <input
        className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2"
        placeholder="e.g. France, Nigeria, Japan..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
```

### Step 5.2 — CountryCard (`components/CountryCard.tsx`)
Displays: flag image, country name, capital, language, region, currency name.

### Step 5.3 — WeatherCard (`components/WeatherCard.tsx`)
Displays: temperature, wind speed, and a weather description based on the WMO weather code from Open-Meteo.

> Tip: Create a helper `getWeatherDescription(code: number)` that maps WMO codes to labels like "Sunny", "Rainy", "Cloudy".

### Step 5.4 — CurrencyCard (`components/CurrencyCard.tsx`)
Displays: a small table of exchange rates (1 [base currency] = X USD / EUR / GBP).

---

## Phase 6 — Styling & Polish (10 min)

- Use Tailwind utility classes throughout
- Each card: `rounded-xl shadow-md p-6 bg-white`
- Add a loading state with a spinner (use `loading.tsx` in App Router)
- Add a `not-found.tsx` or `error.tsx` page for invalid countries
- Make layout responsive: 1 column on mobile, 2 columns on desktop

---

## Phase 7 — Final Deploy (10 min)

```bash
git add .
git commit -m "feat: complete country dashboard with weather and currency"
git push origin main
```

- Vercel auto-deploys on push
- Test the live URL with a few countries (e.g. Ghana, Germany, Brazil)
- Copy the Vercel URL and GitHub repo link for submission

---

## API Chaining Summary

```
User searches "Nigeria"
        ↓
REST Countries → returns:
  - capital: "Abuja"
  - latlng: [10, 8]           → fed into Open-Meteo
  - currency code: "NGN"      → fed into Frankfurter
  - flag, language, region    → shown in CountryCard
        ↓
Open-Meteo (lat=10, lon=8)   →   WeatherCard
Frankfurter (from=NGN)        →   CurrencyCard
```

---

## Error Handling Checklist

- [ ] Country not found → show "Country not found. Try another name."
- [ ] Weather API fails → show "Weather data unavailable for this country"
- [ ] Currency not supported by Frankfurter → show "Exchange rate unavailable"
- [ ] Country has no capital (e.g. Antarctica) → gracefully skip weather call
- [ ] Network error → generic fallback message on each card

---

## Submission Checklist

- [ ] App runs without errors
- [ ] Deployed to Vercel with a live URL
- [ ] At least 3 APIs are actively used (REST Countries ✅, Open-Meteo ✅, Frankfurter ✅)
- [ ] GitHub repo is public
- [ ] Search works for multiple countries
- [ ] Error states are handled

---

*End of Implementation Plan*
