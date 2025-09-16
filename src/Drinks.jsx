import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Drinks() {
  const drinkItems = useSelector(globalstate => globalstate.products.drinkItems);
  const dispatch = useDispatch();

  // Pagination logic
  const itemsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(drinkItems.length/itemsPerPage);
  


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drinkItems.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  // ✅ function to handle Add to Cart + toast
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`"${product.name}" added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
    }); 
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      overflowY: "auto",
      padding: "20px",
      boxSizing: "border-box",
      backgroundColor: "#fdfaf6" // light creamy tone for milkshake
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Drink Items</h2>

      {/* Grid for products */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        width: "100%"
      }}>
        {currentItems.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <img src={product.image} alt={product.name} style={{
              height: "150px",
              width: "100%",
              objectFit: "contain",
              borderRadius: "8px",
              marginBottom: "10px"
            }} />
            <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
            <p style={{ fontWeight: "bold", color: "brown", marginBottom: "10px" }}>
              ₹{product.price}
            </p>
            <button 
              type="button"
              onClick={() => handleAddToCart(product)} // ✅ now using toast
              style={{
                backgroundColor: "#6a1b9a",
                color: "white",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.2s ease"
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#4a148c"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#6a1b9a"}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button 
          onClick={() => goToPage(currentPage - 1)} 
          disabled={currentPage === 1}
          style={{ margin: "0 5px" }}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            style={{
              margin: '0 5px',
              fontWeight: currentPage === i + 1 ? 'bold' : 'normal'
            }}
          >
            {i + 1}
          </button>
        ))}

        <button 
          onClick={() => goToPage(currentPage + 1)} 
          disabled={currentPage === totalPages}
          style={{ margin: "0 5px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Drinks;
