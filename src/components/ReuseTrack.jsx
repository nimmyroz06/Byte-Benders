import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ReuseTrack = () => {
    const navigate = useNavigate()
  const [reusableCups, setReusableCups] = useState(0);
  const [points, setPoints] = useState(0);
  const [achievements, setAchievements] = useState([]);

  // Achievement milestones
  const milestones = [
    { cups: 5, achievement: "Reusable Hero 🌟" },
    { cups: 10, achievement: "Eco-Warrior 🏆" },
    { cups: 20, achievement: "Sustainability Champion 🌍" },
  ];

  // Function to handle cup logging
  const logReusableCup = () => {
    const newCount = reusableCups + 1;
    setReusableCups(newCount);
    setPoints(points + 10); // Add 10 points per reusable cup

    // Check for new achievements
    milestones.forEach((milestone) => {
      if (newCount === milestone.cups && !achievements.includes(milestone.achievement)) {
        setAchievements([...achievements, milestone.achievement]);
      }
    });
  };

  return (
    <div
      style={{
        fontFamily: "Lato",
        textAlign: "center",
        padding: "2px",
        backgroundColor: "#9DBDFF",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "#1E2A5E", fontSize: "45px"}}><u>Reusability Tracker</u> 📈</h1>
      <p><h2>Track your reusable cup usage and earn points & achievements!</h2></p>

      {/* Display Stats */}
      <div
        style={{
          margin: "20px 0",
          padding: "2px",
          backgroundColor: "#D2E0FB",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#1E2A5E", fontSize: "25px"}}>Your Stats</h2>
        <p>
          <h3><strong>Reusable Cups Logged:</strong></h3> {reusableCups}
        </p>
        <p>
        <h3><strong>Total Points:</strong></h3> {points}
        </p>
      </div>

      {/* Button to Log Usage */}
      <button
        onClick={logReusableCup}
        style={{
          padding: "10px 20px",
          backgroundColor: "#1E2A5E",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        Log a Reusable Cup
      </button>

      {/* Achievements Section */}
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#D2E0FB",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ color: "#333" }}>Achievements</h2>
        {achievements.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {achievements.map((achievement, index) => (
              <li key={index} style={{ color: "#F26B0F", fontSize: "18px" }}>
                {achievement}
              </li>
            ))}
          </ul>
        ) : (
          <p>No achievements yet. Start logging to earn rewards!</p>
        )}
      </div>

      {/* Back to Home Button */}
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

export default ReuseTrack;
