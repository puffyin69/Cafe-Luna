import { Button } from "@/components/ui/button";
import { Overlock } from "next/font/google";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const overlock = Overlock({
  subsets: ["latin"],
  weight: ["700"],
});

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section
      className="w-full flex flex-col md:flex-row items-center justify-between bg-[#F7F7F7] py-10 md:py-16 px-4 md:px-24 rounded-3xl shadow-2xl my-10 md:my-16"
      ref={sectionRef}
    >
      {/* Left: Big CTA Text */}
      <div className="flex-1 mb-8 md:mb-0 w-full">
        <h2
          className={`text-2xl md:text-5xl font-bold leading-tight ${overlock.className} text-[#222]`}
        >
          Come for the coffee, <br />
          stay for the calm.
          <br />
          <span className="text-[#FE975C]">
            Your favorite new spot is waiting.
          </span>
        </h2>
      </div>
      {/* Right: Description & Buttons */}
      <div className="flex-1 flex flex-col gap-6 items-start md:items-end w-full">
        <p className="text-base md:text-lg text-gray-700 max-w-md mb-2">
          Discover a cozy corner, friendly faces, and handcrafted drinks.
          Whether you’re working, relaxing, or catching up—Cafe Luna is your new
          go-to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="/menu.png"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              className="bg-[#222] text-white rounded-full font-semibold shadow px-6 py-2 w-full sm:w-auto md:w-auto transition-all duration-300
                hover:bg-[#FE975C] hover:scale-105 hover:text-white focus-visible:ring-2 focus-visible:ring-[#FE975C]"
              style={{ backgroundColor: "#222" }}
            >
              Download Our Menu
            </Button>
          </a>
          <Button
            variant="outline"
            className="border border-[#222] text-[#222] rounded-full font-semibold px-6 py-2 w-full sm:w-auto md:w-auto transition-all duration-300
              hover:bg-[#222] hover:text-[#FFD700] hover:border-[#222] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#FE975C]"
          >
            <Link
              href="https://maps.app.goo.gl/FnfPRSQo1We8cCaw5"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
