import React from 'react';
import './MenuItem.css';
import profileIcon from "../image/Line.svg"; 
import profileIcon2 from "../image/plus.svg"; 

function MenuItem({ name, quantity = 0, onAdd, onRemove }) {
    return (
        <div className="menu-item">
            <div className="item-image"></div>
            <div className="item-info">
                <div className="item-name">{name}</div> 
                {quantity > 0 ? (
                    <div className="quantity-controls">
                        <button className="quantity-button" onClick={onRemove}>
                        <img src={profileIcon} alt="l" className="icon"/>
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button className="quantity-button" onClick={onAdd}>
                        <img src={profileIcon2} alt="p" className="icon"/>
                        </button>
                    </div>
                ) : (
                    <button className="add-button" onClick={onAdd}>+</button>
                )}
            </div>
        </div>
    );
}

export default MenuItem;
