import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = () => {
    setLoading(true);

    setTimeout(() => {
      clearCart();               // ✅ EMPTY CART
      setLoading(false);
      navigate("/");             // ✅ REDIRECT (you can change to /success)
      alert("Order placed successfully 🎉");
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

        {/* BILLING DETAILS */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-6">Checkout</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Full Name" className="input" />
            <input placeholder="Email Address" className="input" />
            <input placeholder="Phone Number" className="input" />
            <input placeholder="City" className="input" />
            <input placeholder="State" className="input" />
            <input placeholder="Pincode" className="input" />
            <textarea
              placeholder="Full Address"
              className="input md:col-span-2 h-24"
            />
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Order Summary</h3>

          <div className="space-y-3 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
