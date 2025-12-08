"use client"

import HomeBackground from './home/HomeBackground';
import React, { useEffect, useCallback,useState } from "react";
import HomeCom from './HomeCom';
import { useSelector, useDispatch } from "react-redux";
import { setIsAside } from "./redux/slicer/AsideCheck";
import { setPosit } from "./redux/slicer/posit";
import { setOpacity } from "./redux/slicer/opacity";
import type { RootState } from "./redux/store";
import Loading from "./loading/Loading"



export default function Home() {
  
  const dispatch = useDispatch();
  const isAside = useSelector((state: RootState) => state.isAs.value);
  const [loading,setLoading] = useState<boolean>(false)
  
  
  useEffect(() => {
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));
    setTimeout(() => {
      dispatch(setIsAside(false));
    }, 300);
  },[]);
  
  
  return (
    <div className="relative">
        {
          loading ?
            <Loading />
            :
            <>
            <HomeBackground />
            <div className="relative z-10 none ">
            <HomeCom />
            </div>
            </>
        }
    </div>
  )
}