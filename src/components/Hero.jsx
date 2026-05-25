import React from 'react';
import { IMAGES } from '../config/images.js';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

export default function Hero() {
  const ref = useScrollReveal();

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-[#faf7f2]"
    >
      {/* Background Orbs */}
      <div className="orb w-[500px] h-[500px] bg-[#f2d4cc]/40 top-[-120px] left-[-120px]" />
      <div className="orb w-[400px] h-[400px] bg-[#e8c285]/30 bottom-[-120px] right-[-120px]" />

      <div className="max-w-[1450px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center relative z-10 pt-32 pb-20">

        {/* Left */}
        <div ref={ref} className="reveal">
          <p className="section-label mb-6">
            Luxury Home Bakery
          </p>

          <h1 className="section-title max-w-[700px]">
            Handcrafted <em>Happiness</em>
            <br />
            In Every Bite
          </h1>

          <p className="mt-8 text-[1.05rem] leading-8 text-[#5b4636] max-w-[560px]">
            Customized eggless cakes, artisan desserts & premium hampers
            handcrafted with love for birthdays, weddings, anniversaries,
            festivals and unforgettable celebrations.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <a
              href="https://wa.me/917874791943"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Order Now
            </a>

            <a href="#gallery" className="btn-outline-dark">
              View Gallery
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-image-wrap reveal-right visible relative">
          <div className="hero-image-inner relative">

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#f5e9d0] to-[#f2d4cc] blur-3xl scale-110 opacity-60" />

            <img
              src={IMAGES.heroCake}
              alt="Luxury Cake"
              className="relative z-10 w-full max-w-[620px] mx-auto rounded-[32px] object-cover"
            />

            {/* Floating badges */}
            <div className="absolute top-10 -left-6 glass-light px-6 py-4 rounded-full">
              <p className="text-[0.75rem] tracking-[0.2em] uppercase">
                100% Eggless
              </p>
            </div>

            <div className="absolute bottom-10 -right-6 glass-light px-6 py-4 rounded-full">
              <p className="text-[0.75rem] tracking-[0.2em] uppercase">
                Handmade Fresh
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}