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

  // TOTAL QTY
  const cartQuantity = cart.reduce(
    (total, item) => total + (item.qty || 1),
    0
  );

  // SUBTOTAL
  const subtotal = cart.reduce(
    (total, item) => total + Number(item.price) * (item.qty || 1),
    0
  );

  // DISCOUNTS
  const baseDiscount = subtotal * 0.3; // 30%
  const couponDiscount = couponApplied ? subtotal * 0.1 : 0; // extra 10%
  const totalDiscount = baseDiscount + couponDiscount;
  const cartTotal = subtotal - totalDiscount;

  // APPLY COUPON
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (!code) {
      setCouponError("Please enter a coupon code");
      return;
    }

    if (code === "SAVE10") {
      setCouponApplied(true);
      setCouponError("");
    } else {
      setCouponApplied(false);
      setCouponError("Invalid coupon code");
    }
  };

  // REMOVE COUPON
  const removeCoupon = () => {
    setCoupon("");
    setCouponApplied(false);
    setCouponError("");
  };

  // CHECKOUT
  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/checkout");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* DISCOUNT BANNER */}
        {cartQuantity > 0 && (
          <div className="mb-6 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-4 rounded-xl flex justify-between items-center">
            <p className="font-bold text-lg">
              🎉 Flat 30% OFF + Extra 10% with coupon
            </p>
            <span className="bg-white text-red-600 px-4 py-1 rounded-full font-bold">
              SAVE ₹{totalDiscount.toFixed(0)}
            </span>
          </div>
        )}

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-8">
          Shopping Cart ({cartQuantity} items)
        </h1>

        {/* EMPTY CART */}
        {cartQuantity === 0 ? (
          <div className="text-center py-16">
            <p className="text-2xl font-bold mb-2">Your cart is empty</p>
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg"
            >
              Start Shopping →
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-2xl shadow border flex gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600 mb-3">₹{item.price}</p>

                    <div className="flex justify-between items-center">
                      {/* QTY */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementQty(item.id)}
                          disabled={item.qty <= 1}
                          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
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

                      {/* ITEM TOTAL */}
                      <span className="font-bold text-lg">
                        ₹{(item.price * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xl"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* SUMMARY */}
            <div>
              <div className="bg-white p-6 rounded-2xl shadow border sticky top-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                {/* COUPON */}
                <div className="mb-6">
                  <label className="font-semibold mb-2 block">
                    Coupon Code
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
                      disabled={couponApplied}
                      placeholder="SAVE10"
                      className="flex-1 px-4 py-2 border rounded-lg"
                    />

                    {!couponApplied ? (
                      <button
                        onClick={applyCoupon}
                        disabled={!coupon}
                        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        onClick={removeCoupon}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                      >
                        Remove
                      </button>
                    )}
                  </div>

                  {couponError && (
                    <p className="text-red-500 text-sm mt-2">
                      {couponError}
                    </p>
                  )}

                  {couponApplied && (
                    <p className="text-green-600 text-sm mt-2">
                      Coupon applied successfully 🎉
                    </p>
                  )}
                </div>

                {/* TOTALS */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Total Discount</span>
                    <span>-₹{totalDiscount.toFixed(2)}</span>
                  </div>

                  <hr />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold"
                >
                  {isLoading ? "Processing..." : "Proceed to Checkout"}
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
