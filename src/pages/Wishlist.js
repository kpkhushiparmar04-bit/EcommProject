import React from "react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold">Wishlist is empty ❤️</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />

            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-green-600 font-bold">₹{item.price}</p>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="mt-3 w-full bg-red-500 text-white py-2 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
