"use client";

import Link from "next/link";
import { Instagram, Facebook, MessageCircle, Twitter, Github } from "lucide-react"; 
import type { RootState } from "../../../components/redux/store";
import { useSelector } from "react-redux";

export default function Social() {
  const isColor = useSelector((state: RootState) => state.color.value);

  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/mbboy010/",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/qr/Q2EJMOH3QP3DM1",
      icon: MessageCircle,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100091933395389",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/your_handle",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com/your_username",
      icon: Github,
    },
  ];

  return (
    <div className="flex text-foreground dark:text-background justify-center gap-4 items-center w-full h-[4.5rem]">
      {socials.map(({ name, href, icon: Icon }) => (
        <Link
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-[2rem] flex justify-center items-center text-[1rem] rounded-full border border-customPurple h-[2rem] dark:bg-[#ffffff2a] dark:border-customPurple bg-[#72727236] border-customPurple hover:bg-customPink hover:border-customPink transition-colors duration-300`}
        >
          <Icon className="font-normal w-5" />
        </Link>
      ))}
    </div>
  );
}