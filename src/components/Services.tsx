"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Globe,
  Cloud,
  Database,
  BarChart3,
  Cpu,
  Zap,
  Compass,
  Users2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Artificial Intelligence",
      description:
        "Building NLP models, automated document processes, and agentic workflows to drive intelligence inside business workflows.",
      icon: <Brain className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Software Development",
      description:
        "Architecting distributed, scalable custom applications utilizing enterprise paradigms, strict design patterns, and clean codebases.",
      icon: <Code2 className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Web Development",
      description:
        "Creating performant, lightweight web interfaces built on modern server-rendered architectures (Next.js, React) with fluid UX.",
      icon: <Globe className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Orchestrating high-availability setups, serverless patterns, multi-region database sync, and secure hybrid networks.",
      icon: <Cloud className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Data Engineering",
      description:
        "Structuring real-time analytics data lakes, ETL pipelines, streaming telemetry, and scalable warehousing for large datastores.",
      icon: <Database className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Data Analytics",
      description:
        "Unlocking critical business indicators using predictive analytics models, telemetry dashboards, and modern statistical intelligence.",
      icon: <BarChart3 className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Machine Learning",
      description:
        "Training custom neural networks, computer vision engines, and clustering algorithms suited to your domain data.",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
    },
    {
      title: "Digital Transformation",
      description:
        "Modernizing legacy technology stacks, automating manual operations, and refactoring business flows for a cloud-first era.",
      icon: <Zap className="w-5 h-5 text-secondary" />,
    },
    {
      title: "IT Consulting",
      description:
        "Providing technology audit reviews, fractional CTO support, compliance planning, and strategic technology advisory.",
      icon: <Compass className="w-5 h-5 text-secondary" />,
    },
    {
      title: "IT Staffing",
      description:
        "Provisioning elite pre-vetted engineers, architects, and product managers to accelerate project execution timelines.",
      icon: <Users2 className="w-5 h-5 text-secondary" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-secondary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-900/[0.01] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10, filter: "blur(2px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5"
          >
            Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950 leading-tight"
          >
            Systems Engineering & Cloud Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-650 mt-4 text-sm sm:text-base leading-relaxed max-w-xl font-normal"
          >
            We deliver state-of-the-art engineering across vital business domains, helping leaders deploy next-generation infrastructure securely and efficiently.
          </motion.p>
        </div>

        {/* Services Grid (Futuristic Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04 + 0.08, 0.3) }}
              className="light-glass-card p-7 rounded-2xl group"
            >
              {/* Icon Container with subtle glow */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5.5 group-hover:border-secondary/40 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300">
                {service.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-bold mb-2.5 text-slate-900 font-sans group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
