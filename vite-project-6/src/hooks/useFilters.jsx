export default function useFilters({ products, filters }) {
  const filteredProducts = products;
  return filteredProducts.filter(
    (product) =>
      product.price >= filters.minPrice && product.category === filters.category
  );
}
{
}
