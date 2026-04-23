import { site } from "@/content/site";

const Stack = () => {
  const loop = [...site.stack.tools, ...site.stack.tools];
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
            className="flex w-max animate-marquee motion-reduce:animate-none will-change-transform [transform:translate3d(0,0,0)]"
            style={{ animationDuration: "24s" }}
          >
            {loop.map((t, i) => (
              <div
                key={`${t}-${i}`}
                className="flex h-[132px] w-[50vw] min-w-[180px] max-w-[320px] shrink-0 items-center justify-center px-4 sm:px-6 md:h-[180px] md:w-[25vw] md:min-w-[220px] md:max-w-[360px] md:px-12 lg:px-16"
                aria-hidden={i >= site.stack.tools.length}
              >
                <span className="text-center font-black tracking-tightest text-2xl sm:text-3xl md:text-5xl lg:text-6xl whitespace-nowrap">
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