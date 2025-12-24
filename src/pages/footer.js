import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-4">

        {/* Brand + short */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            
            <span className="text-xl font-semibold text-white">MyWebsite</span>
          </div>
          <p className="text-sm text-gray-300">
            Quality products, fast shipping and friendly support.
            Join thousands of happy customers.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="mailto:kpkhushiparmar04@gmail.com" className="hover:text-white">
                kpkhushiparmar04@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+911234567890" className="hover:text-white">
                +91 123 456 7890
              </a>
            </li>
            <li className="text-sm text-gray-400">Mon - Fri: 9:00 - 18:00</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="space-y-4">
          <h4 className="text-white font-semibold">Follow Us</h4>


<ul>
<a href="https://flipcodesolutions.com/"><img src="instagram.png"></img></a>
</ul>


          <div className="flex gap-3">
            {/* Facebook */}
            <a href="https://facebook.com" aria-label="Facebook" className="p-2 rounded hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.3c0-2.2 1.3-3.5 3.3-3.5.95 0 1.95.17 1.95.17v2.2h-1.13c-1.1 0-1.44.68-1.44 1.38v1.66h2.45l-.39 2.9h-2.06v7A10 10 0 0022 12z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" aria-label="Twitter" className="p-2 rounded hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.92c-.63.28-1.3.47-2 .56a3.44 3.44 0 001.5-1.9 6.8 6.8 0 01-2.17.83 3.4 3.4 0 00-5.78 2.92A9.66 9.66 0 013 4.9a3.4 3.4 0 001.05 4.53c-.52-.02-1.02-.16-1.45-.4v.04c0 1.65 1.18 3.02 2.74 3.33a3.45 3.45 0 01-1.44.05c.41 1.27 1.6 2.2 3.01 2.23A6.82 6.82 0 012 19.54 9.63 9.63 0 008.29 21c6.57 0 10.17-5.44 10.17-10.16 0-.16 0-.31-.01-.47A7.2 7.2 0 0022 5.92z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded hover:bg-gray-800">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.5 2.5 0 015 3.5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.59h.06c.5-.95 1.72-1.96 3.54-1.96 3.78 0 4.48 2.48 4.48 5.71V21H17.4v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95V21H9.5z" />
              </svg>
            </a>
          </div>

          <div>
            <label htmlFor="newsletter" className="sr-only">Email</label>
            <div className="flex">
              <input
                id="newsletter"
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="px-4 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">We never share your email.</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
