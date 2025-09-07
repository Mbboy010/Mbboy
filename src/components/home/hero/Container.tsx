import HeaderE from './HeaderE';
import HeroDis from './HeroDis';
import StatsCard from './StatsCard';
import Social from './Social';
import Top from './Top';
import React from 'react';

export default function Container() {
  return (
    <div className="flex relative flex-col md:flex-row md:justify-center md:items-center md:gap-4 xl:gap-24 lg:gap-14">
    <HeaderE />

      <div className="w-full  relative mt-16 md:w-auto">
        <Top />
        <div className="p-2">
          <StatsCard />
        </div>
      </div>
      <div className="md:mt-[8.5rem] w-full md:w-auto">
        <HeroDis />
      </div>

    </div>
  );
}