import React from "react";

function Header() {
  return (
    
    <header className="header">
      
      <nav>
        <ul className="nav-links">
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#signup" className="signup-btn">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
