import { site } from "@/content/site";

const CALENDLY_URL =
  "https://calendly.com/clarkmangabat26/30min-discovery-call-with-clark";
const WHATSAPP_NUMBER_DISPLAY = "+63 960 289 4958";
const WHATSAPP_LINK = "https://wa.me/639602894958";

const Contact = () => {
  const c = site.contactSection;

  return (
    <section id="contact" className="border-b-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Calendly */}
        <div className="lg:col-span-7">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
            / {c.eyebrow}
          </div>
          <h2 className="font-black tracking-tightest text-4xl md:text-6xl leading-[0.95]">
            {c.headline}
            <span className="text-primary">_</span>
          </h2>
          <p className="mt-6 max-w-md text-base md:text-lg opacity-80 leading-relaxed">
            Book a 30-minute call to discuss your automation needs. I'll respond within 24 hours.
          </p>

          <div className="mt-8 bg-background border-2 border-background overflow-hidden">
            <iframe
              src={CALENDLY_URL}
              title="Schedule a call with Clark"
              className="w-full block"
              style={{ minHeight: 700, border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: WhatsApp */}
        <div className="lg:col-span-5">
          <div className="bg-background text-foreground border-2 border-background p-6 md:p-10 h-full flex flex-col">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4 opacity-70">
              / DIRECT MESSAGE
            </div>
            <h3 className="font-black tracking-tightest text-3xl md:text-5xl leading-[0.95]">
              Prefer WhatsApp?
            </h3>
            <p className="mt-6 text-base md:text-lg opacity-80 leading-relaxed">
              Message me directly for quick questions or urgent requests.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block font-mono text-2xl md:text-3xl font-bold tracking-tight hover:text-primary transition-colors break-all"
            >
              {WHATSAPP_NUMBER_DISPLAY}
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center min-h-14 h-14 px-8 font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform self-start"
              style={{ backgroundColor: "#25D366", color: "#ffffff" }}
            >
              Message on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
