"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Send, Check } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[200px] bg-secondary/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-accent flex items-center justify-center font-bold text-lg text-white shadow-sm">
                S
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-slate-900">
                SEREN<span className="text-secondary">IQ</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-650 font-normal leading-relaxed max-w-sm">
              We design, develop, and deploy enterprise-grade custom applications, AI components, and cloud infrastructure for digital leaders globally.
            </p>
            {/* Social channels */}
            <div className="flex gap-3">
              <a href="#" aria-label="GitHub" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter/X" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-400 transition-colors shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1 (Services) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Services
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/services" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Artificial Intelligence</Link>
              <Link href="/services" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Software Engineering</Link>
              <Link href="/services" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Cloud Architectures</Link>
              <Link href="/services" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Data Engineering</Link>
            </div>
          </div>

          {/* Links Column 2 (Company) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Company
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/outsourcing" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Outsourcing</Link>
              <Link href="/hire-recruiter" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Hire Recruiter</Link>
              <Link href="/industries" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Industries</Link>
              <Link href="/careers" className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors w-fit">Careers</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
              Subscribe
            </h4>
            <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-sm">
              Get bi-weekly technology breakdowns, architectural case studies, and engineering updates straight to your inbox.
            </p>

            <div className="relative mt-2">
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    key="newsletter-form"
                    onSubmit={handleSubscribe}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2 w-full max-w-md"
                  >
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-grow px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 hover:bg-slate-800 hover:shadow-[0_0_10px_rgba(37,99,235,0.15)] active:scale-95 transition-all cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="subscribed-state"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-2 max-w-md text-emerald-800"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-emerald-700 font-semibold">
                      Successfully Subscribed
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll To Top */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-normal text-center sm:text-left">
            &copy; {new Date().getFullYear()} SERENIQ Global Solutions. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 uppercase font-bold tracking-wider transition-colors cursor-pointer"
          >
            Scroll to Top
            <div className="w-7 h-7 rounded-full bg-white border border-slate-200 group-hover:border-secondary/40 flex items-center justify-center group-hover:-translate-y-0.5 transition-all duration-300 shadow-sm">
              <ArrowUp className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
