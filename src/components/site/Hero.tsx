import { site } from "@/content/site";

interface HeroProps {
  introDone?: boolean;
}

const Hero = ({ introDone = true }: HeroProps) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (!target.startsWith("#")) return;
    e.preventDefault();
    document.getElementById(target.slice(1))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="relative border-b-2 border-ink overflow-hidden">
      <div
        className={`absolute inset-0 grid-lines pointer-events-none ${
          introDone ? "animate-grid-fade" : "opacity-0"
        }`}
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-10 md:py-28">
        <div
          className={`flex items-center gap-3 mb-8 ${introDone ? "animate-fade-up-smooth" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <span className="h-2 w-2 bg-primary" />
          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em]">
            {site.hero.tag}
          </span>
        </div>
        <h1
          className={`font-black tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-7xl lg:text-8xl ${
            introDone ? "animate-fade-up-smooth" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {site.hero.headline.replace(/\.$/, "")}
          <span className="text-primary">.</span>
        </h1>
        <p
          className={`mt-6 md:mt-12 max-w-2xl text-sm md:text-xl leading-relaxed text-foreground/80 ${
            introDone ? "animate-fade-up-smooth" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          {site.hero.sub}
        </p>
        <div
          className={`mt-6 md:mt-12 flex flex-col sm:flex-row gap-4 ${
            introDone ? "animate-fade-up-smooth" : "opacity-0"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href={site.hero.primaryCtaTarget}
            onClick={(e) => scrollTo(e, site.hero.primaryCtaTarget)}
            className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform"
          >
            {site.hero.primaryCta} →
          </a>
          <a
            href={site.hero.secondaryCtaTarget}
            onClick={(e) => scrollTo(e, site.hero.secondaryCtaTarget)}
            className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:bg-ink hover:text-background transition-colors"
          >
            {site.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
