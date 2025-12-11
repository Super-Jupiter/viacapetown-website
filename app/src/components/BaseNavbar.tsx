import { FaEnvelope, FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const BaseNavbar = () => {
  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header>
      <div className="topbar">
        <div className="container inner">
          <div className="topbar-left">
            <span className="topbar-contact">
              <FaEnvelope /> booking@viacapetown.com
            </span>
            <span className="topbar-contact">
              <FaPhone /> +27 (0) 71 324 9488
            </span>
          </div>
          <div className="topbar-right">
            <div className="social">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
            <div className="top-actions">
              <a href="#">Login</a>
              <a href="#">Sign Up</a>
              <select className="currency-select" defaultValue="USD">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="ZAR">ZAR</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container inner">
          <div className="brand">
            <img src="/images/logo.png" alt="ViaCapeTown" />
            <div className="brand-name">ViaCapeTown</div>
          </div>
          <nav className="nav-links">
            <NavLink to="/" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact Us
            </NavLink>
          </nav>
          <div className="nav-actions">
            <div>Call us</div>
            <div>+27 (0) 71 324 9488</div>
            <div>booking@viacapetown.com</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BaseNavbar;
