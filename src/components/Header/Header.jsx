import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function Header() {
  const { handleCartModal, isCartModalOpen, cart } = useContext(ProductContext);
  console.log(isCartModalOpen);
  return (
    <div className="flex justify-end pt-4 pr-8 relative">
      <ul className="flex text-lg text-gray-700">
        <Link>
          <li className="pr-3">Home </li>
        </Link>
        <li>
          {" "}
          <button onClick={() => handleCartModal()}>CartIcon</button>{" "}
        </li>
      </ul>
      {isCartModalOpen ? (
        <div className="h-64 w-56 bg-white border absolute top-11 z-20 right-0 px-4 py-4 overflow-y-scroll">
          {cart.length ? (
            <>
              {cart.map((cartItem) => (
                <div className="pt-2 flex justify-between">
                  <img
                    className="w-20 h-20 object-cover"
                    src={cartItem.image}
                    alt="product"
                  />
                  <div>
                    <p>
                      {cartItem.count} x ${cartItem.price}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Your Cart is empty</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
