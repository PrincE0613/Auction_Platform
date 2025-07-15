import React from "react";
import "./App.css";
import logo from "./assets/react.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
    )
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.678 1.325-.991.991-1.265 2.402-1.325 3.678-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.325 3.678.991.991 2.402 1.265 3.678 1.325 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.678-1.325.991-.991 1.265-2.402 1.325-3.678.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.265-3.678-1.325-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
    )
  },
  {
    href: "https://www.facebook.com/",
    label: "Facebook",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z"/></svg>
    )
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    svg: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    )
  }
];

function App() {
  return (
    <div className="main-font">
      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none'}}>
          <img src={logo} alt="Bidzilla Logo" className="logo-img" />
          Bidzilla
        </a>
        <ul className="nav-links">
          <li><a href="#products">Products</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#customers">Customers</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Procurement software built for your needs</h1>
        <p className="hero-desc">AI-based procurement platform that automates procurement processes, saves time and gives you complete control over your spending.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Product Highlights */}
      <section id="products" className="products-section">
        <h2 className="section-title">Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <h3>Strategic Sourcing</h3>
            <p>Streamline your sourcing process with data-driven insights and automation.</p>
          </div>
          <div className="product-card">
            <h3>eAuction Pro</h3>
            <p>Run competitive auctions smarter and faster with AI-based strategies.</p>
          </div>
          <div className="product-card">
            <h3>Supplier Management</h3>
            <p>Build stronger supplier partnerships with real-time performance and risk insights.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"The unique strategies they use during auctions help us achieve real cost reductions that aren’t always possible through face-to-face negotiations."</p>
            <div className="testimonial-author">Naveen Nanda</div>
            <div className="testimonial-role">Senior GM Procurement, Havells</div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"We integrated Procol with SAP, and it brought complete transparency to our procurement. Everything from PR to PO is now tracked, saving us 30–40% of time and costs."</p>
            <div className="testimonial-author">Rahul Wadhwa</div>
            <div className="testimonial-role">Head of Strategic Sourcing, Signature Global</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>&copy; {new Date().getFullYear()} Bidzilla. All rights reserved.</div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-social">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="footer-social-icon"
              >
                {link.svg}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
