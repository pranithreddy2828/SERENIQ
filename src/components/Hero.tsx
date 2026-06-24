"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles, Server, Cpu, Database } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse tracking variables for parallax glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 40, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 40, stiffness: 200 });
  
  // Transform glowing blob positions
  const glowX = useTransform(springX, (val) => `${val - 250}px`);
  const glowY = useTransform(springY, (val) => `${val - 250}px`);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-white text-slate-900"
    >
      {/* Cinematic backgrounds */}
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 cyber-grid-mesh opacity-[0.05] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
      
      {/* Interactive mouse radial glow */}
      <motion.div 
        className="absolute w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none mix-blend-multiply"
        style={{
          left: glowX,
          top: glowY,
        }}
      />

      {/* Static focal background glows */}
      <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-gradient-to-r from-secondary/5 to-[#00D9FF]/5 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-900/[0.03] rounded-full blur-[120px] opacity-30 pointer-events-none" />

      {/* Massive subtle background logo letter */}
      <div className="absolute inset-y-0 right-[-10%] flex items-center justify-center opacity-[0.02] pointer-events-none select-none font-sans font-black text-[600px] leading-none text-slate-950">
        S
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 text-center lg:text-left"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 w-fit mx-auto lg:mx-0 shadow-sm backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary animate-pulse" />
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-secondary">
              Enterprise Systems Integration
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-950 font-sans">
            Intelligent Technology.{" "}
            <span className="bg-gradient-to-r from-slate-900 via-slate-950 to-secondary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(37,99,235,0.08)]">
              Exponential Success.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            We deliver robust custom software, cloud orchestration architectures, and cognitive machine learning pipelines for high-throughput business systems.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6.5 py-4 rounded-xl bg-slate-950 text-xs sm:text-sm font-bold text-white hover:bg-slate-900 transition-all shadow-[0_4px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.2)] duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 text-white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-6.5 py-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-all backdrop-blur-sm shadow-sm"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Glowing Node Network Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[480px] aspect-square mx-auto flex items-center justify-center"
        >
          {/* Subtle concentric circles */}
          <div className="absolute inset-0 border border-slate-200 rounded-full pointer-events-none scale-100" />
          <div className="absolute inset-0 border border-slate-200/60 rounded-full pointer-events-none scale-75 border-dashed" />
          
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full select-none relative z-10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid structure background circles */}
            <circle cx="250" cy="250" r="160" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
            <circle cx="250" cy="250" r="210" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="6 8" opacity="0.4" />

            {/* Glowing cyan connector paths */}
            <path d="M150 180 L250 120" stroke="url(#cyanGlow)" strokeWidth="1.5" className="opacity-70" />
            <path d="M350 180 L250 120" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M350 180 L320 320" stroke="url(#cyanGlow)" strokeWidth="1.5" className="opacity-70" />
            <path d="M180 320 L320 320" stroke="#cbd5e1" strokeWidth="1.5" />
            <path d="M150 180 L180 320" stroke="url(#blueGlow)" strokeWidth="1.5" className="opacity-70" />
            <path d="M250 120 L250 250" stroke="#00D9FF" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M150 180 L250 250" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M350 180 L250 250" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M320 320 L250 250" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M180 320 L250 250" stroke="#cbd5e1" strokeWidth="1" />

            {/* Nodes */}
            <circle cx="250" cy="120" r="6" fill="#00D9FF" />
            <circle cx="150" cy="180" r="5" fill="#94a3b8" />
            <circle cx="350" cy="180" r="5" fill="#94a3b8" />
            <circle cx="320" cy="320" r="6" fill="#2563eb" />
            <circle cx="180" cy="320" r="6" fill="#00D9FF" />
            <circle cx="250" cy="250" r="9" fill="#2563eb" />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Infrastructure Cards Overlay (Futuristic glass style) */}
          <div className="absolute top-[8%] left-[2%] z-20">
            <div className="bg-white/85 border border-slate-200/80 backdrop-blur-md p-3.5 rounded-xl shadow-lg w-36">
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-[9px] text-slate-500 font-mono uppercase tracking-wider font-bold">
                  API Gateways
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900">100% Online</div>
            </div>
          </div>

          <div className="absolute bottom-[8%] right-[2%] z-20">
            <div className="bg-white/85 border border-slate-200/80 backdrop-blur-md p-3.5 rounded-xl shadow-lg w-40">
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-1.5 font-mono">Latency Telemetry</div>
              <div className="text-xs font-bold text-slate-900">0.84ms Average</div>
            </div>
          </div>

          {/* Tech Hardware Node Badges with hover micro-animations */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.05 }}
            className="absolute top-[21%] right-[20%] w-9 h-9 rounded-xl bg-white/85 border border-slate-200/80 backdrop-blur-md flex items-center justify-center shadow-md"
          >
            <Cpu className="w-4.5 h-4.5 text-secondary" />
          </motion.div>
          <motion.div 
            whileHover={{ y: -3, scale: 1.05 }}
            className="absolute bottom-[23%] left-[18%] w-9 h-9 rounded-xl bg-white/85 border border-slate-200/80 backdrop-blur-md flex items-center justify-center shadow-md"
          >
            <Server className="w-4.5 h-4.5 text-secondary" />
          </motion.div>
          <motion.div 
            whileHover={{ y: -3, scale: 1.05 }}
            className="absolute top-[48%] left-[4%] w-9 h-9 rounded-xl bg-white/85 border border-slate-200/80 backdrop-blur-md flex items-center justify-center shadow-md"
          >
            <Database className="w-4.5 h-4.5 text-slate-500" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
