// import React, { useState } from 'react';
// import Swal from 'sweetalert2';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (!email || !password) {
//       Swal.fire('Error', 'All fields are required!', 'error');
//       return;
//     }

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       Swal.fire('Error', 'Please enter a valid email address.', 'error');
//       return;
//     }

//     Swal.fire('Success', 'Logged in successfully!', 'success');
//     // TODO: Perform login logic
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>🔑 Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//         style={{ padding: '10px', margin: '10px' }}
//       /><br />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={e => setPassword(e.target.value)}
//         style={{ padding: '10px', margin: '10px' }}
//       /><br />
//       <button
//         style={{ padding: '10px 20px', cursor: 'pointer' }}
//         onClick={handleLogin}
//       >
//         Login
//       </button>
//     </div>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Swal.fire('Error', 'All fields are required!', 'error');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire('Error', 'Please enter a valid email address.', 'error');
      return;
    }

    Swal.fire('Success', 'Logged in successfully!', 'success').then(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    });

    // TODO: Add real login logic
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="fade-in">
        <h2 style={titleStyle}>🔐 Welcome Back</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fadeIn 1s ease;
        }
      `}</style>
    </div>
  );
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',  // Soft light blue-gray gradient
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',  // Softer shadow
  textAlign: 'center',
  width: '360px',
};

const titleStyle = {
  marginBottom: '25px',
  fontSize: '28px',
  fontWeight: 'bold',
  color: '#333',
};

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginBottom: '20px',
  fontSize: '16px',
  borderRadius: '8px',
  border: '1px solid #ccd6f6',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: '#f8fafc'
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: 'black',  // Light blue
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Login;
