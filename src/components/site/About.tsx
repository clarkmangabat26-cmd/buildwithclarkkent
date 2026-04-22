import { site } from "@/content/site";

const About = () => {
  return (
    <section id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: portrait */}
          <div className="lg:col-span-5">
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4">/ About</div>
            <div className="aspect-[4/5] w-full border border-ink rounded-[4px] bg-secondary overflow-hidden">
              <img
                src={site.about.imageUrl}
                alt={`${site.name} — ${site.role}`}
                className="h-full w-full object-cover grayscale"
                onError={(e) => {
                  (e.currentTarget.style.display = "none");
                }}
              />
            </div>
          </div>

          {/* Right: bio + principles */}
          <div className="lg:col-span-7">
            <h2 className="font-black tracking-tightest text-4xl md:text-6xl leading-[0.95]">
              {site.about.headline}
              <span className="text-primary">.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed">
              {site.about.bio}
            </p>

            <div className="mt-10 border-2 border-ink">
              {site.about.principles.map((p, i) => (
                <div
                  key={p.n}
                  className={`grid grid-cols-12 p-6 md:p-8 ${
                    i < site.about.principles.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <div className="col-span-3 md:col-span-2 font-mono text-sm md:text-base font-bold text-primary">
                    {p.n}
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <h3 className="font-black tracking-tightest text-xl md:text-2xl">{p.t}</h3>
                    <p className="mt-2 text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
                      {p.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;