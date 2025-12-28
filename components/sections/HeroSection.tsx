"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { socialLinks } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 md:px-8 py-20">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-20 left-[10%] w-24 md:w-32 h-24 md:h-32 rounded-full bg-accent-pink/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-32 md:w-48 h-32 md:h-48 rounded-full bg-accent-yellow/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-32 left-[20%] w-16 md:w-24 h-16 md:h-24 rounded-full bg-accent-pink/5 blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Name with staggered reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-bold leading-none tracking-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              Aditya
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-accent-yellow via-accent-pink to-accent-yellow"
            >
              Gupta
            </motion.span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary mt-6 md:mt-8 font-light"
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-text-muted mt-3 md:mt-4 max-w-2xl mx-auto px-4"
        >
          Building scalable web & mobile applications with clean architecture
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center flex-wrap gap-3 md:gap-4 mt-8 md:mt-12"
        >
          {[
            { href: socialLinks.github, icon: FaGithub, label: "GitHub" },
            { href: socialLinks.linkedin, icon: FaLinkedin, label: "LinkedIn" },
            { href: socialLinks.geeksforgeeks, icon: SiGeeksforgeeks, label: "GFG" },
            { href: socialLinks.leetcode, icon: SiLeetcode, label: "LeetCode" },
            { href: `mailto:${socialLinks.email}`, icon: FaEnvelope, label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 md:p-4 rounded-full border border-border hover:border-white/50 hover:bg-white/5 transition-colors"
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-text-muted"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border border-text-muted flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-1.5 md:h-2 bg-text-muted rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
