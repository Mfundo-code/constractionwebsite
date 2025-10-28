import React from "react";

/**
 * HowItWorksSection
 * - 3-step, accessible explanation with subtle animations and CTAs.
 * - Uses CSS-in-JS for better responsiveness and maintainability.
 */
export default function HowItWorksSection() {
  const steps = [
    {
      id: "choose",
      title: "Choose a Game",
      desc: "Pick a fun activity — Rolling Math, Counting Race, or Logic Puzzles. Each game shows the learning goal so kids know what they'll practice.",
      accent: "#7c3aed",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <path d="M7 8h10M7 12h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "play",
      title: "Play & Solve",
      desc: "Interactive rounds guide learners with hints, feedback and friendly celebrations. Colliding balls show math facts and answers as they bounce.",
      accent: "#06d6a0",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path d="M5 3v18l15-9L5 3z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "track",
      title: "Track Progress",
      desc: "Badges, streaks and a simple dashboard keep motivation up. Teachers and parents can review progress at a glance.",
      accent: "#118ab2",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className="hiw-section" style={styles.section} aria-labelledby="how-title">
      <style>{`
        @keyframes floatSoft { 
          0% { transform: translateY(0); } 
          50% { transform: translateY(-6px); } 
          100% { transform: translateY(0); } 
        }
        @keyframes popIn { 
          from { opacity: 0; transform: translateY(8px) scale(.995); } 
          to { opacity: 1; transform: translateY(0) scale(1); } 
        }

        .hiw-section {
          background: radial-gradient(800px 400px at 15% 10%, rgba(124,58,237,0.15) 0%, transparent 60%),
            radial-gradient(700px 350px at 85% 30%, rgba(6,214,160,0.12) 0%, transparent 55%),
            radial-gradient(600px 300px at 40% 80%, rgba(17,138,178,0.1) 0%, transparent 50%),
            linear-gradient(180deg, rgba(245,248,255,1) 0%, rgba(235,245,255,1) 100%);
          border: 1px solid rgba(124,58,237,0.08);
          box-shadow: 0 4px 24px rgba(124,58,237,0.06);
          position: relative;
        }

        .hiw-container {
          display: grid;
          grid-template-columns: 1fr 480px;
          gap: 28px;
          align-items: start;
        }

        .hiw-left {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .hiw-title {
          margin: 0;
          font-size: clamp(24px, 3.6vw, 36px);
          font-weight: 900;
          color: #04223A;
          letter-spacing: -0.6px;
          line-height: 1.2;
        }

        .hiw-lead {
          margin: 0;
          color: rgba(4,34,58,0.8);
          max-width: 680px;
          font-size: 15px;
          line-height: 1.6;
        }

        .hiw-kv-row {
          display: flex;
          gap: 12px;
          margin-top: 6px;
          flex-wrap: wrap;
        }

        .hiw-kv {
          display: flex;
          gap: 12px;
          align-items: center;
          min-width: 240px;
          background: rgba(255,255,255,0.98);
          padding: 10px 12px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(2,6,23,0.04);
          border: 1px solid rgba(2,6,23,0.04);
        }

        .hiw-kv-num {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          flex-shrink: 0;
        }

        .hiw-kv-title {
          font-weight: 800;
          font-size: 13px;
          margin-bottom: 2px;
        }

        .hiw-kv-text {
          font-size: 13px;
          color: rgba(4,34,58,0.75);
        }

        .hiw-cta-row {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 10px;
        }

        .hiw-primary {
          background: linear-gradient(90deg,#7c3aed,#06d6a0);
          color: #fff;
          border: none;
          padding: 12px 18px;
          border-radius: 14px;
          fontWeight: 800;
          cursor: pointer;
          box-shadow: 0 12px 36px rgba(6,214,160,0.12);
          font-family: inherit;
          transition: transform 0.2s ease;
        }

        .hiw-primary:hover {
          transform: translateY(-2px);
        }

        .hiw-ghost {
          color: #04223A;
          text-decoration: none;
          font-weight: 700;
          padding: 10px 12px;
          border-radius: 10px;
          background: rgba(255,255,255,0.9);
          box-shadow: 0 6px 18px rgba(2,6,23,0.04);
          transition: all 0.2s ease;
        }

        .hiw-ghost:hover {
          background: rgba(255,255,255,1);
          box-shadow: 0 8px 20px rgba(2,6,23,0.08);
        }

        .hiw-steps {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 12px;
          align-items: start;
        }

        .hiw-step-card {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 12px;
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.96));
          border: 1px solid rgba(2,6,23,0.04);
          box-shadow: 0 12px 30px rgba(2,6,23,0.04);
          min-height: 112px;
          transition: transform 220ms ease, box-shadow 220ms ease;
          cursor: default;
        }

        .hiw-step-card:hover {
          transform: translateY(-6px) scale(1.006);
          box-shadow: 0 28px 68px rgba(2,6,23,0.12);
        }

        .hiw-step-icon-wrap {
          flex: 0 0 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hiw-step-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          background: rgba(0,0,0,0.02);
        }

        .hiw-step-body {
          flex: 1;
        }

        .hiw-step-title {
          margin: 0 0 6px 0;
          font-size: 15px;
          font-weight: 800;
          color: #04223A;
        }

        .hiw-step-desc {
          margin: 0;
          font-size: 13px;
          color: rgba(4,34,58,0.76);
          line-height: 1.5;
        }

        .hiw-step-footer {
          margin-top: 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .hiw-step-link {
          font-weight: 800;
          text-decoration: none;
          font-size: 13px;
          transition: opacity 0.2s ease;
        }

        .hiw-step-link:hover {
          opacity: 0.8;
        }

        .hiw-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(4,34,58,0.06);
        }

        /* Tablet: Stack layout and adjust steps grid */
        @media (max-width: 1024px) {
          .hiw-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .hiw-left {
            text-align: center;
          }

          .hiw-lead {
            margin-left: auto;
            margin-right: auto;
          }

          .hiw-kv-row {
            justify-content: center;
          }

          .hiw-cta-row {
            justify-content: center;
          }

          .hiw-steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        /* Mobile: Single column + vertical adjustments */
        @media (max-width: 768px) {
          .hiw-section {
            padding: 40px 20px !important;
          }

          .hiw-title {
            font-size: clamp(20px, 4vw, 28px);
          }

          .hiw-lead {
            font-size: 14px;
          }

          .hiw-kv-row {
            flex-direction: column;
            align-items: center;
            gap: 16px;
          }

          .hiw-kv {
            width: 100%;
            max-width: 320px;
            min-width: auto;
          }

          .hiw-cta-row {
            flex-direction: column;
            align-items: stretch;
            max-width: 280px;
            margin-left: auto;
            margin-right: auto;
            gap: 16px;
          }

          .hiw-primary,
          .hiw-ghost {
            width: 100%;
            text-align: center;
            padding: 14px 16px;
          }

          .hiw-steps {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .hiw-step-card {
            flex-direction: column;
            text-align: center;
            gap: 16px;
            padding: 20px;
            align-items: center;
          }

          .hiw-step-icon-wrap {
            align-self: center;
            margin-bottom: 0;
          }

          .hiw-step-footer {
            justify-content: center;
          }

          .hiw-dot {
            display: none;
          }
        }

        /* Small mobile adjustments */
        @media (max-width: 480px) {
          .hiw-section {
            padding: 32px 16px !important;
          }

          .hiw-steps {
            gap: 16px;
          }

          .hiw-kv {
            min-width: auto;
            flex-direction: column;
            text-align: center;
            gap: 8px;
            padding: 16px;
          }

          .hiw-kv-num {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .hiw-container {
            max-width: 1300px;
            margin: 0 auto;
          }
        }

        /* Disable hover effects on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .hiw-step-card:hover {
            transform: none;
            box-shadow: 0 12px 30px rgba(2,6,23,0.04);
          }
          
          .hiw-primary:hover {
            transform: none;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hiw-step-card {
            animation: none !important;
            transition: none !important;
          }
          
          .hiw-step-card:hover {
            transform: none !important;
          }
          
          .hiw-primary:hover {
            transform: none !important;
          }
        }
      `}</style>

      <div className="hiw-container">
        {/* Left — intro + headline */}
        <div className="hiw-left">
          <h2 id="how-title" className="hiw-title">
            How it works
          </h2>
          <p className="hiw-lead">
            Short, playful sessions that teach math and logic. Pick a game, play rounds, and watch progress add up.
            Everything is safe, friendly, and designed for kids.
          </p>

          <div className="hiw-kv-row">
            <div className="hiw-kv">
              <div className="hiw-kv-num" style={{ background: "linear-gradient(90deg,#7c3aed,#06d6a0)" }}>1</div>
              <div>
                <div className="hiw-kv-title">Fast setup</div>
                <div className="hiw-kv-text">No install — play in the browser on any device.</div>
              </div>
            </div>

            <div className="hiw-kv">
              <div className="hiw-kv-num" style={{ background: "linear-gradient(90deg,#06d6a0,#118ab2)" }}>2</div>
              <div>
                <div className="hiw-kv-title">Kid-first controls</div>
                <div className="hiw-kv-text">Big buttons, clear goals, and safe defaults for classrooms.</div>
              </div>
            </div>
          </div>

          <div className="hiw-cta-row">
            <button className="hiw-primary" onClick={() => (window.location.hash = "#play")} aria-label="Start playing">
              ▶ Try a demo
            </button>
            <a href="#learn-more" className="hiw-ghost">
              Learn more →
            </a>
          </div>
        </div>

        {/* Right — step cards */}
        <div className="hiw-right">
          <div className="hiw-steps" role="list" aria-label="How it works steps">
            {steps.map((s, i) => (
              <article
                key={s.id}
                className="hiw-step-card"
                role="listitem"
                aria-labelledby={`step-${s.id}-title`}
                style={{
                  animation: `popIn 420ms cubic-bezier(.2,.9,.25,1) ${i * 80}ms both`,
                }}
              >
                <div 
                  className="hiw-step-icon-wrap" 
                  style={{ boxShadow: `0 12px 28px ${hexToRgba(s.accent, 0.12)}` }}
                >
                  <div 
                    className="hiw-step-icon-circle" 
                    style={{ color: s.accent }}
                  >
                    {s.icon}
                  </div>
                </div>

                <div className="hiw-step-body">
                  <h3 id={`step-${s.id}-title`} className="hiw-step-title">{s.title}</h3>
                  <p className="hiw-step-desc">{s.desc}</p>
                  <div className="hiw-step-footer">
                    <a 
                      href={`#${s.id}`} 
                      className="hiw-step-link" 
                      style={{ color: s.accent }} 
                      onClick={(e) => e.preventDefault()}
                    >
                      See example →
                    </a>
                    <div className="hiw-dot" aria-hidden />
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

/* ---------- styles & helper function ---------- */
const styles = {
  section: {
    padding: "56px 20px",
    maxWidth: 1180,
    margin: "0 auto",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#072039",
  },
};

function hexToRgba(hex, a = 1) {
  const h = hex.replace("#", "");
  const hx = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
  const bigint = parseInt(hx, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}