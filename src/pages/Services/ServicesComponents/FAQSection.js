import React, { useState, useRef, useEffect } from "react";

/**
 * FAQSection
 * - Inline styles only (no external CSS).
 * - Accessible accordion: aria-expanded, aria-controls, keyboard nav (Enter/Space toggle, ArrowUp/ArrowDown).
 * - Smooth height transition on expand/collapse.
 * - Palette-aligned styling to match other components.
 */
export default function FAQSection() {
  const faqs = [
    {
      q: "What age/grade levels are your games designed for?",
      a: "Our mini-games target early learners through middle school — roughly grades K–9. Each activity lists suggested grades and difficulty adjusts automatically.",
    },
    {
      q: "Do I need to install anything?",
      a: "No — everything runs in the browser. Teachers can share links with students or run the games on classroom devices.",
    },
    {
      q: "Can teachers track student progress?",
      a: "Yes. The Teacher Dashboard shows class progress, time-on-task, and problem-level performance. You can also export reports for each student.",
    },
    {
      q: "How do you handle privacy and data?",
      a: "Privacy-first by design: minimal data collection, parental/teacher consent where required, and clear controls to delete or export data.",
    },
    {
      q: "Do you support offline or low-bandwidth use?",
      a: "Some activities can cache resources for brief offline use; larger classroom deployments can use our lightweight packaged bundles for restricted networks.",
    },
  ];

  // track which item is open (index), -1 = none
  const [openIndex, setOpenIndex] = useState(0);
  const panelsRef = useRef([]);
  const buttonsRef = useRef([]);

  // ensure refs arrays have correct length
  panelsRef.current = [];
  buttonsRef.current = [];

  function setPanelRef(el) {
    if (el) panelsRef.current.push(el);
  }
  function setButtonRef(el) {
    if (el) buttonsRef.current.push(el);
  }

  // When openIndex changes, update maxHeight to animate
  useEffect(() => {
    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      if (i === openIndex) {
        // expand to full scrollHeight
        panel.style.maxHeight = panel.scrollHeight + 24 + "px"; // a bit of cushion
        panel.style.opacity = "1";
      } else {
        // collapse
        panel.style.maxHeight = "0px";
        panel.style.opacity = "0";
      }
    });
  }, [openIndex]);

  function toggleIndex(i) {
    setOpenIndex((prev) => (prev === i ? -1 : i));
  }

  function onHeaderKeyDown(e, i) {
    const key = e.key;
    const last = faqs.length - 1;
    if (key === "Enter" || key === " ") {
      e.preventDefault();
      toggleIndex(i);
      return;
    }
    if (key === "ArrowDown") {
      e.preventDefault();
      const next = i === last ? 0 : i + 1;
      buttonsRef.current[next]?.focus();
      return;
    }
    if (key === "ArrowUp") {
      e.preventDefault();
      const prev = i === 0 ? last : i - 1;
      buttonsRef.current[prev]?.focus();
      return;
    }
    if (key === "Home") {
      e.preventDefault();
      buttonsRef.current[0]?.focus();
      return;
    }
    if (key === "End") {
      e.preventDefault();
      buttonsRef.current[last]?.focus();
      return;
    }
  }

  return (
    <section style={styles.section} aria-labelledby="faq-heading">
      <style>{`
        /* micro animation for arrow rotate */
        .faq-arrow { transition: transform 220ms cubic-bezier(.2,.9,.25,1); transform-origin: center; }
        .faq-arrow.open { transform: rotate(180deg); }
        @media (max-width: 720px) {
          .faq-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={styles.container}>
        <header style={styles.header}>
          <h2 id="faq-heading" style={styles.title}>
            Frequently asked questions
          </h2>
          <p style={styles.lead}>
            Quick answers to common questions about classroom use, privacy, and how our games
            support learning.
          </p>
        </header>

        <div style={styles.accordionWrap} className="faq-grid" role="list">
          {faqs.map((f, i) => {
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            const isOpen = i === openIndex;
            return (
              <div key={i} style={styles.item} role="listitem">
                <div
                  id={btnId}
                  role="button"
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  tabIndex={0}
                  ref={setButtonRef}
                  onClick={() => toggleIndex(i)}
                  onKeyDown={(e) => onHeaderKeyDown(e, i)}
                  style={{
                    ...styles.question,
                    borderColor: isOpen ? "rgba(124,58,237,0.12)" : "rgba(4,34,58,0.04)",
                    boxShadow: isOpen ? "0 14px 40px rgba(7,124,237,0.06)" : styles.question.boxShadow,
                  }}
                >
                  <div style={styles.qText}>
                    <span style={styles.qIndex}>{i + 1}</span>
                    <span style={styles.qTitle}>{f.q}</span>
                  </div>

                  <svg
                    className={`faq-arrow ${isOpen ? "open" : ""}`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                    style={{ color: "#7c3aed" }}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  ref={setPanelRef}
                  style={{
                    ...styles.answer,
                    maxHeight: isOpen ? "none" : 0,
                    overflow: "hidden",
                    transition: "max-height 360ms cubic-bezier(.2,.9,.25,1), opacity 260ms ease",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div style={styles.answerInner}>
                    <p style={styles.ansText}>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------- styles ------------------- */
const styles = {
  section: {
    padding: "56px 20px",
    background: "radial-gradient(800px 300px at 10% 8%, rgba(124,58,237,0.06), rgba(6,214,160,0.03) 35%, rgba(255,255,255,1) 100%)",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    color: "#04223A",
  },
  container: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 18,
  },
  header: {
    marginBottom: 6,
  },
  title: {
    margin: 0,
    fontSize: "clamp(20px, 3vw, 28px)",
    fontWeight: 900,
    color: "#04223A",
  },
  lead: {
    marginTop: 8,
    color: "rgba(4,34,58,0.72)",
    fontSize: 15,
    maxWidth: 780,
    lineHeight: 1.6,
  },
  accordionWrap: {
    marginTop: 18,
    display: "grid",
    gap: 12,
  },
  item: {
    display: "block",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 16px",
    borderRadius: 12,
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    border: "1px solid rgba(4,34,58,0.04)",
    cursor: "pointer",
    boxShadow: "0 10px 28px rgba(2,6,23,0.04)",
    userSelect: "none",
  },
  qText: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minWidth: 0,
  },
  qIndex: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 30,
    height: 30,
    borderRadius: 8,
    background: "linear-gradient(180deg,#7c3aed,#06d6a0)",
    color: "#fff",
    fontWeight: 800,
    fontSize: 13,
    boxShadow: "0 8px 22px rgba(7,124,237,0.12)",
  },
  qTitle: {
    fontSize: 15,
    fontWeight: 800,
    color: "#04223A",
    lineHeight: 1.25,
  },
  answer: {
    // controlled via inline style (maxHeight, opacity)
    padding: "0 2px",
  },
  answerInner: {
    padding: "12px 16px 18px 16px",
    borderRadius: "0 0 12px 12px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.99), rgba(250,250,255,0.99))",
    border: "1px solid rgba(4,34,58,0.03)",
    marginTop: 6,
  },
  ansText: {
    margin: 0,
    color: "rgba(4,34,58,0.78)",
    fontSize: 14,
    lineHeight: 1.6,
  },
};
