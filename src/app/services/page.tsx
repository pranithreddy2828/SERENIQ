import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import { Layers, Cpu, Code2, Server, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enterprise IT Services | SERENIQ",
  description: "Explore our full suite of enterprise software development, artificial intelligence workflows, cloud orchestration, and data engineering solutions.",
};

const techStacks = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript / React / Next.js", "Python / FastAPI / Django", "Go (Golang)", "Rust / C++ (High Performance)", "Java / Spring Boot"],
    icon: <Code2 className="w-5 h-5 text-secondary" />,
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch / TensorFlow", "Hugging Face Models", "OpenAI / Claude API Integrations", "LangChain / Agentic Workflows", "Vector DBs (Pinecone, pgvector)"],
    icon: <Cpu className="w-5 h-5 text-secondary" />,
  },
  {
    category: "Cloud & Devops",
    items: ["Amazon Web Services (AWS)", "Google Cloud Platform (GCP)", "Kubernetes (EKS/GKE)", "Terraform (IaC)", "CI/CD (GitHub Actions / GitLab)"],
    icon: <Server className="w-5 h-5 text-secondary" />,
  },
  {
    category: "Databases & Analytics",
    items: ["PostgreSQL / TimescaleDB", "Snowflake / ClickHouse", "MongoDB / Redis / DynamoDB", "Apache Kafka (Streaming)", "Apache Spark / dbt"],
    icon: <Layers className="w-5 h-5 text-secondary" />,
  },
];

const serviceFaqs = [
  {
    q: "What software engineering standards do you follow?",
    a: "We adhere strictly to clean code paradigms, SOLID principles, and comprehensive type safety. We enforce automated styling guidelines (ESLint/Prettier) and mandatory peer code reviews for all commits before merging.",
  },
  {
    q: "How do you handle security and testing coverage?",
    a: "We enforce test-driven development (TDD) principles where possible. We target a minimum of 85% unit test coverage using Jest/Vitest and perform automated integration/E2E testing using Playwright. All deployments pass vulnerability scanning audits.",
  },
  {
    q: "Can you take over or modernize a legacy system?",
    a: "Yes. Our digital transformation consulting services specialize in legacy application modernization, microservice decoupling, database migration (e.g., Oracle to PostgreSQL), and cloud migration with minimal downtime.",
  },
];

export default function ServicesPage() {
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
                Expertise & Capabilities
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-955 font-sans leading-tight">
                Enterprise-Grade{" "}
                <span className="bg-gradient-to-r from-slate-900 via-slate-950 to-secondary bg-clip-text text-transparent">Systems Engineering</span>
              </h1>
              <p className="text-slate-600 mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                We deliver robust systems engineering, cloud orchestration, and cognitive machine learning pipelines for high-throughput business applications.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Services Component */}
        <Services />

        {/* Tech Stack Matrix Section */}
        <section className="py-20 bg-white relative border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary block mb-2">
                Tech Stack
              </span>
              <h2 className="text-3xl font-extrabold font-sans tracking-tight text-slate-950">
                Supported Technologies & Tools
              </h2>
              <p className="text-slate-600 text-sm mt-3 font-normal">
                We utilize modern, robust, and highly-maintainable language ecosystems and infrastructure models.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStacks.map((stack) => (
                <div key={stack.category} className="light-glass-card p-7 rounded-2xl group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-5 group-hover:border-secondary/40 transition-colors">
                    {stack.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-4 group-hover:text-secondary transition-colors">{stack.category}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {stack.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs text-slate-700 font-normal">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-2xl font-bold text-slate-955">Engineering Standards & FAQ</h2>
              <p className="text-xs text-slate-500 mt-2 font-normal">Details on our codebase quality guarantees, delivery methodologies, and reviews</p>
            </div>

            <div className="flex flex-col gap-6">
              {serviceFaqs.map((faq) => (
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
            <h2 className="text-3xl font-bold tracking-tight font-sans text-slate-955">Deploy Expert Engineering Teams</h2>
            <p className="text-slate-600 text-sm max-w-xl leading-relaxed font-normal">
              Connect with our solution architects to review your technical specs and schedule an evaluation call for your development roadmaps.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 mt-2 rounded-xl bg-slate-955 text-white font-semibold hover:bg-slate-900 transition-colors text-sm shadow-sm cursor-pointer"
            >
              Request Custom Estimate
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
