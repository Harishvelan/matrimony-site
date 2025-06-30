// File: components/HowItWorks.jsx import React from "react"; import "./HowItWorks.css";

const steps = [ { icon: "/icons/create-icon.png",
   title: "Create Biodata", 
   description: "You can easily create a biodata in OrdhekDeen completely free of cost within some steps." },
    { icon: "/icons/search-icon.png",
       title: "Search Biodata",
        description: "You can easily search biodata using many filters including age, upazila, profession, education qualification." }, 
       { icon: "/icons/contact-icon.png", 
        title: "Contract with gurdians",
         description: "If someone likes your biodata or you like someone's biodata you can directly contact their parent." 
        },
         { icon: "/icons/married-icon.png", 
          title: "Get married", 
          description: "If you like the biodata and conversation, do your own inquiry & get married according to Sunnah." 
        } ];

const HowItWorks = () => {
   return ( <section className="how-section">
     <p className="quick-access">Quick Access</p> 
     <h2>How OrdhekDeen Works</h2> <div className="how-cards"> 
      {steps.map((step, index) => ( <div className="how-card" key={index}> 
        <img src={step.icon} alt={step.title} /> <h4>{step.title}</h4> <p>{step.description}
          </p> 
        </div>
         ))} </div> </section> ); };

export default HowItWorks;