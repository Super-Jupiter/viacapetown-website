import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const BaseFooter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container inner">
          <div className="newsletter-heading">
            <img className="newsletter-logo" src="/images/viacapetown-logo.webp" alt="ViaCapeTown logo" />
            <div>
              <div className="newsletter-title">Get Updates &amp; Promotions</div>
              <div style={{ color: "#5c6a86" }}>Thoughtful ideas to your inbox</div>
            </div>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" />
            <button className="btn btn-primary" type="button">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-title">Need Help?</div>
            <div className="footer-contact">
              <span>Call Us</span>
              <strong>+27 (0) 71 324 9488</strong>
              <span>Email Us</span>
              <strong>booking@viacapetown.com</strong>
              <span>Follow Us</span>
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
            </div>
          </div>

          <div>
            <div className="footer-title">Quick Links</div>
            <Link className="footer-link" to="/">
              Home
            </Link>
            <Link className="footer-link" to="/about">
              About Us
            </Link>
            <Link className="footer-link" to="/contact">
              Contact Us
            </Link>
          </div>

          <div>
            <div className="footer-title">Support</div>
            <a className="footer-link" href="#">
              Account
            </a>
            <Link className="footer-link" to="/contact">
              Contact Us
            </Link>
            <a className="footer-link" href="#">
              Affiliate Program
            </a>
          </div>

          <div>
            <div className="footer-title">Settings</div>
            <label className="footer-link" htmlFor="currency">
              Currency
            </label>
            <select id="currency" className="currency-select">
              <option>USD</option>
              <option>EUR</option>
              <option>ZAR</option>
            </select>
          </div>
        </div>
        <div className="footer-bottom">Copyright 2025 ViaCapeTown.com. All Rights Reserved. Powered by FirstStep Consulting.</div>
      </footer>
    </>
  );
};

export default BaseFooter;
