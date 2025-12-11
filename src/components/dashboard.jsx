import React from "react";
import "../App.css";
import Logo from "../photos/logo.png";
import bgImage from "../photos/bg1.png";
import logo1 from "../photos/sosmed1.png";
import logo2 from "../photos/sosmed2.png";
import logo3 from "../photos/sosmed3.png";
import logo4 from "../photos/sosmed4.png";
import logo5 from "../photos/sosmed5.png";

const Dashboard = ({ setPage, setUser, user }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Rentverse Logo" className="logo-atas" />
        </div>

        <ul className="nav-links">
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("property")}>Property</li>
          <li onClick={() => scrollToSection("about")}>About us</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button
            className="btn-logout"
            onClick={() => {
              setUser(null);
              setPage("login");
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      <header id="home" className="hero">
        <div className="hero-content">
          <h1>
            Build Your Dream Home Live
            <br />
            the Lifestyle You Crave.
          </h1>
          <p>
            Realize your dream home. We craft spaces that are functional,
            inspiring joy, tranquility, and connection.
          </p>

          <div className="search-bar">
            <input type="text" placeholder="Search by locations..." />
            <button className="btn-search">Search</button>
          </div>
        </div>
      </header>

      <section id="about" className="stats">
        <div className="start-head">
          <h2>Trusted by Hundreds, Recognized for Excellence.</h2>
        </div>
        <div className="stats-content">
          <div className="stat-item">
            <h3>750+</h3>
            <p>
              Successfully built over 750 unique homes tailored to each client
              vision.
            </p>
          </div>
          <div className="stat-item">
            <h3>200+</h3>
            <p>
              Expertise in building functional and inspiring spaces, from office
              to retail.
            </p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>A decade of dedicated expertise ensuring timeless quality.</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Honored with numerous industry awards for our innovative.</p>
          </div>
        </div>
      </section>

      <section id="property" className="property-section">
        <h2>Find the property that defines your lifestyle</h2>

        <div className="property-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="property-card" key={item}>
              <img src={bgImage} alt="Rumah" className="card-img" />
              <div className="card-content">
                <span className="badge">For Rent</span>
                <h3>Georgetown</h3>
                <p className="location">
                  Bandaraya Georgetown, Northeast Penang
                </p>
                <p className="price">RM300/mo</p>

                <div className="card-specs">
                  <span>🛏️ 3 Bedrooms</span>
                  <span>🚿 1 Bathrooms</span>
                  <span>📏 500 Sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <img src={Logo} alt="Rentverse Logo" className="footer-logo" />
            <p className="footer-desc">
              The trusted platform for finding your perfect home, whether you're
              buying, renting, or selling.
            </p>
            <div className="social-icons">
              <img src={logo1} alt="sosmed" />
              <img src={logo2} alt="sosmed" />
              <img src={logo3} alt="sosmed" />
              <img src={logo4} alt="sosmed" />
              <img src={logo5} alt="sosmed" />
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li onClick={() => scrollToSection("property")}>Property</li>
              <li>Rent</li>
              <li>Talk to an expert</li>
              <li>Blog</li>
              <li onClick={() => scrollToSection("about")}>About us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Help Center</li>
              <li>Guides & Articles</li>
              <li>Real Estate News</li>
              <li>Market Trends</li>
              <li>Mortgage Calculator</li>
            </ul>
          </div>
          
          <div className="footer-col subscribe-col">
            <h4>Stay Updated</h4>
            <p>
              Subscribe to our newsletter for the latest properties and real
              estate tips.
            </p>
            <div className="subscribe-form">
              <input type="email" placeholder="Enter Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
