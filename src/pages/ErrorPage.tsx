import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ErrorPage = () => {
  return (
    <div className="max-w-[1272px] mx-auto">
      <div className="flex flex-col py-300 px-200 gap-2 items-center md:px-500 lg:px-0">
        <h1 className="text-4xl font-bold my-4 text-red-600">
          Page Not Found!!!
        </h1>
        <p className="text-md text-gray-700 mb-8 dark:text-white">
          The page you are looking for does not exist
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-400 gap-2 py-100 rounded-md bg-white text-gray-950 dark:bg-blue-900 dark:text-white mb-800 md:mb-700 shadow-md lg:mb-1000 cursor-pointer"
        >
          <ArrowLeft className="text-gray-950 dark:text-white" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
