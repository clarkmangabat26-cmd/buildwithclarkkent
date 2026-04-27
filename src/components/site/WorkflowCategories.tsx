import { site } from "@/content/site";
import { Check } from "lucide-react";

const WorkflowCategories = () => {
  const wc = site.workflowCategories;
  return (
    <section
      id="workflow-categories"
      className="border-b-2 border-ink bg-background"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28">
        <div className="mb-10 md:mb-16">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4">
            / {wc.eyebrow}
          </div>
          <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95] max-w-4xl">
            {wc.headline.replace(/\.$/, "")}
            <span className="text-primary">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {wc.cards.map((card, i) => (
            <div
              key={card.title}
              className="group p-6 md:p-8 bg-background border-2 border-ink hover:border-primary transition-colors flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / Category
                </span>
                <span
                  aria-hidden
                  className="h-10 w-10 border-2 border-primary bg-primary/10 flex items-center justify-center text-primary font-black tracking-tightest"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-black tracking-tightest text-2xl md:text-3xl leading-tight">
                {card.title}
              </h3>
              <ul className="mt-6 space-y-3">
                {card.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm md:text-base text-foreground/80">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowCategories;