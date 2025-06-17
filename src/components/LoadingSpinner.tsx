interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner = ({
  message = "Loading",
}: LoadingSpinnerProps) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-blue-950 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-900 dark:text-white text-lg">{message}</p>
      </div>
    </div>
  );
};
