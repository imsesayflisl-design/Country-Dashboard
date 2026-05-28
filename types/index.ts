// TypeScript interfaces for Country Dashboard APIs

// REST Countries API response structure
export interface Country {
  name: {
    common: string;
    official: string;
  };
  cca2: string;        // ISO 3166-1 alpha-2 code (e.g., "US")
  cca3: string;        // ISO 3166-1 alpha-3 code (e.g., "USA")
  flag: string;        // Unicode flag emoji (e.g., "🇺🇸")
  capital?: string[];
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  latlng?: [number, number];
  region: string;
  subregion?: string;
  population?: number;
  area?: number;
  timezones?: string[];
}

// Open-Meteo API response structure
export interface Weather {
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;  // Wind direction in degrees (0-360)
    weathercode: number;
  };
}

// Frankfurter API response structure
export interface ExchangeRates {
  base: string;
  rates: {
    USD: number;
    EUR: number;
    GBP: number;
    JPY: number;
  };
}

// Weather code to description mapping for Open-Meteo
export interface WeatherDescription {
  code: number;
  description: string;
  icon: string;
}