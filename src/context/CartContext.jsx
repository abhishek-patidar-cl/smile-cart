import { createContext, useContext, useEffect, useMemo, useReducer } from "react";

import { CART_STORAGE_KEY } from "../utils/constants";

const CartContext = createContext(null);

/* ---------- reducer ----------
 * state shape: { [productId]: { id, title, price, thumbnail, stock, quantity } }
 */
const ACTIONS = {
  SET_QUANTITY: "SET_QUANTITY",
  REMOVE: "REMOVE",
  CLEAR: "CLEAR",
};

const withoutKey = (state, key) => {
  const next = { ...state };
  delete next[key];
  return next;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_QUANTITY: {
      const { product, quantity } = action.payload;
      if (quantity <= 0) return withoutKey(state, product.id);

      const capped = product.stock ? Math.min(quantity, product.stock) : quantity;
      return {
        ...state,
        [product.id]: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          stock: product.stock,
          quantity: capped,
        },
      };
    }
    case ACTIONS.REMOVE:
      return withoutKey(state, action.payload);
    case ACTIONS.CLEAR:
      return {};
    default:
      return state;
  }
};

const loadInitialCart = () => {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) ?? {};
  } catch {
    return {};
  }
};

/* ---------- provider ---------- */
export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, undefined, loadInitialCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const value = useMemo(() => {
    const items = Object.values(cart);
    return {
      items,
      // Number of distinct products, shown on the header badge.
      itemCount: items.length,
      totalPrice: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      getQuantity: (productId) => cart[productId]?.quantity ?? 0,
      setQuantity: (product, quantity) =>
        dispatch({ type: ACTIONS.SET_QUANTITY, payload: { product, quantity } }),
      removeItem: (productId) => dispatch({ type: ACTIONS.REMOVE, payload: productId }),
      clearCart: () => dispatch({ type: ACTIONS.CLEAR }),
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
};
