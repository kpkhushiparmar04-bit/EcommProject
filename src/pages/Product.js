import React, { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Product() {
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
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold animate-pulse">
          Loading products...
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Fashion Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => {
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

                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.productimage || "https://via.placeholder.com/300"}
                    alt={item.productname}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link
                    to={`/product/${item.id}`}
                    className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 hover:text-white transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 space-y-2">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-lg font-semibold hover:text-blue-600 transition line-clamp-1">
                    {item.productname}
                  </h3>
                </Link>

                <p className="text-sm text-gray-500">
                  ⭐ {item.rating || "4.5"} Rating
                </p>

                <p className="text-blue-600 text-xl font-bold">
                  ₹{item.price}
                </p>

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
