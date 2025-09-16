// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from './store';

// function Nonveg() {
//   const nonvegItems = useSelector(globalstate => globalstate.products.nonvegItems); // Non-Veg items
//   const dispatch = useDispatch();

//    const itemsPerPage = 3; // 3 items per page
//    const [currentPage, setCurrentPage] = useState(1);
//    const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);
  

//   // Slice items for current page
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = nonvegItems.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (pageNumber) => {
//     if (pageNumber < 1) pageNumber = 1;
//     else if (pageNumber > totalPages) pageNumber = totalPages;
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div style={{
//       minHeight: "100vh",
//       width: "100vw",
//       padding: "20px",
//       boxSizing: "border-box",
//       backgroundColor: "#f5f5f5"
//     }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Non-Veg Items</h2>

//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)", // 4 items per row
//         gap: "20px",
//       }}>
//         {currentItems.map(product => (
//           <div key={product.id} style={{
//             border: "1px solid #ccc",
//             borderRadius: "12px",
//             padding: "15px",
//             textAlign: "center",
//             boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
//             backgroundColor: "#ffffff",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             transition: "transform 0.2s, box-shadow 0.2s",
//           }}
//           onMouseOver={e => {
//             e.currentTarget.style.transform = "scale(1.05)";
//             e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
//           }}
//           onMouseOut={e => {
//             e.currentTarget.style.transform = "scale(1)";
//             e.currentTarget.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.1)";
//           }}
//           >
//             <img src={product.image} alt={product.name} style={{
//               height: "150px",
//               width: "100%",
//               objectFit: "cover",
//               borderRadius: "8px",
//               marginBottom: "10px"
//             }} />
//             <h3 style={{ margin: "10px 0" }}>{product.name}</h3>
//             <p style={{ fontWeight: "bold", color: "green", marginBottom: "10px" }}>
//               ₹{product.price}
//             </p>
//             <button
//               type="button"
//               onClick={() => dispatch(addToCart(product))}
//               style={{
//                 backgroundColor: "green",
//                 color: "white",
//                 padding: "10px 16px",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontWeight: "bold",
//                 transition: "all 0.2s ease"
//               }}
//               onMouseOver={e => e.currentTarget.style.backgroundColor = "darkgreen"}
//               onMouseOut={e => e.currentTarget.style.backgroundColor = "green"}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Buttons */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => goToPage(i + 1)}
//             style={{
//               margin: '0 5px',
//               fontWeight: currentPage === i + 1 ? 'bold' : 'normal'
//             }}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Nonveg;



Nonveg.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "./Nonveg.css";
import { toast, ToastContainer } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";  

function Nonveg() {
  const nonvegItems = useSelector(
    (globalstate) => globalstate.products.nonvegItems
  );
  const dispatch = useDispatch();

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonvegItems.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  // ✅ handle add to cart + toast
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`, {
      autoClose: 2000,
      position: "top-right",
    });
  };

  return (
    <div className="nonveg-container">
      <h2 className="nonveg-title">Non-Veg Items</h2>

      <div className="nonveg-grid">
        {currentItems.map((product) => (
          <div key={product.id} className="nonveg-card">
            <img
              src={product.image}
              alt={product.name}
              className="nonveg-image"
            />
            <h3>{product.name}</h3>
            <p className="nonveg-price">₹{product.price}</p>
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
       <ToastContainer />
    </div>
  );
}

export default Nonveg;
