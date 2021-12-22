import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import iconFlecha from "@icons/flechita.svg";
import AppContext from "@context/AppContext";

import "@sass/MyOrder.scss";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  const sumTotalOrders = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);

    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconFlecha} alt="arrow" />
        <p className="title">My order(s)</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotalOrders()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
