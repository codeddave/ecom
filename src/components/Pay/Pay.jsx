import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
function Pay({ amount }) {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const componentProps = {
    email: formData.email,
    amount,
    metadata: {
      phone: formData.phone,
    },
    publicKey: process.env.REACT_APP_PAYSTACK,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  console.log(formData);
  return (
    <div className="mx-auto flex w-3/4 justify-center items-center h-64">
      <form className="pt-4">
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
        <PaystackButton {...componentProps} className="pt-4" />
      </form>
    </div>
  );
}

export default Pay;
