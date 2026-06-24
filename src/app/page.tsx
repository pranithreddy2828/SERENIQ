import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Outsourcing from "@/components/Outsourcing";
import HireRecruiter from "@/components/HireRecruiter";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col">
        <Hero />
        <TrustedBy />
        <Outsourcing />
        <HireRecruiter />
        <Services />
        <Industries />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
