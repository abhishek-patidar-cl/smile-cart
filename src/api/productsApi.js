import { API_BASE_URL, PAGE_SIZE } from "../utils/constants";

const request = async (path, signal) => {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  return response.json();
};

const SELECTED_FIELDS = "id,title,price,thumbnail,stock";

/**
 * Returns { products, total } for a page of products, optionally filtered by a search term.
 */
export const fetchProducts = ({ page = 1, searchTerm = "", signal }) => {
  const params = new URLSearchParams({
    limit: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
    select: SELECTED_FIELDS,
  });

  const term = searchTerm.trim();
  if (term) params.set("q", term);

  return request(`/products${term ? "/search" : ""}?${params}`, signal);
};

export const fetchProductById = (id, signal) =>
  request(`/products/${id}`, signal);
