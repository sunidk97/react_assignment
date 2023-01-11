import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartItems, wishlist }) {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <div>
              <h2>AJIO</h2>
            </div>
            <div className="nav_links">
              <NavLink to={"/products"}>Home</NavLink>
              <NavLink to={"/cart"}>
                Cart
                <span className="cart_size">{cartItems?.length !== 0 ? cartItems?.length : ""}</span>
              </NavLink>
              <NavLink to={"/wishlist"}>
                Wishlist
                <span className="cart_size">{wishlist?.length !== 0 ? wishlist?.length : ""}</span>
              </NavLink>
              <NavLink to={"/login"}>Logout</NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
