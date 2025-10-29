// src/GlobalComponents/Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaProjectDiagram,
  FaServicestack,
} from "react-icons/fa";
import LogoB from "../assets/images/LogoB.png";

const Header = ({ cartCount = 0 }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown((s) => !s);
  const toggleMobileMenu = () => setMobileMenuOpen((s) => !s);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img
          src={LogoB}
          alt="Digital Learning Logo"
          style={styles.logoImage}
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav style={styles.nav} aria-label="Primary">
          <Link to="/" style={styles.navButton}>
            Home
          </Link>

          <Link to="/about" style={styles.navButton}>
            About
          </Link>

          <Link to="/services" style={styles.navButton}>
            Services
          </Link>

          <Link to="/projects" style={styles.navButton}>
            Projects
          </Link>

          <div style={styles.dropdownContainer}>
            <button
              type="button"
              style={styles.iconButton}
              onClick={toggleDropdown}
              aria-expanded={showDropdown}
              aria-label="More options"
            >
              <FaInfoCircle style={styles.largeIcon} />
            </button>

            {showDropdown && (
              <div style={styles.dropdownMenu} role="menu">
                <Link to="/about" style={styles.dropdownItem} role="menuitem">
                  About Us
                </Link>
                <Link
                  to="/contacts"
                  style={styles.dropdownItem}
                  role="menuitem"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>

          <button
            type="button"
            style={styles.iconButton}
            onClick={() => navigate("/contacts")}
            aria-label="Contact"
          >
            <FaEnvelope style={styles.largeIcon} />
            {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
          </button>
        </nav>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <div style={styles.mobileNav}>
          <button
            type="button"
            style={styles.mobileCommunicationButton}
            onClick={() => navigate("/contacts")}
            aria-label="Communication"
          >
            <FaEnvelope style={styles.largeIcon} />
            {cartCount > 0 && (
              <span style={styles.mobileCartBadge}>{cartCount}</span>
            )}
          </button>

          <button
            type="button"
            style={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <FaTimes style={styles.largeIcon} />
            ) : (
              <FaBars style={styles.largeIcon} />
            )}
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay - Using the exact same structure as original */}
      {mobileMenuOpen && isMobile && (
        <div style={styles.mobileMenuOverlay} onClick={toggleMobileMenu}>
          <div style={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              style={styles.closeButton}
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FaTimes style={styles.largeIcon} />
            </button>

            <div style={styles.mobileMenuItems}>
              <Link to="/" style={styles.mobileMenuItem} onClick={toggleMobileMenu}>
                <FaHome style={styles.mobileIcon} /> Home
              </Link>

              <Link
                to="/about"
                style={styles.mobileMenuItem}
                onClick={toggleMobileMenu}
              >
                <FaInfoCircle style={styles.mobileIcon} /> About
              </Link>

              <Link
                to="/services"
                style={styles.mobileMenuItem}
                onClick={toggleMobileMenu}
              >
                <FaServicestack style={styles.mobileIcon} /> Services
              </Link>

              <Link
                to="/projects"
                style={styles.mobileMenuItem}
                onClick={toggleMobileMenu}
              >
                <FaProjectDiagram style={styles.mobileIcon} /> Projects
              </Link>

              <Link
                to="/contacts"
                style={styles.mobileMenuItem}
                onClick={toggleMobileMenu}
              >
                <FaEnvelope style={styles.mobileIcon} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(250,250,255,0.98))",
    color: "#04223A",
    padding: "12px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 20px rgba(2,6,23,0.08)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    height: "70px",
    borderBottom: "1px solid rgba(124,58,237,0.1)",
  },
  logoContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "45px",
    cursor: "pointer",
    maxWidth: "100%",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navButton: {
    background: "transparent",
    color: "#04223A",
    textDecoration: "none",
    borderRadius: "12px",
    padding: "10px 20px",
    fontWeight: "700",
    transition: "all 0.3s ease",
    border: "1px solid transparent",
    fontSize: "14px",
  },
  iconButton: {
    background: "rgba(124,58,237,0.08)",
    border: "none",
    color: "#7c3aed",
    padding: "10px",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    transition: "all 0.3s ease",
    fontSize: "20px",
    width: "44px",
    height: "44px",
  },
  largeIcon: {
    fontSize: "20px",
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownMenu: {
    position: "absolute",
    top: "100%",
    right: 0,
    backgroundColor: "rgba(255,255,255,0.98)",
    boxShadow: "0 12px 32px rgba(2,6,23,0.12)",
    borderRadius: "12px",
    minWidth: "200px",
    zIndex: 100,
    padding: "8px 0",
    border: "1px solid rgba(124,58,237,0.1)",
    marginTop: "8px",
  },
  dropdownItem: {
    display: "block",
    padding: "12px 20px",
    textDecoration: "none",
    color: "#04223A",
    fontWeight: "600",
    transition: "all 0.2s",
    fontSize: "14px",
  },
  cartBadge: {
    backgroundColor: "#06D6A0",
    color: "white",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    position: "absolute",
    top: "-4px",
    right: "-4px",
    boxShadow: "0 2px 8px rgba(6,214,160,0.3)",
    fontWeight: "700",
  },
  mobileNav: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  mobileMenuButton: {
    background: "rgba(124,58,237,0.08)",
    border: "none",
    color: "#7c3aed",
    cursor: "pointer",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    borderRadius: "12px",
    width: "44px",
    height: "44px",
    transition: "all 0.3s ease",
  },
  mobileCommunicationButton: {
    background: "rgba(124,58,237,0.08)",
    border: "none",
    color: "#7c3aed",
    cursor: "pointer",
    padding: "10px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    borderRadius: "12px",
    width: "44px",
    height: "44px",
    transition: "all 0.3s ease",
  },
  mobileCartBadge: {
    backgroundColor: "#06D6A0",
    color: "white",
    borderRadius: "50%",
    width: "18px",
    height: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10px",
    position: "absolute",
    top: "-4px",
    right: "-4px",
    boxShadow: "0 2px 8px rgba(6,214,160,0.3)",
    fontWeight: "700",
  },
  mobileMenuOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(2,6,23,0.4)",
    zIndex: 999,
    display: "flex",
    justifyContent: "flex-end",
  },
  mobileMenu: {
    width: "300px",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.98)",
    boxShadow: "-4px 0 32px rgba(2,6,23,0.12)",
    padding: "24px",
    position: "relative",
    overflowY: "auto",
    borderLeft: "1px solid rgba(124,58,237,0.1)",
  },
  closeButton: {
    background: "rgba(124,58,237,0.08)",
    border: "none",
    color: "#7c3aed",
    cursor: "pointer",
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "20px",
    borderRadius: "12px",
    width: "44px",
    height: "44px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileMenuItems: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "50px",
  },
  mobileMenuItem: {
    padding: "16px 20px",
    textDecoration: "none",
    color: "#04223A",
    display: "flex",
    alignItems: "center",
    borderRadius: "12px",
    transition: "all 0.3s",
    fontWeight: "600",
    backgroundColor: "rgba(124,58,237,0.04)",
    border: "1px solid transparent",
    fontSize: "16px",
  },
  mobileIcon: {
    marginRight: "16px",
    fontSize: "18px",
    color: "#7c3aed",
    width: "20px",
    textAlign: "center",
  },
};

export default Header;