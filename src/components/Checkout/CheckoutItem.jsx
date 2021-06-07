import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";

function CheckoutItem({ cartItem: { price, name, image, total, count, id } }) {
  const { removeItem } = useContext(ProductContext);
  const handleRemove = () => {
    removeItem(id);
  };
  return (
    <div className="flex w-full justify-between items-center pt-3 border-b text-sm md:text-base text-gray-700">
      <div className="w-1/12">
        <img
          className=" w-16 h-16 md:w-24 md:h-32 object-cover"
          src={image}
          alt=""
        />
      </div>
      <p className=" ">{name}</p>
      <p className="">
        {count} x ₦{price}
      </p>
      <p onClick={handleRemove} className="">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </p>
      <p>₦{total}</p>
    </div>
  );
}
export default CheckoutItem;
