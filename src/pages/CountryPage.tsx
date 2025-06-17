import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { Country } from "../lib/api";
import { fetchCountryByName } from "../lib/api";

export const CountryPage = () => {
  const { countryName } = useParams<{ countryName: string }>();

  const { data: country } = useSuspenseQuery<Country>({
    queryKey: ["country", countryName],
    queryFn: () => fetchCountryByName(countryName!),
  });

  return (
    <div className="py-500 px-350 md:px-500 lg:py-1000 lg:px-0 lg:max-w-[1272px] mx-auto">
      <Link
        to="/"
        className="inline-flex items-center px-400 gap-2 py-100 rounded-md bg-white text-gray-950 dark:bg-blue-900 dark:text-white mb-800 md:mb-700 shadow-md lg:mb-1000 cursor-pointer"
      >
        <ArrowLeft className="text-gray-950 dark:text-white" />
        Back
      </Link>
      <div className="flex flex-col lg:flex-row lg:items-center gap-500 lg:gap-0 md:gap-700">
        <div className="lg:w-1/2">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="object-cover w-full lg:w-[560px] lg:min-h-[401px] shadow-md rounded-xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl mb-400 font-bold">{country.name.common}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="space-y-2">
              <p className="font-semibold">
                Native Name:{" "}
                <span className="font-normal">
                  {country.name.nativeName
                    ? Object.values(country.name.nativeName)
                        .map((value) => value.common)
                        .join(", ")
                    : country.name.common}
                </span>{" "}
              </p>
              <p className="font-semibold">
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="font-semibold">
                Region: <span className="font-normal">{country.region}</span>
              </p>
              <p className="font-semibold">
                Sub Region:
                <span className="font-normal"> {country.subregion}</span>
              </p>
              <p className="font-semibold">
                Capital:
                <span className="font-normal"> {country.capital?.[0]}</span>
              </p>
            </div>
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
  );
};
