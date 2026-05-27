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
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Professional Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="btn-secondary flex items-center gap-2 px-4 py-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Search
            </Link>

            <div className="hidden sm:block w-px h-8 bg-gray-200 dark:bg-gray-600"></div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">Error</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Something went wrong</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Error Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Error Icon */}
          <div className="w-20 h-20 mx-auto bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-8">
            <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-display font-bold text-gray-900 dark:text-gray-100 mb-4">
            Something went wrong
          </h1>
          <p className="text-subheading text-gray-600 dark:text-gray-400 mb-8">
            We encountered an error while loading the country dashboard.
            This might be a temporary issue.
          </p>

          {/* Troubleshooting Card */}
          <div className="card-primary p-8 mb-8 text-left">
            <h3 className="text-heading font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Troubleshooting Steps
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-small font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Refresh the page</h4>
                  <p className="text-caption text-gray-600 dark:text-gray-400">Try reloading to see if this was a temporary issue</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-small font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Check your connection</h4>
                  <p className="text-caption text-gray-600 dark:text-gray-400">Ensure you have a stable internet connection</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                  <span className="text-small font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">Try a different search</h4>
                  <p className="text-caption text-gray-600 dark:text-gray-400">Search for a different country to see if the issue persists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="btn-primary px-8 py-3 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Try Again
            </button>
            <Link
              href="/"
              className="btn-secondary px-8 py-3 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
          </div>

          {/* Technical Details (for debugging) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-12 card-primary p-6 text-left bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-300 mb-4">
                Development Error Details
              </h4>
              <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 mb-4">
                <code className="text-small text-red-700 dark:text-red-400 block whitespace-pre-wrap font-mono">
                  {error.message}
                </code>
              </div>
              {error.digest && (
                <p className="text-small text-red-600 dark:text-red-400">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}