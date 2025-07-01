import React from 'react';
import './CustomerReviews.css';
import { FaUserCircle } from 'react-icons/fa';

const customers = [
  {
    name: 'MST. SADIA AKTER',
    location: 'DHAKA',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.',
  },
  {
    name: 'MIZANUR ISLAM',
    location: 'KHULNA',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.',
  },
  {
    name: 'MD. MAHIM MIYA',
    location: 'CHITTAGONG',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.',
  },
];

const CustomerReviews = () => {
  return (
    <section className="customer-review-section">
      <h4 className="sub-heading">Trusted Brand</h4>
      <h2 className="main-heading">Trust by 1600+ Couples</h2>
      <div className="decorative-line" />

      <div className="customer-cards">
        {customers.map((customer, index) => (
          <div className="customer-card" key={index}>
            <div className="card-icon-wrapper">
              <FaUserCircle className="profile-icon" />
            </div>
            <p className="review-text">{customer.review}</p>
            <h5 className="customer-name">{customer.name}</h5>
            <p className="customer-location">{customer.location}</p>
          </div>
        ))}
      </div>

      <button className="review-button">MORE CUSTOMER REVIEWS</button>
    </section>
  );
};

export default CustomerReviews;
