import React from 'react';
import { TESTIMONIALS } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#2a1208] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="mb-16">
          <p className="section-label mb-5">
            Testimonials
          </p>

          <h2 className="section-title text-white">
            Loved By
            <br />
            Our Customers
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="testimonial-card rounded-[28px] p-10"
            >
              <div className="stars mb-6">
                ★★★★★
              </div>

              <p className="leading-8 text-[#f7ece6] mb-8">
                “{item.text}”
              </p>

              <div>
                <h4 className="font-serif text-3xl">
                  {item.name}
                </h4>

                <p className="text-[#c9a38c] mt-2">
                  {item.city}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}