import React, { useContext } from "react";
import { ProductContext } from "../../context/cartContext";
import ProductItem from "../ProductItem/ProductItem";

function Products() {
  const { products } = useContext(ProductContext);
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-1 pl-10  md:pl-32 md:pr-20 pt-16 md:pt-30 gap-y-4">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
