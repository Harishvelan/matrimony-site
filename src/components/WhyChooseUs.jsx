import React from 'react';
import './WhyChooseUs.css';
import heroImg from '../assets/hero.png'; // Replace with your own image

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="hero-container">
        <img src={heroImg} alt="Happy Person" className="hero-img" />
        <h4>#1 WEEDING WEBSITE</h4>
        <h1>Why choose us</h1>
        <p>Most Trusted and premium Matrimony Service in the World</p>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="icon">🌟</div>
          <h3>Genuine profiles</h3>
          <p>Contact genuine profiles with 100% verified mobile</p>
        </div>
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>Most trusted</h3>
          <p>The most trusted wedding matrimony brand.</p>
        </div>
        <div className="feature-card">
          <div className="icon">💍</div>
          <h3>1600+ weddings</h3>
          <p>Lakhs of people have found their life partner</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;