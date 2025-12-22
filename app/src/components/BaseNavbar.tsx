import { useEffect, useRef, useState } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLock,
  FaPhone,
  FaQuestionCircle,
  FaTimes,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { CurrencyCode, useCurrency } from "../context/CurrencyContext";

const BaseNavbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const currencyMenuRef = useRef<HTMLDivElement | null>(null);
  const { currency, setCurrency } = useCurrency();
  const navClass = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");

  const currencyOptions: CurrencyCode[] = ["EUR", "AUD", "GBP", "ZAR"];

  const openLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  const openSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(false);
  };

  useEffect(() => {
    if (!isCurrencyOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (!currencyMenuRef.current?.contains(event.target as Node)) {
        setIsCurrencyOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isCurrencyOpen]);

  return (
    <header>
      <div className="topbar">
        <div className="container inner">
          <div className="topbar-left">
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
            <span className="topbar-contact">booking@viacapetown.com</span>
          </div>
          <div className="topbar-right">
            <span className="topbar-contact topbar-phone">(+27) 73 612 9488</span>
            <div className="top-actions">
              <button type="button" className="top-action-link" onClick={openLogin}>
                Login
              </button>
              <button type="button" className="top-action-link" onClick={openSignUp}>
                Sign Up
              </button>
            </div>
            <div className="currency-dropdown" ref={currencyMenuRef}>
              <button
                type="button"
                className="currency-trigger"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsCurrencyOpen((current) => !current);
                }}
              >
                {currency}
                <FaChevronDown aria-hidden="true" />
              </button>
              {isCurrencyOpen ? (
                <div className="currency-menu">
                  {currencyOptions.map((code) => (
                    <button
                      key={code}
                      type="button"
                      className="currency-item"
                      onClick={() => {
                        setCurrency(code);
                        setIsCurrencyOpen(false);
                      }}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="navbar">
        <div className="container inner">
          <div className="brand">
            <img src="/images/viacapetown-logo.webp" alt="ViaCapeTown logo" />
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
        </div>
      </div>

      {isLoginOpen ? (
        <div className="login-modal-overlay" onClick={closeModals}>
          <div className="login-modal" onClick={(event) => event.stopPropagation()}>
            <div className="login-modal-header">
              <h2>Log In</h2>
              <button type="button" className="login-modal-close" onClick={closeModals}>
                <FaTimes />
              </button>
            </div>
            <div className="login-modal-body">
              <div className="login-field">
                <input type="text" placeholder="Email or Username" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
              </div>
              <div className="login-field">
                <input type="password" placeholder="Password" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaLock />
                </span>
              </div>
              <button type="button" className="login-submit">
                Log In
              </button>
              <div className="login-options">
                <label className="login-remember">
                  <input type="checkbox" />
                  Remember me
                </label>
                <button type="button" className="login-forgot">
                  Forgot Password?
                </button>
              </div>
              <div className="login-signup">
                <span>Do not have an account?</span>
                <button type="button" className="login-signup-link" onClick={openSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isSignUpOpen ? (
        <div className="login-modal-overlay" onClick={closeModals}>
          <div className="login-modal" onClick={(event) => event.stopPropagation()}>
            <div className="login-modal-header">
              <h2>Sign Up</h2>
              <button type="button" className="login-modal-close" onClick={closeModals}>
                <FaTimes />
              </button>
            </div>
            <div className="login-modal-body">
              <div className="login-field">
                <input type="text" placeholder="Username *" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaUserCircle />
                </span>
              </div>
              <div className="login-field">
                <input type="text" placeholder="Full Name" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaQuestionCircle />
                </span>
              </div>
              <div className="login-field">
                <input type="email" placeholder="Email *" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
              </div>
              <div className="login-field">
                <input type="password" placeholder="Password *" />
                <span className="login-field-icon" aria-hidden="true">
                  <FaLock />
                </span>
              </div>
              <label className="login-remember login-terms">
                <input type="checkbox" />
                <span>
                  I have read and accept the{" "}
                  <button type="button" className="login-forgot">
                    Terms and Privacy Policy
                  </button>
                </span>
              </label>
              <button type="button" className="login-submit">
                Sign Up
              </button>
              <div className="login-signup">
                <span>Already have an account?</span>
                <button type="button" className="login-signup-link" onClick={openLogin}>
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default BaseNavbar;
