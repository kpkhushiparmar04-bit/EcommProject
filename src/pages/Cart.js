import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, incrementQty, decrementQty } = useCart();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState("");

  const cartQuantity = cart.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * (item.qty || 1),
    0
  );

  const baseDiscount = subtotal * 0.3;
  const couponDiscount = couponApplied ? subtotal * 0.1 : 0;
  const totalDiscount = baseDiscount + couponDiscount;
  const cartTotal = subtotal - totalDiscount;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (!code) return setCouponError("Please enter coupon");
    if (code === "SAVE10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("Invalid coupon code");
    }
  };

  const removeCoupon = () => {
    setCoupon("");
    setCouponApplied(false);
    setCouponError("");
  };

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/checkout");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6">

        {/* DISCOUNT BANNER */}
        {cartQuantity > 0 && (
          <div className="mb-6 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-3 rounded-xl flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
            <p className="font-bold text-sm sm:text-lg">
              🎉 Flat 30% OFF + Extra 10% Coupon
            </p>
            <span className="bg-white text-red-600 px-4 py-1 rounded-full font-bold w-fit">
              SAVE ₹{totalDiscount.toFixed(0)}
            </span>
          </div>
        )}

        <h1 className="text-xl sm:text-3xl font-bold mb-6">
          Shopping Cart ({cartQuantity})
        </h1>

        {/* EMPTY CART */}
        {cartQuantity === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg sm:text-2xl font-bold mb-4">
              Your cart is empty
            </p>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg inline-block"
            >
              Start Shopping →
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow border flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-40 sm:h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 mb-2">₹{item.price}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decrementQty(item.id)}
                          disabled={item.qty <= 1}
                          className="px-3 py-1 bg-gray-200 rounded"
                        >
                          −
                        </button>
                        <span className="font-bold">{item.qty}</span>
                        <button
                          onClick={() => incrementQty(item.id)}
                          className="px-3 py-1 bg-blue-600 text-white rounded"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold">
                        ₹{(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xl self-end sm:self-start"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div>
              <div className="bg-white p-5 rounded-xl shadow border lg:sticky lg:top-6">
                <h2 className="text-lg sm:text-xl font-bold mb-4">
                  Order Summary
                </h2>

                {/* COUPON */}
                <div className="mb-4">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      disabled={couponApplied}
                      placeholder="SAVE10"
                      className="flex-1 px-3 py-2 border rounded-lg text-sm"
                    />
                    {!couponApplied ? (
                      <button
                        onClick={applyCoupon}
                        className="px-4 py-2 bg-black text-white rounded-lg text-sm"
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        onClick={removeCoupon}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {couponError && (
                    <p className="text-red-500 text-xs mt-1">{couponError}</p>
                  )}
                  {couponApplied && (
                    <p className="text-green-600 text-xs mt-1">
                      Coupon applied 🎉
                    </p>
                  )}
                </div>

                {/* TOTAL */}
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-₹{totalDiscount.toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-base">
                    <span>Total</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
                >
                  {isLoading ? "Processing..." : "Checkout"}
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
