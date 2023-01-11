import React from "react";
import Navbar from "../Navbar/Navbar";

function Wishlist({ wishlist, handleRemoveFromWishlist}) {
  return (
    <div>
      <Navbar />
      {wishlist.length === 0 && <h1>No Items are added</h1>}
      {wishlist.map((item) => {
        return (
          <>
            <div key={item.id} className="cart">
              <div className="card">
                <div>
                  <img src={item.image} width="170px" alt="" />
                </div>
                <div className="item_title">
                  {item.title.substring(0, 11)}...
                </div>
                <div> Price : Rs. {item.price * item.quantity} /-</div>
                <div>
                <button
                  className="btn1"
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  Remove
                </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Wishlist;
