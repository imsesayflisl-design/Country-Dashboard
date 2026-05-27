import { ExchangeRates } from '@/types';
import { formatCurrencyRate, getCurrencySymbol } from '@/lib/fetchCurrency';

interface CurrencyCardProps {
  currency: ExchangeRates | null;
  currencyCode?: string;
}

// Helper function to get currency flag emoji
function getCurrencyFlag(code: string): string {
  const flagMap: Record<string, string> = {
    'USD': '🇺🇸',
    'EUR': '🇪🇺',
    'GBP': '🇬🇧',
    'JPY': '🇯🇵',
    'CAD': '🇨🇦',
    'AUD': '🇦🇺',
    'CHF': '🇨🇭',
    'CNY': '🇨🇳',
    'SEK': '🇸🇪',
    'NOK': '🇳🇴',
    'DKK': '🇩🇰',
    'INR': '🇮🇳',
    'BRL': '🇧🇷',
    'RUB': '🇷🇺',
    'KRW': '🇰🇷',
    'SGD': '🇸🇬',
    'HKD': '🇭🇰',
    'NZD': '🇳🇿',
    'MXN': '🇲🇽',
    'ZAR': '🇿🇦'
  };
  return flagMap[code] || '💰';
}

// Helper function to simulate rate trends (in a real app, this would come from historical data)
function getRateTrend(rate: number): { direction: 'up' | 'down' | 'neutral'; percentage: number } {
  // Mock trend calculation for demo purposes
  const trend = Math.random() > 0.5 ? 'up' : Math.random() > 0.3 ? 'down' : 'neutral';
  const percentage = Math.random() * 5; // Random percentage change
  return { direction: trend as 'up' | 'down' | 'neutral', percentage };
}

export default function CurrencyCard({ currency, currencyCode }: CurrencyCardProps) {
  if (!currency) {
    return (
      <div className="card-enhanced rounded-2xl p-6 relative overflow-hidden group animate-slide-up">
        {/* Default Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-blue-100/20 dark:from-green-900/20 dark:to-blue-900/20"></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-xl text-white">💱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Exchange Rates
            </h3>
          </div>

          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-50">💸</div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              Exchange rate data unavailable
            </p>
            {currencyCode && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Unable to fetch rates for {currencyCode}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const { base, rates } = currency;

  return (
    <div className="card-enhanced rounded-2xl p-6 relative overflow-hidden group animate-slide-up">
      {/* Currency Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-blue-100/20 to-purple-100/20 dark:from-green-900/20 dark:via-blue-900/20 dark:to-purple-900/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

      {/* Header Section */}
      <div className="relative flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center shadow-lg">
            <span className="text-xl text-white">💱</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Exchange Rates
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Live rates from Frankfurter API
            </p>
          </div>
        </div>

        {/* Base Currency Display */}
        <div className="text-right">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getCurrencyFlag(base)}</span>
            <div>
              <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                1 {base}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {getCurrencySymbol(base)} Base
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Exchange Rates Grid */}
      <div className="space-y-4 relative">
        {Object.entries(rates).map(([code, rate]) => {
          const trend = getRateTrend(rate);
          return (
            <div
              key={code}
              className="flex items-center justify-between p-4 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-600/40 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300 group/rate"
            >
              {/* Currency Info */}
              <div className="flex items-center gap-4">
                {/* Flag and Symbol */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getCurrencyFlag(code)}</span>
                  <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                    {getCurrencySymbol(code)}
                  </div>
                </div>

                {/* Currency Code */}
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {code}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {code === 'USD' ? 'US Dollar' :
                     code === 'EUR' ? 'Euro' :
                     code === 'GBP' ? 'British Pound' :
                     'Currency'}
                  </div>
                </div>
              </div>

              {/* Rate Display */}
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {rate.toFixed(4)}
                  </div>

                  {/* Trend Indicator */}
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold
                                  ${trend.direction === 'up' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                                    trend.direction === 'down' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300' :
                                    'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                    <span>
                      {trend.direction === 'up' ? '↗' :
                       trend.direction === 'down' ? '↘' :
                       '→'}
                    </span>
                    {trend.percentage.toFixed(2)}%
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {formatCurrencyRate(rate, base, code)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison Chart Visual */}
      <div className="mt-6 relative">
        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Rate Comparison
        </h4>
        <div className="flex items-end justify-between h-16 bg-white/40 dark:bg-gray-800/40 rounded-xl p-3 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
          {Object.entries(rates).map(([code, rate]) => {
            const maxRate = Math.max(...Object.values(rates));
            const height = (rate / maxRate) * 100;
            return (
              <div key={code} className="flex flex-col items-center gap-1">
                <div
                  className={`w-8 rounded-t transition-all duration-500 group-hover:scale-110
                             ${code === 'USD' ? 'bg-blue-400' :
                               code === 'EUR' ? 'bg-purple-400' :
                               'bg-green-400'}`}
                  style={{ height: `${height}%`, minHeight: '8px' }}
                ></div>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {code}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-6 pt-4 border-t border-white/30 dark:border-gray-600/30 relative">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-gentle"></div>
            <span>Live rates • Updated daily</span>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            Frankfurter API
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}