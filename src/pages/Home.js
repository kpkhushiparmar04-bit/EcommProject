import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  /* ================= HERO SLIDER ================= */
  const sliderImages = ["Woman.png", "boyss.png"];
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
      <div className="relative w-full overflow-hidden h-[70vh]">
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
          className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>

      {/* ================= HORIZONTAL CATEGORY BANNERS (TEXT & BUTTON AT BOTTOM) ================= */}
      <div className="px-6 py-12 overflow-x-auto">
        <div className="flex justify-center space-x-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative min-w-[300px] md:min-w-[400px] group overflow-hidden rounded-xl shadow-lg flex-shrink-0 scroll-snap-align-start"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-[60vh] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay with text & button at bottom */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end items-center text-white p-6 transition-opacity duration-500 group-hover:bg-black/50">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{cat.name}</h1>
                <Link
                  to={cat.link}
                  className="bg-blue-600 px-6 py-2 font-semibold rounded-md hover:bg-blue-700 transition-colors"
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
