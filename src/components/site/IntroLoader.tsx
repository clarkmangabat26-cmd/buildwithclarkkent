import { useEffect, useState } from "react";
import KnightMark from "./KnightMark";

const BLUE = "#007BFF";

/**
 * Bespoke "Grandmaster Move" intro loader.
 * Phases:
 *   grid    — 3x3 blueprint grid fades in (250ms)
 *   drop    — Knight piece is placed onto the centre square (550ms)
 *   ping    — Sonar pulse expands, grid flashes blue (700ms)
 *   exit    — Loader slides up to reveal the homepage (500ms)
 * Total ≈ 2.0s
 */

type Phase = "grid" | "drop" | "ping" | "exit" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

const TIMINGS: Record<Exclude<Phase, "done">, number> = {
  grid: 250,
  drop: 550,
  ping: 700,
  exit: 500,
};

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<Phase>("grid");

  useEffect(() => {
    const timers: number[] = [];
    let acc = 0;

    acc += TIMINGS.grid;
    timers.push(window.setTimeout(() => setPhase("drop"), acc));

    acc += TIMINGS.drop;
    timers.push(window.setTimeout(() => setPhase("ping"), acc));

    acc += TIMINGS.ping;
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
  const isPinging = phase === "ping";
  const showKnight = phase !== "grid";

  return (
    <div
      className="fixed inset-0 z-[200] overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className={`absolute inset-0 bg-black ${
          isExiting ? "animate-loader-slide-up" : ""
        }`}
      >
        {/* 3x3 blueprint grid — centred, fades in first */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative grid-fade-wrap"
            style={{
              width: "min(60vmin, 420px)",
              height: "min(60vmin, 420px)",
              opacity: phase === "grid" ? 0 : 1,
              transition: "opacity 250ms ease-out",
            }}
          >
            {/* Grid lines */}
            <svg
              viewBox="0 0 300 300"
              className={`absolute inset-0 h-full w-full ${
                isPinging ? "animate-grid-flash" : ""
              }`}
              style={{
                opacity: 0.18,
              }}
            >
              {/* outer frame */}
              <rect
                x="0.5"
                y="0.5"
                width="299"
                height="299"
                fill="none"
                stroke={BLUE}
                strokeWidth="1"
              />
              {/* vertical lines */}
              <line x1="100" y1="0" x2="100" y2="300" stroke={BLUE} strokeWidth="1" />
              <line x1="200" y1="0" x2="200" y2="300" stroke={BLUE} strokeWidth="1" />
              {/* horizontal lines */}
              <line x1="0" y1="100" x2="300" y2="100" stroke={BLUE} strokeWidth="1" />
              <line x1="0" y1="200" x2="300" y2="200" stroke={BLUE} strokeWidth="1" />
            </svg>

            {/* Centre square + knight */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: "33.333%",
                  height: "33.333%",
                }}
              >
                {/* Sonar ping rings — emit from centre of the square */}
                {isPinging && (
                  <>
                    <span
                      className="absolute inline-block h-6 w-6 rounded-full animate-sonar-ping"
                      style={{
                        backgroundColor: "transparent",
                        border: `2px solid ${BLUE}`,
                        boxShadow: `0 0 12px ${BLUE}`,
                      }}
                    />
                    <span
                      className="absolute inline-block h-6 w-6 rounded-full animate-sonar-ping"
                      style={{
                        backgroundColor: "transparent",
                        border: `2px solid ${BLUE}`,
                        animationDelay: "0.15s",
                      }}
                    />
                  </>
                )}

                {/* The knight piece */}
                {showKnight && (
                  <div
                    className={
                      phase === "drop"
                        ? "animate-knight-drop"
                        : isPinging
                          ? "animate-knight-impact"
                          : ""
                    }
                    style={{
                      width: "78%",
                      filter: `drop-shadow(0 8px 18px ${BLUE}55)`,
                    }}
                  >
                    <KnightMark
                      className="block h-full w-full"
                      outline="#000000"
                      fill="#FFFFFF"
                      accent={BLUE}
                      strokeWidth={4}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;