# Concord Apparel — Institutional Uniform Design & Manufacturing

> **“Where Uniforms Inspire Identity and Unity”**  
> Premium website for Concord Apparel, an Indian uniform-design and manufacturing brand for schools, colleges, medical institutions, and hospitality teams.

---

## 🏛️ Brand & Aesthetic Direction

- **Visual Theme**: Bright white & warm off-white canvas (`#FDFBF7`), charcoal typography (`#12161A`, `#1E293B`), subtle muted navy accents, and restrained warm gold stitching highlights (`#B89047`).
- **Editorial Typography**: Large headlines in **DM Serif Display** paired with **Plus Jakarta Sans** for body and interface elements. Letter spacing of `0` with generous line-height for high readability.
- **Craftsmanship Details**: Clean, architectural grid lines, subtle tailor-stitch divider motifs, and square-ish corner radius (maximum 8px) avoiding oversized or generic SaaS styling.

---

## ⚡ Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **Smooth Scrolling**: Lenis (`@studio-freight/lenis` / `lenis/react`)
- **Micro-Interactions & Reveals**: Framer Motion
- **Icons**: Lucide React
- **Image Optimization**: Next.js `<Image />` with Unsplash remote patterns
- **Deployment**: Vercel-ready with strict static typing and clean build pipeline

---

## 📐 Page Structure & Features

1. **Editorial Navigation**
   - Sticky header with backdrop blur and border transition on scroll
   - Custom SVG stitch monogram + serif brand wordmark
   - Smooth anchor navigation linking across all sections
   - Responsive mobile navigation drawer with escape listener & scroll locking
2. **Hero Section**
   - High-impact editorial imagery showing students in contemporary tailored attire
   - Primary headline: *“Redefining Uniforms for Modern Education”*
   - Dual CTAs: *“Get Started Today”* (anchor jumps to quote) & *“Explore Our Work”*
   - Trust marker: *“Trusted uniform partners for 130+ institutions”*
   - Subtle scroll cue peeking into the statistics band
3. **Company Statistics Band**
   - 25+ Years Experience
   - 4 Office Locations
   - 15+ Product Lines
   - 130+ Happy Clients
   - Interactive count-up animation on scroll with desktop vertical dividers
4. **About Concord Apparel**
   - Two-column editorial layout: Left master tailoring image; Right brand narrative
   - *“Bridging Tradition with Innovation”*
   - 4 Highlight cards: *Quality Materials*, *Modern Designs*, *Perfect Fit*, *Custom Branding*
5. **Our Expert Team**
   - Multidisciplinary talent overview
   - 4 Expertise cards with numbered badges:
     - Design Expertise (Doctorate in Apparel Design & Merchandising)
     - Tech Innovation (Design Engineers from IT Industry)
     - Engineering Team (Dynamic, Hands-on Engineering Professionals)
     - 25+ Years (School Uniform Design & Service Delivery)
   - Structured collage of workshop, tailoring, and fabric quality control
6. **Our Specialty Offerings (Services)**
   - 6 Refined cards with itemized garment breakdowns:
     - **Boys’ Uniforms**: Formal Trousers (All Grades), Full & Half Sleeve Shirts, Custom Blazers
     - **Girls’ Uniforms**: Pleated Skirts, Box Pleated Skirts, Pinafores, Girls’ Trousers
     - **College Uniforms**: Professional Attire, Department Specific, Custom Branding
     - **Medical & Lab Coats**: Laboratory Coats, Medical Scrubs, Safety Compliant
     - **Kitchen & Chef Wear**: Kitchen Aprons, Custom Chef Coats, Custom Designs
     - **Bespoke Designs**: Custom Patterns, Unique Branding, Special Requirements
   - Bottom callout: *“Discuss Your Requirements”*
7. **Process Timeline**
   - Visual horizontal timeline on desktop; connected vertical timeline on mobile
   - 6 Key Steps: *Consultation*, *Design*, *Sampling*, *Production*, *Delivery*, *Fit Check*
8. **Contact & Request a Quote Form**
   - Full-width partnership section with direct phone (`+91 88840 67234`) and email (`info@concordapparel.in`)
   - Client-side validated form:
     - Institution Name
     - Email Address
     - Phone Number
     - Uniform Requirements
   - In-line validation, loading spinner state, and polished in-place confirmation message
   - Backend endpoint at `/api/quote` ready for email service integration
9. **Deep Charcoal Footer**
   - Brand column with social media buttons (Facebook, Twitter/X, LinkedIn, Instagram)
   - Services column, Company links, Contact info, and official copyright note

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or 20+ (Node v25 is supported)
- npm or pnpm or yarn

### Installation

```bash
# Clone or navigate into project directory
cd /path/to/apparel

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Compile and optimize production build
npm run build

# Start production server
npm run start
```

---

## 📬 Connecting the Quote Form to Real Email Services

The form currently posts to `/api/quote` (`src/app/api/quote/route.ts`). You can easily connect it to any provider:

### Option A: Resend (Recommended)
1. Install Resend: `npm install resend`
2. Add your API key in `.env.local`: `RESEND_API_KEY=re_...`
3. Update `src/app/api/quote/route.ts`:
   ```ts
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'Concord Inquiries <onboarding@resend.dev>',
     to: 'info@concordapparel.in',
     subject: `New Uniform Inquiry from ${institutionName}`,
     text: `Institution: ${institutionName}\nEmail: ${email}\nPhone: ${phone}\nRequirements: ${requirements}`,
   });
   ```

### Option B: Formspree
Change the `fetch('/api/quote')` in `src/components/ui/QuoteForm.tsx` to your Formspree endpoint `https://formspree.io/f/YOUR_FORM_ID`.

---

## 🌐 Deploying to Vercel

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"New Project"** and import your repository.
4. Framework preset will automatically detect **Next.js**.
5. Click **"Deploy"**.

Your website will be live with global edge CDN, automatic HTTPS, and asset optimization.

---

© 2024 Concord Apparel. All rights reserved. | *Redefining Uniforms for Modern Education*
