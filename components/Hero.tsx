"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Overlock, Poppins } from "next/font/google";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Navbar1 } from "@/components/navbar"; // import Navbar1

gsap.registerPlugin(SplitText);

const overlock = Overlock({
  subsets: ["latin"],
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Hero = () => {
  const headingRef = useRef(null);

  useGSAP(() => {
    let split: SplitText | undefined;
    if (headingRef.current) {
      split = new SplitText(headingRef.current, { type: "chars" });
      gsap.from(split.chars, {
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
      });
    }
    return () => {
      if (split) split.revert();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full ">
      {/* Transparent Navbar on top of the image */}
      <div className="absolute top-0 left-0 w-full z-20">
        <Navbar1
          // Optionally, you can pass a prop to control transparency if your Navbar1 supports it
        />
      </div>
      {/* Background Image */}
      <Image
        src="/drink.jpg"
        alt="Cafe"
        fill
        className="object-cover"
        priority
      />
      {/* Black Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/30 " />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full pl-8 md:pl-32 pt-24 ">
        <div className="w-32 h-1 mb-6 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
        <h1
          ref={headingRef}
          className={`text-white text-4xl md:text-6xl font-bold leading-tight mb-4 mt-12 ${overlock.className}`}
        >
          Brewed to Perfection.
          <br />
          Served with Soul.
          <br />
          <span className="text-[#FFD700]">Only at Cafe Luna</span>
        </h1>
        <div className="w-32 h-1 mb-6 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
        <p
          className={`text-[#f3cc0e] text-lg md:text-2xl mb-8 max-w-xl ${poppins.className}`}
        >
          &quot;Sit back under our warm lights, savor handcrafted brews, and let
          the calm take over.&quot;
        </p>
        <a
          href="/menu.png"
          className={`text-white text-base mt-6 ${poppins.className}`}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button className="text-white text-lg md:text-xl font-semibold bg-[#FE975C] px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
            Download Our Menu
          </Button>
        </a>
        <p className={`text-white text-base mt-6 ${poppins.className}`}>
          <strong>Opening Hours:</strong> Mon–Fri: 8:00am – 10:00pm
          &nbsp;|&nbsp; Sat–Sun: 9:00am – 11:00pm
        </p>
      </div>
    </div>
  );
};

export default Hero;
