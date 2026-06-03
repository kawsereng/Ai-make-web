import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Experience", "Services", "License", "Booking"];

const EXPERIENCES = [
  {
    icon: "🚗",
    title: "Private Car Driving",
    years: "25 Years",
    desc: "Extensive expertise in chauffeuring private clients across Dhaka and all major cities of Bangladesh with utmost comfort and punctuality.",
    tags: ["Sedan", "SUV", "Luxury Cars"],
  },
  {
    icon: "🛣️",
    title: "Highway & Long Distance",
    years: "20+ Years",
    desc: "Seasoned highway driver with deep knowledge of national routes, rest stops, and safe night driving across Bangladesh and neighboring regions.",
    tags: ["Dhaka–Chittagong", "Dhaka–Sylhet", "Night Drives","Day Drives"],
  },
  {
    icon: "👔",
    title: "VIP Client Handling",
    years: "15+ Years",
    desc: "Trusted by executives, diplomats, and high-profile personalities. Trained in discretion, protocol, and executive transport standards.",
    tags: ["Executives", "Diplomats", "Airport Transfers"],
  },
];

const SERVICES = [
  {
    title: "Private Car Driver",
    price: "Daily / Monthly",
    icon: "🚘",
    color: "from-zinc-800 to-zinc-900",
    accent: "#F59E0B",
    features: [
      "Full-day availability",
      "City & outskirts coverage",
      "Flexible scheduling",
      "Professional attire",
      "Clean, safe driving record",
    ],
  },
  {
    title: "Long Distance Driver",
    price: "Per Trip",
    icon: "🗺️",
    color: "from-zinc-900 to-black",
    accent: "#F59E0B",
    features: [
      "All Bangladesh routes",
      "Night drive capability",
      "Luggage assistance",
      "Rest & fuel planning",
      "Emergency-ready",
    ],
  },
];

export default function DriverPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [formData, setFormData] = useState({ name: "", phone: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="bg-black text-white font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap');
        :root { --gold: #F59E0B; --gold-light: #FCD34D; }
        .font-display { font-family: 'Bebas Neue', sans-serif; }
        .font-body { font-family: 'DM Sans', sans-serif; }
        .gold { color: var(--gold); }
        .bg-gold { background: var(--gold); }
        .border-gold { border-color: var(--gold); }
        .hero-bg {
          background: radial-gradient(ellipse at 70% 50%, rgba(245,158,11,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 20% 80%, rgba(245,158,11,0.05) 0%, transparent 50%),
                      #000;
        }
        .stripe-line {
          background: repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 18px,
            rgba(245,158,11,0.07) 18px,
            rgba(245,158,11,0.07) 19px
          );
        }
        .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 20px 60px rgba(245,158,11,0.15); }
        .nav-pill { transition: all 0.2s ease; }
        .nav-pill:hover { color: var(--gold); }
        .nav-pill.active { color: var(--gold); border-bottom: 2px solid var(--gold); }
        .form-input {
          background: #111;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 12px 16px;
          color: white;
          width: 100%;
          transition: border-color 0.2s;
          outline: none;
          font-family: 'DM Sans', sans-serif;
        }
        .form-input:focus { border-color: var(--gold); }
        .btn-gold {
          background: var(--gold);
          color: #000;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 8px;
          transition: all 0.2s;
          letter-spacing: 0.5px;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
        }
        .btn-gold:hover { background: var(--gold-light); transform: scale(1.03); }
        .btn-outline {
          background: transparent;
          color: var(--gold);
          border: 2px solid var(--gold);
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 8px;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
        }
        .btn-outline:hover { background: var(--gold); color: #000; }
        .license-card {
          background: linear-gradient(135deg, #1a1a1a 0%, #111 100%);
          border: 1px solid #2a2a2a;
          border-radius: 16px;
        }
        .whatsapp-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 1000;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 24px rgba(37,211,102,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
          text-decoration: none;
          animation: pulse-green 2.5s infinite;
        }
        .whatsapp-btn:hover { transform: scale(1.12); box-shadow: 0 6px 32px rgba(37,211,102,0.6); }
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 4px 24px rgba(37,211,102,0.4); }
          50% { box-shadow: 0 4px 36px rgba(37,211,102,0.65); }
        }
        .section-label {
          font-size: 11px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--gold);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
        }
        .divider { width: 48px; height: 3px; background: var(--gold); border-radius: 2px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeup { animation: fadeUp 0.8s ease forwards; }
        .animate-fadeup-d1 { animation: fadeUp 0.8s 0.15s ease both; }
        .animate-fadeup-d2 { animation: fadeUp 0.8s 0.3s ease both; }
        .animate-fadeup-d3 { animation: fadeUp 0.8s 0.45s ease both; }
        .tag {
          background: rgba(245,158,11,0.12);
          color: var(--gold);
          border: 1px solid rgba(245,158,11,0.25);
          border-radius: 20px;
          padding: 3px 12px;
          font-size: 12px;
          font-weight: 500;
        }
        .star { color: var(--gold); }
        .nav-sticky {
          background: rgba(0,0,0,0.92);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 24px rgba(0,0,0,0.4);
        }
        .section-alt { background: #0a0a0a; }
        .avatar-ring {
          border: 3px solid var(--gold);
          box-shadow: 0 0 0 6px rgba(245,158,11,0.1);
        }
        @media (max-width: 640px) {
          .hero-number { font-size: 80px; }
        }
      `}</style>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-sticky" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center font-display text-black text-lg">MD</div>
            <span className="font-display text-xl tracking-widest gold">SHIPON</span>
            <div className="font-body text-gray-500 text-xs">Professional Driver · Bangladesh</div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link.toLowerCase())}
                  className={`nav-pill font-body text-sm font-medium pb-1 ${activeSection === link ? "active" : "text-gray-300"}`}
                >
                  {link}
                </button>
              </li>
            ))}
            <li>
              <a href="tel:+8801700000000" className="btn-gold text-sm py-2 px-5 rounded-lg">Call Now</a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-1">
            <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-zinc-800 px-5 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className="text-left font-body text-sm text-gray-300 py-2 border-b border-zinc-900 hover:text-yellow-400 transition"
              >
                {link}
              </button>
            ))}
            <a href="tel:+8801716730970" className="btn-gold text-center text-sm mt-2">📞 Call Now</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="hero-bg stripe-line min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label animate-fadeup mb-4">Professional Driver · Bangladesh</p>
            <h1 className="font-display text-7xl md:text-8xl leading-none animate-fadeup-d1">
              MD SHIPON<br />
              <span className="gold">MRIDHA</span>
            </h1>
            <div className="flex items-center gap-4 mt-6 animate-fadeup-d2">
              <div className="divider" />
              <p className="font-body text-gray-300 text-lg">25 Years of Safe & Trusted Driving</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-8 animate-fadeup-d2">
              {["Private Car", "VIP Service", "Long Distance", "Airport Transfers"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-10 animate-fadeup-d3">
              <a href="tel:+8801716730970" className="btn-gold">📞 Call Now</a>
              <button onClick={() => scrollTo("booking")} className="btn-outline">Book a Ride</button>
            </div>
          </div>

          {/* Stats Panel */}
          <div className="grid grid-cols-2 gap-4 animate-fadeup-d2">
            {[
              { num: "25+", label: "Years Experience" },
              { num: "500+", label: "Happy Clients" },
              { num: "1M+", label: "KM Driven" },
              { num: "0", label: "Major Accidents" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 card-hover">
                <div className="font-display text-5xl gold">{s.num}</div>
                <div className="font-body text-gray-400 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-alt py-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="section-label mb-3">Who I Am</p>
          <div className="divider mb-8" />
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              {/* Avatar */}
              <div className="w-40 h-40 rounded-full avatar-ring bg-zinc-800 flex items-center justify-center mb-8 text-7xl">
                Icon
              </div>
              <h2 className="font-display text-5xl mb-5">ABOUT ME</h2>
              <p className="font-body text-gray-300 leading-relaxed mb-4">
                I am <span className="text-white font-semibold">MD Shipon Mridha</span>, a seasoned professional driver with over
                <span className="gold font-semibold"> 25 years</span> of experience serving private clients, corporate executives, and VIP personalities across Bangladesh.
              </p>
              <p className="font-body text-gray-400 leading-relaxed mb-4">
                My journey on the road has taken me through every major highway and city of Bangladesh. I pride myself on punctuality, discretion, and placing the safety and comfort of my passengers above all else.
              </p>
              <p className="font-body text-gray-400 leading-relaxed">
                Whether it's a daily commute, an airport transfer, or a cross-country trip — I bring professionalism, reliability, and a calm demeanor to every journey.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Full Name", value: "MD Shipon Mridha" },
                { label: "Experience", value: "25+ Years" },
                { label: "Location", value: "Dhaka, Bangladesh" },
                { label: "Languages", value: "Bengali, Basic English" },
                { label: "Availability", value: "Full-time / Part-time" },
                { label: "Specialization", value: "VIP & Long Distance" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <span className="font-body text-gray-500 text-sm">{item.label}</span>
                  <span className="font-body text-white font-medium text-sm">{item.value}</span>
                </div>
              ))}
              <div className="flex gap-1 mt-4">
                {[1,2,3,4,5].map(i => <span key={i} className="star text-xl">★</span>)}
                <span className="font-body text-gray-400 text-sm ml-2 self-center">5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-5">
          <p className="section-label mb-3">Track Record</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-5xl mb-14">MY EXPERIENCE</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 card-hover">
                <div className="text-5xl mb-4">{exp.icon}</div>
                <div className="font-display text-2xl mb-1">{exp.title}</div>
                <div className="gold font-body text-sm font-semibold mb-3">{exp.years}</div>
                <p className="font-body text-gray-400 text-sm leading-relaxed mb-5">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-alt py-24">
        <div className="max-w-6xl mx-auto px-5">
          <p className="section-label mb-3">What I Offer</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-5xl mb-14">MY SERVICES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((svc) => (
              <div key={svc.title} className={`bg-gradient-to-br ${svc.color} border border-zinc-800 rounded-2xl p-8 card-hover`}>
                <div className="text-5xl mb-4">{svc.icon}</div>
                <h3 className="font-display text-3xl mb-1">{svc.title}</h3>
                <p className="font-body text-sm mb-6" style={{ color: svc.accent }}>{svc.price}</p>
                <ul className="space-y-3">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-gray-300 text-sm">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs bg-yellow-500/20 text-yellow-400 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => scrollTo("booking")} className="btn-gold mt-8 text-sm w-full">Book This Service</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LICENSE */}
      <section id="license" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-5">
          <p className="section-label mb-3">Documentation</p>
          <div className="divider mb-8" />
          <h2 className="font-display text-5xl mb-14">DRIVING LICENSE</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* License Card Visual */}
            <div className="license-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-500/5 -translate-y-1/2 translate-x-1/2" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-black font-bold text-lg">🪪</div>
                <div>
                  <div className="font-display text-xl tracking-widest">BANGLADESH</div>
                  <div className="font-body text-gray-500 text-xs">DRIVER'S LICENSE</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Full Name", value: "MD Shipon Mridha" },
                  { label: "License Type", value: "Professional (Heavy & Light)" },
                  { label: "Issue Authority", value: "BRTA, Bangladesh" },
                  { label: "Valid For", value: "All Vehicle Categories" },
                  { label: "Status", value: "✅ Active & Valid" },
                  { label: "Experience", value: "25+ Years Clean Record" },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-zinc-800 pb-3">
                    <span className="font-body text-gray-500 text-sm">{item.label}</span>
                    <span className={`font-body text-sm font-semibold ${item.label === "Status" ? "text-green-400" : "text-white"}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Details */}
            <div className="space-y-4">
              {[
                { icon: "✅", title: "Clean Driving Record", desc: "Zero major accidents or traffic violations in 25 years of professional driving." },
                { icon: "🏆", title: "BRTA Certified", desc: "Fully licensed under Bangladesh Road Transport Authority with valid professional endorsement." },
                { icon: "🔒", title: "Background Verified", desc: "Police clearance and personal background available upon client request." },
                { icon: "📋", title: "All Vehicle Classes", desc: "Licensed to operate sedans, SUVs, minivans, and heavy passenger vehicles." },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex gap-4 card-hover">
                  <div className="text-2xl mt-0.5">{item.icon}</div>
                  <div>
                    <div className="font-body font-semibold text-white mb-1">{item.title}</div>
                    <div className="font-body text-gray-400 text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="section-alt py-24">
        <div className="max-w-3xl mx-auto px-5">
          <p className="section-label mb-3 text-center">Get in Touch</p>
          <div className="divider mx-auto mb-8" />
          <h2 className="font-display text-5xl text-center mb-3">BOOK A RIDE</h2>
          <p className="font-body text-gray-400 text-center mb-10">Fill the form below and I will get back to you within hours.</p>

          {submitted ? (
            <div className="bg-green-900/30 border border-green-600 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-3">✅</div>
              <div className="font-display text-2xl text-green-400 mb-2">BOOKING REQUEST SENT!</div>
              <p className="font-body text-gray-300 text-sm">Thank you! MD Shipon Mridha will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleForm} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-sm text-gray-400 mb-2 block">Your Name *</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-gray-400 mb-2 block">Phone Number *</label>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="+880 1X XX XXX XXX"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="font-body text-sm text-gray-400 mb-2 block">Preferred Date *</label>
                <input
                  className="form-input"
                  type="date"
                  value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="font-body text-sm text-gray-400 mb-2 block">Trip Details / Message</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Describe your route, pickup location, destination, or any special requirements..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-gold w-full text-base">
                🚗 Submit Booking Request
              </button>
              <p className="font-body text-gray-500 text-xs text-center">Or reach directly via WhatsApp → +880 1700 000000</p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-zinc-900 py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center font-display text-black text-lg">M</div>
            <div>
              <div className="font-display text-lg tracking-widest gold">SHIPON MRIDHA</div>
              <div className="font-body text-gray-500 text-xs">Professional Driver · Bangladesh</div>
            </div>
          </div>
          <div className="flex gap-6">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l.toLowerCase())} className="font-body text-xs text-gray-500 hover:text-yellow-400 transition">{l}</button>
            ))}
          </div>
          <p className="font-body text-gray-600 text-xs">© 2025 MD Shipon Mridha. All rights reserved.</p>
        </div>
      </footer>

      {/* WHATSAPP FLOATING */}
      <a
        href="https://wa.me/8801716730970"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
