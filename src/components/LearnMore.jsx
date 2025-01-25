import React from "react";
import { useNavigate } from "react-router-dom";

const LearnMore = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                fontFamily: "Lato",
                textAlign: "center",
                padding: "2px",
                backgroundColor: "#FFE1FF",
            }}
        >
            <h1 style={{ color: "#3E7B27", fontSize: "45px" }}><u>Learn More About Sustainability </u>🧃</h1>
            <p>
                <h3>Discover how paper cups impact the environment and what you can do to
                    help reduce waste.</h3>
            </p>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>The Problem with Disposable Paper Cups</i></h2>
                <p>
                    Disposable paper cups are one of the biggest contributors to environmental pollution. They are not biodegradable and end up in landfills or pollute our oceans.
                    In addition, many disposable cups contain harmful chemicals such as Bisphenol A (BPA), which can leach into beverages and pose serious health risks, including an increased risk of cancer.
                </p>
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>Environmental Impact</i></h2>
                <p>
                    An estimated 50 billion paper cups are used every year worldwide. The plastic lining in paper cups makes them non-recyclable and a significant environmental hazard.
                    This results in the release of microplastics into the environment, further harming wildlife and ecosystems.
                </p>
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>Health Risks of Paper Cups</i></h2>
                <p>
                    Chemicals such as Bisphenol A (BPA) and phthalates found in disposable cups can leach into hot beverages and have been linked to health risks like hormonal disruptions, fertility issues, and increased cancer risk.
                    The risk is particularly high when the cups are exposed to hot liquids.
                </p>
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>Sustainable Alternatives to Paper Cups</i></h2>
                <p>
                    By using reusable cups made from materials like stainless steel, bamboo, or glass, you can significantly reduce your environmental footprint.
                    These cups are durable, easy to clean, and do not leach harmful chemicals into your drinks.
                </p>
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>How You Can Help</i></h2>
                <ul style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}>
                    <li>Carry a reusable cup with you wherever you go.</li>
                    <li>Support businesses that offer reusable cup discounts or sustainable alternatives.</li>
                    <li>Encourage your friends and family to switch to reusable cups.</li>
                </ul>
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <img
                    src="https://tataandhoward.com/wp-content/uploads/2015/04/Recycle-coffee-cup-infographic2.jpg"
                    alt="Environmental Impact"
                    style={{ width: "50%", height: "auto" }}
                />
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>Learn More About the Impact of Disposable Paper Cups</i></h2>
                
                    <a href="https://www.youtube.com/watch?v=7Bc0SYMxb24">The Environmental Impact of Paper Cups</a><br></br>
                    <a href="https://www.youtube.com/watch?v=DewwmgZyHPE">Health Risks of BPA in Paper Cups</a>
                
            </div>

            <div style={{ marginTop: "40px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
                <h2 style={{ color: "#B82132" }}><i>BRING THE CHANGE</i></h2>
                <p>
                    Small changes lead to big impacts. By switching to reusable cups, you can help reduce waste, conserve resources, and protect your health.
                    Start today for a better tomorrow!
                </p>
                <button
                    onClick={() => navigate("/getstarted")}
                    style={{
                        backgroundColor: "#B82132",
                        color: "#fff",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Let's Get Started
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

export default LearnMore;
