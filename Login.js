import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Hero() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (email === "ebenezeracquah501@gmail.com" && password === "Aceb2103@notionhacks") {
      navigate("/a.html"); // Redirect to the dashboard or another page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title"><span className="yellow-color">Miss</span>Diagnosis AI</h1>
        <p className="hero-subtitle">Accurate and timely diagnosis...</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ color: "black" }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ color: "black" }}
            />
          </div>
          <button type="submit" className="login-btn">
            Login to your account
          </button>
        </form>
        <p className="or-text">Or</p>
        <Link to="/signup">
          <button className="signup-link">Create a new account</button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
