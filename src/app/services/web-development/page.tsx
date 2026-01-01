"use client";

import React from "react";
import ServiceLayout from "@/components/ServiceLayout";
import { Code, Globe, Layout, Database, ShoppingCart, Server } from "lucide-react";

export default function WebDevPage() {
  return (
    <ServiceLayout
      title="Full-Stack Web Development"
      subtitle="Speed • Scalability • SEO"
      description="I engineer pixel-perfect, high-performance web applications using the latest web standards. Whether you need a complex SaaS platform, a high-converting landing page, or a robust internal dashboard, I build solutions that scale with your business."
      icon={Code}
      color="text-blue-500"
      gradient="from-blue-600 to-cyan-400"
      features={[
        { 
          title: "Custom SaaS Platforms", 
          desc: "End-to-end development of subscription-based software with secure authentication, recurring billing (Stripe), and multi-tenant architecture." 
        },
        { 
          title: "High-Performance Frontends", 
          desc: "Blazing fast interfaces built with Next.js & React that score 99+ on Google Lighthouse for Core Web Vitals and SEO." 
        },
        { 
          title: "Robust API Development", 
          desc: "Secure, documented REST and GraphQL APIs built with Node.js or Python, designed to handle high traffic and complex data relationships." 
        },
        { 
          title: "E-Commerce Solutions", 
          desc: "Custom storefronts using Shopify Headless or dedicated builds with secure payment gateways, inventory management, and cart logic." 
        },
        { 
          title: "Database Architecture", 
          desc: "Optimized schema design for SQL (PostgreSQL) and NoSQL (MongoDB) databases to ensure data integrity and fast query speeds." 
        },
        { 
          title: "CMS Integration", 
          desc: "Headless CMS integration (Sanity, Strapi, Contentful) allowing your non-technical team to manage content easily." 
        }
      ]}
      techStack={[
        "Next.js 14", 
        "React", 
        "TypeScript", 
        "Node.js", 
        "PostgreSQL", 
        "Redis", 
        "Tailwind CSS", 
        "Docker",
        "Prisma",
        "GraphQL"
      ]}
    />
  );
}
