import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useDebounce } from "../../hooks/useDebounce";
import { SEARCH_DEBOUNCE_MS } from "../../utils/constants";
import CartLink from "./CartLink";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(urlSearch);
  const debouncedSearch = useDebounce(searchInput, SEARCH_DEBOUNCE_MS);

  // Keep the input in sync when the URL changes elsewhere (e.g. clicking the logo).
  useEffect(() => {
    setSearchInput(urlSearch);
  }, [urlSearch]);

  // Push the debounced term into the URL; the product list reads it from there.
  useEffect(() => {
    if (debouncedSearch === urlSearch) return;

    if (pathname !== "/") {
      navigate(debouncedSearch ? `/?search=${encodeURIComponent(debouncedSearch)}` : "/");
      return;
    }

    const next = new URLSearchParams();
    if (debouncedSearch) next.set("search", debouncedSearch);
    setSearchParams(next); // resets page to 1
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  return (
    <header className="flex items-center justify-between gap-4 border-b-[3px] border-gray-900 px-6 py-5 md:px-12">
      <Link to="/" className="text-3xl font-bold tracking-tight md:text-4xl">
        Smile Cart
      </Link>
      <div className="flex flex-1 items-center justify-end gap-6">
        <SearchBar value={searchInput} onChange={setSearchInput} />
        <CartLink />
      </div>
    </header>
  );
};

export default Header;
