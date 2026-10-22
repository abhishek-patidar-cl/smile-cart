export const ELLIPSIS = "...";

const range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

/**
 * Builds the list shown in the pagination bar, e.g. [1, 2, 3, 4, 5, "...", 7].
 */
export const getPageRange = (currentPage, totalPages, siblings = 2) => {
  const maxVisible = siblings * 2 + 3; // window + first + last
  if (totalPages <= maxVisible + 1) {
    return range(1, totalPages);
  }

  if (currentPage <= siblings + 2) {
    return [...range(1, siblings * 2 + 1), ELLIPSIS, totalPages];
  }

  if (currentPage >= totalPages - siblings - 1) {
    return [1, ELLIPSIS, ...range(totalPages - siblings * 2, totalPages)];
  }

  return [
    1,
    ELLIPSIS,
    ...range(currentPage - siblings, currentPage + siblings),
    ELLIPSIS,
    totalPages,
  ];
};
