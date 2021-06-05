import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-end pt-4 pr-8">
      <ul className="flex text-lg text-gray-700">
        <Link>
          <li className="pr-3">Home </li>
        </Link>
        <Link>
          <li> Cart </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
