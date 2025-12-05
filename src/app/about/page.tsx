import React from "react";
import About from "../../components/about/About";
import { Metadata } from "next";

// 🔥 FULL METADATA FOR ABOUT PAGE
export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Musa Hakilu (Mbboy) — Full-stack developer, cybersecurity analyst, UI/UX designer, software security expert from Kargi, Kubau Local Government, Kaduna State, Nigeria.",
  keywords: [
    "About Musa Hakilu",
    "About Mbboy",
    "Musa Hakilu biography",
    "Full-stack developer Nigeria",
    "Cybersecurity expert Nigeria",
    "UI/UX designer Nigeria",
    "Software security expert",
    "React developer",
    "Next.js developer",
    "Kaduna developer",
    "Zaria developer",
    "Kargi",
    "Kargi Kaduna",
    "Kubau Local Government",
    "Kaduna State tech expert",

    // ⭐ Added as requested
    "Kargi developer",
    "Anchau developer",
    "Kubau developer",
  ],
  authors: [{ name: "Musa Hakilu" }],
  creator: "Musa Hakilu",
  publisher: "Musa Hakilu",

  openGraph: {
    title: "About Musa Hakilu (Mbboy)",
    description:
      "Learn about the experience, background, and skills of full-stack developer and cybersecurity expert Musa Hakilu.",
    url: "https://your-domain.com/about",
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "profile",
    profile: {
      firstName: "Musa",
      lastName: "Hakilu",
      username: "Mbboy",
      gender: "male",
    },
  },

  other: {
    "google-site-verification": "CTf3k5K1pHcDm8TDmu_Qp6AjT-opf6Bn2rny8MrWEoc",
    "location-area":
      "Kargi, Kubau Local Government, Anchau, Kaduna State, Zaria, Nigeria",
  },
};

export default function AboutCon() {
  return (
    <div>
      <About />
    </div>
  );
}