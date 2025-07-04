"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { useRef } from "react";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Second = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      { x: -150, opacity: 0 }, // animate from left
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { x: 200, opacity: 0 }, // animate from right
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-4 md:px-16 py-10">
      {/* Left Side: Text */}
      <div
        className="flex-1 flex flex-col justify-center items-start max-w-full md:max-w-xl w-full"
        ref={textRef}
      >
        {/* Highlighted Quote */}
        <h1
          className={`relative text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug ${outfit.className}`}
        >
          <span className="relative">
            <span className="absolute -inset-x-2 -top-1 -bottom-1 -z-10 bg-[#F6F95A] rounded-md w-full h-3/4 left-0 blur-md"></span>
            <span className="text-[#222]">
              “<span className="text-[#222] font-bold">
                Where the Coffee is
              </span>
            </span>
          </span>
          <br />
          <span className="text-[#222] font-bold">
            Handcrafted, the Atmosphere is{" "}
            <span className="text-[#6A8A2B] font-bold">
              Serene, and Every Visit Feels Like
            </span>
          </span>
          <br />
          <span className="text-[#222] font-bold">
            a Little Escape Under the Moon.”
          </span>
        </h1>
        {/* Description */}
        <p className="text-gray-600 mb-8">
          Whether you’re meeting a friend or enjoying a moment alone, Cafe Luna
          offers the perfect setting to relax, recharge, and sip something special.
        </p>
        {/* Philosophy & Vibe */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div>
            <h3 className="font-bold text-black mb-1">Our Philosophy</h3>
            <p className="text-gray-700 text-sm">
              Crafted Moments Over Fast Sips. At Cafe Luna, we believe coffee is
              more than a drink — it’s a ritual. That’s why we slow it down and
              make every cup with intention.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black mb-1">The Luna Vibe</h3>
            <p className="text-gray-700 text-sm">
              Crafted Moments Over Fast Sips. At Cafe Luna, we believe coffee is
              more than a drink — it’s a ritual. That’s why we slow it down and
              make every cup with intention.
            </p>
          </div>
        </div>
      </div>
      {/* Right Side: Image */}
      <div className="flex-1 flex justify-center items-center mt-12 md:mt-0 w-full">
        <div
          className="overflow-hidden w-full max-w-xs sm:max-w-md md:w-[500px] md:h-[500px] h-64 sm:h-80 md:rounded-tl-[250px] rounded-tl-[100px] shadow-xl"
          ref={imageRef}
        >
          <Image
            src="/am.png"
            alt="Cafe Luna Ambience"
            width={500}
            height={500}
            className="object-cover w-full h-full hover:scale-105 transition-all duration-300"
            priority
          />
        </div>
      </div>
    </div>
  );
};
export default Second;