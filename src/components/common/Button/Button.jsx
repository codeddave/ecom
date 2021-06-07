import React from "react";

function Button({ onClick, children, extraClasses, otherProps }) {
  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={`bg-gray-600 px-4 py-2 text-white hover:bg-white hover:text-black border hover:shadow  hover:border-black ${extraClasses}`}
    >
      {children}
    </button>
  );
}
export default Button;
