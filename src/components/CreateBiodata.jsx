import React from "react";
import "./CreateBiodata.css";
import { FaFileAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const CreateBiodata = () => {
  return (
    <section className="biodata-section">
      {/* <div className="image-left">
        <img src="/images/couple-left.png" alt="couple left" />
      </div> */}

      <div className="biodata-content">
        <h2>
          Create Biodata In <span className="highlight">OrdhekDeen</span> <br /> Completely Free
        </h2>
        <div className="decor-line">🌸🌿🌸</div>

        <div className="biodata-buttons">
          <div className="card filled">
            <FaFileAlt className="card-icon yellow" />
            <p>+ Create Your Biodata</p>
          </div>
          <div className="card filled">
            <FaYoutube className="card-icon red" />
            <p>How To Create Biodata</p>
          </div>
        </div>
      </div>

      {/* <div className="image-right">
        <img src="/images/couple-right.png" alt="couple right" />
      </div> */}
    </section>
  );
};

export default CreateBiodata;
