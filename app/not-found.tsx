"use client";
import {Navbar1}from "@/components/navbar";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fff8ec] flex flex-col">
      <Navbar1 solidBg />
      <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <h1 className={`${outfit.className} text-6xl font-bold text-[#FE975C] mb-4 drop-shadow-lg`}>
          404
        </h1>
        <h2 className={`${outfit.className} text-3xl md:text-4xl font-semibold text-[#222] mb-2`}>
          Oops! This page does not exist.
        </h2>
        <p className="text-lg text-[#2D0B10] mb-8">
          The page you’re looking for isn’t on the menu.<br />
          Let’s get you back to something delicious!
        </p>
        <Link href="/" passHref>
          <button
            className="bg-[#FE975C] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-[#FFD700] hover:text-[#2D0B10] transition-colors duration-200 text-lg"
          >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}