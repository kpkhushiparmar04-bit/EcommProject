import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  Heart
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

// ✅ LOGO IMPORT
import logo from "../logo.png";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🔐 Firebase user
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const wishlistCount = wishlist.length;

  /* ===== FIREBASE AUTH LISTENER ===== */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  /* ===== SCROLL HIDE / SHOW HEADER ===== */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ===== LOGOUT ===== */
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="bg-white border-b shadow-sm sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">

            {/* ================= LOGO ================= */}
            <Link to="/" className="flex items-center gap-2 -ml-3">
             <img
              src={logo}
              alt="LittleLook Logo"
              className="h-10 w-auto object-contain"
             />
            </Link>


            {/* ================= SEARCH (DESKTOP) ================= */}
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>

            {/* ================= NAV DESKTOP ================= */}
            <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
              <Link to="/" className="hover:text-indigo-600">Home</Link>

              {/* PRODUCTS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setProductOpen(true)}
                onMouseLeave={() => setProductOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-indigo-600">
                  <Link to="/products">Products</Link>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-8 left-0 bg-white border rounded-lg shadow-md w-40"
                    >
                      <Link to="/products/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                      <Link to="/products/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                      <Link to="/products/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/about" className="hover:text-indigo-600">About</Link>
              <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

              {/* WISHLIST */}
              <Link to="/wishlist" className="relative">
                <Heart className="w-6 h-6" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* CART */}
              <Link to="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* LOGIN / LOGOUT */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Login
                </Link>
              )}
            </nav>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              className="md:hidden text-2xl font-bold"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>

          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
