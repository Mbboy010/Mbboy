"use client"

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsAside } from "./redux/slicer/AsideCheck";
import { setPosit } from "./redux/slicer/posit";
import { setOpacity } from "./redux/slicer/opacity";
import HomeBackground from './home/HomeBackground';
import Loading from "./loading/Loading";

import HomeCom from './HomeCom';

export default function Home() {
  const dispatch = useDispatch();
  
  // FIX: Start loading as true so the user sees the loader first
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Dispatch initial Redux states
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));

    const timer = setTimeout(() => {
      dispatch(setIsAside(false));
      // FIX: Update local state to stop loading after the timeout
      setLoading(false); 
    }, 3000);

    // FIX: Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative">
        {
          loading ? (
            <Loading />
          ) : (
            <>
              <HomeBackground />
              {/* FIX: Removed 'none' class which might obscure content unexpectedly */}
              <div className="relative z-10">
                <HomeCom />
              </div>
            </>
          )
        }
    </div>
  )
}
