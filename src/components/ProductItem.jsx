import React, { useContext } from "react";
import AppContext from "@context/AppContext";

import iconAddToCart from "@icons/bt_add_to_cart.svg";
import "@sass/ProductItem.scss";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>{`$${product.price}`}</p>
          <p>{product.title}</p>
        </div>
        <figure
          onClick={() => addToCart(product)}
          style={{ cursor: "pointer" }}
        >
          <img src={iconAddToCart} alt="Add Cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
