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
//   const [submittedData, setSubmittedData] = useState(null);

//   const fullNameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const confirmPasswordRef = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setError("");
//     setMessage("");
//     setSubmittedData(null);
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

//     setMessage("Signup successful!");
//     setSubmittedData({
//       fullName: formData.fullName,
//       email: formData.email,
//     });

//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <div style={styles.pageContainer}>
//       {!submittedData ? (
//         <div style={styles.formBox}>
//           <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Signup</h2>

//           <form onSubmit={handleSubmit} style={styles.form}>
//             <div style={styles.inputGroup}>
//               <label>Full Name:</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 ref={fullNameRef}
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//             </div>

//             <div style={styles.inputGroup}>
//               <label>Email Address:</label>
//               <input
//                 type="email"
//                 name="email"
//                 ref={emailRef}
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//             </div>

//             <div style={styles.inputGroup}>
//               <label>Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 ref={passwordRef}
//                 value={formData.password}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//             </div>

//             <div style={styles.inputGroup}>
//               <label>Confirm Password:</label>
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 ref={confirmPasswordRef}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 style={styles.input}
//               />
//             </div>

//             {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//             <button type="submit" style={styles.button}>
//               Sign Up
//             </button>

//             {message && <p style={{ color: "green", textAlign: "center", marginTop: "1rem" }}>{message}</p>}
//           </form>
//         </div>
//       ) : (
//         <div style={styles.dataDisplayBox}>
//           <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Submitted Data</h2>
//           <p><strong>Full Name:</strong> {submittedData.fullName}</p>
//           <p><strong>Email:</strong> {submittedData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f5f5f5",
//     padding: "1rem",
//     boxSizing: "border-box",
//     flexDirection: "column",
//   },
//   formBox: {
//     padding: "2rem",
//     borderRadius: "10px",
//     backgroundColor: "#ffffff",
//     width: "100%",
//     maxWidth: "400px",
//     boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   inputGroup: {
//     marginBottom: "1rem",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     width: "100%",
//   },
//   input: {
//     width: "100%",
//     padding: "0.5rem",
//     marginTop: "0.3rem",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "1rem",
//   },
//   button: {
//     width: "100%",
//     padding: "0.7rem",
//     backgroundColor: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "1rem",
//   },
//   dataDisplayBox: {
//     padding: "2rem",
//     borderRadius: "10px",
//     backgroundColor: "#ffffff",
//     width: "100%",
//     maxWidth: "400px",
//     boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
//     textAlign: "center",
//   },
// };

// export default Signup;



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
//     <div style={styles.pageContainer}>
//       <div style={styles.leftPane}>
//         <div style={styles.formBox}>
//           <h1 style={styles.title}>Welcome to Food Hub</h1>
//           <p style={styles.subtitle}>
//             Sign up to explore delicious meals delivered to your doorstep
//           </p>

//           {!message ? (
//             <form onSubmit={handleSubmit} style={styles.form}>
//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Full Name</label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   ref={fullNameRef}
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   style={styles.input}
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Email Address</label>
//                 <input
//                   type="email"
//                   name="email"
//                   ref={emailRef}
//                   value={formData.email}
//                   onChange={handleChange}
//                   style={styles.input}
//                   placeholder="Enter your mail"
//                 />
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   ref={passwordRef}
//                   value={formData.password}
//                   onChange={handleChange}
//                   style={styles.input}
//                   placeholder="Enter your password"
//                 />
//               </div>

//               <div style={styles.inputGroup}>
//                 <label style={styles.label}>Confirm Password</label>
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   ref={confirmPasswordRef}
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   style={styles.input}
//                   placeholder="confirmpassword"
//                 />
//               </div>

//               {error && <p style={styles.error}>{error}</p>}

//               <button type="submit" style={styles.button}>
//                SignUp
//               </button>
//             </form>
//           ) : (
//             <p style={styles.success}>{message}</p>
//           )}

//           <p style={styles.loginLink}>
//             Already have an account?{" "}
//             <a href="#" style={{ color: "#FF5722", textDecoration: "none" }}>
//               Login
//             </a>
//           </p>
//         </div>
//       </div>

//       <div style={styles.rightPane}></div>
//     </div>
//   );
// }

// const styles = {
//   pageContainer: {
//     display: "flex",
//     minHeight: "100vh",
//     width: "100%",
//     backgroundColor: "#f5f5f5",
//   },
//   leftPane: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   rightPane: {
//     flex: 1,
//     backgroundImage:
//       "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
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
//     fontSize: "1.2rem",
//     marginTop: "1rem",
//     fontWeight: "bold",
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
                  placeholder="John Doe"
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
                  placeholder="john@example.com"
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
                  placeholder="********"
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
                  placeholder="********"
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
