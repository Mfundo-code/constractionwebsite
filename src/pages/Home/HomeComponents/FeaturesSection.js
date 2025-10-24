import React from "react";

/**
 * FeaturesSection — simplified
 * - Spotlight panel removed (per request)
 * - Component now has a stronger background with decorative SVGs
 * - Keeps the same modern cards, animations and responsive layout
 */
export default function FeaturesSection() {
  const features = [
    {
      id: "realtime",
      title: "Real-time Feedback",
      desc: "Instant hints, answers and encouraging micro-celebrations that help learners correct mistakes and stay motivated.",
      accent: "#7c3aed",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      ),
    },
    {
      id: "adaptive",
      title: "Adaptive Levels",
      desc: "Activities adjust difficulty based on performance so learners face the right challenge—not frustration.",
      accent: "#06d6a0",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 12h18M6 6v12M18 6v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      id: "dashboard",
      title: "Teacher Dashboard",
      desc: "Quick overviews, progress reports and class controls designed for teachers and group activities.",
      accent: "#118ab2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <path d="M7 9h4M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: "safe",
      title: "Privacy-first & Safe",
      desc: "Ad-free, kid-safe defaults and local-first data options so classrooms and parents stay in control.",
      accent: "#ef476f",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l7 4v6c0 5-3.6 9.6-7 10-3.4-.4-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <path d="M9.5 12.5l1.8 1.8L15.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="features-heading">
      <style>{`
        @keyframes pop { from { opacity: 0; transform: translateY(8px) scale(.995);} to { opacity: 1; transform: translateY(0) scale(1);} }
        @keyframes floatSlow { 0% { transform: translateY(0);} 50% { transform: translateY(-6px);} 100% { transform: translateY(0);} }

        /* Hover for pointer devices */
        @media (hover: hover) and (pointer: fine) {
          .feature-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 28px 72px rgba(2,6,23,0.12); }
        }

        /* responsive */
        @media (max-width: 880px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .features-layout { grid-template-columns: 1fr; gap: 20px; }
        }
        @media (max-width: 560px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Decorative SVG shapes for depth */}
      <svg style={styles.decor1} viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path d="M0 120 C140 20 300 180 460 90 C600 20 740 140 900 60 L900 400 L0 400 Z" fill="url(#bgg1)" />
      </svg>

      <svg style={styles.decor2} viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <radialGradient id="bgg2" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#118ab2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="50" r="180" fill="url(#bgg2)" />
      </svg>

      {/* Additional decorative element */}
      <svg style={styles.decor3} viewBox="0 0 500 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg3" x1="0" x2="1">
            <stop offset="0%" stopColor="#ef476f" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d="M0 200 C150 120 250 280 400 180 L500 250 L500 300 L0 300 Z" fill="url(#bgg3)" />
      </svg>

      <div style={styles.container} className="features-layout">
        <header style={styles.header}>
          <h2 id="features-heading" style={styles.title}>Powerful features made for learning</h2>
          <p style={styles.subtitle}>
            Small, focused features that keep kids engaged while giving teachers and parents meaningful insight.
          </p>

          <div style={styles.metaRow}>
            <div style={styles.metaItem}>
              <div style={{ ...styles.metaNumber, background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>98%</div>
              <div>
                <div style={styles.metaLabel}>Satisfaction</div>
                <div style={styles.metaSub}>based on classroom pilots</div>
              </div>
            </div>

            <div style={{ ...styles.metaItem, marginLeft: 12 }}>
              <div style={{ ...styles.metaNumber, background: "linear-gradient(90deg,#118ab2,#ef476f)" }}>K–9</div>
              <div>
                <div style={styles.metaLabel}>Grade range</div>
                <div style={styles.metaSub}>Kid-friendly from kindergarten to grade 9</div>
              </div>
            </div>
          </div>
        </header>

        <div style={styles.rightColumn}>
          <div style={styles.grid} className="features-grid" role="list" aria-label="Key features">
            {features.map((f, idx) => (
              <article
                key={f.id}
                role="listitem"
                className="feature-card"
                aria-labelledby={`feature-${f.id}-title`}
                style={{
                  ...styles.card,
                  animation: `pop 420ms cubic-bezier(.2,.9,.25,1) ${idx * 80}ms both`,
                }}
              >
                <div style={{ ...styles.iconWrap, boxShadow: `0 10px 30px ${hexToRgba(f.accent, 0.10)}` }}>
                  <div style={{ ...styles.iconCircle, color: f.accent, borderColor: hexToRgba(f.accent, 0.18) }}>
                    {f.icon}
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <h3 id={`feature-${f.id}-title`} style={styles.cardTitle}>{f.title}</h3>
                  <p style={styles.cardDesc}>{f.desc}</p>
                  <div style={styles.cardActions}>
                    <a href={`#${f.id}`} style={{ ...styles.cardLink, color: f.accent }} onClick={(e) => e.preventDefault()}>
                      Learn more →
                    </a>
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

/* ---------- helpers & styles ---------- */
function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const styles = {
  section: {
    position: "relative",
    padding: "64px 20px",
    background: `
      radial-gradient(1200px 500px at 15% 15%, rgba(124,58,237,0.22) 0%, transparent 50%),
      radial-gradient(1000px 400px at 85% 25%, rgba(6,214,160,0.18) 0%, transparent 45%),
      radial-gradient(900px 450px at 35% 75%, rgba(17,138,178,0.15) 0%, transparent 50%),
      radial-gradient(800px 350px at 70% 85%, rgba(239,71,111,0.12) 0%, transparent 55%),
      linear-gradient(180deg, rgba(242,245,255,1) 0%, rgba(230,240,255,1) 100%)
    `,
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
    overflow: "hidden",
    border: "1px solid rgba(124,58,237,0.1)",
    boxShadow: "0 8px 32px rgba(124,58,237,0.08)",
  },
  decor1: {
    position: "absolute",
    top: "-8%",
    right: "-12%",
    width: "70%",
    height: "50%",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.95,
  },
  decor2: {
    position: "absolute",
    left: "-10%",
    top: "-12%",
    width: "40%",
    height: "40%",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.9,
  },
  decor3: {
    position: "absolute",
    bottom: "-15%",
    right: "20%",
    width: "50%",
    height: "40%",
    zIndex: 0,
    pointerEvents: "none",
    opacity: 0.85,
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 520px",
    gap: 28,
    alignItems: "start",
    position: "relative",
    zIndex: 2,
  },
  header: {
    gridColumn: "1 / 2",
  },
  title: {
    margin: 0,
    fontSize: "clamp(22px, 3.6vw, 32px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.6px",
  },
  subtitle: {
    marginTop: 10,
    color: "rgba(4,34,58,0.75)",
    fontSize: 15,
    maxWidth: 560,
  },
  metaRow: {
    display: "flex",
    gap: 12,
    marginTop: 18,
    alignItems: "center",
  },
  metaItem: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  metaNumber: {
    width: 56,
    height: 56,
    borderRadius: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    fontSize: 18,
  },
  metaLabel: {
    fontWeight: 800,
    fontSize: 13,
  },
  metaSub: {
    fontSize: 12,
    color: "rgba(4,34,58,0.6)",
  },

  rightColumn: {
    gridColumn: "2 / 3",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 16,
  },

  card: {
    display: "flex",
    gap: 12,
    padding: 16,
    borderRadius: 14,
    alignItems: "flex-start",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 12px 30px rgba(2,6,23,0.04)",
    transition: "transform 220ms ease, box-shadow 220ms ease",
    cursor: "default",
    minHeight: 120,
  },

  iconWrap: {
    flex: "0 0 56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    border: "1px solid rgba(2,6,23,0.04)",
    background: "linear-gradient(180deg, rgba(255,255,255,1), rgba(245,247,255,1))",
  },

  cardBody: {
    flex: 1,
  },
  cardTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
    marginBottom: 6,
  },
  cardDesc: {
    margin: 0,
    fontSize: 13,
    color: "rgba(4,34,58,0.75)",
    lineHeight: 1.5,
    marginBottom: 10,
  },
  cardActions: {
    display: "flex",
    alignItems: "center",
  },
  cardLink: {
    fontSize: 13,
    fontWeight: 800,
    textDecoration: "none",
  },
};