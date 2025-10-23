import React from "react";

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Interactive Math Games",
      desc: "Play fast mini-games that teach addition, subtraction, multiplication and division through fun levels and real-time feedback.",
      accent: "#7c3aed",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 15v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 17v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 13v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 16v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="3" width="20" height="18" rx="3" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Guided Coding Lessons",
      desc: "Step-by-step, playful lessons that introduce logic, sequencing and basic coding concepts suitable for kids.",
      accent: "#06d6a0",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M16 18l6-6-6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Progress Dashboard",
      desc: "Track progress with badges, streaks and simple visual charts so learners (and parents) can celebrate wins.",
      accent: "#118ab2",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Safe Play Mode",
      desc: "Offline-friendly and ad-free mode with strict privacy defaults — built for classrooms and young kids.",
      accent: "#ef476f",
      icon: (
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2l7 4v6c0 5-3.6 9.6-7 10-3.4-.4-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 12.5l1.8 1.8L15.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="services-heading">
      <style>{`
        @keyframes cardFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @keyframes popIn {
          from { opacity: 0; transform: translateY(8px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* small responsive tweaks for the grid */
        @media (max-width: 880px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={styles.header}>
        <div>
          <h2 id="services-heading" style={styles.title}>What you can do</h2>
          <p style={styles.lead}>Playable lessons, playful learning — built for learners and classrooms. Pick an activity and get started in seconds.</p>
        </div>
        <div style={styles.ctaWrap}>
          <button style={styles.ghostBtn} onClick={() => window.location.href = "#learn-more"} aria-label="Explore learning library">
            Explore Library →
          </button>
        </div>
      </div>

      <div className="services-grid" style={styles.grid} role="list">
        {services.map((s, i) => (
          <article
            key={s.id}
            role="listitem"
            aria-labelledby={`svc-${s.id}-title`}
            style={{
              ...styles.card,
              animation: `popIn 420ms cubic-bezier(.2,.9,.25,1) ${i * 80}ms both`,
            }}
          >
            <div style={{ ...styles.iconWrap, boxShadow: `0 10px 30px ${hexToRgba(s.accent, 0.12)}` }}>
              <div style={{ ...styles.iconCircle, background: `linear-gradient(180deg, ${hexToRgba(s.accent, 0.14)}, ${hexToRgba(s.accent, 0.06)})`, color: s.accent }}>
                {s.icon}
              </div>
            </div>

            <div style={styles.cardBody}>
              <h3 id={`svc-${s.id}-title`} style={styles.cardTitle}>{s.title}</h3>
              <p style={styles.cardDesc}>{s.desc}</p>
              <div style={styles.cardActions}>
                <a
                  href="#"
                  style={{ ...styles.link, color: s.accent }}
                  onClick={(e) => e.preventDefault()}
                >
                  Learn more →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- helpers & centralized styles ---------- */
function hexToRgba(hex, a = 1) {
  // accept #rgb, #rrggbb
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3 ? h.split("").map(c => c+c).join("") : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const styles = {
  section: {
    padding: "56px 20px",
    maxWidth: 1180,
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
  header: {
    display: "flex",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    flexWrap: "wrap",
  },
  title: {
    margin: 0,
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 800,
    letterSpacing: "-0.4px",
    color: "#04223A",
  },
  lead: {
    marginTop: 8,
    color: "rgba(4,34,58,0.8)",
    maxWidth: 680,
    fontSize: 15,
  },
  ctaWrap: { marginLeft: "auto" },
  ghostBtn: {
    background: "transparent",
    border: "1px solid rgba(4,34,58,0.06)",
    padding: "10px 14px",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: 700,
    color: "#04223A",
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 18,
  },

  card: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    padding: 18,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,250,255,0.94))",
    boxShadow: "0 14px 36px rgba(2,6,23,0.06)",
    border: "1px solid rgba(2,6,23,0.04)",
    transition: "transform 260ms cubic-bezier(.2,.9,.25,1), box-shadow 260ms",
    cursor: "default",
    minHeight: 120,
  },

  iconWrap: {
    flex: "0 0 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },

  cardBody: { flex: 1 },

  cardTitle: {
    margin: 0,
    fontSize: 16,
    fontWeight: 800,
    color: "#04223A",
    marginBottom: 6,
  },

  cardDesc: {
    margin: 0,
    color: "rgba(4,34,58,0.75)",
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 10,
  },

  cardActions: { display: "flex", alignItems: "center", gap: 12 },

  link: {
    fontSize: 14,
    fontWeight: 700,
    textDecoration: "none",
  },
};

/* Add interactive hover behaviour via JS-inlined style tweaks using CSS pseudo-like effect.
   We can't do :hover with inline styles, so add a small script-like enhancement: */
if (typeof window !== "undefined") {
  // attach hover effects to cards (non-blocking; safe)
  setTimeout(() => {
    try {
      const styleEl = document.createElement("style");
      styleEl.innerHTML = `
        .services-grid > * {
          will-change: transform, box-shadow;
        }
        .services-grid > *:hover {
          transform: translateY(-6px) scale(1.006);
          box-shadow: 0 26px 68px rgba(2,6,23,0.12);
        }
      `;
      document.head.appendChild(styleEl);
    } catch (e) {
      // silent
    }
  }, 200);
}
