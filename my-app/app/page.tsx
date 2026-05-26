import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float anim-delay-2s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300/20 rounded-full blur-3xl animate-float anim-delay-4s"></div>

        {/* World Map Subtle Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            {/* Simplified world map paths */}
            <path d="M200,200 Q300,150 400,200 T600,200 Q700,180 800,200 L1000,200 L1000,400 Q900,420 800,400 Q700,380 600,400 T400,400 Q300,420 200,400 Z"
                  fill="currentColor" opacity="0.3"/>
            <circle cx="300" cy="180" r="3" fill="currentColor" opacity="0.6" className="animate-pulse-gentle"/>
            <circle cx="600" cy="160" r="3" fill="currentColor" opacity="0.6" className="animate-pulse-gentle anim-delay-1s"/>
            <circle cx="850" cy="200" r="3" fill="currentColor" opacity="0.6" className="animate-pulse-gentle anim-delay-2s"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center p-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="mb-12">
            {/* Main Title */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-6xl animate-float">🌍</div>
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Country Dashboard
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
              Discover the world at your fingertips
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get instant access to any country's weather conditions, live currency exchange rates, and essential details — all beautifully presented in one comprehensive dashboard
            </p>
          </div>

          {/* Search Section */}
          <div className="mb-12">
            <SearchBar />
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌤️</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Live Weather
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Real-time weather conditions, temperature, and forecasts for any capital city
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💱</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Currency Rates
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Up-to-date exchange rates against major currencies with trend indicators
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏛️</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                Country Details
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Essential information including capitals, languages, regions, and more
              </p>
            </div>
          </div>

          {/* Popular Countries */}
          <div className="mb-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Popular destinations to explore:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: 'France', flag: '🇫🇷' },
                { name: 'Japan', flag: '🇯🇵' },
                { name: 'Brazil', flag: '🇧🇷' },
                { name: 'Germany', flag: '🇩🇪' },
                { name: 'Nigeria', flag: '🇳🇬' },
                { name: 'Australia', flag: '🇦🇺' },
                { name: 'India', flag: '🇮🇳' },
                { name: 'Canada', flag: '🇨🇦' }
              ].map((country) => (
                <a
                  key={country.name}
                  href={`/country/${encodeURIComponent(country.name)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                           border border-white/40 dark:border-gray-600/40 rounded-full
                           hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105
                           transition-all duration-300 text-sm font-medium
                           text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <span className="text-base">{country.flag}</span>
                  {country.name}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Info */}
          <div className="text-xs text-gray-500 dark:text-gray-400 space-y-1">
            <p>Powered by REST Countries, Open-Meteo, and Frankfurter APIs</p>
            <p>Real-time data • Always up-to-date • Beautifully presented</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse-gentle"></div>
        </div>
      </div>
    </main>
  );
}
