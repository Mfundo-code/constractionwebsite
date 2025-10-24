import React from "react";

/**
 * AboutCTA
 * - Clean, modern "About / Call to Action" strip that fits the existing visual language:
 *   glassy card, bold headline, short descriptive copy, primary CTA and secondary link.
 * - Uses inline styles + a small <style> block for keyframes & responsive tweaks (no external CSS).
 * - Accessible: roles, aria-labels and clear focus styles.
 */
export default function AboutCTA() {
  return (
    <section style={styles.section} aria-labelledby="about-cta-title">
      <style>{`
        @keyframes lift { from { transform: translateY(8px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes glow { 0% { box-shadow: 0 6px 24px rgba(124,58,237,0.06) } 50% { box-shadow: 0 18px 44px rgba(6,214,160,0.08) } 100% { box-shadow: 0 6px 24px rgba(124,58,237,0.06) } }
        @media (max-width: 820px) {
          .about-grid { grid-template-columns: 1fr; text-align: center; gap: 18px; }
          .about-visual { justify-content: center; }
        }
        /* focus-visible styles for keyboard users */
        .about-cta-button:focus-visible { outline: 3px solid rgba(124,58,237,0.18); outline-offset: 4px; }
      `}</style>

      {/* Decorative soft gradient shape */}
      <svg
        aria-hidden
        viewBox="0 0 900 400"
        preserveAspectRatio="none"
        style={styles.decor}
      >
        <defs>
          <linearGradient id="gAbout" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#06d6a0" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.00" />
          </linearGradient>
        </defs>
        <path d="M0 80 C160 0 340 160 560 80 C720 20 820 140 1000 60 L1000 400 L0 400 Z" fill="url(#gAbout)" />
      </svg>

      <div style={styles.container} className="about-grid">
        <div style={styles.left}>
          <h2 id="about-cta-title" style={styles.title}>
            Built for curious kids — and the adults who guide them
          </h2>
          <p style={styles.description}>
            We combine playful mechanics with bite-sized lessons so learners stay excited and confident.
            Safe defaults, teacher tools and quick wins — everything designed to make learning feel like play.
          </p>

          <div style={styles.ctaRow}>
            <button
              className="about-cta-button"
              style={styles.primary}
              onClick={() => (window.location.hash = "#get-started")}
              aria-label="Get started with the learning platform"
            >
              ▶ Get started
            </button>

            <a
              href="#about"
              style={styles.secondary}
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#about";
              }}
              aria-label="Learn more about our approach"
            >
              Learn about our approach →
            </a>
          </div>

          <div style={styles.kvRow} aria-hidden>
            <div style={styles.kv}>
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>K–9</div>
              <div style={styles.kvText}>
                <div style={styles.kvLabel}>Grade range</div>
                <div style={styles.kvSub}>Kindergarten — Grade 9</div>
              </div>
            </div>

            <div style={styles.kv}>
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#118ab2,#ef476f)" }}>98%</div>
              <div style={styles.kvText}>
                <div style={styles.kvLabel}>Pilot satisfaction</div>
                <div style={styles.kvSub}>Classroom pilots</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual / illustration area */}
        <div style={styles.right} className="about-visual" aria-hidden>
          <div style={styles.card}>
            <div style={styles.preview}>
              <div style={styles.previewInner}>
                <div style={styles.previewBallRow}>
                  <div style={{ ...styles.ball, background: "#FFD166" }}>5</div>
                  <div style={{ ...styles.ball, background: "#06D6A0" }}>3</div>
                  <div style={{ ...styles.ball, background: "#118AB2" }}>8</div>
                </div>
                <div style={styles.previewText}>Rolling Math — learn by playing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- inline styles ---------- */
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "56px 20px",
    background: "linear-gradient(180deg, rgba(250,251,255,1) 0%, rgba(243,246,255,1) 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  decor: {
    position: "absolute",
    right: "-6%",
    top: "-6%",
    width: "62%",
    height: "48%",
    zIndex: 0,
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 420px",
    gap: 28,
    alignItems: "center",
  },
  left: {
    paddingRight: 8,
  },
  title: {
    margin: 0,
    fontSize: "clamp(20px, 3.6vw, 30px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.4px",
    animation: "lift 420ms ease both",
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    color: "rgba(4,34,58,0.8)",
    maxWidth: 680,
    lineHeight: 1.6,
    animation: "lift 520ms ease both",
  },
  ctaRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    marginTop: 18,
  },
  primary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 12px 36px rgba(6,214,160,0.10)",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  },
  secondary: {
    color: "#04223A",
    textDecoration: "none",
    fontWeight: 700,
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.96)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },
  kvRow: {
    display: "flex",
    gap: 12,
    marginTop: 18,
    alignItems: "center",
    flexWrap: "wrap",
  },
  kv: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    background: "rgba(255,255,255,0.98)",
    padding: "8px 12px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(2,6,23,0.04)",
    border: "1px solid rgba(2,6,23,0.04)",
  },
  kvNum: {
    width: 44,
    height: 44,
    borderRadius: 10,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    fontSize: 15,
  },
  kvText: {
    display: "flex",
    flexDirection: "column",
  },
  kvLabel: {
    fontWeight: 800,
    fontSize: 13,
  },
  kvSub: {
    fontSize: 12,
    color: "rgba(4,34,58,0.6)",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },
  card: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 16,
    padding: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 18px 46px rgba(2,6,23,0.06)",
    animation: "glow 5s ease-in-out infinite",
  },
  preview: {
    height: 180,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, rgba(243,246,255,0.9), rgba(235,245,255,0.86))",
    border: "1px dashed rgba(2,6,23,0.03)",
    padding: 12,
  },
  previewInner: {
    textAlign: "center",
  },
  previewBallRow: {
    display: "flex",
    gap: 12,
    justifyContent: "center",
    marginBottom: 12,
  },
  ball: {
    width: 46,
    height: 46,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#04223A",
    boxShadow: "0 8px 20px rgba(2,6,23,0.08)",
    transform: "translateY(0)",
  },
  previewText: {
    fontSize: 13,
    color: "rgba(4,34,58,0.75)",
    fontWeight: 700,
  },
};
