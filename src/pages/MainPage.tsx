import { useState } from "react";
import { CountriesGrid } from "../components/CountriesGrid";
import RegionFilter from "../components/RegionFilter";
import { SearchInput } from "../components/SearchInput";
import { useOutletContext } from "react-router";
import type { Country } from "../lib/api";

interface OutletContext {
  countries: Country[];
}

export const MainPage = () => {
  const { countries } = useOutletContext<OutletContext>();
  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      !searchTerm ||
      country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase());
    const matchesRegion = !regionFilter || country.region === regionFilter;
    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <div className="max-w-[1272px] mx-auto">
        <div className="flex flex-col py-300 px-200 gap-2 mb-400 md:flex-row md:justify-between md:items-center md:px-500 lg:px-0">
          <div className="w-full md:flex-1 md:max-w-md mb-500 md:mb-0">
            <SearchInput
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />
          </div>
          <div className="w-1/2 md:w-60 md:ml-auto lg:w-96">
            <RegionFilter
              regionFilter={regionFilter}
              onFilterChange={setRegionFilter}
            />
          </div>
        </div>
        <CountriesGrid data={filteredCountries} />
      </div>
    </>
  );
};
