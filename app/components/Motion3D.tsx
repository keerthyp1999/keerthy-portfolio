"use client";
import { useEffect } from "react";

/**
 * Adds subtle 3D motion without extra dependencies:
 *  - scroll reveal: elements rise and rotate into place as they enter the viewport
 *  - tilt: elements marked [data-tilt] follow the pointer with perspective and a light glare
 * Both are skipped for visitors who prefer reduced motion; tilt is skipped on touch devices.
 */
export default function Motion3D() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const cleanups: Array<() => void> = [];

    /* ---------- scroll reveal ---------- */
    const revealSelector =
      "section[id] .section-label, section[id] h2, section[id] h2 + p, section[id] .glass, section[id] .glass-soft";
    const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
      (el) => !el.parentElement?.closest(".reveal-init")
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-visible");
          window.setTimeout(() => {
            el.classList.remove("reveal-init", "is-visible");
            el.style.transitionDelay = "";
          }, 1500);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = `${Math.min(idx, 5) * 70}ms`;
      el.classList.add("reveal-init");
      io.observe(el);
    });
    cleanups.push(() => io.disconnect());

    /* ---------- pointer tilt ---------- */
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (canHover) {
      const tiltEls = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt], .card-hover"));
      tiltEls.forEach((el) => {
        el.setAttribute("data-tilt", "");
        let settle: number | undefined;

        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          const custom = parseFloat(el.dataset.tiltMax || "");
          const max = !Number.isNaN(custom) ? custom : r.width > 500 ? 2.5 : 7;
          const rx = (0.5 - py) * 2 * max;
          const ry = (px - 0.5) * 2 * max;
          window.clearTimeout(settle);
          el.style.transition = "transform 0.12s ease-out, box-shadow 0.25s ease, border-color 0.25s ease";
          el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(1.015,1.015,1.015)`;
          el.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
          el.classList.add("is-tilting");
        };
        const onLeave = () => {
          el.style.transition = "transform 0.6s cubic-bezier(0.2, 0.7, 0.2, 1), box-shadow 0.25s ease, border-color 0.25s ease";
          el.style.transform = "";
          el.classList.remove("is-tilting");
          settle = window.setTimeout(() => (el.style.transition = ""), 650);
        };

        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
          window.clearTimeout(settle);
        });
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
