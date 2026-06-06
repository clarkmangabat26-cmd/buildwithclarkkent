import { useState } from "react";
import { Linkedin, Briefcase, Mail, Copy, Check } from "lucide-react";
import { site } from "@/content/site";

const WHATSAPP_NUMBER_DISPLAY = "+63 960 289 4958";
const WHATSAPP_NUMBER_COPY = "+63960289 4958";
const TEMPLATE = `Hi Clark, I found your portfolio at buildwithclarkkent.tech.

Name: 
What I need built: 
Budget (optional): `;

const Contact = () => {
  const calUrl = site.contactSection.calendly.url;
  const [numberCopied, setNumberCopied] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_NUMBER_COPY);
      setNumberCopied(true);
      setTimeout(() => setNumberCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(TEMPLATE);
      setMessageCopied(true);
      setTimeout(() => setMessageCopied(false), 2000);
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

        {/* Phone number block */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-3xl md:text-4xl text-white font-bold font-mono tracking-tight">
            {WHATSAPP_NUMBER_DISPLAY}
          </p>
          <button
            type="button"
            onClick={handleCopyNumber}
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-transparent border border-white transition-colors hover:bg-white/10"
            style={{ borderRadius: "8px" }}
          >
            {numberCopied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy number
              </>
            )}
          </button>
        </div>

        {/* Message template block */}
        <div className="mt-6 w-full max-w-md flex flex-col items-center">
          <p className="text-xs opacity-60 self-start text-left">
            Don't know what to say? Copy this message:
          </p>
          <div
            className="mt-2 w-full text-left text-sm text-white/90 whitespace-pre-line p-4 border border-white/15 bg-white/[0.03]"
            style={{ borderRadius: "8px" }}
          >
            {TEMPLATE}
          </div>
          <button
            type="button"
            onClick={handleCopyMessage}
            className="mt-4 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-transparent border border-white transition-colors hover:bg-white/10"
            style={{ borderRadius: "8px" }}
          >
            {messageCopied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy message
              </>
            )}
          </button>
        </div>

        <p className="mt-6 text-xs opacity-60">
          Open WhatsApp, search the number, and send your message.
        </p>

        {/* Divider */}
        <div className="my-16 md:my-20 h-px w-full max-w-md bg-background/15" />

        {/* Calendly */}
        <h3 className="font-bold tracking-tight text-2xl md:text-3xl opacity-90">
          Prefer a free 15-minute Automation Scope call?
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