import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white text-blue-600 text-sm shadow-lg shadow-blue-400/40 transition-all duration-500 hover:shadow-blue-500/60 hover:scale-105 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">

        {/* 1️⃣ About */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="text-center sm:text-left"
        >
          <h4 className="text-blue-800 font-semibold mb-2">FashionStore</h4>
          <p className="text-blue-400 text-xs">
            Premium fashion for Men, Women & Kids. Stylish & comfortable outfits.
          </p>
        </motion.div>

        {/* 2️⃣ Quick Links */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="text-center sm:text-left"
        >
          <h4 className="text-blue-800 font-semibold mb-2">Quick Links</h4>
          <ul className="flex flex-col gap-1">
            {["Home", "Shop", "About", "Contact"].map((link, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#4f46e5" }}
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="transition">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 3️⃣ Social & Newsletter */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className="text-center sm:text-left"
        >
          <h4 className="text-blue-800 font-semibold mb-2">Connect</h4>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-3 mb-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.3, color: "#4f46e5", rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-blue-600 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex gap-2 justify-center sm:justify-start">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-1 rounded border border-blue-200 text-blue-800 text-xs w-32 sm:w-40 focus:outline-none focus:ring-1 focus:ring-blue-400 transition"
            />
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#4338ca" }}
              transition={{ duration: 0.3 }}
              className="bg-blue-600 px-2 py-1 rounded text-white text-xs hover:bg-blue-700 transition"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* Bottom Copyright */}
      <motion.div
        whileHover={{ scale: 1.02, color: "#4f46e5" }}
        transition={{ duration: 0.3 }}
        className="border-t border-blue-200 mt-4 pt-4 text-center text-blue-400 text-xs"
      >
        © {new Date().getFullYear()} FashionStore. All rights reserved.
      </motion.div>
    </footer>
  );
}
