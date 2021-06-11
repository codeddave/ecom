import React from "react";
import NumberFormat from "react-number-format";

function CartDropDown({ cartData }) {
  return (
    <>
      {cartData?.cart.map((cartItem) => (
        <div key={cartItem.id} className="pt-2 flex justify-between text-sm">
          <img
            className="w-16 h-16 object-cover"
            src={cartItem.image}
            alt="product"
          />
          <div>
            <p>
              {cartItem.count} x
              <NumberFormat
                value={cartItem.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₦"}
              />
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default CartDropDown;
