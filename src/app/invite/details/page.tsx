/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";

import FlowerBackground from "@/components/FlowerBackground";
import { useState } from "react";

import "./zoom.css";

function Details() {
  const [zoomedImage, setZoomedImage] = useState("");
  const openZoomedImage = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };
  const closeZoomedImage = () => {
    setZoomedImage("");
  };

  return (
    <FlowerBackground>
      <div className="h-full w-full flex items-center justify-center overflow-auto">
        <img
          className="h-full object-contain"
          src="/details.webp"
          onClick={() => openZoomedImage("/details.webp")}
        />
      </div>
      {zoomedImage && (
        <div className="zoomed-image-container" onClick={closeZoomedImage}>
          {/* <Image
            src={zoomedImage}
            alt="zoomed-image"
            layout="fill"
            objectFit="contain"
          /> */}
          <img className="h-auto max-w-auto" src={zoomedImage} />
        </div>
      )}
    </FlowerBackground>
  );
}

export default function Page() {
  return <Details />;
}
