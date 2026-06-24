"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, X, Check, Heart, Shield, GraduationCap, Compass } from "lucide-react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [applyName, setApplyName] = useState("");
  const [applyEmail, setApplyEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: "rn-arch",
      title: "Senior React Native Architect",
      type: "Contract",
      location: "Remote / Americas & Europe",
      desc: "Lead the design and refactoring of high-performance mobile applications utilizing React Native, JSI modules, and custom native bridges.",
    },
    {
      id: "ml-eng",
      title: "Senior Machine Learning Engineer",
      type: "Full-Time",
      location: "Hybrid / Silicon Valley",
      desc: "Train, refine, and deploy specialized transformer architectures and computer vision pipelines to structured cluster configurations.",
    },
    {
      id: "devops-lead",
      title: "Lead DevOps & SRE Specialist",
      type: "Full-Time",
      location: "Remote / Americas",
      desc: "Orchestrate multi-region Kubernetes routing meshes, automate security gate validations, and monitor system latency under load.",
    },
  ];

  const benefits = [
    { title: "Remote-First", desc: "Work from anywhere in matching time zones.", icon: <Compass className="w-5 h-5 text-secondary" /> },
    { title: "Top Compensation", desc: "We pay top-tier rates for pre-vetted specialists.", icon: <Shield className="w-5 h-5 text-secondary" /> },
    { title: "Continuous Growth", desc: "Annual learning and technical certification stipends.", icon: <GraduationCap className="w-5 h-5 text-secondary" /> },
    { title: "Hardware Budget", desc: "Budget to procure premium workstation assets.", icon: <Heart className="w-5 h-5 text-secondary" /> },
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyName || !applyEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedJob(null);
        setApplyName("");
        setApplyEmail("");
      }, 1500);
    }, 1200);
  };

  return (
    <section id="careers" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-[30%] right-[-10%] w-[350px] h-[350px] bg-secondary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5">
            Careers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-955 leading-tight">
            Join Our Distributed Engineering Team
          </h2>
          <p className="text-slate-655 mt-4 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            We are always looking for senior builders, infrastructure specialists, and machine learning architects who value code cleanliness and engineering autonomy.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="light-glass-card p-6 rounded-2xl">
              <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4.5">
                {benefit.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{benefit.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Positions list */}
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          <h3 className="text-xs font-extrabold text-secondary mb-2 uppercase tracking-widest pl-2">Current Openings</h3>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-50/50 border border-slate-200/80 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-secondary/20 transition-all duration-300 group"
            >
              <div className="flex-grow">
                <h4 className="text-base font-bold text-slate-900 group-hover:text-secondary transition-colors">{job.title}</h4>
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-3.5 leading-relaxed max-w-2xl font-normal">
                  {job.desc}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job.title)}
                className="px-5 py-3.5 rounded-xl bg-slate-900 text-xs font-bold text-white hover:bg-slate-800 transition-colors shrink-0 text-center shadow-sm active:scale-95 duration-200"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Apply Modal */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal backdrop overlay */}
            <motion.div
              onClick={() => setSelectedJob(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950 backdrop-blur-sm"
            />

            {/* Modal Card Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-md w-full p-6 z-10 overflow-hidden relative text-slate-900"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form key="apply-form" onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                    <h3 className="text-base font-bold text-slate-950 pr-8">
                      Apply: {selectedJob}
                    </h3>
                    <p className="text-[11px] text-slate-500 -mt-1 leading-relaxed font-normal">
                      Submit your application. Our recruitment managers will evaluate your coding backgrounds and respond via email.
                    </p>

                    <div className="flex flex-col gap-1.5 mt-1">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="apply-name">
                        Full Name *
                      </label>
                      <input
                        id="apply-name"
                        type="text"
                        required
                        value={applyName}
                        onChange={(e) => setApplyName(e.target.value)}
                        placeholder="John Doe"
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="apply-email">
                        Email Address *
                      </label>
                      <input
                        id="apply-email"
                        type="email"
                        required
                        value={applyEmail}
                        onChange={(e) => setApplyEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="apply-resume">
                        Resume Upload (PDF/Word) *
                      </label>
                      <input
                        id="apply-resume"
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        className="px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-650 text-xs focus:outline-none focus:border-secondary transition-all cursor-pointer file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-slate-200 file:text-slate-800 hover:file:bg-slate-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 mt-2 rounded-xl bg-slate-950 text-xs font-bold text-white shadow-sm hover:bg-slate-900 active:scale-[0.98] transition-all flex items-center justify-center disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </form>
                ) : (
                  <motion.div
                    key="apply-submitted"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-6"
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-250 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
                      <Check className="w-5 h-5 stroke-[3]" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950">Application Submitted</h4>
                    <p className="text-xs text-slate-600 mt-2 max-w-xs leading-relaxed font-normal">
                      Thank you. Your documents have been successfully filed. We will reach out after technical reviews.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
