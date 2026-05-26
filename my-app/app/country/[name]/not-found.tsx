import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-300/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '6s' }}></div>

        {/* Error Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <pattern id="error-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.3"/>
                <path d="M15,15 L25,25 M25,15 L15,25" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#error-pattern)"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto p-6 md:p-8">
        <div className="text-center">
          {/* Enhanced Back Link */}
          <div className="mb-12 animate-slide-up">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-xl
                         bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm
                         border border-white/40 dark:border-gray-600/40
                         text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300
                         font-medium transition-all duration-300 group
                         hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105"
            >
              <span className="text-lg group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Back to Search</span>
            </Link>
          </div>

          {/* Enhanced Error Display */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '150ms' }}>
            {/* Animated Error Icon */}
            <div className="text-9xl mb-8 animate-float">🌍</div>

            {/* Error Message with Gradient Text */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Country Not Found
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
              We couldn't find the country you're looking for.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              It might not exist in our database or there could be a spelling error.
            </p>
          </div>

          {/* Enhanced Suggestions Card */}
          <div className="card-enhanced rounded-2xl p-8 mb-8 text-left animate-slide-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-xl text-white">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Try these suggestions:
              </h3>
            </div>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">✓</span>
                </div>
                <span className="font-medium">Check the spelling of the country name</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 dark:text-green-400 text-sm">✓</span>
                </div>
                <span className="font-medium">Use the common name (e.g., "South Korea" instead of "Republic of Korea")</span>
              </li>
              <li className="flex items-center gap-4 p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 dark:text-purple-400 text-sm">✓</span>
                </div>
                <span className="font-medium">Try searching in English</span>
              </li>
            </ul>
          </div>

          {/* Enhanced Popular Countries */}
          <div className="card-enhanced rounded-2xl p-8 mb-12 animate-slide-up" style={{ animationDelay: '450ms' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-xl text-white">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                Popular Countries
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'United States', flag: '🇺🇸' },
                { name: 'Germany', flag: '🇩🇪' },
                { name: 'Japan', flag: '🇯🇵' },
                { name: 'France', flag: '🇫🇷' },
                { name: 'Brazil', flag: '🇧🇷' },
                { name: 'India', flag: '🇮🇳' },
                { name: 'Nigeria', flag: '🇳🇬' },
                { name: 'Australia', flag: '🇦🇺' },
                { name: 'Canada', flag: '🇨🇦' }
              ].map((country, index) => (
                <Link
                  key={country.name}
                  href={`/country/${encodeURIComponent(country.name)}`}
                  className="group p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                             border border-white/30 dark:border-gray-600/30
                             hover:bg-white/80 dark:hover:bg-gray-700/80 hover:scale-105
                             transition-all duration-300 text-center cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${600 + index * 50}ms` }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {country.name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Action Button */}
          <div className="animate-slide-up" style={{ animationDelay: '900ms' }}>
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl
                         bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800
                         text-white font-semibold text-lg transition-all duration-300
                         hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🔍</span>
              <span>Start New Search</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}