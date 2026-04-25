import { useEffect, useMemo, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

/**
 * Minimal "Black Card" intro loader.
 *
 * Sequence (first visit, 1500ms total):
 *   0ms     — Black screen
 *   0ms     — Knight fades in (300ms)
 *   200ms   — Name fades in (300ms)
 *   700ms   — Hold both visible (500ms)
 *   1200ms  — Both fade out together (300ms)
 *   1500ms  — Unmount, reveal site
 *
 * Repeat visits (sessionStorage flag): compressed to 800ms total.
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

  // Speed multiplier — repeat visits run at ~53% (≈800ms total).
  const speed = isRepeat ? 0.53 : 1;
  const d = (ms: number) => Math.round(ms * speed);

  const FADE_IN = d(300);
  const NAME_DELAY = d(200);
  const HOLD = d(500);
  const FADE_OUT = d(300);
  const TOTAL = FADE_IN + HOLD + FADE_OUT; // logo timeline

  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      onComplete();
      return;
    }

    const timers: number[] = [];

    // Trigger fade-out
    timers.push(
      window.setTimeout(() => setExiting(true), FADE_IN + HOLD),
    );

    // Unmount + signal complete
    timers.push(
      window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(STORAGE_KEY, "1");
        } catch {
          // ignore storage failures (private mode, etc.)
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
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none bg-black"
      aria-hidden
      style={{
        opacity: exiting ? 0 : 1,
        transition: `opacity ${FADE_OUT}ms ease-out`,
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
        {/* Knight logo — fades in immediately */}
        <img
          src={knightLogo}
          alt=""
          draggable={false}
          className="block object-contain"
          style={{
            width: "min(18vmin, 140px)",
            height: "min(18vmin, 140px)",
            opacity: exiting ? 0 : 1,
            transition: `opacity ${exiting ? FADE_OUT : FADE_IN}ms ease-out`,
            // initial fade-in handled by starting at opacity:0 via animation
            animation: `intro-fade-in ${FADE_IN}ms ease-out both`,
            filter: "brightness(0) invert(1)",
          }}
        />

        {/* Name — fades in slightly after the logo */}
        <div
          className="font-black uppercase text-white text-sm md:text-base"
          style={{
            letterSpacing: "0.4em",
            opacity: exiting ? 0 : 1,
            transition: `opacity ${exiting ? FADE_OUT : FADE_IN}ms ease-out`,
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
