import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Chocolate from './Chocolate'
import Drinks from './Drinks'
import Milk from './Milk'
import Nonveg from './Nonveg'
import Veg from './Veg'
import Signup from './Signup'
import Cart from './Cart'
import Orders from './Orders'


function App() {
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
            to="/milk"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            🥛 Milk
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
            🛒 Cart
          </Link>
          <Link
            to="/orders"
            style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
          >
            📦 Orders
          </Link>
          
        </nav>

        {/* Add padding so page content doesn't hide behind navbar */}
        <div style={{ paddingTop: "80px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/veg" element={<Veg />} />
            <Route path="/nonveg" element={<Nonveg />} />
            <Route path="/drinks" element={<Drinks />} /> 
            <Route path="/milk" element={<Milk />} />
            <Route path="/chocolate" element={<Chocolate />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>       
         </div>
      </BrowserRouter>
    </>
  )
}

export default App