import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Chocolate from './Chocolate'
import Drinks from './Drinks'
import Snacks from './Snacks'
import Nonveg from './Nonveg'
import Veg from './Veg'
import Signup from './Signup'
import Cart from './Cart'
import Orders from './Orders'
import ContactUs from './Contact'
import AboutUs from './About'

import { useSelector } from "react-redux";
import Signin from './Signin'
import Login from './Login'

const dropdownLinkStyle = {
  display: "block",
  padding: "10px 15px",
  textDecoration: "none",
  color: "#333",
  borderBottom: "1px solid #eee"
}

function App() {

  const cartItems = useSelector((state) => state.cart || []);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  
  return (
    <>
      <BrowserRouter>
        {/* Fixed Top Menu Bar */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            padding: "15px 0",
            backgroundColor: "#282c34",
            borderBottom: "2px solid #444",
            zIndex: 1000
          }}
        >
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🏠 Home
          </Link>
          <Link
            to="/veg"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🫑 Veg
          </Link>
          <Link
            to="/nonveg"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🍗 Nonveg
          </Link>
          <Link to="/drinks" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            🥤 Drinks
          </Link>
          <Link
           to="/snacks"
             style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🍿 Snacks
          </Link>

          <Link
            to="/chocolate"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🍫 Chocolate
          </Link>
          <Link
            to="/signup"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            ✍ Signup
          </Link>
          <Link
            to="/cart"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🛒 Cart  {cartCount}
          </Link>
          <Link
            to="/orders"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            📦 Orders
          </Link>
          <Link 
          to="/about" 
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            ℹ️ About Us</Link>
          <Link 
          to="/contact" 
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>
            📞 Contact Us</Link>

             {/* Toggle Button */}
        <div style={{ position: "relative" }}>
          <button
            onClick={toggleDropdown}
            style={{
              backgroundColor: "#444",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: "5px"
            }}
          >
            🔐 Account ▼
          </button>

          {showDropdown && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: 0,
                backgroundColor: "white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                borderRadius: "5px",
                overflow: "hidden"
              }}
            >
              <Link to="/login" style={dropdownLinkStyle}>Login</Link>
              <Link to="/signup" style={dropdownLinkStyle}>Signup</Link>
              <Link to="/signin" style={dropdownLinkStyle}>Signin</Link>
            </div>
          )}
        </div>
           
        </nav>

        {/* Add padding so page content doesn't hide behind navbar */}
        <div style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<Nonveg />} />
            <Route path="/drinks" element={<Drinks />} /> 
            <Route path="/Snacks" element={<Snacks/>} />
            <Route path="/chocolate" element={<Chocolate />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="about" element={<AboutUs/>}/>
            <Route path="/contact" element={<ContactUs />} />
            
          </Routes>       
         </div>
      </BrowserRouter>
    </>
  )
}

export default App;