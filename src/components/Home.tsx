import HomeBackground from './home/HomeBackground';
import React from 'react'
import HomeCom from './HomeCom';

export default function Home() {
  return (
    <div className="relative">
      <HomeBackground />
      <div className="relative z-10 none ">
      <HomeCom />
      </div>
    </div>
  )
}