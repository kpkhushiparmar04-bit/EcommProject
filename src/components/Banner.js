import React from "react";

export default function Banner() {
  return (
    <div className="w-full my-12">
      <div className="max-w-6xl mx-auto bg-indigo-600 text-white rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center">
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Special Offer 50% OFF!</h2>
          <p className="mt-3 text-lg">Limited time deal on winter collection.</p>
          <button className="mt-6 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">
            Shop Now
          </button>
        </div>

        <div className="flex-1 mt-6 md:mt-0">
          <img
            src="https://i.imgur.com/JjdWnHT.jpeg"
            alt="Offer Banner"
            className="rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}
