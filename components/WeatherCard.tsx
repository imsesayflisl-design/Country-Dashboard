import React from 'react';
import { Weather } from '@/types';
import { getWeatherDescription } from '@/lib/fetchWeather';

interface WeatherCardProps {
  weather: Weather | null;
  capital?: string;
}

// Helper function to get weather icon SVG
function getWeatherIcon(weatherCode: number): JSX.Element {
  if (weatherCode === 0 || weatherCode === 1) {
    return (
      <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    );
  }
  if (weatherCode >= 2 && weatherCode <= 3) {
    return (
      <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    );
  }
  if (weatherCode >= 51 && weatherCode <= 67) {
    return (
      <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1a4 4 0 014-4 4 4 0 014 4v1m0 6H8a2 2 0 01-2-2V9a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2z" />
      </svg>
    );
  }
  return (
    <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

export default function WeatherCard({ weather, capital }: WeatherCardProps) {
  if (!weather) {
    return (
      <div className="card-primary p-6 h-full">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-600">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <div>
            <h3 className="text-heading font-bold text-gray-900 dark:text-gray-100">
              Weather Data
            </h3>
            <p className="text-caption text-gray-600 dark:text-gray-400">
              {capital ? `${capital} Weather` : 'Weather Information'}
            </p>
          </div>
        </div>

        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <p className="text-body text-gray-600 dark:text-gray-400">
            Weather data unavailable
          </p>
          <p className="text-caption text-gray-500 dark:text-gray-500 mt-2">
            Unable to fetch current weather conditions
          </p>
        </div>
      </div>
    );
  }

  const { current_weather } = weather;
  const weatherInfo = getWeatherDescription(current_weather.weathercode);

  return (
    <div className="card-primary p-6 h-full">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-600">
        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <div>
          <h3 className="text-heading font-bold text-gray-900 dark:text-gray-100">
            Current Weather
          </h3>
          <p className="text-caption text-gray-600 dark:text-gray-400">
            {capital ? `${capital}` : 'Weather Information'}
          </p>
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="text-center mb-6">
        {/* Weather Icon */}
        <div className="flex justify-center mb-4">
          {getWeatherIcon(current_weather.weathercode)}
        </div>

        {/* Temperature */}
        <div className="text-display font-bold text-gray-900 dark:text-gray-100 mb-2">
          {Math.round(current_weather.temperature)}°C
        </div>

        <div className="text-subheading font-medium text-gray-700 dark:text-gray-300 mb-4">
          {weatherInfo.description}
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-caption font-medium">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          Live Data
        </div>
      </div>

      {/* Weather Details */}
      <div className="space-y-3">
        {/* Wind Speed */}
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h1a1 1 0 011 1v2M7 4H5a2 2 0 00-2 2v1a2 2 0 002 2h2M7 4h8M15 4V2a1 1 0 011-1h1a1 1 0 011 1v2M15 4h2a2 2 0 012 2v1a2 2 0 01-2 2h-2m-8 0v6h8V9M7 15l2-2m0 0l2 2m-2-2v6" />
              </svg>
            </div>
            <span className="text-caption font-medium text-gray-700 dark:text-gray-300">
              Wind Speed
            </span>
          </div>
          <span className="text-caption font-bold text-gray-900 dark:text-gray-100">
            {current_weather.windspeed} km/h
          </span>
        </div>

        {/* Wind Direction */}
        <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-caption font-medium text-gray-700 dark:text-gray-300">
              Wind Direction
            </span>
          </div>
          <span className="text-caption font-bold text-gray-900 dark:text-gray-100">
            {current_weather.winddirection}°
          </span>
        </div>
      </div>

      {/* Data Source */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
        <p className="text-small text-gray-500 dark:text-gray-400 text-center">
          Powered by Open-Meteo API
        </p>
      </div>
    </div>
  );
}