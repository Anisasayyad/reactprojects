// import React from 'react'
// import { useSelector } from 'react-redux';

// function Orders() {
//   let orderItems=useSelector((globalState)=>globalState.orders);
//   let finalData=orderItems.map((purchase,index) =>(
//     <li key={index}>
//       <p>Date:{purchase.date}</p>
//       <p>Total Amount:₹{purchase.totalPrice.toFixed(2)}</p>
//       <ul>
//         {purchase.items.map((item,itemIndex) =>(
//           <li key={itemIndex}>
//             {item.name}-₹{item.price}*{item.quantity}
//           </li>
//         ))}
//       </ul>
//     </li>
//   ))
//   return (
//     <>
//     <h2>Orders </h2>
//     <ul>{finalData}</ul>
//     {orderItems.length === 0 && <p>No orders placed yet.</p>}
//     </>
//   )
// }

// export default Orders;

// import React from "react";
// import { useSelector } from "react-redux";

// function Orders() {
//   let orderItems = useSelector((globalState) => globalState.orders);

//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "20px auto",
//         padding: "20px",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#6c63ff" }}>
//         📦 My Orders
//       </h2>

//       {orderItems.length === 0 ? (
//         <p
//           style={{
//             textAlign: "center",
//             color: "#777",
//             fontSize: "18px",
//             marginTop: "30px",
//           }}
//         >
//           No orders placed yet. 🛒
//         </p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {orderItems.map((purchase, index) => (
//             <li
//               key={index}
//               style={{
//                 background: "#fff",
//                 marginBottom: "20px",
//                 borderRadius: "12px",
//                 padding: "15px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 border: "1px solid #f0f0f0",
//               }}
//             >
//               {/* Order Header */}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "12px",
//                   borderBottom: "1px solid #eee",
//                   paddingBottom: "8px",
//                 }}
//               >
//                 <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
//                   📅 Date: {purchase.date}
//                 </p>
//                 <p style={{ margin: 0, fontWeight: "bold", color: "#ff6f61" }}>
//                   Total: ₹{purchase.totalPrice.toFixed(2)}
//                 </p>
//               </div>

//               {/* Ordered Items */}
//               <ul style={{ listStyle: "none", padding: 0 }}>
//                 {purchase.items.map((item, itemIndex) => (
//                   <li
//                     key={itemIndex}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: "12px",
//                       background: "#fafafa",
//                       padding: "10px",
//                       borderRadius: "10px",
//                     }}
//                   >
//                     {/* Food Image */}
//                     <img
//                       src={item.image || "https://via.placeholder.com/80"}
//                       alt={item.name}
//                       style={{
//                         width: "80px",
//                         height: "70px",
//                         borderRadius: "10px",
//                         objectFit: "cover",
//                         marginRight: "15px",
//                         border: "1px solid #ddd",
//                       }}
//                     />

//                     {/* Item Details */}
//                     <div style={{ flex: 1 }}>
//                       <h4
//                         style={{
//                           margin: "0 0 5px 0",
//                           color: "#333",
//                           fontSize: "16px",
//                         }}
//                       >
//                         {item.name}
//                       </h4>
//                       <p style={{ margin: 0, color: "#555" }}>
//                         ₹{item.price} × {item.quantity}
//                       </p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               {/* Order Status */}
//               <div
//                 style={{
//                   textAlign: "right",
//                   marginTop: "10px",
//                   fontWeight: "bold",
//                   color: "#28a745",
//                 }}
//               >
//                 ✅ Order Delivered
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Orders;


// import React from "react";
// import { useSelector } from "react-redux";

// function Orders() {
//   let orderItems = useSelector((globalState) => globalState.orders);

//   return (
//     <div
//       style={{
//         maxWidth: "900px",
//         margin: "20px auto",
//         padding: "20px",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#6c63ff" }}>
//         📦 My Orders
//       </h2>

//       {orderItems.length === 0 ? (
//         <p
//           style={{
//             textAlign: "center",
//             color: "#777",
//             fontSize: "18px",
//             marginTop: "30px",
//           }}
//         >
//           No orders placed yet. 🛒
//         </p>
//       ) : (
//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {orderItems.map((purchase, index) => (
//             <li
//               key={index}
//               style={{
//                 background: "#fff",
//                 marginBottom: "20px",
//                 borderRadius: "12px",
//                 padding: "15px",
//                 boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                 border: "1px solid #f0f0f0",
//               }}
//             >
//               {/* Order Header */}
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "center",
//                   marginBottom: "12px",
//                   borderBottom: "1px solid #eee",
//                   paddingBottom: "8px",
//                 }}
//               >
//                 <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
//                   📅 Date: {purchase.date}
//                 </p>
//                 <p style={{ margin: 0, fontWeight: "bold", color: "#ff6f61" }}>
//                   Total: ₹{purchase.totalPrice.toFixed(2)}
//                 </p>
//               </div>

//               {/* Ordered Items */}
//               <ul style={{ listStyle: "none", padding: 0 }}>
//                 {purchase.items.map((item, itemIndex) => (
//                   <li
//                     key={itemIndex}
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: "15px",
//                       background: "#fafafa", 
//                       padding: "12px",
//                       borderRadius: "12px",
//                       transition: "0.3s",
//                     }}
//                   >
//                     {/* Food Image (left side) */}
//                     <img
//                       src={item.image || "https://via.placeholder.com/100"}
//                       alt={item.name}
//                       style={{
//                         width: "90px",
//                         height: "75px",
//                         borderRadius: "10px",
//                         objectFit: "cover",
//                         marginRight: "18px",
//                         border: "1px solid #ddd",
//                       }}
//                     />

//                     {/* Description (right side) */}
//                     <div style={{ flex: 1 }}>
//                       <h4
//                         style={{
//                           margin: "0 0 6px 0",
//                           color: "#333",
//                           fontSize: "17px",
//                         }}
//                       >
//                         {item.name}
//                       </h4>
//                       <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
//                         ₹{item.price} × {item.quantity}
//                       </p>
//                     </div>

//                     {/* Badge / Tag */}
//                     <div
//                       style={{
//                         background: "#6c63ff",
//                         color: "white",
//                         padding: "4px 10px",
//                         borderRadius: "8px",
//                         fontSize: "13px",
//                         fontWeight: "bold",
//                         marginLeft: "10px",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       Food Item
//                     </div>
//                   </li>
//                 ))}
//               </ul>

//               {/* Order Status */}
//               <div
//                 style={{
//                   textAlign: "right",
//                   marginTop: "10px",
//                   fontWeight: "bold",
//                   color: "#28a745",
//                 }}
//               >
//                 ✅ Order Delivered
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Orders;




import React from "react";
import { useSelector } from "react-redux";

function Orders() {
  const orderItems = useSelector((globalState) => globalState.orders);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#6c63ff" }}>
        📦 My Orders
      </h2>

      {orderItems.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777", fontSize: "18px", marginTop: "30px" }}>
          No orders placed yet. 🛒
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {orderItems.map((purchase, index) => (
            <li key={index}
              style={{
                background: "#fff",
                marginBottom: "20px",
                borderRadius: "12px",
                padding: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                border: "1px solid #f0f0f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "8px",
                }}
              >
                <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
                  📅 Date: {purchase.date}
                </p>
                <p style={{ margin: 0, fontWeight: "bold", color: "#ff6f61" }}>
                  Total: ₹{purchase.totalPrice.toFixed(2)}
                </p>
              </div>

              <ul style={{ listStyle: "none", padding: 0 }}>
                {purchase.items.map((item, itemIndex) => (
                  <li key={itemIndex}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      background: "#fafafa",
                      padding: "12px",
                      borderRadius: "12px",
                      transition: "0.3s",
                    }}
                  >
                    <img
                      src={item.image || "https://via.placeholder.com/100"}
                      alt={item.name}
                      style={{
                        width: "90px",
                        height: "75px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        marginRight: "18px",
                        border: "1px solid #ddd",
                      }}
                    />

                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: "0 0 6px 0", color: "#333", fontSize: "17px" }}>
                        {item.name}
                      </h4>
                      <p style={{ margin: 0, color: "#555", fontSize: "14px" }}>
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>

                    <div
                      style={{
                        background: "#6c63ff",
                        color: "white",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: "bold",
                        marginLeft: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Food Item
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold", color: "#28a745" }}>
                ✅ Order Delivered
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Orders;
