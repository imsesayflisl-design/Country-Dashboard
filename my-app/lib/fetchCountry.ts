import { Country } from '@/types';

export async function fetchCountry(name: string): Promise<Country | null> {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}`
    );

    if (!response.ok) {
      return null;
    }

    const countries = await response.json();

    // Return the first match from the array
    return countries[0] || null;
  } catch (error) {
    console.error('Error fetching country data:', error);
    return null;
  }
}