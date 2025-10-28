import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let dpr = window.devicePixelRatio || 1;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    // Utility functions
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function pickOp() {
      const ops = ["+", "-", "×", "÷"];
      return ops[Math.floor(Math.random() * ops.length)];
    }

    function compute(a, b, op) {
      if (op === "+") return a + b;
      if (op === "-") return a - b;
      if (op === "×") return a * b;
      if (op === "÷") return b === 0 ? null : +(a / b).toFixed(2);
      return null;
    }

    // Ball class
    class Ball {
      constructor(x, y, r, num, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.num = num;
        this.color = color;
        this.vx = rand(-1.2, 1.2);
        this.vy = rand(-1.2, 1.2);
        this.mass = r * 0.28;
        this.drawOffset = rand(0, Math.PI * 2);
      }

      draw() {
        const g = ctx.createRadialGradient(
          this.x - this.r * 0.25,
          this.y - this.r * 0.4,
          Math.max(2, this.r * 0.1),
          this.x,
          this.y,
          this.r * 1.2
        );
        g.addColorStop(0, this.color);
        g.addColorStop(0.9, this.color);
        g.addColorStop(1, "rgba(0,0,0,0.06)");

        ctx.beginPath();
        ctx.fillStyle = g;
        ctx.ellipse(this.x, this.y, this.r, this.r, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255,0.26)";
        ctx.ellipse(
          this.x - this.r * 0.3,
          this.y - this.r * 0.45,
          this.r * 0.5,
          this.r * 0.3,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();

        ctx.fillStyle = "#04223A";
        ctx.font = `${Math.floor(this.r * 0.9)}px system-ui, -apple-system, 'Segoe UI', Roboto`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(this.num), this.x, this.y + this.r * 0.03);
      }

      update(bounds) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x - this.r < 0) {
          this.x = this.r;
          this.vx *= -1;
        }
        if (this.x + this.r > bounds.w) {
          this.x = bounds.w - this.r;
          this.vx *= -1;
        }
        if (this.y - this.r < 0) {
          this.y = this.r;
          this.vy *= -1;
        }
        if (this.y + this.r > bounds.h) {
          this.y = bounds.h - this.r;
          this.vy *= -1;
        }

        this.vx *= 0.9995;
        this.vy *= 0.9995;
      }
    }

    function initBalls() {
      const balls = [];
      const colors = ["#FFD166", "#06D6A0", "#118AB2", "#EF476F", "#F4A261"];
      const count = 5;
      const bounds = { w: canvas.clientWidth, h: canvas.clientHeight };

      for (let i = 0; i < count; i++) {
        const r = rand(24, 36); // Reduced ball sizes
        let x = rand(r + 8, bounds.w - r - 8);
        let y = rand(r + 8, bounds.h - r - 8);
        
        let tries = 0;
        while (
          balls.some((b) => (b.x - x) ** 2 + (b.y - y) ** 2 < (b.r + r + 8) ** 2) &&
          tries < 120
        ) {
          x = rand(r + 8, bounds.w - r - 8);
          y = rand(r + 8, bounds.h - r - 8);
          tries++;
        }

        const a = Math.floor(rand(1, 10));
        const b = Math.floor(rand(1, 10));
        const op = pickOp();
        const shownNumber = Math.random() < 0.6 ? a : b;

        const ball = new Ball(x, y, r, shownNumber, colors[i % colors.length]);
        ball.meta = { a, b, op, answer: compute(a, b, op) };
        balls.push(ball);
      }

      return balls;
    }

    ballsRef.current = initBalls();

    function handleCollisions(balls) {
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const A = balls[i];
          const B = balls[j];
          const dx = B.x - A.x;
          const dy = B.y - A.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const minDist = A.r + B.r;
          if (dist < minDist) {
            const overlap = (minDist - dist) / 2;
            const ux = dx / dist;
            const uy = dy / dist;
            A.x -= overlap * ux;
            A.y -= overlap * uy;
            B.x += overlap * ux;
            B.y += overlap * uy;

            const vx1 = A.vx;
            const vy1 = A.vy;
            const vx2 = B.vx;
            const vy2 = B.vy;

            const kx = vx1 - vx2;
            const ky = vy1 - vy2;
            const p = 2 * (kx * ux + ky * uy) / (A.mass + B.mass);

            A.vx = vx1 - p * B.mass * ux;
            A.vy = vy1 - p * B.mass * uy;
            B.vx = vx2 + p * A.mass * ux;
            B.vy = vy2 + p * A.mass * uy;

            const combined = {
              x: (A.x + B.x) / 2,
              y: (A.y + B.y) / 2,
              opA: A.meta.op,
              a: A.meta.a,
              b: B.meta.b,
              ans: compute(A.meta.a, B.meta.b, A.meta.op),
            };
            transientEffects.push({ ...combined, ttl: 60, size: Math.min(1, (A.r + B.r) / 80) });
          }
        }
      }
    }

    const transientEffects = [];

    function drawEffects() {
      for (let i = transientEffects.length - 1; i >= 0; i--) {
        const e = transientEffects[i];
        const alpha = e.ttl / 60;
        ctx.save();
        ctx.globalAlpha = Math.min(1, alpha * 1.05);
        ctx.fillStyle = `rgba(2,10,23,${0.22 * alpha})`;
        const w = 120 * (0.9 + e.size);
        const h = 36 * (0.9 + e.size);
        const x = e.x - w / 2;
        const y = e.y - h / 2;
        roundRectPath(ctx, x, y, w, h, 12);
        ctx.fill();

        ctx.fillStyle = `rgba(255,255,255,${0.98 * alpha})`;
        ctx.font = `${14 + Math.round(6 * e.size)}px system-ui, -apple-system`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const text = `${e.a} ${e.opA} ${e.b} = ${e.ans}`;
        ctx.fillText(text, e.x, e.y);
        ctx.restore();

        e.ttl -= 1;
        if (e.ttl <= 0) transientEffects.splice(i, 1);
      }
    }

    function roundRectPath(ctx, x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }

    function animate() {
      const bounds = { w: canvas.clientWidth, h: canvas.clientHeight };
      ctx.clearRect(0, 0, bounds.w, bounds.h);

      const bg = ctx.createLinearGradient(0, 0, 0, bounds.h);
      bg.addColorStop(0, "rgba(255,255,255,0.06)");
      bg.addColorStop(1, "rgba(0,0,0,0.06)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, bounds.w, bounds.h);

      const balls = ballsRef.current;
      for (const b of balls) {
        b.update(bounds);
      }
      handleCollisions(balls);

      for (const b of balls) {
        ctx.save();
        ctx.globalAlpha = 0.16;
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.ellipse(b.x + 6, b.y + 8, b.r * 0.9, b.r * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.save();
        b.draw();
        ctx.restore();
      }

      drawEffects();
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <style jsx>{`
        @keyframes pop { 
          from { opacity: 0; transform: translateY(8px) scale(.995); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }

        .hero-section {
          position: relative;
          padding: 4rem 1.25rem;
          background: radial-gradient(1200px 500px at 15% 15%, rgba(124,58,237,0.22) 0%, transparent 50%),
            radial-gradient(1000px 400px at 85% 25%, rgba(6,214,160,0.18) 0%, transparent 45%),
            radial-gradient(900px 450px at 35% 75%, rgba(17,138,178,0.15) 0%, transparent 50%),
            radial-gradient(800px 350px at 70% 85%, rgba(239,71,111,0.12) 0%, transparent 55%),
            linear-gradient(180deg, rgba(242,245,255,1) 0%, rgba(230,240,255,1) 100%);
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          color: #072039;
          overflow: hidden;
          border: 1px solid rgba(124,58,237,0.1);
          box-shadow: 0 8px 32px rgba(124,58,237,0.08);
        }

        .decor1 {
          position: absolute;
          top: -8%;
          right: -12%;
          width: 70%;
          height: 50%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.95;
        }

        .decor2 {
          position: absolute;
          left: -10%;
          top: -12%;
          width: 40%;
          height: 40%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.9;
        }

        .decor3 {
          position: absolute;
          bottom: -15%;
          right: 20%;
          width: 50%;
          height: 40%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.85;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 1.75rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .header {
          grid-column: 1 / 2;
        }

        .title {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          color: #04223A;
          letter-spacing: -0.8px;
          line-height: 1.1;
        }

        .highlight {
          color: #7c3aed;
        }

        .subtitle {
          margin-top: 1rem;
          color: rgba(4,34,58,0.75);
          font-size: 1.125rem;
          max-width: 560px;
          line-height: 1.6;
        }

        .meta-row {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .meta-number {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 0.75rem;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.125rem;
          flex-shrink: 0;
        }

        .meta-label {
          font-weight: 800;
          font-size: 0.8125rem;
        }

        .meta-sub {
          font-size: 0.75rem;
          color: rgba(4,34,58,0.6);
        }

        .right-column {
          grid-column: 2 / 3;
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }

        .canvas-card {
          padding: 1.5rem; /* Reduced padding */
          border-radius: 1.125rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96));
          border: 1px solid rgba(2,6,23,0.04);
          box-shadow: 0 12px 30px rgba(2,6,23,0.04);
          animation: pop 420ms cubic-bezier(.2,.9,.25,1) 80ms both;
          position: relative;
          overflow: hidden;
        }

        .canvas-wrapper {
          width: 100%;
          height: 240px; /* Reduced from 360px to 240px */
          border-radius: 0.875rem;
          background: linear-gradient(180deg, rgba(243,246,255,0.72), rgba(235,245,255,0.64));
          overflow: hidden;
        }

        .canvas {
          width: 100%;
          height: 100%;
          display: block;
          border-radius: 0.875rem;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .hero-section {
            padding: 3.5rem 1.5rem;
          }

          .container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .header {
            grid-column: 1 / -1;
            text-align: center;
          }

          .subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .meta-row {
            justify-content: center;
          }

          .right-column {
            grid-column: 1 / -1;
          }

          .decor1 {
            right: -15%;
            top: -5%;
            width: 80%;
          }

          .decor2 {
            left: -15%;
            top: -8%;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.25rem;
          }

          .title {
            font-size: clamp(1.75rem, 6vw, 2.5rem);
          }

          .subtitle {
            font-size: 1rem;
            max-width: 480px;
          }

          .meta-row {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .meta-item {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .canvas-card {
            padding: 1.25rem; /* Reduced mobile padding */
          }

          .canvas-wrapper {
            height: 200px; /* Reduced mobile height */
          }

          .decor1,
          .decor2,
          .decor3 {
            display: none;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .hero-section {
            padding: 2.5rem 1rem;
          }

          .container {
            gap: 2rem;
          }

          .title {
            font-size: 1.75rem;
          }

          .subtitle {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }

          .canvas-card {
            padding: 1rem; /* Further reduced mobile padding */
          }

          .canvas-wrapper {
            height: 180px; /* Further reduced mobile height */
          }

          .meta-number {
            width: 3rem;
            height: 3rem;
            font-size: 1rem;
          }

          .meta-label {
            font-size: 0.75rem;
          }

          .meta-sub {
            font-size: 0.7rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .container {
            max-width: 1300px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .canvas-card {
            animation: none !important;
          }
        }
      `}</style>

      {/* Decorative SVG shapes for depth - same as features section */}
      <svg className="decor1" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path d="M0 120 C140 20 300 180 460 90 C600 20 740 140 900 60 L900 400 L0 400 Z" fill="url(#bgg1)" />
      </svg>

      <svg className="decor2" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <radialGradient id="bgg2" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#118ab2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="50" r="180" fill="url(#bgg2)" />
      </svg>

      <svg className="decor3" viewBox="0 0 500 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg3" x1="0" x2="1">
            <stop offset="0%" stopColor="#ef476f" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d="M0 200 C150 120 250 280 400 180 L500 250 L500 300 L0 300 Z" fill="url(#bgg3)" />
      </svg>

      <div className="container">
        <header className="header">
          <h1 id="hero-heading" className="title">
            Learn <span className="highlight">•</span> Play <span className="highlight">•</span> Code
          </h1>
          <p className="subtitle">
            Turn math and logic into a playful journey. Solve puzzles, watch numbers dance, and
            learn coding basics through hands-on mini-games designed for K-9 students.
          </p>

          <div className="meta-row">
            <div className="meta-item">
              <div className="meta-number" style={{ background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>K-9</div>
              <div>
                <div className="meta-label">Grade Range</div>
                <div className="meta-sub">Perfect for elementary & middle school</div>
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-number" style={{ background: "linear-gradient(90deg,#118ab2,#ef476f)" }}>100%</div>
              <div>
                <div className="meta-label">Free Access</div>
                <div className="meta-sub">No installation required</div>
              </div>
            </div>
          </div>
        </header>

        <div className="right-column">
          <div className="canvas-card" role="complementary" aria-label="Interactive math balls demo">
            <div className="canvas-wrapper">
              <canvas
                ref={canvasRef}
                className="canvas"
                role="img"
                aria-label="Interactive animated canvas showing rolling math balls that display equations when they collide"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}