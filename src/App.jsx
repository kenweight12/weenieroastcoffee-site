import { useState, useEffect } from "react";
import "./App.css";

const roasts = [
  {
    level: "Light Roast",
    name: "Sunrise Blend",
    desc: "A delicate morning cup with bright, floral complexity. Sourced from single-origin Ethiopian highlands.",
    notes: ["Jasmine", "Stone Fruit", "Honey"],
  },
  {
    level: "Medium Roast",
    name: "Slow Burn",
    desc: "Our signature all-day sipper. Balanced, nuanced, and deeply satisfying with caramel warmth.",
    notes: ["Caramel", "Dark Cherry", "Hazelnut"],
  },
  {
    level: "Dark Roast",
    name: "The Inferno",
    desc: "Bold and unapologetic. A full-throttle roast for those who take their coffee seriously.",
    notes: ["Dark Chocolate", "Smoke", "Espresso"],
  },
];

const procesSteps = [
  {
    num: "01",
    title: "Source",
    desc: "We travel to origin — Ethiopia, Colombia, Sumatra — to meet the farmers and select our green beans by hand.",
  },
  {
    num: "02",
    title: "Profile",
    desc: "Every bean gets a custom roast curve, dialed by temperature, time, and airflow to coax out its best character.",
  },
  {
    num: "03",
    title: "Roast",
    desc: "Small-batch roasted on our vintage drum roaster. Each batch is less than 15 lbs, never rushed, never repeated the same way twice.",
  },
  {
    num: "04",
    title: "Rest",
    desc: "We let the roasted coffee degas for 24–48 hours before packing. Patience is the secret ingredient.",
  },
];

const marqueeItems = [
  "Small-Batch Roasted", "Tampa, Florida", "Est. 2019", "Direct Trade",
  "Single Origin Blends", "Freshness Guaranteed", "Handcrafted Daily", "Specialty Grade Only",
  "Small-Batch Roasted", "Tampa, Florida", "Est. 2019", "Direct Trade",
  "Single Origin Blends", "Freshness Guaranteed", "Handcrafted Daily", "Specialty Grade Only",
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <>
      {/* NAV */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo">
          <img src="/logo.png" alt="Weenie Roast Coffee Co." className="nav-logo-img" />
        </div>
        <ul className="nav-links">
          <li><a href="#roasts">Roasts</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button
          className="nav-cta"
          onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
        >
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />
        <div className="hero-inner">
          <div className="hero-logo-wrap">
            <img src="/logo.png" alt="Weenie Roast Coffee Co." className="hero-logo" />
          </div>
          <p className="hero-eyebrow">Small-Batch • Tampa, FL • Est. 2019</p>
          <h1 className="hero-title">
            Coffee that<em>means it.</em>
          </h1>
          <p className="hero-sub">
            We roast to order. Every batch pulled by hand, profiled to the bean, shipped while it
            still smells like fire and possibility.
          </p>
          <div className="hero-actions">
            <a href="#roasts" className="btn-primary">Explore Roasts</a>
            <a href="#about" className="btn-ghost">Our Story</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              {i < marqueeItems.length - 1 && <span className="marquee-dot" />}
            </span>
          ))}
        </div>
      </div>

      {/* ROASTS */}
      <div id="roasts">
        <div className="section">
          <p className="section-label">Our Offerings</p>
          <h2 className="section-title">The <em>lineup.</em></h2>
          <div className="roasts-grid">
            {roasts.map((r) => (
              <div key={r.name} className="roast-card">
                <p className="roast-level">{r.level}</p>
                <h3 className="roast-name">{r.name}</h3>
                <p className="roast-desc">{r.desc}</p>
                <div className="roast-notes">
                  {r.notes.map((n) => (
                    <span key={n} className="roast-note">{n}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div id="about">
        <div className="section">
          <div className="about-wrap">
            <div className="about-visual">
              <div className="about-visual-inner">
                <div className="about-visual-text">W R</div>
              </div>
              <span className="about-year">Est. 2019</span>
              <div className="about-accent" />
            </div>
            <div className="about-body">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">Born from <em>obsession.</em></h2>
              <p>
                Weenie Roast Coffee Co. started as a backyard experiment in Tampa — a 1-pound drum
                roaster, a spreadsheet full of time-temperature logs, and a stubborn belief that
                great coffee deserves a great story.
              </p>
              <p>
                We don't chase volume. We chase quality. Every bean we buy is traceable to the farm,
                every roast profile is dialed by ear and eye, and every bag is sealed within 48 hours
                of roasting so it reaches you the way we intended.
              </p>
              <p>
                The name? A reminder that good things take heat, patience, and a little irreverence.
              </p>
              <div className="about-stats">
                <div>
                  <div className="about-stat-num">40+</div>
                  <div className="about-stat-label">Origins Sourced</div>
                </div>
                <div>
                  <div className="about-stat-num">5K</div>
                  <div className="about-stat-label">Bags Shipped / Mo</div>
                </div>
                <div>
                  <div className="about-stat-num">6yr</div>
                  <div className="about-stat-label">Roasting Since</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div id="process" className="process-section">
        <div className="section">
          <p className="section-label">How We Do It</p>
          <h2 className="section-title">The <em>craft.</em></h2>
          <div className="process-steps">
            {procesSteps.map((p) => (
              <div key={p.num} className="process-step">
                <div className="process-num">{p.num}</div>
                <div className="process-title">{p.title}</div>
                <div className="process-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div id="contact">
        <div className="section">
          <div className="contact-wrap">
            <div className="contact-info">
              <p className="section-label">Get In Touch</p>
              <h2 className="section-title">Let's <em>talk.</em></h2>
              <p>
                Wholesale inquiries, custom roast profiles, event catering, or just want to geek out
                on green coffee? We're all ears.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">hello@weenieroast.co</span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">
                    Tampa, Florida<br />
                    Available for local pickup &amp; nationwide shipping
                  </span>
                </div>
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Hours</span>
                  <span className="contact-detail-value">Mon – Fri, 8am – 5pm EST</span>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="form-success">
                  ✓ &nbsp; Message received. We'll be in touch within one business day. Thanks for
                  reaching out.
                </div>
              ) : (
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select a topic…</option>
                      <option>Wholesale Inquiry</option>
                      <option>Custom Roast Profile</option>
                      <option>Event / Catering</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell us what's on your mind…"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="form-submit" disabled={submitting}>
                    {submitting ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/logo.png" alt="Weenie Roast Coffee Co." className="footer-logo-img" />
          <span className="footer-copy-inline">© 2026</span>
        </div>
        <ul className="footer-links">
          <li><a href="#roasts">Roasts</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-copy">Roasted with obsession · Tampa, FL</p>
      </footer>
    </>
  );
}
