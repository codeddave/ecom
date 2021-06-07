import React, { useState } from "react";
import { usePaystackPayment } from "react-paystack";
function Pay({ amount }) {
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
    alert("Thanks for doing business with us! Come back soon!!");
    console.log("herer");
  }
  function onClose() {
    alert("Wait! You need this oil, don't go!!!!");
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
          className="w-full border pl-2"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full border pl-2 mt-4"
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <button type="submit" className="pt-4">
          {" "}
          Pay now
        </button>
      </form>
    </div>
  );
}

export default Pay;
