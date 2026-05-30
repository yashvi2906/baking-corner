import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#2a1208] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="grid lg:grid-cols-3 gap-16">

          <div>
            <h2 className="font-serif text-5xl mb-6">
              Baking Corner
            </h2>

            <p className="text-[#c9a38c] leading-8 max-w-[420px]">
              Luxury homemade desserts handcrafted with elegance, creativity and premium ingredients.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#c9a38c] mb-6">
              Links
            </p>

            <div className="flex flex-col gap-4">
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-[#c9a38c] mb-6">
              Social
            </p>

            <div className="flex flex-col gap-4">
              <a href="https://www.instagram.com/baking__corner22">
                Instagram
              </a>

              <a href="https://wa.me/917874791943">
                WhatsApp
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-[#4a2d1f] mt-16 pt-8 flex flex-col md:flex-row justify-between gap-5">

          <p className="text-[#c9a38c]">
            © 2026 Baking Corner. All Rights Reserved.
          </p>

          <p className="italic text-[#c9a38c]">
            Made with Love & Frosting
          </p>

        </div>
      </div>
    </footer>
  );
}