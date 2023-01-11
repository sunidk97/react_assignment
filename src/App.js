import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Wishlist from './Components/Wishlist/Wishlist';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import Delivery from './Components/Delivery/Delivery';
import './Components/Register/Register.css'
import './Components/Products/Products.css'
import './Components/Cart/Cart.css'
import './Components/Navbar/Navbar.css'
import './Components/Delivery/Delivery.css'


function App() {

  const [cartItems, setCartItems] = useState([])
  const [wishlist, setWishlist] = useState([])

  const handleAddProduct = (product)=>{
    const productExist = cartItems.find((item)=>item.id === product.id);
    if(productExist){
      setCartItems(cartItems.map((item)=> item.id === product.id ? 
      {...productExist, quantity : productExist.quantity + 1 }: item))
    }
    else{
      setCartItems([...cartItems, {...product, quantity : 1}])
      alert("Added to cart")
    }
  }

  const handleRemoveProduct = (product)=>{
    const productExist = cartItems.find((item)=>item.id === product.id);
    if(productExist.quantity ===1)
    {
      setCartItems(cartItems.filter((item)=> item.id !== product.id))
      alert("Removed from cart")
    }
    else{
      setCartItems(cartItems.map((item)=> item.id === product.id ? {...productExist, quantity : productExist.quantity -1} : item))
    }
  }

  const handleAddToWishlist = (product)=>{
    const productExist = wishlist.find((item)=>item.id === product.id);
    if(productExist){
      setWishlist(wishlist.map((item)=> item.id === product.id ? 
      {...productExist, quantity : productExist.quantity + 1 }: item))
    }
    else{
      setWishlist([...wishlist, {...product, quantity : 1}])
      alert("Added to wishlist")
    }
  }

  const handleRemoveFromWishlist = (product)=>{
    const productExist = wishlist.find((item)=>item.id === product.id);
    if(productExist.quantity ===1)
    {
      setWishlist(wishlist.filter((item)=> item.id !== product.id))
      alert("Removed from wishlist")
    }
    else{
      setWishlist(wishlist.map((item)=> item.id === product.id ? {...productExist, quantity : productExist.quantity -1} : item))
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Products wishlist={wishlist} cartItems={cartItems} handleAddProduct={handleAddProduct} handleAddToWishlist={handleAddToWishlist}/>}/>
        <Route path='/cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />}/>
        <Route path='/wishlist' element={<Wishlist wishlist={wishlist} handleRemoveFromWishlist = {handleRemoveFromWishlist}/>}/>
        <Route path="/delivery" element ={<Delivery/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
