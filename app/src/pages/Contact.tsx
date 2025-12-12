import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/placeholder.svg";
  };

  return (
    <>
      <section className="hero contact">
        <div className="container hero-content">
          <h1 className="hero-title contact-title-offset">Contact</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="breadcrumb about-breadcrumb">
            <Link to="/">Home</Link> / Contact Us
          </div>
          <div className="contact-scale">
            <div className="contact-grid">
              <div className="contact-card">
                <h3>We&apos;d love to hear from you</h3>
                <p>Send us a message and we&apos;ll respond as soon as possible.</p>
                <input placeholder="Name" />
                <input placeholder="Email" type="email" />
                <textarea placeholder="Message" />
                <button className="btn btn-primary" type="button">
                  Send Message
                </button>
              </div>

              <div className="contact-highlight">
                <div className="contact-card contact-accent">
                  <h3>ViaCapeTown.com</h3>
                  <div className="contact-accent-body">
                    <p className="contact-accent-text contact-accent-tel">Tel: +27 (0) 71 324 9488</p>
                    <p className="contact-accent-text">Email: booking@viacapetown.com</p>
                    <p className="contact-accent-text">101 Loop St, Cape Town City Centre, Cape Town, 8001</p>
                  </div>
                </div>
                <img
                  className="contact-floating-image"
                  src="/images/contact-us-behind-orange.jpg"
                  alt="Tropical island"
                  onError={handleImageError}
                />
              </div>
            </div>

            <div className="map">
              <img src="/images/contact-us-map.jpg" alt="Cape Town map" onError={handleImageError} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
