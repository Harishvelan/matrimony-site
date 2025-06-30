import React from 'react';
import './WelcomeSection.css';
import couple1 from '../assets/couple1.jpg'; // Replace with your actual image path
import couple2 from '../assets/couple2.jpg';

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className="welcome-container">
        <div className="images">
          <img src={couple1} alt="Couple 1" className="top-image" />
          <img src={couple2} alt="Couple 2" className="bottom-image" />
        </div>
        <div className="text-content">
          <h2>
            WELCOME TO <span>WEDDING MATRIMONY</span>
          </h2>
          <p>
            Best wedding matrimony. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <p className="cta">
            <a href="#">Click here</a> to start your matrimony service now.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
          <div className="contacts">
            <p>
              📞 <strong>Enquiry</strong><br />
              +880 179 765 0987
            </p>
            <p>
              📧 <strong>Get Support</strong><br />
              info@example.com
            </p>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stat-card">
          <div className="icon">🧑‍🤝‍🧑</div>
          <p>Total Groom and Bride's Biodatas</p>
          <h3>5,165</h3>
        </div>
        <div className="stat-card">
          <div className="icon">👨‍💼</div>
          <p>Total Groom Biodatas</p>
          <h3>2,184</h3>
        </div>
        <div className="stat-card">
          <div className="icon">👰</div>
          <p>Total Bride's Biodatas</p>
          <h3>5,165</h3>
        </div>
        <div className="stat-card">
          <div className="icon">💍</div>
          <p>Total Successful Marriages</p>
          <h3>1,600+</h3>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;