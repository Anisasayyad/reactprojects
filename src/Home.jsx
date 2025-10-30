// import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "./App.css";  

// function Home() {
//   return (
//     <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
//       {/* Menu Bar */}
//       <header
//         style={{
//           backgroundColor: "black",
//           padding: "20px",
//           color: "white",
//           textAlign: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <img
//           src="/logo.jpg"
//           alt="Foodies Hub Logo"
//           style={{
//             position: "absolute",
//             left: "20px",
//             height: "50px",
//             borderRadius: "5px",
//           }}
//         />

//         <div>
//           <h1 style={{ fontSize: "2rem", margin: "0" }}>🍴 Welcome to Food Hub</h1>
//           <p style={{ fontSize: "1.1rem", margin: "5px 0 10px" }}>
//             Fresh Veggies, Juices & More. Delivered to Your Door
//           </p>
//           <div>
//             <Link
//               to="/"
//               style={{
//                 margin: "0 10px",
//                 padding: "8px 16px",
//                 backgroundColor: "#27ae60",
//                 color: "white",
//                 textDecoration: "none",
//                 borderRadius: "6px",
//                 fontWeight: "bold",
//               }}
//             >
//               Shop Veg
//             </Link>
//             <Link
//               to="/cart"
//               style={{
//                 margin: "0 10px",
//                 padding: "8px 16px",
//                 backgroundColor: "#e74c3c",
//                 color: "white",
//                 textDecoration: "none",
//                 borderRadius: "6px",
//                 fontWeight: "bold",
//               }}
//             >
//               View Cart
//             </Link>
//           </div>
//         </div>
//       </header>

//       {/* Search Bar */}
//       <div style={{ textAlign: "center", margin: "20px 0" }}>
//         <input
//           type="text"
//           placeholder="🔍 Search for products..."
//           style={{
//             width: "60%",
//             padding: "10px 15px",
//             fontSize: "1rem",
//             borderRadius: "8px",
//             border: "1px solid #ccc",
//             outline: "none",
//           }}
//         />
//       </div>

//       {/* Carousel with Side Arrows, No Dots */}
//       <section>
//         <Carousel
//           autoPlay
//           infiniteLoop
//           showThumbs={false}
//           showStatus={false}
//           showIndicators={false}
//           showArrows={true}
//           interval={3000}
//         >
//           <div>
//             <img
//               src="/home.jpg"
//               alt="Veg"
//               style={{ width: "100%", maxHeight: "80vh", objectFit: "cover", background: "#000" }}
//             />
//           </div>
//           <div>
//             <img
//               src="/home2.jpg"
//               alt="NonVeg"
//               style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }}
//             />
//           </div>
//           <div>
//             <img
//               src="/burger.jpg"
//               alt="Drinks"
//               style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }}
//             />
//           </div>
//           <div>
//             <img
//               src="/home5.jpg"
//               alt="Chocolates"
//               style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }}
//             />
//           </div>
//         </Carousel>
//       </section>

//       {/* Categories Section */}
//       <section style={{ padding: "40px 20px", textAlign: "center" }}>
//         <h2 style={{ marginBottom: "20px" }}>🍽️ Explore Categories</h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "30px",
//           }}
//         >
//           {[
//             { name: "Veg", img: "/rajma.jpg" },
//             { name: "Non-Veg", img: "/chicken.jpg" },
//             { name: "Drinks", img: "/home3.jpg" },
//             { name: "Chocolates", img: "/home5.jpg" },
//           ].map((cat, index) => (
//             <div key={index} style={{ textAlign: "center" }}>
//               <img
//                 src={cat.img}
//                 alt={cat.name}
//                 style={{
//                   width: "120px",
//                   height: "120px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                 }}
//               />
//               <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Shop by Category */}
//       <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f1f1f1" }}>
//         <h2 style={{ marginBottom: "20px" }}>🛍️ Shop by Category</h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "30px",
//           }}
//         >
//           {[
//             { name: "Fruits", img: "/home4.jpg" },
//             { name: "Beverages", img: "/beverages.jpg" },
//             { name: "Snacks", img: "/snacks.jpg" },
//             { name: "Organic", img: "/organic.jpg" },
//           ].map((cat, index) => (
//             <div key={index} style={{ textAlign: "center" }}>
//               <img
//                 src={cat.img}
//                 alt={cat.name}
//                 style={{
//                   width: "140px",
//                   height: "140px",
//                   borderRadius: "12px",
//                   objectFit: "cover",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                 }}
//               />
//               <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat.name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Special Offers */}
//       <section style={{ padding: "40px 20px", textAlign: "center" }}>
//         <h2 style={{ marginBottom: "20px" }}>🔥 Special Offers</h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "30px",
//           }}
//         >
//           {["/offer1.jpg", "/offer2.jpg", "/offer3.jpg"].map((offerImg, index) => (
//             <div key={index} style={{ textAlign: "center" }}>
//               <img
//                 src={offerImg}
//                 alt={`Offer ${index + 1}`}
//                 style={{
//                   width: "300px",
//                   height: "200px",
//                   borderRadius: "12px",
//                   objectFit: "cover",
//                   boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About Section */}
//       <section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Why Choose Us?</h2>
//         <p
//           style={{
//             maxWidth: "800px",
//             margin: "0 auto",
//             fontSize: "1.1rem",
//             lineHeight: "1.6",
//             textAlign: "center",
//           }}
//         >
//           At <b>Food Hub</b>, we bring you the freshest vegetables, fruits, juices,
//           and delicious food items at affordable prices. Our mission is to make healthy
//           and tasty food accessible to everyone, right at your doorstep. 🌱
//         </p>
//       </section>

//       {/* Footer */}
//       <footer
//         style={{
//           backgroundColor: "#2c3e50",
//           color: "white",
//           padding: "20px",
//           textAlign: "center",
//           marginTop: "30px",
//         }}
//       >
//         <p>© 2025 Food Hub. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";  
import FadeInSection from "./FadeInSection";

function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      
      {/* Menu Bar */}
      <FadeInSection>
        <header
          style={{
            backgroundColor: "black",
            padding: "20px",
            color: "white",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <img
            src="/logo.jpg"
            alt="Foodies Hub Logo"
            style={{
              position: "absolute",
              left: "20px",
              height: "50px",
              borderRadius: "5px",
            }}
          />

          <div>
            <h1 style={{ fontSize: "2rem", margin: "0" }}>🍴 Welcome to Food Hub</h1>
            <p style={{ fontSize: "1.1rem", margin: "5px 0 10px" }}>
              Fresh Veggies, Juices & More. Delivered to Your Door
            </p>
            <div>
              <Link
                to="/"
                style={{
                  margin: "0 10px",
                  padding: "8px 16px",
                  backgroundColor: "#27ae60",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                Shop Veg
              </Link>
              <Link
                to="/cart"
                style={{
                  margin: "0 10px",
                  padding: "8px 16px",
                  backgroundColor: "#e74c3c",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "6px",
                  fontWeight: "bold",
                }}
              >
                View Cart
              </Link>
            </div>
          </div>
        </header>
      </FadeInSection>

      {/* Search Bar */}
      <FadeInSection>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <input
            type="text"
            placeholder="🔍 Search for products..."
            style={{
              width: "60%",
              padding: "10px 15px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>
      </FadeInSection>

      {/* Carousel */}
      <FadeInSection>
        <section>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            interval={3000}
          >
            <div>
              <img src="/home.jpg" alt="Veg" style={{ width: "100%", maxHeight: "80vh", objectFit: "cover", background: "#000" }} />
            </div>
            <div>
              <img src="/home2.jpg" alt="NonVeg" style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }} />
            </div>
            <div>
              <img src="/burger.jpg" alt="Drinks" style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }} />
            </div>
            <div>
              <img src="/home5.jpg" alt="Chocolates" style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", background: "#000" }} />
            </div>
          </Carousel>
        </section>
      </FadeInSection>

      {/* Categories Section with Marquee */}
<FadeInSection>
  <section style={{ padding: "40px 20px", textAlign: "center", overflow: "hidden" }}>
    <h2 style={{ marginBottom: "20px" }}>🍽️ Explore Categories</h2>

    {/* Marquee container */}
    <div
      style={{
        display: "flex",
        gap: "40px",
        animation: "marquee 20s linear infinite",
        width: "fit-content",
      }}
    >
      {[
        { name: "Veg", img: "/rajma.jpg" },
        { name: "Non-Veg", img: "/chicken.jpg" },
        { name: "Fresh juice", img: "/home3.jpg" },
        { name: "Chocolates", img: "/home5.jpg" },
        { name: "Snacks", img: "/snacks.jpg" },
        { name: "French Fries", img: "/frenc.jpg" },
        { name: "Spring Rolls", img: "/spring.jpg" },
      ].map((cat, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={cat.img}
            alt={cat.name}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat.name}</p>
        </div>
      ))}
    </div>
  </section>
</FadeInSection>


      {/* Shop by Category */}
      <FadeInSection>
        <section style={{ padding: "40px 20px", textAlign: "center", backgroundColor: "#f1f1f1" }}>
          <h2 style={{ marginBottom: "20px" }}>🛍️ Shop by Category</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
            {[
              { name: "Fruits", img: "/fruits.jpg" },
              { name: "Beverages", img: "/beverages.jpg" },
              { name: "Snacks", img: "/snacks.jpg" },
              { name: "Organic", img: "/organic.jpg" },
            ].map((cat, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img src={cat.img} alt={cat.name} style={{ width: "140px", height: "140px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
                <p style={{ marginTop: "10px", fontWeight: "bold" }}>{cat.name}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Special Offers */}
      <FadeInSection>
        <section style={{ padding: "40px 20px", textAlign: "center" }}>
          <h2 style={{ marginBottom: "20px" }}>🔥 Special Offers</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
            {["/offer1.jpg", "/offer2.jpg", "/offer3.jpg"].map((offerImg, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <img src={offerImg} alt={`Offer ${index + 1}`} style={{ width: "300px", height: "200px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
              </div>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* About Section */}
      <FadeInSection>
        <section style={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Why Choose Us?</h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center" }}>
            At <b>Food Hub</b>, we bring you the freshest vegetables, fruits, juices,
            and delicious food items at affordable prices. Our mission is to make healthy
            and tasty food accessible to everyone, right at your doorstep. 🌱
          </p>
        </section>
      </FadeInSection>

      {/* Footer */}
      <FadeInSection>
        <footer style={{ backgroundColor: "#2c3e50", color: "white", padding: "20px", textAlign: "center", marginTop: "30px" }}>
          <p>© 2025 Food Hub. All rights reserved.</p>
        </footer>
      </FadeInSection>
    </div>
  );
}

export default Home;
