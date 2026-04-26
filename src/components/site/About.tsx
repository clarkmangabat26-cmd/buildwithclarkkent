import { site } from "@/content/site";
import SmartImage from "@/components/site/SmartImage";

const About = () => {
  return (
    <section id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
        <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-8">/ About</div>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Portrait — 400x400 desktop, centered on mobile */}
          <div className="shrink-0 mx-auto lg:mx-0">
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] max-w-full border border-ink rounded-2xl bg-secondary overflow-hidden">
              <SmartImage
                src={site.about.imageUrl}
                alt={`Portrait of ${site.name}, ${site.role}`}
                width={400}
                height={400}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 400px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: bio + principles */}
          <div className="flex-1 min-w-0">
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