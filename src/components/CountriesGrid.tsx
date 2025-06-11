import { Link } from "react-router-dom";
import type { Country } from "../lib/api";

interface CountriesGridProps {
  data: Country[];
}

export const CountriesGrid = ({ data }: CountriesGridProps) => {
  return (
    <div className="countries-grid grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 font gap-900 px-350 md:px-500 lg:px-1000">
      {data.map((country) => (
        <article
          key={country.name.common}
          className="bg-white dark:bg-blue-900 rounded-lg shadow-md"
        >
          <Link to={`/country/${country.name.common.toLowerCase()}`}>
            <img
              className="w-full h-48 object-center rounded-t-sm shadow-md"
              src={country.flags.png}
              alt={country.flags.alt || `${country.name.common} flag`}
            />
          </Link>
          <div className="px-400 pt-300 pb-600">
            <h2 className="mb-200 text-lg font-bold">{country.name.common}</h2>
            <p className="mb-2 font-bold text-sm">
              Population:{" "}
              <span className="font-normal">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="mb-2 font-bold text-sm">
              Region: <span className="font-normal">{country.region}</span>
            </p>
            <p className="mb-2 font-bold text-sm">
              Capital:{" "}
              <span className="font-normal">
                {country.capital?.[0] || "N/A"}
              </span>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};
