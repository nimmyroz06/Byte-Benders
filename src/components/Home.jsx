import React from "react";

const Home = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1 style={{ color: "#333" }}>
        Welcome to CupSense 🧃
      </h1>
      <p style={{ color: "#555" }}>
        Let's work together to reduce paper cup waste and promote sustainability.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#4caf50",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Learn More
        </button>
        <button
          style={{
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
