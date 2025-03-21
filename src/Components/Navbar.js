// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#d84e55' }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          Auction Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/auctions">
                Auctions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/create-auction">
                Create Auction
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white fw-bold"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </Link>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item fw-bold" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item fw-bold" to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
