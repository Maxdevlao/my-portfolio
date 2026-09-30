"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollMotion() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector("header");

    if (reduced) {
      if (barRef.current) gsap.set(barRef.current, { scaleX: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      if (barRef.current) {
        gsap.set(barRef.current, { scaleX: 0, transformOrigin: "left center" });
        gsap.to(barRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        });
      }

      const media = document.querySelector("[data-hero-media]");
      if (media) {
        gsap.to(media, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: "#top",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      ScrollTrigger.create({
        start: 48,
        onToggle: (self) => {
          header?.classList.toggle("nav-scrolled", self.isActive);
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-slide]").forEach((el) => {
        const fromLeft = el.dataset.slide !== "right";

        gsap.from(el, {
          x: fromLeft ? -88 : 88,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 36,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-child]");
        if (!items.length) return;

        gsap.from(items, {
          y: 22,
          opacity: 0,
          duration: 0.55,
          stagger: 0.035,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 86%",
            once: true,
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-0.5"
      aria-hidden
    >
      <div ref={barRef} className="h-full w-full bg-highlight" />
    </div>
  );
}
