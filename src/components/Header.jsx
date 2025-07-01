import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        Ordhek<span>Deen</span>
      </div>

      <nav>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#welcome">About Us</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#reviews">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button className="register">Registration</button>
        <button className="signin">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
