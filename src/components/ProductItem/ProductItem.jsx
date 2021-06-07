import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";

function ProductItem({ image, name, price, id }) {
  const { addToCart } = useContext(ProductContext);

  return (
    <div className="h-72 max-w-xs w-3/4 rounded flex flex-col relative">
      <div>
        <img className="w-full h-64 object-cover " src={image} alt={name} />
      </div>
      <button
        onClick={() => addToCart(id)}
        className="absolute bg-white hover:bg-gray-600 bottom-6 hover:text-white px-2 py-2 right-0 text-gray-700"
      >
        Add to Cart
      </button>
      <div className="flex justify-between text-gray-600 pt-2">
        <p>{name}</p>
        <p>₦{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
