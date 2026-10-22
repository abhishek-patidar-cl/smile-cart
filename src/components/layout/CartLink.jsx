import { Link } from "react-router-dom";

import { useCart } from "../../context/CartContext";
import { CartIcon } from "../common/Icons";

const CartLink = () => {
  const { itemCount } = useCart();

  return (
    <Link to="/cart" className="relative inline-block p-1" aria-label={`Cart, ${itemCount} items`}>
      <CartIcon />
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 bg-white text-sm font-medium">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartLink;
