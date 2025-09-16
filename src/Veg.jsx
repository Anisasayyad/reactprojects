// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from './store';
// import { toast, ToastContainer } from "react-toastify";  
// import "react-toastify/dist/ReactToastify.css";  


// function Veg() {
//   const vegItems = useSelector(globalstate => globalstate.products.veg);
//   const dispatch = useDispatch();

//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(vegItems.length / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);


//   const goToPage = (pageNumber) => {
//     if (pageNumber < 1) pageNumber = 1;
//     else if (pageNumber > totalPages) pageNumber = totalPages;
//     setCurrentPage(pageNumber);
//   };

//   // ✅ handle add to cart + toast
//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     toast.success(`${product.name} added to cart! 🛒`, {
//       autoClose: 2000,
//       position: "top-right",
//     });
//   };

//   return (
//     <div style={{ minHeight: "100vh", width: "100vw", padding: "20px", backgroundColor: "#f5f5f5" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Veg Items</h2>

//       <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", width: "100%" }}>
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
//             justifyContent: "space-between"
//           }}>
//             <img src={product.image} alt={product.name} style={{
//               height: "250px",
//               width: "100%",
//               objectFit: "contain",
//               borderRadius: "8px",
//               marginBottom: "10px"
//             }} />
//             <h3>{product.name}</h3>
//             <p style={{ fontWeight: "bold", color: "green" }}>₹{product.price}</p>
//             <button
//               onClick={() => handleAddToCart(product)}
//               style={{
//                 backgroundColor: "green",
//                 color: "white",
//                 padding: "10px 16px",
//                 border: "none",
//                 borderRadius: "8px",
//                 cursor: "pointer",
//                 fontWeight: "bold"
//               }}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button key={i + 1} onClick={() => goToPage(i + 1)} style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}>
//             {i + 1}
//           </button>
//         ))}
//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Veg;



// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from './store';
// import { toast, ToastContainer } from "react-toastify";  
// import "react-toastify/dist/ReactToastify.css";  
// import './Veg.css';

// function Veg() {
//   const vegItems = useSelector(globalstate => globalstate.products.veg);
//   const dispatch = useDispatch();

//   const itemsPerPage = 4;
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(vegItems.length / itemsPerPage);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);

//   const goToPage = (pageNumber) => {
//     if (pageNumber < 1) pageNumber = 1;
//     else if (pageNumber > totalPages) pageNumber = totalPages;
//     setCurrentPage(pageNumber);
//   };

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//     toast.success(`${product.name} added to cart! 🛒`, {
//       autoClose: 2000,
//       position: "top-right",
//     });
//   };

//   return (
//     <div className="veg-container">
//       <h2 className="veg-title">Veg Items</h2>

//       <div className="veg-grid">
//         {currentItems.map(product => (
//           <div key={product.id} className="veg-item-card">
//             <img src={product.image} alt={product.name} className="veg-item-image" />
//             <h3 className="veg-item-name">{product.name}</h3>
//             <p className="veg-item-price">₹{product.price}</p>
//             <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="pagination">
//         <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i + 1}
//             onClick={() => goToPage(i + 1)}
//             className={currentPage === i + 1 ? 'active-page' : ''}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       {/* <ToastContainer /> */}
//     </div>
//   );
// }

// export default Veg;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import './Veg.css';

function Veg() {
  const vegItems = useSelector((state) => state.products.veg);
  const dispatch = useDispatch();

  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1) pageNumber = 1;
    else if (pageNumber > totalPages) pageNumber = totalPages;
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! 🛒`, {
      autoClose: 2000,
      position: 'top-right',
    });
  };

  return (
    <div className="veg-container">
      <h2 className="veg-title">Veg Items</h2>

      <div className="veg-grid">
        {currentItems.map((product) => (
          <div key={product.id} className="veg-item-card">
            <img src={product.image} alt={product.name} className="veg-item-image" />
            <h3 className="veg-item-name">{product.name}</h3>
            <p className="veg-item-price">₹{product.price}</p>
            <button className="add-cart-btn" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={currentPage === i + 1 ? 'active-page' : ''}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      {/* Toast container must be active */}
      <ToastContainer />
    </div>
  );
}

export default Veg;
