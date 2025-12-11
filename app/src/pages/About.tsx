import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="hero about">
        <div className="container hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / About Us
          </div>
          <h1 className="hero-title">About Us</h1>
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="about-grid">
            <div className="video-card card">
              <iframe
                src="https://www.youtube.com/embed/Oe421EPjeBE"
                title="Tourism in South Africa"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="text">
                <h3>Our Story</h3>
                <p>
                  We see Cape Town as the proud gateway to Africa, connecting travelers from all over the world to extraordinary
                  journeys. From the vibrant city streets to the vast continent beyond, we inspire exploration with heart.
                </p>
              </div>
            </div>

            <div className="video-card card">
              <iframe
                src="https://www.youtube.com/embed/AGBjI0x9VbM"
                title="Visit Namibia and enjoy our space and time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="text">
                <h3>Our Mission</h3>
                <p>
                  Our mission is to deliver seamless travel experiences through Cape Town, the trusted gateway to Africa, where
                  excellence meets adventure. We provide flights, tours, cruises, and conferences with care and professionalism.
                </p>
              </div>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">100+</div>
              <div>Partners</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">2k+</div>
              <div>Properties</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">300+</div>
              <div>Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40k+</div>
              <div>Bookings</div>
            </div>
          </div>

          <div className="quote">
            &ldquo;Cape Town is the beginning, Africa is the journey, and unforgettable memories are the destination. Travel with us and
            experience the true gateway to Africa.&rdquo;
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
