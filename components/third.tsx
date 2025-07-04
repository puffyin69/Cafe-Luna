"use client";
import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery";
import { Overlock, Poppins } from "next/font/google";
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

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Signature Pasta",
    desc: "Creamy, rich, and unforgettable.",
    url: "/pasta.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Woodfired Pizza",
    desc: "Crispy crust, melty cheese.",
    url: "/pizza.jpg",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Classic Burger",
    desc: "Juicy, stacked, and satisfying.",
    url: "/burger.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Mongo Drink",
    desc: "Refreshing and vibrant.",
    url: "/mongodrink.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 5,
    type: "image",
    title: "Sandwich",
    desc: "Perfect for any time of day.",
    url: "/sandwitch1.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Matcha Latte",
    desc: "Earthy, creamy, and energizing.",
    url: "/drink.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    type: "image",
    title: "Cafe Coffee",
    desc: "Brewed to perfection.",
    url: "/coffee.jpg",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
];

export default function Third() {
  const headingRef = useRef(null);

  useGSAP(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section className="min-h-screen py-16 bg-white flex flex-col items-center" id="gallery">
      <div className="max-w-4xl w-full mx-auto mb-12 text-center">
        <h2
          ref={headingRef}
          className={`text-4xl md:text-5xl font-bold mb-4 ${overlock.className} text-[#2D0B10]`}
        >
          Gallery: Our Best Food, Served Fresh
        </h2>
        <div className="mx-auto w-3/8 h-1 mb-6 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent rounded-full" />
        <p className={`text-base md:text-lg text-gray-600 mb-2 ${poppins.className}`}>
          Explore our signature dishes and drinks, crafted with love and served with pride.
        </p>
      </div>
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title=""
        description="Drag and explore our curated collection of food & drinks"
      />
    </section>
  );
}
