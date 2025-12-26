import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import Footer from "./pages/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Woman from "./pages/Woman";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";

import Login from "./components/Login";
import Registration from "./components/Registration";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

export default function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Product />} />
            <Route path="/products/women" element={<Woman />} />
            <Route path="/products/men" element={<Men />} />
            <Route path="/products/kids" element={<Kids />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>

          <Footer />
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}
