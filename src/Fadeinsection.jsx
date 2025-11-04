// import React, { useRef, useState, useEffect } from "react";

// const FadeInSection = ({ children }) => {
//   const ref = useRef();
//   const [isVisible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.unobserve(ref.current);
//         }
//       },
//       { threshold: 0.1 }
//     );
//     observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
//       {children}
//     </div>
//   );
// };

// export default FadeInSection;
// src/FadeInSection.jsx
import React, { useRef, useEffect, useState } from "react";

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
