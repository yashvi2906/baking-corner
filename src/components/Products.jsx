import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data/products.js';

export default function Products() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  return (
    <section
      id="products"
      className="py-28 bg-[#faf7f2]"
    >
      <div className="max-w-[1450px] mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

          <div>
            <p className="section-label mb-5">
              Signature Collection
            </p>

            <h2 className="section-title">
              Elegant Desserts &
              <br />
              Luxury Cakes
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`cat-tab ${active === cat.key ? 'active' : ''}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {filtered.map((item) => (
            <div
              key={item.id}
              className="product-card rounded-[28px] overflow-hidden bg-white"
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img w-full h-full object-cover"
                />

                <div className="card-info-overlay">
                  <p className="text-white text-sm uppercase tracking-[0.2em] mb-2">
                    Baking Corner
                  </p>

                  <h3 className="text-white text-3xl font-serif">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-[2rem] leading-none mb-4">
                  {item.name}
                </h3>

                <p className="text-[#6d5a4c] leading-7">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}