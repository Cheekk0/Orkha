// ─────────────────────────────────────────────────────────────
// Single source of truth for business facts + navigation.
// Everything factual on the site pulls from here. Do not invent
// values that are not in 01-Brief. Flagged discrepancies are noted.
// ─────────────────────────────────────────────────────────────

// If the production domain changes, update this AND `site` in astro.config.mjs.
export const SITE_URL = 'https://orkha.solutions';

export const BUSINESS = {
  name: 'Orkha',
  legalName: 'Orkha Solutions',
  foundedYear: '2026',
  // Phone: Brief.MD is the source of truth ("+63 962 347 3843").
  // NOTE: Constraints.MD §4 and SEO-GEO.MD list slightly different digits —
  // Brief.MD wins per Constraints §3 ("Use real number from Brief.MD").
  phoneDisplay: '+63 962 347 3843',
  phoneHref: '+639623473843',
  email: 'orkha.developments@gmail.com',
  facebook: 'https://www.facebook.com/people/Orkha/61592108671738/',
  address: {
    street: 'Block 3, Lot 30, Adele Residences, Josefine Street',
    barangay: 'Barangay San Vicente',
    city: 'San Pedro',
    region: 'Laguna',
    country: 'Philippines',
    countryCode: 'PH',
  },
  serviceArea: 'Nationwide (digital service), based in San Pedro, Laguna',
  priceRange: '₱30,000 – ₱60,000 / month',
} as const;

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'About', href: '/about/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
] as const;

// Delivery timeframe (Brief.MD): full system live in 6–12 days.
export const TIMEFRAME = '6–12 days';

// Founding-batch details (Brief.MD)
export const OFFER = {
  standard: '₱60,000',
  founding: '₱30,000',
  foundingMonths: 3,
  foundingSlots: 5,
} as const;
