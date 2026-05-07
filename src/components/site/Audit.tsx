import { site } from "@/content/site";

const Contact = () => {
  const cs = site.contactSection;
  const wa = cs.whatsapp;
  const cal = cs.calendly;
  const em = cs.email;

  return (
    <section id="contact" className="border-b-2 border-ink bg-ink">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28 flex flex-col gap-12 md:gap-16">
        {/* Availability note */}
        <p className="text-center text-background text-base md:text-lg opacity-80">
          {cs.availabilityNote}
        </p>

        {/* 1. WhatsApp — Primary */}
        <div className="bg-[#F0FFF4] text-foreground p-8 md:p-12 lg:p-16">
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
            / {wa.eyebrow}
          </div>
          <h2 className="font-black tracking-tightest text-4xl md:text-5xl lg:text-6xl leading-[0.95]">
            {wa.headline}
            <span className="text-primary">_</span>
          </h2>
          <p className="mt-6 max-w-xl text-base md:text-lg opacity-80 leading-relaxed">
            {wa.subtext}
          </p>

          <div className="mt-8 font-mono text-3xl md:text-4xl font-bold tracking-tight">
            {wa.number}
          </div>

          <p className="mt-4 text-sm opacity-70 max-w-md">
            {wa.note}
          </p>
        </div>

        {/* 2. Calendly — Secondary */}
        <div className="bg-background text-foreground">
          <div className="p-8 md:p-12 lg:p-16 pb-0">
            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
              / {cal.eyebrow}
            </div>
            <h2 className="font-black tracking-tightest text-3xl md:text-4xl lg:text-5xl leading-[0.95]">
              {cal.headline}
              <span className="text-primary">_</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-8 px-8 md:px-12 lg:px-16 overflow-hidden">
            <iframe
              src={cal.url}
              title="Schedule a call with Clark"
              className="w-full block"
              style={{ minHeight: 700, border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* 3. Email — Tertiary */}
        <div className="text-center text-background">
          <p className="text-base md:text-lg opacity-80">
            {em.label}{" "}
            <a
              href={`mailto:${em.address}`}
              className="underline hover:opacity-100 opacity-80 transition-opacity"
            >
              {em.address}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
