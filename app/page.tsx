"use client";
import Hero from "@/components/Hero";
import Third from "@/components/third";
import Second from "@/components/second";
import Testimonial from "@/components/testimonial";
import CTA from "@/components/CTA";
import Fotter from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  // State to show/hide the scroll-to-top button
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <Hero />
        <Second />
        <Third />
        <Testimonial />
        <CTA />
        <Fotter />
      </div>
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#FE975C] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#FFD700] hover:text-[#2D0B10] transition-colors z-50"
          aria-label="Scroll to top"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}