import React from "react";
import ProductItem from "../components/ProductItem";
import "@sass/ProductList.scss";

export const ProductList = () => {
  return (
    <section className="main-container">
      <div className="ProductList">
        <ProductItem />
      </div>
    </section>
  );
};
