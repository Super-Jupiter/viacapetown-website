import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  FaBuilding,
  FaCar,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPlane,
  FaRegCalendarAlt,
  FaShip,
  FaSuitcase,
  FaUserFriends,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCurrency } from "../context/CurrencyContext";

type TabKey = "hotels" | "flights" | "tours";

type OfferCard = {
  title: string;
  image: string;
  cta: string;
  featured?: boolean;
  subtitle?: string;
  alignTopLeft?: boolean;
  description?: string;
};

type Trip = {
  title: string;
  image: string;
  price?: number;
  rating?: string;
  link?: string;
};

const searchTabs: { key: TabKey; label: string }[] = [
  { key: "hotels", label: "Booking.com" },
  { key: "flights", label: "Expedia" },
];

const expediaTabs = [
  { key: "flight", icon: <FaPlane aria-hidden="true" /> },
  { key: "stays", icon: <FaBuilding aria-hidden="true" /> },
  { key: "cars", icon: <FaCar aria-hidden="true" /> },
  { key: "packages", icon: <FaSuitcase aria-hidden="true" /> },
  { key: "cruises", icon: <FaShip aria-hidden="true" /> },
];

const offerCards: OfferCard[] = [
  {
    title: "Save Up to 40%",
    image: "/images/home-offer-1-of-3.png",
    cta: "ViaCapeTown.com",
    featured: true,
    subtitle: "By book your own flights",
  },
  { title: "Need a hotel room five minutes ago?", image: "/images/offer-hotel.jpg", cta: "Book now" },
  {
    title: "Get a great deal on a flight",
    image: "/images/home-offer-3-of-3.png",
    cta: "Flights",
    alignTopLeft: true,
    description: "Find the cheapest, quickest and best flights",
  },
];

const destinations = [
  { label: "Cape Town", image: "/images/home-destinations-1-of-9.jpg" },
  { label: "Wines & Wales", image: "/images/home-destinations-2-of-9.jpg" },
  { label: "Garden Route", image: "/images/home-destinations-3-of-9.jpg" },
  { label: "South African Safaris", image: "/images/home-destinations-4-of-9.jpg" },
  { label: "Cruise Tours", image: "/images/home-destinations-5-of-9.jpg" },
  { label: "African Islands", image: "/images/home-destinations-6-of-9.jpg" },
  { label: "Namibia & Botswana", image: "/images/home-destinations-7-of-9.jpg" },
  { label: "Explore Africa", image: "/images/home-destinations-8-of-9.jpg" },
  { label: "Antartica", image: "/images/home-destinations-9-of-9.jpg" },
];

const trips: Trip[] = [
  {
    title: "Adventure Tours",
    image: "/images/home-also-offer-1-of-5.jpg",
    price: 100,
    rating: "5/5 reviews",
    link: "/adventure-tours",
  },
  {
    title: "Golf Tours",
    image: "/images/home-also-offer-1-of-4.jpg",
    price: 20000,
    rating: "4.9 / 5 (142 reviews)",
    link: "/golf-tours",
  },
  {
    title: "Rugby Tours",
    image: "/images/home-also-offer-2-of-4.jpg",
    price: 50000,
    rating: "4.8 / 5 (110 reviews)",
    link: "/rugby-tours",
  },
  {
    title: "Conferences",
    image: "/images/home-also-offer-3-of-4.jpg",
    price: 60000,
    rating: "4.9 / 5 (88 reviews)",
  },
  {
    title: "Team Building",
    image: "/images/home-also-offer-4-of-4.jpg",
    price: 18000,
    rating: "4.7 / 5 (95 reviews)",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("hotels");
  const { formatCurrency } = useCurrency();
  const offersViewportRef = useRef<HTMLDivElement | null>(null);
  const [canScrollOffersLeft, setCanScrollOffersLeft] = useState(false);
  const [canScrollOffersRight, setCanScrollOffersRight] = useState(false);

  const updateOffersScrollState = useCallback(() => {
    const viewport = offersViewportRef.current;
    if (!viewport) return;

    const maxScrollLeft = viewport.scrollWidth - viewport.clientWidth;
    setCanScrollOffersLeft(viewport.scrollLeft > 1);
    setCanScrollOffersRight(viewport.scrollLeft < maxScrollLeft - 1);
  }, []);

  const scrollOffersByOneCard = useCallback(
    (direction: -1 | 1) => {
      const viewport = offersViewportRef.current;
      if (!viewport) return;

      const firstItem = viewport.querySelector<HTMLElement>(".offers-item");
      if (!firstItem) return;

      const viewportStyles = window.getComputedStyle(viewport);
      const gapRaw = viewportStyles.columnGap || viewportStyles.gap || "0";
      const gap = Number.parseFloat(gapRaw) || 0;
      const scrollAmount = firstItem.offsetWidth + gap;

      viewport.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    },
    []
  );

  useEffect(() => {
    updateOffersScrollState();
    window.addEventListener("resize", updateOffersScrollState);
    return () => window.removeEventListener("resize", updateOffersScrollState);
  }, [updateOffersScrollState]);
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/placeholder.svg";
  };

  return (
    <>
      <section className="hero home">
        <div className="container hero-content">
          <h1 className="hero-title">The Gateway to Africa ViaCapeTown</h1>
          <div className="search-card card">
            <div className="search-tabs">
              {searchTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`tab ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {activeTab === "hotels" ? (
              <div className="search-form booking-form">
                <div className="booking-field">
                  <div className="booking-icon" aria-hidden="true">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="booking-content">
                    <label htmlFor="destination">Destination</label>
                    <input id="destination" type="text" placeholder="City or Hotel name" />
                  </div>
                </div>
                <div className="booking-field">
                  <div className="booking-icon" aria-hidden="true">
                    <FaRegCalendarAlt />
                  </div>
                  <div className="booking-content">
                    <label htmlFor="dates">Check In - Out</label>
                    <input id="dates" type="text" placeholder="mm/dd/yyyy - mm/dd/yyyy" />
                  </div>
                </div>
                <div className="booking-field booking-field-select">
                  <div className="booking-icon" aria-hidden="true">
                    <FaUserFriends />
                  </div>
                  <div className="booking-content">
                    <label htmlFor="guests">Guests</label>
                    <input id="guests" type="text" placeholder="1 Adult - 0 Child" />
                  </div>
                  <FaChevronDown className="booking-chevron" aria-hidden="true" />
                </div>
                <button className="btn btn-primary search-submit" type="button">
                  Search
                </button>
              </div>
            ) : (
              <div className="expedia-form">
                <div className="expedia-tabs" role="tablist" aria-label="Expedia search types">
                  {expediaTabs.map((tab) => (
                    <button
                      key={tab.key}
                      className={`expedia-tab ${tab.key === "flight" ? "active" : ""}`}
                      type="button"
                      role="tab"
                      aria-selected={tab.key === "flight"}
                    >
                      {tab.icon}
                    </button>
                  ))}
                </div>
                <div className="expedia-header">
                  <span className="expedia-header-label">SEARCH</span>
                  <span className="expedia-header-sub">Flight</span>
                </div>
                <div className="expedia-fields">
                  <div className="expedia-field">
                    <label htmlFor="flying-from">Flying from</label>
                    <input id="flying-from" type="text" placeholder="City or airport" />
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="flying-to">Flying to</label>
                    <input id="flying-to" type="text" placeholder="City or airport" />
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="departing">Departing</label>
                    <input id="departing" type="text" placeholder="mm/dd/yyyy" />
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="returning">Returning</label>
                    <input id="returning" type="text" placeholder="mm/dd/yyyy" />
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="adults">Adults (18+)</label>
                    <select id="adults" defaultValue="1">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="children">Children (0-17)</label>
                    <select id="children" defaultValue="0">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div className="expedia-field">
                    <label htmlFor="infants">Infant (under 2)</label>
                    <select id="infants" defaultValue="0">
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
                <div className="expedia-actions">
                  <button className="btn btn-primary expedia-search" type="button">
                    Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="special-offers">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="offer-grid">
            {offerCards.map((offer) => (
              <div
                key={offer.title}
                className={`offer-card card ${offer.featured ? "offer-card-featured" : ""} ${
                  offer.alignTopLeft ? "offer-card-top-left" : ""
                }`}
              >
                <img src={offer.image} alt={offer.title} onError={handleImageError} />
                <div className="content">
                  {offer.featured ? (
                    <div className="featured-offer-text">
                      <div className="featured-save-line">
                        <span className="featured-save">Save</span>
                      </div>
                      <div className="featured-row">
                        <div className="featured-up-to-stack">
                          <span className="featured-up">Up</span>
                          <span className="featured-to">to</span>
                        </div>
                        <span className="featured-percent">40%</span>
                      </div>
                      <div className="featured-subline">{offer.subtitle}</div>
                    </div>
                  ) : (
                    <>
                      <div className="offer-title offer-title-light">{offer.title}</div>
                      {offer.description && <div className="offer-description">{offer.description}</div>}
                    </>
                  )}
                  <small>{offer.cta}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="destinations">
        <div className="container">
          <h2 className="section-title">Your destinations</h2>
          <div className="dest-grid">
            {destinations.map((dest) => (
              <div key={dest.label} className="dest-card card">
                <div className="dest-media">
                  <img src={dest.image} alt={dest.label} onError={handleImageError} />
                </div>
                <div className="dest-info">
                  <div className="label">{dest.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="container">
          <h2 className="section-title">We also Offer</h2>
          <div className="offers-slider">
            <button
              className="offers-arrow left"
              type="button"
              aria-label="Scroll offers left"
              onClick={() => scrollOffersByOneCard(-1)}
              disabled={!canScrollOffersLeft}
            >
              <FaChevronLeft aria-hidden="true" focusable="false" />
            </button>

            <div className="offers-viewport" ref={offersViewportRef} onScroll={updateOffersScrollState}>
              {trips.map((trip) => {
                const card = (
                  <div className="trip-card card">
                    <img src={trip.image} alt={trip.title} onError={handleImageError} />
                    <div className="trip-body">
                      <h3 style={{ margin: 0 }}>{trip.title}</h3>
                      {trip.rating ? <div className="trip-meta">{trip.rating}</div> : null}
                      {trip.price ? <div className="price">From {formatCurrency(trip.price)}</div> : null}
                    </div>
                  </div>
                );

                return (
                  <div key={trip.title} className="offers-item">
                    {trip.link ? (
                      <Link to={trip.link} className="trip-card-link">
                        {card}
                      </Link>
                    ) : (
                      card
                    )}
                  </div>
                );
              })}
            </div>

            <button
              className="offers-arrow right"
              type="button"
              aria-label="Scroll offers right"
              onClick={() => scrollOffersByOneCard(1)}
              disabled={!canScrollOffersRight}
            >
              <FaChevronRight aria-hidden="true" focusable="false" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
