import { Weather } from '@/types';
import { getWeatherDescription } from '@/lib/fetchWeather';

interface WeatherCardProps {
  weather: Weather | null;
  capital?: string;
}

// Helper function to get weather condition class
function getWeatherConditionClass(weatherCode: number): string {
  if (weatherCode === 0 || weatherCode === 1) return 'weather-sunny';
  if (weatherCode >= 2 && weatherCode <= 3) return 'weather-cloudy';
  if (weatherCode >= 51 && weatherCode <= 67) return 'weather-rainy';
  if (weatherCode >= 71 && weatherCode <= 77) return 'weather-snowy';
  if (weatherCode >= 95) return 'weather-stormy';
  return 'weather-cloudy';
}

// Helper function to get temperature color
function getTemperatureColor(temp: number): string {
  if (temp >= 30) return 'text-red-500 dark:text-red-400';
  if (temp >= 20) return 'text-orange-500 dark:text-orange-400';
  if (temp >= 10) return 'text-yellow-500 dark:text-yellow-400';
  if (temp >= 0) return 'text-blue-500 dark:text-blue-400';
  return 'text-indigo-500 dark:text-indigo-400';
}

export default function WeatherCard({ weather, capital }: WeatherCardProps) {
  if (!weather) {
    return (
      <div className="card-enhanced rounded-2xl p-6 relative overflow-hidden group animate-slide-up">
        {/* Default Weather Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-gray-300/20 dark:from-gray-800/20 dark:to-gray-900/20"></div>

        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <span className="text-xl">🌤️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Weather{capital && ` in ${capital}`}
            </h3>
          </div>

          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-50">☁️</div>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              Weather data unavailable
            </p>
            {capital && (
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                Unable to fetch weather for {capital}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const { current_weather } = weather;
  const weatherInfo = getWeatherDescription(current_weather.weathercode);
  const weatherClass = getWeatherConditionClass(current_weather.weathercode);
  const tempColor = getTemperatureColor(current_weather.temperature);

  return (
    <div className="card-enhanced rounded-2xl p-6 relative overflow-hidden group animate-slide-up">
      {/* Weather Condition Background */}
      <div className={`absolute inset-0 ${weatherClass} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>

      {/* Header Section */}
      <div className="relative flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30 dark:ring-gray-600/30">
          <span className="text-xl">{weatherInfo.icon}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Weather
          </h3>
          {capital && (
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              in {capital}
            </p>
          )}
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="relative text-center mb-8">
        {/* Large Weather Icon */}
        <div className="text-8xl mb-4 animate-float">
          {weatherInfo.icon}
        </div>

        {/* Temperature Display */}
        <div className={`text-5xl font-bold mb-2 ${tempColor}`}>
          {Math.round(current_weather.temperature)}°
        </div>

        <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
          {weatherInfo.description}
        </div>

        {/* Temperature Scale Indicator */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30">
            <span className="text-xs text-gray-600 dark:text-gray-400">°C</span>
            <div className="w-16 h-2 bg-gradient-to-r from-blue-400 via-green-400 via-yellow-400 to-red-400 rounded-full relative">
              <div
                className="absolute w-3 h-3 bg-white rounded-full border-2 border-gray-400 -top-0.5 transform -translate-x-1.5"
                style={{
                  left: `${Math.max(0, Math.min(100, ((current_weather.temperature + 20) / 60) * 100))}%`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-4 relative">
        {/* Wind Speed */}
        <div className="p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-center group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 transition-all duration-300">
          <div className="text-2xl mb-2">💨</div>
          <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {current_weather.windspeed}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            km/h
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Wind Speed
          </div>
        </div>

        {/* Feels Like Temperature */}
        <div className="p-4 rounded-xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 text-center group-hover:bg-white/60 dark:group-hover:bg-gray-700/60 transition-all duration-300">
          <div className="text-2xl mb-2">🌡️</div>
          <div className={`text-xl font-bold ${tempColor}`}>
            {Math.round(current_weather.temperature)}°
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
            Celsius
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
            Temperature
          </div>
        </div>
      </div>

      {/* Weather Condition Badge */}
      <div className="mt-6 relative">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                        ${weatherClass === 'weather-sunny' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200' :
                          weatherClass === 'weather-cloudy' ? 'bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200' :
                          weatherClass === 'weather-rainy' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200' :
                          weatherClass === 'weather-snowy' ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200' :
                          'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'}`}>
          <span className="text-lg">{weatherInfo.icon}</span>
          <span>Current: {weatherInfo.description}</span>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 pointer-events-none
                      ${weatherClass === 'weather-sunny' ? 'bg-gradient-to-br from-yellow-400/20 via-orange-400/20 to-red-400/20' :
                        weatherClass === 'weather-rainy' ? 'bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-teal-400/20' :
                        weatherClass === 'weather-snowy' ? 'bg-gradient-to-br from-blue-200/20 via-indigo-200/20 to-purple-200/20' :
                        'bg-gradient-to-br from-gray-400/20 via-slate-400/20 to-zinc-400/20'}`}>
      </div>
    </div>
  );
}