import { useEffect, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

const BLUE = "#007BFF";

/**
 * "Smooth Descent" intro loader.
 *
 * Phases:
 *   descend — Knight image starts larger + blurred, smoothly scales down
 *             into focus with a custom ease-out (no bounce). (1400ms)
 *   pulse   — Soft blue eclipse glow expands behind the piece while the
 *             full name fades in with tracked-out letter-spacing. (1100ms)
 *   exit    — Whole loader fades away to reveal the homepage. (600ms)
 */

type Phase = "descend" | "pulse" | "exit" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

const TIMINGS: Record<Exclude<Phase, "done">, number> = {
  descend: 1400,
  pulse: 1100,
  exit: 600,
};

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<Phase>("descend");

  useEffect(() => {
    const timers: number[] = [];
    let acc = 0;

    acc += TIMINGS.descend;
    timers.push(window.setTimeout(() => setPhase("pulse"), acc));

    acc += TIMINGS.pulse;
    timers.push(window.setTimeout(() => setPhase("exit"), acc));

    acc += TIMINGS.exit;
    timers.push(
      window.setTimeout(() => {
        setPhase("done");
        onComplete();
      }, acc),
    );

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [onComplete]);

  if (phase === "done") return null;

  const isExiting = phase === "exit";
  const showPulse = phase === "pulse" || phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-black ${
          isExiting ? "animate-loader-fade-out" : ""
        }`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          {/* Knight + eclipse glow */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "min(38vmin, 260px)",
              height: "min(38vmin, 260px)",
            }}
          >
            {/* Eclipse glow — sits behind the piece */}
            {showPulse && (
              <span
                className="absolute inset-0 rounded-full animate-eclipse-glow"
                style={{
                  background: `radial-gradient(circle, ${BLUE}cc 0%, ${BLUE}55 45%, transparent 72%)`,
                  filter: "blur(8px)",
                }}
              />
            )}

            {/* Knight image */}
            <img
              src={knightLogo}
              alt=""
              className="relative block h-full w-full object-contain animate-knight-descend"
              draggable={false}
            />
          </div>

          {/* Full name — fades in with tracked-out spacing on the pulse */}
          <div
            className={`font-black uppercase text-white text-sm md:text-base ${
              showPulse ? "animate-name-track-in" : "opacity-0"
            }`}
            style={{ letterSpacing: "0.4em" }}
          >
            Clark Kent Mangabat
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;