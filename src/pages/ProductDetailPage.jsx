import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import ErrorMessage from "../components/common/ErrorMessage";
import Spinner from "../components/common/Spinner";
import AddToCart from "../components/product/AddToCart";
import { useProduct } from "../hooks/useProduct";
import { formatPrice } from "../utils/formatPrice";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProduct(productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message="We couldn't find that product." />;

  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div>
      <Link to="/" className="text-indigo-600 hover:underline">
        &larr; Back to products
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <img
            src={images[selectedImage]}
            alt={product.title}
            className="h-96 w-full rounded-2xl border border-gray-200 object-contain"
          />
          {images.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`h-20 w-20 shrink-0 rounded-lg border-2 ${
                    index === selectedImage ? "border-indigo-600" : "border-gray-200"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl">{formatPrice(product.price)}</p>
          <p className="text-gray-700">{product.description}</p>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-gray-700">
            <dt className="font-semibold">Brand</dt>
            <dd>{product.brand ?? "-"}</dd>
            <dt className="font-semibold">Category</dt>
            <dd className="capitalize">{product.category}</dd>
            <dt className="font-semibold">Rating</dt>
            <dd>{product.rating} / 5</dd>
            <dt className="font-semibold">In stock</dt>
            <dd>{product.stock}</dd>
          </dl>
          <div className="pt-2">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
