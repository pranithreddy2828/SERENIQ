"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  GraduationCap,
  Factory,
  Plane,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function Industries() {
  const industries = [
    { name: "Healthcare", icon: <HeartPulse className="w-5 h-5 text-secondary" /> },
    { name: "Finance", icon: <Banknote className="w-5 h-5 text-secondary" /> },
    { name: "Retail & E-commerce", icon: <ShoppingBag className="w-5 h-5 text-secondary" /> },
    { name: "Education", icon: <GraduationCap className="w-5 h-5 text-secondary" /> },
    { name: "Manufacturing", icon: <Factory className="w-5 h-5 text-secondary" /> },
    { name: "Travel & Logistics", icon: <Plane className="w-5 h-5 text-secondary" /> },
    { name: "Real Estate", icon: <Building2 className="w-5 h-5 text-secondary" /> },
    { name: "Insurance", icon: <ShieldCheck className="w-5 h-5 text-secondary" /> },
  ];

  return (
    <section id="industries" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-[40%] left-[-10%] w-[300px] h-[300px] bg-secondary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5">
            Domain Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-955 leading-tight">
            Tailored Solutions Across Key Industries
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            We adapt our core architectures and AI algorithms to suit compliance, throughput, and UX standards across diverse enterprise verticals.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="light-glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 group"
            >
              {/* Icon Container with glow */}
              <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-secondary/40 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.08)] transition-all duration-350">
                {ind.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-bold tracking-wide text-slate-700 group-hover:text-slate-950 transition-colors duration-300">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
