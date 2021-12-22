import React from "react";
import ProductItem from "@components/ProductItem";
import useGetProducts from "@hooks/useGetProducts";
import "@sass/ProductList.scss";

export const ProductList = () => {
  const products = useGetProducts(process.env.API_URL);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem product={product} key={`ProductItem-${product.id}`} />
        ))}
      </div>
    </section>
  );
};
