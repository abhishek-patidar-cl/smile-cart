# Smile Cart

A small e-commerce app built with **React 19, Vite, Tailwind CSS v4 and React Router**.
Product data comes from [dummyjson.com](https://dummyjson.com).

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

Requires Node 20.19+ (or 22+).

## Features
- Product grid with server-side pagination (8 per page) and numbered page bar
- Debounced search (stored in the URL: `/?search=phone&page=2`)
- Add to cart -> quantity selector (- / +), removing at 0
- Cart badge in header (distinct products), cart page with totals, remove and clear
- Product detail page with image gallery
- Cart persisted in `localStorage`

## Structure
```
src/
  api/          productsApi.js          fetch calls to dummyjson
  context/      CartContext.jsx         cart state (useReducer) + localStorage
  hooks/        useFetch, useProducts, useProduct, useDebounce
  utils/        constants, formatPrice, getPageRange
  components/
    layout/     Layout, Header, SearchBar, CartLink
    common/     Button, Spinner, ErrorMessage, Pagination, Icons
    product/    ProductList, ProductCard, AddToCart, QuantitySelector
    cart/       CartItem, CartSummary
  pages/        ProductListPage, ProductDetailPage, CartPage, NotFoundPage
  App.jsx       routes
  main.jsx      providers + router
```
