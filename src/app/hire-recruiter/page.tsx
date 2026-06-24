import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import HireRecruiter from "@/components/HireRecruiter";
import { UserCheck, Search, Users, Award, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hire Technical Recruiters | SERENIQ",
  description: "Gain immediate access to dedicated technical recruiters to scale your internal departments. 14-day average candidate turnaround.",
};

const profiles = [
  {
    name: "Sarah Jenkins",
    role: "Senior Recruiter (AI/ML & Data)",
    experience: "8+ Years Experience",
    prevVetted: "120+ Placements",
    specialty: "Sourcing deep tech researchers, NLP practitioners, and core machine learning engineers.",
  },
  {
    name: "Marcus Chen",
    role: "Lead Sourcing Partner (Infra & DevOps)",
    experience: "6+ Years Experience",
    prevVetted: "95+ Placements",
    specialty: "Finding site reliability specialists, Kubernetes architects, and hybrid cloud security builders.",
  },
  {
    name: "Elena Rostova",
    role: "Technical Recruiter (Mobile & Web)",
    experience: "7+ Years Experience",
    prevVetted: "140+ Placements",
    specialty: "Vetting senior frontend developers, React Native architects, and UI/UX engineering leads.",
  },
];

const recruiterFaqs = [
  {
    q: "How does the month-to-month recruiter hiring contract work?",
    a: "You can hire technical recruiters on a flexible monthly subscription. We do not require long-term retention commitments; you can scale the number of active recruiters up or down based on your quarterly hiring volume.",
  },
  {
    q: "What is your candidate replacement policy?",
    a: "We offer a 90-day guarantee on all candidate placements. If a placed developer does not satisfy standard performance criteria within the first 90 days, our recruiters will source and screen a replacement at zero additional placement fees.",
  },
  {
    q: "Do you assess technical coding skills directly?",
    a: "Yes. Our recruiters perform initial algorithmic screening and basic system design assessments using industry standard sandboxes before submitting candidates to your internal tech leads, reducing time-to-interview.",
  },
];

export default function HireRecruiterPage() {
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
                Talent Sourcing on Demand
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-955 font-sans leading-tight">
                Scale Your Talent Pipelines With{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-955 to-secondary bg-clip-text text-transparent">Dedicated Tech Recruiters</span>
              </h1>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                Avoid high contingency fees. Gain dedicated recruitment capability acting as a direct extension of your talent acquisition team, mapping the market and screening top-tier engineering talent.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded HireRecruiter Component */}
        <HireRecruiter />

        {/* Recruiter Profiles Showcase */}
        <section className="py-20 bg-white relative border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Expert Agents
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-950">
                Meet Our Senior Technical Recruiters
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-normal">
                Our recruiters possess actual software domain understanding to screen out low-quality profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {profiles.map((profile) => (
                <div key={profile.name} className="light-glass-card p-8 rounded-2xl flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200/80">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center font-bold text-secondary text-sm">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-secondary transition-colors">{profile.name}</h3>
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mt-0.5">{profile.role}</p>
                      </div>
                    </div>
                    {/* Specialties */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {profile.specialty}
                    </p>
                  </div>
                  {/* Stats Footer */}
                  <div className="grid grid-cols-2 gap-4 border-t border-slate-200/80 pt-4 text-xs font-mono text-slate-500">
                    <div>
                      <span className="text-[9px] text-secondary uppercase tracking-wider block font-bold">Experience</span>
                      <span className="font-bold text-slate-900">{profile.experience}</span>
                    </div>
                    <div>
                      <span className="text-[9px] text-secondary uppercase tracking-wider block font-bold">Placements</span>
                      <span className="font-bold text-slate-900">{profile.prevVetted}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Roadmap */}
        <section className="py-20 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Operational Framework
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-950">
                Active Recruitment Flow
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-slate-200 z-0" />
              
              {[
                {
                  step: "Step 1",
                  title: "Profile Alignment",
                  desc: "We analyze your tech stack, culture fit, and salary thresholds to lock down candidate search sheets.",
                  icon: <UserCheck className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "Step 2",
                  title: "Active Sourcing",
                  desc: "Our recruiters reach out to passive engineering pipelines and execute active market outreach mapping.",
                  icon: <Search className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "Step 3",
                  title: "Coding Screening",
                  desc: "We run candidate coding reviews, validating system principles before sending resumes to your team.",
                  icon: <Users className="w-5 h-5 text-secondary" />,
                },
                {
                  step: "Step 4",
                  title: "Milestone Hand-off",
                  desc: "We guide candidates through your interview loops, handle offers, and support background checks.",
                  icon: <Award className="w-5 h-5 text-secondary" />,
                },
              ].map((item) => (
                <div key={item.step} className="light-glass-card p-6 rounded-xl relative z-10 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-55 border border-slate-200 flex items-center justify-center group-hover:border-secondary/40 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase">{item.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{item.desc}</p>
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
              <h2 className="text-2xl font-bold text-slate-955">Recruiting & Placement FAQs</h2>
              <p className="text-xs text-slate-500 mt-2 font-normal">Answers to licensing, guarantees, and recruiter allocations</p>
            </div>

            <div className="flex flex-col gap-6">
              {recruiterFaqs.map((faq) => (
                <div key={faq.q} className="bg-slate-50 border border-slate-200 p-6 rounded-xl hover:border-secondary/20 transition-colors">
                  <h4 className="text-sm font-bold text-slate-900 flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mt-3 pl-4">
                    {faq.a}
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
            <h2 className="text-3xl font-bold tracking-tight font-sans text-slate-950">Scale Your Sourcing Power Today</h2>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-normal">
              Book a meeting with our principal talent strategist to analyze your open hiring roadmap and allocate dedicated tech recruiters to your accounts.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-slate-955 text-white font-semibold hover:bg-slate-900 transition-colors text-sm shadow-sm cursor-pointer"
            >
              Consult Talent Strategist
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
