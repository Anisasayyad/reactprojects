// import React, { useState } from 'react';
// //import contactImage from '../assets/contact-image.jpg';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [responseMsg, setResponseMsg] = useState('');

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, subject, message } = formData;

//     if (name && email && subject && message) {
//       // Placeholder: Replace with API call or EmailJS integration
//       setResponseMsg('Thank you! Your message has been sent successfully.');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       });
//     } else {
//       setResponseMsg('Please fill out all fields.');
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.imageSection}>
//         <img src="public/contact.jpg" alt="Contact Us" style={styles.image} />
//       </div>

//       <div style={styles.formSection}>
//         <h1 style={styles.heading}>Contact Us</h1>
//         <p style={styles.subtitle}>
//           Questions about our delicious food or want to collaborate? We're all ears!
//         </p>

//         <form style={styles.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             style={styles.textarea}
//             required
//           ></textarea>

//           <button type="submit" style={styles.button}>Send Message</button>
//         </form>

//         {responseMsg && <p style={styles.response}>{responseMsg}</p>}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '50px',
//     backgroundColor: '#fff8f0',
//     fontFamily: 'Arial, sans-serif',
//   },
//   imageSection: {
//     flex: '1 1 400px',
//     textAlign: 'center',
//     padding: '20px',
//   },
//   image: {
//     maxWidth: '100%',
//     borderRadius: '10px',
//     boxShadow: '0 0 15px rgba(0,0,0,0.1)',
//   },
//   formSection: {
//     flex: '1 1 400px',
//     padding: '20px',
//     maxWidth: '500px',
//   },
//   heading: {
//     color: '#e67e22',
//     marginBottom: '10px',
//   },
//   subtitle: {
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '15px',
//   },
//   input: {
//     padding: '12px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   textarea: {
//     padding: '12px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//   },
//   button: {
//     backgroundColor: '#e67e22',
//     color: '#fff',
//     padding: '14px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
//   response: {
//     marginTop: '20px',
//     fontWeight: 'bold',
//   },
// };

// export default ContactUs;




// import React, { useState } from 'react';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     alert('Message sent successfully!');
//     setFormData({ name: '', email: '', message: '' });
//     // TODO: Replace alert with actual API or EmailJS integration
//   };

//   const styles = {
//     container: {
//       maxWidth: '1200px',
//       margin: 'auto',
//       padding: '2rem',
//       fontFamily: 'Inter, sans-serif',
//       background: '#f4f7f9',
//     },
//     hero: {
//       textAlign: 'center',
//       padding: '3rem 1rem'
//     },
//     heroTitle: {
//       fontSize: '2.5rem',
//       color: '#2c3e50',
//     },
//     heroSubtitle: {
//       fontSize: '1.1rem',
//       color: '#555',
//     },
//     contactWrapper: {
//       display: 'flex',
//       gap: '3rem',
//       flexWrap: 'wrap',
//       marginTop: '3rem',
//     },
//     contactForm: {
//       flex: 1,
//       background: '#fff',
//       padding: '2rem',
//       borderRadius: '8px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     },
//     contactInfo: {
//       flex: 1,
//       background: '#fff',
//       padding: '2rem',
//       borderRadius: '8px',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     },
//     formLabel: {
//       display: 'block',
//       marginBottom: '0.5rem',
//       fontWeight: 600,
//     },
//     formInput: {
//       width: '100%',
//       padding: '0.75rem',
//       marginBottom: '1.25rem',
//       border: '1px solid #ddd',
//       borderRadius: '5px',
//       fontSize: '1rem',
//     },
//     formButton: {
//       backgroundColor: '#27ae60',
//       color: '#fff',
//       padding: '0.85rem 1.5rem',
//       border: 'none',
//       borderRadius: '5px',
//       fontSize: '1rem',
//       cursor: 'pointer',
//     },
//     contactInfoText: {
//       marginBottom: '1rem',
//       fontSize: '1rem',
//     },
//     map: {
//       marginTop: '2rem',
//     },
//     iframe: {
//       width: '100%',
//       height: '300px',
//       borderRadius: '8px',
//       border: '0',
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.hero}>
//         <h1 style={styles.heroTitle}>Contact Us</h1>
//         <p style={styles.heroSubtitle}>We would love to hear from you! Send us a message.</p>
//       </div>

//       <div style={styles.contactWrapper}>

//         <form style={styles.contactForm} onSubmit={handleSubmit}>
//           <h2>Get in Touch</h2>

//           <label style={styles.formLabel}>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             style={styles.formInput}
//           />

//           <label style={styles.formLabel}>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//             required
//             style={styles.formInput}
//           />

//           <label style={styles.formLabel}>Message</label>
//           <textarea
//             name="message"
//             rows="6"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Write your message..."
//             required
//             style={styles.formInput}
//           />

//           <button type="submit" style={styles.formButton}>Send Message</button>
//         </form>

//         <div style={styles.contactInfo}>
//           <h2>Contact Information</h2>
//           <p style={styles.contactInfoText}><strong>📍 Address:</strong> 123 Modern Street, Tech City, India</p>
//           <p style={styles.contactInfoText}><strong>📞 Phone:</strong> +91 98765 43210</p>
//           <p style={styles.contactInfoText}><strong>✉️ Email:</strong> support@freshdesign.com</p>

//           <div style={styles.map}>
//             <iframe
//               src="https://maps.google.com/maps?q=tech%20city%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               title="Company Location"
//               style={styles.iframe}
//               allowFullScreen
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ContactUs;


// import React, { useState } from 'react';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const [responseMsg, setResponseMsg] = useState('');
//   const [hover, setHover] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, email, subject, message } = formData;

//     if (name && email && subject && message) {
//       setResponseMsg('✅ Thank you! Your message has been sent successfully.');
//       setFormData({ name: '', email: '', subject: '', message: '' });

//       // TODO: Replace with real EmailJS or API call
//     } else {
//       setResponseMsg('⚠️ Please fill out all fields.');
//     }
//   };

//   const styles = {
//     container: {
//       fontFamily: '"Poppins", sans-serif',
//       backgroundColor: '#f9fafb',
//       padding: '3rem 1rem',
//     },
//     hero: {
//       textAlign: 'center',
//       marginBottom: '3rem',
//     },
//     heroImage: {
//       width: '150px',
//       borderRadius: '50%',
//       boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
//     },
//     heroTitle: {
//       fontSize: '3rem',
//       color: '#2c3e50',
//       margin: '1rem 0 0.5rem',
//     },
//     heroSubtitle: {
//       fontSize: '1.2rem',
//       color: '#7f8c8d',
//     },
//     aboutFoodWrapper: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '2rem',
//       flexWrap: 'wrap',
//       marginBottom: '3rem',
//     },
//     card: {
//       background: '#fff',
//       borderRadius: '10px',
//       padding: '2rem',
//       boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
//       flex: '1 1 400px',
//       minWidth: '300px',
//     },
//     sectionTitle: {
//       fontSize: '1.8rem',
//       color: '#2c3e50',
//       marginBottom: '1rem',
//     },
//     sectionText: {
//       fontSize: '1.1rem',
//       color: '#555',
//       lineHeight: '1.6',
//     },
//     contactWrapper: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '2rem',
//       flexWrap: 'wrap',
//     },
//     formInput: {
//       width: '100%',
//       padding: '12px',
//       marginBottom: '1rem',
//       borderRadius: '6px',
//       border: '1px solid #ddd',
//       fontSize: '1rem',
//     },
//     formButton: {
//       backgroundColor: hover ? '#1abc9c' : '#16a085',
//       color: '#fff',
//       padding: '12px 20px',
//       border: 'none',
//       borderRadius: '6px',
//       fontSize: '1rem',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease',
//     },
//     contactInfoText: {
//       fontSize: '1rem',
//       marginBottom: '1rem',
//       color: '#34495e',
//     },
//     map: {
//       marginTop: '1.5rem',
//     },
//     iframe: {
//       width: '100%',
//       height: '250px',
//       borderRadius: '8px',
//       border: '0',
//     },
//     response: {
//       marginTop: '1rem',
//       fontWeight: '600',
//       color: '#27ae60',
//     }
//   };

//   return (
//     <div style={styles.container}>

//       <div style={styles.hero}>
//         <img src="/home1.jpg" alt="Contact Hero" style={styles.heroImage} />
//         <h1 style={styles.heroTitle}>Contact Us</h1>
//         <p style={styles.heroSubtitle}>Have questions or need help? Reach out to us anytime!</p>
//       </div>

//       {/* About Us + Food Info Section */}
//       <div style={styles.aboutFoodWrapper}>
//         <div style={styles.card}>
//           <h2 style={styles.sectionTitle}>About Us</h2>
//           <p style={styles.sectionText}>
//             We are FreshDesign, a passionate food delivery service committed to bringing
//             delicious meals from the best local restaurants straight to your doorstep.
//             Our mission is to delight your taste buds while providing fast, reliable service.
//           </p>
//         </div>

//         <div style={styles.card}>
//           <h2 style={styles.sectionTitle}>Our Culinary Passion</h2>
//           <p style={styles.sectionText}>
//             Explore a world of flavors! From spicy curries to gourmet desserts, our curated
//             food selections are prepared fresh daily by top chefs. Quality, taste, and
//             convenience – all in one place.
//           </p>
//         </div>
//       </div>

//       {/* Contact Form + Info Section */}
//       <div style={styles.contactWrapper}>

//         {/* Contact Form */}
//         <div style={styles.card}>
//           <h2 style={styles.sectionTitle}>Send a Message</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Your Full Name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.formInput}
//             required
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.formInput}
//             required
//           />

//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//             style={styles.formInput}
//             required
//           />

//           <textarea
//             name="message"
//             rows="6"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             style={styles.formInput}
//             required
//           />

//           <button
//             type="submit"
//             style={styles.formButton}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             onClick={handleSubmit}
//           >
//             Send Message
//           </button>

//           {responseMsg && <p style={styles.response}>{responseMsg}</p>}
//         </div>

//         {/* Contact Info */}
//         <div style={styles.card}>
//           <h2 style={styles.sectionTitle}>Contact Information</h2>

//           <p style={styles.contactInfoText}>📍 123 Modern Street, Tech City, India</p>
//           <p style={styles.contactInfoText}>📞 +91 98765 43210</p>
//           <p style={styles.contactInfoText}>✉️ support@freshdesign.com</p>

//           <div style={styles.map}>
//             <iframe
//               src="https://maps.google.com/maps?q=tech%20city%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
//               title="Company Location"
//               style={styles.iframe}
//               allowFullScreen
//             />
//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// export default ContactUs;




import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [hover, setHover] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (name && email && subject && message) {
      setResponseMsg('✅ Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // TODO: Integrate EmailJS or API
    } else {
      setResponseMsg('⚠️ Please fill out all fields.');
    }
  };

  const styles = {
    container: {
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: '#f9fafb',
      padding: '3rem 1rem',
    },
    hero: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    heroImage: {
      width: '150px',
      borderRadius: '50%',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    },
    heroTitle: {
      fontSize: '3rem',
      color: '#2c3e50',
      margin: '1rem 0 0.5rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: '#7f8c8d',
    },
    aboutContactWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '3rem',
      flexWrap: 'wrap',
      marginBottom: '3rem',
    },
    card: {
      background: '#fff',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      flex: '1 1 400px',
      minWidth: '300px',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#2c3e50',
      marginBottom: '1rem',
    },
    sectionText: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
    },
    contactInfoText: {
      fontSize: '1rem',
      marginBottom: '1rem',
      color: '#34495e',
    },
    map: {
      marginTop: '1.5rem',
    },
    iframe: {
      width: '100%',
      height: '250px',
      borderRadius: '8px',
      border: '0',
    },
    formWrapper: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    formInput: {
      width: '100%',
      padding: '12px',
      marginBottom: '1rem',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '1rem',
    },
    formButton: {
      backgroundColor: hover ? '#1abc9c' : '#16a085',
      color: '#fff',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '6px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    response: {
      marginTop: '1rem',
      fontWeight: '600',
      color: '#27ae60',
    }
  };

  return (
    <div style={styles.container}>

      <div style={styles.hero}>
        <img src="public/contact.jpg" alt="Contact Hero" style={styles.heroImage} />
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroSubtitle}>
          We'd love to hear from you! Questions, feedback, or collaboration ideas?
        </p>
      </div>

      {/* About Us + Contact Info */}
      <div style={styles.aboutContactWrapper}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>About FreshDesign</h2>
          <p style={styles.sectionText}>
            FreshDesign is your trusted food delivery service. We specialize in connecting
            you with the best local restaurants and delivering fresh, delicious meals
            straight to your doorstep.
            <br /><br />
            Our mission: Quality, speed, and service. We are passionate about food and
            committed to making your dining experience effortless and enjoyable.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Contact Information</h2>

          <p style={styles.contactInfoText}>📍 Address: 123 Modern Street, Hi-Tech City, India</p>
          <p style={styles.contactInfoText}>📞 Phone: +91 9346355055</p>
          <p style={styles.contactInfoText}>✉️ Email: anisafathima@gmail.com</p>

          <div style={styles.map}>
            <iframe
              src="https://maps.google.com/maps?q=tech%20city%20india&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="Company Location"
              style={styles.iframe}
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div style={styles.formWrapper}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Send Us a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.formInput}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.formInput}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.formInput}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={styles.formInput}
            required
          />

          <button
            type="submit"
            style={styles.formButton}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleSubmit}
          >
            Send Message
          </button>

          {responseMsg && <p style={styles.response}>{responseMsg}</p>}
        </div>
      </div>

    </div>
  );
}

export default ContactUs;



