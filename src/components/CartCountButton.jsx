import React from "react";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../redux/cart/cart.selector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CartCountButton = ({ cartCount }) => {
  return (
    <Link to="/cart">
      <div className="btnCartCount">
        <div className="count">{cartCount >= 100 ? "99+" : cartCount}</div>
        <i className="fa-solid fa-basket-shopping"></i>
      </div>
    </Link>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

export default connect(mapStateToProps)(CartCountButton);
