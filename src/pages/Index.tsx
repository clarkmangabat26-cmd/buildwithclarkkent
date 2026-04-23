import { useState } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Stack from "@/components/site/Stack";
import Work from "@/components/site/Work";
import About from "@/components/site/About";
import Audit from "@/components/site/Audit";
import Footer from "@/components/site/Footer";
import IntroLoader from "@/components/site/IntroLoader";

const Index = () => {
  const [introDone, setIntroDone] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      <Header />
      <main>
        <Hero introDone={introDone} />
        <Stack />
        <Work />
        <About />
        <Audit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
