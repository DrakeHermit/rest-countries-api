import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export const CountryPage = () => {

  return (
    <div className="lg:mt-1000">
      <Link to="/" className="inline-flex items-center px-400 gap-2 py-100 rounded-md text-blue-500 bg-blue-900 dark:text-white mb-4 cursor-pointer">
        <ArrowLeft />
        Back
      </Link>
      <p>asddsadsa</p>
    </div>
  )
}