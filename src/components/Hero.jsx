import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <h1>Bangladeshi Islamic <span>Matrimony.</span></h1>
      <p>When a person gets married he has completed half of his deen...</p>
      <div className="rating">⭐⭐⭐⭐⭐ 4.5/5</div>
      <form className="search-form">
        <select><option>I’m looking for...</option></select>
        <select><option>Marital Status</option></select>
        <select><option>Location</option></select>
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
