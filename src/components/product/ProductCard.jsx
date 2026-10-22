import { Link } from "react-router-dom";

import { formatPrice } from "../../utils/formatPrice";
import AddToCart from "./AddToCart";

const ProductCard = ({ product }) => (
  <article className="flex flex-col items-center rounded-2xl border border-gray-900 p-4 text-center">
    <Link to={`/products/${product.id}`} className="flex flex-1 flex-col items-center">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="h-56 w-56 object-contain"
      />
      <h2 className="mt-3 line-clamp-3 text-xl font-semibold leading-snug">{product.title}</h2>
    </Link>
    <p className="mb-3 mt-2 text-lg">{formatPrice(product.price)}</p>
    <AddToCart product={product} />
  </article>
);

export default ProductCard;
