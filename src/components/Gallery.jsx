import React from 'react';
import './Gallery.css';

// Import your images (replace these paths with actual image files)
import img1 from './../assets/images1.jpg';
import img2 from './../assets/images2.jpg';
import img3 from './../assets/images3.jpg';
import img4 from './../assets/images4.jpg';
import img5 from './../assets/images5.jpg';




const Gallery = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <section className="photo-gallery-section">
      <div className="gallery-header">
        <div className="text">
          <p className="subheading">COLLECTION</p>
          <h2>Photo gallery</h2>
        </div>
        <button className="see-all-btn">See All</button>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-image">
            <img src={img} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;