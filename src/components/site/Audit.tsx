import { useState } from "react";
import { toast } from "sonner";
import { site } from "@/content/site";

const N8N_WEBHOOK_URL =
  "https://n8n.srv1602546.hstgr.cloud/webhook/b3c98ee8-e2ae-4097-b2ce-fd5444de811a";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", bottleneck: "" });
  const [loading, setLoading] = useState(false);

  const c = site.contactSection;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const bottleneck = form.bottleneck.trim();

    if (!name || !email || !bottleneck) {
      toast.error("Please fill out all fields.");
      return;
    }
    if (name.length > 100) {
      toast.error("Name is too long (max 100 characters).");
      return;
    }
    if (!EMAIL_RE.test(email) || email.length > 255) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (bottleneck.length > 2000) {
      toast.error("Message is too long (max 2000 characters).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: bottleneck,
          source: "portfolio.contact-form",
          submittedAt: new Date().toISOString(),
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      if (!res.ok) {
        throw new Error(`Webhook responded ${res.status}`);
      }

      setForm({ name: "", email: "", bottleneck: "" });
      toast.success("Message sent. I'll respond within 24 hours.");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      toast.error(
        "Could not send right now. Please email clarkmangabat26@gmail.com directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="border-b-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4 opacity-70">
            / {c.eyebrow}
          </div>
          <h2 className="font-black tracking-tightest text-4xl md:text-7xl leading-[0.95]">
            {c.headline}
            <span className="text-primary">_</span>
          </h2>
          <p className="mt-6 max-w-md text-base md:text-lg opacity-80 leading-relaxed">
            {c.description}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          aria-busy={loading}
          className="lg:col-span-7 bg-background text-foreground border-2 border-background p-6 md:p-10 space-y-6"
        >
          <div>
            <label htmlFor="contact-name" className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">
              {c.formLabels.name}
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={c.placeholders.name}
              className="w-full h-14 bg-transparent border-0 border-b-2 border-ink px-0 text-lg md:text-xl font-semibold focus:outline-none focus:border-primary placeholder:text-foreground/30"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">
              {c.formLabels.email}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder={c.placeholders.email}
              className="w-full h-14 bg-transparent border-0 border-b-2 border-ink px-0 text-lg md:text-xl font-semibold focus:outline-none focus:border-primary placeholder:text-foreground/30"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">
              {c.formLabels.bottleneck}
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              maxLength={2000}
              value={form.bottleneck}
              onChange={(e) => setForm({ ...form, bottleneck: e.target.value })}
              rows={4}
              placeholder={c.placeholders.bottleneck}
              className="w-full bg-transparent border-2 border-ink p-4 text-base font-medium focus:outline-none focus:border-primary resize-none placeholder:text-foreground/30"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-14 h-14 px-10 bg-primary text-primary-foreground font-bold uppercase tracking-[0.12em] text-sm border-2 border-ink hover:translate-y-[-2px] transition-transform disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {loading ? c.submittingText : c.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
