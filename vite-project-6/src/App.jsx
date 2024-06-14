import initialProducts from "./mocks/productos.json";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { createContext, useCallback, useState } from "react";
export default function App() {
  const maxPrice = 500;
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const products = initialProducts.products;
  const [filters, setFilters] = useState({
    query: "",
    minPrice: 0,
    category: "all",
  });

  const cartContext = createContext();

  return (
    <>
      <cartContext.Provider value={{ setFilters }}>
        <Header maxPrice={maxPrice} categories={categories} />
        <main>
          <Products products={products} />
          <Cart products={products} />
        </main>
      </cartContext.Provider>
      <Footer />
    </>
  );
}
