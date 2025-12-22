import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

const galleryImages = [
  "/images/home-also-offer-1-of-5.jpg",
  "/images/home-destinations-1-of-9.jpg",
  "/images/home-destinations-3-of-9.jpg",
  "/images/home-destinations-4-of-9.jpg",
];

const quickFacts = [
  { label: "Duration", value: "Custom" },
  { label: "Group Size", value: "From 2 guests" },
  { label: "Location", value: "Cape Town" },
  { label: "Activity", value: "Adventure" },
];

const AdventureTours = () => {
  const { formatCurrency } = useCurrency();
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/placeholder.svg";
  };

  return (
    <>
      <section
        className="tour-hero"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(10, 28, 66, 0.7) 0%, rgba(10, 28, 66, 0.82) 70%), url(/images/home-also-offer-1-of-5.jpg)",
        }}
      >
        <div className="container">
          <div className="tour-hero-content">
            <div className="breadcrumb about-breadcrumb">
              <Link to="/">Home</Link> / Adventure Tours
            </div>
            <h1 className="tour-title">Adventure Tours</h1>
            <div className="tour-location">Cape Town</div>
            <div className="tour-hero-meta">
              <div className="tour-price-badge">From {formatCurrency(100)}</div>
              <Link className="btn btn-primary" to="/contact">
                Inquiry
              </Link>
              <div className="tour-rating">5/5 reviews</div>
            </div>
            <div className="tour-quick-facts">
              {quickFacts.map((fact) => (
                <div className="tour-fact" key={fact.label}>
                  <div className="fact-label">{fact.label}</div>
                  <div className="fact-value">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tour-main">
        <div className="container tour-grid">
          <div className="tour-content">
            <div className="card tour-gallery">
              <div className="tour-card-header">
                <h3>Gallery</h3>
                <span>Sky-high views, ocean air, and unforgettable moments.</span>
              </div>
              <div className="gallery-grid">
                {galleryImages.map((src, index) => (
                  <div className={`gallery-item ${index === 0 ? "gallery-item-large" : ""}`} key={src}>
                    <img src={src} alt="Adventure tour scene" onError={handleImageError} />
                  </div>
                ))}
              </div>
            </div>

            <div className="card tour-overview">
              <h3>Overview</h3>
              <p>
                <strong>Adventure Tours in and around Cape Town</strong>
              </p>
              <p>
                Make your trip unforgettable with curated adventure experiences, from paragliding and coastal hikes to
                adrenaline-filled day trips. Tell us what you like and we’ll build a custom itinerary.
              </p>
            </div>
          </div>

          <aside className="tour-sidebar">
            <div className="card tour-booking-card">
              <h3>Plan your adventure</h3>
              <p>Send us your dates and preferences, and we’ll get back with options.</p>
              <Link className="btn btn-primary" to="/contact">
                Inquiry
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default AdventureTours;
