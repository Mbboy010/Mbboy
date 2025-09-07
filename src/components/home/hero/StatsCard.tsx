"use client";

import { motion } from "framer-motion";
import type { RootState } from '../../../components/redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { auth, db } from "../../../libs/firebaseConfig";
import { doc, getDoc } from "firebase/firestore"; // Imported only necessary functions

export default function StatsCard() {
  const isColor = useSelector((state: RootState) => state.color.value);

  const [ex, setEx] = useState<number>(0);
  const [pr, setPr] = useState<number>(0);
  const [hp, setHp] = useState<number>(0);

  const [exdata, setExdata] = useState<number>(0);
  const [prdata, setPrdata] = useState<number>(0);
  const [hpdata, setHpdata] = useState<number>(0);

  const [isCheck, setIsCheck] = useState<boolean>(false);

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Admin", "motivate");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setExdata(data.Experiences || 0);
          setPrdata(data.Projectdone || 0);
          setHpdata(data.HappyClients || 0);
          setIsCheck(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Animate counters
  useEffect(() => {
    if (isCheck) {
      const duration = 2000; // 2 seconds total animation
      const stepTime = 50; // Update every 50ms
      const steps = duration / stepTime;

      const exIncrement = exdata / steps;
      const prIncrement = prdata / steps;
      const hpIncrement = hpdata / steps;

      const exInterval = setInterval(() => {
        setEx((prev) => (prev < exdata ? Math.min(prev + exIncrement, exdata) : prev));
      }, stepTime);

      const prInterval = setInterval(() => {
        setPr((prev) => (prev < prdata ? Math.min(prev + prIncrement, prdata) : prev));
      }, stepTime);

      const hpInterval = setInterval(() => {
        setHp((prev) => (prev < hpdata ? Math.min(prev + hpIncrement, hpdata) : prev));
      }, stepTime);

      const cleanup = () => {
        clearInterval(exInterval);
        clearInterval(prInterval);
        clearInterval(hpInterval);
      };

      return cleanup;
    }
  }, [isCheck, exdata, prdata, hpdata]);

  return (
    <div className={`flex justify-center items-center space-x-6 ${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} p-5 rounded-lg shadow-lg`}>
      <div className="text-center flex flex-col justify-center items-center">
        {isCheck ? (
          <p className="text-customPurple text-2xl font-bold">{Math.round(ex)}+</p>
        ) : (
          <div className="h-7 w-11 bg-gray-300 rounded-lg animate-pulse"></div>
        )}
        <p className="text-sm text-customWhite">Experiences</p>
      </div>
      <div className="border-l border-gray-400 h-10"></div>
      <div className="text-center flex flex-col justify-center items-center">
        {isCheck ? (
          <p className="text-customPurple text-2xl font-bold">{Math.round(pr)}+</p>
        ) : (
          <div className="h-7 w-11 bg-gray-300 rounded-lg animate-pulse"></div>
        )}
        <p className="text-sm text-customWhite">Project done</p>
      </div>
      <div className="border-l border-gray-400 h-10"></div>
      <div className="text-center flex flex-col justify-center items-center">
        {isCheck ? (
          <p className="text-customPurple text-2xl font-bold">{Math.round(hp)}+</p>
        ) : (
          <div className="h-7 w-11 bg-gray-300 rounded-lg animate-pulse"></div>
        )}
        <p className="text-sm text-customWhite">Happy Clients</p>
      </div>
    </div>
  );
}