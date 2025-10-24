import React from "react";

export default function CallToActionSection() {
  return (
    <section style={styles.section} aria-labelledby="cta-heading">
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 id="cta-heading" style={styles.title}>
            We're The Pest Busters!
          </h2>

          <p style={styles.description}>
            Don't let pests invade your peace of mind. From ants and cockroaches to termites and
            rodents — we remove them fast and keep them away. Fast, safe, and friendly service you can
            trust.
          </p>

          <div style={styles.actions}>
            <button
              style={styles.primaryBtn}
              onClick={() => {
                window.location.href = "tel:+27713055659";
              }}
              aria-label="Call Pest Busters"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginRight: 10 }}>
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Call Now
            </button>

            <a href="#learn-more" style={styles.link}>
              Learn how we work →
            </a>
          </div>
        </div>

        <div style={styles.right}>
          <div style={styles.callCard} role="region" aria-label="Phone contact">
            <div style={styles.phoneIconWrap}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  fill="white"
                />
              </svg>
            </div>

            <div style={styles.phoneContent}>
              <div style={styles.callText}>Call us</div>
              <a href="tel:+27713055659" style={styles.phoneNumber} aria-label="Call +27 71 305 5659">
                +27 71 305 5659
              </a>
              <div style={styles.small}>Fast response — same day service</div>
            </div>
          </div>

          <div style={styles.badgeRow}>
            <div style={styles.badge}>Trusted</div>
            <div style={styles.badge}>Eco-Friendly</div>
            <div style={styles.badge}>Satisfaction Guarantee</div>
          </div>
        </div>
      </div>

      {/* subtle keyframe for slight float on the call card */}
      <style>{`
        @keyframes floatIn {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 820px) {
          .cta-stack { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    // visually aligned with HeroSection: stronger gradient + soft warmth
    background:
      "radial-gradient(900px 300px at 10% 10%, rgba(124,58,237,0.14) 0%, rgba(6,214,160,0.06) 40%, rgba(255,255,255,0.02) 100%)",
    padding: "56px 20px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    gap: 24,
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 520px",
    minWidth: 280,
    zIndex: 2,
  },
  title: {
    fontSize: "clamp(24px, 3vw, 36px)",
    margin: 0,
    color: "#072039",
    lineHeight: 1.05,
    fontWeight: 800,
    letterSpacing: "-0.6px",
    textShadow: "0 6px 18px rgba(2,6,23,0.06)",
  },
  description: {
    marginTop: 12,
    color: "rgba(4,34,58,0.9)",
    fontSize: 16,
    maxWidth: 640,
    lineHeight: 1.6,
  },
  actions: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    background: "linear-gradient(90deg,#7c3aed,#06d6a0)",
    color: "#fff",
    border: "none",
    padding: "12px 18px",
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(6,214,160,0.12)",
    fontWeight: 700,
    cursor: "pointer",
    fontSize: 15,
  },
  link: {
    color: "#072039",
    textDecoration: "none",
    fontWeight: 600,
    padding: "8px 10px",
    borderRadius: 10,
    background: "rgba(255,255,255,0.9)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.04)",
  },

  right: {
    flex: "0 0 320px",
    minWidth: 260,
    display: "flex",
    flexDirection: "column",
    gap: 14,
    alignItems: "flex-end",
    zIndex: 2,
  },

  callCard: {
    display: "flex",
    gap: 12,
    alignItems: "center",
    width: "100%",
    background: "linear-gradient(180deg, rgba(124,58,237,0.95), rgba(6,214,160,0.9))",
    color: "white",
    padding: "14px 16px",
    borderRadius: 14,
    boxShadow: "0 18px 46px rgba(2,6,23,0.14)",
    border: "1px solid rgba(255,255,255,0.12)",
    transformOrigin: "center",
    animation: "floatIn 6s ease-in-out infinite",
  },

  phoneIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 14,
    background: "rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  phoneContent: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    alignItems: "flex-start",
  },

  callText: {
    fontSize: 13,
    opacity: 0.95,
    fontWeight: 600,
  },

  phoneNumber: {
    fontSize: 18,
    fontWeight: 800,
    color: "#fff",
    textDecoration: "none",
    lineHeight: 1,
  },

  small: {
    fontSize: 12,
    opacity: 0.9,
  },

  badgeRow: {
    display: "flex",
    gap: 10,
    alignItems: "center",
    marginTop: 6,
  },

  badge: {
    background: "rgba(255,255,255,0.94)",
    color: "#072039",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 700,
    boxShadow: "0 8px 20px rgba(2,6,23,0.06)",
  },

  // responsive adjustments (used via inline checks if needed)
  // you can expand with media queries inside <style> if you want more control
};
