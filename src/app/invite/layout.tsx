import { WEDDING_DATE } from "@/constants/app";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komal and Ankit's Wedding",
  description: `Komal and Ankit are getting married on ${WEDDING_DATE}`,
  metadataBase: new URL("https://www.komalankitwedding.in"),
  openGraph: {
    title: "Komal and Ankit's Wedding",
    description: `Komal and Ankit are getting wedding on ${WEDDING_DATE}`,
    images: "/og.webp",
  },
  twitter: {
    title: "Komal and Ankit's Wedding",
    description: `Komal and Ankit are getting wedding on ${WEDDING_DATE}`,
    images: "/og.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-y-auto relative bg-slate-50  text-black"
      style={{ height: "calc(100svh)" }}
    >
      {children}
    </div>
  );
}
