import { useEffect, useRef, useState } from "react";
import { Linkedin, Star, Check, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = {
  name: string;
  title: string;
  company: string;
  photoPath?: string;
  screenshotPath?: string;
  linkedinUrl?: string;
};

const TestimonialCard = ({
  name,
  title,
  company,
  photoPath,
  screenshotPath,
  linkedinUrl,
}: TestimonialCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  return (
    <>
      <div
        ref={ref}
        className={cn(
          "group w-full max-w-[420px] text-left",
          "bg-[#0f0f0f] p-8",
          "transition-[opacity,transform,border-color] ease-out",
        )}
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 16,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(1)",
          transitionDuration: visible ? "400ms, 400ms, 250ms" : "400ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px) scale(1.015)";
          e.currentTarget.style.transitionDuration = "250ms";
          e.currentTarget.style.borderColor = "rgba(26, 86, 219, 0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.transitionDuration = "250ms";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
        }}
      >
        {/* Top row */}
        <div className="flex items-start gap-4">
          <div className="relative shrink-0" style={{ width: 96, height: 96 }}>
            {photoPath ? (
              <img
                src={photoPath}
                alt={`${name}, ${title}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                style={{ borderRadius: 12 }}
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  borderRadius: 12,
                  border: "1px dashed rgba(255,255,255,0.25)",
                }}
              />
            )}
            <span
              aria-hidden
              className="absolute flex items-center justify-center"
              style={{
                width: 24,
                height: 24,
                right: -6,
                bottom: -6,
                borderRadius: 999,
                background: "#1A56DB",
                border: "2px solid #0f0f0f",
              }}
            >
              <Check size={12} strokeWidth={3} color="#ffffff" />
            </span>
          </div>

          <div className="min-w-0">
            <div className="font-bold text-[16px] leading-tight" style={{ color: "#ffffff" }}>
              {name}
            </div>
            <div className="text-[13px] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
              {title}
            </div>
            <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              {company}
            </div>
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[12px] hover:underline"
                style={{ color: "#1A56DB" }}
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        <div
          className="mt-6 relative overflow-hidden group/screenshot"
          style={{ height: 220, borderRadius: 12, cursor: screenshotPath ? "pointer" : "default" }}
          onClick={() => screenshotPath && setLightboxOpen(true)}
        >
          {screenshotPath ? (
            <>
              <img
                src={screenshotPath}
                alt={`Review from ${name}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain transition-all duration-250 group-hover/screenshot:brightness-110"
                style={{ borderRadius: 12, background: "rgba(255,255,255,0.03)" }}
              />
              <span
                aria-hidden
                className="absolute top-2 right-2 flex items-center justify-center opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-250"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 8,
                  background: "rgba(15,15,15,0.85)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <ZoomIn size={14} color="#ffffff" />
              </span>
            </>
          ) : (
            <div
              className="w-full h-full"
              style={{ borderRadius: 12, border: "1px dashed rgba(255,255,255,0.25)" }}
            />
          )}
        </div>

        {/* Bottom row */}
        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="#FFC107" color="#FFC107" />
            ))}
          </div>
          <span
            className="text-[11px] font-semibold"
            style={{
              color: "#1A56DB",
              background: "rgba(26, 86, 219, 0.15)",
              border: "1px solid rgba(26, 86, 219, 0.3)",
              borderRadius: 999,
              padding: "5px 10px",
            }}
          >
            OnlineJobs.ph
          </span>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && screenshotPath && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)" }}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            aria-label="Close lightbox"
            className="absolute top-4 right-4 flex items-center justify-center text-white hover:text-white/80 transition-colors"
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "rgba(255,255,255,0.1)",
            }}
            onClick={() => setLightboxOpen(false)}
          >
            <X size={22} />
          </button>
          <img
            src={screenshotPath}
            alt={`Review from ${name} — enlarged`}
            className="object-contain"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 12,
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default TestimonialCard;