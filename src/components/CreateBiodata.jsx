// File: components/BiodataSection.jsx import React from "react"; import "./BiodataSection.css";

const createBiodata = () => { return ( <section className="biodata-section"> <div className="image-left"> <img src="/images/couple-left.png" alt="couple left" /> </div>

<div className="biodata-content">
    <h2>
      Create Biodata In <span className="highlight">OrdhekDeen</span> <br /> Completely Free
    </h2>
    <div className="decor-line">🌸🌿🌸</div>
    <div className="biodata-buttons">
      <div className="card">
        <img src="/icons/biodata-icon.png" alt="Create Biodata" />
        <p>+ Create Your Biodata</p>
      </div>
      <div className="card outline">
        <img src="/icons/youtube-icon.png" alt="YouTube" />
        <p>How To Create Biodata</p>
      </div>
    </div>
  </div>

  <div className="image-right">
    <img src="/images/couple-right.png" alt="couple right" />
  </div>
</section>

); };

export default createBiodata;