import { site, CTA_HREF } from "@/content/site";

const Hero = () => {
  return (
    <section id="top" className="relative border-b-2 border-ink overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-10 md:py-28">
        <div className="flex items-center gap-3 mb-16 md:mb-20">
          <span className="h-2 w-2 bg-primary" />
          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em]">
            {site.role} / {site.availability}
          </span>
        </div>
        <h1 className="font-black tracking-tightest leading-[0.95] text-4xl sm:text-6xl md:text-8xl lg:text-[128px]">
          {site.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="relative inline-block">
            {site.hero.headline.split(" ").slice(-2).join(" ").replace(".", "")}
            <span className="text-primary">.</span>
          </span>
        </h1>
        <p className="mt-6 md:mt-12 max-w-2xl text-sm md:text-xl leading-relaxed text-foreground/80">
          {site.hero.sub}
        </p>
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href={CTA_HREF}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("audit")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform"
          >
            Book a Discovery Call →
          </a>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:bg-ink hover:text-background transition-colors"
          >
            See the Work
          </a>
        </div>

        {/* Metric strip */}
        <div className="mt-12 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-ink">
          {site.hero.metrics.map((m, i) => {
            const total = site.hero.metrics.length;
            return (
              <div
                key={m.k}
                className={[
                  "p-8 min-h-[140px] flex flex-col justify-center",
                  // mobile (1 col): bottom border on all but last
                  i < total - 1 ? "border-b-2 border-ink" : "",
                  // sm (2 cols): right border on left column, remove last-row bottom
                  i % 2 === 0 ? "sm:border-r-2 sm:border-ink" : "",
                  i >= total - 2 ? "sm:border-b-0" : "sm:border-b-2",
                  // lg (4 cols): right border on all but last, no bottom borders
                  "lg:border-b-0",
                  i < total - 1 ? "lg:border-r-2 lg:border-ink" : "lg:border-r-0",
                ].join(" ")}
              >
                <div className="font-black text-4xl md:text-5xl tracking-tightest leading-none">
                  {m.k}
                </div>
                <div className="mt-3 font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {m.v}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;