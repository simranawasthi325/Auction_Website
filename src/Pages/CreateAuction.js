import React, { useState } from "react";

function CreateAuction() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-5 flex-grow-1">
        <div className="card p-4 shadow-sm">
          <h1 className="mb-4 text-center" style={{color:'#d84e55'}}>Create a New Auction</h1>
          <form>
            {/* Product Name */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-bold">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter product name"
              />
            </div>

            {/* Product Image Upload */}
            <div className="mb-3">
              <label htmlFor="imageUpload" className="form-label fw-bold">
                Upload Product Image
              </label>
              <input
                type="file"
                className="form-control"
                id="imageUpload"
                onChange={handleImageChange}
              />
              {image && (
                <div className="mt-3">
                  <p>Preview:</p>
                  <img src={image} alt="Product Preview" className="img-thumbnail" width="200" />
                </div>
              )}
            </div>

            {/* Product Description */}
            <div className="mb-3">
              <label htmlFor="description" className="form-label fw-bold">
                Product Description
              </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                placeholder="Enter a detailed product description"
              ></textarea>
            </div>

            {/* Initial Bid */}
            <div className="mb-3">
              <label htmlFor="startingBid" className="form-label fw-bold">
                Initial Bid (₹)
              </label>
              <input
                type="number"
                className="form-control"
                id="startingBid"
                placeholder="Enter starting bid amount"
              />
            </div>

            {/* Auction End Date */}
            <div className="mb-3">
              <label htmlFor="endDate" className="form-label fw-bold">
                Auction End Date
              </label>
              <input type="date" className="form-control" id="endDate" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
              style={{ backgroundColor: "#d84e55", borderColor: "#d84e55" }}
            >
              Create Auction
            </button>
          </form>
        </div>
      </div>

 
    </div>
  );
}

export default CreateAuction;
