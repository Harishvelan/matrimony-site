
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Ordhek<span>Deen</span></div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Guide</li>
          <li>Contact</li>
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