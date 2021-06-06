import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const { cart, cartTotal } = useContext(ProductContext);

  return (
    <div className="flex flex-col items-center justify-center w-2/3  mx-auto pt-20">
      <div className="flex w-full justify-between items-center md:pl-6">
        <div>Product</div>
        <div>Name</div>
        <div>Price</div>
        <div>Remove</div>
        <div>Total</div>
      </div>
      {cart.map((cartItem) => (
        <CheckoutItem cartItem={cartItem} />
      ))}
    </div>
  );
}

export default Checkout;
