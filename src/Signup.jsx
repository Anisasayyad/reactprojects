// import React, { useState, useRef } from "react";

// function Signup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const fullNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//     setMessage("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.fullName.trim()) {
//       fullNameRef.current.focus();
//       setError("Full Name is required");
//       return;
//     }
//     if (!formData.email.trim()) {
//       emailRef.current.focus();
//       setError("Email is required");
//       return;
//     }
//     if (!formData.password.trim()) {
//       passwordRef.current.focus();
//       setError("Password is required");
//       return;
//     }
//     if (!formData.confirmPassword.trim()) {
//       confirmPasswordRef.current.focus();
//       setError("Confirm your password");
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       confirmPasswordRef.current.focus();
//       setError("Passwords do not match");
//       return;
//     }

//     setMessage("Signup successful! Welcome to Food Hub 🍔");
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.formBox}>
//         <h1 style={styles.title}>Welcome to Food Hub</h1>
//         <p style={styles.subtitle}>Sign up to explore delicious meals delivered to your doorstep</p>

//         <form onSubmit={handleSubmit} style={styles.form}>
//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Full Name</label>
//             <input
//               type="text"
//               name="fullName"
//               ref={fullNameRef}
//               value={formData.fullName}
//               onChange={handleChange}
//               style={styles.input}
//               placeholder="Enter your name"
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               ref={emailRef}
//               value={formData.email}
//               onChange={handleChange}
//               style={styles.input}
//               placeholder="Enter your mail"
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Password</label>
//             <input
//               type="password"
//               name="password"
//               ref={passwordRef}
//               value={formData.password}
//               onChange={handleChange}
//               style={styles.input}
//               placeholder="Enter your password"
//             />
//           </div>

//           <div style={styles.inputGroup}>
//             <label style={styles.label}>Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               ref={confirmPasswordRef}
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               style={styles.input}
//               placeholder="confirm password"
//             />
//           </div>

//           {error && <p style={styles.error}>{error}</p>}

//           <button type="submit" style={styles.button}>
//             Create Account
//           </button>

//           {message && <p style={styles.success}>{message}</p>}
//         </form>

//         <p style={styles.loginLink}>
//           Already have an account? <a href="#" style={{ color: "#4CAF50", textDecoration: "none" }}>Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     padding: "1rem",
//     boxSizing: "border-box",
//   },
//   formBox: {
//     backgroundColor: "rgba(255, 255, 255, 0.95)",
//     padding: "3rem",
//     borderRadius: "15px",
//     width: "100%",
//     maxWidth: "400px",
//     boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
//     textAlign: "center",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "0.5rem",
//     color: "#333",
//   },
//   subtitle: {
//     marginBottom: "2rem",
//     color: "#666",
//     fontSize: "1rem",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   inputGroup: {
//     marginBottom: "1rem",
//     textAlign: "left",
//   },
//   label: {
//     display: "block",
//     marginBottom: "0.3rem",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "0.75rem",
//     borderRadius: "8px",
//     border: "1px solid #ccc",
//     fontSize: "1rem",
//   },
//   button: {
//     padding: "0.75rem",
//     backgroundColor: "#FF5722",
//     color: "#fff",
//     border: "none",
//     borderRadius: "8px",
//     fontSize: "1rem",
//     cursor: "pointer",
//     marginTop: "1rem",
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//     marginTop: "0.5rem",
//   },
//   success: {
//     color: "green",
//     textAlign: "center",
//     marginTop: "0.5rem",
//   },
//   loginLink: {
//     marginTop: "1rem",
//     fontSize: "0.9rem",
//   },
// };

// export default Signup;





import React, { useState, useRef } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      fullNameRef.current.focus();
      setError("Full Name is required");
      return;
    }
    if (!formData.email.trim()) {
      emailRef.current.focus();
      setError("Email is required");
      return;
    }
    if (!formData.password.trim()) {
      passwordRef.current.focus();
      setError("Password is required");
      return;
    }
    if (!formData.confirmPassword.trim()) {
      confirmPasswordRef.current.focus();
      setError("Confirm your password");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      confirmPasswordRef.current.focus();
      setError("Passwords do not match");
      return;
    }

    setMessage("🎉 Signup successful! Welcome to Food Hub 🍔");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.leftPane}>
        <div style={styles.formBox}>
          <h1 style={styles.title}>Welcome to Food Hub</h1>
          <p style={styles.subtitle}>
            Sign up to explore delicious meals delivered to your doorstep
          </p>

          {!message ? (
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  ref={fullNameRef}
                  value={formData.fullName}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your emaail"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password</label>
                <input
                  type="password"
                  name="password"
                  ref={passwordRef}
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Enter your password"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  ref={confirmPasswordRef}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Confirm password"
                />
              </div>

              {error && <p style={styles.error}>{error}</p>}

              <button type="submit" style={styles.button}>
                Create Account
              </button>
            </form>
          ) : (
            <p style={styles.success}>{message}</p>
          )}

          <p style={styles.loginLink}>
            Already have an account?{" "}
            <a href="#" style={{ color: "#FF5722", textDecoration: "none" }}>
              Login
            </a>
          </p>
        </div>
      </div>

      <div style={styles.rightPane}></div>
    </div>
  );
}
const styles = {
  pageContainer: {
    display: "flex",
    minHeight: "60vh", // Further reduced overall height
    maxWidth: "1400px", // Wider container
    margin: "auto",
    marginTop: "3rem",
    gap: "2rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "15px",
    overflow: "hidden",
  },
  leftPane: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
  },
  rightPane: {
    flex: 1.2, // Slightly larger width for the image
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    minHeight: "300px", // Shorter image height
  },
  formBox: {
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    padding: "2rem",
    borderRadius: "15px",
    maxWidth: "400px", // Increased form width
    width: "100%",
    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "0.5rem",
    color: "#333",
  },
  subtitle: {
    marginBottom: "1rem",
    color: "#666",
    fontSize: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputGroup: {
    marginBottom: "0.8rem",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "0.3rem",
    fontWeight: "bold",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "0.7rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    padding: "0.7rem",
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "0.5rem",
    fontSize: "0.9rem",
  },
  success: {
    color: "green",
    textAlign: "center",
    fontSize: "1.1rem",
    marginTop: "1rem",
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: "1rem",
    fontSize: "0.9rem",
  },
};



export default Signup;




// import React, { useState, useRef } from "react";
// import Swal from 'sweetalert2';
// import confetti from 'canvas-confetti';

// function Signup() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const fullNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//     setMessage("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.fullName.trim()) {
//       fullNameRef.current.focus();
//       setError("Full Name is required");
//       return;
//     }
//     if (!formData.email.trim()) {
//       emailRef.current.focus();
//       setError("Email is required");
//       return;
//     }
//     if (!formData.password.trim()) {
//       passwordRef.current.focus();
//       setError("Password is required");
//       return;
//     }
//     if (!formData.confirmPassword.trim()) {
//       confirmPasswordRef.current.focus();
//       setError("Confirm your password");
//       return;
//     }
//     if (formData.password !== formData.confirmPassword) {
//       confirmPasswordRef.current.focus();
//       setError("Passwords do not match");
//       return;
//     }

//     Swal.fire('Success', 'Signup successful!', 'success').then(() => {
//       confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
//     });

//     setMessage("🎉 Signup successful! Welcome to Food Hub 🍔");
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//     setError("");
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={cardStyle} className="fade-in">
//         <h1 style={titleStyle}>🚀 Create Your Account</h1>
//         <p style={subtitleStyle}>Join Food Hub to enjoy delicious meals delivered fast</p>

//         {!message ? (
//           <form onSubmit={handleSubmit} style={formStyle}>
//             <input
//               type="text"
//               name="fullName"
//               ref={fullNameRef}
//               value={formData.fullName}
//               onChange={handleChange}
//               style={inputStyle}
//               placeholder="Full Name"
//             />

//             <input
//               type="email"
//               name="email"
//               ref={emailRef}
//               value={formData.email}
//               onChange={handleChange}
//               style={inputStyle}
//               placeholder="Email Address"
//             />

//             <input
//               type="password"
//               name="password"
//               ref={passwordRef}
//               value={formData.password}
//               onChange={handleChange}
//               style={inputStyle}
//               placeholder="Password"
//             />

//             <input
//               type="password"
//               name="confirmPassword"
//               ref={confirmPasswordRef}
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               style={inputStyle}
//               placeholder="Confirm Password"
//             />

//             {error && <p style={errorStyle}>{error}</p>}

//             <button type="submit" style={buttonStyle}>Create Account</button>
//           </form>
//         ) : (
//           <p style={successStyle}>{message}</p>
//         )}

//         <p style={loginLinkStyle}>
//           Already have an account?{" "}
//           <a href="#" style={{ color: "#3b82f6", textDecoration: "none" }}>
//             Log In
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// const containerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   minHeight: '100vh',
//   background: 'linear-gradient(135deg, #eef2f7, #d6e0f0)',  // Soft light pastel gradient
// };

// const cardStyle = {
//   backgroundColor: '#ffffff',
//   padding: '40px',
//   borderRadius: '12px',
//   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//   textAlign: 'center',
//   width: '400px',
// };

// const titleStyle = {
//   fontSize: '2rem',
//   marginBottom: '10px',
//   color: '#333',
// };

// const subtitleStyle = {
//   fontSize: '1rem',
//   marginBottom: '20px',
//   color: '#555',
// };

// const formStyle = {
//   display: 'flex',
//   flexDirection: 'column',
// };

// const inputStyle = {
//   padding: '12px',
//   marginBottom: '15px',
//   fontSize: '16px',
//   borderRadius: '8px',
//   border: '1px solid #ccd6e0',
//   outline: 'none',
//   backgroundColor: '#f8fafc',
// };

// const buttonStyle = {
//   padding: '14px',
//   backgroundColor: '#3b82f6',  // Light blue button
//   color: '#fff',
//   fontSize: '16px',
//   fontWeight: 'bold',
//   border: 'none',
//   borderRadius: '8px',
//   cursor: 'pointer',
// };

// const errorStyle = {
//   color: '#e74c3c',
//   fontSize: '0.9rem',
//   marginBottom: '10px',
// };

// const successStyle = {
//   color: '#2ecc71',
//   fontSize: '1.1rem',
//   fontWeight: 'bold',
// };

// const loginLinkStyle = {
//   marginTop: '20px',
//   fontSize: '0.9rem',
// };

// export default Signup;
