import { site } from "@/content/site";

const Stack = () => {
  // Duplicate the list so the -50% translate creates a seamless loop.
  const loop = [...site.stack.tools, ...site.stack.tools, ...site.stack.tools, ...site.stack.tools];
  return (
    <section id="solutions" className="border-b-2 border-ink bg-ink text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            / {site.stack.label}
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            {String(site.stack.tools.length).padStart(3, "0")}
          </span>
        </div>
        {/* Infinite horizontal marquee — 2 visible on mobile, 4 on desktop */}
        <div
          className="relative border-y-2 border-background overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex w-max animate-marquee will-change-transform"
            style={{ animationDuration: "28s" }}
          >
            {loop.map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="flex items-center justify-center shrink-0 px-8 md:px-20 py-8 md:py-12 min-h-[140px] md:min-h-[180px] w-[50vw] md:w-[25vw] max-w-[360px]"
                aria-hidden={i >= site.stack.tools.length}
              >
                <span className="font-black tracking-tightest text-3xl md:text-5xl lg:text-6xl text-center whitespace-nowrap">
                  {t}
                  <span className="text-primary">.</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;