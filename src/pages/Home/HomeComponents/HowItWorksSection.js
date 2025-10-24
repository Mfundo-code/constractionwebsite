import React from "react";

/**
 * HowItWorksSection
 * - 3-step, accessible explanation with subtle animations and CTAs.
 * - Uses inline styles + a small <style> block for keyframes & responsive rules.
 */
export default function HowItWorksSection() {
  const steps = [
    {
      id: "choose",
      title: "Choose a Game",
      desc: "Pick a fun activity — Rolling Math, Counting Race, or Logic Puzzles. Each game shows the learning goal so kids know what they'll practice.",
      accent: "#7c3aed",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "play",
      title: "Play & Solve",
      desc: "Interactive rounds guide learners with hints, feedback and friendly celebrations. Colliding balls show math facts and answers as they bounce.",
      accent: "#06d6a0",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "track",
      title: "Track Progress",
      desc: "Badges, streaks and a simple dashboard keep motivation up. Teachers and parents can review progress at a glance.",
      accent: "#118ab2",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="how-title">
      {/* keyframes & small responsive rules */}
      <style>{`
        @keyframes floatSoft { 0% { transform: translateY(0);} 50% { transform: translateY(-6px);} 100% { transform: translateY(0);} }
        @keyframes popIn { from { opacity: 0; transform: translateY(8px) scale(.995);} to { opacity: 1; transform: translateY(0) scale(1);} }

        /* responsive grid rules */
        @media (max-width: 920px) {
          .hiw-grid { grid-template-columns: 1fr; gap: 20px; }
          .hiw-steps { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .hiw-steps { grid-template-columns: 1fr; }
        }

        /* hover on pointer devices */
        @media (hover:hover) and (pointer:fine) {
          .hiw-step:hover { transform: translateY(-6px) scale(1.006); box-shadow: 0 28px 68px rgba(2,6,23,0.12); }
        }
      `}</style>

      <div style={styles.container} className="hiw-grid">
        {/* Left — intro + headline */}
        <div style={styles.left}>
          <h2 id="how-title" style={styles.title}>
            How it works
          </h2>
          <p style={styles.lead}>
            Short, playful sessions that teach math and logic. Pick a game, play rounds, and watch progress add up.
            Everything is safe, friendly, and designed for kids.
          </p>

          <div style={styles.kvRow}>
            <div style={styles.kv}>
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>1</div>
              <div>
                <div style={styles.kvTitle}>Fast setup</div>
                <div style={styles.kvText}>No install — play in the browser on any device.</div>
              </div>
            </div>

            <div style={styles.kv}>
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#06d6a0,#118ab2)" }}>2</div>
              <div>
                <div style={styles.kvTitle}>Kid-first controls</div>
                <div style={styles.kvText}>Big buttons, clear goals, and safe defaults for classrooms.</div>
              </div>
            </div>
          </div>

          <div style={styles.ctaRow}>
            <button style={styles.primary} onClick={() => (window.location.hash = "#play")} aria-label="Start playing">
              ▶ Try a demo
            </button>
            <a href="#learn-more" style={styles.ghost}>
              Learn more →
            </a>
          </div>
        </div>

        {/* Right — step cards */}
        <div style={styles.right}>
          <div className="hiw-steps" style={styles.steps} role="list" aria-label="How it works steps">
            {steps.map((s, i) => (
              <article
                key={s.id}
                className="hiw-step"
                role="listitem"
                aria-labelledby={`step-${s.id}-title`}
                style={{
                  ...styles.stepCard,
                  animation: `popIn 420ms cubic-bezier(.2,.9,.25,1) ${i * 80}ms both`,
                }}
              >
                <div style={{ ...styles.stepIconWrap, boxShadow: `0 12px 28px ${hexToRgba(s.accent, 0.12)}` }}>
                  <div style={{ ...styles.stepIconCircle, color: s.accent }}>{s.icon}</div>
                </div>

                <div style={styles.stepBody}>
                  <h3 id={`step-${s.id}-title`} style={styles.stepTitle}>{s.title}</h3>
                  <p style={styles.stepDesc}>{s.desc}</p>
                  <div style={styles.stepFooter}>
                    <a href={`#${s.id}`} style={{ ...styles.stepLink, color: s.accent }} onClick={(e) => e.preventDefault()}>
                      See example →
                    </a>
                    <div style={styles.dot} aria-hidden />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* ---------- centralized styles ---------- */
const styles = {
  section: {
    padding: "56px 20px",
    background: `
      radial-gradient(800px 400px at 15% 10%, rgba(124,58,237,0.15) 0%, transparent 60%),
      radial-gradient(700px 350px at 85% 30%, rgba(6,214,160,0.12) 0%, transparent 55%),
      radial-gradient(600px 300px at 40% 80%, rgba(17,138,178,0.1) 0%, transparent 50%),
      linear-gradient(180deg, rgba(245,248,255,1) 0%, rgba(235,245,255,1) 100%)
    `,
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
    border: "1px solid rgba(124,58,237,0.08)",
    boxShadow: "0 4px 24px rgba(124,58,237,0.06)",
    position: "relative",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 480px",
    gap: 28,
    alignItems: "start",
  },

  left: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  title: {
    margin: 0,
    fontSize: "clamp(24px, 3.6vw, 36px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.6px",
  },
  lead: {
    margin: 0,
    color: "rgba(4,34,58,0.8)",
    maxWidth: 680,
    fontSize: 15,
    lineHeight: 1.6,
  },

  kvRow: {
    display: "flex",
    gap: 12,
    marginTop: 6,
    flexWrap: "wrap",
  },
  kv: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    minWidth: 240,
    background: "rgba(255,255,255,0.98)",
    padding: "10px 12px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(2,6,23,0.04)",
    border: "1px solid rgba(2,6,23,0.04)",
  },
  kvNum: {
    width: 40,
    height: 40,
    borderRadius: 10,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 15,
  },
  kvTitle: {
    fontWeight: 800,
    fontSize: 13,
    marginBottom: 2,
  },
  kvText: {
    fontSize: 13,
    color: "rgba(4,34,58,0.75)",
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginTop: 10,
  },
  primary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 12px 36px rgba(6,214,160,0.12)",
  },
  ghost: {
    color: "#04223A",
    textDecoration: "none",
    fontWeight: 700,
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },

  right: {
    // container for steps
  },
  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: 12,
    alignItems: "start",
  },

  stepCard: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 12px 30px rgba(2,6,23,0.04)",
    minHeight: 112,
    transition: "transform 220ms ease, box-shadow 220ms ease",
    cursor: "default",
  },
  stepIconWrap: {
    flex: "0 0 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  stepIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    background: "rgba(0,0,0,0.02)",
  },
  stepBody: {
    flex: 1,
  },
  stepTitle: {
    margin: "0 0 6px 0",
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
  },
  stepDesc: {
    margin: 0,
    fontSize: 13,
    color: "rgba(4,34,58,0.76)",
    lineHeight: 1.5,
  },
  stepFooter: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  stepLink: {
    fontWeight: 800,
    textDecoration: "none",
    fontSize: 13,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: "rgba(4,34,58,0.06)",
  },
};