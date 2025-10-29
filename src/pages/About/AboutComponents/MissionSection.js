import React from "react";

/**
 * MissionSection
 * - Short, focused mission statement with three supporting pillars.
 * - Inline styles only + a small <style> block for keyframes & responsive tweaks.
 * - Accessible headings, semantic structure, and keyboard-friendly CTA.
 */
export default function MissionSection() {
  const pillars = [
    {
      id: "joy",
      title: "Make learning joyful",
      desc: "We design playful interactions so kids stay curious — combining animation, sound and gentle rewards.",
      color: "#FFD166",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l2.6 5.6L20 9l-4 3.6L17 20l-5-2.6L7 20l1-7.4L4 9l5.4-1.4L12 2z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "growth",
      title: "Support steady growth",
      desc: "Short, scaffolded sessions adapt to each learner so progress builds naturally and confidently.",
      color: "#06D6A0",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M4 20v-7l5-5 4 4 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      id: "trust",
      title: "Be trustworthy",
      desc: "Privacy-first defaults, teacher controls and transparent data practices — we put safety first.",
      color: "#118AB2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l7 4v6a8 8 0 11-14 0V6l7-4z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="mission-title" className="mission-section">
      <style jsx>{`
        @keyframes floatSoft { 
          0% { transform: translateY(0);} 
          50% { transform: translateY(-6px);} 
          100% { transform: translateY(0);} 
        }
        @keyframes popIn { 
          from { opacity: 0; transform: translateY(8px) scale(.995);} 
          to { opacity: 1; transform: translateY(0) scale(1);} 
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .mission-section {
            padding: 3.5rem 1.5rem !important;
          }

          .mission-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .mission-header {
            grid-column: 1 / -1 !important;
            text-align: center !important;
          }

          .mission-lead {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .mission-right {
            grid-column: 1 / -1 !important;
          }

          .mission-pillars {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .mission-decor {
            right: -15% !important;
            top: -5% !important;
            width: 80% !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .mission-section {
            padding: 3rem 1.25rem !important;
          }

          .mission-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .mission-lead {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .mission-pillars {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .mission-pillar {
            min-height: auto !important;
            padding: 1.25rem !important;
          }

          .mission-footer-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1rem !important;
            text-align: center !important;
          }

          .mission-footer-text {
            max-width: 100% !important;
          }

          .mission-footer-actions {
            justify-content: center !important;
            width: 100% !important;
          }

          .mission-primary, 
          .mission-link {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }

          .mission-decor {
            display: none !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .mission-section {
            padding: 2.5rem 1rem !important;
          }

          .mission-container {
            gap: 2rem !important;
          }

          .mission-title {
            font-size: 1.75rem !important;
          }

          .mission-lead {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .mission-pillar {
            padding: 1rem !important;
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
          }

          .mission-icon-wrap {
            margin-bottom: 0.5rem !important;
          }

          .mission-footer-text {
            font-size: 0.9rem !important;
          }

          .mission-primary {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }

          .mission-link {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .mission-container {
            max-width: 1300px !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .mission-pillar {
            animation: none !important;
          }
          
          .mission-icon-circle {
            animation: none !important;
          }
        }

        /* hover lift for pointer devices */
        @media (hover:hover) and (pointer:fine) {
          .pillar-card:hover { 
            transform: translateY(-8px); 
            box-shadow: 0 28px 72px rgba(2,6,23,0.12); 
          }
        }
      `}</style>

      {/* soft decorative shape */}
      <svg 
        aria-hidden 
        viewBox="0 0 800 400" 
        preserveAspectRatio="none" 
        style={styles.decor}
        className="mission-decor"
      >
        <defs>
          <linearGradient id="mG" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.06" />
          </linearGradient>
        </defs>
        <path d="M0 160 C140 60 320 220 520 120 C680 52 760 180 900 86 L900 400 L0 400 Z" fill="url(#mG)" />
      </svg>

      <div style={styles.container} className="mission-container mission-grid">
        <header style={styles.header} className="mission-header">
          <h2 id="mission-title" style={styles.title} className="mission-title">Our mission</h2>
          <p style={styles.lead} className="mission-lead">
            We design playful, research-backed learning tools that make early math & coding approachable
            and delightful — for kids, teachers and parents.
          </p>
        </header>

        <div style={styles.right} className="mission-right">
          <div style={styles.pillars} className="mission-pillars" role="list" aria-label="Mission pillars">
            {pillars.map((p, i) => (
              <article
                key={p.id}
                role="listitem"
                className="pillar-card mission-pillar"
                aria-labelledby={`pillar-${p.id}-title`}
                style={{
                  ...styles.pillar,
                  animation: `popIn 420ms cubic-bezier(.2,.9,.25,1) ${i * 80}ms both`,
                }}
              >
                <div 
                  style={{ ...styles.iconWrap, boxShadow: `0 12px 32px ${hexToRgba(p.color, 0.12)}` }} 
                  className="mission-icon-wrap"
                >
                  <div style={{ ...styles.iconCircle, color: p.color }} className="mission-icon-circle">{p.icon}</div>
                </div>

                <div style={styles.pillarBody} className="mission-pillar-body">
                  <h3 id={`pillar-${p.id}-title`} style={styles.pillarTitle} className="mission-pillar-title">{p.title}</h3>
                  <p style={styles.pillarDesc} className="mission-pillar-desc">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div style={styles.footerRow} className="mission-footer-row">
            <p style={styles.footerText} className="mission-footer-text">
              Want to bring this to your classroom? We offer teacher-friendly plans and free pilots for schools.
            </p>

            <div style={styles.footerActions} className="mission-footer-actions">
              <button
                style={styles.primary}
                className="mission-primary"
                onClick={() => (window.location.hash = "#get-started")}
                aria-label="Get started"
              >
                ▶ Get started
              </button>
              <a 
                href="#contact" 
                style={styles.link} 
                className="mission-link"
                onClick={(e) => { e.preventDefault(); window.location.hash = "#contact"; }}
              >
                Contact sales →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* helpers */
function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* centralized inline styles */
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "64px 20px",
    background: "radial-gradient(900px 360px at 12% 8%, rgba(124,58,237,0.10), rgba(6,214,160,0.06) 35%, rgba(255,255,255,1) 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  decor: {
    position: "absolute",
    right: "-8%",
    top: "-8%",
    width: "58%",
    height: "48%",
    zIndex: 0,
    pointerEvents: "none",
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
  lead: {
    marginTop: 10,
    color: "rgba(4,34,58,0.78)",
    fontSize: 15,
    maxWidth: 600,
    lineHeight: 1.6,
  },
  right: {
    gridColumn: "2 / 3",
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  pillars: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: 12,
  },
  pillar: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: 14,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,250,255,0.98))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 12px 30px rgba(2,6,23,0.04)",
    transition: "transform 220ms ease, box-shadow 220ms ease",
    minHeight: 110,
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
    background: "linear-gradient(180deg, rgba(255,255,255,1), rgba(245,247,255,1))",
    border: "1px solid rgba(2,6,23,0.04)",
  },
  pillarBody: {
    flex: 1,
  },
  pillarTitle: {
    margin: 0,
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
    marginBottom: 6,
  },
  pillarDesc: {
    margin: 0,
    fontSize: 13,
    color: "rgba(4,34,58,0.74)",
    lineHeight: 1.5,
  },
  footerRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 6,
    flexWrap: "wrap",
  },
  footerText: {
    margin: 0,
    color: "rgba(4,34,58,0.76)",
    fontSize: 14,
    maxWidth: 420,
  },
  footerActions: { 
    display: "flex", 
    gap: 10, 
    alignItems: "center" 
  },
  primary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 12px 36px rgba(6,214,160,0.10)",
  },
  link: {
    textDecoration: "none",
    color: "#04223A",
    fontWeight: 700,
    background: "rgba(255,255,255,0.96)",
    padding: "8px 10px",
    borderRadius: 10,
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },
};