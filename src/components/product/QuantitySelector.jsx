const buttonClasses =
  "flex h-full w-10 items-center justify-center text-lg hover:bg-gray-100 focus:outline-none focus-visible:bg-indigo-100 disabled:cursor-not-allowed disabled:text-gray-300";

const QuantitySelector = ({ quantity, max, onChange }) => (
  <div className="inline-flex h-11 items-stretch overflow-hidden rounded-md border border-gray-900">
    <button type="button" className={buttonClasses} onClick={() => onChange(quantity - 1)} aria-label="Decrease quantity">
      -
    </button>
    <span className="flex w-10 items-center justify-center text-lg" aria-live="polite">
      {quantity}
    </span>
    <button
      type="button"
      className={buttonClasses}
      onClick={() => onChange(quantity + 1)}
      disabled={max !== undefined && quantity >= max}
      aria-label="Increase quantity"
    >
      +
    </button>
  </div>
);

export default QuantitySelector;
