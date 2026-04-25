import { useEffect, useMemo, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

/**
 * Minimal "White Card" intro loader.
 *
 * Sequence (first visit, 1200ms total):
 *   0ms     — White screen
 *   0ms     — Knight fades in (200ms)
 *   100ms   — Name fades in (200ms)
 *   500ms   — Hold both visible (~500ms)
 *   900ms   — Both fade out together (300ms)
 *   1200ms  — Unmount, reveal site
 *
 * Repeat visits (sessionStorage flag): compressed to 600ms total.
 * Reduced motion: skip entirely.
 */

interface IntroLoaderProps {
  onComplete: () => void;
}

const STORAGE_KEY = "ckm-intro-seen";

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const { isRepeat, prefersReduced } = useMemo(() => {
    if (typeof window === "undefined") {
      return { isRepeat: false, prefersReduced: false };
    }
    return {
      isRepeat: window.sessionStorage.getItem(STORAGE_KEY) === "1",
      prefersReduced:
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
    };
  }, []);

  // Speed multiplier — repeat visits run at 50% (~600ms total).
  const speed = isRepeat ? 0.5 : 1;
  const d = (ms: number) => Math.round(ms * speed);

  const FADE_IN = d(200);
  const NAME_DELAY = d(100);
  const HOLD = d(500);
  const FADE_OUT = d(300);
  const TOTAL = FADE_IN + HOLD + FADE_OUT;

  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => setExiting(true), FADE_IN + HOLD),
    );

    timers.push(
      window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore storage failures
        }
        setVisible(false);
        onComplete();
      }, TOTAL),
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [FADE_IN, HOLD, TOTAL, prefersReduced, onComplete]);

  if (!visible || prefersReduced) return null;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none bg-white"
      aria-hidden
      style={{
        opacity: exiting ? 0 : 1,
        transition: `opacity ${FADE_OUT}ms ease-out`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-4">
        {/* Knight logo — original colors (black with blue hair) */}
        <img
          src={knightLogo}
          alt=""
          draggable={false}
          className="block object-contain"
          style={{
            width: "min(20vmin, 160px)",
            height: "min(20vmin, 160px)",
            animation: `intro-fade-in ${FADE_IN}ms ease-out both`,
          }}
        />

        {/* Name — fades in slightly after the logo */}
        <div
          className="font-black uppercase text-ink text-xs md:text-sm"
          style={{
            letterSpacing: "0.4em",
            animation: `intro-fade-in ${FADE_IN}ms ease-out ${NAME_DELAY}ms both`,
          }}
        >
          Clark Kent Mangabat
        </div>
      </div>

      <style>{`
        @keyframes intro-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;
