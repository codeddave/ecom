import React from "react";
import ProductItem from "../ProductItem/ProductItem";

function Products() {
  const products = [
    {
      id: "1",
      name: "iPhone 11pro",
      image: "./images/11pro.jpg",
      price: "$100",
    },
    { id: "2", name: "phone", image: "./images/11pro.jpg", price: "$100" },
    { id: "3", name: "iphone X", image: "./images/iphonex.jpg", price: "$100" },
    {
      id: "4",
      name: "phone",
      image: "./images/iphone7plus.jpg",
      price: "$100",
    },
    {
      id: "5",
      name: "iPhone 11pro",
      image: "./images/11pro.jpg",
      price: "$100",
    },
    { id: "6", name: "phone", image: "./images/11pro.jpg", price: "$100" },
    { id: "7", name: "iphone X", image: "./images/iphonex.jpg", price: "$100" },
    {
      id: "8",
      name: "phone",
      image: "./images/iphone7plus.jpg",
      price: "$100",
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-1 pl- pr-8 md:pl-32 md:pr-20 pt-40 gap-y-4">
      {products.map((product) => {
        return (
          <ProductItem
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}
export default Products;
