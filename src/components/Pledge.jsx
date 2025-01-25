import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Pledge = () => {
    const navigate = useNavigate()
  const [selectedPledge, setSelectedPledge] = useState("");
  const [pledgeMade, setPledgeMade] = useState(false);

  const handlePledge = () => {
    if (selectedPledge) {
      setPledgeMade(true);
    } else {
      alert("Please select a pledge before submitting.");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Lato",
        textAlign: "center",
        padding: "2px",
        backgroundColor: "#E8F5E9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#4caf50", fontSize: "45px" }}><u>Take the Sustainability Pledge</u> 🌍</h1>
      <p><h2>Make a pledge to reduce paper cup usage and promote sustainability!</h2></p>
      <p style={{ margin: "20px 0", color: "#555" }}>
        <h3>Join us in making a difference! Take a pledge to reduce paper cup waste
        and contribute to a more sustainable future. Together, we can create
        positive change for the planet. 🌱</h3>
      </p>

      <h2 style={{ color: "#ff9800" }}>Why Take the Pledge?</h2>
            <strong>Protect the Environment:</strong> Help reduce waste and
            pollution caused by single-use paper cups.
            <br></br>
            <strong>Save Resources:</strong> Reduce the number of trees and
            energy used to produce disposable cups.
            <br></br>
            <strong>Inspire Change:</strong> Be a role model for others and
            encourage them to adopt sustainable habits.
            <br></br>
          

      {!pledgeMade ? (
        <>
          
          <div
            style={{
              marginTop: "20px",
              textAlign: "left",
              display: "inline-block",
              backgroundColor: "#ffffff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ color: "#333" }}>Choose Your Pledge:</h3>
            <div>
              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  type="radio"
                  value="I pledge to carry my own reusable cup."
                  checked={selectedPledge === "I pledge to carry my own reusable cup."}
                  onChange={(e) => setSelectedPledge(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                I pledge to carry my own reusable cup.☕
              </label>

              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  type="radio"
                  value="I will avoid single-use cups."
                  checked={selectedPledge === "I will avoid single-use cups."}
                  onChange={(e) => setSelectedPledge(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                I will avoid single-use cups.🌍
              </label>

              <label style={{ display: "block", marginBottom: "10px" }}>
                <input
                  type="radio"
                  value="I will encourage others to reduce paper cup usage."
                  checked={selectedPledge === "I will encourage others to reduce paper cup usage."}
                  onChange={(e) => setSelectedPledge(e.target.value)}
                  style={{ marginRight: "10px" }}
                />
                I will encourage others to reduce paper cup usage.🧃
              </label>
            </div>
          </div><br></br>

          
          <button
            onClick={handlePledge}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Pledge
          </button>
        </>
      ) : (
        <>
          
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#4caf50" }}>Thank You for Your Pledge! 🌱</h2>
            <p>You pledged: <strong>{selectedPledge}</strong></p>
          </div>

          
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              backgroundColor: "#F1F8E9",
              borderRadius: "8px",
              border: "2px solid #4caf50",
              display: "inline-block",
            }}
          >
            <h3 style={{ color: "#4caf50" }}>Sustainability Champion Badge</h3>
            <p>🎖️ Congratulations on your commitment to sustainability!</p>
          </div>
          
        </>
        
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

export default Pledge;
