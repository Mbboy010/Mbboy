import Footer from '../components/footer/Footer';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navigate from "../components/navigate/Navigate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mbboy",
    template: "%s - Mbboy",
  },
  description:
    "Portfolio of Musa Hakilu (Mbboy) — Full-stack developer, cybersecurity analyst, UI/UX designer, and software security expert.",
  keywords: [
    "Musa Hakilu",
    "Mbboy",
    "Full-stack developer",
    "Cybersecurity",
    "UI/UX designer",
    "Software security",
    "React developer",
    "Next.js developer",
    "Nigeria developer",
    "Brand identity design",
    "Web developer",
    "Mobile developer",

    // ⭐ Location-based SEO
    "Kargi",
    "Kargi Kaduna",
    "Kubau Local Government",
    "Kaduna State developer",
    "Developer in Kaduna",
    "Cybersecurity Kaduna",
    "Tech expert Kaduna",

    // ⭐ Zaria keywords added
    "Zaria",
    "Zaria developer",
    "Tech expert Zaria",
    "Kaduna Zaria developer",
  ],
  authors: [{ name: "Musa Hakilu" }],
  creator: "Musa Hakilu",
  publisher: "Musa Hakilu",
  openGraph: {
    title: "Musa Hakilu | Mbboy",
    description:
      "Full-stack developer, cybersecurity analyst, and designer. Explore my works, pricing, services, and blog.",
    url: "https://your-domain.com",
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "website",
  },
  other: {
    "google-site-verification": "CTf3k5K1pHcDm8TDmu_Qp6AjT-opf6Bn2rny8MrWEoc",
    "location-area": "Kargi, Kubau Local Government, Zaria, Kaduna State, Nigeria",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-[#0B0B0F] dark:text-white transition-colors duration-500`}
      >
        <Providers>
          {/* 🌍 Global Navigation */}
          <Navigate />

          {/* 📄 Main Content */}
          <main className="min-h-screen">{children}</main>
          
           <Footer /> 
          
        </Providers>
      </body>
    </html>
  );
}