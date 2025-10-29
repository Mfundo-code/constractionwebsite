import React from "react";

/**
 * ServicesHero (palette-aligned) — background intensified
 */
export default function ServicesHero() {
  return (
    <section style={styles.section} aria-labelledby="services-hero-title" role="region" className="services-hero-section">
      <style jsx>{`
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(12px);} 
          to { opacity: 1; transform: translateY(0);} 
        }
        @keyframes pulse { 
          0% { transform: scale(1);} 
          50% { transform: scale(1.02);} 
          100% { transform: scale(1);} 
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .services-hero-section {
            padding: 3.5rem 1.5rem !important;
          }

          .services-hero-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .services-hero-art {
            order: -1 !important;
            justify-content: center !important;
          }

          .services-hero-panel {
            grid-column: 1 / -1 !important;
            text-align: center !important;
          }

          .services-hero-lead {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .services-hero-bg-radial {
            left: -15% !important;
            top: -5% !important;
            width: 80% !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .services-hero-section {
            padding: 3rem 1.25rem !important;
          }

          .services-hero-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .services-hero-lead {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .services-hero-mosaic {
            width: 100% !important;
            max-width: 400px !important;
            height: 200px !important;
            padding: 1.25rem !important;
          }

          .services-hero-panel {
            padding: 1.5rem !important;
          }

          .services-hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }

          .services-hero-cta-primary,
          .services-hero-cta-ghost {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }

          .services-hero-bg-radial {
            display: none !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .services-hero-section {
            padding: 2.5rem 1rem !important;
          }

          .services-hero-container {
            gap: 2rem !important;
          }

          .services-hero-title {
            font-size: 1.75rem !important;
          }

          .services-hero-lead {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .services-hero-mosaic {
            height: 180px !important;
            padding: 1rem !important;
          }

          .services-hero-panel {
            padding: 1.25rem !important;
          }

          .services-hero-list-item {
            padding: 0.75rem !important;
            text-align: left !important;
          }

          .services-hero-cta-primary {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }

          .services-hero-cta-ghost {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .services-hero-container {
            max-width: 1300px !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .services-hero-mosaic {
            animation: none !important;
          }
        }

        /* hover for pointer devices */
        @media (hover: hover) and (pointer: fine) {
          .sh-cta-primary:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 18px 48px rgba(7,124,237,0.18); 
          }
        }

        /* focus-visible for accessibility */
        .sh-cta-primary:focus-visible, .sh-cta-ghost:focus-visible { 
          outline: 3px solid rgba(124,58,237,0.18); 
          outline-offset: 3px; 
          border-radius: 10px; 
        }
      `}</style>

      {/* stronger shared radial background to align with other heroes */}
      <div style={styles.bgRadial} aria-hidden className="services-hero-bg-radial" />

      <div style={styles.container} className="services-hero-container sh-grid">
        {/* Left: artwork / mosaic */}
        <div style={styles.artWrap} className="services-hero-art sh-art" aria-hidden>
          <div style={styles.mosaic} className="services-hero-mosaic">
            <svg viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet" style={styles.mosaicSvg}>
              <rect x="6" y="6" width="60" height="48" rx="6" fill="#7c3aed" opacity="0.98" />
              <rect x="70" y="6" width="50" height="48" rx="8" fill="#06d6a0" opacity="0.98" />
              <rect x="124" y="6" width="70" height="48" rx="6" fill="#118AB2" opacity="0.98" />
              <rect x="6" y="60" width="92" height="48" rx="10" fill="#EF476F" opacity="0.98" />
              <rect x="102" y="60" width="92" height="48" rx="10" fill="#FFD166" opacity="0.98" />
              <g transform="translate(20,20)" fill="#fff" opacity="0.98">
                <circle cx="6" cy="4" r="2" />
                <path d="M2 12h8v1H2z" />
              </g>
              <g transform="translate(86,20)" fill="#04223A" opacity="0.96">
                <path d="M10 8v4l3 2" stroke="#04223A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </g>
            </svg>

            <div style={styles.mosaicBadge} aria-hidden className="services-hero-mosaic-badge">
              <div style={styles.badgeCount} className="services-hero-badge-count">5+</div>
              <div style={styles.badgeLabel} className="services-hero-badge-label">Years in schools</div>
            </div>
          </div>
        </div>

        {/* Right: content panel */}
        <div style={styles.panel} className="services-hero-panel" role="article" aria-labelledby="services-hero-title">
          <h2 id="services-hero-title" style={styles.title} className="services-hero-title">Services that bring learning to life</h2>

          <p style={styles.lead} className="services-hero-lead">
            We build playful mini-games, teacher tools, and classroom-ready packages that help learners practice
            math and logic through hands-on interactions. Safe by default, built for classroom use.
          </p>

          <ul style={styles.list} className="services-hero-list" aria-label="Key services">
            <li style={styles.listItem} className="services-hero-list-item">
              <strong>Interactive mini-games</strong>
              <div style={styles.itemSub} className="services-hero-item-sub">Short sessions that teach concepts with playful mechanics.</div>
            </li>

            <li style={styles.listItem} className="services-hero-list-item">
              <strong>Teacher dashboard</strong>
              <div style={styles.itemSub} className="services-hero-item-sub">Easy grouping, progress reports and class controls.</div>
            </li>

            <li style={styles.listItem} className="services-hero-list-item">
              <strong>Custom curriculum packs</strong>
              <div style={styles.itemSub} className="services-hero-item-sub">Standards-aligned modules for lessons and homework.</div>
            </li>
          </ul>

          <div style={styles.ctaRow} className="services-hero-cta-row">
            <button
              className="sh-cta-primary services-hero-cta-primary"
              style={styles.ctaPrimary}
              onClick={() => (window.location.hash = "#contact-sales")}
              aria-label="Contact sales"
            >
              Contact sales
            </button>

            <a
              className="sh-cta-ghost services-hero-cta-ghost"
              href="#pricing"
              style={styles.ctaGhost}
              onClick={(e) => { e.preventDefault(); window.location.hash = "#pricing"; }}
              aria-label="View pricing"
            >
              View pricing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- styles (background intensified) ---------- */
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "48px 20px",
    // stronger, palette-aligned radial background (increased opacity)
    background:
      "radial-gradient(1000px 420px at 12% 8%, rgba(124,58,237,0.22) 0%, rgba(6,214,160,0.14) 30%, rgba(250,250,255,1) 100%)",
    color: "#072039",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },

  // overlay radial soft tone for depth (made more visible)
  bgRadial: {
    position: "absolute",
    left: "-8%",
    top: "-6%",
    width: "70%",
    height: "64%",
    zIndex: 0,
    pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(124,58,237,0.14), rgba(6,214,160,0.10))",
    filter: "blur(30px)",
    transform: "rotate(-6deg)",
    opacity: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "420px 1fr",
    gap: 28,
    alignItems: "center",
  },
  artWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mosaic: {
    width: 420,
    height: 240,
    borderRadius: 16,
    padding: 18,
    // give the mosaic a subtle tinted surface so it reads more colorful
    background: "linear-gradient(180deg, rgba(124,58,237,0.03), rgba(6,214,160,0.02))",
    border: "1px solid rgba(4,34,58,0.06)",
    boxShadow: "0 16px 36px rgba(2,6,23,0.08), inset 0 -6px 18px rgba(0,0,0,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    animation: "pulse 6s ease-in-out infinite",
  },
  mosaicSvg: {
    width: "100%",
    height: "100%",
    display: "block",
    borderRadius: 12,
    transform: "translateY(0)",
  },
  mosaicBadge: {
    position: "absolute",
    left: 18,
    bottom: 18,
    // stronger badge fill to read against the more visible background
    background: "linear-gradient(180deg, rgba(124,58,237,0.14), rgba(6,214,160,0.10))",
    padding: "8px 12px",
    borderRadius: 12,
    color: "#04223A",
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontWeight: 800,
    border: "1px solid rgba(4,34,58,0.06)",
  },
  badgeCount: {
    fontSize: 16,
    letterSpacing: "-0.6px",
    color: "#04223A",
  },
  badgeLabel: {
    fontSize: 11,
    opacity: 0.95,
    fontWeight: 700,
    color: "rgba(4,34,58,0.9)",
  },

  panel: {
    padding: "28px 26px",
    borderRadius: 14,
    // slightly tinted panel so it sits comfortably on the stronger background
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    border: "1px solid rgba(4,34,58,0.06)",
    boxShadow: "0 16px 40px rgba(2,6,23,0.08)",
    color: "#04223A",
    animation: "slideUp 420ms ease both",
  },
  title: {
    margin: 0,
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.4px",
  },
  lead: {
    marginTop: 12,
    color: "rgba(4,34,58,0.82)",
    fontSize: 15,
    lineHeight: 1.6,
    maxWidth: 680,
  },

  list: {
    marginTop: 18,
    padding: 0,
    listStyle: "none",
    display: "grid",
    gap: 12,
  },
  listItem: {
    padding: "10px 12px",
    borderRadius: 10,
    background: "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,250,255,0.99))",
    border: "1px solid rgba(4,34,58,0.03)",
  },
  itemSub: {
    marginTop: 6,
    fontSize: 13,
    color: "rgba(4,34,58,0.66)",
  },

  ctaRow: {
    display: "flex",
    gap: 12,
    marginTop: 18,
    alignItems: "center",
    flexWrap: "wrap",
  },
  ctaPrimary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 10,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 10px 28px rgba(6,214,160,0.12)",
    transition: "transform 160ms ease, box-shadow 160ms ease",
  },
  ctaGhost: {
    color: "#04223A",
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 10,
    fontWeight: 700,
    background: "transparent",
    border: "1px solid rgba(4,34,58,0.06)",
  },
};