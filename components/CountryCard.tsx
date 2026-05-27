import { Country } from '@/types';
import Image from 'next/image';

interface CountryCardProps {
  country: Country;
}

// Helper function to determine region class based on country region
function getRegionClass(region: string): string {
  const regionMap: Record<string, string> = {
    'Europe': 'region-europe',
    'Asia': 'region-asia',
    'Africa': 'region-africa',
    'Americas': 'region-americas',
    'North America': 'region-americas',
    'South America': 'region-americas',
    'Oceania': 'region-oceania',
    'Antarctica': 'region-default'
  };
  return regionMap[region] || 'region-default';
}

// Helper function to get region icon
function getRegionIcon(region: string): string {
  const iconMap: Record<string, string> = {
    'Europe': '🇪🇺',
    'Asia': '🌏',
    'Africa': '🌍',
    'Americas': '🌎',
    'North America': '🌎',
    'South America': '🌎',
    'Oceania': '🏝️',
    'Antarctica': '🧊'
  };
  return iconMap[region] || '🌐';
}

export default function CountryCard({ country }: CountryCardProps) {
  // Extract first language and first currency for display
  const primaryLanguage = country.languages ? Object.values(country.languages)[0] : 'N/A';
  const primaryCurrency = country.currencies
    ? Object.entries(country.currencies)[0]
    : null;
  const capital = country.capital?.[0] || 'N/A';

  // Get region styling
  const regionClass = getRegionClass(country.region);
  const regionIcon = getRegionIcon(country.region);

  return (
    <div className="card-enhanced rounded-2xl p-6 relative overflow-hidden group animate-slide-up">
      {/* Region-based Background Accent */}
      <div className={`absolute inset-0 ${regionClass} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>

      {/* Header Section */}
      <div className="relative flex items-start gap-6 mb-6">
        {/* Enhanced Flag Display */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-14 relative rounded-lg overflow-hidden shadow-lg ring-2 ring-white/50 dark:ring-gray-700/50">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="80px"
            />
          </div>
          {/* Flag Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        {/* Country Name Section */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3 mb-2">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {country.name.common}
            </h2>
            <span className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity">
              {regionIcon}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {country.name.official}
          </p>

          {/* Region Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mt-3 text-xs font-semibold
                           ${regionClass === 'region-europe' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                             regionClass === 'region-asia' ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300' :
                             regionClass === 'region-africa' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                             regionClass === 'region-americas' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                             regionClass === 'region-oceania' ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300' :
                             'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}>
            <span className="text-sm">{regionIcon}</span>
            {country.subregion || country.region}
          </div>
        </div>
      </div>

      {/* Information Grid */}
      <div className="space-y-4 relative">
        {/* Capital City */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-sm">🏛️</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Capital
            </span>
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
            {capital}
          </span>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <span className="text-sm">🗣️</span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Language
            </span>
          </div>
          <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
            {primaryLanguage}
          </span>
        </div>

        {/* Currency */}
        {primaryCurrency && (
          <div className="flex items-center justify-between p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <span className="text-sm">💰</span>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Currency
              </span>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-gray-900 dark:text-gray-100">
                {primaryCurrency[1].name}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {primaryCurrency[1].symbol} ({primaryCurrency[0]})
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}