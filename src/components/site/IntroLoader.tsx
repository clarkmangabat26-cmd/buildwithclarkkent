import { useEffect, useState } from "react";

/**
 * Simple text-only intro (3000ms total).
 *
 *   0-500   — "CLARK KENT MANGABAT" fades in
 *   500-2500 — Holds visible (2.0s)
 *   2500-3000 — Fades out
 *
 * Reduced motion: skip entirely.
 */

interface IntroLoaderProps {
  onComplete: () => void;
}

const FADE_IN = 500;
const HOLD = 2000;
const FADE_OUT = 500;
const FADE_START = FADE_IN + HOLD; // 2500
const TOTAL = FADE_START + FADE_OUT; // 3000

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

  const [fadingOut, setFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setFadingOut(true), FADE_START));
    timers.push(
      window.setTimeout(() => {
        setVisible(false);
        onComplete();
      }, TOTAL),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [prefersReduced, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none bg-white"
      style={{
        opacity: fadingOut ? 0 : 1,
        transition: `opacity ${FADE_OUT}ms ease-out`,
      }}
      aria-hidden
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="font-black uppercase text-ink text-center px-6 text-[clamp(1.25rem,5vw,3rem)] animate-[introFade_500ms_ease-out_forwards]"
          style={{
            letterSpacing: "0.18em",
          }}
        >
          Clark Kent Mangabat
        </div>
      </div>

      <style>{`
        @keyframes introFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;
