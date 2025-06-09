import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Country } from "../lib/api";
import { fetchCountryByName } from "../lib/api";

export const CountryPage = () => {
  const { countryName } = useParams<{ countryName: string }>();

  // Get the prefetched data from your countryLoader
  const { data: country } = useSuspenseQuery<Country>({
    queryKey: ["country", countryName],
    queryFn: () => fetchCountryByName(countryName!),
  });

  return (
    <div className="lg:max-w-[1600px] mx-auto overflow-hidden">
      <div className="py-500 px-350 lg:py-1000 md:px-500 lg:px-1000">
        <Link
          to="/"
          className="inline-flex items-center px-400 gap-2 py-100 rounded-md text-blue-500 bg-blue-900 dark:text-white mb-800 md:mb-700 lg:mb-1000 cursor-pointer"
        >
          <ArrowLeft />
          Back
        </Link>
        <div className="flex flex-col lg:flex-row lg:items-center gap-500 lg:gap-0 md:gap-700">
          {/* Flag */}
          <div className="lg:w-1/2">
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className="object-cover w-full lg:w-[560px] lg:max-h-[400px] rounded-xl"
            />
          </div>
          {/* Country Info */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl mb-400 font-bold">{country.name.common}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Left Column */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">
                    Native Name:{" "}
                    {country.name.nativeName
                      ? Object.values(country.name.nativeName)
                          .map((value) => value.common)
                          .join(", ")
                      : country.name.common}
                  </span>{" "}
                  {/* your native name logic */}
                </p>
                <p className="font-semibold">
                  Population: <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region:</span>{" "}
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital:</span>{" "}
                  {country.capital?.[0]}
                </p>
              </div>
              {/* Right Column */}
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {country.tld ? country.tld.join(", ") : "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Currencies:</span>{" "}
                  {country.currencies
                    ? Object.values(country.currencies)
                        .map((currency) => `${currency.name}`)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Languages:</span>{" "}
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </p>
              </div>
            </div>
            {/* Border Countries */}
            <div>
              <span className="font-semibold">Border Countries:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {country.borders?.map((border) => (
                  <span
                    key={border}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded text-sm"
                  >
                    {border}
                  </span>
                )) || <span>None</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
