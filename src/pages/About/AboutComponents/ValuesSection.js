import React from "react";

/**
 * ValuesSection
 * - Modern, responsive "Our Values" section that matches the visual language used across the app.
 * - Inline styles only + a small <style> block for keyframes & responsive tweaks.
 * - Accessible markup, semantic headings, and subtle micro-animations.
 */
export default function ValuesSection() {
  const values = [
    {
      id: "curiosity",
      title: "Curiosity First",
      desc: "We design experiences that spark wonder — encouraging questions, experimenting and exploration.",
      color: "#FFD166",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M12 2a6 6 0 00-6 6c0 3 2 4 2 6s-1 4 4 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        </svg>
      ),
    },
    {
      id: "empathy",
      title: "Empathy",
      desc: "We build with children, teachers and parents in mind — sensitive to needs, differences and contexts.",
      color: "#06D6A0",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M20.8 7.2a5.4 5.4 0 00-7.6 0L12 8.4l-1.2-1.2a5.4 5.4 0 00-7.6 7.6L12 22l9.6-9.6a5.4 5.4 0 000-7.2z" stroke="currentColor" strokeWidth="0.8" fill="none"/>
        </svg>
      ),
    },
    {
      id: "integrity",
      title: "Integrity",
      desc: "Transparent about what we collect and why. No dark patterns — honest defaults and clear choices.",
      color: "#118AB2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M12 2l7 4v6a8 8 0 11-14 0V6l7-4z" stroke="currentColor" strokeWidth="1.1" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      id: "inclusion",
      title: "Inclusion",
      desc: "Accessible and welcoming — simple language, adjustable difficulty and diversity in examples.",
      color: "#EF476F",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
          <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.1" fill="none"/>
          <path d="M4 20v-1a6 6 0 0112 0v1" stroke="currentColor" strokeWidth="1.1" fill="none"/>
        </svg>
      ),
    },
    {
      id: "play",
      title: "Playful Learning",
      desc: "Learning happens through play — tiny wins, curiosity loops and low-stakes experimentation.",
      color: "#F4A261",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
          <path d="M5 3v18l15-9L5 3z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="values-heading">
      <style>{`
        @keyframes rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes softFloat { 0% { transform: translateY(0);} 50% { transform: translateY(-6px);} 100% { transform: translateY(0);} }

        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .value-card { transition: transform 220ms ease, box-shadow 220ms ease; }
        @media (hover: hover) and (pointer: fine) {
          .value-card:hover { transform: translateY(-8px); box-shadow: 0 28px 70px rgba(2,6,23,0.10); }
        }

        /* responsive */
        @media (max-width: 960px) {
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* decorative background circle */}
      <svg aria-hidden viewBox="0 0 600 400" preserveAspectRatio="none" style={styles.bgDecor}>
        <defs>
          <radialGradient id="valG" cx="40%" cy="20%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="520" cy="40" r="260" fill="rgba(124,58,237,0.08)" />
      </svg>

      <div style={styles.container}>
        <header style={styles.header}>
          <h2 id="values-heading" style={styles.title}>Our values</h2>
          <p style={styles.subtitle}>
            What guides our product decisions — simple principles that keep learning safe, delightful and effective.
          </p>
        </header>

        <div style={styles.gridWrap}>
          <div className="values-grid" style={styles.grid} role="list" aria-label="Core values">
            {values.map((v, i) => (
              <article
                key={v.id}
                role="listitem"
                aria-labelledby={`value-${v.id}-title`}
                className="value-card"
                style={{
                  ...styles.card,
                  animation: `rise 420ms cubic-bezier(.2,.9,.25,1) ${i * 70}ms both`,
                }}
              >
                <div style={{ ...styles.iconWrap, boxShadow: `0 12px 36px ${hexToRgba(v.color, 0.10)}` }}>
                  <div style={{ ...styles.iconCircle, borderColor: hexToRgba(v.color, 0.18), color: v.color }}>
                    {v.icon}
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <h3 id={`value-${v.id}-title`} style={styles.cardTitle}>{v.title}</h3>
                  <p style={styles.cardDesc}>{v.desc}</p>
                </div>
              </article>
            ))}
          </div>

          {/* small CTA under values */}
          <div style={styles.ctaRow}>
            <button
              style={styles.primaryBtn}
              onClick={() => (window.location.hash = "#get-involved")}
              aria-label="Get involved"
            >
              Join our mission
            </button>
            <a
              href="#transparency"
              style={styles.link}
              onClick={(e) => { e.preventDefault(); window.location.hash = "#transparency"; }}
            >
              Read our privacy & safety → 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers & styles ---------- */
function hexToRgba(hex, a = 1) {
  const h = String(hex).replace("#", "");
  const hx = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "64px 20px",
    background: "linear-gradient(180deg, #fbfdff 0%, #f6f9ff 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  bgDecor: {
    position: "absolute",
    right: "-6%",
    top: "-10%",
    width: "48%",
    height: "48%",
    zIndex: 0,
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
  },
  header: {
    marginBottom: 18,
  },
  title: {
    margin: 0,
    fontSize: "clamp(22px, 3.6vw, 30px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.4px",
  },
  subtitle: {
    marginTop: 8,
    color: "rgba(4,34,58,0.75)",
    fontSize: 15,
    maxWidth: 720,
  },

  gridWrap: {
    marginTop: 18,
  },
  grid: {
    gap: 18,
  },

  card: {
    display: "flex",
    gap: 12,
    padding: 16,
    borderRadius: 12,
    alignItems: "flex-start",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 12px 30px rgba(2,6,23,0.04)",
    minHeight: 110,
  },

  iconWrap: {
    flex: "0 0 54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCircle: {
    width: 54,
    height: 54,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    background: "linear-gradient(180deg, rgba(255,255,255,1), rgba(245,247,255,1))",
    border: "1px solid rgba(2,6,23,0.04)",
  },

  cardBody: { flex: 1 },
  cardTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
  },
  cardDesc: {
    marginTop: 6,
    fontSize: 13,
    color: "rgba(4,34,58,0.72)",
    lineHeight: 1.5,
  },

  ctaRow: {
    marginTop: 22,
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 28px rgba(6,214,160,0.12)",
  },
  link: {
    fontWeight: 800,
    color: "rgba(4,34,58,0.9)",
    textDecoration: "none",
    padding: "8px 10px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.98)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },
};
