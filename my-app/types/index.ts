// TypeScript interfaces for Country Dashboard APIs

// REST Countries API response structure
export interface Country {
  name: {
    common: string;
    official: string;
  };
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
  };
}

// Weather code to description mapping for Open-Meteo
export interface WeatherDescription {
  code: number;
  description: string;
  icon: string;
}