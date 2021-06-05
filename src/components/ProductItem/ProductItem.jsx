import React from "react";

function ProductItem({ image, name, price }) {
  return (
    <div className="h-72 max-w-xs w-3/4 rounded flex flex-col relative">
      <div>
        <img className="w-full h-64 object-cover " src={image} alt={name} />
      </div>
      <button className="absolute bg-white hover:bg-gray-600 bottom-6 hover:text-white px-2 py-2 right-0">
        {" "}
        Add to Cart
      </button>
      <div className="flex justify-between text-gray-600 pt-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default ProductItem;
