import { queryClient } from "./queryClient";
import { fetchAllCountries, fetchCountryByName } from "./api";
import type { LoaderFunctionArgs } from "react-router-dom";

export const allCountriesLoader = async () => {
  await queryClient.prefetchQuery({
    queryKey: ["countries", 'all'],
    queryFn: fetchAllCountries,
  });
  return null
};

export const countryLoader = async ({ params }: LoaderFunctionArgs) => {
  const countryName = params.countryName as string;

  await queryClient.prefetchQuery({
    queryKey: ["country", countryName],
    queryFn: () => fetchCountryByName(countryName),
  });
  return null;
};