import { fetchCountry } from '@/lib/fetchCountry';
import { fetchWeather } from '@/lib/fetchWeather';
import { fetchCurrency } from '@/lib/fetchCurrency';
import CountryCard from '@/components/CountryCard';
import WeatherCard from '@/components/WeatherCard';
import CurrencyCard from '@/components/CurrencyCard';
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
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs - Subtle version for dashboard */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-float anim-delay-3s"></div>
        <div className="absolute top-1/3 right-10 w-48 h-48 bg-indigo-300/10 rounded-full blur-3xl animate-float anim-delay-6s"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="dashboard-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dashboard-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto p-6 md:p-8">
        {/* Enhanced Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-xl
                       bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                       border border-white/40 dark:border-gray-600/40
                       text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300
                       font-medium transition-all duration-300 group
                       hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105"
          >
            <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>Back to Search</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl animate-float">🏳️</div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {country.name.common}
              </h1>
              <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">
                Complete Country Dashboard
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed">
            Explore comprehensive data for {country.name.common} including live weather conditions,
            current currency exchange rates, and essential country information — all updated in real-time.
          </p>
        </div>

        {/* Enhanced Dashboard Grid with Staggered Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 mb-16">
          {/* Country Info Card - Primary position, larger on desktop */}
          <div className="xl:col-span-5 animate-slide-up">
            <CountryCard country={country} />
          </div>

          {/* Weather Card - Prominent display */}
          <div className="xl:col-span-4 animate-slide-up anim-delay-150">
            <WeatherCard weather={weather} capital={capital} />
          </div>

          {/* Currency Card - Full width section */}
          <div className="xl:col-span-3 animate-slide-up anim-delay-300">
            <CurrencyCard currency={currency} currencyCode={currencyCode || undefined} />
          </div>
        </div>

        {/* Enhanced Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="card-enhanced rounded-2xl p-6 text-center group animate-slide-up anim-delay-450">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🌍</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {country.region}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Region
            </div>
          </div>

          <div className="card-enhanced rounded-2xl p-6 text-center group animate-slide-up anim-delay-600">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">👥</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {country.population?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Population
            </div>
          </div>

          <div className="card-enhanced rounded-2xl p-6 text-center group animate-slide-up anim-delay-750">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📏</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {country.area?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Area (km²)
            </div>
          </div>

          <div className="card-enhanced rounded-2xl p-6 text-center group animate-slide-up anim-delay-900">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🌐</div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {country.timezones?.length || 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Timezone{(country.timezones?.length || 0) !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="relative">
          {/* Footer Background Card */}
          <div className="card-enhanced rounded-2xl p-8 text-center animate-slide-up anim-delay-1050">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse-gentle"></div>
                <span className="text-sm font-semibold">Live Data</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm font-semibold">Real-time Updates</span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
              Data provided by REST Countries, Open-Meteo, and Frankfurter APIs
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
                           bg-gradient-to-r from-blue-600 to-blue-700
                           hover:from-blue-700 hover:to-blue-800
                           text-white font-semibold transition-all duration-300
                           hover:scale-105 hover:shadow-lg group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Explore Another Country
              </Link>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>or</span>
                <span className="text-gray-400">refresh this page to update data</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}