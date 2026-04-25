import { useEffect, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

const BLUE = "#007BFF";

/**
 * "White Gallery" intro loader.
 *
 * Phases:
 *   descend — Knight starts blurred + scaled up on a pure white field, then
 *             smoothly settles to center with a weighted cubic-bezier. (1300ms)
 *   pulse   — A soft blue eclipse glow expands behind the piece while the
 *             full name fades in with tracked-out letter-spacing. (1100ms)
 *   exit    — White background fades cleanly away. (550ms)
 *   done    — Component unmounts entirely (no DOM ghost remains).
 */

type Phase = "descend" | "pulse" | "exit" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

const TIMINGS: Record<Exclude<Phase, "done">, number> = {
  descend: 1300,
  pulse: 1100,
  exit: 550,
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

  // CRITICAL: Once "done", unmount completely so no white overlay or
  // ghost knight lingers above the homepage.
  if (phase === "done") return null;

  const isExiting = phase === "exit";
  const showPulse = phase === "pulse" || phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-white ${
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
                  background: `radial-gradient(circle, ${BLUE}aa 0%, ${BLUE}44 45%, transparent 72%)`,
                  filter: "blur(10px)",
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
            className={`font-black uppercase text-black text-sm md:text-base ${
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