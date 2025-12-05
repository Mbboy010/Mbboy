import React from "react";
import Price from "../../components/price/Price";
import { Metadata } from "next";
import Script from "next/script";

// 💰 METADATA FOR PRICING PAGE
export const metadata: Metadata = {
  title: "Pricing & Service Packages",
  description:
    "Explore competitive service rates for Full-stack development, Cybersecurity audits, and UI/UX design by Musa Hakilu (Mbboy). Professional tech solutions in Kaduna, Nigeria.",
  keywords: [
    "Hire Musa Hakilu",
    "Web development pricing Nigeria",
    "Cybersecurity audit cost",
    "Freelance developer rates",
    "Hire Next.js developer",
    "Software design packages",
    "Website maintenance cost",
    "Mbboy Services",
    "Tech services in Kubau",
    "Kargi web developer",
    "Anchau tech services",
    "Kaduna software agency",
  ],
  openGraph: {
    title: "Service Pricing | Musa Hakilu (Mbboy)",
    description:
      "Transparent pricing for professional Web Development and Security services. Get a quote today.",
    url: "https://your-domain.com/pricing", // Update with your real domain
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "website",
  },
  other: {
    "location-area":
      "Kargi, Kubau Local Government, Anchau, Kaduna State, Zaria, Nigeria",
  },
};

export default function PricingPage() {
  // 2. 🤖 STRUCTURED DATA WITH YOUR PHONE NUMBER
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Musa Hakilu (Mbboy) Tech Services",
    image: "https://your-domain.com/opengraph-image.png", // Update with your real domain
    description: "Professional Web Development and Cybersecurity Services in Kaduna.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kargi",
      addressLocality: "Kubau",
      addressRegion: "Kaduna",
      postalCode: "811101",
      addressCountry: "NG",
    },
    priceRange: "₦50,000 - ₦2,000,000",
    telephone: "+2349049968390",
    offers: [
      {
        "@type": "Offer",
        name: "Basic Website",
        price: "50000",
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Full Stack Application",
        price: "250000",
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
      },
    ],
  };

  return (
    <div>
      {/* 3. INJECT THE DATA USING NEXT/Script (Next.js 15+) */}
      <Script
        id="json-ld-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />

      <Price />
    </div>
  );
}