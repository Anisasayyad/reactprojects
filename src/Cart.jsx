// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
//   clearCart,
//   addOrder
// } from './store';
// import { applyDiscount, getCuponDiscount } from './discountUtils';
// import emailjs from '@emailjs/browser';
// import confetti from 'canvas-confetti';
// import QRCode from "react-qr-code";
// import Swal from 'sweetalert2';  
// import { toast } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";
// import './Cart.css';

// function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart);

//   const [discount, setDiscount] = useState(0);
//   const [cuponCode, setCuponCode] = useState('');
//   const [cuponResult, setCuponResult] = useState({
//     isValid: false,
//     discountPercent: 0,
//     discountAmount: 0
//   });
//   const [customerEmail, setCustomerEmail] = useState('');

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const finalPrice = applyDiscount(totalPrice, discount);
//   const discountAmount = totalPrice - finalPrice;
//   const taxAmount = totalPrice * 0.05;

//   // ✅ Apply coupon
//   const handleApplyCupon = () => {
//     const result = getCuponDiscount(cuponCode, totalPrice);
//     setCuponResult(result);

//     if (result.isValid) {
//       confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
//       Swal.fire({
//         icon: 'success',
//         title: 'Coupon Applied!',
//         text: `🎉 You saved ₹${result.discountAmount} (${result.discountPercent}% off)`,
//       });
//     } else if (cuponCode) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Coupon',
//         text: 'Please enter a valid coupon code.',
//       });
//     }
//   };

//   // ✅ Checkout (send email)
//   const handleCheckout = () => {
//     if (!customerEmail) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Email Required',
//         text: 'Please enter your email to proceed with checkout.',
//       });
//       return;
//     }

//     const templateParams = {
//       order_id: Date.now(),
//       orders: cartItems.map(item => ({
//         name: item.name,
//         price: (item.price * item.quantity),
//         units: item.quantity
//       })),
//       cost: {
//         shipping: 30,
//         tax: taxAmount.toFixed(2),
//         total: finalPrice.toFixed(2)
//       },
//       email: customerEmail
//     };

//     emailjs.send('service_q9effgr', 'template_vfrtlos', templateParams, 'J3i051S_q4vCiJb2d')
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Email Sent!',
//           text: 'Order details sent to your email successfully.',
//         });
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Email Failed',
//           text: 'Failed to send email. Please try again later.',
//         });
//       });
//   };

//   // ✅ Complete purchase
//   const handleCompletePurchase = () => {
//     if (cartItems.length === 0) {
//       Swal.fire({
//         icon: 'info',
//         title: 'Cart Empty',
//         text: 'Your cart is empty!',
//       });
//       return;
//     }

//     const purchaseDetails = {
//       date: new Date().toLocaleString(),
//       items: [...cartItems],
//       totalPrice: finalPrice,
//     };
//     dispatch(clearCart());
//     dispatch(addOrder(purchaseDetails));

//     Swal.fire({
//       icon: 'success',
//       title: 'Purchase Completed!',
//       text: 'Your order has been saved to orders.',
//     });
//   };

//   if (cartItems.length === 0) {
//     return <h2>Your cart is empty!</h2>;
//   }

//   const upiId = "9346355055-2@ibl";
//   const payeeName = "Food Store";
//   const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${finalPrice.toFixed(2)}&cu=INR`;

//   return (
//     <div className="cart-container">
//       <h2>🛒 Your Cart</h2>
//       <ul className="cart-list">
//         {cartItems.map((item) => (
//           <li key={item.id} className="cart-item">
//             <img src={item.image} alt={item.name} className="cart-item-img" />
//             <div className="cart-item-details">
//               <h3>{item.name}</h3>
//               <p>₹{item.price} × {item.quantity} = <b>₹{item.price * item.quantity}</b></p>
//               <div className="cart-buttons">
//                 <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
//                 <button onClick={() => dispatch(decrementQuantity(item))}>−</button>
//                 <button 
//                   onClick={() => {
//                     dispatch(removeFromCart(item));
//                     toast.error(`${item.name} removed from cart ❌`);
//                   }}
//                 >
//                   Remove
//                 </button>
//               </div>                
//             </div>
//           </li>
//         ))}
//       </ul>

//       <div className="cart-summary">
//         <h2>Total: ₹{totalPrice}</h2>

//         <h3>Apply Discount:</h3>
//         <div className="discount-buttons">
//           <button onClick={() => setDiscount(10)}>10% Off</button>
//           <button onClick={() => setDiscount(20)}>20% Off</button>
//           <button onClick={() => setDiscount(30)}>30% Off</button>
//         </div>

//         {discount > 0 && (
//           <p>Discount Applied: {discount}% (You saved ₹{discountAmount.toFixed(2)})</p>
//         )}

//         <h2>Final Price: ₹{finalPrice.toFixed(2)}</h2>

//         <input
//           type="text"
//           placeholder="Enter coupon code"
//           value={cuponCode}
//           onChange={(e) => setCuponCode(e.target.value)}
//         />
//         <button onClick={handleApplyCupon}>Apply Coupon</button>

//         {cuponResult.isValid && (
//           <div className="coupon-success">
//             🎉 Coupon "{cuponCode}" applied: {cuponResult.discountPercent}% off (You saved ₹{cuponResult.discountAmount})
//           </div>
//         )}
//       </div>

//       {/* ✅ QR Code Section */}
//       <div className="payment-section">
//         <h2>Scan & Pay</h2>
//         <QRCode value={upiLink} size={200} />
//         <p>Use any UPI app (GPay, PhonePe, Paytm) to scan and pay ₹{finalPrice.toFixed(2)}</p>
//       </div> 
      

//       <div className="email-section">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={customerEmail}
//           onChange={(e) => setCustomerEmail(e.target.value)}
//         />
//       </div>

//       <div className="cart-actions">
//         <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//         <button onClick={handleCheckout}>CheckOut & Send Email</button>
//         <button onClick={handleCompletePurchase}>Complete Purchase</button>
//       </div>
//     </div>
//   );
// }

// export default Cart;
// my previous code




// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   removeFromCart,
//   incrementQuantity,
//   decrementQuantity,
//   clearCart,
//   addOrder
// } from './store';
// import { applyDiscount, getCuponDiscount } from './discountUtils';
// import emailjs from '@emailjs/browser';
// import confetti from 'canvas-confetti';
// import QRCode from "react-qr-code";
// import Swal from 'sweetalert2';  
// import { toast } from "react-toastify"; 
// import "react-toastify/dist/ReactToastify.css";
// import './Cart.css';

// function Cart() {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart);

//   const [discount, setDiscount] = useState(0);
//   const [cuponCode, setCuponCode] = useState('');
//   const [cuponResult, setCuponResult] = useState({
//     isValid: false,
//     discountPercent: 0,
//     discountAmount: 0
//   });
//   const [customerEmail, setCustomerEmail] = useState('');

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   const finalPrice = applyDiscount(totalPrice, discount);
//   const discountAmount = totalPrice - finalPrice;
//   const taxAmount = totalPrice * 0.05;

//   const handleApplyCupon = () => {
//     const result = getCuponDiscount(cuponCode, totalPrice);
//     setCuponResult(result);

//     if (result.isValid) {
//       confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
//       Swal.fire({
//         icon: 'success',
//         title: 'Coupon Applied!',
//         text: `🎉 You saved ₹${result.discountAmount} (${result.discountPercent}% off)`,
//       });
//     } else if (cuponCode) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Invalid Coupon',
//         text: 'Please enter a valid coupon code.',
//       });
//     }
//   };

//   const handleCheckout = () => {
//     if (!customerEmail) {
//       Swal.fire({
//         icon: 'warning',
//         title: 'Email Required',
//         text: 'Please enter your email to proceed with checkout.',
//       });
//       return;
//     }

//     const templateParams = {
//       order_id: Date.now(),
//       orders: cartItems.map(item => ({
//         name: item.name,
//         price: (item.price * item.quantity),
//         units: item.quantity
//       })),
//       cost: {
//         shipping: 30,
//         tax: taxAmount.toFixed(2),
//         total: finalPrice.toFixed(2)
//       },
//       email: customerEmail
//     };

//     emailjs.send('service_q9effgr', 'template_vfrtlos', templateParams, 'J3i051S_q4vCiJb2d')
//       .then(() => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Email Sent!',
//           text: 'Order details sent to your email successfully.',
//         });
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         Swal.fire({
//           icon: 'error',
//           title: 'Email Failed',
//           text: 'Failed to send email. Please try again later.',
//         });
//       });


//    };

//   const handleCompletePurchase = () => {
//     if (cartItems.length === 0) {
//       Swal.fire({
//         icon: 'info',
//         title: 'Cart Empty',
//         text: 'Your cart is empty!',
//       });
//       return;
//     }

//     const purchaseDetails = {
//       date: new Date().toLocaleString(),
//       items: [...cartItems],
//       totalPrice: finalPrice,
//     };
//     dispatch(clearCart());
//     dispatch(addOrder(purchaseDetails));

//     Swal.fire({
//       icon: 'success',
//       title: 'Purchase Completed!',
//       text: 'Your order has been saved to orders.',
//     });
//   };

//   if (cartItems.length === 0) {
//     return <h2>Your cart is empty!</h2>;
//   }

//   const upiId = "9346355055-2@ibl";
//   const payeeName = "Food Store";
//   const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${finalPrice.toFixed(2)}&cu=INR`;

//   return (
//     <div className="cart-container">
//       <h2>🛒 Your Cart Items</h2>

//       <div className="cart-main">

//         {/* Left Side: Only Cart Items */}
//         <div className="cart-left">
//           <ul className="cart-list">
//             {cartItems.map((item) => (
//               <li key={item.id} className="cart-item">
//                 <img src={item.image} alt={item.name} className="cart-item-img" />
//                 <div className="cart-item-details">
//                   <h3>{item.name}</h3>
//                   <p>₹{item.price} × {item.quantity} = <b>₹{item.price * item.quantity}</b></p>
//                   <div className="cart-buttons">
//                     <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
//                     <button onClick={() => dispatch(decrementQuantity(item))}>−</button>
//                     <button onClick={() => {
//                       dispatch(removeFromCart(item));
//                       toast.error(`${item.name} removed from cart ❌`);
//                     }}>
//                       Remove
//                     </button>
//                   </div>                
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Side: Total Summary, Coupon, Email, Actions, Payment */}
//         <div className="cart-right">

//           <div className="cart-summary">
//             <h2>Order Details...</h2>
//             <h2>Total: ₹{totalPrice}</h2>

//             <h3>Apply Discount:</h3>
//             <div className="discount-buttons">
//               <button onClick={() => setDiscount(10)}>10% Off</button>
//               <button onClick={() => setDiscount(20)}>20% Off</button>
//               <button onClick={() => setDiscount(30)}>30% Off</button>
//             </div>

//             {discount > 0 && (
//               <p>Discount Applied: {discount}% (You saved ₹{discountAmount.toFixed(2)})</p>
//             )}

//             <h2>Final Price: ₹{finalPrice.toFixed(2)}</h2>
//              <div className="coupon-section"></div>
//             <input
//               type="text"
//               placeholder="Enter coupon code"
//               value={cuponCode}
//               onChange={(e) => setCuponCode(e.target.value)}
//             />
//             <button onClick={handleApplyCupon}>Apply Coupon</button>

//             {cuponResult.isValid && (
//               <div className="coupon-success">
//                 🎉 Coupon "{cuponCode}" applied: {cuponResult.discountPercent}% off (You saved ₹{cuponResult.discountAmount})
//               </div>
//             )}
//           </div>

//           <div className="email-section">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={customerEmail}
//               onChange={(e) => setCustomerEmail(e.target.value)}
//             />
//           </div>

//           <div className="cart-actions">
//             <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//             <button onClick={handleCheckout}>CheckOut & Send Email</button>
//             <button onClick={handleCompletePurchase}>Complete Purchase</button>
//           </div>

//           <div className="payment-section">
//             <h2>Scan & Pay</h2>

//             {/* <div className="payment-summary">
//               <p><b>Total Price:</b> ₹{totalPrice.toFixed(2)}</p>
//               <p><b>Discount Applied:</b> {discount > 0 ? `${discount}% (₹${discountAmount.toFixed(2)} saved)` : 'No discount applied'}</p>
//               <p><b>Final Amount:</b> ₹{finalPrice.toFixed(2)}</p>
//             </div> */}

//             <QRCode value={upiLink} size={200} />
//             <p>Use any UPI app (GPay, PhonePe, Paytm) to scan and pay ₹{finalPrice.toFixed(2)}</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, clearCart, addOrder } from './store';
import { applyDiscount, getCuponDiscount } from './discountUtils';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import QRCode from "react-qr-code";
import Swal from 'sweetalert2';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Cart.css';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  const [discount, setDiscount] = useState(0);
  const [cuponCode, setCuponCode] = useState('');
  const [cuponResult, setCuponResult] = useState({ isValid: false, discountPercent: 0, discountAmount: 0 });
  const [customerEmail, setCustomerEmail] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalPrice = applyDiscount(totalPrice, discount);
  const discountAmount = totalPrice - finalPrice;
  const taxAmount = totalPrice * 0.05;

  const handleApplyCupon = () => {
    const result = getCuponDiscount(cuponCode, totalPrice);
    setCuponResult(result);

    if (result.isValid) {
      confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
      Swal.fire({
        icon: 'success',
        title: 'Coupon Applied!',
        text: `🎉 You saved ₹${result.discountAmount} (${result.discountPercent}% off)`,
      });
    } else if (cuponCode) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Coupon',
        text: 'Please enter a valid coupon code.',
      });
    }
  };

  const handleCheckout = () => {
    if (!customerEmail) {
      Swal.fire({
        icon: 'warning',
        title: 'Email Required',
        text: 'Please enter your email to proceed with checkout.',
      });
      return;
    }

    const templateParams = {
      order_id: Date.now(),
      orders: cartItems.map(item => ({
        name: item.name,
        price: (item.price * item.quantity),
        units: item.quantity
      })),
      cost: {
        shipping: 30,
        tax: taxAmount.toFixed(2),
        total: finalPrice.toFixed(2)
      },
      email: customerEmail
    };

    emailjs.send('service_q9effgr', 'template_vfrtlos', templateParams, 'J3i051S_q4vCiJb2d')
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Email Sent!',
          text: 'Order details sent to your email successfully.',
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        Swal.fire({
          icon: 'error',
          title: 'Email Failed',
          text: 'Failed to send email. Please try again later.',
        });
      });
  };

  const handleCompletePurchase = () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: 'info',
        title: 'Cart Empty',
        text: 'Your cart is empty!',
      });
      return;
    }

    const purchaseDetails = {
      date: new Date().toLocaleString(),
      items: [...cartItems],
      totalPrice: finalPrice,
    };
    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));

    Swal.fire({
      icon: 'success',
      title: 'Purchase Completed!',
      text: 'Your order has been saved to orders.',
    });
  };

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>🛒 Your cart is empty!</h2>;
  }

  const upiId = "9346355055-2@ibl";
  const payeeName = "Food Store";
  const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${finalPrice.toFixed(2)}&cu=INR`;

  return (
    <div className="cart-container">
      {/* <ToastContainer position="top-right" autoClose={2000} /> */}
      <h2>🛒 Your Cart Items</h2>

      <div className="cart-main">

        {/* Left Side: Only Cart Items */}
        <div className="cart-left">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity} = <b>₹{item.price * item.quantity}</b></p>
                  <div className="cart-buttons">
                    <button onClick={() => dispatch(incrementQuantity(item))}>+</button>
                    <button onClick={() => dispatch(decrementQuantity(item))}>−</button>
                    <button onClick={() => { dispatch(removeFromCart(item)); toast.error(`${item.name} removed from cart ❌`); }}>Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Summary + Payment */}
        <div className="cart-right">
          <div className="cart-summary">
            <h2>Order Details</h2>
            <p><b>Total Price:</b> ₹{totalPrice.toFixed(2)}</p>

            <h3>Apply Discount</h3>
            <div className="discount-buttons">
              <button onClick={() => setDiscount(10)}>10% Off</button>
              <button onClick={() => setDiscount(20)}>20% Off</button>
              <button onClick={() => setDiscount(30)}>30% Off</button>
            </div>

            {discount > 0 && (
              <p>Discount Applied: {discount}% (₹{discountAmount.toFixed(2)} saved)</p>
            )}

            <p><b>Final Price:</b> ₹{finalPrice.toFixed(2)}</p>

            <div className="coupon-section">
              <input type="text" placeholder="Enter coupon code" value={cuponCode} onChange={(e) => setCuponCode(e.target.value)} />
              <button onClick={handleApplyCupon}>Apply Coupon</button>

              {cuponResult.isValid && (
                <div className="coupon-success">
                  🎉 Coupon "{cuponCode}" applied: {cuponResult.discountPercent}% off (₹{cuponResult.discountAmount})
                </div>
              )}
            </div>

            <div className="email-section">
              <input type="email" placeholder="Enter your email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} />
            </div>

            <div className="cart-actions">
              <button className="cart-action-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
              <button className="cart-action-btn" onClick={handleCheckout}>Checkout & Send Email</button>
              <button className="cart-action-btn" onClick={handleCompletePurchase}>Complete Purchase</button>
            </div>

            <div className="payment-section">
              <h3>Select Payment Method</h3>
              <div className="payment-options">
                <button onClick={() => { setSelectedPaymentMethod('qr'); setShowQrCode(true); }}>QR Code</button>
                <button onClick={() => { setSelectedPaymentMethod('card'); setShowQrCode(false); }}>Card Payment</button>
                <button onClick={() => { setSelectedPaymentMethod('cod'); setShowQrCode(false); }}>Cash on Delivery</button>
              </div>

              {showQrCode && (
                <div className="qr-display">
                  <QRCode value={upiLink} size={200} />
                  <p>Scan with any UPI app (GPay, PhonePe, Paytm) to pay ₹{finalPrice.toFixed(2)}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;


