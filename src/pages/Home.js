import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  /* ================= HERO SLIDER ================= */
  const sliderImages = ["woman.png", "boyss.png", "kids.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((p) => (p + 1) % sliderImages.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const categories = [
    {
      name: "Men Collection",
      img: "https://img.pikbest.com/origin/08/97/28/07zpIkbEsTpPn.png!sw800",
      link: "/products/men",
    },
    {
      name: "Women Collection",
      img: "https://coreldrawdesign.com/resources/thumbnails/thumbnail-1709536228.webp",
      link: "/products/women",
    },
    {
      name: "Kids Collection",
      img: "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_16974606592616.jpeg",
      link: "/products/kids",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="w-full overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] md:h-[90vh]">
        {sliderImages.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="hero"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: i === currentSlide ? 1 : 0,
              scale: i === currentSlide ? 1 : 1.1,
            }}
            transition={{ duration: 1.2 }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

        <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Redefine Your <span className="text-indigo-400">Fashion</span>
            </h1>
            <p className="mt-5 text-lg text-gray-200">
              Premium outfits crafted for comfort, elegance & confidence
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                to="/products"
                className="bg-indigo-600 px-7 py-3 rounded-lg hover:bg-indigo-700"
              >
                Shop Collection
              </Link>
              <Link
                to="/about"
                className="border border-white px-7 py-3 rounded-lg hover:bg-white hover:text-black"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="bg-black text-white py-3 text-sm text-center">
        🚚 Free Delivery | 🔄 Easy Returns | 💳 Secure Payments | 🇮🇳 Made in India
      </section>

      {/* ================= CATEGORIES ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Shop by Category
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="relative rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-[60vh] object-cover transition"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {cat.name}
                </h3>
                <Link
                  to={cat.link}
                  className="bg-indigo-600 w-fit px-5 py-2 rounded text-white"
                >
                  Shop Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= LOOKBOOK (CREATIVE) ================= */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">
          Style Lookbook
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[
            "https://static.wixstatic.com/media/c7f060_c3d3dabe2f0747b6ac680b939de31a82~mv2.jpeg/v1/fill/w_640,h_709,al_c,q_85,enc_auto/c7f060_c3d3dabe2f0747b6ac680b939de31a82~mv2.jpeg",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
            "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
            "https://img.bestdealplus.com/ae04/kf/H272d9ae7f61e4e6c96cc976307c78fddu.jpg",
          ].map((img, i) => (
            <motion.img
              key={i}
              whileHover={{ scale: 1.05 }}
              src={img}
              className="h-64 w-full object-cover rounded-xl shadow"
            />
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Why Customers Love Us
        </h2>

        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            ["🚚", "Fast Delivery"],
            ["🧵", "Premium Fabric"],
            ["🔄", "7-Day Returns"],
            ["💬", "24/7 Support"],
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <div className="text-4xl">{item[0]}</div>
              <h4 className="font-semibold mt-3">{item[1]}</h4>
            </div>
          ))}
        </div>
      </section>
</div>
  );
}
