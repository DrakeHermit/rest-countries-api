export interface Country {
  name: { 
    common: string; 
    official: string;
    nativeName?: { [key: string]: { official: string; common: string } };
  };
  population: number;
  capital?: string[];
  region: string;
  subregion?: string; 
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  tld?: string[]; 
  currencies?: { [key: string]: { name: string; symbol: string } };
  languages?: { [key: string]: string };
  borders?: string[];
}

export const fetchAllCountries = async (): Promise<Country[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,subregion,tld,currencies,languages,borders');
  const countries = await response.json();
  return countries;
};

export const fetchCountryByName = async (name: string): Promise<Country> => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
  const countries = await response.json();
  console.log(countries[0])
  return countries[0];
};