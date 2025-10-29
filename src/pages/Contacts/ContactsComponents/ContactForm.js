import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    interest: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <section style={styles.section} className="contact-form-section">
      <style jsx>{`
        /* Tablet Styles */
        @media (max-width: 1024px) {
          .contact-form-section {
            padding: 3.5rem 1.5rem !important;
          }

          .contact-form-container {
            max-width: 100% !important;
          }

          .contact-form-header {
            margin-bottom: 3rem !important;
          }

          .contact-form-form-container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }

          .contact-form-title {
            font-size: 2rem !important;
          }

          .contact-form-subtitle {
            font-size: 1rem !important;
            max-width: 500px !important;
          }
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .contact-form-section {
            padding: 3rem 1.25rem !important;
          }

          .contact-form-title {
            font-size: clamp(1.75rem, 6vw, 2.5rem) !important;
          }

          .contact-form-subtitle {
            font-size: 1rem !important;
            max-width: 480px !important;
          }

          .contact-form-form-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .contact-form-form-container {
            gap: 2.5rem !important;
          }

          .contact-form-info-card {
            padding: 1.5rem !important;
          }

          .contact-form-submit-button {
            width: 100% !important;
            text-align: center !important;
          }
        }

        /* Small Mobile Styles */
        @media (max-width: 480px) {
          .contact-form-section {
            padding: 2.5rem 1rem !important;
          }

          .contact-form-header {
            margin-bottom: 2.5rem !important;
          }

          .contact-form-title {
            font-size: 1.75rem !important;
          }

          .contact-form-subtitle {
            font-size: 0.9rem !important;
            padding: 0 0.5rem !important;
          }

          .contact-form-form-container {
            gap: 2rem !important;
          }

          .contact-form-info-card {
            padding: 1.25rem !important;
          }

          .contact-form-input,
          .contact-form-select,
          .contact-form-textarea {
            padding: 10px 12px !important;
            font-size: 0.9rem !important;
          }

          .contact-form-contact-item {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
            text-align: center !important;
          }

          .contact-form-contact-icon {
            width: 100% !important;
            text-align: center !important;
          }

          .contact-form-hour-item {
            flex-direction: column !important;
            text-align: center !important;
            gap: 0.25rem !important;
          }
        }

        /* Large Desktop */
        @media (min-width: 1440px) {
          .contact-form-container {
            max-width: 1300px !important;
          }
        }

        /* Focus states for accessibility */
        .contact-form-input:focus,
        .contact-form-select:focus,
        .contact-form-textarea:focus {
          outline: 2px solid rgba(124,58,237,0.3) !important;
          outline-offset: 2px !important;
          border-color: #7c3aed !important;
        }

        /* Hover effects for non-touch devices */
        @media (hover: hover) and (pointer: fine) {
          .contact-form-submit-button:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(124,58,237,0.3) !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .contact-form-input,
          .contact-form-select,
          .contact-form-textarea,
          .contact-form-submit-button {
            transition: none !important;
          }
        }
      `}</style>

      <div style={styles.container} className="contact-form-container">
        <div style={styles.header} className="contact-form-header">
          <h2 style={styles.title} className="contact-form-title">Send us a Message</h2>
          <p style={styles.subtitle} className="contact-form-subtitle">
            Whether you're a school, community leader, or volunteer, we'd love to hear from you.
          </p>
        </div>

        <div style={styles.formContainer} className="contact-form-form-container">
          <form onSubmit={handleSubmit} style={styles.form} className="contact-form-form">
            <div style={styles.formGrid} className="contact-form-form-grid">
              <div style={styles.formGroup} className="contact-form-form-group">
                <label htmlFor="name" style={styles.label} className="contact-form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  className="contact-form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formGroup} className="contact-form-form-group">
                <label htmlFor="email" style={styles.label} className="contact-form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  className="contact-form-input"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div style={styles.formGroup} className="contact-form-form-group">
              <label htmlFor="subject" style={styles.label} className="contact-form-label">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={styles.input}
                className="contact-form-input"
                placeholder="What is this regarding?"
              />
            </div>

            <div style={styles.formGroup} className="contact-form-form-group">
              <label htmlFor="interest" style={styles.label} className="contact-form-label">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                style={styles.select}
                className="contact-form-select"
              >
                <option value="">Select an option</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="volunteer">Volunteering</option>
                <option value="donation">Making a Donation</option>
                <option value="program">Bringing Programs to My Community</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup} className="contact-form-form-group">
              <label htmlFor="message" style={styles.label} className="contact-form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={styles.textarea}
                className="contact-form-textarea"
                placeholder="Tell us about your interest in digital education..."
              />
            </div>

            <button type="submit" style={styles.submitButton} className="contact-form-submit-button">
              Send Message
            </button>
          </form>

          <div style={styles.infoCard} className="contact-form-info-card">
            <h3 style={styles.infoTitle} className="contact-form-info-title">Other Ways to Reach Us</h3>
            
            <div style={styles.contactItem} className="contact-form-contact-item">
              <div style={styles.contactIcon} className="contact-form-contact-icon">📧</div>
              <div style={styles.contactDetails} className="contact-form-contact-details">
                <div style={styles.contactLabel} className="contact-form-contact-label">Email us at</div>
                <div style={styles.contactValue} className="contact-form-contact-value">hello@digitallearning.org</div>
              </div>
            </div>

            <div style={styles.contactItem} className="contact-form-contact-item">
              <div style={styles.contactIcon} className="contact-form-contact-icon">📞</div>
              <div style={styles.contactDetails} className="contact-form-contact-details">
                <div style={styles.contactLabel} className="contact-form-contact-label">Call us</div>
                <div style={styles.contactValue} className="contact-form-contact-value">+27 11 123 4567</div>
              </div>
            </div>

            <div style={styles.contactItem} className="contact-form-contact-item">
              <div style={styles.contactIcon} className="contact-form-contact-icon">🕒</div>
              <div style={styles.contactDetails} className="contact-form-contact-details">
                <div style={styles.contactLabel} className="contact-form-contact-label">Response time</div>
                <div style={styles.contactValue} className="contact-form-contact-value">Within 24 hours</div>
              </div>
            </div>

            <div style={styles.divider} className="contact-form-divider"></div>

            <h4 style={styles.infoSubtitle} className="contact-form-info-subtitle">Office Hours</h4>
            <div style={styles.hours} className="contact-form-hours">
              <div style={styles.hourItem} className="contact-form-hour-item">
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div style={styles.hourItem} className="contact-form-hour-item">
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div style={styles.hourItem} className="contact-form-hour-item">
                <span>Sunday</span>
                <span>Closed</span>
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
    background: "white"
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
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "60px",
    alignItems: "start"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.5rem"
  },
  formGroup: {
    display: "flex",
    flexDirection: "column"
  },
  label: {
    fontSize: "0.9rem",
    fontWeight: 700,
    color: "#04223A",
    marginBottom: "0.5rem"
  },
  input: {
    padding: "12px 16px",
    border: "2px solid rgba(4,34,58,0.1)",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    fontFamily: "inherit"
  },
  select: {
    padding: "12px 16px",
    border: "2px solid rgba(4,34,58,0.1)",
    borderRadius: "8px",
    fontSize: "1rem",
    background: "white",
    fontFamily: "inherit",
    cursor: "pointer"
  },
  textarea: {
    padding: "12px 16px",
    border: "2px solid rgba(4,34,58,0.1)",
    borderRadius: "8px",
    fontSize: "1rem",
    resize: "vertical",
    minHeight: "120px",
    fontFamily: "inherit",
    transition: "all 0.3s ease"
  },
  submitButton: {
    background: "linear-gradient(135deg, #7c3aed 0%, #06d6a0 100%)",
    color: "white",
    border: "none",
    padding: "16px 32px",
    borderRadius: "8px",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "1rem"
  },
  infoCard: {
    background: "linear-gradient(135deg, rgba(124,58,237,0.05) 0%, rgba(6,214,160,0.03) 100%)",
    padding: "2rem",
    borderRadius: "16px",
    border: "1px solid rgba(4,34,58,0.05)"
  },
  infoTitle: {
    fontSize: "1.5rem",
    fontWeight: 800,
    color: "#04223A",
    margin: "0 0 1.5rem 0"
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "1.5rem"
  },
  contactIcon: {
    fontSize: "1.5rem",
    width: "40px",
    textAlign: "center"
  },
  contactDetails: {
    flex: 1
  },
  contactLabel: {
    fontSize: "0.9rem",
    color: "rgba(4,34,58,0.7)",
    fontWeight: 600
  },
  contactValue: {
    fontSize: "1rem",
    color: "#04223A",
    fontWeight: 700,
    marginTop: "0.25rem"
  },
  divider: {
    height: "1px",
    background: "rgba(4,34,58,0.1)",
    margin: "2rem 0"
  },
  infoSubtitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#04223A",
    margin: "0 0 1rem 0"
  },
  hours: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem"
  },
  hourItem: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.9rem",
    color: "rgba(4,34,58,0.8)"
  }
};

export default ContactForm;