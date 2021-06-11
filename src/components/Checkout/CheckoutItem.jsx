import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import { DeleteIcon } from "../common/Icons/Icons";
import NumberFormat from "react-number-format";

function CheckoutItem({ cartItem: { price, name, image, total, count, id } }) {
  const { removeItem } = useContext(ProductContext);
  const handleRemove = () => {
    removeItem(id);
  };
  return (
    <div className="flex w-full justify-between items-center pt-3 border-b text-xs md:text-base text-gray-700">
      <div className="w-1/12">
        <img
          className=" w-16 h-16 md:w-24 md:h-32 object-cover"
          src={image}
          alt={name}
        />
      </div>
      <p>{name}</p>
      <p>
        {count} x{" "}
        <NumberFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </p>
      <p onClick={handleRemove}>
        <DeleteIcon />
      </p>
      <NumberFormat
        value={price}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₦"}
      />
    </div>
  );
}
export default CheckoutItem;
