import React from "react";

/**
 * ServicesSection
 * - Self-contained file with an internal ServiceCard component.
 * - Inline styles only. Palette: #7c3aed, #06d6a0, #118AB2, #EF476F, #FFD166, #F4A261
 * - Use as a page section showing all core services.
 */
export default function ServicesSection() {
  const services = [
    {
      title: "Computer Science Foundations",
      description:
        "Introduce computational thinking, algorithms, and problem-solving using hands-on games and guided activities that spark curiosity.",
      tag: "K–6",
      accent: "#7c3aed",
    },
    {
      title: "Block & Text Programming",
      description:
        "Progressive lessons — start with visual block languages (Scratch) and grow into beginner-friendly JavaScript blocks and examples.",
      tag: "K–9",
      accent: "#06D6A0",
    },
    {
      title: "Robotics & Physical Computing",
      description:
        "Build, program, and iterate with robots and microcontrollers. Students learn sensors, motors, and creative engineering processes.",
      tag: "K–9",
      accent: "#118AB2",
    },
    {
      title: "AI & Machine Thinking",
      description:
        "Age-appropriate AI explorations: pattern recognition, simple models, data literacy, and ethical conversations about intelligent systems.",
      tag: "6–9",
      accent: "#EF476F",
    },
    {
      title: "Math Games & Logic Puzzles",
      description:
        "Playful number games and puzzles that teach math fluency, estimation, and logic — designed for short, repeatable practice.",
      tag: "K–6",
      accent: "#FFD166",
    },
    {
      title: "Curriculum Packs & Lesson Plans",
      description:
        "Standards-aligned packs with teacher guides, slides, and step-by-step lesson plans to make classroom delivery effortless.",
      tag: "Teacher",
      accent: "#F4A261",
    },
    {
      title: "Teacher Dashboard & Reporting",
      description:
        "Monitor class progress, assign activities, export reports, and get quick insights into learning gaps and strengths.",
      tag: "Admin",
      accent: "#7c3aed",
    },
    {
      title: "Workshops & Professional Development",
      description:
        "In-person and virtual workshops for teachers — pedagogy, classroom management with tech, and how to scaffold learning effectively.",
      tag: "PD",
      accent: "#06D6A0",
    },
  ];

  return (
    <section style={styles.section} aria-labelledby="services-heading" className="services-section">
      <style jsx>{`
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .services-section {
            padding: 3.5rem 1.5rem !important;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }

          .services-header {
            text-align: center !important;
          }

          .services-lead {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .services-hero-ctas {
            justify-content: center !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .services-section {
            padding: 3rem 1.25rem !important;
          }

          .services-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .services-lead {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .services-card {
            padding: 1.25rem !important;
            min-height: auto !important;
          }

          .services-hero-ctas {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }

          .services-hero-primary,
          .services-hero-ghost {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .services-section {
            padding: 2.5rem 1rem !important;
          }

          .services-title {
            font-size: 1.75rem !important;
          }

          .services-lead {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .services-card {
            padding: 1rem !important;
            flex-direction: column !important;
            text-align: center !important;
            align-items: center !important;
            gap: 1rem !important;
          }

          .services-card-left {
            width: 100% !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 1rem !important;
          }

          .services-card-body {
            width: 100% !important;
          }

          .services-card-footer {
            justify-content: center !important;
          }

          .services-card-cta,
          .services-card-link {
            width: 100% !important;
            text-align: center !important;
          }

          .services-footer-note {
            font-size: 0.9rem !important;
            padding: 1rem !important;
            text-align: center !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .services-inner {
            max-width: 1300px !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .services-card {
            transition: none !important;
          }
        }

        /* Hover effects for non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          .services-card:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 12px 36px rgba(2,6,23,0.12) !important;
          }
        }
      `}</style>

      <div style={styles.inner} className="services-inner">
        <header style={styles.header} className="services-header">
          <h2 id="services-heading" style={styles.title} className="services-title">
            What we do — Make kids love computing
          </h2>
          <p style={styles.lead} className="services-lead">
            We teach computing, programming, robotics and AI in a way that feels like play. Short, scaffolded activities + teacher
            tools = confident learners. Below are the core services we offer for classrooms and schools.
          </p>
          <div style={styles.heroCtas} className="services-hero-ctas">
            <button
              style={{ ...styles.heroPrimary }}
              className="services-hero-primary"
              onClick={() => (window.location.hash = "#contact-sales")}
              aria-label="Contact sales about services"
            >
              Contact sales
            </button>
            <a
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#curriculum";
              }}
              href="#curriculum"
              style={styles.heroGhost}
              className="services-hero-ghost"
            >
              View curriculum →
            </a>
          </div>
        </header>

        <div style={styles.grid} className="services-grid" role="list">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              tag={s.tag}
              accent={s.accent}
              index={i + 1}
              onClick={() => (window.location.hash = "#services")}
            />
          ))}
        </div>

        <div style={styles.footerNote} className="services-footer-note">
          <strong>Want a custom program?</strong>{" "}
          We create tailored pathways for schools — contact us to build a plan that fits your curriculum and devices.
        </div>
      </div>
    </section>
  );
}

/* ------------------- internal ServiceCard (reusable) ------------------- */
function ServiceCard({ title, description, tag, accent = "#7c3aed", onClick = () => {}, index }) {
  return (
    <article
      role="listitem"
      tabIndex={0}
      aria-label={`${title}: ${description}`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      style={{
        ...cardStyles.card,
        borderColor: "rgba(4,34,58,0.04)",
      }}
      className="services-card"
    >
      <div style={cardStyles.left} className="services-card-left">
        <div
          style={{
            ...cardStyles.iconWrap,
            background: `linear-gradient(180deg, ${hexWithAlpha(accent, 0.14)}, ${hexWithAlpha(accent, 0.06)})`,
            border: `1px solid ${hexWithAlpha(accent, 0.12)}`,
            color: accent,
          }}
          className="services-card-icon-wrap"
          aria-hidden
        >
          {serviceIcon(index)}
        </div>
        {tag ? <div style={cardStyles.tag} className="services-card-tag">{tag}</div> : null}
      </div>

      <div style={cardStyles.body} className="services-card-body">
        <h3 style={cardStyles.title} className="services-card-title">{title}</h3>
        <p style={cardStyles.desc} className="services-card-desc">{description}</p>
        <div style={cardStyles.footer} className="services-card-footer">
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.location.hash = "#services";
            }}
            style={{
              ...cardStyles.cta,
              background: `linear-gradient(90deg, ${accent}, ${blendHex(accent, "#06D6A0", 0.45)})`,
            }}
            className="services-card-cta"
            aria-label={`Learn more about ${title}`}
          >
            Learn more
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.location.hash = "#contact";
            }}
            style={cardStyles.link}
            className="services-card-link"
          >
            Contact →
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------- small icons for variety ---------- */
function serviceIcon(n) {
  // simple glyphs by index (keeps file dependency free)
  const icons = [
    // 1: cpu / logic
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i1">
      <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 9v6M9 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 2: code brackets
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i2">
      <path d="M9 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 3: robot wheel
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i3">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 12a7 7 0 10-14 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 4: brain / ai
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i4">
      <path d="M8 8v8M16 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 5: puzzle / math
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i5">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>,
    // 6: curriculum / book
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i6">
      <path d="M3 6h14v12H3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 6v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 7: dashboard / chart
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i7">
      <path d="M4 20h16M6 16v-6M12 16v-10M18 16v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
    // 8: workshop / people
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden key="i8">
      <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M4 20c2-2 6-2 8 0 2-2 6-2 8 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>,
  ];
  return icons[(n - 1) % icons.length];
}

/* ----------------- small color helpers ----------------- */
function hexToRgba(hex, alpha = 1) {
  const h = String(hex).replace("#", "");
  const hx = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(hx, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
function hexWithAlpha(hex, a = 1) {
  return hexToRgba(hex, a);
}
function blendHex(hexA, hexB, amount = 0.5) {
  const a = hexA.replace("#", "");
  const b = hexB.replace("#", "");
  const ah = a.length === 3 ? a.split("").map((c) => c + c).join("") : a;
  const bh = b.length === 3 ? b.split("").map((c) => c + c).join("") : b;
  const ar = parseInt(ah.substring(0, 2), 16);
  const ag = parseInt(ah.substring(2, 4), 16);
  const ab = parseInt(ah.substring(4, 6), 16);
  const br = parseInt(bh.substring(0, 2), 16);
  const bg = parseInt(bh.substring(2, 4), 16);
  const bb = parseInt(bh.substring(4, 6), 16);
  const rr = Math.round(ar + (br - ar) * amount)
    .toString(16)
    .padStart(2, "0");
  const rg = Math.round(ag + (bg - ag) * amount)
    .toString(16)
    .padStart(2, "0");
  const rb = Math.round(ab + (bb - ab) * amount)
    .toString(16)
    .padStart(2, "0");
  return `#${rr}${rg}${rb}`;
}

/* ----------------- layout styles ----------------- */
const styles = {
  section: {
    background: `
      radial-gradient(800px 350px at 10% 6%, rgba(124,58,237,0.25) 0%, transparent 50%),
      radial-gradient(600px 300px at 90% 20%, rgba(6,214,160,0.2) 0%, transparent 45%),
      radial-gradient(700px 400px at 30% 80%, rgba(17,138,178,0.15) 0%, transparent 40%),
      linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,248,255,0.98) 100%)
    `,
    padding: "56px 20px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#04223A",
    border: "1px solid rgba(124,58,237,0.08)",
    boxShadow: "0 4px 24px rgba(124,58,237,0.06)",
    position: "relative",
  },
  inner: {
    maxWidth: 1180,
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    margin: 0,
    fontSize: "clamp(22px, 3.4vw, 32px)",
    fontWeight: 900,
    color: "#04223A",
  },
  lead: {
    marginTop: 10,
    color: "rgba(4,34,58,0.78)",
    fontSize: 16,
    lineHeight: 1.6,
    maxWidth: 920,
  },
  heroCtas: {
    marginTop: 16,
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  heroPrimary: {
    background: "linear-gradient(90deg,#7c3aed,#06D6A0)",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 12,
    border: "none",
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 12px 36px rgba(6,214,160,0.12)",
  },
  heroGhost: {
    color: "#04223A",
    textDecoration: "none",
    fontWeight: 700,
  },

  grid: {
    marginTop: 26,
    display: "grid",
    gap: 14,
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  footerNote: {
    marginTop: 18,
    color: "rgba(4,34,58,0.76)",
    fontSize: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    border: "1px solid rgba(4,34,58,0.03)",
    padding: "12px 16px",
    borderRadius: 10,
  },
};

/* ----------------- card local styles ----------------- */
const cardStyles = {
  card: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
    padding: 16,
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,250,255,0.99))",
    border: "1px solid rgba(4,34,58,0.04)",
    cursor: "pointer",
    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 160ms ease",
    minHeight: 120,
    boxShadow: "0 2px 12px rgba(0,0,0,0.03)",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    width: 72,
    flex: "0 0 auto",
  },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  tag: {
    fontSize: 12,
    padding: "5px 8px",
    borderRadius: 999,
    background: "rgba(4,34,58,0.04)",
    color: "rgba(4,34,58,0.9)",
    fontWeight: 700,
  },
  body: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    margin: "0 0 6px 0",
    fontSize: 16,
    fontWeight: 800,
    color: "#04223A",
    lineHeight: 1.18,
  },
  desc: {
    margin: 0,
    color: "rgba(4,34,58,0.72)",
    fontSize: 14,
    lineHeight: 1.5,
  },
  footer: {
    marginTop: 12,
    display: "flex",
    gap: 10,
    alignItems: "center",
  },
  cta: {
    padding: "8px 12px",
    borderRadius: 10,
    border: "none",
    fontWeight: 800,
    fontSize: 13,
    cursor: "pointer",
    color: "#fff",
  },
  link: {
    color: "rgba(4,34,58,0.9)",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 13,
  },
};