"use client";

import RecentClients from './RecentClients';
import ButtonD from './ButtonD';
import Social from './Social';
import { motion } from "framer-motion";
import TypingText from './TypingText';
import React from 'react';

export default function Top() {
  return (
    <div className="w-full h-[25rem] mt-20 relative">
      <div className="w-full text-foreground dark:text-background h-full flex justify-center relative items-center">
        <div className="w-40 relative rounded-bl-[50%] rounded-tr-[30%] rotate-45 opacity-70 h-60 bg-customPurple"></div>
        <div className="absolute backdrop-blur-2xl top-0 left-0 w-full h-full">
          <div className="flex flex-col justify-center items-center ">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-mono mb-1 text-[1.2rem] opacity-70 "
            >
              Hello This is
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-[300] text-[1.3rem] opacity-80 "
            >
              Musa hakilu know as mbboy
            </motion.p>
            <div className="">
              <TypingText texts={["Software engineer", "Cyber security"]} speed={200} />
            </div>
                      <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-mono mb-1 text-[1.2rem] opacity-70 "
            >
              with 4+ years of experience
            </motion.p>
          </div>
          <Social />

          <ButtonD />
          <RecentClients />
        </div>
      </div>
    </div>
  );
}