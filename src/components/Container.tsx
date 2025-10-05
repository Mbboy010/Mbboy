// components/Container.tsx
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative">
      {children}
    </div>
  );
}