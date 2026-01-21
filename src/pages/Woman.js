import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Women() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    axios
      .get("https://65c31d21f7e6ea59682bf827.mockapi.io/playo")
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <h2 className="text-lg font-semibold animate-pulse">Loading...</h2>
      </div>
    );
  }

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Women Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {womenProducts.map((item) => {
          const wished = isInWishlist(item.id);

          return (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                {/* Wishlist */}
                <button
                  onClick={() =>
                    wished
                      ? removeFromWishlist(item.id)
                      : addToWishlist({
                          id: item.id,
                          name: item.productname,
                          price: Number(item.price),
                          image: item.productimage,
                        })
                  }
                  className={`absolute top-3 right-3 z-20 p-2 rounded-full transition ${
                    wished
                      ? "bg-red-100 text-red-500"
                      : "bg-white/80 text-gray-500 hover:text-red-500 hover:scale-110"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 ${
                      wished ? "fill-red-500" : "fill-transparent"
                    }`}
                  />
                </button>

                <img
                  src={item.productimage || "https://via.placeholder.com/300"}
                  alt={item.productname}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-2">
                <h3 className="text-lg font-semibold line-clamp-1 hover:text-blue-600 transition">
                  {item.productname}
                </h3>

                <p className="text-sm text-gray-500">
                  ⭐ {item.rating || "No rating"}
                </p>

                <p className="text-blue-600 font-bold text-xl">
                  ₹{item.price}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {item.productdescription || "No description available"}
                </p>

                {/* ADD TO CART */}
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.productname,
                      price: Number(item.price),
                      image: item.productimage,
                    })
                  }
                  className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
