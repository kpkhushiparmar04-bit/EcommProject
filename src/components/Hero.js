// Hero.js
import React from "react";

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Welcome to Our Store
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        Discover amazing products and deals every day
      </p>
      <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition">
        Shop Now
      </button>
    </section>
  );
}
