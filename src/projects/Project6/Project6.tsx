import initialProducts from "./mocks/productos.json";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { CartProvider } from "./context/cart";
import useFilters from "./hooks/useFilters";
export default function App() {
  const maxPrice = 500;
  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts.products);

  return (
    <CartProvider>
      <Header maxPrice={maxPrice} categories={categories} />
      <main>
        <Products products={filteredProducts} />
        <Cart products={filteredProducts} />
      </main>
      <Footer />
    </CartProvider>
  );
}
