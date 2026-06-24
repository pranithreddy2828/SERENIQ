"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background gradients */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] bg-secondary/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-blue-900/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-3.5">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-slate-950 leading-tight">
            Connect With Our Engineering Team
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <div className="light-glass-card p-8 rounded-2xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5.5"
                  >
                    <h3 className="text-lg font-bold text-slate-950 mb-1.5">Send Us A Message</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="name">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-450 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="email">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-455 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Inquiry regarding software development"
                        className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-455 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500" htmlFor="message">
                        Message Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your technology requirements..."
                        className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-455 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-950 text-white text-sm font-bold shadow-sm hover:bg-slate-900 hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] active:scale-[0.99] transition-all mt-1 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Inquiry
                          <Send className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thank-you"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-10 px-4"
                  >
                    <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-5 animate-pulse" />
                    <h3 className="text-xl font-bold text-slate-950 mb-2">Inquiry Received</h3>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6 font-normal">
                      Thank you for connecting with SERENIQ. Our senior engineering architects will review your project details and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-widest hover:bg-slate-100 transition-colors"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Address, Map, info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start gap-4 shadow-sm hover:border-secondary/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
                  <Mail className="w-4.5 h-4.5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Email</h4>
                  <a href="mailto:solutions@sereniq.com" className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 hover:text-secondary hover:underline break-all">
                    solutions@sereniq.com
                  </a>
                </div>
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start gap-4 shadow-sm hover:border-secondary/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
                  <Phone className="w-4.5 h-4.5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Phone</h4>
                  <a href="tel:+18005550199" className="text-xs sm:text-sm font-semibold text-slate-800 mt-1 hover:text-secondary hover:underline">
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl flex items-start gap-4 shadow-sm hover:border-secondary/20 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center shrink-0">
                <MapPin className="w-4.5 h-4.5 text-secondary" />
              </div>
              <div>
                <h4 className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">Headquarters</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed">
                  100 Tech Plaza, Suite 500<br />
                  Silicon Valley, CA 94025
                </p>
              </div>
            </div>

            {/* SVG Network Map */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center aspect-video relative overflow-hidden">
              <div className="absolute top-3 left-4 text-[9px] font-mono uppercase tracking-wider text-secondary font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                Global Node Network
              </div>
              
              <svg viewBox="0 0 320 180" className="w-full h-full opacity-70">
                {/* World map dots background grid */}
                <g fill="#94a3b8" opacity="0.4">
                  <circle cx="50" cy="50" r="1.5" /><circle cx="70" cy="45" r="1" /><circle cx="90" cy="55" r="1" />
                  <circle cx="110" cy="65" r="1.5" /><circle cx="130" cy="75" r="1" /><circle cx="150" cy="60" r="1" />
                  <circle cx="170" cy="50" r="1.5" /><circle cx="190" cy="45" r="1" /><circle cx="210" cy="55" r="1" />
                  <circle cx="230" cy="65" r="1.5" /><circle cx="250" cy="75" r="1" /><circle cx="270" cy="60" r="1" />
                </g>

                {/* Nodes & Connecting Lines */}
                <g stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3">
                  <line x1="80" y1="60" x2="160" y2="50" />
                  <line x1="160" y1="50" x2="260" y2="80" />
                  <line x1="80" y1="60" x2="260" y2="80" />
                </g>

                {/* City node spots */}
                <g>
                  {/* SF Node */}
                  <circle cx="80" cy="60" r="4.5" fill="rgba(37, 99, 235, 0.1)" />
                  <circle cx="80" cy="60" r="2.5" fill="#2563eb" />
                  
                  {/* London Node */}
                  <circle cx="160" cy="50" r="4.5" fill="rgba(37, 99, 235, 0.1)" />
                  <circle cx="160" cy="50" r="2.5" fill="#2563eb" />
                  
                  {/* Tokyo Node */}
                  <circle cx="260" cy="80" r="4.5" fill="rgba(37, 99, 235, 0.1)" />
                  <circle cx="260" cy="80" r="2.5" fill="#2563eb" />
                </g>
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
