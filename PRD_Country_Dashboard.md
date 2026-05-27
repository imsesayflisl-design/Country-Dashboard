# PRD — Country Dashboard
**Version:** 1.0  
**Date:** May 26, 2026  
**Author:** API Gauntlet Challenge  
**Status:** Draft

---

## 1. Overview

### 1.1 Product Summary
Country Dashboard is a web application that allows users to search for any country and instantly view a consolidated dashboard showing its **weather**, **currency exchange rates**, and **country details** — all in one place.

### 1.2 Problem Statement
When traveling or researching a country, users have to visit multiple websites to find weather conditions, exchange rates, and basic country facts. This app consolidates all of that into a single, clean interface.

### 1.3 Goal
Build and deploy a functional Next.js web app within 90 minutes that uses at least 3 of the 5 provided APIs in a coherent product experience.

---

## 2. APIs Used

| API | Purpose | Docs |
|-----|---------|------|
| **REST Countries** | Fetch country name, capital, flag, currency code, coordinates, and language | https://restcountries.com |
| **Open-Meteo** | Fetch current weather for the country's capital city using coordinates from REST Countries | https://open-meteo.com/en/docs |
| **Frankfurter** | Fetch live currency exchange rates using the currency code from REST Countries | https://www.frankfurter.app |

> None of these APIs require an API key.

---

## 3. Features

### 3.1 Core Features (MVP)

#### F1 — Country Search
- A search bar on the homepage where the user types a country name
- On submit, fetch data from REST Countries API
- Display an error message if the country is not found

#### F2 — Country Info Card
- Display the following from REST Countries:
  - Country flag (emoji or image)
  - Country name & capital city
  - Official language(s)
  - Currency name and code
  - Region / subregion

#### F3 — Weather Card
- Use the capital city's latitude & longitude (from REST Countries) to call Open-Meteo
- Display:
  - Current temperature (°C)
  - Weather condition (e.g. sunny, cloudy, rainy)
  - Wind speed
  - Weather icon based on condition code

#### F4 — Currency Exchange Card
- Use the currency code (from REST Countries) to call Frankfurter API
- Display exchange rates against:
  - USD (US Dollar)
  - EUR (Euro)
  - GBP (British Pound)
- Show the base currency clearly (e.g. "1 NGN = X USD")

---

### 3.2 Out of Scope (for this challenge)
- User authentication / accounts
- Saving favorite countries
- Historical weather data
- Multi-country comparison
- Mobile app

---

## 4. User Flow

```
User opens app
    ↓
Sees search bar: "Search for a country..."
    ↓
Types country name → clicks Search
    ↓
App calls REST Countries API
    ↓
Extracts: capital coordinates + currency code
    ↓
Simultaneously calls:
    Open-Meteo (weather)    +    Frankfurter (exchange rates)
    ↓                                    ↓
Weather Card renders         Currency Card renders
    ↓
Full dashboard displayed to user
```

---

## 5. Technical Requirements

### 5.1 Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** JavaScript / TypeScript

### 5.2 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with search bar |
| `/country/[name]` | Dashboard page for a specific country |

### 5.3 API Calls

All API calls are made server-side using Next.js API routes or `fetch` in server components to avoid CORS issues.

```
GET https://restcountries.com/v3.1/name/{country}
GET https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
GET https://api.frankfurter.app/latest?from={currencyCode}&to=USD,EUR,GBP
```

### 5.4 Error Handling
- Show a user-friendly message if a country is not found
- Show a fallback UI if an API call fails (e.g. "Weather data unavailable")
- Handle edge cases: countries with no capital (e.g. Antarctica) or no currency

---

## 6. UI & Design

### 6.1 Layout
- Clean, card-based layout
- Responsive (works on desktop and mobile)
- Dark or light theme (choose one)

### 6.2 Components
- `SearchBar` — input + submit button
- `CountryCard` — flag, name, capital, language, region
- `WeatherCard` — temperature, condition, wind speed
- `CurrencyCard` — exchange rate table

### 6.3 Design Principles
- Simple and fast — no unnecessary animations
- Data loads with a loading spinner per card
- Error states clearly communicated to the user

---

## 7. Success Criteria

| Criteria | Requirement |
|----------|-------------|
| Does it run? | App loads without errors in production |
| Is it deployed? | Live URL on Vercel |
| Does the product idea make sense? | All 3 APIs are used together in a coherent workflow |
| Minimum APIs used | 3 of 5 ✅ (REST Countries, Open-Meteo, Frankfurter) |

---

## 8. Timeline

| Task | Time Estimate |
|------|--------------|
| Setup Next.js project & deploy skeleton to Vercel | 10 min |
| Build search bar + REST Countries integration | 15 min |
| Build weather card + Open-Meteo integration | 15 min |
| Build currency card + Frankfurter integration | 15 min |
| Styling & layout polish | 20 min |
| Final testing & deploy | 15 min |
| **Total** | **90 min** |

---

## 9. Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| REST Countries returns unexpected data shape | Check the API response structure early and add optional chaining |
| Open-Meteo requires coordinates — some countries have no capital | Add a fallback message: "Weather unavailable for this country" |
| Frankfurter may not support all currencies | Handle unsupported currencies gracefully with a fallback UI |
| Running out of time | Prioritize core features (F1–F4); skip polish if needed |

---

*End of Document*
