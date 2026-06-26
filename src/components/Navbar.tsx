"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Outsourcing", href: "/outsourcing" },
    { name: "Hire Recruiter", href: "/hire-recruiter" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/80 border-b border-slate-200/80 backdrop-blur-lg shadow-[0_2px_15px_-3px_rgba(15,23,42,0.05)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo Wrapper */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <div className="w-9 h-9 rounded-xl bg-gradient-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300">
              S
            </div>
            <span className="font-sans text-xl font-bold tracking-tight text-slate-900">
              SEREN<span className="text-secondary group-hover:text-[#2563eb] transition-colors duration-300">IQ</span>
            </span>
          </Link>

          {/* Desktop Navigation Floating Pill */}
          <div className="hidden md:flex items-center gap-6 bg-white/70 border border-slate-200/80 backdrop-blur-xl px-2 py-1.5 rounded-full shadow-[0_8px_32px_0_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onClick={() => setHoveredLink(null)}
                    className={`relative text-xs font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                      isActive ? "text-secondary font-bold" : "text-slate-655 hover:text-slate-900"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navActiveOutline"
                        className="absolute inset-0 bg-secondary/8 border border-secondary/15 rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {hoveredLink === link.name && !isActive && (
                      <motion.span
                        layoutId="navHoverOutline"
                        className="absolute inset-0 bg-slate-100 border border-slate-200/50 rounded-full z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="h-4 w-[1px] bg-slate-200" />

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="relative overflow-hidden group inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-slate-900 text-xs font-bold text-white shadow-[0_4px_15px_rgba(15,23,42,0.08)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.25)] transition-all duration-300 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-1">
                Get Started
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-0" />
              <span className="absolute inset-0 bg-slate-900 group-hover:scale-0 transition-transform duration-350 z-0" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden relative z-50 p-2.5 rounded-xl bg-white/70 border border-slate-200/85 backdrop-blur-md text-slate-700 hover:text-slate-955 hover:border-slate-300 transition-all active:scale-95"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 border-b border-slate-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-lg text-white shadow-[0_0_10px_rgba(37,99,235,0.3)]">
                  S
                </div>
                <span className="font-sans text-xl font-bold tracking-tight text-slate-900">
                  SEREN<span className="text-secondary">IQ</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6 my-auto pl-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-bold transition-colors flex items-center justify-between group ${
                      isActive ? "text-secondary" : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    {link.name}
                    <ArrowUpRight className={`w-6 h-6 transition-all ${
                      isActive ? "opacity-100 text-secondary" : "opacity-0 group-hover:opacity-100 group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Footer CTA */}
            <div className="flex flex-col gap-4">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-xl bg-slate-900 text-sm font-bold text-white shadow-[0_4px_15px_rgba(15,23,42,0.08)] hover:bg-slate-800 transition-all active:scale-[0.99]"
              >
                Contact Us
              </Link>
              <p className="text-center text-xs text-slate-500 font-normal">
                &copy; {new Date().getFullYear()} SERENIQ. All rights reserved.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
