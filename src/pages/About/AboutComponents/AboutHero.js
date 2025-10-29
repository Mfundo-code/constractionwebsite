import React from "react";

/**
 * AboutHero
 * - Two-column hero for the About page: headline, short story, CTAs, and visual illustration.
 * - Inline styles + a small <style> block for keyframes & responsive rules.
 * - Accessible: headings, aria-labels, focus-visible styles.
 */
export default function AboutHero() {
  return (
    <section style={styles.section} aria-labelledby="about-hero-title" role="region">
      <style jsx>{`
        /* subtle floating for decorative circles */
        @keyframes floatSlow { 
          0% { transform: translateY(0);} 
          50% { transform: translateY(-8px);} 
          100% { transform: translateY(0);} 
        }
        /* fade-up entrance */
        @keyframes fadeUp { 
          from { opacity: 0; transform: translateY(10px);} 
          to { opacity: 1; transform: translateY(0);} 
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .about-hero-section {
            padding: 3.5rem 1.5rem !important;
          }

          .about-hero-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .about-hero-left {
            grid-column: 1 / -1 !important;
            text-align: center !important;
            padding-right: 0 !important;
          }

          .about-hero-lead {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .about-hero-kv-row {
            justify-content: center !important;
          }

          .about-hero-right {
            grid-column: 1 / -1 !important;
            justify-content: center !important;
          }

          .about-hero-decor-top {
            right: -15% !important;
            top: -5% !important;
            width: 80% !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .about-hero-section {
            padding: 3rem 1.25rem !important;
          }

          .about-hero-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .about-hero-lead {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .about-hero-kv-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
          }

          .about-hero-kv {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
          }

          .about-hero-card {
            padding: 1.25rem !important;
          }

          .about-hero-visual-area {
            min-height: 200px !important;
          }

          .about-hero-decor-top {
            display: none !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .about-hero-section {
            padding: 2.5rem 1rem !important;
          }

          .about-hero-container {
            gap: 2rem !important;
          }

          .about-hero-title {
            font-size: 1.75rem !important;
          }

          .about-hero-lead {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .about-hero-card {
            padding: 1rem !important;
          }

          .about-hero-visual-area {
            min-height: 180px !important;
          }

          .about-hero-kv-num {
            width: 3rem !important;
            height: 3rem !important;
            font-size: 1rem !important;
          }

          .about-hero-kv-label {
            font-size: 0.75rem !important;
          }

          .about-hero-kv-sub {
            font-size: 0.7rem !important;
          }

          .about-hero-cta-row {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }

          .about-hero-primary, 
          .about-hero-secondary {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .about-hero-container {
            max-width: 1300px !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .about-hero-card {
            animation: none !important;
          }
          
          .about-hero-circle {
            animation: none !important;
          }
        }

        /* keyboard focus visible */
        .about-cta:focus-visible { 
          outline: 3px solid rgba(124,58,237,0.18); 
          outline-offset: 4px; 
          border-radius: 12px; 
        }

        /* hover (pointer devices) */
        @media (hover: hover) and (pointer: fine) {
          .about-card:hover { 
            transform: translateY(-6px); 
            box-shadow: 0 28px 68px rgba(2,6,23,0.12); 
          }
          .btn-primary:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 14px 36px rgba(6,214,160,0.12); 
          }
        }
      `}</style>

      {/* decorative background shapes (absolute) */}
      <svg 
        aria-hidden 
        viewBox="0 0 900 400" 
        preserveAspectRatio="none" 
        style={styles.decorTop}
        className="about-hero-decor-top"
      >
        <defs>
          <linearGradient id="ahG1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.16" />
          </linearGradient>
        </defs>
        <path d="M0 80 C160 0 340 160 560 80 C720 20 820 140 900 60 L900 400 L0 400 Z" fill="url(#ahG1)"/>
      </svg>

      <div style={styles.container} className="about-hero-container about-grid">
        {/* Left: copy */}
        <div style={styles.left} className="about-hero-left">
          <h1 id="about-hero-title" style={styles.title} className="about-hero-title">
            We make learning feel like play
          </h1>

          <p style={styles.lead} className="about-hero-lead">
            Playful micro-games, gentle progression and instant feedback — built for curious kids and the teachers who guide them.
            We combine delightful animation with research-backed learning patterns so every session is short, fun and meaningful.
          </p>

          <div style={styles.kvRow} aria-hidden className="about-hero-kv-row">
            <div style={styles.kv} className="about-hero-kv">
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }} className="about-hero-kv-num">K–9</div>
              <div style={styles.kvText} className="about-hero-kv-text">
                <div style={styles.kvLabel} className="about-hero-kv-label">Grade range</div>
                <div style={styles.kvSub} className="about-hero-kv-sub">Kid-friendly from kindergarten to grade 9</div>
              </div>
            </div>

            <div style={styles.kv} className="about-hero-kv">
              <div style={{ ...styles.kvNum, background: "linear-gradient(90deg,#118ab2,#ef476f)" }} className="about-hero-kv-num">98%</div>
              <div style={styles.kvText} className="about-hero-kv-text">
                <div style={styles.kvLabel} className="about-hero-kv-label">Pilot satisfaction</div>
                <div style={styles.kvSub} className="about-hero-kv-sub">Teachers & classrooms</div>
              </div>
            </div>
          </div>

          <div style={styles.ctaRow} className="about-hero-cta-row">
            <button
              className="about-cta btn-primary about-hero-primary"
              style={styles.primary}
              onClick={() => (window.location.hash = "#get-started")}
              aria-label="Get started"
            >
              ▶ Get started
            </button>

            <a
              className="about-cta about-hero-secondary"
              href="#our-mission"
              style={styles.secondary}
              onClick={(e) => { e.preventDefault(); window.location.hash = "#our-mission"; }}
              aria-label="Learn our mission"
            >
              Learn our mission →
            </a>
          </div>
        </div>

        {/* Right: visual illustration */}
        <div style={styles.right} className="about-hero-right about-visual" aria-hidden>
          <div style={styles.card} className="about-hero-card about-card" role="img" aria-label="Illustration showing playful learning">
            {/* floating circles to suggest rolling balls */}
            <div style={styles.visualArea} className="about-hero-visual-area">
              <div style={{ ...styles.circle, background: "#FFD166", left: "12%", top: "28%", animationDelay: "0s" }} className="about-hero-circle">5</div>
              <div style={{ ...styles.circle, background: "#06D6A0", left: "44%", top: "12%", animationDelay: "0.3s" }} className="about-hero-circle">3</div>
              <div style={{ ...styles.circle, background: "#118AB2", left: "72%", top: "36%", animationDelay: "0.6s" }} className="about-hero-circle">8</div>

              <div style={styles.visualText} className="about-hero-visual-text">
                <strong>Rolling Math</strong>
                <div style={{ marginTop: 6, color: "rgba(4,34,58,0.65)", fontSize: 13 }}>
                  Collisions reveal quick math facts — learn while you play.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- styles ---------- */
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "72px 20px",
    background: "radial-gradient(800px 360px at 12% 8%, rgba(124,58,237,0.18), rgba(6,214,160,0.12) 35%, rgba(250,250,255,1) 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  decorTop: {
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
    gridTemplateColumns: "1fr 480px",
    gap: 32,
    alignItems: "center",
  },
  left: {
    paddingRight: 8,
    animation: "fadeUp 420ms ease both",
  },
  title: {
    margin: 0,
    fontSize: "clamp(28px, 4.5vw, 44px)",
    fontWeight: 900,
    color: "#04223A",
    lineHeight: 1.02,
    letterSpacing: "-0.6px",
  },
  lead: {
    marginTop: 12,
    color: "rgba(4,34,58,0.85)",
    fontSize: 16,
    maxWidth: 680,
    lineHeight: 1.6,
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
    background: "rgba(255,255,255,1)",
    padding: "8px 12px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
    border: "1px solid rgba(2,6,23,0.08)",
  },
  kvNum: {
    width: 48,
    height: 48,
    borderRadius: 12,
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
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

  ctaRow: {
    display: "flex",
    gap: 12,
    marginTop: 22,
    alignItems: "center",
  },
  primary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 12,
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 12px 36px rgba(6,214,160,0.15)",
    transition: "transform 180ms ease, box-shadow 180ms ease",
  },
  secondary: {
    display: "inline-block",
    color: "#04223A",
    textDecoration: "none",
    fontWeight: 700,
    padding: "10px 12px",
    borderRadius: 10,
    background: "rgba(255,255,255,1)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.08)",
  },

  right: {
    display: "flex",
    justifyContent: "flex-end",
  },
  card: {
    width: "100%",
    maxWidth: 480,
    borderRadius: 16,
    padding: 16,
    background: "linear-gradient(180deg, rgba(255,255,255,1), rgba(250,250,255,1))",
    border: "1px solid rgba(2,6,23,0.08)",
    boxShadow: "0 18px 46px rgba(2,6,23,0.08)",
    position: "relative",
    overflow: "hidden",
  },

  visualArea: {
    minHeight: 220,
    position: "relative",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg, rgba(243,246,255,1), rgba(235,245,255,1))",
    padding: 16,
  },
  circle: {
    position: "absolute",
    width: 56,
    height: 56,
    borderRadius: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
    color: "#04223A",
    boxShadow: "0 10px 28px rgba(2,6,23,0.12)",
    animationName: "floatSlow",
    animationDuration: "5s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    transform: "translateY(0)",
    opacity: 1,
  },
  visualText: {
    position: "relative",
    textAlign: "center",
    zIndex: 2,
    background: "rgba(255,255,255,1)",
    padding: "10px 14px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
    fontWeight: 700,
    color: "#04223A",
  },
};