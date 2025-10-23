import React from "react";

const AdvertisingSection = () => {
  return (
    <section style={styles.section}>
      <style>{`
        @keyframes floatIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 rgba(255,255,255,0); }
          50% { box-shadow: 0 0 20px rgba(255,255,255,0.5); }
        }
        @media (max-width: 780px) {
          .ads-container { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="ads-container" style={styles.container}>
        {/* Left: Text and CTA */}
        <div style={styles.left}>
          <h2 style={styles.title}>Advertise With Us 🎯</h2>
          <p style={styles.text}>
            Reach thousands of students, parents, and educators who visit our platform daily.
            Showcase your brand in a fun and educational environment that inspires learning and play.
          </p>
          <div style={styles.buttons}>
            <button style={styles.primaryBtn}>Start Advertising</button>
            <button style={styles.secondaryBtn}>View Packages</button>
          </div>
        </div>

        {/* Right: Floating Ad Illustration */}
        <div style={styles.right}>
          <div style={styles.adBox}>
            <div style={styles.adScreen}>
              <p style={styles.adHeadline}>Your Ad Here 🚀</p>
              <p style={styles.adSub}>Engage. Educate. Inspire.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%)",
    color: "#fff",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: 1200,
    margin: "0 auto",
    gap: 40,
    animation: "floatIn 1s ease-out",
  },
  left: {
    flex: 1,
    animation: "floatIn 1.2s ease-out",
  },
  title: {
    fontSize: "clamp(28px, 3vw, 40px)",
    fontWeight: "900",
    marginBottom: 16,
    lineHeight: 1.2,
  },
  text: {
    fontSize: 16,
    lineHeight: 1.6,
    opacity: 0.9,
    maxWidth: 540,
  },
  buttons: {
    display: "flex",
    gap: 12,
    marginTop: 24,
    flexWrap: "wrap",
  },
  primaryBtn: {
    background: "#fff",
    color: "#7c3aed",
    border: "none",
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 700,
    cursor: "pointer",
    transition: "0.3s ease",
    animation: "pulseGlow 2s infinite ease-in-out",
  },
  secondaryBtn: {
    background: "transparent",
    border: "2px solid #fff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: 12,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "floatIn 1.4s ease-out",
  },
  adBox: {
    width: 280,
    height: 180,
    borderRadius: 20,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255,255,255,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotate(-6deg)",
    animation: "pulseGlow 3s infinite ease-in-out",
  },
  adScreen: {
    textAlign: "center",
    color: "#fff",
  },
  adHeadline: {
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 6,
  },
  adSub: {
    fontSize: 14,
    opacity: 0.9,
  },
};

export default AdvertisingSection;
