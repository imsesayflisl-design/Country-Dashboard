'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Country page error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-2xl mx-auto p-8">
        <div className="text-center">
          {/* Back link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800
                         dark:text-blue-400 dark:hover:text-blue-300 font-medium
                         transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to Search
            </Link>
          </div>

          {/* Error Icon */}
          <div className="text-8xl mb-8">⚠️</div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Something went wrong!
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            We encountered an error while loading the country dashboard.
            This might be a temporary issue.
          </p>

          {/* Error Details */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              What might help:
            </h3>
            <ul className="text-left space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-3">
                <span className="text-blue-500">•</span>
                Try refreshing the page
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">•</span>
                Check your internet connection
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">•</span>
                Try searching for a different country
              </li>
              <li className="flex items-center gap-3">
                <span className="text-blue-500">•</span>
                Come back later if the issue persists
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                         text-white px-6 py-3 rounded-lg font-medium transition-colors
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              🔄 Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border border-gray-300
                         dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700
                         text-gray-700 dark:text-gray-200 px-6 py-3 rounded-lg font-medium
                         transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              🏠 Go Home
            </Link>
          </div>

          {/* Technical Details (for debugging) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200
                           dark:border-red-800 rounded-lg text-left">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">
                Error Details (Development Only):
              </h4>
              <code className="text-sm text-red-700 dark:text-red-400 block whitespace-pre-wrap">
                {error.message}
              </code>
              {error.digest && (
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}