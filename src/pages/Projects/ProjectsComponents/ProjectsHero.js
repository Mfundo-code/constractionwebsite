import React from "react";

/**
 * ProjectsHero - Compact version with reduced height
 */
export default function ProjectsHero() {
  return (
    <section style={styles.section} aria-labelledby="projects-hero-title" role="region" className="projects-hero-section">
      <style jsx>{`
        @keyframes slideUp { 
          from { opacity: 0; transform: translateY(12px);} 
          to { opacity: 1; transform: translateY(0);} 
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .projects-hero-section {
            padding: 3.5rem 1.5rem !important;
          }

          .projects-hero-container {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .projects-hero-panel {
            grid-column: 1 / -1 !important;
            text-align: center !important;
          }

          .projects-hero-lead {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .projects-hero-image {
            order: -1 !important;
            justify-content: center !important;
          }

          .projects-hero-bg-radial {
            right: -15% !important;
            top: -5% !important;
            width: 80% !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .projects-hero-section {
            padding: 3rem 1.25rem !important;
          }

          .projects-hero-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .projects-hero-lead {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .projects-hero-panel {
            padding: 1.5rem !important;
          }

          .projects-hero-metrics {
            justify-content: center !important;
            gap: 1.5rem !important;
          }

          .projects-hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0.75rem !important;
          }

          .projects-hero-cta-primary,
          .projects-hero-cta-ghost {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }

          .projects-hero-image-container {
            height: 220px !important;
            max-width: 100% !important;
          }

          .projects-hero-floating-card {
            display: none !important;
          }

          .projects-hero-bg-radial {
            display: none !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .projects-hero-section {
            padding: 2.5rem 1rem !important;
          }

          .projects-hero-container {
            gap: 2rem !important;
          }

          .projects-hero-title {
            font-size: 1.75rem !important;
          }

          .projects-hero-lead {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .projects-hero-panel {
            padding: 1.25rem !important;
          }

          .projects-hero-metrics {
            flex-direction: column !important;
            gap: 1rem !important;
            align-items: center !important;
          }

          .projects-hero-metric-item {
            flex: none !important;
            width: 100% !important;
            max-width: 200px !important;
          }

          .projects-hero-metric-number {
            font-size: 1.5rem !important;
          }

          .projects-hero-metric-label {
            font-size: 0.8rem !important;
          }

          .projects-hero-image-container {
            height: 200px !important;
          }

          .projects-hero-cta-primary {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }

          .projects-hero-cta-ghost {
            padding: 10px 12px !important;
            font-size: 13px !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .projects-hero-container {
            max-width: 1300px !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .projects-hero-panel {
            animation: none !important;
          }
        }

        /* Hover effects for non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          .projects-hero-cta-primary:hover { 
            transform: translateY(-2px); 
            box-shadow: 0 12px 32px rgba(7,124,237,0.15); 
          }
          .project-card:hover { 
            transform: translateY(-3px); 
            box-shadow: 0 15px 35px rgba(2,6,23,0.12); 
          }
        }

        /* Focus styles */
        .projects-cta-primary:focus-visible, 
        .projects-cta-ghost:focus-visible { 
          outline: 2px solid rgba(124,58,237,0.2); 
          outline-offset: 2px; 
          border-radius: 8px; 
        }
      `}</style>

      {/* Background gradient */}
      <div style={styles.bgRadial} aria-hidden className="projects-hero-bg-radial" />

      <div style={styles.container} className="projects-hero-container projects-grid">
        {/* Left: Content panel */}
        <div style={styles.panel} className="projects-hero-panel" role="article" aria-labelledby="projects-hero-title">
          <h1 id="projects-hero-title" style={styles.title} className="projects-hero-title">
            Bringing digital learning to every village
          </h1>

          <p style={styles.lead} className="projects-hero-lead">
            We deploy solar-powered learning stations and train local educators to teach computer skills 
            in remote communities.
          </p>

          {/* Project impact metrics */}
          <div style={styles.metrics} className="projects-hero-metrics" aria-label="Project impact statistics">
            <div style={styles.metricItem} className="projects-hero-metric-item">
              <div style={styles.metricNumber} className="projects-hero-metric-number">42+</div>
              <div style={styles.metricLabel} className="projects-hero-metric-label">Villages</div>
            </div>
            <div style={styles.metricItem} className="projects-hero-metric-item">
              <div style={styles.metricNumber} className="projects-hero-metric-number">3.2k</div>
              <div style={styles.metricLabel} className="projects-hero-metric-label">Children</div>
            </div>
            <div style={styles.metricItem} className="projects-hero-metric-item">
              <div style={styles.metricNumber} className="projects-hero-metric-number">89%</div>
              <div style={styles.metricLabel} className="projects-hero-metric-label">Retention</div>
            </div>
          </div>

          <div style={styles.ctaRow} className="projects-hero-cta-row">
            <button
              className="projects-cta-primary projects-hero-cta-primary"
              style={styles.ctaPrimary}
              onClick={() => (window.location.hash = "#support-projects")}
              aria-label="Support our projects"
            >
              Support projects
            </button>

            <a
              className="projects-cta-ghost projects-hero-cta-ghost"
              href="#see-impact"
              style={styles.ctaGhost}
              onClick={(e) => { e.preventDefault(); window.location.hash = "#see-impact"; }}
              aria-label="See the impact"
            >
              See impact →
            </a>
          </div>
        </div>

        {/* Right: Image panel */}
        <div style={styles.imagePanel} className="projects-hero-image projects-image" aria-hidden>
          <div style={styles.imageContainer} className="projects-hero-image-container">
            <div style={styles.mainImage} className="projects-hero-main-image" role="img" aria-label="Children learning computer skills in village">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Children learning computer skills"
                style={styles.photo}
              />
            </div>

            {/* Compact floating cards */}
            <div style={styles.floatingCard} className="projects-hero-floating-card project-card">
              <div style={styles.cardIcon} className="projects-hero-card-icon">💻</div>
              <div style={styles.cardContent} className="projects-hero-card-content">
                <div style={styles.cardTitle} className="projects-hero-card-title">First computer</div>
                <div style={styles.cardText} className="projects-hero-card-text">Age 9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Compact Styles ---------- */
const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "40px 20px",
    background: "radial-gradient(800px 300px at 85% 15%, rgba(124,58,237,0.15) 0%, rgba(6,214,160,0.1) 30%, rgba(250,250,255,1) 100%)",
    color: "#072039",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },

  bgRadial: {
    position: "absolute",
    right: "-8%",
    top: "-10%",
    width: "50%",
    height: "60%",
    zIndex: 0,
    pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(124,58,237,0.1), rgba(6,214,160,0.06))",
    filter: "blur(30px)",
    transform: "rotate(12deg)",
    opacity: 1,
  },

  container: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1100,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: 28,
    alignItems: "center",
  },

  panel: {
    padding: "24px 22px",
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    border: "1px solid rgba(4,34,58,0.05)",
    boxShadow: "0 15px 35px rgba(2,6,23,0.06)",
    color: "#04223A",
    animation: "slideUp 420ms ease both",
  },

  title: {
    margin: 0,
    fontSize: "clamp(22px, 3vw, 30px)",
    fontWeight: 900,
    color: "#04223A",
    lineHeight: 1.2,
    letterSpacing: "-0.3px",
  },

  lead: {
    marginTop: 12,
    color: "rgba(4,34,58,0.8)",
    fontSize: 15,
    lineHeight: 1.5,
    maxWidth: 500,
  },

  metrics: {
    display: "flex",
    gap: 16,
    marginTop: 18,
    padding: "12px 0",
    borderTop: "1px solid rgba(4,34,58,0.05)",
  },

  metricItem: {
    textAlign: "center",
    flex: 1,
  },

  metricNumber: {
    fontSize: 18,
    fontWeight: 900,
    background: "linear-gradient(90deg, #7c3aed, #06d6a0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  metricLabel: {
    fontSize: 11,
    color: "rgba(4,34,58,0.7)",
    fontWeight: 600,
    marginTop: 2,
  },

  ctaRow: {
    display: "flex",
    gap: 10,
    marginTop: 20,
    alignItems: "center",
  },

  ctaPrimary: {
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: 10,
    fontWeight: 800,
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(6,214,160,0.12)",
    transition: "transform 160ms ease, box-shadow 160ms ease",
    fontSize: 14,
  },

  ctaGhost: {
    color: "#04223A",
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: 8,
    fontWeight: 700,
    background: "transparent",
    border: "1px solid rgba(4,34,58,0.06)",
    fontSize: 13,
  },

  imagePanel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imageContainer: {
    position: "relative",
    width: "100%",
    maxWidth: 380,
    height: 260,
  },

  mainImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    border: "1px solid rgba(4,34,58,0.05)",
    boxShadow: "0 15px 35px rgba(2,6,23,0.08)",
    overflow: "hidden",
    position: "relative",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  floatingCard: {
    position: "absolute",
    top: "12%",
    right: "-8%",
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid rgba(4,34,58,0.05)",
    boxShadow: "0 8px 24px rgba(2,6,23,0.08)",
    display: "flex",
    alignItems: "center",
    gap: 8,
    width: 120,
    transition: "transform 160ms ease, box-shadow 160ms ease",
  },

  cardIcon: {
    fontSize: 16,
  },

  cardContent: {
    display: "flex",
    flexDirection: "column",
  },

  cardTitle: {
    fontSize: 11,
    fontWeight: 800,
    color: "#04223A",
  },

  cardText: {
    fontSize: 9,
    color: "rgba(4,34,58,0.7)",
    marginTop: 1,
  },
};