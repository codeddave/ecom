import React from "react";
import { formatPriceWithCommas } from "../../utils/utils";

function CartDropDown({ cartData }) {
  return (
    <>
      {cartData?.cart.map((cartItem) => (
        <div key={cartItem.id} className="pt-2 flex justify-between text-sm">
          <img
            className="w-16 h-16 object-cover"
            src={cartItem.image}
            alt={cartItem.name}
          />
          <div>
            <p>
              {cartItem.count} x ₦{formatPriceWithCommas(cartItem.price)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default CartDropDown;
