import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  /* ================= HERO SLIDER ================= */
  const sliderImages = ["woman.png", "boyss.png", "kids.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="w-full">
      {/* ================= HERO SLIDER ================= */}
      <div className="relative w-full overflow-hidden h-[45vh] sm:h-[60vh] md:h-[70vh]">
        {sliderImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 sm:left-5 -translate-y-1/2 bg-black/50 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-black/70 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 sm:right-5 -translate-y-1/2 bg-black/50 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>

      {/* ================= TEXT SECTION ================= */}
      <div className="w-full py-10 px-4 text-center bg-gray-50">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Discover Your Perfect Style
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Trendy fashion for Men, Women & Kids. Premium quality outfits designed
          for comfort, style and confidence.
        </p>
      </div>

      {/* ================= CATEGORY BANNERS ================= */}
      <div className="px-4 py-10">
        <div className="flex flex-col sm:flex-row sm:overflow-x-auto sm:space-x-6 space-y-6 sm:space-y-0">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative w-full sm:min-w-[280px] md:min-w-[350px] group overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-center text-white p-4 sm:p-6 transition-all duration-500 group-hover:bg-black/60">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-center">
                  {cat.name}
                </h1>
                <Link
                  to={cat.link}
                  className="bg-blue-600 px-4 py-2 text-sm sm:text-base font-semibold rounded-md hover:bg-blue-700 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
