"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#services", label: "Services" },
    { href: "#workflow", label: "Workflow" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      {/* Pill-shaped Floating Navbar */}
      <div 
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-300 ${
          isScrolled 
            ? "bg-[#111111]/95 backdrop-blur-md shadow-2xl shadow-black/20" 
            : "bg-[#111111] shadow-xl"
        }`}
      >
        
        {/* Desktop Links (Left) */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo (Center) */}
        <Link href="/" className="flex items-center gap-2 group mx-8 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="TeleTorrent"
            width={32}
            height={32}
            className="w-8 h-8 group-hover:scale-105 transition-transform"
          />
          <span className="font-bold text-lg tracking-tight text-white hidden sm:block">
            TeleTorrent
          </span>
        </Link>

        {/* Desktop Links (Right) */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {navLinks.slice(2, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle & Download */}
        <div className="flex items-center gap-3">
          <a href="/teletorrent.apk" download>
            <Button className="hidden sm:flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 font-semibold">
              Download
            </Button>
          </a>

          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 pointer-events-auto w-[calc(100%-2rem)] max-w-sm bg-[#111111] rounded-3xl p-6 shadow-2xl border border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-semibold text-white/80 p-2 hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="/teletorrent.apk" download className="w-full mt-2">
                <Button className="w-full rounded-full h-12 text-lg bg-primary text-primary-foreground">
                  <Download className="h-5 w-5 mr-2" />
                  Download APK
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
