"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import { socialLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-[#303030] bg-[#121212] py-24 px-20">
      <div className="max-w-7xl mx-auto">
        {/* Large Name Display */}
        <div className="grid grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-7xl font-bold mb-4">
              Aditya
            </h2>
            <p className="text-text-secondary text-lg">Software engineer</p>
          </div>
          <div className="text-right">
            <h2 className="text-7xl font-bold">
              Gupta
            </h2>
          </div>
        </div>

        {/* Social Links - Pill Style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="social-icon"
          >
            <HiMail />
            <span>E-mail</span>
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <SiTelegram />
            <span>Telegram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
            <span>Facebook</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>

        {/* Contacts Section */}
        <div className="text-center">
          <p className="mono text-sm text-text-secondary mb-8">... /Contacts ...</p>
          <div className="flex justify-center gap-12 mb-8">
            <a href="/" className="text-text-secondary hover:text-foreground transition-colors">Main</a>
            <a href="/#about" className="text-text-secondary hover:text-foreground transition-colors">About</a>
            <a href="/#projects" className="text-text-secondary hover:text-foreground transition-colors">Projects</a>
            <a href="/resume" className="text-text-secondary hover:text-foreground transition-colors">Articles</a>
          </div>
          
          {/* Site Info Box */}
          <div className="inline-block border border-[#303030] rounded-2xl p-6 text-left">
            <h3 className="text-lg font-bold mb-3">Site</h3>
            <p className="text-sm text-text-secondary mono">
              Handcrafted by ME /<br/>
              Designed by Taisia /<br/>
              Powered by NextJs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
