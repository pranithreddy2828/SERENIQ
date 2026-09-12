import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Outsourcing from "@/components/Outsourcing";
import { Cpu, Shield, Globe, Award, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Outsourcing Models | SERENIQ",
  description: "Accelerate your development cycle with our flexible software outsourcing models. Build senior engineering teams or launch project-based deliverables.",
};

const faqItems = [
  {
    q: "How does IP (Intellectual Property) ownership work?",
    a: "Under all SERENIQ contract models, 100% of the codebase, design systems, and associated intellectual property are transferred directly to your organization upon milestone sign-offs or monthly billing cycles.",
  },
  {
    q: "What timezones do your engineering teams operate in?",
    a: "We align our teams to match your core sprint hours. We support developers covering North American (EST/PST), European (GMT/CET), and Asian time blocks to guarantee at least 4-6 hours of daily overlap.",
  },
  {
    q: "How quickly can we ramp up or scale down resources?",
    a: "Staff augmentation resources can typically be onboarded within 5 business days. For dedicated teams, we match and provision senior specialists within 14-21 days. Scaling down requires a standard 30-day notice period.",
  },
];

export default function OutsourcingPage() {
  return (
    <div className="light-landing-theme bg-white text-slate-900 min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Subpage Hero */}
        <section className="relative py-20 overflow-hidden bg-white border-b border-slate-200/80">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-3">
                Co-Development Models
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-sans leading-tight">
                Accelerate Product Pipelines With{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-950 to-secondary bg-clip-text text-transparent">Elite Software Teams</span>
              </h1>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Scale your technical capability seamlessly. From individual staff augmentation to fully autonomous product squads, we deliver pre-vetted senior software builders aligned with your engineering culture.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Outsourcing Component */}
        <Outsourcing />

        {/* Dynamic Process Timeline */}
        <section className="py-20 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Operational Framework
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-950">
                Our 4-Step Engagement Process
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-normal">
                How we transition your product requirements into a fully operational engineering team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-slate-200 z-0" />
              
              {[
                {
                  step: "01",
                  title: "Scoping & Alignment",
                  desc: "We analyze your stack requirements, developer seniorities, and sprint goals to align the hiring profile.",
                  icon: <Cpu className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "02",
                  title: "Talent matching",
                  desc: "We extract top matches from our pre-vetted database, sending you developer bios and code portfolios.",
                  icon: <Globe className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "03",
                  title: "Onboarding integration",
                  desc: "Developers join your Slack, Jira, and GitHub, aligning with internal sprint ceremonies from Day 1.",
                  icon: <Shield className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "04",
                  title: "Active sprint cycles",
                  desc: "Continuous software delivery managed via bi-weekly sprint reviews and code-quality checks.",
                  icon: <Award className="w-5 h-5 text-secondary" />,
                },
              ].map((item) => (
                <div key={item.step} className="light-glass-card p-6 rounded-xl relative z-10 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:border-secondary/40 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-xl font-bold text-slate-300 font-mono">{item.step}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <HelpCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-slate-950">Frequently Asked Questions</h2>
              <p className="text-xs text-slate-500 mt-2 font-normal">Answers to critical operational and compliance questions</p>
            </div>

            <div className="flex flex-col gap-6">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-secondary/20 transition-colors">
                  <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {item.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-3 pl-4">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Page Block */}
        <section className="py-20 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200/80">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(37,99,235,0.04),transparent)] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight font-sans text-slate-950">Ready to Scale Your Sprint Capacity?</h2>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-normal">
              Book a technical scoping session with our solution architects today. We will detail project requirements and deliver developer CVs within 72 hours.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-slate-955 text-white font-semibold hover:bg-slate-900 transition-colors text-sm shadow-sm cursor-pointer"
            >
              Contact Architect Team
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
