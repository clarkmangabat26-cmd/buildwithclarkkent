import { useEffect, useState } from "react";
import knightLogo from "@/assets/knight-logo.png";

const BLUE = "#007BFF";
const GREY = "#E5E7EB";
const BOARD_SIZE = 8; // 8x8 chessboard

/**
 * "White Gallery" chessboard intro loader.
 *
 * Phases:
 *   descend — A subtle light-grey chessboard grid sits on a pure white field.
 *             The Knight starts blurred + scaled up and smoothly descends onto
 *             the central square with a weighted cubic-bezier landing. (1300ms)
 *   activate — The instant the Knight "clicks" into place, all chessboard
 *              grid lines snap from grey → blue (#007BFF). The full name fades
 *              in beneath the piece with tracked-out letter-spacing. (1000ms)
 *   exit    — White background + grid fade cleanly away. (550ms)
 *   done    — Component unmounts entirely (no DOM ghost remains).
 */

type Phase = "descend" | "activate" | "exit" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

const TIMINGS: Record<Exclude<Phase, "done">, number> = {
  descend: 1300,
  activate: 1000,
  exit: 550,
};

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<Phase>("descend");

  useEffect(() => {
    const timers: number[] = [];
    let acc = 0;

    acc += TIMINGS.descend;
    timers.push(window.setTimeout(() => setPhase("activate"), acc));

    acc += TIMINGS.activate;
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
  // ghost knight/grid lingers above the homepage.
  if (phase === "done") return null;

  const isExiting = phase === "exit";
  const isActivated = phase === "activate" || phase === "exit";

  // Build the chessboard as repeating linear-gradients. The line color
  // switches from grey → blue the moment the knight lands.
  const lineColor = isActivated ? BLUE : GREY;
  const cellPct = 100 / BOARD_SIZE;
  const gridStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(to right, ${lineColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
    `,
    backgroundSize: `${cellPct}% ${cellPct}%`,
    transition: "background-image 220ms ease-out",
  };

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
        {/* Chessboard grid — subtle light-grey blueprint that snaps to blue
            at the moment of activation. */}
        <div
          className="absolute inset-0 animate-grid-fade"
          style={gridStyle}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          {/* Knight on its central square */}
          <div
            className="relative flex items-center justify-center"
            style={{
              width: "min(22vmin, 180px)",
              height: "min(22vmin, 180px)",
            }}
          >
            {/* Knight image */}
            <img
              src={knightLogo}
              alt=""
              className="relative block h-full w-full object-contain animate-knight-descend"
              draggable={false}
            />
          </div>

          {/* Full name — fades in with tracked-out spacing once activated */}
          <div
            className={`font-black uppercase text-black text-sm md:text-base ${
              isActivated ? "animate-name-track-in" : "opacity-0"
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