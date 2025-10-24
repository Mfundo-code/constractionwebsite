import React, { useState } from "react";

/**
 * Dark Footer
 * - Same structure & behavior as before, but with a dark theme.
 * - Inline styles only. Accessible, responsive, and palette-aligned.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function submitNewsletter(e) {
    e && e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    setSent(true);
    setTimeout(() => {
      setEmail("");
      setSent(false);
    }, 1200);
  }

  return (
    <footer style={styles.footer} aria-labelledby="footer-heading">
      <style>{`
        /* responsive tweaks */
        @media (max-width: 860px) {
          .ft-grid { grid-template-columns: 1fr; gap: 20px; }
          .ft-legal { text-align: center; }
          .ft-brand-row { flex-direction: column; gap: 12px; align-items: flex-start; }
        }
      `}</style>

      <div style={styles.inner} className="ft-grid">
        {/* Brand / contact */}
        <div style={styles.brand}>
          <div style={styles.brandRow} className="ft-brand-row">
            <a href="/" aria-label="Homepage" style={styles.logoLink}>
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <rect width="48" height="48" rx="10" fill="#7c3aed" />
                <path d="M14 30c6-8 18-8 20-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="22" cy="20" r="3.2" fill="#06D6A0" />
              </svg>
            </a>

            <div>
              <div style={styles.brandTitle}>Playful Labs</div>
              <div style={styles.brandSub}>Make learning feel like play — computing, coding, robotics & AI for schools.</div>
            </div>
          </div>

          <div style={styles.contact}>
            <div style={styles.contactRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden style={{ marginRight: 8, color: "currentColor" }}>
                <path d="M21 8V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:hello@playfullabs.example" style={styles.contactLink}>hello@playfullabs.example</a>
            </div>

            <div style={styles.contactRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden style={{ marginRight: 8, color: "currentColor" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+27713055659" style={styles.contactLink}>+27 71 305 5659</a>
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={styles.socialRow} aria-label="Social links">
                <a href="#" style={{ ...styles.socialBtn, color: "#CDE7FF" }} aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.5 3c-2.73 0-4.93 2.5-4.42 5.2A12.94 12.94 0 0 1 3 4.88s-4 9 5 13a13 13 0 0 1-8 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#" style={{ ...styles.socialBtn, color: "#FFDDE8" }} aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22.54 6.42a2.8 2.8 0 0 0-1.96-1.98C18.88 4 12 4 12 4s-6.88 0-8.57.44A2.8 2.8 0 0 0 1.47 6.42 29.08 29.08 0 0 0 1 12a29.08 29.08 0 0 0 .47 5.58 2.8 2.8 0 0 0 1.96 1.98C5.12 20 12 20 12 20s6.88 0 8.57-.44a2.8 2.8 0 0 0 1.96-1.98A29.08 29.08 0 0 0 23 12a29.08 29.08 0 0 0-.46-5.58zM10 15V9l5 3-5 3z"/></svg>
                </a>
                <a href="#" style={{ ...styles.socialBtn, color: "#BFE9D6" }} aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links columns */}
        <nav aria-label="Footer navigation" style={styles.links}>
          <div>
            <div style={styles.colTitle}>Product</div>
            <ul style={styles.linkList}>
              <li><a href="#games" style={styles.linkItem}>Mini-games</a></li>
              <li><a href="#curriculum" style={styles.linkItem}>Curriculum Packs</a></li>
              <li><a href="#dashboard" style={styles.linkItem}>Teacher Dashboard</a></li>
              <li><a href="#pricing" style={styles.linkItem}>Pricing</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>For Teachers</div>
            <ul style={styles.linkList}>
              <li><a href="#pd" style={styles.linkItem}>Workshops & PD</a></li>
              <li><a href="#reports" style={styles.linkItem}>Reporting</a></li>
              <li><a href="#support" style={styles.linkItem}>Classroom Setup</a></li>
              <li><a href="#resources" style={styles.linkItem}>Lesson plans</a></li>
            </ul>
          </div>

          <div>
            <div style={styles.colTitle}>Company</div>
            <ul style={styles.linkList}>
              <li><a href="#about" style={styles.linkItem}>About</a></li>
              <li><a href="#careers" style={styles.linkItem}>Careers</a></li>
              <li><a href="#press" style={styles.linkItem}>Press</a></li>
              <li><a href="#contact" style={styles.linkItem}>Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter / CTA */}
        <div style={styles.newsletter} aria-labelledby="newsletter-title">
          <h3 id="newsletter-title" style={styles.newsTitle}>Get class-ready updates</h3>
          <p style={styles.newsDesc}>Monthly tips, new activities, and teacher-led guides — straight to your inbox.</p>

          <form onSubmit={submitNewsletter} style={styles.form} aria-label="Subscribe to newsletter">
            <label htmlFor="ft-email" style={{ position: "absolute", left: -9999 }}>Email address</label>
            <input
              id="ft-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              style={styles.input}
              aria-required="true"
            />
            <button type="submit" style={styles.submitBtn} aria-label="Subscribe">
              {sent ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>

          <div style={styles.smallText}>We respect your privacy — no spam. Unsubscribe anytime.</div>
        </div>
      </div>

      {/* bottom legal row */}
      <div style={styles.bottom}>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} Playful Labs — Teaching computing with curiosity.
        </div>

        <div style={styles.legalLinks} className="ft-legal">
          <a href="#privacy" style={styles.smallLink}>Privacy</a>
          <span style={styles.dot}>•</span>
          <a href="#terms" style={styles.smallLink}>Terms</a>
          <span style={styles.dot}>•</span>
          <a href="#support" style={styles.smallLink}>Help</a>
        </div>
      </div>
    </footer>
  );
}

/* ----------------- dark theme styles ----------------- */
const styles = {
  footer: {
    background: "linear-gradient(180deg,#071028 0%, #0b1724 100%)",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    padding: "40px 20px",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#E6F0FF",
  },
  inner: {
    maxWidth: 1180,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "minmax(240px, 1fr) repeat(2, minmax(160px, 1fr)) minmax(260px, 1fr)",
    gap: 28,
    alignItems: "start",
  },

  /* Brand */
  brand: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  brandRow: {
    display: "flex",
    gap: 12,
    alignItems: "center",
  },
  logoLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
  brandTitle: {
    fontWeight: 900,
    fontSize: 18,
    color: "#ffffff",
  },
  brandSub: {
    fontSize: 13,
    color: "rgba(230,240,255,0.78)",
    maxWidth: 320,
  },

  contact: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    color: "rgba(230,240,255,0.95)",
    fontSize: 14,
  },
  contactLink: {
    color: "rgba(205,231,255,0.95)",
    textDecoration: "none",
  },

  socialRow: {
    display: "flex",
    gap: 8,
    marginTop: 6,
  },
  socialBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 38,
    height: 38,
    borderRadius: 10,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.04)",
    color: "#CDE7FF",
    textDecoration: "none",
  },

  /* Links */
  links: {
    display: "flex",
    gap: 28,
    alignItems: "start",
  },
  colTitle: {
    fontWeight: 800,
    marginBottom: 8,
    color: "#E8F4FF",
  },
  linkList: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 },
  linkItem: {
    textDecoration: "none",
    color: "rgba(205,231,255,0.88)",
    fontSize: 14,
  },

  /* Newsletter */
  newsletter: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  newsTitle: { margin: 0, fontWeight: 800, fontSize: 16, color: "#fff" },
  newsDesc: { margin: 0, color: "rgba(230,240,255,0.82)", fontSize: 14 },

  form: { display: "flex", gap: 8, marginTop: 6, alignItems: "center" },
  input: {
    flex: 1,
    padding: "10px 12px",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.08)",
    fontSize: 14,
    outline: "none",
    background: "rgba(255,255,255,0.03)",
    color: "#E6F0FF",
    boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.25)",
  },
  submitBtn: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(90deg,#7c3aed,#06D6A0)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: 14,
    boxShadow: "0 10px 30px rgba(7,124,237,0.12)",
  },
  smallText: {
    fontSize: 12,
    color: "rgba(230,240,255,0.64)",
  },

  /* bottom */
  bottom: {
    marginTop: 28,
    borderTop: "1px solid rgba(255,255,255,0.04)",
    paddingTop: 18,
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap",
  },
  copyright: { color: "rgba(230,240,255,0.72)", fontSize: 13 },
  legalLinks: { display: "flex", alignItems: "center", gap: 10 },
  smallLink: { color: "rgba(205,231,255,0.7)", fontSize: 13, textDecoration: "none" },
  dot: { color: "rgba(205,231,255,0.24)" },
};
