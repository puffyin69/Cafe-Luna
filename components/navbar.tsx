"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Oregano, Noto_Sans } from "next/font/google";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

const oregano = Oregano({ subsets: ["latin"], weight: ["400"] });
const notoSans = Noto_Sans({ subsets: ["latin"], weight: ["500"] });

const Navbar1 = ({ solidBg = false }: { solidBg?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Determine text color based on solidBg
  const logoTextColor = solidBg ? "text-[#2D0B10]" : "text-white";
  const linkTextColor = solidBg ? "text-[#2D0B10]" : "text-white";

  return (
    <nav
      className={`flex items-center justify-between px-4 py-3 md:px-16 relative z-50 w-full ${
        solidBg ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo left */}
      <div className="flex flex-col items-start gap-1">
        <Link
          href="/"
          className={`text-3xl md:text-4xl font-bold ${oregano.className} hover:scale-110 transition-all duration-300 ${logoTextColor}`}
        >
          Cafe Luna
        </Link>
        <span className="w-10 md:w-12 h-1 bg-gradient-to-r from-[#FFD700] via-[#FE975C] to-transparent rounded-full" />
      </div>
      {/* Centered Links (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-md rounded-full px-4 md:px-8 py-2 shadow border border-[#FFD700]/10 gap-4 md:gap-8">
        <Link
          href="#gallery"
          className={`${notoSans.className} ${linkTextColor} text-base md:text-lg`}
        >
          Gallery
        </Link>
      </div>
      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-2 md:gap-4">
        <SignedOut>
          <SignInButton mode="modal">
            <Button
              className="bg-[#FFD700] text-[#2D0B10] rounded-full px-5 md:px-7 py-2 font-semibold shadow-lg hover:bg-[#FE975C] hover:text-white hover:scale-105 transition-all duration-200 border border-[#FFD700]"
              style={{ letterSpacing: "0.04em" }}
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
      {/* Hamburger Icon */}
      <button
        className={`md:hidden p-2 ${solidBg ? "text-[#2D0B10]" : "text-white"}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
      </button>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col animate-fade-in">
          <div className="flex-1" onClick={() => setIsOpen(false)} />
          <div className="bg-white/95 backdrop-blur-xl rounded-t-3xl shadow-2xl p-8 flex flex-col items-center gap-6 w-full">
            <Link
              href="#gallery"
              className={`${notoSans.className} text-xl text-[#2D0B10]`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  className="bg-[#FFD700] text-[#2D0B10] rounded-full px-10 py-2 font-semibold hover:bg-[#FE975C] hover:text-white transition-colors duration-200 shadow-lg mt-2 border border-[#FFD700] w-full"
                  style={{ letterSpacing: "0.04em" }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>
        </div>
      )}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.35s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export { Navbar1 };