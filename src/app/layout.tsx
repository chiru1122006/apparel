import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DynamicBackground from "@/components/ui/DynamicBackground";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Concord Apparel | Where Uniforms Inspire Identity and Unity",
  description:
    "Indian uniform-design and manufacturing brand for schools, colleges, medical institutions, and hospitality teams. 25+ years of bespoke craftsmanship, tailored fit, and durable institutional attire.",
  keywords: [
    "School Uniforms India",
    "College Blazers Bangalore",
    "Medical Scrubs Manufacturer",
    "Hospitality Chef Coats",
    "Institutional Uniforms",
    "Concord Apparel",
    "Custom Uniform Tailoring",
  ],
  authors: [{ name: "Concord Apparel" }],
  openGraph: {
    title: "Concord Apparel | Redefining Uniforms for Modern Education",
    description:
      "Crafting uniforms that inspire confidence, comfort, and institutional pride. Trusted by 130+ premier institutions across India.",
    url: "https://concordapparel.in",
    siteName: "Concord Apparel",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concord Apparel | Premium Institutional Uniforms",
    description:
      "Where uniforms inspire identity and unity. Custom uniform design and manufacturing for schools, colleges, and medical centers.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-transparent text-[#12161A] antialiased selection:bg-[#B89047]/20 selection:text-[#0F172A]">
        <SmoothScroll>
          <DynamicBackground />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
