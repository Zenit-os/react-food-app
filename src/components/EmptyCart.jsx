import React from "react";
import { Link } from "react-router-dom";
import emptyCartImg from "../img/emptyCart.png";

function EmptyCart() {
  return (
    <div className="emptyCart">
      <img src={emptyCartImg} alt="emptyCart" />
      <Link to="/">
        <button>
          <i class="fa-solid fa-arrow-right-long"></i> Zamów
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
