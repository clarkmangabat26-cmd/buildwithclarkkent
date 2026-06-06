import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Play } from "lucide-react";
// ChevronLeft/ChevronRight still used by the modal gallery below.
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

  return (
    <section id="work" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-16 md:py-28">
        <div className="flex items-end justify-between mb-8 md:mb-12">
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

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => {
            return (
            <div
              key={p.id}
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ease-out ${i * 80}ms, transform 600ms ease-out ${i * 80}ms`,
              }}
            >
            <button
              onClick={() => setActive(p)}
              className="group w-full text-left bg-background hover:bg-ink hover:text-background relative hover:scale-[1.03] hover:shadow-[0_0_0_2px_hsl(var(--primary))] border-2 border-ink flex flex-col transition-transform duration-200 ease-out [transition-property:transform,background-color,color,box-shadow]"
            >
              {/* Thumbnail — 16:9 */}
              <div className="relative w-full aspect-video bg-ink border-b-2 border-ink flex items-center justify-center overflow-hidden">
                {p.clientWork && (
                  <span className="absolute top-3 left-3 z-20 inline-flex items-center rounded-full bg-primary text-primary-foreground font-mono text-[9px] uppercase tracking-[0.18em] font-bold px-2.5 py-1 shadow">
                    Client Work
                  </span>
                )}
                {/* Loom Walkthrough badge — clickable link (only for projects with a Loom embed) */}
                {p.loomEmbedId && (
                  <a
                    href={`https://www.loom.com/share/${p.loomEmbedId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`${p.title} — watch Loom walkthrough`}
                    className="absolute top-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full animate-loom-pulse"
                    style={{
                      backgroundColor: "rgba(245, 158, 11, 0.12)",
                      border: "1px solid rgba(245, 158, 11, 0.3)",
                      color: "#F59E0B",
                      padding: "5px 10px 5px 6px",
                      fontSize: "12px",
                      fontWeight: 600,
                    }}
                  >
                    <span className="h-[18px] w-[18px] rounded-full bg-[#F59E0B] flex items-center justify-center shrink-0">
                      <Play className="h-2.5 w-2.5 text-[#0A0A0A] fill-current" strokeWidth={0} />
                    </span>
                    Loom
                  </a>
                )}
                {p.gridThumbnail ? (
                  <img
                    src={p.gridThumbnail}
                    alt={`${p.title} — thumbnail`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-background/60">
                    Thumbnail coming soon
                  </span>
                )}
                {/* Hover overlay with centered play icon */}
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-ink/0 group-hover:bg-ink/40 transition-colors duration-200 pointer-events-none">
                  <div className="h-14 w-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200">
                    <Play className="h-6 w-6 text-ink fill-current ml-0.5" strokeWidth={0} />
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-1">
                {/* Outcome line */}
                <div className="font-mono text-xs md:text-sm uppercase tracking-[0.15em] font-bold mb-3">
                  {p.outcome ?? p.benefit}
                </div>

                {/* Title */}
                <h3 className="font-black tracking-tightest text-xl md:text-2xl leading-tight">
                  {p.title}
                </h3>

                {/* Tools */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] border border-ink px-2 py-1 bg-background text-foreground group-hover:bg-ink group-hover:border-background group-hover:text-background transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                    {String(i + 1).padStart(2, "0")} / {p.category}
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition shrink-0" />
                </div>
              </div>
            </button>
            </div>
            );
          })}
        </div>
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

  // Scroll lock: freeze the page behind the modal so only the modal scrolls.
  useEffect(() => {
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, []);

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
        {project.workflowTags && project.workflowTags.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.workflowTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : project.workflowTag ? (
          <div className="mt-3">
            <span className="inline-flex items-center rounded-full bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1">
              {project.workflowTag}
            </span>
          </div>
        ) : null}

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
                / {project.flowLabel ?? "How It Flows"}
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

        {/* How It Works (labeled list) */}
        {project.howItWorks && project.howItWorks.length > 0 && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>{project.flowLabel ?? "How It Works"}</SectionLabel>
            <div className="border-2 border-ink">
              {project.howItWorks.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 gap-4 p-5 md:p-6 ${
                    i < project.howItWorks!.length - 1 ? "border-b-2 border-ink" : ""
                  }`}
                >
                  <div className="col-span-12 md:col-span-4 font-bold text-base md:text-lg">
                    {row.label}
                  </div>
                  <div className="col-span-12 md:col-span-8 text-sm md:text-base leading-relaxed text-foreground/80">
                    {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data Note (standalone labeled paragraph) */}
        {project.dataNote && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>{project.dataNote.label}</SectionLabel>
            <div className="border-2 border-ink p-6 md:p-8 bg-secondary">
              <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                {project.dataNote.body}
              </p>
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

        {/* Tools (when no Impact section renders them) */}
        {(!project.impact || project.impact.length === 0) && project.toolsDetail && (
          <div className="mt-12 md:mt-16">
            <SectionLabel>Tools</SectionLabel>
            <div className="border-2 border-ink p-5 md:p-6 bg-ink text-background">
              <div className="font-mono text-sm md:text-base">{project.toolsDetail}</div>
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
