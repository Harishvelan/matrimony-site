import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h4>GET IN TOUCH</h4>
          <p>Address: 4321 road xxxxxxx</p>
          <p>Phone: +880 017 344 8732</p>
          <p>Email: info@example.com</p>
          <div className="app-buttons">
            <img src="/google-play.png" alt="Google Play" />
            <img src="/app-store.png" alt="App Store" />
          </div>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>FAQ</p>
          <p>Guide</p>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety Information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>FAQs</p>
        </div>

        <div className="footer-section">
          <h4>SOCIAL MEDIA</h4>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaTelegramPlane />
            <FaInstagram />
            <FaPinterestP />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Sales and Refunds</p>
          <p>Legal</p>
          <p>Site Map</p>
        </div>
        <p className="copyright">
          © 2021 - 2023 OneMatrimony.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;