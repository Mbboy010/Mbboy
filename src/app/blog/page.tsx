import React from 'react'
import Blog from "../../components/blog/Blog"
import { Metadata } from "next"

// 📝 METADATA FOR BLOG PAGE
export const metadata: Metadata = {
  title: "Blog & Tech Insights",
  description:
    "Read the latest articles, cybersecurity tutorials, and software engineering insights from Musa Hakilu (Mbboy). Staying updated on tech trends in Nigeria and beyond.",
  keywords: [
    // Blog Specific Keywords
    "Musa Hakilu Blog",
    "Mbboy Tech Articles",
    "Cybersecurity tutorials",
    "Web development tips",
    "Next.js best practices",
    "Software engineering blog Nigeria",
    
    // Your Brand & Location Keywords (Keep these for SEO dominance)
    "Musa Hakilu",
    "Mbboy",
    "Kargi developer",
    "Anchau developer",
    "Kubau Local Government",
    "Kaduna State tech expert",
    "Zaria developer",
  ],
  
  openGraph: {
    title: "Blog & Insights | Musa Hakilu (Mbboy)",
    description:
      "Explore expert articles on Cybersecurity, Full-stack development, and modern tech solutions by Musa Hakilu.",
    url: "https://your-domain.com/blog",
    siteName: "Musa Hakilu Portfolio",
    locale: "en_US",
    type: "website",
  },

  other: {
    "location-area":
      "Kargi, Kubau Local Government, Anchau, Kaduna State, Zaria, Nigeria",
  },
};

export default function BlogPage() {
  return (
    <div>
     <Blog />
    </div>
  )
}
