import React from "react";

const categories = [
  { name: "Men", img: "https://images.jdmagicbox.com/quickquotes/images_main/formal-wear-for-men-sesvbeic.jpg" },
  { name: "Women", img: "https://www.beatitude.in/cdn/shop/articles/DSC_2173_720x_dec1d27e-c2a7-4ce7-8b21-654c0ca12e43.webp?v=1675162397" },
  { name: "Kids", img: "https://knittingdoodles.com/cdn/shop/files/SUMMERPMODEL1.jpg?v=1705596075" },
  { name: "Shoes", img: "https://rukminim2.flixcart.com/image/480/580/xif0q/shoe/d/v/0/7-turbo-7-brainer-white-original-imah7y5w7cxdh2rs.jpeg?q=90" },
];

export default function CategoryList() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <img
              src={cat.img}
              alt={cat.name}
              className="rounded-xl shadow-md hover:scale-105 transition"
            />
            <p className="mt-2 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
