import { useCart } from "../../context/CartContext";
import Button from "../common/Button";
import QuantitySelector from "./QuantitySelector";

/**
 * Shows "Add to cart" until the product is in the cart, then a quantity selector.
 * `product` needs: id, title, price, thumbnail, stock.
 */
const AddToCart = ({ product }) => {
  const { getQuantity, setQuantity } = useCart();
  const quantity = getQuantity(product.id);

  if (product.stock === 0) {
    return <p className="font-medium text-red-600">Out of stock</p>;
  }

  if (quantity === 0) {
    return <Button onClick={() => setQuantity(product, 1)}>Add to cart</Button>;
  }

  return (
    <QuantitySelector
      quantity={quantity}
      max={product.stock}
      onChange={(next) => setQuantity(product, next)}
    />
  );
};

export default AddToCart;
