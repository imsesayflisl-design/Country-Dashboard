import { ExchangeRates } from '@/types';
import { formatCurrencyRate, getCurrencySymbol } from '@/lib/fetchCurrency';

interface CurrencyCardProps {
  currency: ExchangeRates | null;
  currencyCode?: string;
}

// Helper function to get currency name
function getCurrencyName(code: string): string {
  const nameMap: Record<string, string> = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'JPY': 'Japanese Yen',
    'CAD': 'Canadian Dollar',
    'AUD': 'Australian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'SEK': 'Swedish Krona',
    'NOK': 'Norwegian Krone',
    'DKK': 'Danish Krone',
    'INR': 'Indian Rupee',
    'BRL': 'Brazilian Real',
    'RUB': 'Russian Ruble',
    'KRW': 'South Korean Won',
    'SGD': 'Singapore Dollar',
    'HKD': 'Hong Kong Dollar',
    'NZD': 'New Zealand Dollar',
    'MXN': 'Mexican Peso',
    'ZAR': 'South African Rand'
  };
  return nameMap[code] || code;
}

// Helper function to simulate rate trends (in a real app, this would come from historical data)
function getRateTrend(rate: number): { direction: 'up' | 'down' | 'neutral'; percentage: number } {
  // Mock trend calculation for demo purposes
  const trend = Math.random() > 0.5 ? 'up' : Math.random() > 0.3 ? 'down' : 'neutral';
  const percentage = Math.random() * 2; // Random percentage change
  return { direction: trend as 'up' | 'down' | 'neutral', percentage };
}

export default function CurrencyCard({ currency, currencyCode }: CurrencyCardProps) {
  if (!currency) {
    return (
      <div className="card-primary p-6 h-full">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-600">
          <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <div>
            <h3 className="text-heading font-bold text-gray-900 dark:text-gray-100">
              Exchange Rates
            </h3>
            <p className="text-caption text-gray-600 dark:text-gray-400">
              Currency Exchange Data
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Exchange rate data unavailable
          </p>
          <p className="text-caption text-gray-500 dark:text-gray-500 mt-2">
            {currencyCode ? `Unable to fetch rates for ${currencyCode}` : 'Currency data not available'}
          </p>
        </div>
      </div>
    );
  }

  const { base, rates } = currency;
  // Get top 4 most common currencies for display
  const majorCurrencies = ['USD', 'EUR', 'GBP', 'JPY'];
  const displayRates = Object.entries(rates).filter(([code]) => majorCurrencies.includes(code)).slice(0, 4);

  return (
    <div className="card-primary p-6 h-full">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-600">
        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <div>
          <h3 className="text-heading font-bold text-gray-900 dark:text-gray-100">
            Exchange Rates
          </h3>
          <p className="text-caption text-gray-600 dark:text-gray-400">
            Live rates from {base}
          </p>
        </div>
      </div>

      {/* Base Currency Display */}
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <div className="text-center">
          <div className="text-subheading font-bold text-gray-900 dark:text-gray-100 mb-1">
            1 {base}
          </div>
          <div className="text-caption text-gray-600 dark:text-gray-400">
            {getCurrencySymbol(base)} • Base Currency
          </div>
        </div>
      </div>

      {/* Exchange Rates */}
      <div className="space-y-3 mb-6">
        {displayRates.map(([code, rate]) => {
          const trend = getRateTrend(rate);
          return (
            <div
              key={code}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg"
            >
              {/* Currency Info */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-600 flex items-center justify-center">
                  <span className="text-small font-bold text-gray-700 dark:text-gray-300">
                    {getCurrencySymbol(code)}
                  </span>
                </div>
                <div>
                  <div className="text-caption font-bold text-gray-900 dark:text-gray-100">
                    {code}
                  </div>
                  <div className="text-small text-gray-600 dark:text-gray-400">
                    {getCurrencyName(code)}
                  </div>
                </div>
              </div>

              {/* Rate and Trend */}
              <div className="text-right">
                <div className="flex items-center gap-2">
                  <div className="text-caption font-bold text-gray-900 dark:text-gray-100">
                    {rate.toFixed(4)}
                  </div>

                  {/* Trend Indicator */}
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-small font-medium
                                  ${trend.direction === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                                    trend.direction === 'down' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                                    'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'}`}>
                    {trend.direction === 'up' ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14l5-5 5 5" />
                      </svg>
                    ) : trend.direction === 'down' ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 10l-5 5-5-5" />
                      </svg>
                    ) : (
                      <div className="w-3 h-0.5 bg-current rounded-full"></div>
                    )}
                    <span>{trend.percentage.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-small text-gray-600 dark:text-gray-400">Live rates</span>
          </div>
          <span className="text-small text-gray-500 dark:text-gray-400">
            Frankfurter API
          </span>
        </div>
      </div>
    </div>
  );
}