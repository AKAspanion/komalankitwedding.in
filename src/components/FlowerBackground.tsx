import { FC } from "react";

interface FlowerBackgroundProps {
  children: React.ReactNode;
}

const FlowerBackground: FC<FlowerBackgroundProps> = ({ children }) => {
  return (
    <div className="relative w-screen h-[100svh] bg-white text-black text-xs">
      <div className="absolute py-[8%] px-[8%] w-screen h-screen overflow-auto">
        {children}
      </div>
      <div className="grid grid-cols-2 touch-none pointer-events-none select-none">
        <div className="w-[50vw] h-[50svh] relative">
          <div className="absolute top-0 left-0 z-10">
            <img className="scale-y-[-1]" alt="bg" src={"/frame-bg.webp"} />
          </div>
        </div>
        <div className="w-[50vw] h-[50svh] relative">
          <div className="absolute top-0 right-0">
            <img className="scale-x-[-1]" alt="frame" src={"/frame.webp"} />
          </div>
        </div>
        <div className="w-[50vw] h-[50svh] relative">
          <div className="absolute bottom-0 left-0">
            <img className="scale-y-[-1]" alt="frame" src={"/frame.webp"} />
          </div>
        </div>
        <div className="w-[50vw] h-[50svh] relative">
          <div className="absolute bottom-0 right-0 z-10">
            <img className="scale-x-[-1]" alt="bg" src={"/frame-bg.webp"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerBackground;
