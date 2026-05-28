import { fetchCountry } from '@/lib/fetchCountry';
import { fetchWeather } from '@/lib/fetchWeather';
import { fetchCurrency } from '@/lib/fetchCurrency';
import CountryCard from '@/components/CountryCard';
import WeatherCard from '@/components/WeatherCard';
import CurrencyCard from '@/components/CurrencyCard';
import RefreshButton from '@/components/RefreshButton';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface CountryPageProps {
  params: Promise<{ name: string }>;
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  // Fetch country data first
  const country = await fetchCountry(decodedName);

  if (!country) {
    notFound();
  }

  // Extract coordinates and currency code for parallel API calls
  const [lat, lon] = country.latlng || [0, 0];
  const currencyCode = country.currencies ? Object.keys(country.currencies)[0] : null;
  const capital = country.capital?.[0];

  // Fetch weather and currency data in parallel
  const [weatherResult, currencyResult] = await Promise.allSettled([
    lat && lon ? fetchWeather(lat, lon) : Promise.resolve(null),
    currencyCode ? fetchCurrency(currencyCode) : Promise.resolve(null),
  ]);

  const weather = weatherResult.status === 'fulfilled' ? weatherResult.value : null;
  const currency = currencyResult.status === 'fulfilled' ? currencyResult.value : null;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Professional Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="responsive-container max-w-7xl mx-auto py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="btn-secondary flex items-center gap-2 responsive-button"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span className="phone-hidden">Back to Search</span>
                <span className="phone-only hidden">Back</span>
              </Link>

              <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-600"></div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">{country.name.common}</h1>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Analytics Dashboard</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Live Data</span>
              </div>

              <RefreshButton />
            </div>
          </div>
        </div>
      </header>

      {/* Country Overview Banner */}
      <section className="bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-2xl">
                🌍
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {country.name.common}
                </h1>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {country.region}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {capital || 'N/A'}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {country.population?.toLocaleString() || 'N/A'} people
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="card-accent px-4 py-2 text-center">
                <div className="text-caption font-medium text-gray-600 dark:text-gray-400">ISO Code</div>
                <div className="text-subheading font-bold text-gray-900 dark:text-gray-100">
                  {country.cca2}
                </div>
              </div>
              <div className="card-accent px-4 py-2 text-center">
                <div className="text-caption font-medium text-gray-600 dark:text-gray-400">Area</div>
                <div className="text-subheading font-bold text-gray-900 dark:text-gray-100">
                  {country.area ? `${country.area.toLocaleString()} km²` : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Row */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="card-primary p-4 sm:p-6 text-center animate-fade-in">
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                {country.region}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Region</div>
            </div>

            <div className="card-primary p-6 text-center animate-fade-in stagger-delay-1">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                {country.population ? country.population.toLocaleString() : 'N/A'}
              </div>
              <div className="text-caption text-gray-600 dark:text-gray-400">Population</div>
            </div>

            <div className="card-primary p-6 text-center animate-fade-in stagger-delay-2">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div className="text-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                {country.area ? `${country.area.toLocaleString()}` : 'N/A'}
              </div>
              <div className="text-caption text-gray-600 dark:text-gray-400">Area (km²)</div>
            </div>

            <div className="card-primary p-6 text-center animate-fade-in stagger-delay-3">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-heading font-bold text-gray-900 dark:text-gray-100 mb-1">
                {country.timezones?.length || 0}
              </div>
              <div className="text-caption text-gray-600 dark:text-gray-400">
                Timezone{(country.timezones?.length || 0) !== 1 ? 's' : ''}
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
            {/* Country Details - Large card */}
            <div className="lg:col-span-5 animate-slide-up">
              <CountryCard country={country} />
            </div>

            {/* Weather Card */}
            <div className="lg:col-span-4 animate-slide-up stagger-delay-1">
              <WeatherCard weather={weather} capital={capital} />
            </div>

            {/* Currency Card */}
            <div className="lg:col-span-3 animate-slide-up stagger-delay-2">
              <CurrencyCard currency={currency} currencyCode={currencyCode || undefined} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-small text-gray-600 dark:text-gray-400">
                  Data updated in real-time
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-small text-gray-500 dark:text-gray-400">
              <span>REST Countries API</span>
              <span>•</span>
              <span>Open-Meteo Weather</span>
              <span>•</span>
              <span>Frankfurter Exchange</span>
            </div>

            <Link href="/" className="btn-primary px-6 py-2">
              Explore Another Country
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}