import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<ProductListPage />} />
      <Route path="products/:productId" element={<ProductDetailPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
