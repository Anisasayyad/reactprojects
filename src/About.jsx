// import React from "react";

// function AboutUs() {
//   const styles = {
//     container: {
//       fontFamily: '"Poppins", sans-serif',
//       backgroundColor: '#f9fafb',
//       padding: '3rem 1rem',
//       maxWidth: '1200px',
//       margin: 'auto',
//     },
//     hero: {
//       textAlign: 'center',
//       marginBottom: '3rem',
//     },
//     heroImage: {
//       width: '250px',
//       borderRadius: '15px',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
//     },
//     heroTitle: {
//       fontSize: '3rem',
//       color: '#2c3e50',
//       margin: '1rem 0 0.5rem',
//     },
//     heroSubtitle: {
//       fontSize: '1.2rem',
//       color: '#7f8c8d',
//       maxWidth: '700px',
//       margin: 'auto',
//       lineHeight: '1.6',
//     },
//     cardsWrapper: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '2rem',
//       marginTop: '2rem',
//     },
//     card: {
//       backgroundColor: '#fff',
//       borderRadius: '15px',
//       padding: '2rem',
//       boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//       textAlign: 'center',
//       transition: 'transform 0.3s, box-shadow 0.3s',
//       cursor: 'pointer',
//     },
//     cardHover: {
//       transform: 'translateY(-10px)',
//       boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
//     },
//     cardImage: {
//       width: '100%',
//       height: '180px',
//       objectFit: 'cover',
//       borderRadius: '12px',
//       marginBottom: '1rem',
//     },
//     cardTitle: {
//       fontSize: '1.5rem',
//       color: '#2c3e50',
//       marginBottom: '0.5rem',
//     },
//     cardText: {
//       fontSize: '1rem',
//       color: '#555',
//       lineHeight: '1.6',
//     },
//     sectionTitle: {
//       textAlign: 'center',
//       fontSize: '2rem',
//       color: '#2c3e50',
//       margin: '3rem 0 1.5rem',
//     }
//   };

//   const cards = [
//     {
//       image: "/images/team.jpg",
//       title: "Our Team",
//       text: "Meet our passionate chefs, delivery partners, and food lovers who make everything possible.",
//     },
//     {
//       image: "/images/food.jpg",
//       title: "Fresh & Organic",
//       text: "We provide only the freshest vegetables, fruits, dairy, and more, sourced from trusted local suppliers.",
//     },
//     {
//       image: "/images/mission.jpg",
//       title: "Our Mission",
//       text: "To make high-quality, fresh, and delicious food accessible to everyone while supporting local producers.",
//     },
//     {
//       image: "/images/delivery.jpg",
//       title: "Fast Delivery",
//       text: "Get your orders delivered quickly and safely, straight to your doorstep every time.",
//     },
//     {
//       image: "/images/support.jpg",
//       title: "Customer Support",
//       text: "We are always available to answer your queries and assist you with your orders.",
//     },
//     {
//       image: "/images/sustainability.jpg",
//       title: "Sustainability",
//       text: "Committed to eco-friendly packaging and supporting sustainable farming practices.",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Hero Section */}
//       <div style={styles.hero}>
//         <img src="/images/about-hero.jpg" alt="About Hero" style={styles.heroImage} />
//         <h1 style={styles.heroTitle}>About FreshDesign</h1>
//         <p style={styles.heroSubtitle}>
//           Bringing the best local flavors straight to your doorstep with love and passion.
//           We are committed to freshness, quality, and customer satisfaction, delivering the best food experience possible.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div style={styles.cardsWrapper}>
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onMouseEnter={(e) => {
//               Object.assign(e.currentTarget.style, styles.cardHover);
//             }}
//             onMouseLeave={(e) => {
//               Object.assign(e.currentTarget.style, {
//                 transform: "none",
//                 boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
//               });
//             }}
//           >
//             <img src={card.image} alt={card.title} style={styles.cardImage} />
//             <h2 style={styles.cardTitle}>{card.title}</h2>
//             <p style={styles.cardText}>{card.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Optional extra section */}
//       <h2 style={styles.sectionTitle}>Why Choose FreshDesign?</h2>
//       <p style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto', color: '#555', lineHeight: '1.6' }}>
//         We prioritize freshness, quality, and customer satisfaction. Our products are sourced directly from trusted local suppliers, ensuring you get the healthiest and most delicious food every day. With a passionate team and fast delivery, we bring the best food experiences right to your doorstep.
//       </p>
//     </div>
//   );
// }

// export default AboutUs;



// import React from "react";

// function AboutUs() {
//   const styles = {
//     container: {
//       fontFamily: '"Poppins", sans-serif',
//       backgroundColor: '#fefcf9', // soft background
//       padding: '3rem 1rem',
//       maxWidth: '1200px',
//       margin: 'auto',
//     },
//     hero: {
//       textAlign: 'center',
//       marginBottom: '3rem',
//     },
//     heroImage: {
//       width: '250px',
//       borderRadius: '15px',
//       boxShadow: '0 10px 25px rgba(0,0,0,0.12)',
//     },
//     heroTitle: {
//       fontSize: '3rem',
//       color: '#e07b39', // warm earthy color
//       margin: '1rem 0 0.5rem',
//     },
//     heroSubtitle: {
//       fontSize: '1.2rem',
//       color: '#555',
//       maxWidth: '700px',
//       margin: 'auto',
//       lineHeight: '1.6',
//     },
//     cardsWrapper: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '2rem',
//       marginTop: '2rem',
//     },
//     card: {
//       backgroundColor: '#fff8f0', // soft card background
//       borderRadius: '15px',
//       padding: '2rem',
//       boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
//       textAlign: 'center',
//       transition: 'transform 0.3s, box-shadow 0.3s',
//       cursor: 'pointer',
//     },
//     cardHover: {
//       transform: 'translateY(-10px)',
//       boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
//     },
//     cardImage: {
//       width: '100%',
//       height: '180px',
//       objectFit: 'cover',
//       borderRadius: '12px',
//       marginBottom: '1rem',
//     },
//     cardTitle: {
//       fontSize: '1.5rem',
//       color: '#d35400', // slightly darker earthy color
//       marginBottom: '0.5rem',
//     },
//     cardText: {
//       fontSize: '1rem',
//       color: '#555',
//       lineHeight: '1.6',
//     },
//     sectionTitle: {
//       textAlign: 'center',
//       fontSize: '2rem',
//       color: '#e07b39',
//       margin: '3rem 0 1.5rem',
//     }
//   };

//   const cards = [
//     {
//       image: "/images/team.jpg",
//       title: "Our Team",
//       text: "Meet our passionate chefs, delivery partners, and food lovers who make everything possible.",
//     },
//     {
//       image: "/images/food.jpg",
//       title: "Fresh & Organic",
//       text: "We provide only the freshest vegetables, fruits, dairy, and more, sourced from trusted local suppliers.",
//     },
//     {
//       image: "/images/mission.jpg",
//       title: "Our Mission",
//       text: "To make high-quality, fresh, and delicious food accessible to everyone while supporting local producers.",
//     },
//     {
//       image: "/images/delivery.jpg",
//       title: "Fast Delivery",
//       text: "Get your orders delivered quickly and safely, straight to your doorstep every time.",
//     },
//     {
//       image: "/images/support.jpg",
//       title: "Customer Support",
//       text: "We are always available to answer your queries and assist you with your orders.",
//     },
//     {
//       image: "/images/sustainability.jpg",
//       title: "Sustainability",
//       text: "Committed to eco-friendly packaging and supporting sustainable farming practices.",
//     },
//   ];

//   return (
//     <div style={styles.container}>
//       {/* Hero Section */}
//       <div style={styles.hero}>
//         <img src="/images/about-hero.jpg" alt="About Hero" style={styles.heroImage} />
//         <h1 style={styles.heroTitle}>About Food Hub</h1>
//         <p style={styles.heroSubtitle}>
//           Bringing the best local flavors straight to your doorstep with love and passion.
//           We are committed to freshness, quality, and customer satisfaction, delivering the best food experience possible.
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div style={styles.cardsWrapper}>
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             style={styles.card}
//             onMouseEnter={(e) => {
//               Object.assign(e.currentTarget.style, styles.cardHover);
//             }}
//             onMouseLeave={(e) => {
//               Object.assign(e.currentTarget.style, {
//                 transform: "none",
//                 boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
//               });
//             }}
//           >
//             <img src={card.image} alt={card.title} style={styles.cardImage} />
//             <h2 style={styles.cardTitle}>{card.title}</h2>
//             <p style={styles.cardText}>{card.text}</p>
//           </div>
//         ))}
//       </div>

//       {/* Optional extra section */}
//       <h2 style={styles.sectionTitle}>Why Choose Food Hub?</h2>
//       <p style={{ textAlign: 'center', maxWidth: '800px', margin: 'auto', color: '#555', lineHeight: '1.6' }}>
//         At Food Hub, we prioritize freshness, quality, and customer satisfaction. Our products are sourced directly from trusted local suppliers,
//         ensuring you get the healthiest and most delicious food every day. With a passionate team and fast delivery, we bring the best food experiences right to your doorstep.
//       </p>
//     </div>
//   );
// }

// export default AboutUs;





import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Utensils, Heart, Leaf } from "lucide-react"; // icons

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        <motion.h1
          className="relative text-5xl md:text-6xl font-bold text-white z-10 text-center"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-green-400">Food Hub</span>
        </motion.h1>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-green-600">
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            At <span className="font-semibold">Food Hub</span>, we’re more than
            just a restaurant — we’re a community built on love for food. Our
            chefs bring passion and creativity to every dish, blending authentic
            recipes with a modern touch.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            From street-style flavors to fine dining delicacies, we’re here to
            make every meal an unforgettable experience.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full shadow-lg transition">
            Explore Menu
          </button>
        </motion.div>

        {/* Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1551782450-17144c3fa6e5"
          alt="Food"
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Mission / Values */}
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10 text-green-700">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <motion.div
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <Utensils className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Authentic Taste</h3>
              <p>
                We use fresh, locally sourced ingredients to bring you dishes
                full of flavor and tradition.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p>
                Every meal is crafted with care and passion, because food is not
                just fuel — it’s an emotion.
              </p>
            </motion.div>

            <motion.div
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.05 }}
            >
              <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p>
                We care about the planet. That’s why we focus on eco-friendly
                practices in our kitchen and delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
