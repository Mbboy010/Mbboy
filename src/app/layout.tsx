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
  title: "Mbboy",
  description:
    "Mbboy — Secure Web & App Development powered by modern cybersecurity and technology innovation.",
  keywords: [
    "Mbboy",
    "Cybersecurity",
    "Web Security",
    "Next.js",
    "Ethical Hacking",
    "Software Development",
    "Musa Hakilu",
  ],
  authors: [{ name: "Musa Hakilu" }],
  openGraph: {
    title: "Mbboy — Secure Web & App Development",
    description:
      "Explore cutting-edge cybersecurity and development projects by Mbboy — where performance meets protection.",
    url: "https://yourdomain.com",
    siteName: "Mbboy",
    locale: "en_US",
    type: "website",
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
        </Providers>
      </body>
    </html>
  );
}