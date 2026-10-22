import { useCart } from "../../context/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import Button from "../common/Button";

const CartSummary = () => {
  const { totalPrice, clearCart } = useCart();

  return (
    <aside className="mt-8 flex flex-wrap items-center justify-between gap-4">
      <Button variant="outline" onClick={clearCart}>
        Clear cart
      </Button>
      <p className="text-2xl font-bold">Total: {formatPrice(totalPrice)}</p>
    </aside>
  );
};

export default CartSummary;
