export interface OutletData {
  slug: string;
  name: string;
  shortName: string;
  area: string;
  zone: string;
  address: string;
  landmark: string;
  timing: string;
  phone: string;
  image: string;
  tag: string;
  description: string;
  features: string[];
  specialties: string[];
  directions: string;
}

export const outletsData: OutletData[] = [
  {
    slug: "pullman-hotel-aerocity",
    name: "Pullman Hotel (Aerocity)",
    shortName: "Pullman Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Near IGI Airport T3",
    address: "Asset No 2, Aerocity Hospitality District, IGI Airport, New Delhi 110037",
    landmark: "Worldmark Hospitality District & Delhi Aerocity Metro Station",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/pullman-aerocity.jpg",
    tag: "5-Star Ultra Luxury",
    description:
      "Our premier 5-star flagship outlet located at Pullman New Delhi Aerocity delivers world-class rejuvenation right in the heart of Delhi's luxury airport hospitality district. Featuring grand private therapy suites, state-of-the-art steam & shower facilities, and discreet VIP access.",
    features: [
      "Discreet VIP suite with attached jacuzzi and private rain shower",
      "Prime Aerocity location — 5 mins from IGI Airport Terminal 3",
      "Full valet parking and round-the-clock five-star concierge access",
      "Trained and certified female therapists with 5+ years experience",
      "Imported therapeutic aroma essential oils and herbal steam treatments",
    ],
    specialties: [
      "B2B Massage Therapy",
      "Sandwich Massage (Four-Hand)",
      "Deep Tissue Sports Massage",
      "Swedish Relaxation Therapy",
      "Jacuzzi Hydro-Soak Bath",
    ],
    directions:
      "Conveniently situated in Asset No. 2 of the Aerocity Hospitality District, directly accessible from Delhi-Gurgaon Expressway (NH-48) and just 300 meters from Delhi Aerocity Metro Station (Airport Express Line).",
  },
  {
    slug: "lemon-tree-premier",
    name: "Lemon Tree Premier",
    shortName: "Lemon Tree Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Airport Hospitality Hub",
    address: "Asset No 6, Aerocity Hospitality District, IGI Airport, New Delhi 110037",
    landmark: "Opposite Worldmark 2, Aerocity",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/lemon-tree-aerocity.jpg",
    tag: "Express & Transit Bliss",
    description:
      "Located at Lemon Tree Premier in Aerocity, this upscale spa outlet is designed for discerning travelers, business executives, and transit visitors needing instant jet lag recovery and soothing relaxation.",
    features: [
      "Instant walk-in and priority call reservations for transit travelers",
      "Sound-insulated peaceful therapy chambers with aroma diffusers",
      "Private hot showers, steam, and fresh sanitised organic linen",
      "Specialized express jet-lag recovery therapies (45/60/90 mins)",
      "Zero hassle parking and smooth contactless hospitality check-in",
    ],
    specialties: [
      "Jet Lag Revitalizing Therapy",
      "Full Body Aromatherapy Massage",
      "Synchronized Four-Hand Massage",
      "Hot Oil Deep Tissue Relief",
      "Herbal Steam & Detox Wrap",
    ],
    directions:
      "Located at Asset No. 6, directly facing Worldmark 2 in the Aerocity Hospitality District. Easy walk from Aerocity Metro or a 4-minute cab ride from T3/T1 terminals.",
  },
  {
    slug: "ibis-hotel",
    name: "ibis Hotel",
    shortName: "ibis Aerocity",
    area: "Aerocity, New Delhi",
    zone: "Central Aerocity",
    address: "Asset No 9, Hospitality District, Delhi Aerocity, New Delhi 110037",
    landmark: "Hospitality District, Near Aerocity Metro Station",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/ibis-aerocity.jpg",
    tag: "Popular Comfort Spa",
    description:
      "A peaceful oasis in Aerocity at ibis Hotel, offering top-tier relaxation treatments at approachable pricing. Ideal for both routine wellness sessions and spontaneous stress-relief visits.",
    features: [
      "Modern, immaculate treatment rooms with soft mood lighting",
      "High hygiene standards with disposable kits and sanitized rooms",
      "Certified therapists trained in Thai, Swedish, and B2B techniques",
      "Complete privacy and zero disturbance guarantee",
      "Complimentary detox green tea and post-therapy refreshment",
    ],
    specialties: [
      "Swedish Relaxation Therapy",
      "Signature B2B Full Body Therapy",
      "Traditional Thai Dry Massage",
      "Back, Neck & Shoulder Tension Relief",
      "Sensory Essential Oil Healing",
    ],
    directions:
      "Situated in Asset No. 9, Aerocity, close to the Delhi Aerocity Metro Station and adjacent to the Aerocity corporate towers corridor.",
  },
  {
    slug: "the-lalit",
    name: "The LaLiT",
    shortName: "The LaLiT CP",
    area: "Connaught Place (CP), Central Delhi",
    zone: "Central Business District",
    address: "Barakhamba Avenue, Connaught Place, New Delhi 110001",
    landmark: "Barakhamba Road, Near Rajiv Chowk Metro",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/the-lalit-cp.jpg",
    tag: "5-Star Grand Suite",
    description:
      "Perched in central Delhi's most prestigious cultural and commercial heart, our spa outlet at The LaLiT Connaught Place offers an unmatched royal wellness retreat for elite guests, business leaders, and travelers.",
    features: [
      "Ultra-luxurious royal spa rooms with ambient mood illumination",
      "Heart-of-Delhi central location with secure VIP parking and valet",
      "Deep therapeutic treatments focused on holistic body & mind balance",
      "Private attached rain shower & customized aromatic steam",
      "Exclusive couple massage chambers with tranquil lounge seating",
    ],
    specialties: [
      "Royal Four-Hand Signature Therapy",
      "Deep Muscular Release & Acupressure",
      "Executive Stress Detox Massage",
      "Warm Stone Holistic Healing",
      "B2B Sensual Relaxation",
    ],
    directions:
      "Located on Barakhamba Avenue, Connaught Place, adjacent to Barakhamba Road Metro Station (Blue Line) and 2 minutes from Rajiv Chowk (Yellow/Blue interchange).",
  },
  {
    slug: "the-suryaa",
    name: "The Suryaa",
    shortName: "The Suryaa NFC",
    area: "New Friends Colony (NFC), South Delhi",
    zone: "South Delhi Elite",
    address: "New Friends Colony Community Centre, New Delhi 110025",
    landmark: "Community Centre, Near Mathura Road & Friends Club",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/the-suryaa-nfc.jpg",
    tag: "South Delhi Oasis",
    description:
      "Nestled inside the iconic 5-star The Suryaa New Delhi at New Friends Colony, this boutique luxury spa caters to South Delhi's refined residents, expats, and visiting guests seeking quiet, restorative indulgence.",
    features: [
      "Serene private suites overlooking hotel greens & swimming pool",
      "Private hydrotherapy bathtubs and eucalyptus steam rooms",
      "Top-tier certified therapists specializing in restorative rituals",
      "Discreet and dignified environment with high guest confidentiality",
      "Ample dedicated hotel parking with valet assistance",
    ],
    specialties: [
      "Aromatherapy Muscle Soothe",
      "Sandwich Massage Dual-Therapist",
      "Deep Tissue Recovery",
      "Hydro-Soak Mineral Bath Therapy",
      "Full Body Polish & Oil Ritual",
    ],
    directions:
      "Located within the New Friends Colony Community Centre complex, easily reachable via Mathura Road, Ring Road, and Ashram Chowk flyovers.",
  },
  {
    slug: "jaypee-vasant-continental",
    name: "Jaypee Vasant Continental",
    shortName: "Jaypee Vasant",
    area: "Vasant Kunj / Vasant Vihar, South Delhi",
    zone: "South Delhi Diplomatic Hub",
    address: "Basant Lok, Vasant Vihar, Near Vasant Kunj, New Delhi 110057",
    landmark: "Basant Lok Community Centre, Near DLF Promenade & Ambience Mall",
    timing: "10:00 AM – 10:30 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/jaypee-vasant-continental.jpg",
    tag: "5-Star Heritage Luxury",
    description:
      "Located within the lush green enclave of Jaypee Vasant Continental near Vasant Kunj and Vasant Vihar, this luxury spa provides a calm sanctuary away from city chaos, surrounded by sprawling foliage and heritage hospitality.",
    features: [
      "Quiet garden-facing luxury therapy suites with ambient music",
      "Close to major South Delhi malls (DLF Promenade, Ambience, Emporio)",
      "Premium cold-pressed organic botanical oils and herbal blends",
      "Complete wellness amenities including steam, sauna, and shower",
      "100% verified certified female therapists with polite conduct",
    ],
    specialties: [
      "Botanical Herbal Oil Massage",
      "Complete Couple Therapy Sessions",
      "Swedish Lymphatic Detoxification",
      "Deep Tissue Tension Melting",
      "Signature B2B Full Body Harmony",
    ],
    directions:
      "Conveniently positioned in Basant Lok, Vasant Vihar, minutes away from Nelson Mandela Marg, Vasant Kunj malls, and the diplomatic enclave.",
  },
  {
    slug: "radisson-hotel",
    name: "Radisson Hotel",
    shortName: "Radisson Gurugram",
    area: "Gurugram (Gurgaon), Haryana",
    zone: "Cyber City & NH-8 Corridor",
    address: "Adjacent to Plot 406, Udyog Vihar Phase III, Gurugram 122016",
    landmark: "Udyog Vihar Phase III, Near DLF Cyber City & Ambience Mall",
    timing: "10:00 AM – 11:00 PM (7 Days Open)",
    phone: "+91 97188 92869",
    image: "/outlets/radisson-gurugram.jpg",
    tag: "Cyber City Corporate Bliss",
    description:
      "Strategically situated adjacent to DLF Cyber City at Radisson Gurugram Udyog Vihar, this high-end spa outlet serves corporate titans, entrepreneurs, and busy professionals needing quick revitalization and prolonged deep relaxation.",
    features: [
      "Extended operating hours until 11:00 PM for late evening decompression",
      "Ultra-modern acoustic-insulated private suites with attached showers",
      "Specialized therapies targeted at desk posture fatigue and mental stress",
      "Direct NH-8 access with secure underground parking & valet",
      "Private VIP reservations with total identity privacy guaranteed",
    ],
    specialties: [
      "Corporate Stress & Posture Release",
      "Signature Four-Hand Sandwich Therapy",
      "Warm Herbal Oil Deep Tissue",
      "Sensory Aromatherapy Body Treatment",
      "Steam, Rain Shower & Detox Ritual",
    ],
    directions:
      "Located directly off NH-48 in Udyog Vihar Phase III, adjacent to Cyber City, DLF Phase 2, and right behind Ambience Mall Gurgaon.",
  },
];
