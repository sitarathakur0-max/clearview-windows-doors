/**
 * Central Configuration for ClearView Windows & Doors
 * 
 * ACCURACY RULE:
 * Contains only verified business information.
 * Business: ClearView Windows & Doors
 * Rating: 5.0/5 (190 Reviews)
 * Phone: +44 20 8535 7540
 * Location: London SE5 7HN
 */

import heroImg from '../assets/images/hero_london_home_1789799876708.jpg';
import windowsImg from '../assets/images/casement_sash_windows_1789799894039.jpg';
import bifoldImg from '../assets/images/bifold_patio_doors_1789799908786.jpg';
import frontDoorImg from '../assets/images/composite_front_door_1789799923724.jpg';
import craftsmanshipImg from '../assets/images/window_craftsmanship_1789799940120.jpg';

export const BUSINESS_CONFIG = {
  name: "ClearView Windows & Doors",
  tagline: "Quality Windows & Doors for Your London Home",
  rating: "5.0/5",
  ratingScore: 5.0,
  reviewsCount: 190,
  phone: "+44 20 8535 7540",
  phoneRaw: "+442085357540",
  phoneHref: "tel:+442085357540",
  location: "London SE5 7HN",
  serviceArea: "London SE5 7HN and surrounding London areas",
  heroDescription: "Specialist window and door installations, replacements, and upgrades tailored for London properties. Serving homeowners across London SE5 7HN with exceptional standards of care and craftsmanship.",
  images: {
    hero: heroImg,
    windows: windowsImg,
    doors: bifoldImg,
    frontDoor: frontDoorImg,
    craftsmanship: craftsmanshipImg,
  }
} as const;

export interface WindowCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  image: string;
}

export const WINDOW_CATEGORIES: WindowCategory[] = [
  {
    id: "casement-windows",
    title: "Casement Windows",
    subtitle: "Classic, versatile, and high-performance opening styles",
    description: "Casement windows are one of the most popular choices for modern and traditional homes across London, offering excellent airflow, thermal insulation, and versatile opening configurations.",
    features: [
      "Top-hung or side-hung opening options",
      "Multi-point locking security systems",
      "Double and triple glazing compatibility",
      "Slim sightlines maximizing natural light"
    ],
    idealFor: "Modern family homes, urban apartments, and side or rear property elevations.",
    image: windowsImg
  },
  {
    id: "sash-windows",
    title: "Sash Windows",
    subtitle: "Timeless architectural elegance for period & classic homes",
    description: "Engineered to preserve traditional architectural character while incorporating modern thermal efficiency, acoustic insulation, and smooth sliding counter-balance mechanisms.",
    features: [
      "Authentic proportions and astragal glazing bar designs",
      "Smooth vertical slide operation",
      "Draught-proofing and energy-conscious seals",
      "Traditional decorative sash horns and heritage hardware"
    ],
    idealFor: "Victorian, Edwardian, and Georgian properties across London boroughs.",
    image: craftsmanshipImg
  },
  {
    id: "upvc-windows",
    title: "uPVC Windows",
    subtitle: "Durable, low-maintenance, and cost-effective performance",
    description: "Modern uPVC window systems provide outstanding thermal efficiency, robust weather resistance, and minimal maintenance without compromising on exterior aesthetic appeal.",
    features: [
      "Multi-chambered frame technology for heat retention",
      "Resistant to rot, fading, and weathering",
      "Wide choice of smooth and textured finishes",
      "Secure internal glazing beads"
    ],
    idealFor: "Homeowners seeking dependable, long-lasting, and easily maintained window solutions.",
    image: windowsImg
  },
  {
    id: "aluminium-windows",
    title: "Aluminium Windows",
    subtitle: "Ultra-slim profiles, contemporary strength, and architectural clean lines",
    description: "Aluminium frames deliver maximum structural rigidity with ultra-narrow profiles, allowing for expansive glass surfaces that flood interior spaces with natural daylight.",
    features: [
      "Ultra-slim sightlines for maximum glass area",
      "Thermally broken profile construction",
      "High structural strength and corrosion resistance",
      "Contemporary architectural styling"
    ],
    idealFor: "Contemporary London renovations, architect-designed extensions, and modern apartments.",
    image: craftsmanshipImg
  },
  {
    id: "replacement-windows",
    title: "Replacement Windows",
    subtitle: "Upgrading outdated, draughty, or damaged existing units",
    description: "Precision replacement services designed to fit seamlessly into existing structural openings, instantly improving your home's comfort, sound reduction, and thermal performance.",
    features: [
      "Careful removal and respectful protection of surrounding brickwork",
      "Custom fabrication to match existing structural apertures",
      "Significant reduction in outside street noise and heat loss",
      "Neat interior and exterior trim completion"
    ],
    idealFor: "Homes experiencing draughts, condensation between panes, or deteriorating frames.",
    image: heroImg
  }
];

export interface DoorCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  idealFor: string;
  image: string;
}

export const DOOR_CATEGORIES: DoorCategory[] = [
  {
    id: "front-doors",
    title: "Front Doors",
    subtitle: "Create a memorable first impression with high-security entrance designs",
    description: "A tailored front door enhances your home's kerb appeal while providing robust security and protection against the British elements.",
    features: [
      "Heavy-duty multi-point locking mechanisms",
      "Robust core construction for safety and acoustic control",
      "Custom glazing inserts and decorative side lights",
      "High-grade weather seals preventing draughts and water ingress"
    ],
    idealFor: "Homeowners wishing to upgrade their main home entrance with style and security.",
    image: frontDoorImg
  },
  {
    id: "composite-doors",
    title: "Composite Doors",
    subtitle: "Premium multi-layer construction combining strength and timeless beauty",
    description: "Composite doors combine insulating cores with durable outer skins, offering the authentic look of timber with superior weather resistance and durability.",
    features: [
      "Dense high-insulation core for superior thermal efficiency",
      "Tough, dent-resistant outer skin that won't warp or twist",
      "High-security British standard cylinder locks",
      "Variety of classic and contemporary door panel styles"
    ],
    idealFor: "Homeowners seeking high security, low maintenance, and energy efficiency.",
    image: frontDoorImg
  },
  {
    id: "patio-doors",
    title: "Patio Doors",
    subtitle: "Classic sliding accessibility with expansive panoramic garden views",
    description: "Patio doors provide an easy, space-efficient transition between your indoor living space and outdoor garden or terrace, sliding effortlessly along durable tracks.",
    features: [
      "Space-saving inline sliding mechanism",
      "Large glass panes maximizing panoramic outdoor visibility",
      "Anti-lift security blocks and multi-point hook locks",
      "Smooth glide rollers engineered for effortless operation"
    ],
    idealFor: "Properties where swinging door clearances are limited, or for opening onto patios.",
    image: bifoldImg
  },
  {
    id: "french-doors",
    title: "French Doors",
    subtitle: "Double opening traditional charm with abundant natural light",
    description: "French doors feature classic double-door styling that can open inward or outward, framing garden views and inviting fresh air into your reception or dining rooms.",
    features: [
      "Master and slave dual-opening door leaves",
      "Full-height glass panes for generous light transmission",
      "Coordinated shoot-bolt and multi-point locking",
      "Low-threshold options for easy accessibility"
    ],
    idealFor: "Traditional London living rooms, dining rooms, and garden terraces.",
    image: bifoldImg
  },
  {
    id: "sliding-doors",
    title: "Sliding Doors",
    subtitle: "Contemporary large-format glass panels with minimal visual interruption",
    description: "Engineered for expansive openings, modern sliding glass doors bring outdoor living into your interior with vast glazed sections and smooth, weighted track movement.",
    features: [
      "Heavy-duty rolling mechanisms handling large glass panels",
      "Slim interlocks minimizing vertical frame obstructions",
      "High-specification double glazing for acoustic and thermal comfort",
      "Weather-tight continuous brush and rubber seals"
    ],
    idealFor: "Modern open-plan kitchen diners and large residential home extensions.",
    image: bifoldImg
  },
  {
    id: "bi-fold-doors",
    title: "Bi-Fold Doors",
    subtitle: "Complete concertina opening for an unobstructed indoor-outdoor flow",
    description: "Bi-fold doors concertina neatly to one or both sides, creating a completely open aperture that unites your home and garden into one seamless entertainment space.",
    features: [
      "Multi-panel concertina folding configurations",
      "Smooth top-hung or bottom-rolling running gear",
      "Flush floor threshold options for seamless walk-through",
      "Independent traffic door for quick everyday garden access"
    ],
    idealFor: "Garden-facing extensions, entertaining zones, and summer living spaces.",
    image: bifoldImg
  }
];

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  keyPoints: string[];
  iconName: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "window-installation",
    title: "Window Installation",
    shortDesc: "Professional supply and precision installation of quality residential windows.",
    detailedDesc: "From initial on-site measurement in London SE5 and surrounding districts through to the final installation and clean-up, our window installation service focuses on accuracy, tidy workmanship, and weather-tight sealing.",
    keyPoints: [
      "Accurate structural opening survey and sizing",
      "Expert fitting ensuring level, plumb, and square alignment",
      "Thermal expansion accommodation and perimeter insulation",
      "Protective dust sheeting and tidy site care throughout"
    ],
    iconName: "AppWindow"
  },
  {
    id: "door-installation",
    title: "Door Installation",
    shortDesc: "Secure, weather-sealed installation for front, back, and garden doors.",
    detailedDesc: "A secure and properly hung door is vital for home safety, draught exclusion, and effortless day-to-day operation. We take great care in aligning frames, hinges, and locks.",
    keyPoints: [
      "Precise frame assembly and anchored fixing into masonry",
      "Smooth hinge adjustment and latch alignment",
      "Effective draught-proofing and threshold installation",
      "Complete lock testing and key handover"
    ],
    iconName: "DoorClosed"
  },
  {
    id: "replacement-windows",
    title: "Replacement Windows",
    shortDesc: "Upgrading tired, single-glazed, or malfunctioning windows with modern units.",
    detailedDesc: "Replacing aged windows dramatically improves thermal efficiency, eliminates unwanted drafts, reduces external traffic noise, and revitalizes your property's exterior.",
    keyPoints: [
      "Careful deconstruction and disposal of old frames",
      "Inspection and preparation of existing reveals",
      "Seamless replacement that respects property finishes",
      "Immediate improvement in warmth and condensation control"
    ],
    iconName: "RefreshCw"
  },
  {
    id: "replacement-doors",
    title: "Replacement Doors",
    shortDesc: "Renewing dated or compromised entrance and patio doors with secure options.",
    detailedDesc: "If your current door is draughty, sticking, or showing signs of wear, our replacement service provides a fresh, modern installation engineered for security and energy retention.",
    keyPoints: [
      "Careful removal without damaging interior plasterwork",
      "Updated multi-point security hardware installation",
      "Thermal efficiency and modern weather sealing",
      "Clean finishing trims inside and out"
    ],
    iconName: "ShieldCheck"
  },
  {
    id: "window-door-upgrades",
    title: "Window & Door Upgrades",
    shortDesc: "Performance enhancements, hardware updates, and glazing improvements.",
    detailedDesc: "Enhance your existing home fittings with glazing upgrades, acoustic glass solutions, upgraded handles, and enhanced security locks tailored to your needs.",
    keyPoints: [
      "High-efficiency double glazing unit upgrades",
      "Security hardware and cylinder lock enhancements",
      "Draught excluder and weather seal renewals",
      "Bespoke adjustments for smoother opening and closing"
    ],
    iconName: "SlidersHorizontal"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Quotes & Pricing" | "Installation" | "Products";
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: "How do I request a quotation for my London home?",
    answer: "You can request a quotation by calling us directly on +44 20 8535 7540 or by submitting the online enquiry form on our Contact page with your project details and location in London.",
    category: "Quotes & Pricing"
  },
  {
    question: "Which areas in London do you cover?",
    answer: "ClearView Windows & Doors is based in London SE5 7HN, serving homeowners across the SE5 district and surrounding London boroughs.",
    category: "General"
  },
  {
    question: "What is the difference between casement windows and sash windows?",
    answer: "Casement windows are hinged on the side or top and swing outward to open, providing high weather sealing and versatile ventilation. Sash windows slide vertically on counterbalances or springs, which is the classic style seen in Victorian, Edwardian, and period London properties.",
    category: "Products"
  },
  {
    question: "What should I prepare before an on-site survey or consultation?",
    answer: "Having clear access to the windows or doors you wish to replace or install is very helpful. It is also beneficial to note down any specific design preferences, such as opening directions or frame styles, so we can discuss the most suitable options for your home.",
    category: "Installation"
  },
  {
    question: "How long does a typical window or door replacement take?",
    answer: "Installation timelines depend on the number of units, the property accessibility, and the opening specifications. We provide clear scheduling and expected timelines prior to commencing work.",
    category: "Installation"
  },
  {
    question: "Can I choose between different door opening types like bi-fold, sliding, and French doors?",
    answer: "Yes, we provide editable options across bi-fold doors, sliding patio doors, and French doors. The best choice depends on your room layout, available opening width, and whether you prefer an unobstructed concertina opening or a space-saving slide.",
    category: "Products"
  },
  {
    question: "How can I contact ClearView Windows & Doors?",
    answer: "You can reach us by phone at +44 20 8535 7540 or by visiting our Contact page to send a detailed enquiry.",
    category: "General"
  }
];
