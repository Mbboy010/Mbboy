// src/components/ui/Button.tsx
"use client"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-md";

  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white shadow-lg",
    secondary: "bg-fuchsia-600 hover:bg-fuchsia-700 text-white shadow-lg",
    outline:
      "border border-purple-400 text-purple-400 hover:bg-purple-600/20 hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}