import React from "react";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

type CourseHighlight = {
  course: string;
  location: string;
  highlights: string;
};

const courseHighlights: CourseHighlight[] = [
  {
    course: "Fancourt - The Links",
    location: "George, Western Cape",
    highlights: "Premier course by Gary Player, hosting the Presidents Cup. Links-style play with mountain views.",
  },
  {
    course: "Leopard Creek Country Club",
    location: "Mbombela, Mpumalanga",
    highlights: "Wildlife on the course - zebras, hippos, giraffes - bordering Kruger Park.",
  },
  {
    course: "Pearl Valley Golf & Country Club",
    location: "Paarl",
    highlights: "Jack Nicklaus course in a stunning Winelands setting.",
  },
  {
    course: "Arabella Golf Club",
    location: "Kleinmond",
    highlights: "Coastal course with native wildlife and lagoon views.",
  },
  {
    course: "Durban Country Club",
    location: "Durban",
    highlights: "Coastal championship course on sandy dunes.",
  },
  {
    course: "East London Golf Club",
    location: "Eastern Cape",
    highlights: "Historic seaside layout on wind-buffeted dunes.",
  },
  {
    course: "Sishen Golf Club",
    location: "Kathu, Northern Cape",
    highlights: "Desert oasis with undulating terrain.",
  },
  {
    course: "Glendower Golf Club",
    location: "Johannesburg",
    highlights: "USGA-spec parkland course with classic bunkering.",
  },
  {
    course: "St Francis Links",
    location: "St Francis Bay",
    highlights: "Rugged seaside terrain with natural sandy greens.",
  },
  {
    course: "Milnerton & Royal Cape",
    location: "Cape Town surrounds",
    highlights: "Local favourites offering mountain and ocean views.",
  },
];

const packageInclusions = [
  "Tee times and green fees",
  "Private transfers and club rental",
  "Wine-farm visits or Big 5 safari add-ons",
  "Optional pro lessons or tournament-style play",
  "Unique wildlife experiences like game-drive golf",
];

const galleryImages = [
  "/images/golf-tours-hero.jpg",
  "/images/golf-tours-2.jpg",
  "/images/golf-tours-3.jpg",
  "/images/golf-tours-4.jpg",
  "/images/golf-tours-5.jpg",
];

const quickFacts = [
  { label: "Duration", value: "Flexible itineraries" },
  { label: "Tour Type", value: "Daily tour" },
  { label: "Group Size", value: "4 people" },
  { label: "Languages", value: "English + hosted options" },
];

const GolfTours = () => {
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
            "linear-gradient(180deg, rgba(10, 28, 66, 0.6) 0%, rgba(10, 28, 66, 0.78) 70%), url(/images/golf-tours-hero.jpg)",
        }}
      >
        <div className="container">
          <div className="tour-hero-content">
            <div className="breadcrumb about-breadcrumb">
              <Link to="/">Home</Link> / Golf Tours
            </div>
            <h1 className="tour-title">Golf Tours</h1>
            <div className="tour-location">South Africa</div>
            <div className="tour-hero-meta">
              <div className="tour-price-badge">From {formatCurrency(3000)}</div>
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
                <span>Signature fairways, wildlife, and Winelands views.</span>
              </div>
              <div className="gallery-grid">
                {galleryImages.map((src, index) => (
                  <div className={`gallery-item ${index === 0 ? "gallery-item-large" : ""}`} key={src}>
                    <img src={src} alt="Golf tour scene" onError={handleImageError} />
                  </div>
                ))}
              </div>
            </div>

            <div className="card tour-overview">
              <h3>Overview</h3>
              <p>
                <strong>Breathtaking Golf Tours on South Africa&apos;s Top 10 Courses</strong>
              </p>
              <p>
                Cape Town&apos;s sunny climate and rich golf heritage make it a golfer&apos;s paradise. From Gary Player&apos;s
                legendary designs to world-class greens, here are the top courses we feature in luxury packages.
              </p>

              <div className="tour-table-wrapper">
                <table className="tour-table">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Location</th>
                      <th>Highlights</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseHighlights.map((item) => (
                      <tr key={item.course}>
                        <td>{item.course}</td>
                        <td>{item.location}</td>
                        <td>{item.highlights}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h4>Our Packages</h4>
              <ul className="tour-list">
                {packageInclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Featuring sunshine, landscape, legendary design, and South Africa&apos;s top golfers - from Gary Player onward - we position your golf tours for excellence and exclusivity.</p>
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
              <div className="review-empty">Be the first to review this golf escape.</div>
            </div>
          </div>

          <aside className="tour-sidebar">
            <div className="card sidebar-card">
              <div className="sidebar-price">From {formatCurrency(3000)}</div>
              <div className="sidebar-meta">Daily Tour • Group size 4 • South Africa</div>
              <Link className="btn btn-primary sidebar-btn" to="/contact">
                Plan your golf trip
              </Link>
              <div className="sidebar-note">Custom tee times, transfers, rentals, safari add-ons.</div>
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

export default GolfTours;
