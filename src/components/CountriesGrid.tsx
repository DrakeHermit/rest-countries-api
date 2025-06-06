import type { Country } from "../lib/api";

interface CountriesGridProps {
  data: Country[];
}

export const CountriesGrid = ({ data }: CountriesGridProps) => {
  return (
    <div className="countries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-350 md:px-500 lg:px-1000">
      {data.map((country) => (
        <article
          key={country.name.common}
          className="bg-white dark:bg-blue-900 rounded-lg shadow-md"
        >
          {/* <img src={country.flags.png} alt={country.flags.alt || `${country.name.common} flag`} /> */}
          <h2>{country.name.common}</h2>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital?.[0] || "N/A"}</p>
        </article>
      ))}
    </div>
  );
};
