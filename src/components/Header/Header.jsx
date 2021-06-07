import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/cartContext";
import { Link, useLocation } from "react-router-dom";
import Button from "../common/Button/Button";
import CartDropDown from "../CartDropdown/CartDropdown";
import { useCartData } from "../hooks/useCartData";
import { LogoIcon, CartIcon } from "../common/Icons/Icons";

function Header() {
  const { handleCartModal, isCartModalOpen, closeCartModal } =
    useContext(ProductContext);
  const location = useLocation();
  const { cartData } = useCartData();

  useEffect(() => {
    closeCartModal();
  }, [location, closeCartModal]);
  return (
    <div className="flex justify-between pt-4 pr-8 relative items-center">
      <Link to="/">
        <div className="flex pl-6">
          <p>Techie </p>
          <LogoIcon />
        </div>
      </Link>
      <div>
        <ul className="flex text-lg text-gray-700 items-center">
          <Link to="/">
            <li className="pr-3">Shop </li>
          </Link>
          <li>
            <button
              className="pt-2 focus:outline-none"
              onClick={() => handleCartModal()}
            >
              <CartIcon />
            </button>{" "}
          </li>
        </ul>
      </div>
      {isCartModalOpen ? (
        <div className="h-64 w-56 bg-white border absolute top-12 z-20 right-0 px-4 py-4 overflow-y-scroll">
          {cartData?.cart.length ? (
            <>
              <CartDropDown cartData={cartData} />
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
