import { fetchProductById } from "../api/productsApi";
import { useFetch } from "./useFetch";

export const useProduct = (productId) =>
  useFetch((signal) => fetchProductById(productId, signal), [productId]);
