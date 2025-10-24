import React from "react";

const ContactHero = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Get in Touch</h1>
          <p style={styles.subtitle}>
            Ready to bring digital learning to your community? We're here to help 
            transform education through technology and empower the next generation.
          </p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>42+</div>
              <div style={styles.statLabel}>Communities Reached</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>24h</div>
              <div style={styles.statLabel}>Response Time</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statLabel}>Dedicated Support</div>
            </div>
          </div>
        </div>
        
        <div style={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Children learning together in a digital classroom"
            style={styles.image}
          />
          <div style={styles.floatingCard}>
            <div style={styles.cardIcon}>💬</div>
            <div style={styles.cardContent}>
              <div style={styles.cardTitle}>Quick Response</div>
              <div style={styles.cardText}>We reply within 24 hours</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @media (max-width: 768px) {
          .contact-grid { 
            grid-template-columns: 1fr; 
            gap: 40px;
          }
          .contact-image { order: -1; }
        }
      `}</style>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(6,214,160,0.03) 100%)",
    position: "relative",
    overflow: "hidden"
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 60,
    alignItems: "center",
    animation: "fadeInUp 0.6s ease-out"
  },
  content: {
    padding: "20px 0"
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 900,
    color: "#04223A",
    margin: "0 0 1.5rem 0",
    lineHeight: 1.1,
    background: "linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "rgba(4,34,58,0.8)",
    lineHeight: 1.6,
    margin: "0 0 2.5rem 0",
    maxWidth: 500
  },
  stats: {
    display: "flex",
    gap: 40,
    marginTop: "2rem"
  },
  statItem: {
    textAlign: "left"
  },
  statNumber: {
    fontSize: "2rem",
    fontWeight: 900,
    color: "#7c3aed",
    display: "block"
  },
  statLabel: {
    fontSize: "0.9rem",
    color: "rgba(4,34,58,0.7)",
    fontWeight: 600,
    marginTop: "0.5rem"
  },
  imageContainer: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
  },
  image: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    display: "block"
  },
  floatingCard: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    background: "rgba(255,255,255,0.95)",
    padding: "15px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  cardIcon: {
    fontSize: "1.5rem"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column"
  },
  cardTitle: {
    fontSize: "0.9rem",
    fontWeight: 800,
    color: "#04223A"
  },
  cardText: {
    fontSize: "0.8rem",
    color: "rgba(4,34,58,0.7)",
    marginTop: "2px"
  }
};

export default ContactHero;