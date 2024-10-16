"use client";

import { useState } from "react";

function Bride() {
  const [muted, setMuted] = useState(true);
  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      onClick={() => setMuted((s) => !s)}
    >
      <div className="absolute w-full bg-[#4F2862] top-0 h-[50svh]" />
      <div className="absolute w-full bg-[#080224] bottom-0 h-[50svh]" />
      <video
        src="/invite.mp4"
        autoPlay
        loop
        muted={muted}
        className="absolute z-10 w-auto min-w-full"
      ></video>
      <div className="absolute z-12 bottom-12 text-3xl opacity-20">
        {muted ? "🔇" : "🔈"}
      </div>
    </div>
  );
}

export default function Page() {
  return <Bride />;
}
