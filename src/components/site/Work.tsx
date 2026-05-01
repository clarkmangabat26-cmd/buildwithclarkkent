import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { site, type Project } from "@/content/site";
import SmartImage from "@/components/site/SmartImage";

// Responsive 16:9 Loom embed (no autoplay).
const LoomEmbed = ({ embedId, title }: { embedId: string; title: string }) => (
  <div className="relative w-full aspect-video border-2 border-ink bg-ink overflow-hidden">
    <iframe
      src={`https://www.loom.com/embed/${embedId}`}
      title={`${title} — Loom demo`}
      frameBorder={0}
      allowFullScreen
      loading="lazy"
      className="absolute inset-0 w-full h-full"
    />
  </div>
);

const Work = () => {
  const [active, setActive] = useState<Project | null>(null);
  const projects = site.projects;
  const ws = site.workSection;

  // Trigger one-time stagger entrance when the grid scrolls into view.
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (!gridRef.current || revealed) return;
    const node = gridRef.current;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [revealed]);

  // Responsive cards-per-view: 1 (mobile) / 2 (tablet) / 3 (desktop).
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const [startIdx, setStartIdx] = useState(0);
  const maxStart = Math.max(0, projects.length - perView);
  useEffect(() => {
    if (startIdx > maxStart) setStartIdx(maxStart);
  }, [maxStart, startIdx]);
  const numPages = maxStart + 1;

  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) setStartIdx((i) => Math.min(maxStart, i + 1));
      else setStartIdx((i) => Math.max(0, i - 1));
    }
    touchStartX.current = null;
  };

  return (
    <section id="work" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4">
              / {ws.eyebrow}
            </div>
            <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95]">
              {ws.headline.replace(/\.$/, "")}<span className="text-primary">.</span>
            </h2>
            <div className="mt-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {ws.subtext}
            </div>
          </div>
          <div className="hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {projects.length} CASE STUDIES
          </div>
        </div>

        <div ref={gridRef} className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(calc(-${startIdx} * (100% / ${perView})))`,
                transition: "transform 400ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {projects.map((p, i) => {
                const visible = i >= startIdx && i < startIdx + perView;
                return (
                <div
                  key={p.id}
                  className="shrink-0 px-2 md:px-3"
                  style={{ width: `calc(100% / ${perView})`, opacity: visible ? 1 : 0.4, transition: "opacity 400ms ease" }}
                >
                <button
                  onClick={() => setActive(p)}
                  className="group w-full h-full text-left p-6 md:p-8 bg-background hover:bg-ink hover:text-background transition-all duration-200 relative hover:-translate-y-1 hover:shadow-[0_0_0_2px_hsl(var(--primary))] border-2 border-ink flex flex-col justify-between"
                  style={{
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 600ms ease-out ${i * 100}ms, transform 600ms ease-out ${i * 100}ms`,
                  }}
                >
                  {p.loomEmbedId && (
                    <span className="absolute top-3 right-3 z-20 inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 shadow-lg animate-pulse-badge">
                      ▶ Loom Demo
                    </span>
                  )}
                  <div>
                {/* Thumbnail placeholder — 800x500 (8:5) */}
                <div className="mb-8 w-full aspect-[8/5] border-2 border-ink bg-secondary overflow-hidden flex items-center justify-center group-hover:border-background transition-colors">
                  {p.thumbnail ? (
                    <SmartImage
                      src={p.thumbnail}
                      alt={`${p.title} — workflow thumbnail showing ${p.tools.slice(0, 3).join(", ")}`}
                      width={800}
                      height={500}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                      loadingBorder
                      loading={i < 3 ? "eager" : "lazy"}
                      fetchPriority={i < 3 ? "high" : "auto"}
                    />
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/40 group-hover:text-background/50">
                      800 × 500 / Thumbnail
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-8 gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    {p.workflowTag && (
                      <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1">
                        {p.workflowTag}
                      </span>
                    )}
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                      {String(i + 1).padStart(2, "0")} / {p.category}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition shrink-0" />
                </div>
                <h3 className="font-black tracking-tightest text-2xl md:text-3xl leading-tight">
                  {p.title}
                </h3>
                <p className="mt-6 max-w-md text-sm md:text-base leading-relaxed text-foreground/75 transition-colors group-hover:text-background/80">
                  {p.summary}
                </p>
                {/* Tools badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] border border-ink px-2 py-1 bg-background text-foreground group-hover:bg-ink group-hover:border-background group-hover:text-background transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 self-start">
                    <span className="h-2 w-2 bg-primary group-hover:bg-background" />
                    <span className="font-mono text-sm md:text-base uppercase tracking-[0.15em] font-bold">
                      {p.benefit}
                    </span>
                  </div>
                </button>
                </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setStartIdx((i) => Math.max(0, i - 1))}
            disabled={startIdx === 0}
            aria-label="Previous case studies"
            className="absolute left-1 md:-left-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 min-h-12 min-w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => setStartIdx((i) => Math.min(maxStart, i + 1))}
            disabled={startIdx >= maxStart}
            aria-label="Next case studies"
            className="absolute right-1 md:-right-6 top-1/2 -translate-y-1/2 z-10 h-12 w-12 min-h-12 min-w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {numPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Case study pagination">
            {Array.from({ length: numPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIdx(i)}
                role="tab"
                aria-selected={i === startIdx}
                aria-label={`Go to slide ${i + 1} of ${numPages}`}
                className={`h-3 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  i === startIdx ? "w-8 bg-primary" : "w-3 bg-ink/25 hover:bg-ink/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {active && <ProjectOverlay project={active} onClose={() => setActive(null)} />}
    </section>
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
    / {children}
  </div>
);

const ProjectOverlay = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [galleryIdx, setGalleryIdx] = useState(0);
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : null;
  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto animate-fade-up">
      <div className="sticky top-0 z-10 border-b-2 border-ink bg-background">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
            / Case Study — {project.category}
          </span>
          <button
            onClick={onClose}
            className="h-11 w-11 min-h-11 min-w-11 border-2 border-ink flex items-center justify-center hover:bg-ink hover:text-background transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Close case study"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
        {project.client && (
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 text-muted-foreground">
            Client: {project.client}
          </div>
        )}
        <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95] max-w-4xl">
          {project.title}
          <span className="text-primary">.</span>
        </h2>
        <div className="mt-6 inline-flex items-center gap-3 border-2 border-ink px-4 py-2">
          <span className="h-2 w-2 bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.15em] font-bold">
            {project.benefit}
          </span>
        </div>
        {project.workflowTag && (
          <div className="mt-3">
            <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1">
              {project.workflowTag}
            </span>
          </div>
        )}

        {/* Loom video embed (modal) */}
        {project.loomEmbedId && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>Demo Video</SectionLabel>
            <LoomEmbed embedId={project.loomEmbedId} title={project.title} />
          </div>
        )}

        {/* Full view / gallery — preserves aspect ratio so the entire diagram is readable */}
        {gallery ? (
          <div className="mt-12 md:mt-16">
            <SectionLabel>Workflow Views</SectionLabel>
            <div
              className="group/gallery relative w-full border-2 border-ink bg-background overflow-hidden shadow-[0_20px_60px_-20px_hsl(var(--ink)/0.4)]"
              role="region"
              aria-roledescription="carousel"
              aria-label={`${project.title} workflow views`}
            >
              <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                <SmartImage
                  key={galleryIdx}
                  src={gallery[galleryIdx].src}
                  alt={`${project.title} — ${gallery[galleryIdx].alt}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 1400px"
                  className="object-contain animate-fade-up"
                  loadingBorder
                />
              </div>
              <button
                onClick={() => setGalleryIdx((galleryIdx - 1 + gallery.length) % gallery.length)}
                aria-label={`Previous image (${galleryIdx + 1} of ${gallery.length})`}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 min-h-11 min-w-11 border-2 border-ink bg-background flex items-center justify-center transition-opacity duration-200 opacity-20 group-hover/gallery:opacity-100 hover:bg-ink hover:text-background focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setGalleryIdx((galleryIdx + 1) % gallery.length)}
                aria-label={`Next image (${galleryIdx + 1} of ${gallery.length})`}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 min-h-11 min-w-11 border-2 border-ink bg-background flex items-center justify-center transition-opacity duration-200 opacity-20 group-hover/gallery:opacity-100 hover:bg-ink hover:text-background focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {gallery[galleryIdx].alt}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {String(galleryIdx + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}
                </span>
                <div className="flex gap-2" role="tablist" aria-label="Gallery navigation">
                  {gallery.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setGalleryIdx(i)}
                      aria-label={`Go to image ${i + 1} of ${gallery.length}`}
                      aria-current={i === galleryIdx}
                      role="tab"
                      aria-selected={i === galleryIdx}
                      className={`relative h-11 w-11 min-h-11 min-w-11 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                    >
                      <span
                        className={`block h-2 w-6 border border-ink transition-colors ${
                          i === galleryIdx ? "bg-primary" : "bg-background"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 md:mt-16 w-full border-2 border-ink bg-background overflow-hidden shadow-[0_20px_60px_-20px_hsl(var(--ink)/0.4)]">
            {project.fullImage ? (
              <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                <SmartImage
                  src={project.fullImage}
                  alt={`${project.title} — full workflow diagram (${project.toolsDetail ?? project.tools.join(", ")})`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 1024px) 100vw, 1400px"
                  className="object-contain"
                  loadingBorder
                />
              </div>
            ) : (
              <div className="aspect-[8/5] flex items-center justify-center bg-ink">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-background/50">
                  1600 × 1000 / Full view
                </span>
              </div>
            )}
          </div>
        )}

        {/* Problem / Solution */}
        {(project.problem || project.solution) && (
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-ink">
            {project.problem && (
              <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink">
                <SectionLabel>The Problem</SectionLabel>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="p-6 md:p-8">
                <SectionLabel>The Solution</SectionLabel>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        )}

        {/* How it flows */}
        {project.flow && project.flow.length > 0 && (
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-ink">
            <div className="p-6 md:p-8 md:col-span-1 border-b-2 md:border-b-0 md:border-r-2 border-ink bg-ink text-background">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 mb-4">
                / How It Flows
              </div>
              <h3 className="font-black tracking-tightest text-3xl md:text-4xl">Step by step.</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase tracking-[0.15em] border border-background/40 px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              {project.flow.map((step, i) => (
                <div
                  key={i}
                  className={`flex gap-6 p-6 md:p-8 ${
                    i < project.flow!.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <div className="font-black tracking-tightest text-3xl md:text-4xl text-primary leading-none shrink-0 w-12">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-medium text-base md:text-lg leading-snug">{step}</div>
                </div>
              ))}
              {project.flowNote && (
                <div className="p-6 md:p-8 border-t-2 border-ink bg-secondary">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 text-primary font-bold">
                    Edge case
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-foreground/80">
                    {project.flowNote}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* AI Scoring Rubric */}
        {project.rubric && project.rubric.length > 0 && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>AI Scoring Rubric</SectionLabel>
            <div className="border-2 border-ink">
              {project.rubric.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-4 p-5 md:p-6 ${
                    i < project.rubric!.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <div className="col-span-12 md:col-span-4 font-bold text-base md:text-lg">
                    {row.label}
                  </div>
                  <div className="col-span-12 md:col-span-8 font-mono text-xs md:text-sm text-foreground/80 leading-relaxed">
                    {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact */}
        {project.impact && project.impact.length > 0 && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>Impact</SectionLabel>
            <div className="border-2 border-ink">
              {project.impact.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-4 p-5 md:p-6 items-center ${
                    i < project.impact!.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <div className="col-span-12 md:col-span-4 font-mono text-[11px] md:text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {row.label}
                  </div>
                  <div className="col-span-5 md:col-span-4 font-bold text-base md:text-lg line-through opacity-50">
                    {row.from}
                  </div>
                  <div className="col-span-7 md:col-span-4 font-black tracking-tightest text-lg md:text-2xl text-primary">
                    → {row.to}
                  </div>
                </div>
              ))}
              {project.toolsDetail && (
                <div className="p-5 md:p-6 border-t-2 border-ink bg-ink text-background">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70 mb-2">
                    Tools
                  </div>
                  <div className="font-mono text-sm md:text-base">{project.toolsDetail}</div>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              setTimeout(
                () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
                50
              );
            }}
            className="inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink"
          >
            Contact me →
          </a>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center h-14 px-8 bg-background text-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:bg-ink hover:text-background transition-colors"
          >
            Back to work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
