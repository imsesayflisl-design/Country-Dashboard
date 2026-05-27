import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Professional Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Country Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Global Data Analytics</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Live Data
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="responsive-section">
        <div className="responsive-container max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="responsive-text-hero text-gray-900 dark:text-gray-100 mb-6">
              Comprehensive Country
              <span className="text-blue-600 block md:inline"> Intelligence</span>
            </h1>

            <p className="responsive-text-body text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto">
              Access real-time country data, weather conditions, and economic indicators in a professional dashboard designed for analysts and decision-makers.
            </p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-gray-500 dark:text-gray-400 mb-10">
              <span className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full">
                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Real-time Data
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                195+ Countries
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Professional Analytics
              </span>
            </div>
          </div>

          {/* Search Section */}
          <div className="animate-slide-up stagger-delay-1 mb-8 sm:mb-16">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="responsive-section bg-gray-50 dark:bg-slate-800">
        <div className="responsive-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="responsive-text-subtitle text-gray-900 dark:text-gray-100 mb-4">
              Comprehensive Data Sources
            </h2>
            <p className="responsive-text-body text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Integrated data from trusted sources to provide you with accurate, up-to-date country insights for professional analysis.
            </p>
          </div>

          <div className="responsive-grid">
            {/* Weather Analytics */}
            <div className="card-primary p-8 text-center animate-slide-up stagger-delay-1">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-heading text-gray-900 dark:text-gray-100 mb-4">
                Weather Intelligence
              </h3>
              <p className="text-body text-gray-600 dark:text-gray-400 mb-6">
                Real-time weather conditions and climate data for capital cities worldwide, powered by Open-Meteo API.
              </p>
              <div className="space-y-2 text-caption text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Temperature & Humidity</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Wind Conditions</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Weather Descriptions</span>
                  <span className="status-success">✓</span>
                </div>
              </div>
            </div>

            {/* Economic Data */}
            <div className="card-primary p-8 text-center animate-slide-up stagger-delay-2">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-heading text-gray-900 dark:text-gray-100 mb-4">
                Currency Exchange
              </h3>
              <p className="text-body text-gray-600 dark:text-gray-400 mb-6">
                Live currency exchange rates with historical trends and market indicators via Frankfurter API.
              </p>
              <div className="space-y-2 text-caption text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Real-time Rates</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Major Currency Pairs</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Market Analysis</span>
                  <span className="status-success">✓</span>
                </div>
              </div>
            </div>

            {/* Geographic Data */}
            <div className="card-primary p-8 text-center animate-slide-up stagger-delay-3">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-heading text-gray-900 dark:text-gray-100 mb-4">
                Geographic Intelligence
              </h3>
              <p className="text-body text-gray-600 dark:text-gray-400 mb-6">
                Comprehensive country profiles with demographics, languages, and regional data from REST Countries API.
              </p>
              <div className="space-y-2 text-caption text-gray-500 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Population & Demographics</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Languages & Cultures</span>
                  <span className="status-success">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>Regional Classifications</span>
                  <span className="status-success">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="responsive-section">
        <div className="responsive-container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="responsive-text-subtitle text-gray-900 dark:text-gray-100 mb-4">
              Quick Access
            </h2>
            <p className="responsive-text-body text-gray-600 dark:text-gray-400">
              Popular countries for instant data access and analysis
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'United States', code: 'US' },
              { name: 'United Kingdom', code: 'GB' },
              { name: 'Germany', code: 'DE' },
              { name: 'France', code: 'FR' },
              { name: 'Japan', code: 'JP' },
              { name: 'Australia', code: 'AU' },
              { name: 'Canada', code: 'CA' },
              { name: 'Brazil', code: 'BR' }
            ].map((country, index) => (
              <a
                key={country.name}
                href={`/country/${encodeURIComponent(country.name)}`}
                className="card-primary p-4 text-center hover:shadow-lg transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-2">
                  <div className="w-8 h-6 mx-auto rounded bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-caption">
                    {country.code}
                  </div>
                </div>
                <p className="text-caption font-medium text-gray-900 dark:text-gray-100">
                  {country.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Powered by trusted data sources
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-small text-gray-500 dark:text-gray-400">
              <span>REST Countries API</span>
              <span>•</span>
              <span>Open-Meteo Weather</span>
              <span>•</span>
              <span>Frankfurter Exchange</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
