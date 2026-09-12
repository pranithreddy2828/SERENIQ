"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      name: "Sarah Jenkins",
      role: "Chief Technology Officer",
      company: "Apex Dynamics",
      quote: "SERENIQ rebuilt our core telemetry systems from scratch, delivering a 40% efficiency boost in database queries and flawless uptime during our peak sales season. Their engineering team is elite.",
      initials: "SJ",
      grad: "from-blue-500 to-sky-500",
    },
    {
      id: 1,
      name: "Marcus Vance",
      role: "VP of Product Infrastructure",
      company: "Vortex Data",
      quote: "The AI agent integration designed by SERENIQ transformed our document indexing flow. Tasks that previously took days of manual verification are now completed in milliseconds with 99% accuracy.",
      initials: "MV",
      grad: "from-sky-500 to-indigo-500",
    },
    {
      id: 2,
      name: "Elena Rostova",
      role: "Director of Product Engineering",
      company: "Cognitex AI",
      quote: "Working with SERENIQ has been a game-changer. They didn't just write server code; they redesigned our multi-region Kubernetes routing pipelines, slashing cloud hosting spend by 30%.",
      initials: "ER",
      grad: "from-indigo-500 to-blue-500",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
            Feedback
          </span>
          <h2 className="text-3xl font-bold font-sans tracking-tight text-slate-900">
            Trusted by Technology Leaders
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto min-h-[300px] flex flex-col justify-between">
          <div className="relative flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-50 border border-slate-200 p-8 sm:p-12 rounded-2xl shadow-sm relative"
              >
                {/* Large Background Quote Icon */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-200/50 pointer-events-none" />

                {/* Rating stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg font-normal italic leading-relaxed text-slate-700 mb-8 font-sans">
                  &quot;{testimonials[current].quote}&quot;
                </p>

                {/* Reviewer Details */}
                <div className="flex items-center gap-4">
                  {/* Monogram Avatar */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${testimonials[current].grad} flex items-center justify-center font-bold text-xs text-white shadow-sm`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 tracking-wide">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {testimonials[current].role} at <span className="text-secondary font-semibold">{testimonials[current].company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  current === idx
                    ? "bg-slate-950 w-5"
                    : "bg-slate-200 hover:bg-slate-350"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
