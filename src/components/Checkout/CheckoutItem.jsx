import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import { DeleteIcon } from "../common/Icons/Icons";

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
      <p onClick={handleRemove}>
        <DeleteIcon />
      </p>
      <p>₦{total}</p>
    </div>
  );
}
export default CheckoutItem;
