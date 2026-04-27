import { useState } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Stack from "@/components/site/Stack";
import WorkflowCategories from "@/components/site/WorkflowCategories";
import Work from "@/components/site/Work";
import About from "@/components/site/About";
import Audit from "@/components/site/Audit";
import Footer from "@/components/site/Footer";
import IntroLoader from "@/components/site/IntroLoader";

const Index = () => {
  const [introUnmounted, setIntroUnmounted] = useState(false);
  const [heroReady, setHeroReady] = useState(false);

  const handleIntroComplete = () => {
    setIntroUnmounted(true);
    // Tiny breath between the intro fully clearing and the hero reveal.
    window.setTimeout(() => setHeroReady(true), 300);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!introUnmounted && <IntroLoader onComplete={handleIntroComplete} />}
      <Header />
      <main>
        <Hero introDone={heroReady} />
        <Stack />
        <WorkflowCategories />
        <Work />
        <About />
        <Audit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
