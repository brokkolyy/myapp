import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";

function App() {
    const [products, setProducts] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantities, setQuantities] = useState({});
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Функция для загрузки данных с backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://109.196.98.4/products");
                if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Ошибка запроса:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleAdd = (name) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [name]: prevQuantities[name] + 1,
        }));
    };

    const handleRemove = (name) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [name]: Math.max(0, prevQuantities[name] - 1),
        }));
    };

    const handleOrderClick = () => setShowConfirmation(true);
    const handleCloseConfirmation = () => setShowConfirmation(false);

    const cartItems = Object.entries(quantities)
        .filter(([_, quantity]) => quantity > 0)
        .map(([key, quantity]) => ({
            name: key.replace(/\d+/g, ""),
            quantity,
        }));

    return (
        <Router basename="/">
            <div className={`app-container ${showConfirmation ? "blurred" : ""}`}>
                {loading ? <p>Загрузка...</p> : error ? <p>Ошибка: {error}</p> : (
                    <Routes>
                        <Route path="/" element={<Menu products={products} quantities={quantities} onAdd={handleAdd} onRemove={handleRemove} />} />
                        <Route path="/cart" element={<Cart quantities={quantities} cartItems={cartItems} onAdd={handleAdd} onRemove={handleRemove} onOrderClick={handleOrderClick} />} />
                    </Routes>
                )}
            </div>
            {showConfirmation && <OrderConfirmationModal onClose={handleCloseConfirmation} />}
        </Router>
    );
}

export default App;
