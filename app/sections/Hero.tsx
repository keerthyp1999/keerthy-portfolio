"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "350→150ms", label: "API latency, cut by 57%" },
  { value: "99.9%", label: "Accuracy in client-facing reports" },
  { value: "1 → 5–6", label: "Clients on one warehouse" },
  { value: "~$50K", label: "Savings from schema tooling migration" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) a.vx *= -1;
        if (a.y < 0 || a.y > canvas.height) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 160) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 111, 255, ${0.12 * (1 - dist / 160)})`;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(a.x, a.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 111, 255, 0.4)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,111,255,0.07) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-wire bg-surface-raised">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse-slow" />
            <span className="font-mono text-xs text-ash">Data Engineer · AWS · PySpark · PostgreSQL</span>
          </div>

          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-6 sm:gap-8 mb-6">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-none tracking-tight">
              <span className="text-white block">Keerthy Priya</span>
              <span className="text-white block">Vanam</span>
            </h1>
            <div className="relative shrink-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-flow to-signal opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-300" />
              <Image
                src="/headshot.jpg"
                alt="Portrait of Keerthy Priya Vanam"
                width={720}
                height={900}
                priority
                className="relative w-full h-full rounded-full object-cover object-[50%_20%] border-2 border-wire"
              />
            </div>
          </div>

          <p className="font-display text-xl md:text-2xl font-semibold mb-4">
            <span className="text-gradient">One pipeline design. Every new client.</span>
          </p>

          <p className="text-ash text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            I build metadata-driven AWS Glue and PostgreSQL platforms that let a data team add
            clients through configuration instead of new code, and keep the reports accurate
            once they get there.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#projects" className="px-6 py-3 rounded bg-flow text-white font-medium text-sm hover:bg-flow-bright transition-colors duration-200 shadow-lg shadow-flow/20">
              View projects
            </a>
            <a href="#contact" className="px-6 py-3 rounded border border-wire text-ash-light font-medium text-sm hover:border-flow hover:text-white transition-all duration-200">
              Get in touch
            </a>
            <a
              href="https://github.com/keerthyp1999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-wire text-ash font-medium text-sm hover:border-signal hover:text-signal transition-all duration-200"
            >
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-4 rounded-lg border border-wire bg-surface-raised/50">
                <div className="font-display text-xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="font-mono text-xs text-ash leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
