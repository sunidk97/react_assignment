import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Products({handleAddProduct, handleAddToWishlist, cartItems, wishlist}) {
  const [data, setData] = useState([]);
  


  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar cartItems={cartItems} wishlist={wishlist}/>
      <h1>High Range of Products</h1>
      {data.map((products) => {
        return (
          <>
            <div key={products.id} className="main">
              <div className="card">
                <div>
                  <img src={products.image} width="180px" alt="" />
                </div>
                <div className="title">
                  {products.title.substring(0, 11)}...
                </div>
                <div>Rs. {products.price} /-</div>
                <Link to="">
                  <button className="btn1" onClick={()=>handleAddProduct(products)}>
                    Add to Cart
                  </button>
                </Link>
                <Link to="">
                  <button className="btn2" onClick={()=>handleAddToWishlist(products)}>Add to Wishlist</button>
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Products;
