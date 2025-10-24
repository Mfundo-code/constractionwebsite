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
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Send us a Message</h2>
          <p style={styles.subtitle}>
            Whether you're a school, community leader, or volunteer, we'd love to hear from you.
          </p>
        </div>

        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>
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
                  placeholder="Enter your full name"
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>
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
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="subject" style={styles.label}>
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
                placeholder="What is this regarding?"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="interest" style={styles.label}>
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                style={styles.select}
              >
                <option value="">Select an option</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="volunteer">Volunteering</option>
                <option value="donation">Making a Donation</option>
                <option value="program">Bringing Programs to My Community</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>
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
                placeholder="Tell us about your interest in digital education..."
              />
            </div>

            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>

          <div style={styles.infoCard}>
            <h3 style={styles.infoTitle}>Other Ways to Reach Us</h3>
            
            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📧</div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>Email us at</div>
                <div style={styles.contactValue}>hello@digitallearning.org</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>📞</div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>Call us</div>
                <div style={styles.contactValue}>+27 11 123 4567</div>
              </div>
            </div>

            <div style={styles.contactItem}>
              <div style={styles.contactIcon}>🕒</div>
              <div style={styles.contactDetails}>
                <div style={styles.contactLabel}>Response time</div>
                <div style={styles.contactValue}>Within 24 hours</div>
              </div>
            </div>

            <div style={styles.divider}></div>

            <h4 style={styles.infoSubtitle}>Office Hours</h4>
            <div style={styles.hours}>
              <div style={styles.hourItem}>
                <span>Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div style={styles.hourItem}>
                <span>Saturday</span>
                <span>9:00 AM - 1:00 PM</span>
              </div>
              <div style={styles.hourItem}>
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