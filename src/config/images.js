// ================================================================
//  BAKING CORNER — IMAGE CONFIGURATION
// ================================================================
//  All images live in:  public/img/
//  Products live in:    public/img/products/
//  Gallery images live in: public/img/gallery/
//
//  TO UPDATE:  Change the filename strings below ONLY.
//              No other file in the project needs to change.
// ================================================================

const SITE_BASE = window.location.pathname.startsWith('/baking-corner')
  ? '/baking-corner'
  : '';
const BASE = `${SITE_BASE}/img`;

export const IMAGES = {

  // ── BRAND ────────────────────────────────────────────────────
  logo:          `${BASE}/logo.png`,           // navbar logo

  // ── HERO ─────────────────────────────────────────────────────
  heroCake:      `${BASE}/hero-cake.jpg`,       // main centrepiece

  // ── ABOUT ────────────────────────────────────────────────────
  aboutBaker:    `${BASE}/about-baker.jpg`,     // baker / kitchen portrait
  aboutKitchen:  `${BASE}/about-kitchen.jpg`,   // optional second about image

  // ── PRODUCTS (14 items) ───────────────────────────────────────
  products: {
    themeCake:       `${BASE}/products/theme-cake.jpg`,
    birthdayCake:    `${BASE}/products/birthday-cake.jpg`,
    anniversaryCake: `${BASE}/products/anniversary-cake.jpg`,
    weddingCake:     `${BASE}/products/wedding-cake.jpg`,
    babyShower:      `${BASE}/products/baby-shower-cake.jpg`,
    cupcakes:        `${BASE}/products/cupcakes.jpg`,
    brownies:        `${BASE}/products/brownies.jpg`,
    muffins:         `${BASE}/products/muffins.jpg`,
    cakeJars:        `${BASE}/products/cake-jars.jpg`,
    chocoChip:       `${BASE}/products/choco-chip.jpg`,
    festivalHamper:  `${BASE}/products/festival-hamper.jpg`,
    rakhiHamper:     `${BASE}/products/rakhi-hamper.jpg`,
    diwaliHamper:    `${BASE}/products/diwali-hamper.jpg`,
    giftHamper:      `${BASE}/products/gift-hamper.jpg`,
  },

  // ── GALLERY (9 slots — add more as needed) ───────────────────
  gallery: [
    `${BASE}/gallery/gallery-1.jpg`,
    `${BASE}/gallery/gallery-2.jpg`,
    `${BASE}/gallery/gallery-3.jpg`,
    `${BASE}/gallery/gallery-4.jpg`,
    `${BASE}/gallery/gallery-5.jpg.jpeg`,
    `${BASE}/gallery/gallery-6.jpg`,
    `${BASE}/gallery/gallery-7.jpg`,
    `${BASE}/gallery/gallery-8.jpg`,
    `${BASE}/gallery/gallery-9.jpg`,
  ],
};
