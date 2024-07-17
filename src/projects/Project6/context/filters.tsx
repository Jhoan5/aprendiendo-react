import { createContext, useState } from "react";

export const FiltersContext = createContext();
export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    query: "",
    minPrice: 0,
    category: "all",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
