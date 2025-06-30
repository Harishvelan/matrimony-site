import React from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const data = [
    { name: "MST. SAIDA AKTER", location: "Dhaka" },
    { name: "MIZANUR ISLAM", location: "Khulna" },
    { name: "MD. MAHIM MIYA", location: "Chittagong" }
  ];

  return (
    <section className="testimonials">
      <h2>Trust by 1600+ Couples</h2>
      <div className="testimonial-list">
        {data.map((person, i) => (
          <div className="testimonial" key={i}>
            <div className="avatar" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <strong>{person.name}</strong>
            <span>{person.location}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
