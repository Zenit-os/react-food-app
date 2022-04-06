import React from "react";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import EmptyCart from "../components/EmptyCart";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../redux/cart/cart.selector";
import { connect } from "react-redux";

const Cart = ({ cartCount, cartList, cartTotal }) => {
  return (
    <>
      <div className="cart-header">
        <Logo />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">Twoje zamówienie</h1>
          <div className="orders-menu">
            <Menu list={cartList} />
          </div>
          <h3 className="orders-total">Koszt: {cartTotal}</h3>
        </div>
      )}
      <Footer />
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Cart);
