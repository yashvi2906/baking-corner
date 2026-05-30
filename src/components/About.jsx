import React from 'react';
import { IMAGES } from '../config/images.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function About() {
  const left = useScrollReveal();
  const right = useScrollReveal();

  return (
    <section
      id="about"
      className="py-28 bg-[#fefdf9]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-24 items-center">

        <div ref={left} className="reveal-left relative">
          <img
            src={IMAGES.aboutBaker}
            alt="About Baking Corner"
            className="rounded-[32px] object-cover w-full"
          />

          <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-2xl rounded-[28px] max-w-[280px]">
            <p className="section-label mb-3">Pure Homemade</p>

            <p className="text-[#5b4636] leading-7">
              Freshly baked in small batches using premium ingredients and elegant handcrafted detailing.
            </p>
          </div>
        </div>

        <div ref={right} className="reveal-right">
          <p className="section-label mb-5">
            About Us
          </p>

          <h2 className="section-title mb-8">
            Crafted With <em>Love</em>, Elegance & Taste
          </h2>

          <p className="text-[#5b4636] leading-8 mb-8">
            Baking Corner is a luxury home-based bakery creating elegant desserts
            and customized cakes for unforgettable celebrations.
          </p>

          <p className="text-[#5b4636] leading-8 mb-8">
            Every product is completely eggless, freshly handcrafted, hygienically
            prepared, and beautifully designed with premium quality ingredients.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-12">

            {[
              'Customized Designs',
              '100% Eggless',
              'Freshly Baked',
              'Luxury Presentation',
            ].map((item) => (
              <div
                key={item}
                className="border border-[#e8d8c7] p-6 rounded-[24px]"
              >
                <p className="font-medium tracking-wide">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}