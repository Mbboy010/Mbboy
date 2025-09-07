"use client";

import Link from 'next/link';
import type { RootState } from '../../../components/redux/store';
import { useSelector, useDispatch } from 'react-redux';

export default function ButtonD() {
  const isColor = useSelector((state: RootState) => state.color.value);

  return (
    <div className="flex justify-center items-center w-full h-[4.5rem] gap-7">
      <Link
        className="bg-customPurple text-customWhite h-[2rem] w-[8rem] flex justify-center items-center rounded-md hover:bg-customPink transition-colors duration-300"
        href="/signup"
      >
        Join me
      </Link>
      <Link
        className={`h-[2rem] w-[8rem] flex justify-center items-center border ${isColor ? "border-customPurple" : "border-customPurple"} rounded-md hover:border-customPink transition-colors duration-300`}
        href="/about"
      >
        About
      </Link>
    </div>
  );
}