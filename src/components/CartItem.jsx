import React from "react";
import "./CartItem.css";
import profileIcon from "../image/Line.svg"; 
import profileIcon2 from "../image/plus.svg"; 


const CartItem = ({ name, quantity, onAdd, onRemove }) => {
    return (
        <div className="cart-item">
            <div className="image-placeholder"></div>
            <div className="cart-item-info">
                <div className="cart-item-name">{name}</div>
                <div className="item-description">описание</div>
            </div>
            <div className="cart-quantity-controls">
                <button className="cart-quantity-button" onClick={onRemove}>
                <img src={profileIcon} alt="l" className="icon"/>
                </button>
                <span className="cart-quantity">{quantity}</span>
                <button className="cart-quantity-button" onClick={onAdd}>
                <img src={profileIcon2} alt="p" className="icon"/>
                </button>
            </div>
        </div>
    );
};

export default CartItem;