const Hero = () => {
  return (
    <section id="top" className="relative border-b-2 border-ink overflow-hidden">
      <div className="absolute inset-0 grid-lines pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-10 py-14 md:py-28">
        <div className="flex items-center gap-3 mb-6 md:mb-10">
          <span className="h-2 w-2 bg-primary" />
          <span className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em]">
            AI Automation Specialist / Available for Q2
          </span>
        </div>
        <h1 className="font-black tracking-tightest leading-[0.95] text-[32px] sm:text-6xl md:text-8xl lg:text-[128px]">
          I build systems <br className="hidden sm:block" />
          that handle your <br className="hidden sm:block" />
          <span className="relative inline-block">
            repetitive work<span className="text-primary">.</span>
          </span>
        </h1>
        <p className="mt-8 md:mt-12 max-w-2xl text-base md:text-xl leading-relaxed text-foreground/80">
          Specializing in <span className="font-semibold text-foreground">n8n, Make, and Zapier</span> to automate your
          operations. Move faster, reduce errors, and scale without hiring.
        </p>
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#audit"
            className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform"
          >
            Book a Free Audit →
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:bg-ink hover:text-background transition-colors"
          >
            See the Work
          </a>
        </div>

        {/* Metric strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-2 border-ink">
          {[
            ["140+", "Workflows shipped"],
            ["3,200h", "Saved per year"],
            ["99.4%", "Uptime on prod flows"],
            ["<2wk", "Average delivery"],
          ].map(([k, v], i) => (
            <div
              key={k}
              className={`p-5 md:p-8 ${i < 3 ? "border-b-2 md:border-b-0 md:border-r-2 border-ink" : ""} ${
                i === 0 ? "border-r-2 border-ink" : ""
              } ${i === 2 ? "border-r-2 md:border-r-2 border-ink" : ""}`}
            >
              <div className="font-black text-3xl md:text-5xl tracking-tightest">{k}</div>
              <div className="mt-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;