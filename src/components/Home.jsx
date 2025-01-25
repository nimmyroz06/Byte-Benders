import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        fontFamily: "Lato",
        textAlign: "center",
        padding: "2px",
        backgroundColor: "#FCF596",
      }}
    >
      <h1 style={{ color: "#118B50",fontSize: "45px" }}>
        <u>Welcome to CupCut </u>🧃
      </h1>
      <p style={{ color: "#555" }}>
        <h2>Let's work together to reduce paper cup waste and promote sustainability.</h2>
      </p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#77B254",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={()=>navigate("/learnmore")}
        >
          Learn More
        </button>
        <button
          style={{
            backgroundColor: "#78B3CE",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/getstarted")}
        >
          Get Started
        </button>
      </div>
      <br></br>
      <img
                    src="https://media.istockphoto.com/id/1421634411/vector/bring-your-own-cup.jpg?s=612x612&w=0&k=20&c=peVqY0B2rmwdSWVj0X3Buj4gkl9TNC0-eecjxgsgBHY="
                    alt="Environmental Impact"
                    style={{ width: "48%", height: "auto" }}
                />
    </div>
  );
};

export default Home;
