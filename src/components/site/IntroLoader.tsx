import { useEffect, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

/**
 * Smooth intro loader (2500ms total).
 *
 *   0ms     — White screen
 *   0-400   — Logo slides up 20px + fades in
 *   400-700 — Logo holds
 *   700-1000— Name fades in
 *   1000-2000 — Both hold
 *   2000-2500 — Both fade out
 *
 * Reduced motion: skip entirely.
 */

interface IntroLoaderProps {
  onComplete: () => void;
}

const LOGO_IN = 400;
const LOGO_HOLD = 300;
const NAME_IN = 300;
const BOTH_HOLD = 1000;
const FADE_OUT = 500;
const NAME_START = LOGO_IN + LOGO_HOLD; // 700
const FADE_START = NAME_START + NAME_IN + BOTH_HOLD; // 2000
const TOTAL = FADE_START + FADE_OUT; // 2500

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const prefersReduced =
    typeof window !== "undefined" &&
    (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);

  const [showName, setShowName] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const timers: number[] = [];
    timers.push(window.setTimeout(() => setShowName(true), NAME_START));
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
        <img
          src={knightLogo}
          alt=""
          draggable={false}
          className="block object-contain animate-[introLogo_400ms_ease-out_forwards]"
          style={{
            width: "min(20vmin, 160px)",
            height: "min(20vmin, 160px)",
          }}
        />

        <div
          className="font-black uppercase text-ink text-xs md:text-sm mt-6"
          style={{
            letterSpacing: "0.4em",
            opacity: showName ? 1 : 0,
            transition: `opacity ${NAME_IN}ms ease-out`,
          }}
        >
          Clark Kent Mangabat
        </div>
      </div>

      <style>{`
        @keyframes introLogo {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default IntroLoader;
