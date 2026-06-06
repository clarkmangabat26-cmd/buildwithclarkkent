import { useState } from "react";
import { Linkedin, Briefcase, Mail, Copy, Check } from "lucide-react";
import { site } from "@/content/site";

const WHATSAPP_NUMBER_DISPLAY = "+63 960 289 4958";
const WHATSAPP_NUMBER_COPY = "+63 960 289 4958";
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

        {/* WhatsApp Card */}
        <style>{`
          @keyframes wa-borderPulse {
            0%, 100% { border-color: rgba(37, 211, 102, 0.25); }
            50% { border-color: rgba(37, 211, 102, 0.6); }
          }
          @keyframes wa-scanLine {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 0.06; }
            90% { opacity: 0.06; }
            100% { transform: translateY(400%); opacity: 0; }
          }
          @keyframes wa-fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes wa-dotBlink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .wa-card { animation: wa-fadeUp 0.7s ease-out both, wa-borderPulse 3s ease-in-out infinite; }
          .wa-child { opacity: 0; animation: wa-fadeUp 0.6s ease-out forwards; }
          .wa-scan { animation: wa-scanLine 4s ease-in-out infinite 1s; }
          .wa-dot { animation: wa-dotBlink 2s ease-in-out infinite; }
          .wa-btn { transition: border-color 180ms, background 180ms, transform 120ms; }
          .wa-btn:hover { border-color: rgba(255,255,255,0.5) !important; background: rgba(255,255,255,0.04); transform: translateY(-1px); }
          .wa-btn:active { transform: scale(0.98); }
        `}</style>
        <div
          className="wa-card mt-10 mb-16 text-left"
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(37, 211, 102, 0.25)",
            borderRadius: "16px",
            padding: "36px",
            maxWidth: "480px",
            width: "100%",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="wa-scan"
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: "60px",
              background:
                "linear-gradient(to bottom, transparent, rgba(37,211,102,0.04), transparent)",
              pointerEvents: "none",
            }}
          />

          {/* Header */}
          <div
            className="wa-child flex flex-row items-center"
            style={{ gap: "8px", marginBottom: "24px", animationDelay: "0.1s" }}
          >
            <span
              className="wa-dot"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#25D366",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "11px",
                color: "#25D366",
                fontWeight: 600,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              WhatsApp
            </span>
          </div>

          {/* Phone number */}
          <p
            className="wa-child"
            style={{
              fontSize: "34px",
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              letterSpacing: "2px",
              marginBottom: "14px",
              animationDelay: "0.2s",
            }}
          >
            {WHATSAPP_NUMBER_DISPLAY}
          </p>

          {/* Copy number button */}
          <button
            type="button"
            onClick={handleCopyNumber}
            className="wa-child wa-btn inline-flex items-center justify-center gap-2"
            style={{
              width: "100%",
              padding: "11px",
              borderRadius: "8px",
              border: `1px solid ${numberCopied ? "rgba(37,211,102,0.6)" : "rgba(255,255,255,0.15)"}`,
              background: "transparent",
              color: numberCopied ? "#25D366" : "white",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "28px",
              animationDelay: "0.3s",
            }}
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

          {/* Divider */}
          <div
            className="wa-child"
            style={{
              height: "1px",
              background: "rgba(255,255,255,0.07)",
              marginBottom: "24px",
              animationDelay: "0.35s",
            }}
          />

          {/* Message label */}
          <p
            className="wa-child"
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              textAlign: "center",
              marginBottom: "12px",
              animationDelay: "0.4s",
            }}
          >
            Don't know what to say? Copy this message:
          </p>

          {/* Message box */}
          <div
            className="wa-child"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              padding: "16px 18px",
              fontSize: "13px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 2,
              marginBottom: "14px",
              animationDelay: "0.45s",
              whiteSpace: "pre-line",
            }}
          >
            Hi Clark, I found your portfolio at buildwithclarkkent.tech.
            {"\n\n"}Name:{" "}
            <span style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
              [your name]
            </span>
            {"\n"}What I need built:{" "}
            <span style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
              [describe it briefly]
            </span>
            {"\n"}Budget (optional):{" "}
            <span style={{ color: "rgba(255,255,255,0.2)", fontStyle: "italic" }}>
              [rough range is fine]
            </span>
          </div>

          {/* Copy message button */}
          <button
            type="button"
            onClick={handleCopyMessage}
            className="wa-child wa-btn inline-flex items-center justify-center gap-2"
            style={{
              width: "100%",
              padding: "11px",
              borderRadius: "8px",
              border: `1px solid ${messageCopied ? "rgba(37,211,102,0.6)" : "rgba(255,255,255,0.15)"}`,
              background: "transparent",
              color: messageCopied ? "#25D366" : "white",
              fontSize: "14px",
              fontWeight: 600,
              animationDelay: "0.5s",
            }}
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

          {/* Hint */}
          <p
            className="wa-child"
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.2)",
              textAlign: "center",
              marginTop: "16px",
              animationDelay: "0.55s",
            }}
          >
            Open WhatsApp, search the number, and send your message.
          </p>
        </div>

        {/* Divider */}
        <div className="h-px w-full max-w-md" style={{ backgroundColor: "rgba(255,255,255,0.08)", margin: "64px 0" }} />

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
            href="https://www.linkedin.com/in/clark-kent-mangabat-81183725a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Linkedin className="w-6 h-6" />
            <span className="text-xs font-mono uppercase tracking-[0.15em]">LinkedIn</span>
          </a>
          <a
            href="https://v2.onlinejobs.ph/jobseekers/info/3243744"
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