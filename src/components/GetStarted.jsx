import React from "react";
import { useNavigate } from "react-router-dom";

const GetStarted = () => {
  const navigate = useNavigate()

  return (
    <div
      style={{
        fontFamily: "Lato",
        textAlign: "center",
        padding: "2px",
        backgroundColor: "#D0B8A8",
      }}
    >
      <h1 style={{ color: "#493628" ,fontSize: "45px" }}><u>Get Started with Cupcut </u>🚀</h1>
      <p><h2>Explore activities to reduce paper cup usage and promote sustainability.</h2></p>

      
      <div
        style={{
          textAlign: "left",
          maxWidth: "800px",
          margin: "20px auto",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#493628" }}>What Can You Do?</h2>
        <p>
          Our activities are designed to help you make a difference by reducing paper cup waste and embracing sustainability. Here's how you can contribute:
        </p>

        
        <h3 style={{ color: "#F05A7E" }}><i>1. Impact Calculator</i></h3>
        <p>
          Calculate how your daily paper cup usage contributes to waste. Discover the environmental impact (like trees cut and energy consumed) and get suggestions for reusable alternatives like mugs or thermoses.
        </p>

        
        <h3 style={{ color: "#629584" }}><i>2. Reusability Tracker</i></h3>
        <p>
          Log your reusable cup usage and earn points or achievements for every eco-friendly choice you make. Track your progress and inspire others to join you!
        </p>

        
        <h3 style={{ color: "#8D77AB" }}><i>3. Sustainability Pledge</i></h3>
        <p>
          Take a pledge to reduce your paper cup usage by adopting reusable alternatives. Choose from options like carrying your own cup or avoiding single-use cups, and receive a digital badge or certificate for your commitment.
        </p>
      </div>

      
      <div style={{ marginTop: "30px" }}>
        
        <button
          onClick={() => navigate("/calc")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#F05A7E",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Impact Calculator
        </button>

        
        <button
          onClick={() => navigate("/reusetrack")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#629584",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reusability Tracker
        </button>

        
        <button
          onClick={() => navigate("/pledge")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#8D77AB",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Sustainability Pledge
        </button>
      </div>
      
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#A04747",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
