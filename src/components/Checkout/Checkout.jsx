import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/cartContext";
import Modal from "../Modal/Modal";
import Pay from "../Pay/Pay";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const { cart, cartTotal } = useContext(ProductContext);
  const [completeTransaction, setCompleteTransaction] = useState(false);
  const closeTransaction = () => {
    setCompleteTransaction(false);
  };
  const openTransaction = () => {
    setCompleteTransaction(true);
  };
  const amount = cartTotal * 100;
  return (
    <>
      <Modal show={completeTransaction} onClose={closeTransaction}>
        <Pay amount={amount} />
      </Modal>
      <div className="flex flex-col items-center justify-center w-2/3  mx-auto pt-20">
        <div
          onClick={openTransaction}
          className="flex w-full justify-between items-center md:pl-6"
        >
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div>Remove</div>
          <div>Total</div>
        </div>
        {cart.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className="flex justify-end  w-2/3  mx-auto pt-12">
        <Link to="/pay">
          <p className="text-right">Total: {cartTotal}</p>
        </Link>
      </div>
    </>
  );
}

export default Checkout;
