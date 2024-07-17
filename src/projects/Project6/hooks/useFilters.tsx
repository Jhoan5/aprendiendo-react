import { useContext } from "react";
import { FiltersContext } from "../context/filters";

export default function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);
  const filterProducts = (products) =>
    products.filter(
      (product) =>
        product.price >= filters.minPrice &&
        product.category === filters.category
    );
  return { filters, filterProducts, setFilters };
}
