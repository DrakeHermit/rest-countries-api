import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const CountryPage = () => {
  return (
    <div className="py-500 px-350 lg:py-1000 md:px-500 lg:px-1000">
      <Link
        to="/"
        className="inline-flex items-center px-400 gap-2 py-100 rounded-md text-blue-500 bg-blue-900 dark:text-white mb-800 md:mb-700 lg:mb-1000 cursor-pointer"
      >
        <ArrowLeft />
        Back
      </Link>
      <p>asddsadsa</p>
    </div>
  );
};
