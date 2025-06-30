import React from 'react';
import './Gallery.css';

// Import your images (replace these paths with actual image files)
import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';
import img7 from '../assets/gallery7.jpg';
import img8 from '../assets/gallery8.jpg';

const PhotoGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

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