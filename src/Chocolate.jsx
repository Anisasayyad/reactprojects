// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from './store';

// function Chocolate() {
//   let chocolates = useSelector(globalstate => globalstate.products.chocolateItems);
//   let dispatch = useDispatch();

//   // Pagination logic
//   const itemsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(chocolates.length / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = chocolates.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (pageNumber) => {
//     if (pageNumber < 1) pageNumber = 1;
//     else if (pageNumber > totalPages) pageNumber = totalPages;
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       <h2>Chocolate Items</h2>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
//         {currentItems.map(product => (   // ✅ Use currentItems
//           <div key={product.id} style={{
//             border: "1px solid #ccc",
//             borderRadius: "12px",
//             padding: "15px",
//             textAlign: "center",
//             boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
//           }}>
//             <img src={product.image} alt={product.name} style={{ height: "100px", width: "100px", borderRadius: "8px" }} />
//             <h3>{product.name}</h3>
//             <p style={{ fontWeight: "bold", color: "green" }}>₹{product.price}</p>
//             <button type='button' onClick={() => dispatch(addToCart(product))} style={{
//               backgroundColor: "green",
//               color: "white",
//               padding: "8px 12px",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer"
//             }}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
// <div style={{ textAlign: 'center', marginTop: '20px' }}>
//   <button 
//     onClick={() => goToPage(currentPage - 1)} 
//     disabled={currentPage === 1}
//     style={{
//       margin: "0 5px",
//       padding: "8px 14px",
//       borderRadius: "20px",
//       border: "1px solid #dcdcdc",
//       backgroundColor: currentPage === 1 ? "#f0f0f0" : "#e6f0ff",
//       color: currentPage === 1 ? "#999" : "#333",
//       cursor: currentPage === 1 ? "not-allowed" : "pointer",
//       transition: "all 0.2s ease"
//     }}
//   >
//     Previous
//   </button>

//   {Array.from({ length: totalPages }, (_, i) => (
//     <button
//       key={i + 1}
//       onClick={() => goToPage(i + 1)}
//       style={{
//         margin: '0 5px',
//         padding: "8px 14px",
//         borderRadius: "20px",
//         border: "1px solid #dcdcdc",
//         backgroundColor: currentPage === i + 1 ? "#4a90e2" : "#fff",
//         color: currentPage === i + 1 ? "white" : "#333",
//         fontWeight: currentPage === i + 1 ? "bold" : "normal",
//         cursor: "pointer",
//         transition: "all 0.2s ease"
//       }}
//       onMouseOver={e => {
//         if (currentPage !== i + 1) e.currentTarget.style.backgroundColor = "#f2f6ff";
//       }}
//       onMouseOut={e => {
//         if (currentPage !== i + 1) e.currentTarget.style.backgroundColor = "#fff";
//       }}
//     >
//       {i + 1}
//     </button>
//   ))}

//   <button 
//     onClick={() => goToPage(currentPage + 1)} 
//     disabled={currentPage === totalPages}
//     style={{
//       margin: "0 5px",
//       padding: "8px 14px",
//       borderRadius: "20px",
//       border: "1px solid #dcdcdc",
//       backgroundColor: currentPage === totalPages ? "#f0f0f0" : "#e6f0ff",
//       color: currentPage === totalPages ? "#999" : "#333",
//       cursor: currentPage === totalPages ? "not-allowed" : "pointer",
//       transition: "all 0.2s ease"
//     }}
//   >
//     Next
//   </button>
// </div>

//     </div>
//   )
// }

// export default Chocolate;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "./Chocolate.css"; // ✅ external CSS file
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Chocolate() {
  const chocolates = useSelector(
    (globalstate) => globalstate.products.chocolateItems
  );
  const dispatch = useDispatch();

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(chocolates.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocolates.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🍫`, {
      autoClose: 2000,
      position: "top-right",
    });
  };

  return (
    
    <div className="chocolate-container">
      <h2 className="chocolate-title">Chocolate Items</h2>

      <div className="chocolate-grid">
        {currentItems.map((product) => (
          <div key={product.id} className="chocolate-card">
            <img
              src={product.image}
              alt={product.name}
              className="chocolate-image"
            />
            <h3>{product.name}</h3>
            <p className="chocolate-price">₹{product.price}</p>
            <button
              type="button"
              onClick={() => handleAddToCart(product)}
              className="add-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <ToastContainer/>
    </div>
    
  );
}

export default Chocolate;
