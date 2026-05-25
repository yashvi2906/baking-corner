import React from 'react';

const ITEMS = [
  '100% Eggless',
  'Premium Ingredients',
  'Luxury Presentation',
  'Customized Designs',
  'Freshly Handmade',
  'Hygienic Preparation',
  'Perfect For Gifting',
  'Pure Vegetarian',
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-28 bg-[#faf7f2]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="text-center mb-16">
          <p className="section-label mb-5">
            Why Choose Us
          </p>

          <h2 className="section-title">
            Luxury Homemade
            <br />
            Dessert Experience
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {ITEMS.map((item) => (
            <div
              key={item}
              className="why-card bg-white rounded-[28px] p-10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#f5e9d0] mx-auto mb-6" />

              <h3 className="font-serif text-[1.8rem] mb-3">
                {item}
              </h3>

              <p className="text-[#6d5a4c] leading-7">
                Crafted with attention to detail and premium quality.
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}