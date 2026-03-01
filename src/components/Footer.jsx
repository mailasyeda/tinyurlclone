import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#062f4f] text-white">

      
      <div className="text-center py-20 px-6 border-b border-white/10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready for Shorter, Smarter Links?
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Transform a long link into a short, trackable one using our platform.
          Create a free account or subscribe to a paid plan today!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-[#062f4f] px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
            View Plans
          </button>

          <button className="bg-teal-600 px-6 py-3 rounded-md font-medium hover:bg-teal-500 transition">
            Create Free Account
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        <div>
          <h3 className="font-semibold text-lg mb-6">Features</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Link Editor</li>
            <li>Link Management</li>
            <li>Branded Links</li>
            <li>Short URL Tracking</li>
            <li>QR Code Generator</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Resources</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Blog</li>
            <li>For Developers</li>
            <li>Our Proven Process</li>
            <li>About Us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Help Desk</li>
            <li>Contact Sales</li>
            <li>Contact Support</li>
            <li>Report Abuse</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Legal</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Accessibility Statement</li>
            <li>Privacy Manager</li>
          </ul>

        </div>

      </div>

      <div className="text-center py-6 border-t border-white/10 text-gray-400 text-sm">
        © 2026 TinyURL LLC
      </div>

    </footer>
  );
}