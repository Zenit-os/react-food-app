import React from "react";
import ButtonAddRemoveItem from "./ButtonAddRemoveItem";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
} from "../redux/cart/cart.selector";
import { cartAddItem, cartRemoveItem } from "../redux/cart/cart.action";
import { connect } from "react-redux";

function MenuItem({ item, cartCount, cartList, cartAddItem, cartRemoveItem }) {
  const { id, name, info, price, img } = item;

  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.id === id);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };

  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head-desc">
        <p className="head-desc-name">{name}</p>
        <p className="head-desc-info">{info}</p>
      </div>
      <div className="item-foot-desc">
        <span className="foot-desc-price">{price} PLN</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleAddItem={() => cartAddItem(item)}
          handleRemoveItem={() => cartRemoveItem(item)}
        />
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
