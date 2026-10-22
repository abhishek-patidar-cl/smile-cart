const Spinner = ({ label = "Loading..." }) => (
  <div className="flex h-64 items-center justify-center" role="status" aria-live="polite">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600" />
    <span className="sr-only">{label}</span>
  </div>
);

export default Spinner;
