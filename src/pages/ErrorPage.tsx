import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
}

export const ErrorPage = ({
  title = "Oops! Something went wrong",
  message = "We couldn't load the data you requested",
  showRetry = true,
}: ErrorStateProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-blue-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
        {showRetry && (
          <Link
            to="/"
            className="inline-flex items-center px-400 gap-2 py-100 rounded-md bg-white text-gray-950 dark:bg-blue-900 dark:text-white mb-800 md:mb-700 shadow-md lg:mb-1000 cursor-pointer"
          >
            <ArrowLeft className="text-gray-950 dark:text-white" />
            Back
          </Link>
        )}
      </div>
    </div>
  );
};
