import React, { useState } from "react";

/**
 * ServiceCard
 * - Self-contained, inline-styled React component (no external CSS / Tailwind).
 * - Props:
 *    - title (string)
 *    - description (string)
 *    - icon (React node) optional (falls back to a friendly SVG)
 *    - accent (hex color) optional (default uses shared palette)
 *    - tag (string) optional small badge
 *    - ctaText (string) optional (default "Learn more")
 *    - onClick (fn) optional
 *
 * - Works well inside lists/grids. Hover & keyboard-focus produce gentle lift.
 */

export default function ServiceCard({
  title = "Interactive Mini-Game",
  description = "Short, playful sessions that teach concepts through hands-on mechanics and instant feedback.",
  icon = null,
  accent = "#7c3aed",
  tag = "K–3",
  ctaText = "Learn more",
  onClick = () => window.location.hash && (window.location.hash = "#services"),
}) {
  const [active, setActive] = useState(false);

  const handleEnter = () => setActive(true);
  const handleLeave = () => setActive(false);
  const shadowColor = hexToRgba(accent, 0.18);

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`${title} — ${description}`}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      style={{
        ...styles.card,
        transform: active ? "translateY(-8px) scale(1.01)" : "translateY(0) scale(1)",
        boxShadow: active
          ? `0 22px 60px ${shadowColor}, 0 6px 18px rgba(4,34,58,0.06)`
          : "0 12px 30px rgba(2,6,23,0.04)",
        borderColor: active ? hexToRgba(accent, 0.12) : "rgba(4,34,58,0.04)",
      }}
    >
      <div style={{ ...styles.left }}>
        <div
          style={{
            ...styles.iconWrap,
            background: `linear-gradient(180deg, ${hexWithAlpha(accent, 0.14)}, ${hexWithAlpha(
              accent,
              0.06
            )})`,
            border: `1px solid ${hexWithAlpha(accent, 0.12)}`,
            color: accent,
            boxShadow: `0 10px 28px ${hexToRgba(accent, 0.08)}`,
          }}
          aria-hidden
        >
          {icon || DefaultSparkIcon()}
        </div>

        {tag ? <div style={{ ...styles.tag }}>{tag}</div> : null}
      </div>

      <div style={styles.body}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.desc}>{description}</p>

        <div style={styles.footer}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            style={{
              ...styles.cta,
              background: `linear-gradient(90deg, ${accent}, ${blendHex(accent, "#06D6A0", 0.45)})`,
            }}
            aria-label={ctaText}
          >
            {ctaText}
          </button>

          <a
            href="#details"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.location.hash = "#details";
            }}
            style={styles.link}
            aria-label="More details"
          >
            Details →
          </a>
        </div>
      </div>
    </article>
  );
}

/* ----------------- small default icon ----------------- */
function DefaultSparkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
      <path
        d="M12 2l2.6 5.6L20 9l-4 3.6L17 20l-5-2.6L7 20l1-7.4L4 9l5.4-1.4L12 2z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ----------------- tiny color helpers ----------------- */
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
/* simple blend between two hex colors (amount 0..1) */
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

/* ----------------- centralized inline styles ----------------- */
const styles = {
  card: {
    display: "flex",
    gap: 16,
    alignItems: "flex-start",
    padding: 16,
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,250,255,0.99))",
    border: "1px solid rgba(4,34,58,0.04)",
    cursor: "pointer",
    transition: "transform 200ms cubic-bezier(.2,.9,.25,1), box-shadow 200ms ease, border-color 160ms ease",
    minWidth: 300,
    maxWidth: 420,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    width: 76,
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
    padding: "4px 8px",
    borderRadius: 999,
    background: "rgba(4,34,58,0.04)",
    color: "rgba(4,34,58,0.9)",
    fontWeight: 700,
    boxShadow: "inset 0 -2px 6px rgba(0,0,0,0.03)",
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
    lineHeight: 1.15,
  },
  desc: {
    margin: 0,
    color: "rgba(4,34,58,0.72)",
    fontSize: 13,
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
    boxShadow: "0 8px 26px rgba(2,6,23,0.06)",
  },
  link: {
    color: "rgba(4,34,58,0.9)",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: 13,
  },
};
