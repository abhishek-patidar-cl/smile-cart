import { Outlet } from "react-router-dom";

import Header from "./Header";

const Layout = () => (
  <div className="min-h-screen">
    <Header />
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Outlet />
    </main>
  </div>
);

export default Layout;
