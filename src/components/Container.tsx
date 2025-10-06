// components/Container.tsx
"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 w-full ${className}`}
    >
      {children}
    </div>
  );
}