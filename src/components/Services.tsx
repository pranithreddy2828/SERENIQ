"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  progress: MotionValue<number>;
  totalCards: number;
  isMobile: boolean;
}

function ServiceCard({
  title,
  description,
  icon,
  index,
  progress,
  totalCards,
  isMobile,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Calculate ranges for scaling and dimming
  const isLast = index === totalCards - 1;
  const start = (index + 1) / totalCards;
  const range: [number, number] = [start, 1];
  
  const targetScale = 1 - (totalCards - 1 - index) * 0.025;
  const targetOverlayOpacity = (totalCards - 1 - index) * 0.06;

  // Transformations
  const scale = useTransform(progress, isLast ? [0, 1] : range, isLast ? [1, 1] : [1, targetScale]);
  const overlayOpacity = useTransform(progress, isLast ? [0, 1] : range, isLast ? [0, 0] : [0, targetOverlayOpacity]);

  // Responsive sticky offsets
  const topOffset = isMobile ? 80 + index * 16 : 140 + index * 24;

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        top: `${topOffset}px`,
        zIndex: index + 10,
      }}
      className="sticky w-full rounded-2xl"
    >
      <div className="light-glass-card p-6 md:p-8 rounded-2xl shadow-[0_-8px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row gap-5 items-start hover:scale-[1.01] active:scale-[0.99] group">
        {/* Dimming overlay to create depth in the stack */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-slate-950 pointer-events-none transition-colors duration-300 z-10"
        />

        {/* Icon Container with subtle glow */}
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-secondary/40 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.08)] transition-all duration-300 relative z-20">
          {icon}
        </div>

        {/* Title & Description */}
        <div className="flex-grow relative z-20">
          <h3 className="text-base md:text-lg font-bold mb-2 text-slate-900 font-sans group-hover:text-secondary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
    <section
      id="services"
      ref={containerRef}
      className="relative w-full py-20 bg-slate-50 border-b border-slate-200/80 min-h-[250vh] lg:min-h-[420vh]"
    >
      {/* Background visual glows clipped safely */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-secondary/[0.02] rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-blue-900/[0.01] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full min-h-[inherit]">
        {/* Left Column - Sticky Header */}
        <div className="lg:sticky lg:top-[140px] lg:w-5/12 w-full flex flex-col justify-start">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5"
          >
            Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-955 leading-tight"
          >
            Systems Engineering & Cloud Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-650 mt-4 text-sm sm:text-base leading-relaxed font-normal max-w-xl"
          >
            We deliver state-of-the-art engineering across vital business domains, helping leaders deploy next-generation infrastructure securely and efficiently.
          </motion.p>
        </div>

        {/* Right Column - Cards Stack */}
        <div className="lg:w-7/12 w-full flex flex-col gap-6 lg:gap-8 relative pb-24 self-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
              progress={scrollYProgress}
              totalCards={services.length}
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
