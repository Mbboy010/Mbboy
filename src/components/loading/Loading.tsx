"use client";

import { Poppins } from 'next/font/google';

// Load the font (matching your project)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500'],
  variable: '--font-poppins',
});

const Loading = () => {
  return (
    <div className={`${poppins.variable} font-sans relative h-screen w-screen overflow-hidden bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-white flex flex-col items-center justify-center transition-colors duration-500`}>
      
      {/* CSS Styles for animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin-cw {
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-ccw {
          100% { transform: rotate(-360deg); }
        }
        @keyframes pulse-core {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes fade-text {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-spin-cw { animation: spin-cw 3s linear infinite; }
        .animate-spin-ccw { animation: spin-ccw 2s linear infinite; }
        .animate-core { animation: pulse-core 1.5s ease-in-out infinite; }
        .animate-text { animation: fade-text 2s ease-in-out infinite; }
      `}} />

      {/* 🔮 Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative flex flex-col items-center justify-center z-10">
        
        {/* Outer Ring (Purple) */}
        <div
          className="animate-spin-cw relative h-24 w-24 rounded-full border-b-2 border-t-2 border-purple-600 dark:border-purple-500 border-l-transparent border-r-transparent shadow-[0_0_15px_rgba(168,85,247,0.2)] dark:shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        />
          
        {/* Inner Ring (Pink - Reverse Spin) */}
        <div
          className="animate-spin-ccw absolute h-16 w-16 rounded-full border-l-2 border-r-2 border-pink-600 dark:border-pink-500 border-t-transparent border-b-transparent shadow-[0_0_15px_rgba(236,72,153,0.2)] dark:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
        />
          
        {/* Center Core (Pulsing) */}
        <div
          className="animate-core absolute h-3 w-3 rounded-full bg-gray-900 dark:bg-white shadow-[0_0_20px_5px_rgba(168,85,247,0.3)] dark:shadow-[0_0_20px_5px_rgba(255,255,255,0.5)]"
        />

      </div>

      {/* Loading Text */}
      <div 
        className="animate-text mt-8 text-xs font-medium uppercase tracking-[0.3em] text-purple-700/80 dark:text-purple-300/80"
      >
        Initializing System...
      </div>

    </div>
  );
};

export default Loading;
