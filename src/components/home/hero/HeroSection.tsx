"use client";

export default function HeroSection() {
  return (
    <section className="absolute bottom-0 right-0 flex w-full h-40 items-center justify-end ">
      {/* Wavy background (SVG lines) */}
      <svg
        className="absolute bottom-0 right-0 w-[200px] h-[200px] text-white opacity-50"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M300,100 C400,100 500,200 500,300 C500,400 400,500 300,500 C200,500 100,400 100,300 C100,200 200,100 300,100Z" />
          <path d="M300,150 C380,150 450,220 450,300 C450,380 380,450 300,450 C220,450 150,380 150,300 C150,220 220,150 300,150Z" />
          <path d="M300,200 C360,200 400,240 400,300 C400,360 360,400 300,400 C240,400 200,360 200,300 C200,240 240,200 300,200Z" />
        </g>
      </svg>


    </section>
  );
}