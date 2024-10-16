"use client";

import { useEffect, useState } from "react";

import "./bride.css";
import { Volume2, VolumeOff } from "lucide-react";

function Bride() {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const body1 = document.getElementById("star-shine-1");
    const body2 = document.getElementById("star-shine-2");
    function renderStarShine(body: HTMLElement) {
      const template = document.createElement("div");
      const stars = 150,
        sparkle = 20;

      let size = "small";
      const createStar = function () {
        const clone = template.cloneNode(true) as HTMLElement;

        clone.setAttribute("id", "");
        clone.style.top = Math.random() * 100 + "%";

        clone.style.left = Math.random() * 100 + "%";
        clone.style.animationDelay = Math.random() * sparkle + "s";

        clone.classList.add(size);
        clone.classList.add("shine");

        body.appendChild(clone);
      };

      for (let i = 0; i < stars; i++) {
        if (i % 2 === 0) {
          size = "small";
        } else if (i % 3 === 0) {
          size = "medium";
        } else {
          size = "large";
        }

        createStar();
      }
    }

    if (body1) {
      renderStarShine(body1);
    }
    if (body2) {
      renderStarShine(body2);
    }
  }, []);
  return (
    <div
      className="relative flex items-center justify-center h-[100svh] overflow-hidden"
      onClick={() => setMuted((s) => !s)}
    >
      <div className="absolute w-full bg-[#4E2862] top-0 h-[50svh]">
        <div id="star-shine-1" className="h-full w-full"></div>
      </div>
      <div className="absolute w-full bg-[#06011C] bottom-0 h-[50svh]">
        <div id="star-shine-2" className="h-full w-full"></div>
      </div>
      <video
        src="/invite.mp4"
        autoPlay
        loop
        muted={muted}
        className="absolute z-10 w-auto min-w-full"
      ></video>
      <div className="text-white absolute z-12 bottom-12 text-3xl opacity-20">
        {muted ? <Volume2 /> : <VolumeOff />}
      </div>
    </div>
  );
}

export default function Page() {
  return <Bride />;
}
