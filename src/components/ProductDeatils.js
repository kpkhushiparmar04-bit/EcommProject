import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://65c31d21f7e6ea59682bf827.mockapi.io/playo/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12">

        {/* IMAGE */}
        <img
          src={product.productimage}
          alt={product.productname}
          className="w-full h-[480px] object-cover rounded-xl shadow"
        />

        {/* DETAILS */}
        <div>
          <h1 className="text-3xl font-bold mb-2">
            {product.productname}
          </h1>

          <p className="text-gray-500 mb-2">
            ⭐ {product.rating || "4.5"} Ratings
          </p>

          <p className="text-green-600 text-2xl font-bold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.productdescription ||
              "Premium fashion wear made with high quality fabric, designed for comfort and modern style."}
          </p>

          {/* SIZE */}
          <div className="mb-5">
            <h4 className="font-semibold mb-2">Select Size</h4>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-1 rounded hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">Available Colors</h4>
            <div className="flex gap-3">
              <span className="w-6 h-6 bg-black rounded-full"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full"></span>
              <span className="w-6 h-6 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.productname,
                price: Number(product.price),
                image: product.productimage,
              })
            }
            className="bg-blue-600 text-white px-10 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
