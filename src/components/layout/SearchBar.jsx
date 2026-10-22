import { SearchIcon } from "../common/Icons";

const SearchBar = ({ value, onChange }) => (
  <label className="relative block w-full max-w-sm">
    <span className="sr-only">Search products</span>
    <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
    <input
      type="search"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Search Products"
      className="w-full rounded-md border border-gray-300 py-2.5 pl-10 pr-3 text-base placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
    />
  </label>
);

export default SearchBar;
