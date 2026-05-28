import { ExchangeRates } from '@/types';

export async function fetchCurrency(currencyCode: string): Promise<ExchangeRates | null> {
  try {
    const response = await fetch(
      `https://api.frankfurter.app/latest?from=${currencyCode}&to=USD,EUR,GBP,JPY`
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    return null;
  }
}

// Helper function to format currency display
export function formatCurrencyRate(rate: number, fromCurrency: string, toCurrency: string): string {
  return `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
}

// Helper function to get currency symbol
export function getCurrencySymbol(code: string): string {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    CNY: '¥',
    INR: '₹',
    NGN: '₦',
    CAD: 'C$',
    AUD: 'A$',
    CHF: 'Fr',
    SEK: 'kr',
    NOK: 'kr',
    DKK: 'kr'
  };

  return symbols[code] || code;
}