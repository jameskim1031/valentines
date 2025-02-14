import React from "react";
import { useNavigate } from "react-router-dom";
import twentyFourImg from "../Images/2024.jpg";
import twentyFiveImg from "../Images/2025.jpg";
import "./Main.css";

export default function Main() {
  let navigate = useNavigate();

  return (
    <div className="main">
      <h1 className="main-title">CJ Entertainment Valentines Day</h1>
      <div className="main-gallery">
        <div className="main-gallery-item" onClick={() => navigate("/2024")}>
          <h2 className="year-label">2024</h2>
          <div className="image-container">
            <img src={twentyFourImg} alt="2024" />
          </div>
        </div>
        <div className="main-gallery-item" onClick={() => navigate("/2025")}>
          <h2 className="year-label">2025</h2>
          <div className="image-container">
            <img src={twentyFiveImg} alt="2025" />
          </div>
        </div>
      </div>
    </div>
  );
}
