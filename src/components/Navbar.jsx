import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>
        {`
          .logo {
            font-size: 34px;
            font-weight: 800;
            color: white;
            letter-spacing: 2px;
            white-space: nowrap;
          }

          .nav-link {
            color: white;
            text-decoration: none;
            font-size: 15px;
            font-weight: 500;
            padding: 6px 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
            white-space: nowrap;
          }

          .nav-link:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: scale(1.05);
          }

          .active-link {
            background: rgba(255, 255, 255, 0.25);
            box-shadow: inset 0 0 8px rgba(255,255,255,0.2);
          }

          .nav-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          .links {
            display: flex;
            gap: 10px;
            align-items: center;
          }

          /* HAMBURGER */
          .hamburger {
            display: none;
            font-size: 28px;
            color: white;
            cursor: pointer;
          }

          /* MOBILE */
          @media (max-width: 768px) {
            .hamburger {
              display: block;
            }

            .links {
              position: absolute;
              top: 70px;
              right: 0;
              left: 0;
              background: linear-gradient(90deg, #053b3b, #0f766e, #14b8a6);
              flex-direction: column;
              align-items: center;
              padding: 15px 0;
              gap: 15px;
              display: none;
            }

            .links.open {
              display: flex;
            }
          }
        `}
      </style>

      <nav style={styles.nav}>
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">🌿 HealNest</div>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/* LINKS */}
          <div className={`links ${menuOpen ? "open" : ""}`}>
            <Link
              className={`nav-link ${isActive("/") ? "active-link" : ""}`}
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              🏠 Home
            </Link>

            <Link
              className={`nav-link ${isActive("/products") ? "active-link" : ""}`}
              to="/products"
              onClick={() => setMenuOpen(false)}
            >
              💊 Products
            </Link>

            <Link
              className={`nav-link ${isActive("/prescription") ? "active-link" : ""}`}
              to="/prescription"
              onClick={() => setMenuOpen(false)}
            >
              📄 Prescription
            </Link>

            <Link
              className={`nav-link ${isActive("/health-packages") ? "active-link" : ""}`}
              to="/health-packages"
              onClick={() => setMenuOpen(false)}
            >
              🧑‍⚕️ Packages
            </Link>

            <Link
              className={`nav-link ${isActive("/blog") ? "active-link" : ""}`}
              to="/blog"
              onClick={() => setMenuOpen(false)}
            >
              📝 Blog
            </Link>

            <Link
              className={`nav-link ${isActive("/contact") ? "active-link" : ""}`}
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              📞 Contact
            </Link>
          </div>

        </div>
      </nav>
    </>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
    padding: "10px 22px",
    background: "linear-gradient(90deg, #053b3b, #0f766e, #14b8a6)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    boxSizing: "border-box",
  },
};

export default Navbar;