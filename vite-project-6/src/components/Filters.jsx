import { useContext, useState } from "react";

export default function Filters({ maxPrice, categories }) {
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState("all");
  const [setFilters] = useContext(cartContext);

  function handleStateChange(setState) {
    return (event) => setState(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    setFilters({ query: query, price: minPrice, categories: category });
  }
  return (
    <form style={{ width: "400px" }} onSubmit={handleFormSubmit}>
      <div style={{ display: "flex" }}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          style={{ width: "300px" }}
          onChange={handleStateChange(setQuery)}
        />
        <button type="submit">Search</button>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label
          htmlFor="price"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingRight: "10px",
          }}
        >
          Price
          <input
            type="range"
            name="price"
            id="price"
            min="0"
            max={maxPrice}
            onChange={handleStateChange(setMinPrice)}
          />
          {minPrice}
        </label>
        <select
          name="category"
          id="category"
          onChange={handleStateChange(setCategory)}
        >
          <option value="all">all</option>
          {categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>
    </form>
  );
}
