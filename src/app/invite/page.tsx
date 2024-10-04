"use client";

import localFont from "next/font/local";
import classNames from "classnames";

import Image from "next/legacy/image";

import Timer from "./timer";
import Hydrated from "@/components/Hydrated";
import { useState } from "react";
import {
  WEDDING_DATE,
  WEDDING_DATE_TIME,
  WEDDING_VENUE,
  WEDDING_VENUE_MAP,
} from "@/constants/app";
import "./landing.css";

// const marley = localFont({
//   src: "../../../public/fonts/marley/ttf/marley-marley-regular-lovely-script-400.ttf",
//   variable: "--font-marley",
// });
const helostar = localFont({
  src: "../../../public/fonts/helostar/ttf/helostar-helostar-400.ttf",
  variable: "--font-helostar",
});

const currentDate = new Date().getTime();
const targetDate = new Date(WEDDING_DATE_TIME).getTime();

function Invite() {
  const [datePassed] = useState(targetDate < currentDate);
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={classNames(
        "relative bg-black text-sm text-white h-[100svh] uppercase"
      )}
    >
      <div className="absolute hidden sm:block bg-slate-50 top-0 w-screen h-[100svh]">
        <Image
          quality={100}
          alt="bg"
          src="/us.webp"
          layout="fill"
          objectFit="cover"
          className={loaded ? "zoom-in" : "not-zoom-in"}
          onLoad={handleOnLoad}
        />
      </div>
      <div className="absolute sm:hidden bg-slate-50 top-0 w-screen h-[100svh]">
        <Image
          quality={100}
          alt="bg"
          src="/us.webp"
          layout="fill"
          objectFit="cover"
          className={loaded ? "zoom-in" : "not-zoom-in"}
          onLoad={handleOnLoad}
        />
      </div>
      <div className="z-10 w-screen absolute text-center h-[100svh] flex flex-col items-center justify-between gap-16 p-16">
        <div className="text-center flex flex-col items-center justify-center">
          <div
            className={classNames(
              "text-xl md:text-4xl tracking-[28px] text-center"
            )}
          >
            <div className="flex flex-col md:flex-row gap-1 md:gap-10 items-center justify-center pl-6">
              <div>Komal</div>
              <div>&</div>
              <div className="tracking-[30.5px]">Ankit</div>
            </div>
          </div>
          <p
            className={classNames(
              "mt-8 pr-2 md:pr-0 text-xl md:text-2xl font-bold rounded w-fit lowercase",
              helostar.className
            )}
          >
            {datePassed ? "got" : "are getting"} married!
          </p>
        </div>
        <div className="text-center flex flex-col items-center justify-center">
          <div
            className={classNames(
              "leading-6 tracking-widest px-4 py-1 rounded w-fit"
            )}
          >
            <a href={datePassed ? undefined : `/invite/details`}>
              <div className="font-semibold uppercase underline underline-offset-8 text-[12px]">
                {WEDDING_DATE}
              </div>
            </a>
            <a
              target="_blank"
              href={datePassed ? undefined : WEDDING_VENUE_MAP}
            >
              <div className="font-semibold text-[8px] uppercase">
                {WEDDING_VENUE}
              </div>
            </a>
          </div>
          <div>{datePassed ? null : <HydratedTimer />}</div>
        </div>
      </div>
    </div>
  );
}

function HydratedTimer() {
  return (
    <Hydrated loader={false}>
      <Timer targetDate={targetDate} />
    </Hydrated>
  );
}

export default function Page() {
  return <Invite />;
}
