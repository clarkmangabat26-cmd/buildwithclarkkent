import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import SmartImage from "@/components/site/SmartImage";

const useInView = <T extends Element>(once = true) => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);
  return { ref, inView };
};

const About = () => {
  const headline = useInView<HTMLHeadingElement>();
  const body = useInView<HTMLParagraphElement>();
  const photo = useInView<HTMLDivElement>();
  const cards = useInView<HTMLDivElement>();
  const bioParagraphs = site.about.bio.split("\n\n");
  return (
    <section id="about" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
        <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-8">/ About</div>
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12">
          {/* Portrait — 400x400 desktop, centered on mobile */}
          <div
            ref={photo.ref}
            className="shrink-0 mx-auto lg:mx-0 transition-all duration-[600ms] ease-out"
            style={{
              opacity: photo.inView ? 1 : 0,
              transform: photo.inView ? "scale(1)" : "scale(0.95)",
            }}
          >
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] max-w-full border border-ink rounded-2xl bg-secondary overflow-hidden">
              <SmartImage
                src={aboutMain.url}
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
            <h2
              ref={headline.ref}
              className="font-black tracking-tightest text-4xl md:text-6xl leading-[0.95] transition-all duration-[600ms] ease-out"
              style={{
                opacity: headline.inView ? 1 : 0,
                transform: headline.inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {site.about.headline}
              <span className="text-primary">.</span>
            </h2>
            <p
              ref={body.ref}
              className="mt-6 text-base md:text-lg text-foreground/80 max-w-xl leading-relaxed whitespace-pre-line transition-all duration-[600ms] ease-out"
              style={{
                opacity: body.inView ? 1 : 0,
                transform: body.inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: body.inView ? "100ms" : "0ms",
              }}
            >
              {bioParagraphs.join("\n\n")}
            </p>

            <div ref={cards.ref} className="mt-10 border-2 border-ink">
              {site.about.principles.map((p, i) => (
                <div
                  key={p.n}
                  className={`transition-[opacity,transform] duration-500 ease-out ${
                    i < site.about.principles.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                  style={{
                    opacity: cards.inView ? 1 : 0,
                    transform: cards.inView ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: cards.inView ? `${(i + 1) * 100}ms` : "0ms",
                  }}
                >
                  <div
                    className="grid grid-cols-12 p-6 md:p-8 border-l-[3px] border-l-[#1A56DB] transition-[transform,box-shadow] duration-200 ease hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
                  >
                    <div className="col-span-3 md:col-span-2 font-mono text-base md:text-lg font-extrabold text-[#1A56DB]">
                      {p.n}
                    </div>
                    <div className="col-span-9 md:col-span-10">
                      <h3 className="font-black tracking-tightest text-2xl md:text-3xl">{p.t}</h3>
                      <p className="mt-2 text-sm md:text-base text-foreground/70 leading-relaxed max-w-xl">
                        {p.d}
                      </p>
                    </div>
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