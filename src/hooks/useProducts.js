import { fetchProducts } from "../api/productsApi";
import { useFetch } from "./useFetch";

export const useProducts = ({ page, searchTerm }) =>
  useFetch((signal) => fetchProducts({ page, searchTerm, signal }), [page, searchTerm]);
