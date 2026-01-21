// Contact.js or Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We're Here to Help
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            Have a question about your order? Need help choosing the perfect product?  
            Our friendly team is just a message away — 24×7.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Left: Contact Details */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">Phone</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Call or WhatsApp</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-1">+91 98765 43210</p>
                    <p className="text-gray-600">Mon–Sun, 8 AM – 10 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">Email</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
                    <p className="text-lg text-blue-600 font-medium">hello@shoppy.in</p>
                    <p className="text-gray-600">We reply within 1 hour (usually faster!)</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">Location</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Visit Our Office</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Shoppy Headquarters<br />
                      123 Commerce Street, Sector 14<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

            </div>  

            {/* Right: Contact Form */}
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">Order Number (optional)</label>
                  <input
                    type="text"
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
                    placeholder="#SP123456"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">How can we help?</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Tell us everything..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold text-xl py-5 rounded-xl hover:bg-blue-700 transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>

              <p className="text-center text-gray-500 text-sm mt-6">
                We respect your privacy • No spam, ever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Shortcut */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Check our Help Center — 95% of questions are answered there instantly!
          </p>
          <a
            href="/faq"
            className="inline-block bg-white text-blue-600 font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-100 transition"
          >
            Visit Help Center
          </a>
        </div>
      </section>
    </>
  );
}
