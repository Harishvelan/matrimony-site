import React from "react";
import "./HowItWorks.css";
import { FaUserPlus, FaSearch, FaPhoneAlt, FaRing } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="how-icon" />,
    title: "Create Biodata",
    description: "You can easily create a biodata in OrdhekDeen completely free of cost within some steps."
  },
  {
    icon: <FaSearch className="how-icon" />,
    title: "Search Biodata",
    description: "You can easily search biodata using many filters including age, upazila, profession, education qualification."
  },
  {
    icon: <FaPhoneAlt className="how-icon" />,
    title: "Contract with guardians",
    description: "If someone likes your biodata or you like someone's biodata you can directly contact their parent."
  },
  {
    icon: <FaRing className="how-icon" />,
    title: "Get married",
    description: "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-section">
      <p className="quick-access">Quick Access</p>
      <h2 className="how-title">How OrdhekDeen Works</h2>
      <div className="how-cards">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            {step.icon}
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
