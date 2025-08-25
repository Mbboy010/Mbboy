"use client";
// import Profile from './Profile';
import Content from './Content';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAside } from "@/redux/slicer/AsideCheck";
import { setPosit } from "@/redux/slicer/posit";
import { setOpacity } from "@/redux/slicer/opacity";
import Link from "next/link";
import { X } from "lucide-react"; // Replaced MdClose from react-icons with lucide-react
import { useTheme } from "next-themes";

interface props {
  setPosi: React.Dispatch<React.SetStateAction<string>>;
  posi: string;
}

export default function Aside({ setPosi, posi }: props) {
  const isAside = useSelector((state: any) => state.isAs.value); // Adjusted type to any for simplicity; refine if needed
  const opacity = useSelector((state: any) => state.opacity.value);
  const posit = useSelector((state: any) => state.posit.value);
  const dispatch = useDispatch();
  const { theme } = useTheme(); // Added to support theme-aware styling

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
      className={`top-0 left-0 w-full h-full fixed`}
    >



      <div
        onClick={handleAside}
        style={{ transition: "0.3s", opacity: opacity }}
        className="w-full bg-customDarkGray/40 h-full absolute top-0 left-0"
      />

      <div
        style={{ left: posit, transition: "0.5s" }}
        className="w-[79vw] top-0 h-full backdrop-blur-3xl absolute"
      >
        <div className="relative w-full h-full">
          <div className="w-full backdrop-blur-md justify-between items-center flex bg-customPurple h-[4rem]">
            <h1 className="ml-3 text-customWhite md:ml-4 lg:ml-7 text-[1.5rem] font-semibold">
              Menu
            </h1>
            <X
              onClick={handleAside}
              className="mr-1 text-customWhite text-[1.9rem] font-semibold cursor-pointer hover:text-customPink"
            />
          </div>
          <div className="relative">
{/*            <Profile />
            */}
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}