import Filters from "./Filters";
export default function Header({ maxPrice, categories }) {
  return (
    <header style={{ paddingLeft: "120px" }}>
      <h1>Shopping Cart</h1>
      <Filters maxPrice={maxPrice} categories={categories} />
    </header>
  );
}
