import { useState } from "react";
import { Linkedin, Briefcase, Mail, Copy, Check } from "lucide-react";
import { site } from "@/content/site";

const WHATSAPP_URL = "https://wa.me/639602894958";
const WHATSAPP_NUMBER = "+63 960 289 4958";
const TEMPLATE = `Hi Clark, I found your portfolio at buildwithclarkkent.tech.

Name: 
What I need built: 
Budget (optional): `;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.45L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Contact = () => {
  const calUrl = site.contactSection.calendly.url;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="border-b-2 border-ink bg-ink text-background">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 md:py-28 flex flex-col items-center text-center">
        {/* Availability badge */}
        <div
          className="inline-flex items-center rounded-full px-4 py-1.5"
          style={{
            backgroundColor: "rgba(26, 86, 219, 0.15)",
            border: "1px solid rgba(26, 86, 219, 0.3)",
            color: "#1A56DB",
            fontSize: "13px",
          }}
        >
          <span className="mr-2 inline-block w-2 h-2 rounded-full bg-[#1A56DB] animate-pulse" />
          Available now: 2 to 3 spots open this month
        </div>

        {/* Headline */}
        <h2 className="mt-8 font-black tracking-tightest text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
          Let's build it.
        </h2>

        {/* Subtext */}
        <p className="mt-6 max-w-xl text-base md:text-lg opacity-70 leading-relaxed">
          Message me on WhatsApp. I typically reply within 2 to 4 hours during business hours PHT.
        </p>

        {/* WhatsApp button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: "#25D366",
            borderRadius: "8px",
            minWidth: "280px",
            fontSize: "16px",
          }}
        >
          <WhatsAppIcon className="w-5 h-5" />
          Message me on WhatsApp
        </a>

        {/* Copy template */}
        <button
          type="button"
          onClick={handleCopy}
          className="mt-5 inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Or copy a message template to paste into WhatsApp →
            </>
          )}
        </button>

        {/* Phone number */}
        <p className="mt-4 text-xs opacity-50 font-mono">{WHATSAPP_NUMBER}</p>

        {/* Divider */}
        <div className="my-16 md:my-20 h-px w-full max-w-md bg-background/15" />

        {/* Calendly */}
        <h3 className="font-bold tracking-tight text-2xl md:text-3xl opacity-90">
          Prefer a scheduled call?
        </h3>
        <div className="mt-8 w-full overflow-hidden bg-background">
          <iframe
            src={calUrl}
            title="Schedule a call with Clark"
            className="w-full block"
            style={{ minHeight: 700, border: 0 }}
            loading="lazy"
          />
        </div>

        {/* Divider */}
        <div className="my-12 md:my-16 h-px w-full max-w-md bg-background/15" />

        {/* Footer links */}
        <div className="flex flex-wrap items-start justify-center gap-10 md:gap-16">
          <a
            href="https://www.linkedin.com/in/clarkkentmangabat/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
            <span className="text-xs font-mono uppercase tracking-[0.15em]">LinkedIn</span>
          </a>
          <a
            href="https://www.onlinejobs.ph/jobseekers/info/3887581"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Briefcase className="w-6 h-6" />
            <span className="text-xs font-mono uppercase tracking-[0.15em]">OnlineJobs.ph</span>
          </a>
          <a
            href="mailto:clarkmangabat28@gmail.com"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Mail className="w-6 h-6" />
            <span className="text-xs font-mono uppercase tracking-[0.15em]">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;