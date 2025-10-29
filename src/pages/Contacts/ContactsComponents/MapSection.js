import React from "react";

const MapSection = () => {
  return (
    <section style={styles.section} className="map-section">
      <style jsx>{`
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .map-section {
            padding: 3.5rem 1.5rem !important;
          }

          .map-container {
            max-width: 100% !important;
          }

          .map-header {
            margin-bottom: 3rem !important;
          }

          .map-map-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .map-title {
            font-size: 2rem !important;
          }

          .map-subtitle {
            font-size: 1rem !important;
            max-width: 500px !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .map-section {
            padding: 3rem 1.25rem !important;
          }

          .map-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .map-subtitle {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .map-map {
            height: 400px !important;
          }

          .map-locations {
            gap: 1.25rem !important;
          }

          .map-location-card {
            padding: 1.25rem !important;
          }

          .map-communities-grid {
            justify-content: center !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .map-section {
            padding: 2.5rem 1rem !important;
          }

          .map-header {
            margin-bottom: 2.5rem !important;
          }

          .map-title {
            font-size: 1.75rem !important;
          }

          .map-subtitle {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .map-map-container {
            gap: 2.5rem !important;
          }

          .map-map {
            height: 350px !important;
          }

          .map-map-text {
            padding: 1.5rem !important;
          }

          .map-map-icon {
            font-size: 2.5rem !important;
          }

          .map-map-title {
            font-size: 1.25rem !important;
          }

          .map-map-description {
            font-size: 0.9rem !important;
          }

          .map-map-button {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
            width: 100% !important;
          }

          .map-location-card {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.75rem !important;
          }

          .map-location-icon {
            width: 100% !important;
            text-align: center !important;
          }

          .map-location-contact {
            align-items: center !important;
          }

          .map-communities-grid {
            gap: 0.5rem !important;
          }

          .map-community-tag {
            font-size: 0.75rem !important;
            padding: 4px 10px !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .map-container {
            max-width: 1300px !important;
          }
        }

        /* Hover effects for non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          .map-location-card:hover {
            transform: translateY(-4px) !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.12) !important;
          }

          .map-map-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(124,58,237,0.3) !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .map-location-card,
          .map-map-button {
            transition: none !important;
          }
        }

        /* Focus states for accessibility */
        .map-map-button:focus-visible {
          outline: 3px solid rgba(124,58,237,0.3) !important;
          outline-offset: 2px !important;
        }
      `}</style>

      <div style={styles.container} className="map-container">
        <div style={styles.header} className="map-header">
          <h2 style={styles.title} className="map-title">Find Us</h2>
          <p style={styles.subtitle} className="map-subtitle">
            We work across South Africa, bringing digital education to rural and underserved communities.
          </p>
        </div>

        <div style={styles.mapContainer} className="map-map-container">
          {/* Map placeholder - you can replace this with Google Maps embed */}
          <div style={styles.map} className="map-map">
            <div style={styles.mapPlaceholder} className="map-map-placeholder">
              <div style={styles.mapText} className="map-map-text">
                <div style={styles.mapIcon} className="map-map-icon">🗺️</div>
                <h3 style={styles.mapTitle} className="map-map-title">Interactive Map</h3>
                <p style={styles.mapDescription} className="map-map-description">
                  View our locations and communities we serve across South Africa
                </p>
                <button style={styles.mapButton} className="map-map-button">
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>

          <div style={styles.locations} className="map-locations">
            <h3 style={styles.locationsTitle} className="map-locations-title">Our Main Offices</h3>
            
            <div style={styles.locationCard} className="map-location-card">
              <div style={styles.locationIcon} className="map-location-icon">🏢</div>
              <div style={styles.locationContent} className="map-location-content">
                <h4 style={styles.locationTitle} className="map-location-title">Head Office - Johannesburg</h4>
                <p style={styles.locationAddress} className="map-location-address">
                  123 Digital Street<br />
                  Sandton<br />
                  Johannesburg, 2196
                </p>
                <div style={styles.locationContact} className="map-location-contact">
                  <span style={styles.contactPhone} className="map-contact-phone">+27 11 123 4567</span>
                  <span style={styles.contactEmail} className="map-contact-email">jhb@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.locationCard} className="map-location-card">
              <div style={styles.locationIcon} className="map-location-icon">🌍</div>
              <div style={styles.locationContent} className="map-location-content">
                <h4 style={styles.locationTitle} className="map-location-title">Regional Office - Cape Town</h4>
                <p style={styles.locationAddress} className="map-location-address">
                  456 Education Avenue<br />
                  City Bowl<br />
                  Cape Town, 8001
                </p>
                <div style={styles.locationContact} className="map-location-contact">
                  <span style={styles.contactPhone} className="map-contact-phone">+27 21 987 6543</span>
                  <span style={styles.contactEmail} className="map-contact-email">ct@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.locationCard} className="map-location-card">
              <div style={styles.locationIcon} className="map-location-icon">💻</div>
              <div style={styles.locationContent} className="map-location-content">
                <h4 style={styles.locationTitle} className="map-location-title">Training Center - Durban</h4>
                <p style={styles.locationAddress} className="map-location-address">
                  789 Tech Road<br />
                  Umhlanga<br />
                  Durban, 4320
                </p>
                <div style={styles.locationContact} className="map-location-contact">
                  <span style={styles.contactPhone} className="map-contact-phone">+27 31 456 7890</span>
                  <span style={styles.contactEmail} className="map-contact-email">dbn@digitallearning.org</span>
                </div>
              </div>
            </div>

            <div style={styles.communities} className="map-communities">
              <h4 style={styles.communitiesTitle} className="map-communities-title">Communities We Serve</h4>
              <div style={styles.communitiesGrid} className="map-communities-grid">
                <span style={styles.communityTag} className="map-community-tag">Limpopo Province</span>
                <span style={styles.communityTag} className="map-community-tag">Eastern Cape</span>
                <span style={styles.communityTag} className="map-community-tag">KwaZulu-Natal</span>
                <span style={styles.communityTag} className="map-community-tag">Mpumalanga</span>
                <span style={styles.communityTag} className="map-community-tag">Northern Cape</span>
                <span style={styles.communityTag} className="map-community-tag">Free State</span>
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