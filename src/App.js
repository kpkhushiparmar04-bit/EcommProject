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

import Login from "./components/Login";
import Registration from "./components/Registration"; // ✅ FIXED IMPORT

import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />

          {/* Category Routes */}
          <Route path="/products/women" element={<Woman />} />
          <Route path="/products/men" element={<Men />} />
          <Route path="/products/kids" element={<Kids />} />

          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<Registration />}   // ✅ FIXED COMPONENT NAME
          />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}
