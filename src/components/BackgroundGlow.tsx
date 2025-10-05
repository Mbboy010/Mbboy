// components/BackgroundGlow.tsx
export default function BackgroundGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[180px]" />
    </div>
  );
}