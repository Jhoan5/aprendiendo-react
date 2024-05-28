import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Error: la búsqueda está vacía");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se permiten números");
      return;
    }
    if (search.length < 3) {
      setError("La búsqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null); // Reset error if all checks pass
  }, [search]);

  return { search, updateSearch, error };
}
