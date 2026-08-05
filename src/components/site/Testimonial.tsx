import TestimonialCard from "@/components/site/TestimonialCard";

const Testimonial = () => {
  return (
    <section id="testimonial" className="border-b-2 border-ink bg-secondary/30">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] text-foreground/60">
            / Client testimonial
          </div>
          <h2 className="mt-4 font-black tracking-tightest text-2xl md:text-4xl leading-[1.1]">
            He saved us way more than we paid. Worth every penny.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          <TestimonialCard
            name="Tomas Debicki"
            title="CEO/Founder"
            company="Real estate acquisitions"
            photoPath="/work/tom-debicki-photo.jpg"
            screenshotPath="/work/tom-debicki-review.png"
            linkedinUrl="https://www.linkedin.com/in/tomas-debicki-21163a36/"
          />
          <TestimonialCard
            name="Peter Watson"
            title="Founder"
            company="Next Haven Life"
            photoPath="/work/Peternexthaven.jpg"
            screenshotPath="/work/Peter-watson-review.png"
            linkedinUrl="https://www.linkedin.com/in/nexthavenlife/"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
