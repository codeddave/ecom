import React from "react";

function CheckoutItem({ cartItem: { price, name, image, total, count } }) {
  return (
    <div className="flex w-full justify-between items-center pt-3 border-b text-sm md:text-base text-gray-700">
      <div className="w-1/12">
        <img
          className=" w-16 h-16 md:w-24 md:h-32 object-cover"
          src={image}
          alt=""
        />
      </div>
      <p className="w-1/5 ">{name}</p>
      <p className="w-1/5">
        {count} x ${price}
      </p>
      <p className="w-1/5">Remove</p>
      <p className="w-1/5">${total}</p>
    </div>
  );
}
export default CheckoutItem;
