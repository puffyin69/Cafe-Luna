"use client";
import { Overlock, Poppins } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(SplitText);
const overlock = Overlock({
  subsets: ["latin"],
  weight: ["700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const testimonials = [
  {
    name: "Aarav Mehta",
    text: "The moment I walked in, I felt at peace. The coffee is top-tier, but it’s the cozy vibe that keeps me coming back.",
    badge: "Regular",
    stars: 4,
  },
  {
    name: "Riya Sharma",
    text: "I bring my laptop here almost every weekend. Great Wi-Fi, chill music, and the oat latte? Chef’s kiss.",
    badge: "Cafe Enthusiast",
    stars: 4,
  },
  {
    name: "Priya Singh",
    text: "Best pastries in town! The staff is always smiling and the ambiance is perfect for reading.",
    badge: "Pastry Lover",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    text: "Love the playlist and the matcha latte. My go-to spot for a creative boost.",
    badge: "Creative Soul",
    stars: 4,
  },
];

export default function Testimonial() {
  const headingRef = useRef(null);
  useGSAP(()=>{
    if(headingRef.current){
      gsap.fromTo(headingRef.current, {y:60,opacity:0},
        {
          y:0,
          opacity:1,
          duration:0.7,
          ease:"power3.out",
          stagger:0.04,
          scrollTrigger:{
            trigger:headingRef.current,
            start:"top 80%",
            toggleActions:"play none none reverse",
            markers:false,
          }
        }
      )
    }

  },[])
  return (
    <section className="w-full py-10 md:py-16 bg-white flex flex-col items-center px-2 md:px-12" ref={headingRef}>
      <div className="max-w-4xl w-full mx-auto mb-8 md:mb-12">
        <h2 className={`text-2xl md:text-5xl font-bold mb-2 text-center ${overlock.className} text-[#2D0B10]`}>
          What Our Guests Are Saying
        </h2>
        {/* Elegant fading line */}
        <div className="w-full h-1 mb-6 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
        <p className={`text-base md:text-lg text-gray-600 mb-8 ${poppins.className} text-center`}>
          Real stories from those who sip, stay, and smile.
        </p>
      </div>
      {/* Marquee/Carousel effect */}
      <div className="w-full overflow-x-auto">
        <div className="flex gap-4 md:gap-8 min-w-[340px] md:min-w-[900px] animate-marquee">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 min-w-[260px] max-w-[340px] p-4 md:p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300 mb-4"
            >
              <div className="flex items-center gap-2 md:gap-4 mb-6 md:mb-8">
                {[...Array(t.stars)].map((_, idx) => (
                  <Star key={idx} size={18} fill="#FFD700" stroke="#FFD700" />
                ))}
                <Badge variant="secondary" className="ml-auto text-xs px-3 py-1 rounded-full">
                  {t.badge}
                </Badge>
              </div>
              <p className={`font-semibold text-black mb-4 ${poppins.className}`}>
                {t.text}
              </p>
              <span className="text-gray-700 text-sm font-medium">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}