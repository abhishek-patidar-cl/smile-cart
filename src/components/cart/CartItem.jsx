import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button";
import QuantitySelector from "../product/QuantitySelector";

const CartItem = ({ item }) => {
  const { setQuantity, removeItem } = useCart();

  return (
    <li className="flex flex-wrap items-center gap-6 border-b border-gray-200 py-5">
      <img src={item.thumbnail} alt={item.title} className="h-24 w-24 object-contain" />

      <div className="min-w-[10rem] flex-1">
        <Link to={`/products/${item.id}`} className="text-lg font-semibold hover:underline">
          {item.title}
        </Link>
        <p className="text-gray-600">{formatPrice(item.price)} each</p>
      </div>

      <QuantitySelector
        quantity={item.quantity}
        max={item.stock}
        onChange={(next) => setQuantity(item, next)}
      />

      <p className="w-28 text-right text-lg font-semibold">
        {formatPrice(item.price * item.quantity)}
      </p>

      <Button variant="danger" className="px-3 py-1.5 text-sm" onClick={() => removeItem(item.id)}>
        Remove
      </Button>
    </li>
  );
};

export default CartItem;
