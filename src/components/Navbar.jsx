import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

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
            flex-wrap: wrap;
          }

          .links {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 10px;
            flex: 1;
          }
        `}
      </style>

      <nav style={styles.nav}>
        <div className="nav-container">

          {/* LOGO */}
          <div className="logo">🌿 HealNest</div>

          {/* LINKS */}
          <div className="links">
            <Link
              className={`nav-link ${isActive("/") ? "active-link" : ""}`}
              to="/"
            >
              🏠 Home
            </Link>

            <Link
              className={`nav-link ${isActive("/products") ? "active-link" : ""}`}
              to="/products"
            >
              💊 Products
            </Link>

            <Link
              className={`nav-link ${isActive("/prescription") ? "active-link" : ""}`}
              to="/prescription"
            >
              📄 Prescription
            </Link>

            <Link
              className={`nav-link ${isActive("/health-packages") ? "active-link" : ""}`}
              to="/health-packages"
            >
              🧑‍⚕️ Packages
            </Link>

            <Link
              className={`nav-link ${isActive("/blog") ? "active-link" : ""}`}
              to="/blog"
            >
              📝 Blog
            </Link>

            <Link
              className={`nav-link ${isActive("/contact") ? "active-link" : ""}`}
              to="/contact"
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