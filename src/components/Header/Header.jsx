import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function Header() {
  const { handleCartModal, isCartModalOpen, cart } = useContext(ProductContext);
  console.log(isCartModalOpen);
  return (
    <div className="flex justify-end pt-4 pr-8 relative">
      <ul className="flex text-lg text-gray-700 items-center">
        <Link>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>{" "}
        </li>
      </ul>
      {isCartModalOpen ? (
        <div className="h-64 w-56 bg-white border absolute top-12 z-20 right-0 px-4 py-4 overflow-y-scroll">
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
              <div className="pt-2 flex justify-center">
                <Link to="/cart">
                  <button className="bg-gray-600 px-4 text-white py-2 hover:bg-white hover:text-black border hover:shadow  hover:border-black">
                    GO TO CHECKOUT
                  </button>
                </Link>
              </div>
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
