import { site } from "@/content/site";

const Testimonial = () => {
  return (
    <section id="testimonial" className="border-b-2 border-ink bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-2xl mb-6" aria-hidden>⭐</div>
          <blockquote className="font-black tracking-tightest text-2xl md:text-4xl leading-[1.1]">
            "{site.testimonial.quote}"
          </blockquote>
          <div className="mt-8 font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground/60">
            — {site.testimonial.author}, {site.testimonial.source}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
