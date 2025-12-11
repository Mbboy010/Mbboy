import React from 'react'
import Collaboration from "../../components/collaboration/Collaboration"
import { Metadata } from "next"

// 🤝 METADATA FOR COLLABORATION PAGE
export const metadata: Metadata = {
  title: "Collaborate & Partner",
  description:
    "Let's build the future together. Open for technical partnerships, open-source collaborations, and cybersecurity consultations with Musa Hakilu (Mbboy) in Nigeria.",
  keywords: [
    // Collaboration Keywords
    "Collaborate with Musa Hakilu",
    "Tech partnership Nigeria",
    "Open source collaboration",
    "Business inquiry Mbboy",
    "Software team up",
    "Joint venture tech",
    "Hire developer team",
    
    // Brand & Location
    "Mbboy",
    "Kargi developer",
    "Kubau Local Government",
    "Kaduna tech community",
    "Nigeria software partnership",
  ],

  openGraph: {
    title: "Let's Collaborate | Musa Hakilu (Mbboy)",
    description:
      "Looking for a technical partner? Let's discuss your next project, idea, or open-source initiative.",
    url: "https://your-domain.com/collaboration",
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "website",
  },

  other: {
    "location-area":
      "Kargi, Kubau Local Government, Anchau, Kaduna State, Zaria, Nigeria",
  },
};

export default function CollaboratePage() {
  return (
    <div>
      
      <Collaboration />
      
    </div>
  )
}
