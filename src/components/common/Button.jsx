const VARIANTS = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  outline: "border border-gray-900 bg-white text-gray-900 hover:bg-gray-100",
  danger: "text-red-600 hover:bg-red-50",
};

const Button = ({ variant = "primary", className = "", ...props }) => (
  <button
    type="button"
    className={`rounded-md px-6 py-2.5 text-base font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:cursor-not-allowed disabled:opacity-50 ${VARIANTS[variant]} ${className}`}
    {...props}
  />
);

export default Button;
