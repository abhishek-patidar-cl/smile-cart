import { Link } from "react-router-dom";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Your cart is empty</h1>
        <Link to="/" className="mt-4 inline-block text-indigo-600 hover:underline">
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <section>
      <h1 className="mb-4 text-3xl font-bold">Your cart</h1>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <CartSummary />
    </section>
  );
};

export default CartPage;
