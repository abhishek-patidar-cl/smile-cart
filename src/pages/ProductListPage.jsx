import { useSearchParams } from "react-router-dom";

import ErrorMessage from "../components/common/ErrorMessage";
import Pagination from "../components/common/Pagination";
import Spinner from "../components/common/Spinner";
import ProductList from "../components/product/ProductList";
import { useProducts } from "../hooks/useProducts";
import { PAGE_SIZE } from "../utils/constants";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") ?? "";
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const { data, isLoading, error } = useProducts({ page, searchTerm });

  const handlePageChange = (nextPage) => {
    const next = new URLSearchParams(searchParams);
    next.set("page", nextPage);
    setSearchParams(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error) return <ErrorMessage />;
  if (isLoading && !data) return <Spinner />;

  const totalPages = Math.ceil(data.total / PAGE_SIZE);

  return (
    <section className={isLoading ? "opacity-60 transition-opacity" : "transition-opacity"}>
      <ProductList products={data.products} />
      <div className="mt-10">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </section>
  );
};

export default ProductListPage;
