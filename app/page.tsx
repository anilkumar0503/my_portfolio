import Hero from "@/components/Hero";
import About from "@/components/About";
import AIWorkflow from "@/components/AIWorkflow";
import AIPMWorkflow from "@/components/AIPMWorkflow";
import Products from "@/components/Products";
import Metrics from "@/components/Metrics";
import Architecture from "@/components/Architecture";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import PasswordGate from "@/components/PasswordGate";

export default function Home() {
  return (
    <PasswordGate>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Metrics />
        <AIPMWorkflow />
        <AIWorkflow />
        <Products />
        <CaseStudies />
        <Architecture />
        <Contact />
      </main>
    </PasswordGate>
  );
}
