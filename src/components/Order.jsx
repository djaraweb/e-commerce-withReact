import React from "react";
import iconFlecha from "@/icons/flechita.svg";
import "@sass/Order.scss";
const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>03.25.21</span>
        <span>6 articles</span>
      </p>
      <p>$560.00</p>
      <img src={iconFlecha} alt="arrow" />
    </div>
  );
};

export default Order;
