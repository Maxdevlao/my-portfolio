"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

export function TypingName() {
  const fullText = profile.fullName;
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setText(fullText);
      setDone(true);
      return;
    }

    let index = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      if (!deleting) {
        index += 1;
        setText(fullText.slice(0, index));
        setDone(false);

        if (index < fullText.length) {
          timeoutId = setTimeout(tick, 75);
        } else {
          setDone(true);
          // Hold the full name for 5 seconds, then erase
          timeoutId = setTimeout(() => {
            deleting = true;
            setDone(false);
            tick();
          }, 5000);
        }
        return;
      }

      // Delete character by character
      index -= 1;
      setText(fullText.slice(0, Math.max(index, 0)));

      if (index > 0) {
        timeoutId = setTimeout(tick, 40);
      } else {
        deleting = false;
        // Brief pause before typing again
        timeoutId = setTimeout(tick, 400);
      }
    };

    timeoutId = setTimeout(tick, 400);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [fullText]);

  return (
    <h1
      className="min-h-[1.1em] font-[family-name:var(--font-display)] text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.9] font-extrabold tracking-tight text-white"
      aria-label={fullText}
    >
      <span aria-hidden>{text}</span>
      <span
        className={`ml-1 inline-block h-[0.82em] w-[0.09em] translate-y-[0.06em] bg-highlight align-baseline ${
          done ? "animate-cursor-blink" : ""
        }`}
        aria-hidden
      />
    </h1>
  );
}
