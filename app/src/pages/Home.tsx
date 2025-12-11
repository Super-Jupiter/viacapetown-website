import React, { useState } from "react";

type TabKey = "hotels" | "flights" | "tours";

const searchTabs: { key: TabKey; label: string }[] = [
  { key: "hotels", label: "Hotels" },
  { key: "flights", label: "Flights" },
  { key: "tours", label: "Tours" },
];

const offerCards = [
  { title: "SAVE 40%", image: "/images/offer-save.jpg", cta: "ViaCapeTown.com" },
  { title: "Need a hotel room five minutes ago?", image: "/images/offer-hotel.jpg", cta: "Book now" },
  { title: "Get a great deal on a flight", image: "/images/offer-flight.jpg", cta: "Flights" },
];

const destinations = [
  { label: "Cape Town", image: "/images/dest-cape-town.jpg" },
  { label: "South African Safaris", image: "/images/dest-safari.jpg" },
  { label: "Namibia & Botswana", image: "/images/dest-namibia.jpg" },
  { label: "Wine & Vines", image: "/images/dest-wines.jpg" },
  { label: "Cruise Tours", image: "/images/dest-cruise.jpg" },
  { label: "Explore Africa", image: "/images/dest-africa.jpg" },
  { label: "Garden Route", image: "/images/dest-garden-route.jpg" },
  { label: "African Islands", image: "/images/dest-islands.jpg" },
  { label: "Antarctica", image: "/images/dest-antarctica.jpg" },
];

const trips = [
  {
    title: "7 Day Garden Route Tour",
    image: "/images/trip-garden-route.jpg",
    price: "From $20,000",
    rating: "4.9 / 5 (142 reviews)",
  },
  {
    title: "7 Day Cape Town Tour",
    image: "/images/trip-cape-town.jpg",
    price: "From $50,000",
    rating: "4.8 / 5 (110 reviews)",
  },
  {
    title: "7 Day Namibia Tour",
    image: "/images/trip-namibia.jpg",
    price: "From $60,000",
    rating: "4.9 / 5 (88 reviews)",
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("hotels");
  const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = "/images/placeholder.svg";
  };

  return (
    <>
      <section className="hero">
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
            <div className="search-form">
              <div className="field">
                <label htmlFor="location">Location</label>
                <select id="location">
                  <option>Cape Town</option>
                  <option>Johannesburg</option>
                  <option>Durban</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="checkin">Check In</label>
                <input id="checkin" type="date" />
              </div>
              <div className="field">
                <label htmlFor="checkout">Check Out</label>
                <input id="checkout" type="date" />
              </div>
              <div className="field">
                <label htmlFor="travellers">Travellers</label>
                <select id="travellers">
                  <option>1 Traveller</option>
                  <option>2 Travellers</option>
                  <option>3 Travellers</option>
                  <option>4+ Travellers</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="purpose">Purpose</label>
                <select id="purpose">
                  <option>Business</option>
                  <option>Leisure</option>
                  <option>Bleisure</option>
                </select>
              </div>
              <div className="field">
                <button className="btn btn-primary search-submit" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-offers">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="offer-grid">
            {offerCards.map((offer) => (
              <div key={offer.title} className="offer-card card">
                <img src={offer.image} alt={offer.title} onError={handleImageError} />
                <div className="content">
                  <div className="offer-title">{offer.title}</div>
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
                <img src={dest.image} alt={dest.label} onError={handleImageError} />
                <div className="label">{dest.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offers">
        <div className="container">
          <h2 className="section-title">We also Offer</h2>
          <div className="offers-row">
            {trips.map((trip) => (
              <div key={trip.title} className="trip-card card">
                <img src={trip.image} alt={trip.title} onError={handleImageError} />
                <div className="trip-body">
                  <h3 style={{ margin: 0 }}>{trip.title}</h3>
                  <div className="trip-meta">{trip.rating}</div>
                  <div className="price">{trip.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
