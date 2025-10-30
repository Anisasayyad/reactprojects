// import React from 'react';

// function Signin() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>👤 Signin Page</h2>
//       <input type="text" placeholder="Username" style={inputStyle} /><br /><br />
//       <input type="password" placeholder="Password" style={inputStyle} /><br /><br />
//       <button style={buttonStyle}>Signin</button>
//     </div>
//   );
// }

// const inputStyle = {
//   padding: "10px",
//   width: "300px",
//   fontSize: "16px"
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   fontSize: "16px",
//   cursor: "pointer"
// };

// export default Signin;


import React, { useState } from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = () => {
    if (!username || !password) {
      Swal.fire('Error', 'All fields are required!', 'error');
      return;
    }

    Swal.fire('Success', 'Signed in successfully!', 'success').then(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    });

    // TODO: Add real signin logic
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle} className="fade-in">
        <h2 style={titleStyle}>👤 Sign In</h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleSignin} style={buttonStyle}>
          Sign In
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
  background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',  // Light soft pastel background
};

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',  // Soft shadow
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
  backgroundColor: '#f8fafc',
};

const buttonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Signin;
