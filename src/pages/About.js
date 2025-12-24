// About.js (or About.jsx)
import React from 'react';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to Shoppy
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your trusted online store for premium fashion, electronics, home goods, and everything in between — 
            delivered with love, speed, and a smile.
          </p>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Journey So Far</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Founded in 2019, Shoppy began with a simple idea: <strong>make online shopping joyful, honest, and hassle-free</strong>.
                </p>
                <p>
                  From a small garage operation to serving <strong>over 500,000 happy customers</strong> across the country, 
                  we've grown — but our promise remains the same.
                </p>
                <p>
                  Every order you place helps support local suppliers, fair wages, and eco-friendly packaging. 
                  You're not just shopping — you're making a difference.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600">500K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">2M+</div>
                  <div className="text-gray-600">Orders Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600">4.8★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1350&q=80"
                alt="Shoppy warehouse team packing orders"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Millions Trust Shoppy</h2>
          <p className="text-xl text-gray-600 mb-16">We’re more than just a store — we’re your shopping partner</p>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: "Fast Delivery", title: "Lightning Fast Delivery", desc: "Same-day dispatch • Free shipping over $50" },
              { icon: "Secure Payment", title: "100% Secure Payments", desc: "SSL encrypted • Multiple payment options" },
              { icon: "Easy Returns", title: "30-Day Easy Returns", desc: "No questions asked • Free return pickup" },
              { icon: "24/7 Support", title: "24×7 Customer Support", desc: "Chat, call, or email — we’re always here" },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-5 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Shopping With Confidence
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join 500,000+ happy shoppers who choose Shoppy every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-white text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
