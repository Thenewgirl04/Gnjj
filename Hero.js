import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title"><span className="yellow-color">Miss</span>Diagnosis AI</h1>
        <p className="hero-subtitle">Accurate and timely diagnosis...</p>
        <div className="hero-buttons">
          <Link to="/login">
            <button className="login-btn">Login to your account</button>
          </Link>
          <p className="or-text">Or</p>
          <button className="signup-link">Create a new account</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
