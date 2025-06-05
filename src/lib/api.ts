interface Country {
  name: { common: string; official: string };
  population: number;
  capital: string[];
  region: string;
}

export const fetchAllCountries = async (): Promise<Country[]> => {
  console.log('Fetching all countries...');
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  console.log('Fetched countries count:', countries.length);
  return countries;
};

export const fetchCountryByName = async (name: string): Promise<Country> => {
  console.log('Fetching country:', name);
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const countries = await response.json();
  console.log('Fetched country data:', countries[0]);
  return countries[0];
};