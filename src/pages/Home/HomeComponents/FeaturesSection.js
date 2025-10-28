import React from "react";

/**
 * FeaturesSection — simplified
 * - Spotlight panel removed (per request)
 * - Component now has a stronger background with decorative SVGs
 * - Keeps the same modern cards, animations and responsive layout
 */
export default function FeaturesSection() {
  const features = [
    {
      id: "realtime",
      title: "Real-time Feedback",
      desc: "Instant hints, answers and encouraging micro-celebrations that help learners correct mistakes and stay motivated.",
      accent: "#7c3aed",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none"/>
        </svg>
      ),
    },
    {
      id: "adaptive",
      title: "Adaptive Levels",
      desc: "Activities adjust difficulty based on performance so learners face the right challenge—not frustration.",
      accent: "#06d6a0",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 12h18M6 6v12M18 6v12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
    {
      id: "dashboard",
      title: "Teacher Dashboard",
      desc: "Quick overviews, progress reports and class controls designed for teachers and group activities.",
      accent: "#118ab2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <path d="M7 9h4M7 13h10M7 17h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: "safe",
      title: "Privacy-first & Safe",
      desc: "Ad-free, kid-safe defaults and local-first data options so classrooms and parents stay in control.",
      accent: "#ef476f",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2l7 4v6c0 5-3.6 9.6-7 10-3.4-.4-7-5-7-10V6l7-4z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <path d="M9.5 12.5l1.8 1.8L15.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section" aria-labelledby="features-heading">
      <style jsx>{`
        @keyframes pop { 
          from { opacity: 0; transform: translateY(8px) scale(.995); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }
        @keyframes floatSlow { 
          0% { transform: translateY(0); } 
          50% { transform: translateY(-6px); } 
          100% { transform: translateY(0); } 
        }

        .features-section {
          position: relative;
          padding: 4rem 1.25rem;
          background: radial-gradient(1200px 500px at 15% 15%, rgba(124,58,237,0.22) 0%, transparent 50%),
            radial-gradient(1000px 400px at 85% 25%, rgba(6,214,160,0.18) 0%, transparent 45%),
            radial-gradient(900px 450px at 35% 75%, rgba(17,138,178,0.15) 0%, transparent 50%),
            radial-gradient(800px 350px at 70% 85%, rgba(239,71,111,0.12) 0%, transparent 55%),
            linear-gradient(180deg, rgba(242,245,255,1) 0%, rgba(230,240,255,1) 100%);
          font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
          color: #072039;
          overflow: hidden;
          border: 1px solid rgba(124,58,237,0.1);
          box-shadow: 0 8px 32px rgba(124,58,237,0.08);
        }

        .decor1 {
          position: absolute;
          top: -8%;
          right: -12%;
          width: 70%;
          height: 50%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.95;
        }

        .decor2 {
          position: absolute;
          left: -10%;
          top: -12%;
          width: 40%;
          height: 40%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.9;
        }

        .decor3 {
          position: absolute;
          bottom: -15%;
          right: 20%;
          width: 50%;
          height: 40%;
          z-index: 0;
          pointer-events: none;
          opacity: 0.85;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 1.75rem;
          align-items: start;
          position: relative;
          z-index: 2;
        }

        .header {
          grid-column: 1 / 2;
        }

        .title {
          margin: 0;
          font-size: clamp(1.375rem, 3.6vw, 2rem);
          font-weight: 900;
          color: #04223A;
          letter-spacing: -0.6px;
          line-height: 1.2;
        }

        .subtitle {
          margin-top: 0.625rem;
          color: rgba(4,34,58,0.75);
          font-size: 0.9375rem;
          max-width: 560px;
          line-height: 1.5;
        }

        .meta-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.125rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }

        .meta-number {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 0.75rem;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.125rem;
          flex-shrink: 0;
        }

        .meta-label {
          font-weight: 800;
          font-size: 0.8125rem;
        }

        .meta-sub {
          font-size: 0.75rem;
          color: rgba(4,34,58,0.6);
        }

        .right-column {
          grid-column: 2 / 3;
          display: flex;
          flex-direction: column;
          gap: 1.125rem;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .card {
          display: flex;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: 0.875rem;
          align-items: flex-start;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96));
          border: 1px solid rgba(2,6,23,0.04);
          box-shadow: 0 12px 30px rgba(2,6,23,0.04);
          transition: transform 220ms ease, box-shadow 220ms ease;
          cursor: default;
          min-height: 120px;
        }

        .card:hover {
          transform: translateY(-0.5rem) scale(1.01);
          box-shadow: 0 28px 72px rgba(2,6,23,0.12);
        }

        .icon-wrap {
          flex: 0 0 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-circle {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          border: 1px solid rgba(2,6,23,0.04);
          background: linear-gradient(180deg, rgba(255,255,255,1), rgba(245,247,255,1));
        }

        .card-body {
          flex: 1;
        }

        .card-title {
          margin: 0;
          font-size: 0.9375rem;
          font-weight: 800;
          color: #04223A;
          margin-bottom: 0.375rem;
          line-height: 1.3;
        }

        .card-desc {
          margin: 0;
          font-size: 0.8125rem;
          color: rgba(4,34,58,0.75);
          line-height: 1.5;
          margin-bottom: 0.625rem;
        }

        .card-actions {
          display: flex;
          align-items: center;
        }

        .card-link {
          font-size: 0.8125rem;
          font-weight: 800;
          text-decoration: none;
        }

        /* Tablet Styles */
        @media (max-width: 1024px) {
          .features-section {
            padding: 3.5rem 1.5rem;
          }

          .container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .header {
            grid-column: 1 / -1;
            text-align: center;
          }

          .subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .meta-row {
            justify-content: center;
          }

          .right-column {
            grid-column: 1 / -1;
          }

          .decor1 {
            right: -15%;
            top: -5%;
            width: 80%;
          }

          .decor2 {
            left: -15%;
            top: -8%;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .features-section {
            padding: 3rem 1.25rem;
          }

          .title {
            font-size: clamp(1.25rem, 6vw, 1.75rem);
          }

          .subtitle {
            font-size: 0.9rem;
            max-width: 480px;
          }

          .meta-row {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .meta-item {
            width: 100%;
            justify-content: center;
            text-align: center;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .card {
            min-height: auto;
            padding: 1.25rem;
          }

          .decor1,
          .decor2,
          .decor3 {
            display: none;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .features-section {
            padding: 2.5rem 1rem;
          }

          .container {
            gap: 2rem;
          }

          .title {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.85rem;
            padding: 0 0.5rem;
          }

          .card {
            padding: 1rem;
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .icon-wrap {
            flex: none;
          }

          .meta-number {
            width: 3rem;
            height: 3rem;
            font-size: 1rem;
          }

          .meta-label {
            font-size: 0.75rem;
          }

          .meta-sub {
            font-size: 0.7rem;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .container {
            max-width: 1300px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .card {
            animation: none !important;
            transition: none !important;
          }
          
          .card:hover {
            transform: none !important;
          }
        }
      `}</style>

      {/* Decorative SVG shapes for depth */}
      <svg className="decor1" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg1" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06d6a0" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path d="M0 120 C140 20 300 180 460 90 C600 20 740 140 900 60 L900 400 L0 400 Z" fill="url(#bgg1)" />
      </svg>

      <svg className="decor2" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <radialGradient id="bgg2" cx="50%" cy="30%">
            <stop offset="0%" stopColor="#118ab2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#118ab2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="50" r="180" fill="url(#bgg2)" />
      </svg>

      {/* Additional decorative element */}
      <svg className="decor3" viewBox="0 0 500 300" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="bgg3" x1="0" x2="1">
            <stop offset="0%" stopColor="#ef476f" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d="M0 200 C150 120 250 280 400 180 L500 250 L500 300 L0 300 Z" fill="url(#bgg3)" />
      </svg>

      <div className="container">
        <header className="header">
          <h2 id="features-heading" className="title">Powerful features made for learning</h2>
          <p className="subtitle">
            Small, focused features that keep kids engaged while giving teachers and parents meaningful insight.
          </p>

          <div className="meta-row">
            <div className="meta-item">
              <div className="meta-number" style={{ background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>98%</div>
              <div>
                <div className="meta-label">Satisfaction</div>
                <div className="meta-sub">based on classroom pilots</div>
              </div>
            </div>

            <div className="meta-item">
              <div className="meta-number" style={{ background: "linear-gradient(90deg,#118ab2,#ef476f)" }}>K–9</div>
              <div>
                <div className="meta-label">Grade range</div>
                <div className="meta-sub">Kid-friendly from kindergarten to grade 9</div>
              </div>
            </div>
          </div>
        </header>

        <div className="right-column">
          <div className="grid" role="list" aria-label="Key features">
            {features.map((f, idx) => (
              <article
                key={f.id}
                role="listitem"
                className="card"
                aria-labelledby={`feature-${f.id}-title`}
                style={{
                  animation: `pop 420ms cubic-bezier(.2,.9,.25,1) ${idx * 80}ms both`,
                }}
              >
                <div 
                  className="icon-wrap" 
                  style={{ boxShadow: `0 10px 30px ${hexToRgba(f.accent, 0.10)}` }}
                >
                  <div 
                    className="icon-circle" 
                    style={{ 
                      color: f.accent, 
                      borderColor: hexToRgba(f.accent, 0.18) 
                    }}
                  >
                    {f.icon}
                  </div>
                </div>

                <div className="card-body">
                  <h3 id={`feature-${f.id}-title`} className="card-title">{f.title}</h3>
                  <p className="card-desc">{f.desc}</p>
                  <div className="card-actions">
                    <a 
                      href={`#${f.id}`} 
                      className="card-link" 
                      style={{ color: f.accent }} 
                      onClick={(e) => e.preventDefault()}
                    >
                      Learn more →
                    </a>
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

/* ---------- helpers & styles ---------- */
function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}