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
    <footer className="footer" aria-labelledby="footer-heading">
      <style jsx>{`
        .footer {
          background: linear-gradient(180deg,#071028 0%, #0b1724 100%);
          border-top: 1px solid rgba(255,255,255,0.04);
          padding: 2.5rem 1.25rem;
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          color: #E6F0FF;
        }

        .footer-inner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(240px, 1fr) repeat(2, minmax(160px, 1fr)) minmax(260px, 1fr);
          gap: 1.75rem;
          align-items: start;
        }

        /* Brand */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .footer-brand-row {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .footer-logo-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .footer-brand-title {
          font-weight: 900;
          font-size: 1.125rem;
          color: #ffffff;
        }

        .footer-brand-sub {
          font-size: 0.8125rem;
          color: rgba(230,240,255,0.78);
          max-width: 320px;
        }

        .footer-contact {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-contact-row {
          display: flex;
          align-items: center;
          color: rgba(230,240,255,0.95);
          font-size: 0.875rem;
        }

        .footer-contact-link {
          color: rgba(205,231,255,0.95);
          text-decoration: none;
        }

        .footer-social-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.375rem;
        }

        .footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.375rem;
          height: 2.375rem;
          border-radius: 0.625rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.04);
          color: #CDE7FF;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .footer-social-btn:hover {
          background: rgba(255,255,255,0.08);
        }

        /* Links */
        .footer-links {
          display: flex;
          gap: 1.75rem;
          align-items: start;
        }

        .footer-col-title {
          font-weight: 800;
          margin-bottom: 0.5rem;
          color: #E8F4FF;
          font-size: 0.875rem;
        }

        .footer-link-list { 
          list-style: none; 
          padding: 0; 
          margin: 0; 
          display: grid; 
          gap: 0.5rem; 
        }

        .footer-link-item {
          text-decoration: none;
          color: rgba(205,231,255,0.88);
          font-size: 0.875rem;
          transition: color 0.2s ease;
        }

        .footer-link-item:hover {
          color: rgba(205,231,255,1);
        }

        /* Newsletter */
        .footer-newsletter {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
        }

        .footer-news-title { 
          margin: 0; 
          font-weight: 800; 
          font-size: 1rem; 
          color: #fff; 
        }

        .footer-news-desc { 
          margin: 0; 
          color: rgba(230,240,255,0.82); 
          font-size: 0.875rem; 
        }

        .footer-form { 
          display: flex; 
          gap: 0.5rem; 
          margin-top: 0.375rem; 
          align-items: center; 
        }

        .footer-input {
          flex: 1;
          padding: 0.625rem 0.75rem;
          border-radius: 0.625rem;
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 0.875rem;
          outline: none;
          background: rgba(255,255,255,0.03);
          color: #E6F0FF;
          box-shadow: inset 0 -2px 6px rgba(0,0,0,0.25);
          font-family: inherit;
        }

        .footer-input:focus {
          border-color: rgba(124,58,237,0.4);
        }

        .footer-submit-btn {
          padding: 0.625rem 0.875rem;
          border-radius: 0.625rem;
          border: none;
          background: linear-gradient(90deg,#7c3aed,#06D6A0);
          color: #fff;
          cursor: pointer;
          font-weight: 800;
          font-size: 0.875rem;
          box-shadow: 0 10px 30px rgba(7,124,237,0.12);
          font-family: inherit;
          transition: transform 0.2s ease;
        }

        .footer-submit-btn:hover {
          transform: translateY(-2px);
        }

        .footer-small-text {
          font-size: 0.75rem;
          color: rgba(230,240,255,0.64);
        }

        /* bottom */
        .footer-bottom {
          margin-top: 1.75rem;
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 1.125rem;
          display: flex;
          justify-content: space-between;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .footer-copyright { 
          color: rgba(230,240,255,0.72); 
          font-size: 0.8125rem; 
        }

        .footer-legal-links { 
          display: flex; 
          align-items: center; 
          gap: 0.625rem; 
        }

        .footer-small-link { 
          color: rgba(205,231,255,0.7); 
          font-size: 0.8125rem; 
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-small-link:hover {
          color: rgba(205,231,255,0.9);
        }

        .footer-dot { 
          color: rgba(205,231,255,0.24); 
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-links {
            grid-column: 1 / -1;
            justify-content: space-around;
          }

          .footer-newsletter {
            grid-column: 1 / -1;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .footer {
            padding: 2rem 1.25rem;
          }

          .footer-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-links {
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-brand-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-form {
            flex-direction: column;
            align-items: stretch;
          }

          .footer-submit-btn {
            width: 100%;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .footer {
            padding: 1.5rem 1rem;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .footer-legal-links {
            justify-content: center;
          }

          .footer-contact-row {
            font-size: 0.8rem;
          }

          .footer-link-list {
            gap: 0.375rem;
          }

          .footer-link-item {
            font-size: 0.8rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .footer-inner {
            max-width: 1300px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .footer-social-btn:hover {
            background: rgba(255,255,255,0.03);
          }
          
          .footer-link-item:hover {
            color: rgba(205,231,255,0.88);
          }
          
          .footer-submit-btn:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Brand / contact */}
        <div className="footer-brand">
          <div className="footer-brand-row">
            <a href="/" aria-label="Homepage" className="footer-logo-link">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <rect width="48" height="48" rx="10" fill="#7c3aed" />
                <path d="M14 30c6-8 18-8 20-6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="22" cy="20" r="3.2" fill="#06D6A0" />
              </svg>
            </a>

            <div>
              <div className="footer-brand-title">Playful Labs</div>
              <div className="footer-brand-sub">Make learning feel like play — computing, coding, robotics & AI for schools.</div>
            </div>
          </div>

          <div className="footer-contact">
            <div className="footer-contact-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden style={{ marginRight: 8, color: "currentColor" }}>
                <path d="M21 8V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:hello@playfullabs.example" className="footer-contact-link">hello@playfullabs.example</a>
            </div>

            <div className="footer-contact-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden style={{ marginRight: 8, color: "currentColor" }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 2l6 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+27713055659" className="footer-contact-link">+27 71 305 5659</a>
            </div>

            <div style={{ marginTop: 12 }}>
              <div className="footer-social-row" aria-label="Social links">
                <a href="#" className="footer-social-btn" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.5 3c-2.73 0-4.93 2.5-4.42 5.2A12.94 12.94 0 0 1 3 4.88s-4 9 5 13a13 13 0 0 1-8 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
                </a>
                <a href="#" className="footer-social-btn" aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M22.54 6.42a2.8 2.8 0 0 0-1.96-1.98C18.88 4 12 4 12 4s-6.88 0-8.57.44A2.8 2.8 0 0 0 1.47 6.42 29.08 29.08 0 0 0 1 12a29.08 29.08 0 0 0 .47 5.58 2.8 2.8 0 0 0 1.96 1.98C5.12 20 12 20 12 20s6.88 0 8.57-.44a2.8 2.8 0 0 0 1.96-1.98A29.08 29.08 0 0 0 23 12a29.08 29.08 0 0 0-.46-5.58zM10 15V9l5 3-5 3z"/></svg>
                </a>
                <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-12h4v2a4 4 0 0 1 4-2zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Links columns */}
        <nav aria-label="Footer navigation" className="footer-links">
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-link-list">
              <li><a href="#games" className="footer-link-item">Mini-games</a></li>
              <li><a href="#curriculum" className="footer-link-item">Curriculum Packs</a></li>
              <li><a href="#dashboard" className="footer-link-item">Teacher Dashboard</a></li>
              <li><a href="#pricing" className="footer-link-item">Pricing</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">For Teachers</div>
            <ul className="footer-link-list">
              <li><a href="#pd" className="footer-link-item">Workshops & PD</a></li>
              <li><a href="#reports" className="footer-link-item">Reporting</a></li>
              <li><a href="#support" className="footer-link-item">Classroom Setup</a></li>
              <li><a href="#resources" className="footer-link-item">Lesson plans</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-link-list">
              <li><a href="#about" className="footer-link-item">About</a></li>
              <li><a href="#careers" className="footer-link-item">Careers</a></li>
              <li><a href="#press" className="footer-link-item">Press</a></li>
              <li><a href="#contact" className="footer-link-item">Contact</a></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter / CTA */}
        <div className="footer-newsletter" aria-labelledby="newsletter-title">
          <h3 id="newsletter-title" className="footer-news-title">Get class-ready updates</h3>
          <p className="footer-news-desc">Monthly tips, new activities, and teacher-led guides — straight to your inbox.</p>

          <form onSubmit={submitNewsletter} className="footer-form" aria-label="Subscribe to newsletter">
            <label htmlFor="ft-email" style={{ position: "absolute", left: -9999 }}>Email address</label>
            <input
              id="ft-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@school.edu"
              className="footer-input"
              aria-required="true"
            />
            <button type="submit" className="footer-submit-btn" aria-label="Subscribe">
              {sent ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>

          <div className="footer-small-text">We respect your privacy — no spam. Unsubscribe anytime.</div>
        </div>
      </div>

      {/* bottom legal row */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Playful Labs — Teaching computing with curiosity.
        </div>

        <div className="footer-legal-links">
          <a href="#privacy" className="footer-small-link">Privacy</a>
          <span className="footer-dot">•</span>
          <a href="#terms" className="footer-small-link">Terms</a>
          <span className="footer-dot">•</span>
          <a href="#support" className="footer-small-link">Help</a>
        </div>
      </div>
    </footer>
  );
}