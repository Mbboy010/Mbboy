"use client";

// import AboutD from '../components/home/AboutD';
import MyProject from '../components/home/MyProject';
 import Acontainer from '../components/home/account/Acontainer';
 import Container from '../components/home/hero/Container';
import { Spinner } from "@heroui/react";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAside } from "../components/redux/slicer/AsideCheck";
import { setPosit } from "../components/redux/slicer/posit";
import { setOpacity } from "../components/redux/slicer/opacity";
import { setLoad } from "../components/redux/slicer/Load";
import { setVerify } from "../components/redux/slicer/verify";
import { motion } from "framer-motion";
import { setChat } from "../components/redux/slicer/CheckChat";
import { useTheme } from "next-themes";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { theme } = useTheme(); // Added for theme-aware styling

  useEffect(() => {
    dispatch(setChat(false));
    dispatch(setLoad(false));
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));
    dispatch(setVerify(false));
    setTimeout(() => {
      dispatch(setIsAside(false));
    }, 500);

    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <div
      className={`relative min-h-screen w-full`}
    >
      {loading ? (
        <div>
         <Container />
          <Acontainer />
          <MyProject />
{        
/*      
         <AboutD />
  */
}
        </div>
      ) : (
        <div className={`relative flex justify-center items-center w-full  `}>
          <Spinner
            color="warning"
            size="lg"
            classNames={{ label: "text-foreground mt-4" }}
            variant="wave"
          />
        </div>
      )}
    </div>
  );
}