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
  title: "Concord Apparel | School & College Uniforms",
  description:
    "High-quality, comfortable school and college uniforms. 25+ years of experience, premium durable fabrics, and reliable campus delivery across India.",
  keywords: [
    "School Uniforms India",
    "College Blazers Bangalore",
    "Medical Scrubs Manufacturer",
    "Hospitality Chef Coats",
    "School Uniform Manufacturer",
    "Concord Apparel",
    "Custom Uniform Tailoring",
  ],
  authors: [{ name: "Concord Apparel" }],
  openGraph: {
    title: "Concord Apparel | Quality Uniforms for Schools & Colleges",
    description:
      "Durable, comfortable uniforms that students love to wear. Trusted by 130+ schools and colleges across India.",
    url: "https://concordapparel.in",
    siteName: "Concord Apparel",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Concord Apparel | School & College Uniforms",
    description:
      "Durable, comfortable uniforms that students love to wear. Trusted by 130+ schools and colleges across India.",
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
      suppressHydrationWarning
      className={`${jakarta.variable} ${alexBrush.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-sans bg-transparent text-[#12161A] antialiased selection:bg-[#B89047]/20 selection:text-[#0F172A]">
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
