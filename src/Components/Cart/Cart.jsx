import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

function Cart({ cartItems, handleAddProduct, handleRemoveProduct }) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      <Navbar />
      {cartItems.length === 0 && <h1>No Items are added</h1>}
      {cartItems.map((item) => {
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
                <div className="qty">Qty : {item.quantity}</div>
                <div> Total Price : Rs. {item.price * item.quantity} /-</div>
                <div>
                  <button
                    className="add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="remove"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <div className="final">
        <span className="total">Total price : Rs. {totalPrice} /-</span>
        <Link to={"/delivery"}>
          <button className="btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
