const ErrorMessage = ({ message = "Something went wrong. Please try again." }) => (
  <div className="mx-auto my-16 max-w-md rounded-lg border border-red-200 bg-red-50 p-6 text-center text-red-700" role="alert">
    {message}
  </div>
);

export default ErrorMessage;
