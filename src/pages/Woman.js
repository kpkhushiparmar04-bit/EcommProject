import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

export default function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios
      .get("https://65c31d21f7e6ea59682bf827.mockapi.io/playo")
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    );
  }

  // ✅ FILTER WOMEN CATEGORY
  const womenProducts = products.filter(
    (item) => item?.category?.toLowerCase() === "women"
  );

  if (womenProducts.length === 0) {
    return (
      <p className="text-center mt-10 text-lg">
        No women products found
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Women Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProducts.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-sm hover:shadow-lg transition bg-white"
          >
            <img
              src={item.productimage || "https://via.placeholder.com/300"}
              alt={item.productname}
              className="w-full h-56 object-cover rounded-t-lg"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">
                {item.productname}
              </h3>

              <p className="text-sm text-gray-500 mb-1">
                ⭐ {item.rating || "No rating"}
              </p>

              <p className="text-green-600 font-bold text-lg mb-2">
                ₹{item.price}
              </p>

              <p className="text-sm text-gray-600 mb-4">
                {item.productdescription
                  ? item.productdescription.substring(0, 60)
                  : "No description available"}
              </p>

              {/* ✅ ADD TO CART FIXED */}
              <button
                onClick={() =>
                  addToCart({
                    id: item.id,
                    name: item.productname,
                    price: Number(item.price),
                    image: item.productimage,
                  })
                }
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
