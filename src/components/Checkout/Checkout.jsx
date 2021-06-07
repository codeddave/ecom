import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProductContext } from "../../context/cartContext";
import Modal from "../Modal/Modal";
import Pay from "../Pay/Pay";
import CheckoutItem from "./CheckoutItem";

function Checkout() {
  const history = useHistory();
  const { cartTotal, removeItem } = useContext(ProductContext);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData"))
  );
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, [JSON.parse(localStorage.getItem("cartData")).cart.length]);
  useEffect(() => {
    if (cartData.cartTotal === 0 && !cartData.cart.length) history.push("/");
  }, [cartData.cartTotal]);

  console.log(JSON.parse(localStorage.getItem("cartData")).cart.length);
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
      <div className="flex flex-col items-center justify-center w-full px-6 md:px-0 md:w-2/3  mx-auto pt-20">
        <div className="flex w-full justify-between items-center md:pl-6">
          <div>Product</div>
          <div>Name</div>
          <div>Price</div>
          <div>Remove</div>
          <div>Total</div>
        </div>
        {cartData.cart?.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            id={cartItem.id}
            cartItem={cartItem}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className="flex justify-end  w-2/3  mx-auto pt-12">
        <div className="flex flex-col">
          <p className="text-right">Total: {cartData.cartTotal}</p>
          <button
            onClick={openTransaction}
            className="bg-gray-700 p-2 text-sm mt-2 text-white"
          >
            BUY NOW
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
