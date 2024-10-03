import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WEDDING_DATE } from "@/constants/app";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Komal and Ankit's Wedding",
  description: `Komal and Ankit are getting married on ${WEDDING_DATE}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="h-screen">
          <div className="overflow-y-auto" style={{ height: "calc(100svh)" }}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
