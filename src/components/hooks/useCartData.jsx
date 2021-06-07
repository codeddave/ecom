import { useEffect, useState } from "react";

export function useCartData() {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData"))
  );
  const cartLength = JSON.parse(localStorage.getItem("cartData")).cart.length;
  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
  }, [cartLength]);

  return {
    cartData,
    setCartData,
  };
}
