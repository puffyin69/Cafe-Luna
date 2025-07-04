"use client";
import { Overlock, Poppins } from "next/font/google";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const overlock = Overlock({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

const Fotter = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }
  }, []);

  return (
    <footer className="w-full bg-[#18191A] text-white pt-12 pb-6 px-4 md:px-24 mt-16">
      <div
        ref={footerRef}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Cafe Info & Socials */}
        <div>
          <span className={`text-xl font-bold ${overlock.className}`}>
            Cafe Luna
          </span>
          <div className="mt-4 mb-3">
            <span className={`block text-sm text-gray-300 mb-1 ${poppins.className}`}>
              <strong>Opening Hours:</strong>
            </span>
            <span className="text-sm text-gray-300">
              Mon–Fri: 8:00am – 10:00pm
              <br />
              Sat–Sun: 9:00am – 11:00pm
            </span>
          </div>
          <div className="flex gap-3 mt-2">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-[#FE975C] transition-colors" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="hover:text-[#FE975C] transition-colors" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-[#FE975C] transition-colors" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="hover:text-[#FE975C] transition-colors" />
            </a>
          </div>
        </div>
        {/* Account Links */}
        <div>
          <span className={`block font-semibold mb-3 ${poppins.className}`}>
            Account
          </span>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#">Orders</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
            <li>
              <a href="#">Payment Info</a>
            </li>
            <li>
              <a href="#">Rewards</a>
            </li>
          </ul>
        </div>
        {/* Address */}
        <div>
          <span className={`block font-semibold mb-3 ${poppins.className}`}>
            Address
          </span>
          <p className="text-sm text-gray-300">
            123 Moonshine St.
            <br />
            Dreamtown 2024
          </p>
        </div>
        {/* Contact */}
        <div>
          <span className={`block font-semibold mb-3 ${poppins.className}`}>
            Contact
          </span>
          <p className="text-sm text-gray-300 mb-1">+91-000-000-0000</p>
          <a
            href="mailto:contact@cafeluna.com"
            className="text-sm text-gray-300 hover:text-[#FE975C] transition-colors"
          >
            contact@cafeluna.com
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Cafe Luna. All rights reserved.
      </div>
    </footer>
  );
};

export default Fotter;