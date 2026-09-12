import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";
import { HeartPulse, Banknote, ShoppingBag, ShieldAlert, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industry Verticals & Domain Focus | SERENIQ",
  description: "Learn how we customize custom code architectures and AI algorithms to suit compliance, throughput, and audit standards across key industry sectors.",
};

const spotlights = [
  {
    title: "Healthcare & Life Sciences",
    desc: "We construct secure medical platforms that protect patient privacy while improving clinical throughput. Our systems are engineered to pass rigorous audits.",
    bullets: [
      "HIPAA & HITECH compliance standards",
      "HL7 & FHIR medical data integrations",
      "FDA pre-validation pipeline consulting",
      "Secure patient portal & EHR synchronizations"
    ],
    icon: <HeartPulse className="w-6 h-6 text-secondary" />,
  },
  {
    title: "Banking, Finance & Fintech",
    desc: "We deliver low-latency transactional architectures, algorithmic ledger processing, and AI fraud protection for high-value banking infrastructure.",
    bullets: [
      "SOC2 Type II & PCI-DSS security rails",
      "Real-time fraud detection AI inference",
      "Distributed double-entry ledger databases",
      "ACH / Wire / Card payment gateway integrations"
    ],
    icon: <Banknote className="w-6 h-6 text-secondary" />,
  },
  {
    title: "E-Commerce & Digital Retail",
    desc: "We engineer headless web storefront layouts and scalable inventory databases capable of handling high-volume promotional sales events.",
    bullets: [
      "Headless CMS & decoupled frontend styling",
      "Multi-channel inventory synchronization",
      "Custom recommendation engines",
      "Warehouse management system (WMS) hooks"
    ],
    icon: <ShoppingBag className="w-6 h-6 text-secondary" />,
  },
];

const complianceSpecs = [
  { standard: "HIPAA", type: "Healthcare Compliance", desc: "Data protection and privacy provisions for safeguarding medical information." },
  { standard: "SOC2 Type II", type: "Security & Operations", desc: "Operational audits verifying security, confidentiality, and processing integrity." },
  { standard: "PCI-DSS", type: "Payment Standards", desc: "Security controls ensuring safe storage and transmission of payment card data." },
  { standard: "GDPR & CCPA", type: "Data Privacy Rights", desc: "User consent workflows, data masking, and right-to-be-forgotten implementations." },
];

const industryFaqs = [
  {
    q: "How do you ensure data security during development?",
    a: "We implement absolute data sanitization protocols. Our engineers work exclusively with mock databases or synthetic data pools. Production environments are segregated with strict IAM access privileges and monitored by automated cloud firewalls.",
  },
  {
    q: "Do you sign BAA (Business Associate Agreements) for healthcare clients?",
    a: "Yes. As a technology partner managing healthcare components, we sign standard BAAs to formalize our HIPAA compliance obligations and ensure absolute patient record security.",
  },
  {
    q: "Are your developers trained on financial compliance regulations?",
    a: "Yes. Engineering teams allocated to Fintech or Banking projects undergo specialized compliance training focusing on OWASP Top 10 vulnerabilities, transaction safety, and double-entry reconciliation protocols.",
  },
];

export default function IndustriesPage() {
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
                Target Verticals
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-950 font-sans leading-tight">
                Tailored Solutions Built for{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-955 to-secondary bg-clip-text text-transparent">Regulated Verticals</span>
              </h1>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We adapt our core development frameworks, cloud templates, and database schemas to satisfy the compliance, security, and audit parameters of your specific industry.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Industries Component */}
        <Industries />

        {/* Industry Detailed Spotlights */}
        <section className="py-20 bg-white relative border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Deep Dives
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-955">
                Core Industry Capability Breakdowns
              </h2>
              <p className="text-slate-650 text-sm mt-3 font-normal">
                How we construct systems addressing specific compliance and throughput bottlenecks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {spotlights.map((spot) => (
                <div key={spot.title} className="light-glass-card p-8 rounded-2xl flex flex-col justify-between group">
                  <div>
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-6 group-hover:border-secondary/40 transition-colors">
                      {spot.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors">{spot.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {spot.desc}
                    </p>
                  </div>

                  <ul className="border-t border-slate-200 pt-6 flex flex-col gap-3">
                    {spot.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-xs text-slate-650 leading-relaxed font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Standards Section */}
        <section className="py-20 bg-white border-y border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <ShieldAlert className="w-8 h-8 text-secondary mx-auto mb-3 animate-pulse" />
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-950">
                Compliance Standards & Safe Auditing
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-normal">
                We design and ship architectures fully prepared for enterprise auditing gates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceSpecs.map((spec) => (
                <div key={spec.standard} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                  <div className="inline-block px-3 py-1 rounded bg-secondary text-white font-mono text-xs font-bold mb-3">
                    {spec.standard}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 mb-1">{spec.type}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-normal">{spec.desc}</p>
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
              <h2 className="text-2xl font-bold text-slate-955">Compliance & Operations FAQ</h2>
              <p className="text-xs text-slate-500 mt-2 font-normal">Details on BAAs, code audits, and secure workspace configurations</p>
            </div>

            <div className="flex flex-col gap-6">
              {industryFaqs.map((faq) => (
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
            <h2 className="text-3xl font-bold tracking-tight font-sans text-slate-955">Build Secure Compliant Software</h2>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-normal">
              Book a consultation with our solution architects to structure a compliant development roadmap aligned with HIPAA, SOC2, or PCI requirements.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-slate-955 text-white font-semibold hover:bg-slate-900 transition-colors text-sm shadow-sm cursor-pointer"
            >
              Discuss Compliance Specs
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
