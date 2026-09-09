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
  address: "Bangalore & Pan-India Manufacturing Centers",
  operatingHours: "Monday – Saturday: 9:00 AM – 6:30 PM IST",
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
  headingLine1: "Redefining Uniforms",
  headingLine2: "for Modern Education",
  description:
    "At Concord Apparel, we craft uniforms that inspire confidence, comfort, and institutional pride. With 25+ years of expertise, we bridge tradition with contemporary design.",
  primaryCta: "Get Started Today",
  secondaryCta: "Explore Our Work",
  trustMarker: "Trusted uniform partners for 130+ institutions",
  image:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop", // Editorial student group in smart attire
  accentImage:
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop", // Tailoring craftsmanship
};

export const STATS_DATA: StatItem[] = [
  {
    value: "25+",
    number: 25,
    suffix: "+",
    label: "Years Experience",
    sublabel: "Mastering institutional apparel",
  },
  {
    value: "4",
    number: 4,
    suffix: "",
    label: "Office Locations",
    sublabel: "Strategic regional presence",
  },
  {
    value: "15+",
    number: 15,
    suffix: "+",
    label: "Product Lines",
    sublabel: "Tailored to every discipline",
  },
  {
    value: "130+",
    number: 130,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "Premier schools & academies",
  },
];

export const ABOUT_DATA = {
  heading: "About Concord Apparel",
  intro:
    "We believe uniforms are powerful expressions of pride, belonging, and institutional identity.",
  subheading: "Bridging Tradition with Modern Craft",
  statement1:
    "Uniforms once stood only for discipline. We craft them for modern identity, comfort, and institutional pride.",
  statement2:
    "Engineered with high-durability fabrics and bespoke tailoring that moves with everyday campus life.",
  paragraph1:
    "Uniforms once stood only for discipline. We craft them for modern identity, comfort, and institutional pride.",
  paragraph2:
    "Engineered with high-durability fabrics and bespoke tailoring that moves with everyday campus life.",
  image:
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=1200&auto=format&fit=crop", // Precision tailoring and fabric cutting
  highlights: [
    {
      title: "Quality Materials",
      description:
        "High-twist combed yarns spun for tropical breathability, wrinkle resistance, and extreme wash resilience.",
      iconName: "ShieldCheck",
      tag: "Material Science",
      metric: "400+ Wash Resilience",
      features: ["Anti-Pill Poly-Viscose", "Fade-Proof Dyes", "Oeko-Tex Standard 100"],
      status: "Laboratory Tested",
    },
    {
      title: "Modern Designs",
      description:
        "Clean, contemporary silhouettes engineered to balance formal institutional decorum with unrestricted student movement.",
      iconName: "Sparkles",
      tag: "Aesthetic Ergonomics",
      metric: "3D Ergonomic Slopers",
      features: ["Structured Lapels", "Comfort-Flex Waistbands", "Bespoke Piping"],
      status: "Patented Slopers",
    },
    {
      title: "Perfect Fit",
      description:
        "Campus-wide individual measurement drives backed by digital grading and growth-tolerant internal seam insets.",
      iconName: "Scissors",
      tag: "Precision Sizing",
      metric: "99.4% First-Time Fit",
      features: ["On-Campus Sizing Camps", "Growth Seam Insets", "Zero Tailoring Friction"],
      status: "Guaranteed Fit",
    },
    {
      title: "Custom Branding",
      description:
        "Ultra-high-density Japanese embroidery and jacquard crest weaving that maintain sharp clarity for years.",
      iconName: "BadgeCheck",
      tag: "Insignia & Identity",
      metric: "120K Stitch Density",
      features: ["Gold Thread Crests", "Laser-Cut Appliqué", "Woven Jacquard Ties"],
      status: "Tajima Precision",
    },
  ],
};

export const TEAM_DATA = {
  heading: "Our Expert Team",
  introduction:
    "Backed by over 25 years of collective experience, our diverse team brings innovation, precision, and creativity to every stitch.",
  blocks: [
    {
      id: "design-expertise",
      number: "01",
      title: "Design Expertise",
      subtitle: "Doctorate in Apparel Design & Merchandising",
      description:
        "Academic rigor meets practical ergonomics to formulate breathable, climate-resilient apparel patterns tailored for Indian institutional climates.",
      tag: "Couture & Research",
      metric: "Ph.D. Merchandising",
      skills: ["Couture Sloper Drafting", "Climate-Resilient Weaves", "Ergonomic Motion Studies"],
      certified: "Doctoral Research Lead",
    },
    {
      id: "tech-innovation",
      number: "02",
      title: "Tech Innovation",
      subtitle: "Design Engineers from IT Industry",
      description:
        "Digital sizing frameworks, 3D pattern grading, and automated order-tracking systems that eliminate institutional inventory overhead.",
      tag: "Digital Precision",
      metric: "Ex-IT Systems Architects",
      skills: ["3D Digital Sizing Models", "Automated Grading Algorithms", "Zero-Waste Fabric Nesting"],
      certified: "Algorithmic Precision",
    },
    {
      id: "engineering-team",
      number: "03",
      title: "Engineering Team",
      subtitle: "Dynamic, Hands-on Engineering Professionals",
      description:
        "Optimized assembly workflows, ultrasonic fabric binding, and industrial tension testing to ensure zero fraying under rigorous everyday wash cycles.",
      tag: "Process Excellence",
      metric: "Industrial Tension Lab",
      skills: ["High-Tensile Thread Lock", "Double-Stitch Reinforcement", "Industrial Wash Durability"],
      certified: "ISO Tensile Validated",
    },
    {
      id: "delivery-heritage",
      number: "04",
      title: "25+ Years",
      subtitle: "School Uniform Design & Service Delivery",
      description:
        "A quarter-century of punctual seasonal rollouts, campus fit-check sessions, and direct parent satisfaction across 130+ academic campuses.",
      tag: "Heritage & Trust",
      metric: "130+ Institutional Rollouts",
      skills: ["Campus Fitting Camps", "Annual Delivery Guarantees", "Zero Delayed School Openings"],
      certified: "Quarter-Century Trust",
    },
  ],
  workshopImage:
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1600&auto=format&fit=crop", // Modern design atelier
  secondaryImages: [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop",
  ],
};

export const SERVICES_DATA = {
  heading: "Our Specialty Offerings",
  introduction:
    "Comprehensive uniform solutions tailored to your institution’s unique requirements and brand identity.",
  ctaText: "Discuss Your Requirements",
  services: [
    {
      id: "boys-uniforms",
      title: "Boys’ Uniforms",
      subtitle: "Durability meets classic smart structure",
      category: "School Wear",
      items: [
        "Formal Trousers (All Grades)",
        "Full & Half Sleeve Shirts",
        "Custom Blazers",
      ],
      iconName: "Shirt",
      image: "/hero_images/image1.png",
    },
    {
      id: "girls-uniforms",
      title: "Girls’ Uniforms",
      subtitle: "Tailored movement and all-day comfort",
      category: "School Wear",
      items: [
        "Pleated & Box Pleated Skirts",
        "Formal Pinafores & Blouses",
        "Girls’ Tailored Trousers",
      ],
      iconName: "Layers",
      image: "/hero_images/image2.png",
    },
    {
      id: "college-uniforms",
      title: "College Uniforms",
      subtitle: "Professional dignity for higher education",
      category: "Higher Education",
      items: [
        "Professional Structured Blazers",
        "Department-Specific Silhouettes",
        "Custom Institutional Badges",
      ],
      iconName: "GraduationCap",
      image: "/hero_images/right_image.png",
    },
    {
      id: "medical-lab-coats",
      title: "Medical & Lab Coats",
      subtitle: "Sterility, hygiene and scientific compliance",
      category: "Healthcare",
      items: [
        "Anti-Microbial Laboratory Coats",
        "Ergonomic Stretch Scrubs",
        "Autoclave & Bleach Resistant",
      ],
      iconName: "Stethoscope",
      image: "/hero_images/image5.png",
    },
    {
      id: "kitchen-chef-wear",
      title: "Kitchen & Chef Wear",
      subtitle: "Heat resistance, breathability and flair",
      category: "Hospitality",
      items: [
        "Double-Breasted Chef Coats",
        "Flame-Retardant Aprons",
        "Breathable Mesh Air Vents",
      ],
      iconName: "UtensilsCrossed",
      image: "/hero_images/image4.png",
    },
    {
      id: "bespoke-designs",
      title: "Bespoke Designs",
      subtitle: "Signature insignia and exclusive weaves",
      category: "Specialty",
      items: [
        "Proprietary Institutional Plaids",
        "Tajima High-Density Crests",
        "Custom Pantone Dyed Fabrics",
      ],
      iconName: "Palette",
      image: "/hero_images/image3.png",
    },
  ],
};

export const PROCESS_DATA = {
  heading: "Our Process",
  introduction:
    "From concept to delivery, we ensure excellence at every step of your uniform creation journey.",
  steps: [
    {
      stepNumber: "01",
      title: "Consultation",
      description:
        "Understanding your needs and institutional identity through in-depth discovery sessions.",
      details: "Brand ethos & fabric climate review",
    },
    {
      stepNumber: "02",
      title: "Design",
      description:
        "Creating custom designs with your branding, exact Pantone colorways, and ergonomic silhouettes.",
      details: "3D CAD modeling & pattern specs",
    },
    {
      stepNumber: "03",
      title: "Sampling",
      description:
        "Producing physical sample prototypes for leadership review, wash-testing, and tactile approval.",
      details: "Institutional sign-off & feedback",
    },
    {
      stepNumber: "04",
      title: "Production",
      description:
        "Manufacturing with strict 7-tier quality control in our advanced industrial facilities.",
      details: "High-tensile stitching & dye consistency",
    },
    {
      stepNumber: "05",
      title: "Delivery",
      description:
        "Timely campus delivery and after-sales support with clear batch packaging by grade and section.",
      details: "Punctual seasonal turnaround",
    },
    {
      stepNumber: "06",
      title: "Fit Check",
      description:
        "Individual fit-checks on campus to make appropriate alterations, ensuring every student feels confident.",
      details: "On-campus tailors & replacement buffer",
    },
  ],
};

export const CONTACT_DATA = {
  heading: "Let’s Partner for Excellence",
  description:
    "We look forward to collaborating with you to create uniforms that reflect your values, elevate your identity, and keep students inspired.",
  getInTouchTitle: "Get in Touch",
  getInTouchIntro:
    "For inquiries or to discuss your uniform requirements, please reach out to our design and marketing team. We’re here to serve you better.",
  email: "info@concordapparel.in",
  phone: "+91 88840 67234",
  formHeading: "Request a Quote",
  privacyText:
    "Your details are kept private and used only to respond to your inquiry.",
};

export const FOOTER_DATA = {
  brand: "Concord Apparel",
  tagline: "Where Uniforms Inspire Identity and Unity",
  servicesLinks: [
    { label: "School Uniforms", href: "#services" },
    { label: "College Uniforms", href: "#services" },
    { label: "Medical Coats", href: "#services" },
    { label: "Chef Wear", href: "#services" },
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
  subline: "Redefining Uniforms for Modern Education",
};

