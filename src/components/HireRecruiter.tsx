"use client";

import { motion } from "framer-motion";
import { UserCheck, Award, TrendingUp, BarChart2 } from "lucide-react";

export default function HireRecruiter() {
  const points = [
    {
      title: "Technical Pre-Screening",
      desc: "Our recruiters evaluate core coding principles and stack knowledge before any candidate is presented.",
      icon: <UserCheck className="w-4 h-4 text-secondary" />
    },
    {
      title: "Global Sourcing Pipelines",
      desc: "Reach pre-vetted developers in North America, Europe, Latin America, and Asia-Pacific regions.",
      icon: <Award className="w-4 h-4 text-secondary" />
    },
    {
      title: "Active Market Mapping",
      desc: "Receive deep competitive analysis and market compensation statistics for technical roles.",
      icon: <TrendingUp className="w-4 h-4 text-secondary" />
    }
  ];

  return (
    <section id="hire-recruiter" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[50%] right-[-10%] w-[350px] h-[350px] bg-blue-900/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5">
                Talent Sourcing
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950 leading-tight">
                Hire On-Demand Dedicated Tech Recruiters
              </h2>
              <p className="text-slate-600 mt-4 font-normal leading-relaxed text-sm sm:text-base">
                Gain immediate access to dedicated technical recruiters who function as an extension of your talent acquisition team. We establish custom candidate profiles, build automated pipelines, and manage the full hiring cycle to scale your internal departments.
              </p>
            </div>

            {/* Sourcing Points */}
            <div className="flex flex-col gap-6 mt-2">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4.5 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-secondary/40 transition-colors">
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors">{point.title}</h4>
                    <p className="text-xs text-slate-650 mt-1 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Sourcing Stats & Pricing Model */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Sourcing Stats Card */}
            <div className="light-glass-card rounded-2xl p-8 flex flex-col gap-6 relative">
              <div className="flex items-center gap-2 border-b border-slate-200/80 pb-4">
                <BarChart2 className="w-5 h-5 text-secondary" />
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider font-sans">Recruitment KPI Performance</h3>
              </div>

              <div className="grid grid-cols-2 gap-6.5">
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">14 Days</div>
                  <div className="text-[9px] text-secondary font-extrabold uppercase tracking-widest mt-1">Average Turnaround</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">92%</div>
                  <div className="text-[9px] text-secondary font-extrabold uppercase tracking-widest mt-1">Interview-To-Hire</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">3,500+</div>
                  <div className="text-[9px] text-secondary font-extrabold uppercase tracking-widest mt-1">Pre-Vetted Engineers</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-mono tracking-tight">100%</div>
                  <div className="text-[9px] text-secondary font-extrabold uppercase tracking-widest mt-1">SLA Compliance</div>
                </div>
              </div>
            </div>

            {/* Pricing Model Highlight */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm relative overflow-hidden group hover:border-secondary/20 transition-all duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-secondary/5 transition-all" />
              <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-secondary">Month-to-Month Engagement</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                No long-term commitments. Scale recruiters up or down on demand to align with quarterly project hiring goals.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
