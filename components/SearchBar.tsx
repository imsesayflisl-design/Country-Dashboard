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
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularCountries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Japan', 'Australia', 'Canada', 'Brazil'
  ];

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Responsive Search Container */}
      <div className="flex flex-col lg:flex-row gap-3 p-3 bg-white dark:bg-slate-800 rounded-xl border-2 border-gray-200 dark:border-gray-600 shadow-lg focus-within:border-blue-600 dark:focus-within:border-blue-400 transition-all duration-200">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="input-primary pl-12 pr-4 py-4 w-full text-base lg:text-lg border-0 focus:ring-0 bg-transparent"
            placeholder="Enter country name (e.g., United States, France, Japan)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            disabled={isLoading}
          />
        </div>

        {/* Responsive Search Button */}
        <button
          className="responsive-button btn-primary touch-target px-8 py-4 w-full lg:w-auto lg:min-w-[160px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416" />
                <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite" />
              </svg>
              Searching...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Analyze Country
            </div>
          )}
        </button>
      </div>

      {/* Professional Suggestions Dropdown */}
      {isFocused && !query && (
        <div className="absolute top-full left-0 right-0 mt-2 card-primary p-6 shadow-xl z-10 animate-slide-up">
          <div className="text-small text-gray-600 dark:text-gray-400 mb-3 font-medium">
            Popular Countries:
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {popularCountries.map((country) => (
              <button
                key={country}
                className="text-left p-3 text-caption hover:bg-gray-50 dark:hover:bg-slate-700 rounded-lg transition-colors duration-200 border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                onClick={() => {
                  setQuery(country);
                  setTimeout(() => handleSearch(), 100);
                }}
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">{country}</div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
            <div className="text-small text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Search supports full country names, ISO codes, and common variations
            </div>
          </div>
        </div>
      )}

      {/* Search Results Preview (when typing) */}
      {query && query.length > 2 && isFocused && (
        <div className="absolute top-full left-0 right-0 mt-2 card-primary p-4 shadow-xl z-10 animate-fade-in">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <div>
              <div className="font-medium text-gray-900 dark:text-gray-100">
                Search for "{query}"
              </div>
              <div className="text-small text-gray-500 dark:text-gray-400">
                Press Enter or click Analyze Country to continue
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}