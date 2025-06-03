export const CountriesGrid = () => {
  return (
    <div className="countries-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-350 md:px-500 lg:px-1000">
      <article className="bg-white dark:bg-blue-900 rounded-lg shadow-md">
        {/* <img src="" alt="Country flag" /> */}
        <h2>Country Name</h2>
        <p>Population: </p>
        <p>Region:</p>
        <p>Capital:</p>
      </article>
    </div>
  );
};
