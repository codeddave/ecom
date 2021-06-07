import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/cartContext";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button/Button";

function Header() {
  const { handleCartModal, isCartModalOpen, closeCartModal } =
    useContext(ProductContext);
  const location = useLocation();

  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData"))
  );
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, [JSON.parse(localStorage.getItem("cartData")).cart.length]);
  useEffect(() => {
    closeCartModal();
  }, [location]);
  return (
    <div className="flex justify-end pt-4 pr-8 relative">
      <ul className="flex text-lg text-gray-700 items-center">
        <Link to="/">
          <li className="pr-3">Home </li>
        </Link>
        <li>
          {" "}
          <button
            className="pt-2 focus:outline-none"
            onClick={() => handleCartModal()}
          >
            <svg
              className="hover:text-black text-gray-600 w-6 h-6 outline-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>{" "}
        </li>
      </ul>
      {isCartModalOpen ? (
        <div className="h-64 w-56 bg-white border absolute top-12 z-20 right-0 px-4 py-4 overflow-y-scroll">
          {cartData?.cart.length ? (
            <>
              {cartData?.cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="pt-2 flex justify-between text-sm"
                >
                  <img
                    className="w-16 h-16 object-cover"
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
              <div className="pt-2 flex justify-center">
                <Link to="/checkout">
                  <Button extraClasses="text-sm">GO TO CHECKOUT</Button>
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="pt-20">Your Cart is empty</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Header;
