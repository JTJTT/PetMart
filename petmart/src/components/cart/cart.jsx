import React, { useState } from 'react';
import './cart.css';
import items from '../../items.json';

const Cart = () => {
    const TAX_RATE = 0.06;

    //load data from items.json
    const [cartItems, setCartItems] = useState([
        ...items.toys,
        ...items.clothes,
        ...items.treats,
    ]);

    //calc total cost before tax
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
    };
    //calc tax
    const calculateTax = () => {
        return calculateSubtotal() * TAX_RATE;
    };
    //add subtotal and tax
    const calculateTotal = () => {
        return calculateSubtotal() + calculateTax();
    };

    
    //update quantity
    const updateQuantity = (id, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };
    //remove item from cart
    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>
                                        <input
                                            type="number"
                                            value={item.quantity || 1}
                                            min="1"
                                            onChange={(e) =>
                                                updateQuantity(item.id, parseInt(e.target.value, 10))
                                            }
                                        />
                                    </td>
                                    <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                                    <td>
                                        <button onClick={() => removeItem(item.id)}>Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-summary">
                        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
                        <p>Tax (6%): ${calculateTax().toFixed(2)}</p>
                        <p>Total: ${calculateTotal().toFixed(2)}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;