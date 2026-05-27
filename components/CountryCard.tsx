import { Country } from '@/types';
import Image from 'next/image';

interface CountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: CountryCardProps) {
  // Extract first language and first currency for display
  const primaryLanguage = country.languages ? Object.values(country.languages)[0] : 'N/A';
  const primaryCurrency = country.currencies
    ? Object.entries(country.currencies)[0]
    : null;
  const capital = country.capital?.[0] || 'N/A';

  return (
    <div className="card-primary p-6 h-full">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-600">
        {/* Professional Flag Display */}
        <div className="flex-shrink-0">
          <div className="w-16 h-12 relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 shadow-sm">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
        </div>

        {/* Country Name Section */}
        <div className="flex-1 min-w-0">
          <h2 className="text-heading font-bold text-gray-900 dark:text-gray-100 mb-1 leading-tight">
            {country.name.common}
          </h2>
          <p className="text-caption text-gray-600 dark:text-gray-400 mb-2">
            {country.name.official}
          </p>

          {/* Region Badge */}
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-small font-medium">
            {country.subregion || country.region}
          </span>
        </div>
      </div>

      {/* Information Grid */}
      <div className="space-y-4">
        {/* Capital City */}
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-caption font-medium text-gray-700 dark:text-gray-300">
              Capital City
            </span>
          </div>
          <span className="text-caption font-bold text-gray-900 dark:text-gray-100">
            {capital}
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <span className="text-caption font-medium text-gray-700 dark:text-gray-300">
              Primary Language
            </span>
          </div>
          <span className="text-caption font-bold text-gray-900 dark:text-gray-100">
            {primaryLanguage}
          </span>
        </div>

        {/* Currency */}
        {primaryCurrency && (
          <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <span className="text-caption font-medium text-gray-700 dark:text-gray-300">
                Currency
              </span>
            </div>
            <div className="text-right">
              <div className="text-caption font-bold text-gray-900 dark:text-gray-100">
                {primaryCurrency[1].name}
              </div>
              <div className="text-small text-gray-600 dark:text-gray-400">
                {primaryCurrency[1].symbol} ({primaryCurrency[0]})
              </div>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
          <div className="text-center">
            <div className="text-subheading font-bold text-gray-900 dark:text-gray-100">
              {country.cca2}
            </div>
            <div className="text-small text-gray-600 dark:text-gray-400">ISO Code</div>
          </div>
          <div className="text-center">
            <div className="text-subheading font-bold text-gray-900 dark:text-gray-100">
              {country.cca3}
            </div>
            <div className="text-small text-gray-600 dark:text-gray-400">ISO3 Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}