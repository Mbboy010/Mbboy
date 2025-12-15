import Work from "../../components/works/Work"
import { Metadata } from "next"

// 📂 METADATA FOR WORKS/PORTFOLIO PAGE
export const metadata: Metadata = {
  title: "My Works & Projects",
  description:
    "Explore the portfolio of Musa Hakilu (Mbboy). Featuring Full-stack web applications, Cybersecurity tools, and UI/UX designs built with Next.js and React.",
  keywords: [
    // Portfolio Specific
    "Musa Hakilu Portfolio",
    "Mbboy Projects",
    "Next.js projects source code",
    "React case studies",
    "Cybersecurity tools development",
    "UI/UX Design portfolio",
    "Live project demos",
    "GitHub Mbboy010",
    
    // Tech Stack & Location
    "Full-stack developer Nigeria",
    "Kargi developer projects",
    "Kubau tech portfolio",
    "Kaduna software showcase",
  ],

  openGraph: {
    title: "Portfolio & Projects | Musa Hakilu (Mbboy)",
    description:
      "Check out my latest work in Web Development and Cybersecurity. Live demos and source code available.",
    url: "https://your-domain.com/works",
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Ensure you have a screenshot of your best work here
        width: 1200,
        height: 630,
        alt: "Musa Hakilu Project Showcase",
      },
    ],
  },

  other: {
    "location-area":
      "Kargi, Kubau Local Government, Anchau, Kaduna State, Zaria, Nigeria",
  },
};

export default function WorksPage() {
  return (
    <div className="">
        <Work />
    </div>
  );
}
