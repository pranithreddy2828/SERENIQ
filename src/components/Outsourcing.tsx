"use client";

import { motion } from "framer-motion";
import { Users2, ClipboardCheck, Zap } from "lucide-react";

export default function Outsourcing() {
  const models = [
    {
      title: "Dedicated Product Teams",
      description: "A complete, self-managed squad of senior engineers, product managers, and QA specialists assembled to deliver your product roadmaps full-time.",
      features: [
        "Pre-vetted engineering specialists",
        "Direct integration into your Jira/Slack",
        "Managed agile sprint operations",
        "Flexible scaling as scope evolves"
      ],
      icon: <Users2 className="w-5 h-5 text-secondary" />
    },
    {
      title: "Project-Based Delivery",
      description: "End-to-end product delivery from scoping and technical design to release, managed entirely by SERENIQ under defined timeline milestones.",
      features: [
        "Fixed-price or time & material plans",
        "Clear scoping and tech spec discovery",
        "Dedicated QA and deployment cycles",
        "Comprehensive handoff and codebase docs"
      ],
      icon: <ClipboardCheck className="w-5 h-5 text-secondary" />
    },
    {
      title: "Staff Augmentation",
      description: "Quickly scale your existing engineering sprint speed by matching senior individual developers to cover technical gaps.",
      features: [
        "Onboarded within 5 business days",
        "Strict screening for code quality",
        "Zero long-term retention liability",
        "Full-time or fractional allocations"
      ],
      icon: <Zap className="w-5 h-5 text-secondary" />
    }
  ];

  return (
    <section id="outsourcing" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background soft glows */}
      <div className="absolute top-[30%] left-[-10%] w-[300px] h-[300px] bg-secondary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5">
            Outsourcing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950 leading-tight">
            Enterprise Software Outsourcing Models
          </h2>
          <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            Choose the collaboration model that fits your operational needs, allowing your internal teams to remain focused on core priorities.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="light-glass-card p-8 rounded-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Icon wrapper with glow */}
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:border-secondary/40 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300">
                  {model.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-3.5 group-hover:text-secondary transition-colors duration-300">
                  {model.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {model.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="border-t border-slate-200/60 pt-6 flex flex-col gap-3.5">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-xs text-slate-700 font-normal">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
