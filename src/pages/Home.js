import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  /* ================= HERO SLIDER ================= */
  const sliderImages = ["woman.png", "boyss.png", "kids.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ================= DATA ================= */
  const categories = [
    {
      name: "MEN COLLECTION",
      img: "https://img.pikbest.com/origin/08/97/28/07zpIkbEsTpPn.png!sw800",
      link: "/products/men",
    },
    {
      name: "WOMEN COLLECTION",
      img: "https://coreldrawdesign.com/resources/thumbnails/thumbnail-1709536228.webp",
      link: "/products/women",
    },
    {
      name: "KIDS COLLECTION",
      img: "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_16974606592616.jpeg",
      link: "/products/kids",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Stylish Shirt",
      price: "₹999",
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6z4Pw-iN_z7NSx-t3aUjuXSARAnCDJjkuvA87B020tfbqWEi22ma0hQVDFI1_sqZRu38otkLGiNhaAS4E9rLYOkHz6lEMSM6LZRIaQd2ugcuF7vVYz97GAw&usqp=CAc",
    },
    {
      id: 2,
      name: "Women Dress",
      price: "₹1499",
      img: "https://m.media-amazon.com/images/I/71eUwDk8z+L._SY879_.jpg",
    },
    {
      id: 3,
      name: "Kids Wear",
      price: "₹799",
      img: "https://m.media-amazon.com/images/I/61H5FzCqJkL._SX679_.jpg",
    },
  ];

  /* ================= FADE UP VARIANT ================= */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">

      {/* ================= HERO SLIDER (FADE + ZOOM) ================= */}
      <div className="relative w-full h-[45vh] sm:h-[60vh] md:h-[75vh] overflow-hidden">
        {sliderImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt="slider"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover"
          />
        ))}
      </div>

      {/* ================= INTRO TEXT ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center py-12 px-4 bg-gray-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Discover Your Perfect Style
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trendy fashion for Men, Women & Kids. Premium quality outfits designed
          for comfort, style and confidence.
        </p>
      </motion.div>

      {/* ================= CATEGORY SECTION ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 py-12"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-[55vh] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>
                <Link
                  to={cat.link}
                  className="bg-blue-600 px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= FEATURED PRODUCTS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-50 py-14 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-blue-600 font-bold mt-2">{item.price}</p>
                <button className="mt-4 bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-14 px-6"
      >
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
          <div>
            🚚
            <h4 className="font-semibold mt-2">Free Delivery</h4>
            <p className="text-gray-600 text-sm">On all orders</p>
          </div>
          <div>
            💳
            <h4 className="font-semibold mt-2">Secure Payment</h4>
            <p className="text-gray-600 text-sm">100% safe</p>
          </div>
          <div>
            🔄
            <h4 className="font-semibold mt-2">Easy Returns</h4>
            <p className="text-gray-600 text-sm">7 days return</p>
          </div>
          <div>
            📞
            <h4 className="font-semibold mt-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">We are here</p>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
