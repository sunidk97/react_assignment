import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Delivery() {
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    alert("Successfully placed your order");
    navigate("/products");
  };

  const handleChange = (e) => {};

  const [location, setLocation] = useState({});

  const getUserLocation = (e) => {
    e.preventDefault();
    axios("https://ipapi.co/json").then((response) => {
      setLocation(response.data);
    });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handlePlaceOrder}>
        <h2 className="deliver">Deliver To :</h2>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          required
          onChange={handleChange}
        />
        <div className="location">
          <input
            type="text"
            placeholder="Address"
            value={location.city || ""}
            required
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="State"
          value={location.region || ""}
          required
          onChange={handleChange}
        />
        <br />
        <button onClick={getUserLocation} className="location_btn">
          Get Location
        </button>
        <button>Place Order</button>
      </form>
    </div>
  );
}

export default Delivery;
