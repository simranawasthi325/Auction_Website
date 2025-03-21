// src/components/AuctionCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AuctionCard({ img, name, desc, initialPrice, bidPrice }) {

  const navigate = useNavigate(); // Initialize navigation

  const handleViewDetails = () => {
    // Navigate to CardDetail and pass state
    navigate("/card-detail", {
      state: { img, name, desc, initialPrice, bidPrice }, // Pass the auction data
    });
  };
  return (
    <div className="card mb-4 shadow-sm h-80">
      <div className="position-relative">
        <img
          src={img}
          className="card-img-top"
          alt={name}
          style={{ objectFit: 'cover', height: '200px', width: '100%' }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{name}</h5>
        <p className="card-text text-truncate" style={{ maxHeight: '4rem', overflow: 'hidden' }}>
          {desc}
        </p>
        <p className="card-text mb-1">
          <strong>Initial Price:</strong> ₹{initialPrice}
        </p>
        <p className="card-text mb-3">
          <strong>Current Bid Price:</strong> ₹{bidPrice}
        </p>
        <a href="#"   onClick={handleViewDetails} className="btn btn-primary mt-auto"  style={{ backgroundColor: '#d84e55', borderColor:'#d84e55' }}>
          Place Bid
        </a>
      </div>
    </div>
  );
}

export default AuctionCard;
