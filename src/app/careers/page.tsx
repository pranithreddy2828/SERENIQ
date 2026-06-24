import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Careers from "@/components/Careers";
import { UserCheck, Compass, GraduationCap, ClipboardCopy, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Distributed Engineering Team | SERENIQ",
  description: "Explore open remote-first developer roles at SERENIQ. We hire senior software engineers, ML architects, and cloud infrastructure specialists.",
};

const cultureValues = [
  {
    title: "Engineering Autonomy",
    desc: "We value self-management and trust. We do not micro-manage; instead, we prioritize clear tickets, code cleanlines, and asynchronous milestone delivery.",
    icon: <Compass className="w-5 h-5 text-secondary" />,
  },
  {
    title: "Code Craftsmanship",
    desc: "We believe in writing elegant, type-safe, and self-documenting codebases. Refactoring is treated as a core operational feature, not an afterthought.",
    icon: <ClipboardCopy className="w-5 h-5 text-secondary" />,
  },
  {
    title: "Continuous Learning",
    desc: "Our fields move rapidly. We provide annual learning budgets for credentials, credentials, and materials to keep our builders at the technical cutting-edge.",
    icon: <GraduationCap className="w-5 h-5 text-secondary" />,
  },
];

const interviewSteps = [
  {
    stage: "01",
    title: "Application Review",
    desc: "Our tech talent specialists evaluate your code portfolio, resume, and open-source contributions to verify alignment.",
  },
  {
    stage: "02",
    title: "Pair Programming",
    desc: "A 60-minute practical coding session with a senior engineer focused on algorithmic problem-solving and unit-testing.",
  },
  {
    stage: "03",
    title: "System Architecture Review",
    desc: "A deep-dive technical panel interview covering high-availability patterns, database structures, and network latency.",
  },
  {
    stage: "04",
    title: "Offer & Match",
    desc: "We detail your project allocation, compensation brackets, and hardware budget, completing our onboarding contract.",
  },
];

const candidateFaqs = [
  {
    q: "How does the hardware budget allocation work?",
    a: "Upon signing your employment agreement, we provision a dedicated workstation budget of up to $3,000 to procure a premium laptop, peripheral equipment, and ergonomic office furniture.",
  },
  {
    q: "What are your core communication hours?",
    a: "While we operate as a remote-first, distributed organization, we establish core team collaboration blocks between 9:00 AM and 1:00 PM EST. Most developer meetings and syncs occur in this window.",
  },
  {
    q: "Do you hire contract or full-time resources?",
    a: "We support both long-term full-time staffing agreements and specialized, project-based contracting roles. Open roles on our careers dashboard specify the contract classification type.",
  },
];

export default function CareersPage() {
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
                Work at SERENIQ
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-sans leading-tight">
                Build the Future of{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-955 to-secondary bg-clip-text text-transparent">Distributed Systems</span>
              </h1>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We are a distributed group of senior systems builders, database engineers, and AI architects. We value engineering precision, code craft, and work-life balance.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Careers Positions Dashboard */}
        <Careers />

        {/* Culture & Values */}
        <section className="py-20 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Our Values
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-955">
                Core Engineering Culture
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-normal">
                What drives our team structure and day-to-day software development practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cultureValues.map((val) => (
                <div key={val.title} className="light-glass-card p-8 rounded-2xl group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:border-secondary/40 transition-colors">
                    {val.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-secondary transition-colors">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interview Roadmap */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Hiring Process
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-955">
                Our 4-Stage Interview Roadmap
              </h2>
              <p className="text-slate-650 text-sm mt-3 font-normal">
                Fast, respectful, and highly technical evaluation workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1.5px] bg-slate-200 z-0" />

              {interviewSteps.map((step) => (
                <div key={step.stage} className="light-glass-card p-6 rounded-xl relative z-10 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold text-slate-300 font-mono">{step.stage}</span>
                    <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center">
                      <UserCheck className="w-3.5 h-3.5 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-secondary transition-colors">{step.title}</h3>
                  <p className="text-xs text-slate-650 leading-relaxed font-normal">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <HelpCircle className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-slate-955">Candidate FAQ</h2>
              <p className="text-xs text-slate-500 mt-2 font-normal">Details on payroll, hardware, timezones, and contract transitions</p>
            </div>

            <div className="flex flex-col gap-6">
              {candidateFaqs.map((faq) => (
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
            <h2 className="text-3xl font-bold tracking-tight font-sans text-slate-955">Ready to Build With Us?</h2>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-normal">
              Scroll up to explore our active engineering vacancies. Click "Apply Now" to file your credentials directly to our team!
            </p>
            <a
              href="#careers"
              className="inline-flex items-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-slate-955 text-white font-semibold hover:bg-slate-900 transition-colors text-sm shadow-sm cursor-pointer"
            >
              Explore Vacancies
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
