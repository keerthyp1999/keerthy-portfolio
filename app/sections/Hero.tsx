"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "6×", label: "Pipeline throughput gain" },
  { value: "15+", label: "Source systems unified" },
  { value: "480min", label: "MTTR reduction" },
  { value: "5 yrs", label: "Enterprise data eng." },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const COUNT = 40;
    for (let i = 0; i < COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
        if (nodes[i].x < 0 || nodes[i].x > canvas.width) nodes[i].vx *= -1;
        if (nodes[i].y < 0 || nodes[i].y > canvas.height) nodes[i].vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 111, 255, ${0.12 * (1 - dist / 160)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }

        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 111, 255, 0.4)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Animated node canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,111,255,0.07) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-wire bg-surface-raised">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" />
            <span className="font-mono text-xs text-ash">Available for new opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-none mb-6 tracking-tight">
            <span className="text-white block">Keerthy</span>
            <span className="text-white block">Priya</span>
            <span className="text-white block">Vanam</span>
          </h1>

          {/* Tagline */}
          <p className="font-display text-xl md:text-2xl font-semibold mb-4">
            <span className="text-gradient">I build the pipes that power decisions.</span>
          </p>

          <p className="text-ash text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Cloud-native data engineer with 5+ years turning raw, messy data into reliable,
            high-throughput pipelines — across AWS, Azure, and Databricks — so teams can trust
            what they see in their dashboards.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="px-6 py-3 rounded bg-flow text-white font-medium text-sm hover:bg-flow-bright transition-colors duration-200 shadow-lg shadow-flow/20"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded border border-wire text-ash-light font-medium text-sm hover:border-flow hover:text-white transition-all duration-200"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/keerthy-priya-vanam"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-wire text-ash font-medium text-sm hover:border-signal hover:text-signal transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-lg border border-wire bg-surface-raised/50">
                <div className="font-display text-2xl font-bold text-gradient-flow mb-1">{s.value}</div>
                <div className="font-mono text-xs text-ash leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <div className="font-mono text-xs text-ash">scroll</div>
        <svg className="w-4 h-4 text-ash" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
