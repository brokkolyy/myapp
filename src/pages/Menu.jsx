import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImage1 from "../image/men.svg";
import profileImage2 from "../image/c.png";
import profileImage3 from "../image/Vector.svg";
import MenuItem from "../components/MenuItem";

function Menu({ products, quantities, onAdd, onRemove }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product =>
        product.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="menu-container">
            <div className="header">
                <Link to="/">
                    <button className="table-button">
                        <img src={profileImage1} alt="IMG" className="profile-icon"/>
                        <span>Столик 7</span>
                    </button>
                </Link>

                <Link to="/cart">
                    <button className="cart-button">
                        <img src={profileImage2} alt="c" className="cart-icon"/>
                    </button>
                </Link>
            </div>

            <div className="menu-title">Меню</div>

            <div className="search-bar">
                <span className="search-icon">
                    <img src={profileImage3} alt="v" className="search-icon"/>
                </span>
                <input 
                    type="text" 
                    placeholder="Поиск"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="categories">
                <button className="category-button">Категория</button>
                <button className="category-button">Категория</button>
                <button className="category-button">Категория</button>
                <button className="category-button">Кате</button>
            </div>

            <div className="items-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <MenuItem
                            key={product.ID}
                            name={product.Name}
                            description={product.Description}
                            image={decodeURIComponent(product.Image)}
                            quantity={quantities[product.Name] || 0}
                            onAdd={() => onAdd(product.Name)}
                            onRemove={() => onRemove(product.Name)}
                        />
                    ))
                ) : (
                    <p>Ничего не найдено</p>
                )}
            </div>
        </div>
    );
}

export default Menu;
