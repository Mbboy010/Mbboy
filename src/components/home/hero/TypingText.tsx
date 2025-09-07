"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
  texts: string[];
  speed: number;
}

const TypingText = ({ texts, speed = 100 }: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length) {
      if (index < texts[textIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[textIndex][index]);
          setIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }
  }, [index, textIndex, texts, speed]);

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl my-3 font-bold w-full bg-gradient-to-r from-customPurple via-customPink to-customPink text-transparent bg-clip-text rounded-lg"
      >
        {displayText}{" "} <span className="inline-block  w-1 h-5 left-2 bg-foreground dark:bg-background animate-pulse"></span>
      </motion.div>
    </div>
  );
};

export default TypingText;