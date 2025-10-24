import React from "react";

const MapSection = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Find Us</h2>
          <p style={styles.subtitle}>
            We work across South Africa, bringing digital education to rural and underserved communities.
          </p>
        </div>

        <div style={styles.mapContainer}>
          {/* Map placeholder - you can replace this with Google Maps embed */}
          <div style={styles.map}>
            <div style={styles.mapPlaceholder}>
              <div style={styles.mapText}>
                <div style={styles.mapIcon}>🗺️</div>
                <h3 style={styles.mapTitle}>Interactive Map</h3>
                <p style={styles.mapDescription}>
                  View our locations and communities we serve across South Africa
                </p>
                <button style={styles.mapButton}>
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>

          <div style={styles.locations}>
            <h3 style={styles.locationsTitle}>Our Main Offices</h3>
            
            <div style={styles.locationCard}>
              <div style={styles.locationIcon}>🏢</div>
              <div style={styles.locationContent}>
                <h4 style={styles.locationTitle}>Head Office - Johannesburg</h4>
                <p style={styles.locationAddress}>
                  123 Digital Street<br />
                  Sandton<br />
                  Johannesburg, 2196
                </p>
                <div style={styles.locationContact}>
                  <span style={styles.contactPhone}>+27 11 123 4567</span>
                  <span style={styles.contactEmail}>jhb@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.locationCard}>
              <div style={styles.locationIcon}>🌍</div>
              <div style={styles.locationContent}>
                <h4 style={styles.locationTitle}>Regional Office - Cape Town</h4>
                <p style={styles.locationAddress}>
                  456 Education Avenue<br />
                  City Bowl<br />
                  Cape Town, 8001
                </p>
                <div style={styles.locationContact}>
                  <span style={styles.contactPhone}>+27 21 987 6543</span>
                  <span style={styles.contactEmail}>ct@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.locationCard}>
              <div style={styles.locationIcon}>💻</div>
              <div style={styles.locationContent}>
                <h4 style={styles.locationTitle}>Training Center - Durban</h4>
                <p style={styles.locationAddress}>
                  789 Tech Road<br />
                  Umhlanga<br />
                  Durban, 4320
                </p>
                <div style={styles.locationContact}>
                  <span style={styles.contactPhone}>+27 31 456 7890</span>
                  <span style={styles.contactEmail}>dbn@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.communities}>
              <h4 style={styles.communitiesTitle}>Communities We Serve</h4>
              <div style={styles.communitiesGrid}>
                <span style={styles.communityTag}>Limpopo Province</span>
                <span style={styles.communityTag}>Eastern Cape</span>
                <span style={styles.communityTag}>KwaZulu-Natal</span>
                <span style={styles.communityTag}>Mpumalanga</span>
                <span style={styles.communityTag}>Northern Cape</span>
                <span style={styles.communityTag}>Free State</span>
              </div>
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
    background: "linear-gradient(180deg, rgba(250,250,255,1) 0%, rgba(255,255,255,1) 100%)"
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "60px"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: 900,
    color: "#04223A",
    margin: "0 0 1rem 0"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "rgba(4,34,58,0.8)",
    maxWidth: 600,
    margin: "0 auto",
    lineHeight: 1.6
  },
  mapContainer: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "40px",
    alignItems: "start"
  },
  map: {
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    height: "500px"
  },
  mapPlaceholder: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(124,58,237,0.1) 0%, rgba(6,214,160,0.05) 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed rgba(4,34,58,0.1)"
  },
  mapText: {
    textAlign: "center",
    padding: "2rem"
  },
  mapIcon: {
    fontSize: "3rem",
    marginBottom: "1rem"
  },
  mapTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#04223A",
    margin: "0 0 0.5rem 0"
  },
  mapDescription: {
    color: "rgba(4,34,58,0.7)",
    margin: "0 0 1.5rem 0"
  },
  mapButton: {
    background: "linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%)",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  locations: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  locationsTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#04223A",
    margin: "0 0 1rem 0"
  },
  locationCard: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    border: "1px solid rgba(4,34,58,0.05)",
    display: "flex",
    gap: "1rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  locationIcon: {
    fontSize: "1.5rem",
    width: "40px",
    textAlign: "center"
  },
  locationContent: {
    flex: 1
  },
  locationTitle: {
    fontSize: "1.1rem",
    fontWeight: 800,
    color: "#04223A",
    margin: "0 0 0.5rem 0"
  },
  locationAddress: {
    color: "rgba(4,34,58,0.8)",
    lineHeight: "1.5",
    margin: "0 0 0.75rem 0"
  },
  locationContact: {
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem"
  },
  contactPhone: {
    fontSize: "0.9rem",
    color: "#7c3aed",
    fontWeight: 600
  },
  contactEmail: {
    fontSize: "0.9rem",
    color: "#06d6a0",
    fontWeight: 600
  },
  communities: {
    marginTop: "2rem"
  },
  communitiesTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    color: "#04223A",
    margin: "0 0 1rem 0"
  },
  communitiesGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem"
  },
  communityTag: {
    background: "rgba(124,58,237,0.1)",
    color: "#7c3aed",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.8rem",
    fontWeight: 600
  }
};

export default MapSection;