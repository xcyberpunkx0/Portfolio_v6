"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const originalText = "~/aditya_gupta";
  const [logoText, setLogoText] = useState(originalText);
  const chars = "!<>-_\\\\/[]{}—=+*^?#________";
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-me" },
    { name: "Components", href: "/components" },
  ];

  const handleHover = () => {
    let iteration = 0;
    
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setLogoText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }

      iteration += 1 / 3; // Slower iteration for visibility
    }, 30);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setLogoText(originalText);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-mono text-sm text-zinc-300 hover:text-zinc-100 transition-colors inline-block w-[140px]"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          {logoText}
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname?.startsWith(link.href) && link.href !== '/');
            
            return (
               <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-mono transition-colors ${
                  isActive 
                    ? "text-zinc-200" 
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}


