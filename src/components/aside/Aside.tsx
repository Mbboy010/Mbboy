"use client";

import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "next-themes";
import { setIsAside } from "../redux/slicer/AsideCheck";
import { setPosit } from "../redux/slicer/posit";
import { setOpacity } from "../redux/slicer/opacity";
import type { RootState } from "../redux/store";
import Content from "./Content";

interface Props {
  setPosi: React.Dispatch<React.SetStateAction<string>>;
  posi: string;
}

export default function Aside({ setPosi, posi }: Props) {
  const dispatch = useDispatch();
  const isAside = useSelector((state: RootState) => state.isAs.value);
  const opacity = useSelector((state: RootState) => state.opacity.value);
  const posit = useSelector((state: RootState) => state.posit.value);
  const { theme } = useTheme();

  const handleAside = () => {
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));
    setTimeout(() => {
      dispatch(setIsAside(false));
    }, 400);
  };

  return (
    <AnimatePresence>
      {isAside && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ zIndex: 150 }}
          className="fixed inset-0 w-full h-full"
        >
          {/* 🔲 Overlay */}
          <motion.div
            onClick={handleAside}
            initial={{ opacity: 0 }}
            animate={{ opacity: Number(opacity) }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
          />

          {/* 🧭 Sidebar Panel */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: posit === "-79vw" ? "-100%" : 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className={`absolute top-0 left-0 w-[79vw] h-full flex flex-col 
              bg-white/80 dark:bg-gradient-to-br dark:from-[#1a1a2e]/90 dark:to-[#0d0d0d]/90
              text-gray-800 dark:text-gray-100
              backdrop-blur-2xl border-r border-purple-500/20 shadow-xl`}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 h-16 border-b border-purple-500/20 bg-purple-50/40 dark:bg-purple-500/10 backdrop-blur-md">
              <h1 className="text-xl font-semibold text-purple-500 dark:text-purple-400">
                Menu
              </h1>
              <X
                onClick={handleAside}
                className="cursor-pointer text-purple-500 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
                size={26}
              />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-4 px-2">
              <Content />
            </div>

            {/* Footer */}
            <div className="py-3 border-t border-purple-500/20 text-center text-xs text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Mbboy — Secure by Design 🔒
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}