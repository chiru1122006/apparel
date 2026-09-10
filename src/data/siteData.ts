export interface StatItem {
  value: string;
  number: number;
  suffix: string;
  label: string;
  sublabel?: string;
}

export interface AboutHighlight {
  title: string;
  description: string;
  iconName: string;
  tag?: string;
  metric?: string;
  features?: string[];
  status?: string;
}

export interface TeamExpertise {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  metric?: string;
  skills?: string[];
  certified?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  items: string[];
  iconName: string;
  image: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details?: string;
}

export const BRAND_INFO = {
  name: "Concord Apparel",
  tagline: "Where Uniforms Inspire Identity and Unity",
  email: "info@concordapparel.in",
  phone: "+91 88840 67234",
  phoneDisplay: "+91 88840 67234",
  instagram: "@concordapparel.in",
  instagramUrl: "https://www.instagram.com/concordapparel.in/",
  address: "Bangalore, India • Supplying Across the Country",
  operatingHours: "Monday – Saturday: 9:00 AM – 6:30 PM",
};

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  headingLine1: "Quality Uniforms",
  headingLine2: "Made for School & College",
  description:
    "We make durable, comfortable uniforms that students love to wear and schools are proud of. Built with premium fabrics and tailored for an easy, perfect fit.",
  primaryCta: "Request a Free Quote",
  secondaryCta: "View Our Work",
  trustMarker: "Trusted by 130+ schools and colleges",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop",
  accentImage:
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
};

export const STATS_DATA: StatItem[] = [
  {
    value: "25+",
    number: 25,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Making school uniforms",
  },
  {
    value: "4",
    number: 4,
    suffix: "",
    label: "Production Hubs",
    sublabel: "Across major cities",
  },
  {
    value: "15+",
    number: 15,
    suffix: "+",
    label: "Uniform Ranges",
    sublabel: "For schools, labs & sports",
  },
  {
    value: "130+",
    number: 130,
    suffix: "+",
    label: "Partner Schools",
    sublabel: "Across India",
  },
];

export const ABOUT_DATA = {
  heading: "About Concord Apparel",
  intro:
    "We believe school uniforms should feel comfortable all day, look sharp, and last the entire academic year.",
  subheading: "Made for Everyday School Life",
  statement1:
    "A uniform should be more than a dress code. It should be comfortable, durable, and easy to wash.",
  statement2:
    "We use strong, breathable fabrics and neat stitching so students can run, play, and learn freely.",
  paragraph1:
    "A uniform should be more than a dress code. It should be comfortable, durable, and easy to wash.",
  paragraph2:
    "We use strong, breathable fabrics and neat stitching so students can run, play, and learn freely.",
  image:
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1200&auto=format&fit=crop",
  highlights: [
    {
      title: "Quality Materials",
      description:
        "High-twist combed yarns spun for tropical breathability, wrinkle resistance, and extreme wash resilience.",
      iconName: "ShieldCheck",
      tag: "Fabric Selection",
      features: [
        "Sourced from Trusted Partners",
        "Highly durable & breathable fabrics",
        "Material selection for all weather",
      ],
    },
    {
      title: "Modern Design",
      description:
        "Clean, contemporary silhouettes engineered to balance formal institutional decorum with unrestricted student movement.",
      iconName: "Sparkles",
      tag: "Contemporary Design",
      features: [
        "Contemporary patterns & cuts",
        "Smart, professional & comfortable",
        "Modern uniform solutions",
      ],
    },
    {
      title: "Perfect Fit",
      description:
        "Campus-wide individual measurement drives backed by digital grading and growth-tolerant internal seam insets.",
      iconName: "Scissors",
      tag: "Accurate Sizing",
      features: [
        "On-Campus Sizing Camps",
        "Growth Seam Insets",
        "Zero Tailoring Friction",
      ],
    },
    {
      title: "Custom Branding",
      description:
        "Ultra-high-density Japanese embroidery and jacquard crest weaving that maintain sharp clarity for years.",
      iconName: "BadgeCheck",
      tag: "School Crest & Identity",
      features: [
        "High-quality embroidery & printing",
        "Suggest design solution",
        "Customizable badges",
      ],
    },
  ],
};

export const TEAM_DATA = {
  heading: "Our Team & Craft",
  introduction:
    "With 25+ years of experience, our skilled design engineers, pattern makers, and tailors craft every uniform with care.",
  blocks: [
    {
      id: "tech-innovation",
      number: "01",
      title: "Tech Innovation",
      subtitle: "Design Engineers from IT Industry",
      description:
        "Digital sizing frameworks, 3D pattern grading, and automated order-tracking systems that eliminate institutional inventory overhead.",
      tag: "Digital Tech",
      skills: [
        "3D Digital Sizing Models",
        "Automated Grading Algorithms",
        "Zero-Waste Fabric Nesting",
      ],
      certified: "Digital Precision",
    },
    {
      id: "engineering-team",
      number: "02",
      title: "Engineering Team",
      subtitle: "Hands-on Apparel Production",
      description:
        "Optimized assembly workflows, reinforced stitching, and precision quality checks to ensure everyday wash durability.",
      tag: "Craftsmanship",
      skills: [
        "Double-Stitch Reinforcement",
        "Reinforced Stress Points",
        "Durable Thread Locking",
      ],
      certified: "Precision Assembly",
    },
    {
      id: "delivery-heritage",
      number: "03",
      title: "25+ Years Experience",
      subtitle: "School Uniform Design & Delivery",
      description:
        "A quarter-century of punctual seasonal rollouts and dedicated campus fit-check sessions across 130+ academic campuses.",
      tag: "Trusted Service",
      skills: [
        "Packed by Class & Section",
        "On-Campus Sizing Camps",
        "Punctual Seasonal Delivery",
      ],
      certified: "Dedicated Support",
    },
  ],
  workshopImage:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop",
  secondaryImages: [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
  ],
};

export const SERVICES_DATA = {
  heading: "Our Specialized Offerings",
  introduction:
    "Comprehensive uniform solutions tailored to your institution's unique requirements and brand identity — from classrooms and campuses to operating theatres and factory floors.",
  ctaText: "Discuss Your Requirements",
  services: [
    {
      id: "school-uniforms",
      title: "School Uniforms",
      subtitle: "Classrooms & Campus Daily Wear",
      category: "School Wear",
      items: [
        "Boys' formal trousers & Shirts",
        "Girls' skirts, pinafores & trousers",
        "Custom blazers & ties",
        "Cut-to-size for every grade",
      ],
      iconName: "Shirt",
      image: "/hero_images/image2.png",
    },
    {
      id: "kitchen-chef",
      title: "Kitchen & Chef",
      subtitle: "Culinary & Hospitality Attire",
      category: "Hospitality",
      items: [
        "Kitchen Aprons",
        "Custom Chef Coats",
        "Catering Uniforms",
        "Custom Design",
      ],
      iconName: "UtensilsCrossed",
      image: "/hero_images/image4.png",
    },
    {
      id: "college-uniforms",
      title: "College Uniforms",
      subtitle: "Department-Specific Higher Education",
      category: "Colleges & Unis",
      items: [
        "Department Specific attire",
        "Admin Uniforms",
        "Lab uniforms & Coats",
        "Custom branding",
      ],
      iconName: "GraduationCap",
      image: "/hero_images/right_image.png",
    },
    {
      id: "hospital-uniforms",
      title: "Hospital Uniforms",
      subtitle: "Medical & Healthcare Wear",
      category: "Healthcare",
      items: [
        "Antimicrobial Scrubs",
        "Doctor & Nurse Coats",
        "Lab & Medical gowns",
        "OT Uniforms",
        "Patient Uniforms",
      ],
      iconName: "Stethoscope",
      image: "/hero_images/image5.png",
    },
    {
      id: "bespoke-design",
      title: "Bespoke Design",
      subtitle: "Custom Tailored Solutions",
      category: "Specialty",
      items: [
        "Unique custom Patterns and cut",
        "Special Fabric Requirements",
        "Bulk & Limited Runs",
      ],
      iconName: "Palette",
      image: "/hero_images/image3.png",
    },
    {
      id: "by-industries",
      title: "By Industries",
      subtitle: "Corporate, Security & Industrial Wear",
      category: "Industrial",
      items: [
        "Security Agencies",
        "Hospitality",
        "Corporate outfits",
        "Pharma & Biotech",
        "General Industries",
      ],
      iconName: "Building2",
      image: "/hero_images/image6.png",
    },
  ],
};

export const PROCESS_DATA = {
  heading: "How We Work",
  introduction:
    "From fabric selection to campus delivery, we take care of the entire uniform process for you.",
  steps: [
    {
      stepNumber: "01",
      title: "Consultation",
      description:
        "We discuss your school’s requirements, colors, budget, and fabric preferences.",
      details: "Free fabric samples & style catalog",
    },
    {
      stepNumber: "02",
      title: "Design",
      description:
        "We create design mockups with your exact school colors, logos, and cuts.",
      details: "Accurate color matching & style previews",
    },
    {
      stepNumber: "03",
      title: "Sampling",
      description:
        "We make sample uniforms for your school leadership and committee to check and approve.",
      details: "Wash-tested sample prototypes",
    },
    {
      stepNumber: "04",
      title: "Production",
      description:
        "We manufacture every piece with strict quality checks and durable stitching.",
      details: "Double-stitched seams & tested fabrics",
    },
    {
      stepNumber: "05",
      title: "Delivery",
      description:
        "Uniforms arrive on time, packed neatly by grade and student section.",
      details: "Delivered well before school reopens",
    },
    {
      stepNumber: "06",
      title: "Fit Check",
      description:
        "Our team comes to your campus to check student fits and handle quick alterations.",
      details: "On-campus assistance & easy exchanges",
    },
  ],
};

export const CONTACT_DATA = {
  heading: "Let’s Work Together",
  description:
    "Looking for new uniforms or want to upgrade quality? Reach out to us today for free fabric samples and a custom quote.",
  getInTouchTitle: "Get in Touch",
  getInTouchIntro:
    "Call or message us anytime. We will bring fabric samples and size charts directly to your school.",
  email: "info@concordapparel.in",
  phone: "+91 88840 67234",
  formHeading: "Request a Free Quote",
  privacyText:
    "We respect your privacy. We will only use your contact details to send your quote.",
};

export const FOOTER_DATA = {
  brand: "Concord Apparel",
  tagline: "Where Uniforms Inspire Identity and Unity",
  servicesLinks: [
    { label: "School Uniforms", href: "#services" },
    { label: "Kitchen & Chef", href: "#services" },
    { label: "College Uniforms", href: "#services" },
    { label: "Hospital Uniforms", href: "#services" },
    { label: "Bespoke Design", href: "#services" },
    { label: "By Industries", href: "#services" },
  ],
  companyLinks: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  contact: {
    email: "info@concordapparel.in",
    phone: "+91 88840 67234",
    location: "Bangalore, Karnataka, India",
  },
  copyright: "© 2024 Concord Apparel. All rights reserved.",
  subline: "Trusted by 130+ Schools and Colleges Across India",
};
