"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaFileAlt } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ${
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav className="flex items-center gap-1 bg-[#1a1a1a] border border-[#303030] rounded-full px-2 py-2">
        {/* Home */}
        <Link
          href="/"
          className={`p-3 rounded-full transition-all ${
            pathname === "/" ? "bg-[#303030] text-white" : "text-text-secondary hover:text-white hover:bg-[#252525]"
          }`}
        >
          <FaHome className="w-4 h-4" />
        </Link>

        {/* Divider */}
        <div className="w-px h-6 bg-[#303030] mx-1"></div>

        {/* About */}
        <Link
          href="/#about"
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            pathname === "/#about" 
              ? "bg-[#303030] text-white" 
              : "text-text-secondary hover:text-white hover:bg-[#252525]"
          }`}
        >
          <FaUser className="w-4 h-4" />
          <span className="text-sm">About</span>
        </Link>

        {/* Resume */}
        <Link
          href="/resume"
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
            pathname === "/resume" 
              ? "bg-[#303030] text-white" 
              : "text-text-secondary hover:text-white hover:bg-[#252525]"
          }`}
        >
          <FaFileAlt className="w-4 h-4" />
          <span className="text-sm">Resume</span>
        </Link>
      </nav>
    </header>
  );
}


