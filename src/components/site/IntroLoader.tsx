import { useEffect, useState } from "react";

const FULL_NAME = "CLARK KENT MANGABAT";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#@%&*+=";

type Phase = "draw" | "scramble" | "settled" | "exit" | "done";

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader = ({ onComplete }: IntroLoaderProps) => {
  const [phase, setPhase] = useState<Phase>("draw");
  const [text, setText] = useState("C K M");

  // Phase 1: draw CKM (0.5s) → Phase 2: glitch-scramble into full name (~0.6s)
  useEffect(() => {
    const drawTimer = window.setTimeout(() => setPhase("scramble"), 520);
    return () => window.clearTimeout(drawTimer);
  }, []);

  useEffect(() => {
    if (phase !== "scramble") return;
    const target = FULL_NAME;
    const totalSteps = 9;
    let step = 0;
    const id = window.setInterval(() => {
      step += 1;
      const revealCount = Math.round((step / totalSteps) * target.length);
      const revealed = target.slice(0, revealCount);
      const scrambled = target
        .slice(revealCount)
        .split("")
        .map((ch) =>
          ch === " "
            ? " "
            : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)],
        )
        .join("");
      setText(revealed + scrambled);
      if (step >= totalSteps) {
        window.clearInterval(id);
        setText(target);
        setPhase("settled");
      }
    }, 55);
    return () => window.clearInterval(id);
  }, [phase]);

  // Phase 3: hold ~0.45s for sonar ping, then slide up
  useEffect(() => {
    if (phase !== "settled") return;
    const t = window.setTimeout(() => setPhase("exit"), 520);
    return () => window.clearTimeout(t);
  }, [phase]);

  // Phase 4: exit slide (0.4s) → done
  useEffect(() => {
    if (phase !== "exit") return;
    const t = window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 420);
    return () => window.clearTimeout(t);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  const showFull = phase === "scramble" || phase === "settled" || phase === "exit";

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black ${
        phase === "exit" ? "animate-loader-out" : ""
      }`}
      aria-hidden
    >
      {/* subtle grid for technical feel */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative flex items-center">
        {!showFull ? (
          <span
            className="font-black tracking-[0.25em] text-white text-4xl sm:text-6xl md:text-7xl animate-ckm-draw"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            C K M
          </span>
        ) : (
          <span
            className={`font-black tracking-[0.18em] text-white text-2xl sm:text-4xl md:text-5xl whitespace-nowrap ${
              phase === "scramble" ? "animate-glitch-shift" : ""
            }`}
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            {text}
          </span>
        )}

        {/* Sonar ping — appears only once name is settled */}
        {(phase === "settled" || phase === "exit") && (
          <span className="relative ml-3 flex h-2.5 w-2.5 items-center justify-center sm:ml-4 sm:h-3 sm:w-3">
            <span
              className="absolute inline-block h-full w-full rounded-full animate-ping-once"
              style={{ backgroundColor: "#007BFF" }}
            />
            <span
              className="relative inline-block h-full w-full rounded-full"
              style={{ backgroundColor: "#007BFF" }}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default IntroLoader;