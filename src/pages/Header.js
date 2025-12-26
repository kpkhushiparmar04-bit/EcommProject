import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  const cartCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  const wishlistCount = wishlist.length;

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyWebsite
        </Link>

        {/* SEARCH (DESKTOP) */}
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

        {/* NAV (DESKTOP) */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-700">
          <Link to="/" className="hover:text-indigo-600">Home</Link>

          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600">
              Products <ChevronDown className="w-4 h-4" />
            </button>

            {productOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-md w-40">
                <Link to="/products/women" className="block px-4 py-2 hover:bg-gray-100">
                  Women
                </Link>
                <Link to="/products/men" className="block px-4 py-2 hover:bg-gray-100">
                  Men
                </Link>
                <Link to="/products/kids" className="block px-4 py-2 hover:bg-gray-100">
                  Kids
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

          {/* WISHLIST */}
          <Link to="/wishlist" className="relative hover:text-indigo-600">
            <Heart className="w-6 h-6" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* CART (FIXED → PAGE OPEN) */}
          <Link to="/cart" className="relative hover:text-indigo-600">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Login
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white border-t">
          
          {/* SEARCH */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 mb-5">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <Search className="w-5 h-5 text-gray-500" />
          </div>

          <div className="flex flex-col gap-4 font-medium">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>

            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center justify-between"
            >
              Products <ChevronDown className="w-4 h-4" />
            </button>

            {productOpen && (
              <div className="ml-4 flex flex-col gap-2">
                <Link to="/products/women" onClick={() => setMenuOpen(false)}>Women</Link>
                <Link to="/products/men" onClick={() => setMenuOpen(false)}>Men</Link>
                <Link to="/products/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
              </div>
            )}

            <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
              Wishlist ({wishlistCount})
            </Link>

            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({cartCount})
            </Link>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white text-center rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
