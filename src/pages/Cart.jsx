import React from "react";
import { Link } from "react-router-dom";
import profileIcon2 from "../image/stroke.svg";
import profileImage1 from "../image/men.svg";
import CartItem from "../components/CartItem";
import "./Cart.css";

function Cart({ quantities, cartItems, onAdd, onRemove, onOrderClick }) {

    return (
        <div className="cart-container">
            <div className="cart-header">
                <Link to="/">
                    <button className="back-button">
                        <img src={profileIcon2} alt="s" className="back-icon"/>
                    </button>
                </Link>
                <div className="table-info">
                    Столик 75
                    <img src={profileImage1} alt="User" className="profile-icon" />
                </div>
            </div>

            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <CartItem
                        key={index}
                        name={item.name}
                        quantity={item.quantity}
                        onAdd={() => onAdd(`${item.name}1`)}
                        onRemove={() => onRemove(`${item.name}1`)}
                    />
                ))}
            </div>

            <button className="order-button" onClick={onOrderClick}>
                Заказать
            </button>
        </div>
    );
}

export default Cart;