import React from "react";

const ButtonAddRemoveItem = ({ quantity, handleAddItem, handleRemoveItem }) => {
  return (
    <div className="btnAddRemove">
      {quantity !== 0 ? (
        <div className="btnAddRemove-positive">
          <i className="fa-solid fa-minus" onClick={handleRemoveItem}></i>
          <span>{quantity}</span>
          <i className="fa-solid fa-plus" onClick={handleAddItem}></i>
        </div>
      ) : (
        <div className="btnAddRemove-negative" onClick={handleAddItem}>
          <span>Dodaj</span>
          <i className="fa-solid fa-plus"></i>
        </div>
      )}
    </div>
  );
};
export default ButtonAddRemoveItem;
