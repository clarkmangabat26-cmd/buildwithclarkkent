import { useEffect, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

/**
 * Minimal "Hard Cut" intro loader.
 *
 * Sequence (1800ms total):
 *   0ms     — White screen + knight logo appear instantly
 *   800ms   — "CLARK KENT MANGABAT" appears instantly below logo
 *   1800ms  — Instant cut to main site (no fade)
 *
 * Reduced motion: skip entirely.
 */

interface IntroLoaderProps {
  onComplete: () => void;
}

const LOGO_HOLD = 800;
const BOTH_HOLD = 1000;
const TOTAL = LOGO_HOLD + BOTH_HOLD; // 1800ms

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

  const [showName, setShowName] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setShowName(true), LOGO_HOLD));
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
      aria-hidden
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          src={knightLogo}
          alt=""
          draggable={false}
          className="block object-contain"
          style={{
            width: "min(20vmin, 160px)",
            height: "min(20vmin, 160px)",
          }}
        />

        {showName && (
          <div
            className="font-black uppercase text-ink text-xs md:text-sm mt-6"
            style={{ letterSpacing: "0.4em" }}
          >
            Clark Kent Mangabat
          </div>
        )}
      </div>
    </div>
  );
};

export default IntroLoader;
