// BottomNavbar.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function BottomNavbar() {
  return (
    <footer className="bg-danger py-3" style={{ backgroundColor: "#d84e55", bottom:0, left:0, right:0  }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-white">
        {/* Links Section */}
        <div className="mb-2 mb-md-0">
          <a href="/terms-and-conditions" className="text-white me-3 text-decoration-none">
            Terms & Conditions
          </a>
          <a href="/privacy-policy" className="text-white text-decoration-none">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Section */}
        <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white me-3"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <p className="text-center mt-3 text-white small">&copy; 2025 Auction Website All rights reserved.</p>
    </footer>
  );
}

export default BottomNavbar;
