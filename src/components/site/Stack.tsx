import { site } from "@/content/site";

const Stack = () => {
  return (
    <section id="solutions" className="border-b-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            / {site.stack.label}
          </span>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-70">
            {String(site.stack.tools.length).padStart(3, "0")}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-background">
          {site.stack.tools.map((t, i) => (
            <div
              key={t}
              className={`p-8 md:p-12 flex items-center justify-center min-h-[140px] md:min-h-[200px]
                ${i < site.stack.tools.length - 1 ? "border-r-2 border-background" : ""}
                ${i < 2 ? "border-b-2 md:border-b-0 border-background" : ""}
                ${i % 2 === 1 ? "border-r-0 md:border-r-2" : ""}
              `}
            >
              <span className="font-black tracking-tightest text-3xl md:text-5xl lg:text-6xl text-center">
                {t}
                <span className="text-primary">.</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;