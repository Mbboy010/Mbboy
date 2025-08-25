"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Users, Activity, User, DollarSign, Book } from "lucide-react";

export default function Content() {
  const pathname = usePathname();

  // Array of navigation items
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "Collaborate", href: "/collaborate", icon: Users },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Blog", href: "/blog", icon: Book },
    { name: "About Me", href: "/about", icon: User },
  ];

  return (
    <div>
      <div className="flex mt-3 text-foreground dark:text-background flex-col gap-2 ml-2">
        {navItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`text-[1rem] opacity-90 hover:opacity-100 font-[600] flex items-center py-2 px-3 rounded-md transition-all duration-300 w-[60%]
              ${
                pathname === href
                  ? "bg-gradient-to-r from-customPurple to-customPink text-customWhite"
                  : "hover:bg-customDarkGray/70"
              }`}
          >
            <Icon className="text-[1.4rem] mr-2" />
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
}