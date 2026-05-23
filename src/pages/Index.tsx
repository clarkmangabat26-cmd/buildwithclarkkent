import { useState } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
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
    setHeroReady(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!introUnmounted && <IntroLoader onComplete={handleIntroComplete} />}
      <Header />
      <main>
        <Hero introDone={heroReady} />
        <Work />
        <About />
        <About />
        <Audit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
