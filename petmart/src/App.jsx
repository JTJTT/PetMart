import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNav from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/Homepage/HomePage';
import Cart from './components/cart/cart';
import Product from './components/Product/Product';
import Checkout from './components/Checkout/checkout';

export default function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}