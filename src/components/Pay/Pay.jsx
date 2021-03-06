import React, { useContext, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useHistory } from "react-router";
import { ProductContext } from "../../context/cartContext";
import { toast } from "react-toastify";
import Button from "../common/Button/Button";

function Pay({ amount }) {
  const { clearCart } = useContext(ProductContext);
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const config = {
    email: formData.email,
    amount,
    metadata: {
      phone: formData.phone,
    },
    publicKey: process.env.REACT_APP_PAYSTACK,
    text: "Pay Now",
  };

  function onSuccess() {
    toast.success(`Thanks for doing business with us! Come back soon`);
    history.push("/");
    clearCart();
  }
  function onClose() {
    toast.error(`Wait, Don't leave :(`);
  }
  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
  };
  return (
    <div className="mx-auto flex w-3/4 justify-center items-center h-64">
      <form onSubmit={handleSubmit} className="pt-4">
        <input
          className="w-full border pl-2 h-10 outline-none"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full border pl-2 mt-4 h-10 outline-none"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Button type="submit" extraClasses="mt-4">
          PAY NOW
        </Button>
      </form>
    </div>
  );
}

export default Pay;
