"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const handleSearch = async () => {
    if (query.trim()) {
      setIsLoading(true);
      router.push(`/country/${encodeURIComponent(query.trim())}`);
      // Keep loading state - it will be reset when component unmounts
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-lg">
      {/* Enhanced Search Container */}
      <div className={`
        flex gap-3 p-2 rounded-2xl transition-all duration-300 ease-in-out
        ${isFocused
          ? 'glass-search shadow-lg scale-105'
          : 'bg-white/50 dark:bg-gray-800/30 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 shadow-md'
        }
      `}>
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full bg-transparent text-gray-900 dark:text-gray-100
                       placeholder:text-gray-500 dark:placeholder:text-gray-400
                       text-lg font-medium outline-none px-4 py-3 rounded-xl
                       transition-all duration-300"
            placeholder="Search any country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            disabled={isLoading}
          />

          {/* Search Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {isLoading ? (
              <div className="animate-spin w-5 h-5">
                <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="31.416"
                    strokeDashoffset="31.416"
                    className="animate-pulse-gentle"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 12 12"
                      to="360 12 12"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            ) : (
              <svg
                className="w-5 h-5 transition-transform duration-200 hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Enhanced Search Button */}
        <button
          className={`
            px-8 py-3 rounded-xl font-semibold text-white
            transition-all duration-300 ease-in-out transform
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
            disabled:cursor-not-allowed relative overflow-hidden group
            ${isLoading || !query.trim()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105 hover:shadow-lg cursor-pointer'
            }
          `}
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
        >
          {/* Button Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

          {/* Button Content */}
          <span className="relative flex items-center gap-2">
            {isLoading ? (
              <>
                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                Searching
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                Search
              </>
            )}
          </span>
        </button>
      </div>

      {/* Enhanced Input Suggestions Placeholder */}
      {isFocused && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 p-4 rounded-xl
                       bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm
                       border border-white/30 dark:border-gray-600/30 shadow-xl
                       animate-slide-up z-10">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
            Try searching for:
          </div>
          <div className="flex flex-wrap gap-2">
            {['France', 'Japan', 'Brazil', 'Germany', 'Nigeria'].map((suggestion) => (
              <button
                key={suggestion}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300
                          rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800/40
                          transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  setQuery(suggestion);
                  setIsFocused(false);
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}