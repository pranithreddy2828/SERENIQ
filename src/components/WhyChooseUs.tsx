"use client";

import {
  Users,
  Lightbulb,
  ShieldCheck,
  Zap,
  Maximize,
  Clock,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "Experienced Team",
      description: "Our staff consists of elite engineers, architects, and former enterprise CTOs with decades of collective product building experience.",
      icon: <Users className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Innovation First",
      description: "We proactively design and prototype with next-generation tools, ensuring your products are future-proofed against technological obsolescence.",
      icon: <Lightbulb className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Ironclad Security",
      description: "We deploy defense-in-depth protocols, rigorous penetration tests, and secure data access pipelines complying with SOC2 / ISO27001 models.",
      icon: <ShieldCheck className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Accelerated Sprints",
      description: "By integrating premium CI/CD automations and dry-run testing suites, we reduce product launch time and ensure continuous delivery cycles.",
      icon: <Zap className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Elastic Scalability",
      description: "Our architectures utilize microservices, distributed caching grids, and serverless compute models to handle rapid traffic increments.",
      icon: <Maximize className="w-5 h-5 text-secondary" />,
    },
    {
      title: "24/7 Dedicated SLAs",
      description: "We guarantee constant system performance monitoring, rapid response support lines, and tight SLA guarantees for your core services.",
      icon: <Clock className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and copy */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">
              Philosophy
            </span>
            <h2 className="text-3xl font-bold font-sans leading-tight text-slate-900">
              We Build Infrastructure That Drives Competitive Advantages
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Unlike traditional consultancies, we do not just write code; we design and scale business engines. Our methodologies align closely with executive targets to deliver robust systems that remain secure under heavy loads.
            </p>
            
            {/* Static Executive Box */}
            <div className="mt-2 p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 text-secondary font-bold text-sm">
                S
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Direct Executive Alignment</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Every technical sprint is mapped back to your bottom line, performance SLAs, and scaling benchmarks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-200 p-6 rounded-xl hover:border-slate-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
