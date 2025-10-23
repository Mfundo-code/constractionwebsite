import React from "react";

/**
 * ServicesAreaSection
 * - Modern, responsive services area with a primary feature column and a grid of service cards.
 * - Uses inline styles + a small <style> block for animations & responsive CSS.
 * - Accessible: proper headings, roles, buttons and readable contrast.
 */
export default function ServicesAreaSection() {
  const areas = [
    {
      id: "play",
      title: "Playful Mini-Games",
      desc: "Short, focused games that teach arithmetic and logic — instant wins and immediate feedback.",
      accent: "#7c3aed",
    },
    {
      id: "code",
      title: "Blocks & Coding",
      desc: "Drag-and-drop activities that introduce sequencing, loops and conditionals the fun way.",
      accent: "#06d6a0",
    },
    {
      id: "track",
      title: "Progress & Rewards",
      desc: "Badges, streaks and simple charts keep learners motivated and parents informed.",
      accent: "#118ab2",
    },
    {
      id: "class",
      title: "Classroom Tools",
      desc: "Teacher controls, group assignments and safe play mode suitable for classroom use.",
      accent: "#ef476f",
    },
    {
      id: "puzzle",
      title: "Logic Puzzles",
      desc: "Brain teasers and pattern tasks that stretch reasoning without frustration.",
      accent: "#f4a261",
    },
    {
      id: "offline",
      title: "Offline Mode",
      desc: "Play without internet — cached levels and safe, ad-free experience for young learners.",
      accent: "#ffd166",
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="services-area-title">
      <style>{`
        /* subtle float for callout card */
        @keyframes floatSoft { 0% { transform: translateY(0);} 50% { transform: translateY(-6px);} 100% { transform: translateY(0);} }
        /* entrance pop */
        @keyframes pop { from { opacity: 0; transform: translateY(10px) scale(.995);} to { opacity: 1; transform: translateY(0) scale(1);} }

        /* responsive grid adjustments */
        @media (max-width: 980px) {
          .services-area-grid { grid-template-columns: 1fr; gap: 22px; }
          .services-cards { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-cards { grid-template-columns: 1fr; }
        }

        /* hover styles for pointer devices */
        @media (hover: hover) and (pointer: fine) {
          .svc-card:hover { transform: translateY(-6px) scale(1.008); box-shadow: 0 28px 68px rgba(2,6,23,0.12); }
        }
      `}</style>

      <div style={styles.container} className="services-area-grid">
        {/* Left column: intro + feature callout */}
        <div style={styles.left}>
          <h3 id="services-area-title" style={styles.heading}>Our Learning Areas</h3>
          <p style={styles.lead}>
            A playful, safe space where children explore math and coding through games, puzzles and guided lessons.
            Designed for home and classroom.
          </p>

          <div style={styles.callout} role="note" aria-label="Featured">
            <div style={styles.calloutLeft}>
              <div style={styles.calloutIcon}>🎯</div>
              <div>
                <div style={styles.calloutTitle}>Start with "Rolling Math"</div>
                <div style={styles.calloutText}>Hands-on rolling ball games that teach arithmetic while kids play.</div>
              </div>
            </div>

            <div style={styles.calloutActions}>
              <button
                style={styles.ctaPrimary}
                onClick={() => window.location.hash = "#play"}
                aria-label="Try Rolling Math"
              >
                Try it now
              </button>
              <button
                style={styles.ctaGhost}
                onClick={() => window.location.hash = "#explore"}
                aria-label="Explore lessons"
              >
                Explore lessons →
              </button>
            </div>
          </div>
        </div>

        {/* Right column: services cards */}
        <div style={styles.right}>
          <div style={styles.cardsGrid} className="services-cards" role="list" aria-label="Service offerings">
            {areas.map((a, idx) => (
              <article
                key={a.id}
                role="listitem"
                aria-labelledby={`svc-${a.id}-title`}
                className="svc-card"
                style={{
                  ...styles.card,
                  animation: `pop 420ms cubic-bezier(.2,.9,.25,1) ${idx * 60}ms both`,
                }}
              >
                <div style={{ ...styles.iconWrap, boxShadow: `0 12px 28px ${hexToRgba(a.accent, 0.12)}` }}>
                  <div style={{ ...styles.iconCircle, background: hexToRgba(a.accent, 0.10), color: a.accent }}>
                    {getIconFor(a.id)}
                  </div>
                </div>

                <div style={styles.cardBody}>
                  <h4 id={`svc-${a.id}-title`} style={styles.cardTitle}>{a.title}</h4>
                  <p style={styles.cardDesc}>{a.desc}</p>
                  <div style={styles.cardFooter}>
                    <a href={`#${a.id}`} style={{ ...styles.cardLink, color: a.accent }} onClick={(e)=>e.preventDefault()}>
                      See demo →
                    </a>
                    <div style={styles.badge}>{a.id === 'offline' ? 'Offline' : 'Popular'}</div>
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

/* ---------- small helpers & icons ---------- */
function getIconFor(id) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" };
  switch (id) {
    case "play":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
        </svg>
      );
    case "code":
      return (
        <svg {...common} aria-hidden>
          <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "track":
      return (
        <svg {...common} aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      );
    case "class":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2l7 4v6c0 5-3.6 9.6-7 10-3.4-.4-7-5-7-10V6l7-4z" fill="currentColor" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 2v6M2 12h6M22 12h-6M12 22v-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "offline":
      return (
        <svg {...common} aria-hidden>
          <path d="M12 20a8 8 0 100-16 8 8 0 000 16z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return <div style={{ fontSize: 18 }}>★</div>;
  }
}

function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

/* ---------- centralized inline styles ---------- */
const styles = {
  section: {
    padding: "56px 20px",
    background: "linear-gradient(180deg, rgba(250,251,255,1) 0%, rgba(240,246,255,1) 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(300px, 420px) 1fr",
    gap: 28,
    alignItems: "start",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
  },
  heading: {
    margin: 0,
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 900,
    color: "#04223A",
    letterSpacing: "-0.4px",
  },
  lead: {
    margin: 0,
    color: "rgba(4,34,58,0.8)",
    lineHeight: 1.6,
    fontSize: 15,
  },

  callout: {
    marginTop: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 14,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(124,58,237,0.04), rgba(6,214,160,0.03))",
    border: "1px solid rgba(2,6,23,0.04)",
    boxShadow: "0 12px 30px rgba(2,6,23,0.04)",
    animation: "floatSoft 6s ease-in-out infinite",
  },
  calloutLeft: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  calloutIcon: {
    fontSize: 28,
  },
  calloutTitle: {
    fontWeight: 800,
    fontSize: 15,
    color: "#04223A",
  },
  calloutText: {
    fontSize: 13,
    color: "rgba(4,34,58,0.75)",
  },
  calloutActions: {
    display: "flex",
    gap: 8,
    alignItems: "center",
  },
  ctaPrimary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "white",
    border: "none",
    padding: "9px 12px",
    borderRadius: 12,
    fontWeight: 800,
    cursor: "pointer",
  },
  ctaGhost: {
    background: "transparent",
    border: "1px solid rgba(4,34,58,0.06)",
    padding: "8px 10px",
    borderRadius: 10,
    cursor: "pointer",
    color: "#04223A",
  },

  right: {
    // cards area
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
  },

  card: {
    display: "flex",
    gap: 12,
    padding: 16,
    borderRadius: 12,
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
    fontSize: 20,
  },

  cardBody: {
    flex: 1,
  },
  cardTitle: {
    margin: "0 0 6px 0",
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
  },
  cardDesc: {
    margin: 0,
    fontSize: 13,
    color: "rgba(4,34,58,0.75)",
    lineHeight: 1.5,
    marginBottom: 10,
  },
  cardFooter: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardLink: {
    textDecoration: "none",
    fontWeight: 800,
  },
  badge: {
    background: "rgba(4,34,58,0.06)",
    color: "#04223A",
    padding: "6px 8px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
  },
};
