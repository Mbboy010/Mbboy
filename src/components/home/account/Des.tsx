"use client";

import { Code, ChevronRight, AppWindow, Code2, LayoutDashboard } from "lucide-react"; // Replaced react-icons
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import type { RootState } from '../../../components/redux/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Des() {
  const isColor = useSelector((state: RootState) => state.color.value);
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["end end", "start end"]
  });

  const scale = useTransform(scrollYProgress, [0.40, 1], [1, 0.40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex justify-center">
      <motion.div
        ref={divRef}
        style={{
          scale,
          opacity
        }}
        className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} w-[90vw] md:w-[40vw] lg:w-[33vw] xl:w-[30vw] flex flex-col shadow-lg rounded-2xl`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex mt-3 ml-5 flex-row items-center gap-5">
          <div className="w-10 h-10 rounded-full bg-customPurple flex justify-center items-center">
            <LayoutDashboard className="drop-shadow-lg text-2xl font-black text-customWhite" />
          </div>
          <h1 className="text-xl capitalize text-customPurple font-black">Design logo and 3d model</h1>
        </div>
        <div className="mx-5 my-5">
          <p className="">Are you looking for a logo design and a 3D model for a specific project? Let me know the details, and I can help you to create something unique for you!</p>
        </div>
      </motion.div>
    </div>
  );
}