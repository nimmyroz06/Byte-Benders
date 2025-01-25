import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Calc = () => {
    const navigate = useNavigate()
  const [dailyCups, setDailyCups] = useState("");
  const [yearlyWaste, setYearlyWaste] = useState(null);

  const calculateImpact = () => {
    const yearlyCups = dailyCups * 365;
    const treesCut = (yearlyCups * 0.02).toFixed(2);
    const energyConsumed = (yearlyCups * 0.5).toFixed(2);

    setYearlyWaste({
      yearlyCups,
      treesCut,
      energyConsumed,
    });
  };

  return (
    <div
      style={{
        fontFamily: "Lato",
        textAlign: "center",
        padding: "2px",
        backgroundColor: "#F9DBBA",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#4caf50" , fontSize: "45px"}}><u>Impact Calculator</u>📊</h1>
      <p><h2>Calculate the environmental impact of your daily paper cup usage!</h2></p>

      
      <div style={{ margin: "20px 0" }}>
        <input
          type="number"
          placeholder="Enter daily paper cup usage"
          value={dailyCups}
          onChange={(e) => setDailyCups(e.target.value)}
          style={{
            padding: "10px",
            width: "60%",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      
      <button
        onClick={calculateImpact}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Calculate Impact
      </button>

      
      {yearlyWaste && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#FFC785",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#333" }}>Your Yearly Impact</h2>
          <p>
            <strong>Yearly Cups Used:</strong> {yearlyWaste.yearlyCups}
          </p>
          <p>
            <strong>Trees Cut:</strong> {yearlyWaste.treesCut}
          </p>
          <p>
            <strong>Energy Consumed:</strong> {yearlyWaste.energyConsumed} kWh
          </p>

          <h3 style={{ color: "#2196f3" }}>Suggestions for Reusability</h3>
          <ul style={{ textAlign: "left", margin: "0 auto", maxWidth: "400px" }}>
            <li>Use a reusable mug or thermos for your beverages.</li>
            <li>Encourage your favorite coffee shop to offer discounts for reusable cups.</li>
            <li>Invest in collapsible travel cups for convenience.</li>
          </ul>
        </div>
      )}

      
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

export default Calc;
