import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* BRAND */}
        <div style={styles.brandSection}>
          <h2 style={styles.brandName}>🌿 HealNest</h2>
          <p style={styles.subtitle}>
            Trusted Healthcare & Medicine Solutions for Everyone
          </p>
          <p style={styles.desc}>
            We provide quality medicines, online consultation, and fast delivery
            service with care and reliability.
          </p>
        </div>

        {/* LINKS */}
        <div style={styles.linksSection}>
          <h3 style={styles.heading}>Quick Links</h3>

          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>
          <Link to="/health-packages" style={styles.link}>Services</Link>
          <Link to="/blog" style={styles.link}>Blog</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>

        </div>

        {/* INFO */}
        <div style={styles.infoSection}>
          <h3 style={styles.heading}>Contact Info</h3>

          <p style={styles.infoItem}>📍 Kukarhalli, Karnataka, India</p>
          <p style={styles.infoItem}>📞 +91 98765 43210</p>
          <p style={styles.infoItem}>📧 support@healnest.com</p>

        </div>

      </div>

      <div style={styles.bottomBar}>
        <p>
          © 2026 <span style={styles.highlight}>HealNest</span> | All Rights Reserved
        </p>
      </div>

      {/* HOVER STYLES */}
      <style>
        {`
          a:hover {
            background: rgba(20, 184, 166, 0.2);
            color: #ffffff;
            padding-left: 8px;
            border-radius: 6px;
          }

          .info-hover:hover {
            background: rgba(212, 175, 55, 0.15);
            color: #ffffff;
            padding-left: 8px;
            border-radius: 6px;
            cursor: pointer;
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0b3d3a",
    color: "#fff",
    width: "100%",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "40px 60px",
    gap: "30px",
  },

  brandSection: {
    flex: "1",
    minWidth: "250px",
  },

  brandName: {
    color: "#d4af37",
    fontSize: "28px",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#cfd8dc",
    marginBottom: "10px",
  },

  desc: {
    color: "#b0bec5",
    lineHeight: "1.6",
  },

  linksSection: {
    flex: "1",
    minWidth: "200px",
    display: "flex",
    flexDirection: "column",
  },

  heading: {
    marginBottom: "10px",
    color: "#fff",
  },

  link: {
    color: "#b2dfdb",
    textDecoration: "none",
    marginBottom: "10px",
    padding: "4px 6px",
    borderRadius: "6px",
    transition: "0.3s ease",
  },

  infoSection: {
    flex: "1",
    minWidth: "250px",
    color: "#cfd8dc",
    lineHeight: "1.8",
  },

  infoItem: {
    padding: "4px 6px",
    borderRadius: "6px",
    transition: "0.3s ease",
  },

  bottomBar: {
    textAlign: "center",
    padding: "15px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  highlight: {
    color: "#d4af37",
    fontWeight: "bold",
  },
};

export default Footer;