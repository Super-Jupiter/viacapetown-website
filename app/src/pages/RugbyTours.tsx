import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

type Fixture = {
  event: string;
  location: string;
  highlights: string;
};

const fixtures: Fixture[] = [
  {
    event: "Springboks Test Series",
    location: "Cape Town, Johannesburg",
    highlights: "Premium seating, post-match hospitality, curated Winelands day tours.",
  },
  {
    event: "URC & Champions Cup",
    location: "Stellenbosch, Pretoria",
    highlights: "Matchday transfers, training ground visits, local fan experiences.",
  },
  {
    event: "Sevens Rugby",
    location: "Cape Town Stadium",
    highlights: "Weekend passes, rooftop sundowners, Table Mountain sunset cable car.",
  },
  {
    event: "Heritage Rugby Trails",
    location: "Western Cape",
    highlights: "Historic club fixtures, meet-and-greet legends, Winelands tastings.",
  },
];

const inclusions = [
  "Match tickets and hospitality options",
  "Private transfers and dedicated host",
  "Training ground or stadium tour (where available)",
  "Curated add-ons: Winelands, safari, shark cage diving",
  "Group formats for clubs, corporates, and families",
];

const galleryImages = [
  "/images/rugby-tours-hero.jpg",
  "/images/rugby-tours-2.jpg",
  "/images/golf-tours-4.jpg",
  "/images/golf-tours-5.jpg",
];

const quickFacts = [
  { label: "Duration", value: "Custom itineraries" },
  { label: "Tour Type", value: "Event & hospitality" },
  { label: "Group Size", value: "From 8 guests" },
  { label: "Languages", value: "English" },
];

const RugbyTours = () => {
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
            "linear-gradient(180deg, rgba(10, 28, 66, 0.7) 0%, rgba(10, 28, 66, 0.82) 70%), url(/images/rugby-tours-hero.jpg)",
        }}
      >
        <div className="container">
          <div className="tour-hero-content">
            <div className="breadcrumb about-breadcrumb">
              <Link to="/">Home</Link> / Rugby Tours
            </div>
            <h1 className="tour-title">Rugby Tours</h1>
            <div className="tour-location">South Africa</div>
            <div className="tour-hero-meta">
              <div className="tour-price-badge">From {formatCurrency(4000)}</div>
              <Link className="btn btn-primary" to="/contact">
                Inquiry
              </Link>
              <div className="tour-rating">Not Rated • 0 reviews</div>
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
                <span>Matchday energy, stadium lights, and Cape Town skylines.</span>
              </div>
              <div className="gallery-grid">
                {galleryImages.map((src, index) => (
                  <div className={`gallery-item ${index === 0 ? "gallery-item-large" : ""}`} key={src}>
                    <img src={src} alt="Rugby tour scene" onError={handleImageError} />
                  </div>
                ))}
              </div>
            </div>

            <div className="card tour-overview">
              <h3>Overview</h3>
              <p>
                <strong>Iconic Rugby Tours across South Africa</strong>
              </p>
              <p>
                From Springbok test match hospitality to Cape Town Sevens weekends, we build custom rugby escapes with premium
                seating, transfers, and unforgettable local experiences.
              </p>

              <div className="tour-table-wrapper">
                <table className="tour-table">
                  <thead>
                    <tr>
                      <th>Event</th>
                      <th>Location</th>
                      <th>Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fixtures.map((item) => (
                      <tr key={item.event}>
                        <td>{item.event}</td>
                        <td>{item.location}</td>
                        <td>{item.highlights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4>Our Packages</h4>
              <ul className="tour-list">
                {inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Purpose-built for clubs, corporates, and passionate supporters, our rugby tours combine elite match access with
                Cape Town&apos;s best food, wine, coastlines, and adventure.
              </p>
            </div>

            <div className="card tour-map">
              <div className="tour-card-header">
                <h3>Tour Location</h3>
                <span>South Africa</span>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15190973.639671864!2d16.31993346562057!3d-28.479262094745933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1d0b68ce3ff7ff2d%3A0x53c2e8f01060a8d8!2sSouth%20Africa!5e0!3m2!1sen!2sza!4v1734030000000!5m2!1sen!2sza"
                  loading="lazy"
                  title="South Africa map"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="card tour-reviews">
              <div className="tour-card-header">
                <h3>Reviews</h3>
                <span>Not rated yet</span>
              </div>
              <div className="review-summary">
                <div className="review-score">
                  0<span>/5</span>
                </div>
                <div className="review-text">
                  <div className="review-title">Not Rated</div>
                  <div className="review-sub">Based on 0 review</div>
                </div>
              </div>
              <div className="review-empty">Be the first to review this rugby experience.</div>
            </div>
          </div>

          <aside className="tour-sidebar">
            <div className="card sidebar-card">
              <div className="sidebar-price">From {formatCurrency(4000)}</div>
              <div className="sidebar-meta">Event hospitality • Groups from 8 • South Africa</div>
              <Link className="btn btn-primary sidebar-btn" to="/contact">
                Plan your rugby tour
              </Link>
              <div className="sidebar-note">Tickets, transfers, hosts, and tailored adventure add-ons.</div>
            </div>

            <div className="card sidebar-card">
              <div className="sidebar-title">Need help?</div>
              <div className="sidebar-contact">
                <strong>Tel: +27 (0) 71 324 9488</strong>
                <span>Email: booking@viacapetown.com</span>
                <span>101 Loop St, Cape Town City Centre, 8001</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default RugbyTours;
