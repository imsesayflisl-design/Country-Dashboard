import Link from 'next/link';

export default function Loading() {
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
              <pattern id="loading-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-pattern)"/>
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

          {/* Header Skeleton with staggered animation */}
          <div className="animate-pulse">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-300/70 dark:bg-gray-600/70 rounded-full animate-pulse-gentle"></div>
              <div>
                <div className="h-10 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-xl w-80 mb-3 animate-pulse-gentle" style={{ animationDelay: '200ms' }}></div>
                <div className="h-6 bg-gray-200/70 dark:bg-gray-700/70 rounded-lg w-64 animate-pulse-gentle" style={{ animationDelay: '400ms' }}></div>
              </div>
            </div>
            <div className="h-5 bg-gray-200/70 dark:bg-gray-700/70 rounded-lg w-3/4 animate-pulse-gentle" style={{ animationDelay: '600ms' }}></div>
          </div>
        </div>

        {/* Enhanced Dashboard Grid with Staggered Loading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-12 gap-8 mb-16">
          {/* Country Card Skeleton */}
          <div className="xl:col-span-5">
            <div className="card-enhanced rounded-2xl p-6 animate-slide-up">
              <div className="animate-pulse">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-14 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-lg animate-pulse-gentle"></div>
                  <div className="flex-1">
                    <div className="h-7 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-lg mb-3 animate-pulse-gentle" style={{ animationDelay: '100ms' }}></div>
                    <div className="h-4 bg-gray-200/70 dark:bg-gray-700/70 rounded w-2/3 animate-pulse-gentle" style={{ animationDelay: '200ms' }}></div>
                    <div className="mt-3 px-3 py-1 bg-gray-200/50 dark:bg-gray-700/50 rounded-full w-24 h-6 animate-pulse-gentle" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
                      <div className="flex justify-between items-center animate-pulse-gentle" style={{ animationDelay: `${400 + i * 100}ms` }}>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gray-300/70 dark:bg-gray-600/70 rounded-full"></div>
                          <div className="h-4 bg-gray-300/70 dark:bg-gray-600/70 rounded w-20"></div>
                        </div>
                        <div className="h-4 bg-gray-200/70 dark:bg-gray-700/70 rounded w-24"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Weather Card Skeleton */}
          <div className="xl:col-span-4">
            <div className="card-enhanced rounded-2xl p-6 animate-slide-up anim-delay-150">
              <div className="animate-pulse">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-300/70 dark:bg-gray-600/70 rounded-full animate-pulse-gentle"></div>
                  <div className="h-6 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-lg w-32 animate-pulse-gentle" style={{ animationDelay: '100ms' }}></div>
                </div>

                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-full mx-auto mb-4 animate-pulse-gentle" style={{ animationDelay: '200ms' }}></div>
                  <div className="h-12 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-xl w-28 mx-auto mb-4 animate-pulse-gentle" style={{ animationDelay: '300ms' }}></div>
                  <div className="h-5 bg-gray-200/70 dark:bg-gray-700/70 rounded-lg w-40 mx-auto animate-pulse-gentle" style={{ animationDelay: '400ms' }}></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-center">
                      <div className="animate-pulse-gentle" style={{ animationDelay: `${500 + i * 100}ms` }}>
                        <div className="text-2xl mb-2">
                          <div className="w-8 h-8 bg-gray-300/70 dark:bg-gray-600/70 rounded mx-auto"></div>
                        </div>
                        <div className="h-6 bg-gray-300/70 dark:bg-gray-600/70 rounded w-16 mx-auto mb-2"></div>
                        <div className="h-3 bg-gray-200/70 dark:bg-gray-700/70 rounded w-12 mx-auto"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Currency Card Skeleton */}
          <div className="xl:col-span-3">
            <div className="card-enhanced rounded-2xl p-6 animate-slide-up anim-delay-300">
              <div className="animate-pulse">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300/70 dark:bg-gray-600/70 rounded-full animate-pulse-gentle"></div>
                    <div className="h-6 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-lg w-32 animate-pulse-gentle" style={{ animationDelay: '100ms' }}></div>
                  </div>
                  <div className="text-right">
                    <div className="h-5 bg-gray-300/70 dark:bg-gray-600/70 rounded w-16 mb-1 animate-pulse-gentle" style={{ animationDelay: '200ms' }}></div>
                    <div className="h-3 bg-gray-200/70 dark:bg-gray-700/70 rounded w-12 animate-pulse-gentle" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-600/40">
                      <div className="flex justify-between items-center animate-pulse-gentle" style={{ animationDelay: `${400 + i * 100}ms` }}>
                        <div className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-gray-300/70 dark:bg-gray-600/70 rounded"></div>
                          <div className="h-4 bg-gray-300/70 dark:bg-gray-600/70 rounded w-12"></div>
                        </div>
                        <div className="text-right">
                          <div className="h-6 bg-gray-300/70 dark:bg-gray-600/70 rounded w-20 mb-1"></div>
                          <div className="h-3 bg-gray-200/70 dark:bg-gray-700/70 rounded w-16"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="card-enhanced rounded-2xl p-6 text-center animate-slide-up" style={{ animationDelay: `${450 + i * 150}ms` }}>
              <div className="animate-pulse">
                <div className="w-12 h-12 bg-gray-300/70 dark:bg-gray-600/70 rounded mx-auto mb-3 animate-pulse-gentle" style={{ animationDelay: `${100 + i * 50}ms` }}></div>
                <div className="h-8 bg-gradient-to-r from-gray-300/70 to-gray-200/70 dark:from-gray-600/70 dark:to-gray-700/70 rounded-lg w-20 mx-auto mb-2 animate-pulse-gentle" style={{ animationDelay: `${200 + i * 50}ms` }}></div>
                <div className="h-4 bg-gray-200/70 dark:bg-gray-700/70 rounded w-16 mx-auto animate-pulse-gentle" style={{ animationDelay: `${300 + i * 50}ms` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Loading Indicator */}
        <div className="relative">
          <div className="card-enhanced rounded-2xl p-8 text-center animate-slide-up" style={{ animationDelay: '1050ms' }}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="w-8 h-8 border-4 border-blue-200 dark:border-blue-800 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-4 border-transparent border-r-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
              <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Loading Dashboard
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-gentle"></div>
              <span>Fetching country data</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-gentle" style={{ animationDelay: '0.5s' }}></div>
              <span>Loading weather info</span>
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-gentle" style={{ animationDelay: '1s' }}></div>
              <span>Getting currency rates</span>
            </div>

            <div className="text-xs text-gray-500 dark:text-gray-400">
              Please wait while we gather the latest information...
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}