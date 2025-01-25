import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#B4D6CD",
        color: "#fff",
        fontFamily: "Lato",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      
      <div>
        <h2 style={{ margin: "0", fontSize: "30px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            CupCut 🧃
          </Link>
        </h2>
      </div>

      
      <div>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: "0",
            padding: "0",
            gap: "20px",
          }}
        >
          <li>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/learnmore"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Learn More
            </Link>
          </li>
          <li>
            <Link
              to="/getstarted"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Link>
          </li>
          <li>
            <Link
              to="/calc"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Impact Calculator
            </Link>
          </li>
          <li>
            <Link
              to="/reusetrack"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Reusability Tracker
            </Link>
          </li>
          <li>
            <Link
              to="/pledge"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Sustainability Pledge
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
