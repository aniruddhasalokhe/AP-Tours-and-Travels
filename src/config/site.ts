// ============================================================
// AP Tours & Travels — Site Configuration
// ============================================================
// This is the SINGLE SOURCE OF TRUTH for all editable content.
// Update values here to change what appears on the website.
// ============================================================

export const siteConfig = {
  // --- Business Details ---
  name: 'AP Tours & Travels',
  tagline: 'Comfortable, Reliable & Hassle-Free Travel for Business, Family & Leisure',
  heroHeadline: 'Experience Premium Travel, Every Mile.',
  base: 'Kolhapur',
  serviceArea: 'Kolhapur, Pune, across Maharashtra & India',
  vehicle: 'Toyota Innova Crysta',
  vehicleColor: 'Silver',
  vehicleSeats: 7,

  // --- Contact ---
  phone: '9326604348',
  phoneLink: 'tel:+919326604348',
  whatsappNumber: '919822153400',
  whatsappLink: 'https://wa.me/919822153400?text=Hi%2C%20I%20found%20AP%20Tours%20%26%20Travels%20on%20Google%20and%20would%20like%20to%20enquire%20about%20your%20chauffeur-driven%20Innova%20Crysta%20services.%20Please%20share%20availability%20and%20rates',
  email: 'aptours.travels.kolhapur@gmail.com',
  googleListingLink: 'https://share.google/HCLilqTHOisHa0H7u',

  // --- Images ---
  images: {
    logo: '/images/logo.jpeg',
    heroWide: '/images/hero-wide.jpeg',
    promoSquare: '/images/promo-square.jpeg',
    crystaFront: '/images/crysta-front.jpeg',
    crystaSide: '/images/crysta-side.jpeg',
  },

  // --- Navigation ---
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Vehicle', href: '#vehicle' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Contact', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
  ],

  // --- Trust Strip ---
  trustItems: [
    { icon: 'driver', text: 'Professional Driver' },
    { icon: 'car', text: 'Clean & Comfortable 7-Seater Crysta' },
    { icon: 'clock', text: 'Timely Pickups' },
    { icon: 'price', text: 'Transparent Pricing' },
  ],

  // --- Services ---
  services: [
    {
      id: 'airport',
      title: 'Airport Transfers',
      icon: 'plane',
      /* EDITABLE: Update service description */
      description: 'Reliable pickup and drop to Kolhapur, Pune, Mumbai and other airports. On-time, every time.',
    },
    {
      id: 'corporate',
      title: 'Corporate Travel',
      icon: 'briefcase',
      /* EDITABLE: Update service description */
      description: 'Professional chauffeur service for business meetings, conferences and corporate events.',
    },
    {
      id: 'intercity',
      title: 'Intercity Travel',
      icon: 'road',
      /* EDITABLE: Update service description */
      description: 'Comfortable city-to-city travel across Maharashtra and beyond in a premium Innova Crysta.',
    },
    {
      id: 'outstation',
      title: 'Outstation Trips',
      icon: 'mountain',
      /* EDITABLE: Update service description */
      description: 'Multi-day outstation trips with an experienced driver. Ideal for pilgrimages and holidays.',
    },
    {
      id: 'family',
      title: 'Family Travel',
      icon: 'family',
      /* EDITABLE: Update service description */
      description: 'Spacious 7-seater perfect for family vacations, weddings and group outings.',
    },
  ],

  // --- Vehicle Features ---
  vehicleFeatures: [
    'Spacious cabin with ample legroom',
    'Powerful air conditioning',
    'Comfortable reclining seats',
    'Generous luggage space',
    'Smooth and stable ride',
    'Ideal for families and business travel',
  ],

  // --- Popular Routes ---
  routes: [
    { from: 'Kolhapur', to: 'Pune' },
    { from: 'Kolhapur', to: 'Mumbai' },
    { from: 'Kolhapur', to: 'Goa' },
    { from: 'Kolhapur', to: 'Mahabaleshwar' },
    { from: 'Kolhapur', to: 'Panhala' },
    { from: 'Kolhapur', to: 'Ganpatipule' },
    { from: 'Kolhapur', to: 'Shirdi' },
    { from: 'Kolhapur', to: 'Tuljapur' },
    { from: 'Kolhapur', to: 'Kolhapur Airport' },
  ],
  routesDisclaimer: 'Tolls, parking and driver allowance as applicable. Call for exact rates.',

  // --- How It Works ---
  steps: [
    { step: 1, title: 'Call or WhatsApp Us', description: 'Reach out with your travel details — route, date, passengers.' },
    { step: 2, title: 'Get Your Quote & Confirm', description: 'We share a transparent quote. Confirm your booking instantly.' },
    { step: 3, title: 'Travel Comfortably', description: 'Our driver arrives on time. Sit back and enjoy a smooth ride.' },
  ],

  // --- Why Choose Us ---
  whyChooseUs: [
    {
      icon: 'shield',
      title: 'Trusted & Reliable',
      /* EDITABLE */
      description: 'Dependable service you can count on for every trip, big or small.',
    },
    {
      icon: 'car',
      title: 'Premium Vehicle',
      /* EDITABLE */
      description: 'Travel in a well-maintained Toyota Innova Crysta — spacious, clean, and comfortable.',
    },
    {
      icon: 'wallet',
      title: 'Transparent Pricing',
      /* EDITABLE */
      description: 'No hidden charges. Get a clear quote before you confirm your trip.',
    },
    {
      icon: 'headset',
      title: 'Easy Booking',
      /* EDITABLE */
      description: 'Book with a simple call or WhatsApp message. No app downloads needed.',
    },
  ],

  // --- FAQ ---
  faqs: [
    {
      question: 'How do I book a trip?',
      /* EDITABLE: Update with your actual booking process */
      answer: 'Simply call us at 9326604348 or send a WhatsApp message to 9822153400 with your travel details. We will share a quote and confirm your booking.',
    },
    {
      question: 'Is there a minimum kilometre requirement for outstation trips?',
      /* EDITABLE: Update with your actual policy */
      answer: 'Yes, outstation trips have a minimum kilometre requirement. Please contact us for details specific to your route.',
    },
    {
      question: 'Are tolls and parking charges included?',
      /* EDITABLE: Update with your actual policy */
      answer: 'Tolls, parking fees and driver allowance are charged as applicable and are not included in the base fare. We will inform you of estimated extras when sharing your quote.',
    },
    {
      question: 'Do I need to pay in advance?',
      /* EDITABLE: Update with your actual payment policy */
      answer: 'A partial advance may be required to confirm your booking. The remaining amount can be paid after the trip. Contact us for details.',
    },
    {
      question: 'Do you offer one-way trips?',
      /* EDITABLE: Update with your actual policy */
      answer: 'Yes, we offer both one-way and round-trip options. Reach out for a quote tailored to your itinerary.',
    },
    {
      question: 'What is your cancellation policy?',
      /* EDITABLE: Update with your actual cancellation policy */
      answer: 'Cancellation terms depend on the trip type and timing. Please contact us to discuss cancellation and refund details.',
    },
  ],

  // --- Partner With Us ---
  partnerPitch: 'We partner with travel agencies, tour operators, corporates and event companies across Maharashtra. If you need a reliable Innova Crysta with driver for your clients or events, let\'s connect.',
  partnerTypes: ['Travel Agency', 'Tour Operator', 'Corporate', 'Event Company', 'Other'] as const,

  // --- Trip Types (for Quick Quote form) ---
  tripTypes: ['One Way', 'Round Trip', 'Multi-Day'] as const,
} as const;

export type SiteConfig = typeof siteConfig;
