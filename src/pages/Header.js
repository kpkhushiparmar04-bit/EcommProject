import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartDrawer from "../components/CartDrawer";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          MyWebsite
        </Link>

        {/* Desktop Search */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <Link to="/" className="hover:text-indigo-600">Home</Link>

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-indigo-600">
           <Link to='/products'> Products </Link>  <ChevronDown className="w-4 h-4" />
            </button>

            {productOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded-lg shadow-md w-40">
                <Link to="/products/women" className="block px-4 py-2 hover:bg-gray-100">
                  Women
                </Link>
                <Link to="/products/Men" className="block px-4 py-2 hover:bg-gray-100">
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

          {/* Cart Drawer Button */}
          <div className="relative">
            <CartDrawer />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          <Link
            to="/login"
            className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "×" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 bg-white border-t">

          {/* Mobile Search */}
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

            {/* Mobile Products */}
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center justify-between"
            >
              Products <ChevronDown className="w-4 h-4" />
            </button>

            {productOpen && (
              <div className="ml-4 flex flex-col gap-2">
                <Link to="/products/women" onClick={() => setMenuOpen(false)}>Women</Link>
                <Link to="/products/Men" onClick={() => setMenuOpen(false)}>Men</Link>
                <Link to="/products/kids" onClick={() => setMenuOpen(false)}>Kids</Link>
              </div>
            )}

            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

            {/* Mobile Cart */}
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Cart ({cartCount})
            </div>

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
