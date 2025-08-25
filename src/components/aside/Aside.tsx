"use client";
import React from "react";
import Content from "./Content";
import { useSelector, useDispatch } from "react-redux";
import { setIsAside } from "../redux/slicer/AsideCheck";
import { setPosit } from "../redux/slicer/posit";
import { setOpacity } from "../redux/slicer/opacity";
import { X } from "lucide-react"; 
import { useTheme } from "next-themes";
import type { RootState } from "../redux/store"; // ✅ import RootState

interface Props {
  setPosi: React.Dispatch<React.SetStateAction<string>>;
  posi: string;
}

export default function Aside({ setPosi, posi }: Props) {
  const isAside = useSelector((state: RootState) => state.isAs.value);
  const opacity = useSelector((state: RootState) => state.opacity.value);
  const posit = useSelector((state: RootState) => state.posit.value);

  const dispatch = useDispatch();
  const { theme } = useTheme();

  const handleAside = () => {
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));
    setTimeout(() => {
      dispatch(setIsAside(false));
    }, 500);
  };

  return (
    <div
      style={{ zIndex: "10", display: isAside ? "block" : "none" }}
      className="top-0 left-0 w-full h-full fixed"
    >
      {/* Overlay */}
      <div
        onClick={handleAside}
        style={{ transition: "0.3s", opacity }}
        className="w-full bg-customDarkGray/40 h-full absolute top-0 left-0"
      />

      {/* Aside Panel */}
      <div
        style={{ left: posit, transition: "0.5s" }}
        className="w-[79vw] top-0 h-full backdrop-blur-3xl absolute"
      >
        <div className="relative w-full h-full">
          {/* Header */}
          <div className="w-full backdrop-blur-md flex justify-between items-center bg-customPurple h-[4rem]">
            <h1 className="ml-3 text-customWhite md:ml-4 lg:ml-7 text-[1.5rem] font-semibold">
              Menu
            </h1>
            <X
              onClick={handleAside}
              className="mr-1 text-customWhite text-[1.9rem] font-semibold cursor-pointer hover:text-customPink"
            />
          </div>

          {/* Content */}
          <div className="relative">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}