import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './cart.css';
import products from '../../Products.json';

const Cart = () => {
  const TAX_RATE = 0.06;
  const navigate = useNavigate();
  const location = useLocation();

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (location.state?.product) {
      const product = location.state.product;

      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.item_id === product.item_id);
        const updatedCart = existingItem
          ? prevItems.map((item) =>
              item.item_id === product.item_id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...prevItems, { ...product, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return updatedCart;
      });

      navigate('/cart', { replace: true });
    }
  }, [location.state, navigate]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * TAX_RATE;
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.item_id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter((item) => item.item_id !== id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <div className="cart">
      <header className="cartheader">
        <h1>Shopping Cart</h1>
      </header>
      {cartItems.length === 0 ? (
        <p classname="noItems">Your cart is empty.</p>
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
                <tr key={item.item_id}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.item_id, parseInt(e.target.value, 10))
                      }
                    /> x {item.quantityPerItem}
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => removeItem(item.item_id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="checkout-button"
            onClick={() =>
              navigate('/checkout', {
                state: {
                  cartItems,
                  calculateSubtotal: calculateSubtotal(),
                  calculateTax: calculateTax(),
                  calculateTotal: calculateTotal(),
                },
              })
            }
          >
            Go to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;