import { getPageRange, ELLIPSIS } from "../../utils/getPageRange";
import { ChevronIcon } from "./Icons";

const arrowClasses =
  "flex h-9 w-9 items-center justify-center rounded text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-end gap-1" aria-label="Pagination">
      <button
        type="button"
        className={arrowClasses}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronIcon direction="left" />
      </button>

      {getPageRange(currentPage, totalPages).map((page, index) =>
        page === ELLIPSIS ? (
          <span key={`ellipsis-${index}`} className="w-9 text-center text-gray-500">
            {ELLIPSIS}
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={`h-9 w-9 rounded text-lg font-medium ${
              page === currentPage
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        type="button"
        className={arrowClasses}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronIcon />
      </button>
    </nav>
  );
};

export default Pagination;
