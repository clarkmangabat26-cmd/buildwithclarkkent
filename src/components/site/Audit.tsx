import { useState } from "react";
import { toast } from "sonner";
import { site } from "@/content/site";

const Audit = () => {
  const [form, setForm] = useState({ name: "", email: "", bottleneck: "" });
  const [loading, setLoading] = useState(false);

  const cta = site.ctaSection;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.bottleneck) {
      toast.error("Please fill out all fields.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: "", email: "", bottleneck: "" });
      toast.success("Request received. I'll be in touch within 24h.");
    }, 600);
  };

  return (
    <section id="audit" className="border-b-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
            / {cta.eyebrow}
          </div>
          <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95]">
            {cta.headline}
            <span className="text-primary">_</span>
          </h2>
          <p className="mt-6 max-w-md text-base md:text-lg opacity-80 leading-relaxed">
            {cta.description}
          </p>
          <ul className="mt-8 space-y-3 font-mono text-xs uppercase tracking-[0.15em]">
            {cta.bullets.map((x) => (
              <li key={x} className="flex items-center gap-3">
                <span className="h-2 w-2 bg-primary" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 bg-background text-foreground border-2 border-background p-6 md:p-10 space-y-6"
        >
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">
              {cta.formLabels.name}
            </label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={cta.placeholders.name}
              className="w-full h-14 bg-transparent border-0 border-b-2 border-ink px-0 text-lg md:text-xl font-semibold focus:outline-none focus:border-primary placeholder:text-foreground/30"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">
              {cta.formLabels.email}
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={cta.placeholders.email}
              className="w-full h-14 bg-transparent border-0 border-b-2 border-ink px-0 text-lg md:text-xl font-semibold focus:outline-none focus:border-primary placeholder:text-foreground/30"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-[0.2em] breaking-words mb-2 block">
              {cta.formLabels.bottleneck}
            </label>
            <textarea
              value={form.bottleneck}
              onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
              rows={4}
              placeholder={cta.placeholders.bottleneck}
              className="w-full bg-transparent border-2 border-ink p-4 text-base font-medium focus:outline-none focus:border-primary resize-none placeholder:text-foreground/30"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-10 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform disabled:opacity-60"
          >
            {loading ? cta.submittingText : cta.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Audit;