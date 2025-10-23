import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const ballsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
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

    // Utility
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
        this.num = num; // number shown
        this.color = color;
        this.vx = rand(-1.2, 1.2);
        this.vy = rand(-1.2, 1.2);
        this.mass = r * 0.28;
        this.drawOffset = rand(0, Math.PI * 2);
      }

      draw() {
        // soft radial shading for a nicer look
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

        // subtle glossy highlight
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

        // number text
        ctx.fillStyle = "#04223A";
        ctx.font = `${Math.floor(this.r * 0.9)}px system-ui, -apple-system, 'Segoe UI', Roboto`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(String(this.num), this.x, this.y + this.r * 0.03);
      }

      update(bounds) {
        // small bobbing to look lively even when velocities small
        this.x += this.vx;
        this.y += this.vy;

        // wall collisions
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

        // gentle friction so motion settles gracefully
        this.vx *= 0.9995;
        this.vy *= 0.9995;
      }
    }

    // Create balls (force exactly 5)
    function initBalls() {
      const balls = [];
      const colors = ["#FFD166", "#06D6A0", "#118AB2", "#EF476F", "#F4A261"];
      const count = 5; // exactly five balls
      const bounds = { w: canvas.clientWidth, h: canvas.clientHeight };

      for (let i = 0; i < count; i++) {
        const r = rand(30, 46);
        let x = rand(r + 8, bounds.w - r - 8);
        let y = rand(r + 8, bounds.h - r - 8);
        // avoid initial overlap simply
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

    // collision detection between balls - elastic collisions with better response
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
            // separation
            const overlap = (minDist - dist) / 2;
            const ux = dx / dist;
            const uy = dy / dist;
            A.x -= overlap * ux;
            A.y -= overlap * uy;
            B.x += overlap * ux;
            B.y += overlap * uy;

            // rotate velocities into collision axis and swap (elastic)
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

            // transient math popup
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
        // soft rounded rect with blur impression
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

    // animate
    function animate() {
      const bounds = { w: canvas.clientWidth, h: canvas.clientHeight };
      ctx.clearRect(0, 0, bounds.w, bounds.h);

      // stronger soft vignette background on canvas for depth
      const bg = ctx.createLinearGradient(0, 0, 0, bounds.h);
      bg.addColorStop(0, "rgba(255,255,255,0.06)");
      bg.addColorStop(1, "rgba(0,0,0,0.06)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, bounds.w, bounds.h);

      const balls = ballsRef.current;
      // always update — balls never pause
      for (const b of balls) {
        b.update(bounds);
      }
      handleCollisions(balls);

      // draw subtle drop shadows then balls
      for (const b of balls) {
        // shadow
        ctx.save();
        ctx.globalAlpha = 0.16; // slightly stronger shadow
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.ellipse(b.x + 6, b.y + 8, b.r * 0.9, b.r * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ball
        ctx.save();
        b.draw();
        ctx.restore();
      }

      drawEffects();

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section style={styles.section} aria-label="Learn Play Code hero">
      <style>{`
        @keyframes swing { 0% { transform: rotate(-3deg);} 50% { transform: rotate(3deg);} 100% { transform: rotate(-3deg);} }
        @keyframes floaty { 0% { transform: translateY(0) rotate(0deg); opacity: 0.18;} 50% { transform: translateY(-18px) rotate(6deg); opacity: 0.28;} 100% { transform: translateY(0) rotate(-3deg); opacity: 0.18;} }
      `}</style>

      {/* decorative soft shapes (SVG) */}
      <svg style={styles.decorativeSvg} viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path
          d="M0 120 C160 20 360 180 560 80 C720 10 820 140 1000 40 L1000 600 L0 600 Z"
          fill="url(#g1)"
        />
      </svg>

      {/* background floating numbers */}
      <div style={styles.backgroundNumbers} aria-hidden>
        <ul style={styles.bgList}>
          {Array.from({ length: 10 }).map((_, i) => {
            const dur = [10, 13, 16, 14][i % 4];
            const left = `${(i * 11) % 86 + 6}%`;
            const top = `${(i * 17) % 68 + 6}%`;
            const rotate = `${(i * 29) % 60}deg`;
            return (
              <li
                key={i}
                style={{
                  ...styles.bgNumber,
                  left,
                  top,
                  transform: `translateY(0) rotate(${rotate})`,
                  animation: `floaty ${dur}s ease-in-out infinite`,
                }}
              >
                {Math.floor(Math.random() * 9) + 1}
              </li>
            );
          })}
        </ul>
      </div>

      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.left}>
            <h1 style={styles.headline}>
              Learn <span style={styles.dotPrimary}>•</span> Play <span style={styles.dotAccent}>•</span>{" "}
              Code
            </h1>

            <p style={styles.subtext}>
              Turn math and logic into a playful journey. Solve puzzles, watch numbers dance, and
              learn coding basics through hands-on mini-games.
            </p>

            <div style={styles.controls}>
              <button style={styles.buttonPrimary} onClick={() => alert("Start: link to the playground")}>
                ▶ Start Learning
              </button>

              <button style={styles.buttonGhost} onClick={() => alert("How it works: show modal or page")}>
                How it works
              </button>
            </div>

            <div style={styles.smallNotes}>
              <span style={styles.tag}>Grades: K–9</span>
              <span style={styles.tag}>No instal—play in browser</span>
            </div>
          </div>

          {/* right - canvas card */}
          <div style={styles.canvasWrapper}>
            <div style={styles.canvasCard}>
              <canvas
                ref={canvasRef}
                style={styles.canvas}
                role="img"
                aria-label="Interactive animated canvas showing rolling math balls"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// pretty centralized styles
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    background:
      "radial-gradient(1200px 600px at 10% 10%, rgba(124,58,237,0.20) 0%, rgba(6,214,160,0.12) 30%, rgba(15,23,42,0.04) 100%)",
    paddingBottom: 32,
  },
  decorativeSvg: {
    position: "absolute",
    right: "-10%",
    top: "-6%",
    width: "55%",
    height: "46%",
    zIndex: 0,
    pointerEvents: "none",
  },
  backgroundNumbers: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
    pointerEvents: "none",
  },
  bgList: {
    width: "100%",
    height: "100%",
    position: "relative",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  bgNumber: {
    position: "absolute",
    fontSize: 36,
    fontWeight: 800,
    opacity: 0.28,
    color: "#ffffff",
    userSelect: "none",
    transformOrigin: "center",
    textShadow: "0 6px 18px rgba(2,6,23,0.18)",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "56px 28px",
    position: "relative",
    zIndex: 6,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 520px",
    gap: 32,
    alignItems: "center",
  },
  left: {
    paddingRight: 24,
  },
  headline: {
    fontSize: "clamp(32px, 5vw, 48px)",
    lineHeight: 1.02,
    fontWeight: 900,
    color: "#04223A",
    display: "inline-block",
    transformOrigin: "top center",
    animation: "swing 3.8s ease-in-out infinite",
    margin: "0 0 12px 0",
    letterSpacing: "-0.6px",
  },
  dotPrimary: {
    color: "#FFD166",
    margin: "0 6px",
    textShadow: "0 6px 20px rgba(255,209,102,0.28)",
  },
  dotAccent: {
    color: "#06D6A0",
    margin: "0 6px",
    textShadow: "0 6px 20px rgba(6,214,160,0.28)",
  },
  subtext: {
    fontSize: 16,
    color: "rgba(4,34,58,0.9)",
    maxWidth: 580,
    marginTop: 6,
  },
  controls: {
    display: "flex",
    gap: 12,
    marginTop: 20,
    alignItems: "center",
  },
  buttonPrimary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    fontSize: 15,
    fontWeight: 700,
    boxShadow: "0 10px 28px rgba(6,214,160,0.14)",
    cursor: "pointer",
  },
  buttonGhost: {
    background: "transparent",
    color: "#04223A",
    border: "1px solid rgba(4,34,58,0.08)",
    padding: "10px 14px",
    borderRadius: 12,
    fontSize: 14,
    cursor: "pointer",
  },
  smallNotes: {
    marginTop: 14,
    display: "flex",
    gap: 10,
    alignItems: "center",
    flexWrap: "wrap",
  },
  tag: {
    display: "inline-block",
    background: "rgba(255,255,255,0.46)",
    color: "#04223A",
    padding: "6px 10px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 6px 18px rgba(2,6,23,0.06)",
  },
  canvasWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  canvasCard: {
    width: "100%",
    maxWidth: 520,
    height: 360,
    borderRadius: 18,
    background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))",
    boxShadow: "0 22px 56px rgba(2,6,23,0.14), inset 0 -4px 18px rgba(255,255,255,0.7)",
    border: "1px solid rgba(2,6,23,0.08)",
    position: "relative",
    overflow: "hidden",
  },
  canvas: {
    width: "100%",
    height: "100%",
    display: "block",
    borderRadius: 18,
    cursor: "default",
    background: "linear-gradient(180deg, rgba(243,246,255,0.72), rgba(235,245,255,0.64))",
  },
};
