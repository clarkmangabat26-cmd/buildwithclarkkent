import { useEffect, useState } from "react";

const BLUE = "#007BFF";

type Phase = "pulse1" | "pulse2" | "pulse3" | "ping" | "split" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

// Timing — full sequence ≈ 2.4s
const PULSE_DURATION = 550; // matches pulse-sweep keyframe
const PING_HOLD = 600;
const SPLIT_DURATION = 550;

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<Phase>("pulse1");

  // Sequence: pulse1 → pulse2 → pulse3 (reveals full name) → ping → split → done
  useEffect(() => {
    const timers: number[] = [];
    timers.push(window.setTimeout(() => setPhase("pulse2"), PULSE_DURATION));
    timers.push(window.setTimeout(() => setPhase("pulse3"), PULSE_DURATION * 2));
    timers.push(window.setTimeout(() => setPhase("ping"), PULSE_DURATION * 3));
    timers.push(
      window.setTimeout(() => setPhase("split"), PULSE_DURATION * 3 + PING_HOLD),
    );
    timers.push(
      window.setTimeout(() => {
        setPhase("done");
        onComplete();
      }, PULSE_DURATION * 3 + PING_HOLD + SPLIT_DURATION),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [onComplete]);

  if (phase === "done") return null;

  const isPulsing = phase === "pulse1" || phase === "pulse2" || phase === "pulse3";
  const showInitials = phase === "pulse1" || phase === "pulse2";
  const showFullName = phase === "pulse3" || phase === "ping" || phase === "split";
  const isSplitting = phase === "split";

  // Re-key the sweep so the animation restarts each pulse phase.
  const sweepKey = phase;

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* TOP HALF — splits up on exit */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-black ${
          isSplitting ? "animate-split-top" : ""
        }`}
      />
      {/* BOTTOM HALF — splits down on exit */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-black ${
          isSplitting ? "animate-split-bottom" : ""
        }`}
      />

      {/* Center pulse line + name — sits ABOVE the halves so it survives the split */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[1400px] px-6">
          {/* The horizontal blue line */}
          <div
            className={`absolute left-0 right-0 top-1/2 h-px origin-center ${
              isSplitting ? "animate-line-collapse" : ""
            }`}
            style={{ backgroundColor: BLUE, boxShadow: `0 0 8px ${BLUE}` }}
          />

          {/* Heart-monitor spike that sweeps left → right */}
          {isPulsing && (
            <div
              key={sweepKey}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 animate-pulse-sweep"
            >
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                className="block -translate-y-1/2"
                style={{ filter: `drop-shadow(0 0 6px ${BLUE})` }}
              >
                <polyline
                  points="0,40 30,40 40,40 48,10 56,70 64,25 72,55 80,40 120,40"
                  fill="none"
                  stroke={BLUE}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}

          {/* Name — centered on the pulse line */}
          <div className="relative flex items-center justify-center">
            {showInitials && (
              <span
                key={`initials-${phase}`}
                className="font-black tracking-[0.35em] text-white text-5xl sm:text-7xl md:text-8xl animate-scan-glow"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  textShadow: `0 0 18px ${BLUE}80`,
                }}
              >
                C K M
              </span>
            )}

            {showFullName && (
              <span
                className="relative inline-flex items-center font-black tracking-[0.18em] text-white text-2xl sm:text-4xl md:text-5xl whitespace-nowrap"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  textShadow: `0 0 12px ${BLUE}66`,
                }}
              >
                <span className={phase === "pulse3" ? "animate-scan-glow" : ""}>
                  CLARK KENT MANGABAT
                </span>
                <span className="relative ml-1 inline-flex h-3 w-3 items-center justify-center sm:ml-1.5">
                  {(phase === "ping" || phase === "split") && (
                    <span
                      className="absolute inline-block h-2 w-2 rounded-full animate-ping-once"
                      style={{ backgroundColor: BLUE }}
                    />
                  )}
                  <span
                    className="relative inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: BLUE }}
                  />
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;