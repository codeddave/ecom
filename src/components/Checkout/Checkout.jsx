import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../context/cartContext";
import Button from "../common/Button/Button";
import { useCartData } from "../hooks/useCartData";
import Modal from "../common/Modal/Modal";
import Pay from "../Pay/Pay";
import CheckoutItem from "./CheckoutItem";
import NumberFormat from "react-number-format";

function Checkout() {
  const history = useHistory();
  const { removeItem } = useContext(ProductContext);
  const { cartData } = useCartData();
  useEffect(() => {
    if (cartData.cartTotal === 0 && !cartData.cart.length) history.push("/");
  }, [cartData.cartTotal, history, cartData.cart.length]);

  const [completeTransaction, setCompleteTransaction] = useState(false);
  const closeTransaction = () => {
    setCompleteTransaction(false);
  };
  const openTransaction = () => {
    setCompleteTransaction(true);
  };
  const amount = cartData.cartTotal * 100;
  return (
    <>
      <Modal show={completeTransaction} onClose={closeTransaction}>
        <Pay amount={amount} />
      </Modal>
      <div className="flex flex-col items-center justify-center w-full px-6 md:px-0 md:w-2/3  mx-auto pt-20">
        <div className="flex w-full justify-between items-center md:pl-6 text-sm">
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
          <div>
            Total:{" "}
            <NumberFormat
              value={cartData.cartTotal}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₦"}
              className="text-right"
            />
          </div>

          <Button onClick={openTransaction} extraClasses="mt-4 text-sm">
            BUY NOW
          </Button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
