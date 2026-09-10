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
  tagline: "Comfortable, High-Quality Uniforms for Schools & Colleges",
  email: "info@concordapparel.in",
  phone: "+91 88840 67234",
  phoneDisplay: "+91 88840 67234",
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
      title: "Durable Fabrics",
      description:
        "Soft, breathable fabrics that resist wrinkles and hold up through hundreds of machine washes without fading.",
      iconName: "ShieldCheck",
      tag: "Strong Fabric",
      metric: "400+ Washes Tested",
      features: [
        "No fabric bobbling (anti-pill)",
        "Colors stay bright & fade-proof",
        "Safe and skin-friendly cotton blends",
      ],
      status: "Lab Tested Quality",
    },
    {
      title: "Comfortable Fits",
      description:
        "Smart-looking designs made for real student life—neat collars, flexible waists, and room to move and play.",
      iconName: "Sparkles",
      tag: "Comfort First",
      metric: "Easy-Move Design",
      features: [
        "Clean structured collars",
        "Comfort stretch waistbands",
        "Reinforced pocket seams",
      ],
      status: "Kid-Approved Fit",
    },
    {
      title: "Guaranteed Fit",
      description:
        "We visit your campus to measure students individually, with extra seam fabric inside so uniforms grow with them.",
      iconName: "Scissors",
      tag: "Accurate Sizing",
      metric: "99% Fit Guarantee",
      features: [
        "Free on-campus sizing camps",
        "Extra inner margin to let out",
        "Fast, free replacements if needed",
      ],
      status: "Perfect Fit",
    },
    {
      title: "Custom School Badges",
      description:
        "High-detail school crests and logos embroidered to stay neat, sharp, and intact year after year.",
      iconName: "BadgeCheck",
      tag: "School Crest & Logo",
      metric: "High-Density Stitch",
      features: [
        "Precision embroidered crests",
        "Custom school ties and belts",
        "Exact school house colors",
      ],
      status: "Precision Embroidery",
    },
  ],
};

export const TEAM_DATA = {
  heading: "Our Team & Craft",
  introduction:
    "With 25+ years of experience, our skilled pattern makers, tailors, and textile experts craft every uniform with care.",
  blocks: [
    {
      id: "design-expertise",
      number: "01",
      title: "Design & Patterning",
      subtitle: "Experienced Textile Specialists",
      description:
        "Uniform patterns cut specifically for Indian weather—lightweight, breathable, and comfortable in all seasons.",
      tag: "Design & Fit",
      metric: "Master Cutters",
      skills: [
        "Weather-friendly fabrics",
        "Clean modern patterns",
        "Tested for active kids",
      ],
      certified: "Quality Certified",
    },
    {
      id: "tech-innovation",
      number: "02",
      title: "Smart Sizing",
      subtitle: "Digital Measurement & Tracking",
      description:
        "Digital size management ensures accurate sizing for thousands of students with zero order mix-ups.",
      tag: "Accurate Sizing",
      metric: "Zero Size Errors",
      skills: [
        "Digital measurement cards",
        "Grade-by-grade sizing",
        "Fast re-orders anytime",
      ],
      certified: "Digital Accuracy",
    },
    {
      id: "engineering-team",
      number: "03",
      title: "Strong Stitching",
      subtitle: "Industrial Quality Production",
      description:
        "Double-needle stitching at pockets, knees, and stress points so uniforms don't tear during sports or play.",
      tag: "Built to Last",
      metric: "Reinforced Seams",
      skills: [
        "Heavy-duty lock stitching",
        "Reinforced stress points",
        "Tear-resistant pocket corners",
      ],
      certified: "Tear-Tested Seams",
    },
    {
      id: "delivery-heritage",
      number: "04",
      title: "25+ Years of Trust",
      subtitle: "On-Time Campus Delivery",
      description:
        "We deliver all uniforms directly to your school packed neatly by grade and section, well before reopening day.",
      tag: "Trusted Delivery",
      metric: "130+ Schools",
      skills: [
        "Packed by class and section",
        "On-campus alteration team",
        "100% on-time delivery",
      ],
      certified: "On-Time Guarantee",
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
  heading: "What We Make",
  introduction:
    "Complete uniform solutions for schools, colleges, laboratories, and hospitality teams.",
  ctaText: "Request a Free Quote",
  services: [
    {
      id: "boys-uniforms",
      title: "Boys’ Uniforms",
      subtitle: "Durable, comfortable, and easy to wash",
      category: "School Wear",
      items: [
        "Comfortable trousers & shorts",
        "Crisp full & half sleeve shirts",
        "Tailored blazers & vests",
      ],
      iconName: "Shirt",
      image: "/hero_images/image1.png",
    },
    {
      id: "girls-uniforms",
      title: "Girls’ Uniforms",
      subtitle: "Smart fits made for all-day comfort",
      category: "School Wear",
      items: [
        "Pleated skirts & divided skirts",
        "Formal pinafores & shirts",
        "Comfort-fit tailored trousers",
      ],
      iconName: "Layers",
      image: "/hero_images/image2.png",
    },
    {
      id: "college-uniforms",
      title: "College Uniforms",
      subtitle: "Professional look for higher education",
      category: "Colleges & Unis",
      items: [
        "Structured college blazers",
        "Formal shirts and trousers",
        "Embroidered college ties",
      ],
      iconName: "GraduationCap",
      image: "/hero_images/right_image.png",
    },
    {
      id: "medical-lab-coats",
      title: "Medical & Lab Coats",
      subtitle: "Clean, hygienic, and easy to wash",
      category: "Healthcare & Labs",
      items: [
        "Doctor & student lab coats",
        "Comfort-stretch medical scrubs",
        "Bleach & stain-resistant cotton",
      ],
      iconName: "Stethoscope",
      image: "/hero_images/image5.png",
    },
    {
      id: "kitchen-chef-wear",
      title: "Kitchen & Chef Wear",
      subtitle: "Cool, breathable, and heat-resistant",
      category: "Hospitality",
      items: [
        "Double-breasted chef coats",
        "Durable kitchen aprons",
        "Breathable mesh air vents",
      ],
      iconName: "UtensilsCrossed",
      image: "/hero_images/image4.png",
    },
    {
      id: "bespoke-designs",
      title: "Custom School Sets",
      subtitle: "Unique colors, checks, and school crests",
      category: "Custom Tailored",
      items: [
        "Custom plaid & check patterns",
        "Detailed embroidered school crests",
        "House t-shirts & tracksuits",
      ],
      iconName: "Palette",
      image: "/hero_images/image3.png",
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
  tagline: "Comfortable, High-Quality Uniforms for Schools & Colleges",
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
  subline: "Trusted by 130+ Schools and Colleges Across India",
};
