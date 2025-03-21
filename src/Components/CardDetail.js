// src/pages/CardDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom'; // To access passed state

function CardDetail() {
  const location = useLocation(); // Access passed data from previous page
  const { img, name, desc, initialPrice, bidPrice } = location.state || {}; // Destructure data

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg">
            <img src={img} className="card-img-top" alt={name} style={{ objectFit: 'cover', height: '300px' }} />
            <div className="card-body">
              <h2 className="card-title text-center mb-3">{name}</h2>
              <p className="card-text">{desc}</p>
              <p className="card-text">
                <strong>Initial Price:</strong> ₹{initialPrice}
              </p>
              <p className="card-text">
                <strong>Current Bid Price:</strong> ₹{bidPrice}
              </p>
              <a className="btn btn-primary w-100" style={{ backgroundColor: '#d84e55', borderColor: '#d84e55' }}>
                Place a Bid
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
