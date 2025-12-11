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
          <div className="breadcrumb">
            <Link to="/">Home</Link> / Contact Us
          </div>
          <h1 className="hero-title">Contact</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
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

            <div className="contact-card" style={{ background: "#f45b3d", color: "#fff" }}>
              <h3>ViaCapeTown.com</h3>
              <p style={{ color: "#ffe8e0" }}>Email: booking@viacapetown.com</p>
              <p style={{ color: "#ffe8e0" }}>Tel: +27 (0) 71 324 9488</p>
              <p style={{ color: "#ffe8e0" }}>101 Loop St, Cape Town City Centre, Cape Town, 8001</p>
              <img
                src="/images/contact-side.jpg"
                alt="Beach"
                style={{ marginTop: 12, borderRadius: 6 }}
                onError={handleImageError}
              />
            </div>
          </div>

          <div className="map">
            <img src="/images/contact-map.jpg" alt="Cape Town map" onError={handleImageError} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
