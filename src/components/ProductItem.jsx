import React from "react";
import iconAddToCart from "@icons/bt_add_to_cart.svg";
import "@sass/ProductItem.scss";

const ProductItem = ({ product }) => {
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{`$${product.price}`}</p>
          <p>{product.title}</p>
        </div>
        <figure>
          <img src={iconAddToCart} alt="Add Cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
