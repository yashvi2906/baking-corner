import React from 'react';
import { IMAGES } from '../config/images.js';

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-[#fefdf9]"
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12">

        <div className="mb-16">
          <p className="section-label mb-5">
            Gallery
          </p>

          <h2 className="section-title">
            Sweet Moments,
            <br />
            Beautifully Crafted
          </h2>
        </div>

        <div className="masonry-grid">

          {IMAGES.gallery.map((img, index) => (
            <div
              key={index}
              className="masonry-item rounded-[24px]"
            >
              <img src={img} alt={`Gallery ${index}`} />

              <div className="m-overlay">
                <p className="text-white uppercase tracking-[0.2em] text-xs">
                  Baking Corner
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.instagram.com/baking__corner22"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            View Instagram
          </a>
        </div>

      </div>
    </section>
  );
}