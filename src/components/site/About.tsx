const principles = [
  {
    n: "01",
    t: "Systems, not scripts.",
    d: "Every build is documented, monitored, and handed off with a runbook. No black boxes.",
  },
  {
    n: "02",
    t: "Measure before building.",
    d: "We start with a time-audit. If an automation doesn't return 5x its cost, we don't build it.",
  },
  {
    n: "03",
    t: "Boring reliability.",
    d: "Retries, logs, alerts. Your flows run at 3am without waking anyone.",
  },
];

const About = () => {
  return (
    <section id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4">/ About</div>
          <h2 className="font-black tracking-tightest text-4xl md:text-6xl leading-[0.95]">
            Operations, <br />rebuilt as <br />code<span className="text-primary">.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-md leading-relaxed">
            Seven years of ops + engineering. I partner with founders and COOs
            to replace manual workflows with reliable, measured systems — so
            the team can focus on work that matters.
          </p>
        </div>
        <div className="lg:col-span-7 border-2 border-ink">
          {principles.map((p, i) => (
            <div
              key={p.n}
              className={`grid grid-cols-12 p-6 md:p-10 ${i < principles.length - 1 ? "border-b-2 border-ink" : ""}`}
            >
              <div className="col-span-3 md:col-span-2 font-mono text-sm md:text-base font-bold text-primary">
                {p.n}
              </div>
              <div className="col-span-9 md:col-span-10">
                <h3 className="font-black tracking-tightest text-2xl md:text-3xl">{p.t}</h3>
                <p className="mt-3 text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;