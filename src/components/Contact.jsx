import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#fefdf9]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">

        <div>
          <p className="section-label mb-5">
            Contact
          </p>

          <h2 className="section-title mb-10">
            Let's Create
            <br />
            Something Sweet
          </h2>

          <div className="flex flex-col gap-5">

            <a
              href="https://wa.me/917874791943"
              className="contact-social-btn"
            >
              WhatsApp
            </a>

            <a
              href="https://www.instagram.com/baking__corner22"
              className="contact-social-btn"
            >
              Instagram
            </a>

          </div>

          <div className="map-placeholder rounded-[32px] mt-12">
            <p className="text-[#7d6859]">
              Add Google Maps Embed Here
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[32px] p-10 shadow-xl">

          <form className="space-y-8">

            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="form-input"
            />

            <input
              type="text"
              placeholder="Occasion"
              className="form-input"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your celebration..."
              className="form-input"
            />

            <button
              type="submit"
              className="btn-gold"
            >
              Send Inquiry
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}