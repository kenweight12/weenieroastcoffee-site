import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const roasts = [
  {
    level: "Medium Roast",
    name: "Sunrise Blend",
    desc: "A delicate morning cup with bright, floral complexity. Sourced single-origin from the highlands of Papua New Guinea.",
    notes: ["Caramel", "Dried Fruit", "Honey"],
  },
  {
     level: "Medium-Dark Roast",
    name: "Buesaco Bonfire",
    desc: "Our signature all-day sipper. Balanced, nuanced, and deeply satisfying with caramel warmth. Sourced single-origin from Buesaco, Colombia.",
    notes: ["Nutty", "Caramel", "Cocoa"], 
  },
  {
    level: "New Roast",
    name: "Coming Soon",
    desc: "The crew’s been sniffing around for something new lately… A fresh roast is currently in the works - Stay tuned.",
    notes: ["So", "Many", "Possibilities"],
  },
];

const procesSteps = [
  {
    num: "01",
    title: "Source",
    desc: "Thoughtfully source specialty coffees from growing regions around the world in search of unique flavors and coffees with real character.",
  },
  {
    num: "02",
    title: "Profile",
    desc: "Every bean gets a custom roast curve, dialed by temperature, time, and airflow to coax out its best flavor.",
  },
  {
    num: "03",
    title: "Roast",
    desc: "Small-batch roasted in our fluid bed roaster. Each batch is roasted in small quantities under 1 lb, carefully developed by hand so every bag has its own unique character and flavor profile.",
  },
  {
    num: "04",
    title: "Rest",
    desc: "We let the roasted coffee degas for 24–48 hours before packing. Patience is the secret ingredient.",
  },
];

const marqueeItems = [
  "Small-Batch Crafted", "Tampa, Florida", "Est. 2025", "Backyard Roasted",
  "Single Origin Offerings", "Freshness Guaranteed", "Handcrafted Daily", "Specialty Grade Only",
  "Small-Batch Crafted", "Tampa, Florida", "Est. 2025", "Backyard Roasted",
  "Single Origin Offerings", "Freshness Guaranteed", "Handcrafted Daily", "Specialty Grade Only",
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
  
      emailjs
        .send(
          "service_1j877p6",   // ← EmailJS → Email Services → your service ID
          "template_g9qnztb",  // ← EmailJS → Email Templates → your template ID
          {
            from_name:  formData.name,
            from_email: formData.email,
            subject:    formData.subject || "No subject",
            message:    formData.message,
          },
          "cB6QHqg3ltoqXWdUx"    // ← EmailJS → Account → API Keys → Public Key
        )
        .then(() => {
          setSubmitting(false);
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((err) => {
          console.error("EmailJS error:", err);
          setSubmitting(false);
          alert("Something went wrong. Please email us directly at hello@weenieroastcoffee.com");
        });
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
          <p className="hero-eyebrow">Small-Batch • Tampa, FL • Est. 2025</p>
          <h1 className="hero-title">
            Small dog.<em>Big flavor.</em>
          </h1>
          <p className="hero-sub">
            We roast to order. Every batch is roasted by hand, flavor profile shaped with intention, and shipped while it still carries the warmth, aroma, and energy of the roast.
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
                <img src="kenandiggy.jpeg" alt="Weenie Roast Coffee Co." />
              </div>
              <span className="about-year">Est. 2025</span>
              <div className="about-accent" />
            </div>
            <div className="about-body">
              <p className="section-label">Who We Are</p>
              <h2 className="section-title">Born from <em>experimentation.</em></h2>
              <p>
                Weenie Roast Coffee started with a simple mix of curiosity and tinkering. 
                I've always been drawn to coffee—not just drinking it, but experimenting with it. 
                Trying beans from different regions, dialing in roasts, and chasing the way each origin tells its own story through flavor.
              </p>
              <p>
                At the same time, I wanted to make coffee that felt easier on the stomach. 
                My fiancée has always loved the taste of coffee, but the acidity didn't always love her back. 
                That pushed me to keep adjusting, testing, and refining until I could create something she could actually enjoy—without compromise.
              </p>
              <p>
                The name Weenie Roast is a nod to our late puppy, Iggy, and the warmth he brought into our lives. 
                It's also a little playful double entendre on “roast”
                —a reminder not to take things too seriously, and to keep coffee fun, cozy, and always carrying a bit of campfire warmth.
              </p>
              {/*}
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
              */}
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
                Order inquiries, custom roast request, or just general
                questions? We're all ears.
              </p>
              <div className="contact-detail">
                <div className="contact-detail-item">
                  <span className="contact-detail-label">Email</span>
                  <span className="contact-detail-value">hello@weenieroastcoffee.com</span>
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
                      {/* <option>Wholesale Inquiry</option> */}
                      <option>I'd Like To Order</option>
                      <option>Custom Roast Request</option>
                      {/*<option>Event / Catering</option> */}
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
