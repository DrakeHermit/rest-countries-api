export interface Country {
  name: { 
    common: string; 
    official: string; 
  };
  population: number;
  capital?: string[];
  region: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  [key: string]: any;
}

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  const countries = await response.json();
  return countries;
};

export const fetchCountryByName = async (name: string): Promise<Country> => {
  console.log('Fetching country:', name);
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const countries = await response.json();
  console.log('Fetched country data:', countries[0]);
  return countries[0];
};