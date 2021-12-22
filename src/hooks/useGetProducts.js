import { useState, useEffect } from "react";

const useGetProducts = (API_URL) => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await fetch(`${API_URL}/products?limit=50&offset=50`).then(
      (res) => res.json()
    );
    setProducts(response);
  }, []);

  return products;
};

export default useGetProducts;
