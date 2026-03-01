import Link from "next/link";
import { Phone, ArrowRight, Wrench, Settings, Truck, Zap, Battery, Wind, Thermometer, AlertTriangle, Shield, Clock, DollarSign, Map, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair in South Carolina | 24/7 Emergency Service",
  description: "Stuck on I-77? K&M offers reliable truck repair and tire service in South Carolina. 24/7 emergency truck repair, DPF cleaning & more. Call (803) 393-4907!",
};

const services = [
  { icon: <Wrench size={24} />, title: "Engine Diagnostics & Repair", desc: "Advanced diagnostics for Cummins, Detroit & Paccar engines. Fast, accurate fault resolution.", href: "/vehicle-engine-diagnostic" },
  { icon: <Settings size={24} />, title: "Transmission Repair", desc: "From minor adjustments to complete overhauls on all automatic and manual transmissions.", href: "/transmission" },
  { icon: <Shield size={24} />, title: "Brake Service & Repair", desc: "Full air brake inspections, drum & disc repair, ABS diagnostics — DOT compliant.", href: "/brakes" },
  { icon: <Truck size={24} />, title: "Tire Repair & Change", desc: "Roadside flat repair, mounting, balancing for all commercial tire sizes and brands.", href: "/tires" },
  { icon: <Zap size={24} />, title: "Electrical System Repairs", desc: "Wiring, ECM/ECU diagnostics, lighting, charging system, and sensor replacement.", href: "/electrical" },
  { icon: <Battery size={24} />, title: "Battery Replacement", desc: "Load testing, battery replacement, alternator checks, and jump-start service.", href: "/battery" },
  { icon: <Settings size={24} />, title: "Steering & Suspension", desc: "Steering gear, tie rods, air bags, shocks, and wheel alignment services.", href: "/steering-and-suspension" },
  { icon: <CheckCircle size={24} />, title: "Preventive Maintenance", desc: "Oil changes, filter replacements, fluid checks, and DOT pre-trip inspections.", href: "/air-and-cabin-filter" },
  { icon: <Thermometer size={24} />, title: "AC & Heating Repair", desc: "Compressor repair, AC recharge, heater core, and blower motor service.", href: "/air-conditioning" },
  { icon: <Wind size={24} />, title: "DPF Cleaning & Force Regen", desc: "Certified DPF cleaning and forced regeneration to keep you emissions-compliant.", href: "/dpf" },
  { icon: <Truck size={24} />, title: "Trailer Repair", desc: "Structural repairs, liftgate, door, lighting, and full trailer electrical overhauls.", href: "/trailer-repair" },
  { icon: <AlertTriangle size={24} />, title: "24/7 Emergency Roadside", desc: "Mobile roadside assistance anywhere in SC — tires, fuel, jump-starts, and more.", href: "/emergency-roadside-repair" },
];

const stats = [
  { icon: <Clock size={28} />, stat: "60 Min", label: "Average Response Time", desc: "Fast dispatch for emergencies" },
  { icon: <Wrench size={28} />, stat: "ASE Certified", label: "Technicians", desc: "Experts in major truck brands" },
  { icon: <DollarSign size={28} />, stat: "Transparent", label: "Pricing Always", desc: "No hidden fees, upfront quotes" },
  { icon: <Map size={28} />, stat: "Wide Coverage", label: "Across SC", desc: "Mobile units serving all of SC" },
];

const testimonials = [
  { name: "Leonel Truckin", text: "They are so amazing people, well spoken, on time and quick. They took 37 minutes to fix my brake leaks on my semi truck. Wonderful service!", stars: 5 },
  { name: "Markingley Constant", text: "9 years in trucking — I've never been to any shop like this. Honest, fast, very reasonable price. Highly recommend K&M to everyone in South Carolina.", stars: 5 },
  { name: "Daman Grewal", text: "Best diesel repair shop in South Carolina on I-77 and I-26 area. Very truthful and honest people. Highly recommend to anybody.", stars: 5 },
];

const areas = [
  "Columbia, SC", "Irmo, SC", "Lexington, SC", "Cayce, SC",
  "Rock Hill, SC", "Newberry, SC", "Winnsboro, SC", "Lugoff, SC",
  "Forest Acres, SC", "St. Andrews, SC", "Gaston, SC", "Northeast Columbia, SC"
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{ position: "relative", minHeight: "580px", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", background: "linear-gradient(to left, rgba(37,99,235,0.06) 0%, transparent 100%)", zIndex: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "100px 24px 80px" }}>
          <div style={{ maxWidth: "620px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.35)", color: "#93C5FD", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "9999px", marginBottom: "24px" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", display: "inline-block" }} />
              Available 24/7 Nationwide
            </div>
            <h1 style={{ color: "#fff", fontSize: "clamp(2.6rem,5vw,4rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: "20px" }}>
              Keeping Your<br /><span style={{ color: "#60A5FA" }}>Fleet Moving</span>
            </h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.1rem", lineHeight: 1.75, marginBottom: "36px", maxWidth: "520px" }}>
              Professional roadside assistance and comprehensive fleet maintenance. We minimize downtime so you can maximize delivery.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="hover-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "1rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(37,99,235,0.4)", transition: "all 0.2s" }}>
                Request Service <ArrowRight size={18} />
              </a>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "13px 28px", borderRadius: "10px", fontWeight: 600, fontSize: "1rem", border: "1.5px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
                View Services
              </Link>
            </div>
            <div style={{ display: "flex", gap: "24px", marginTop: "40px", flexWrap: "wrap" }}>
              {["Since 2013", "All Brands Serviced", "Fully Mobile"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#94A3B8", fontSize: "0.8rem" }}>
                  <CheckCircle size={14} color="#4ADE80" /> {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <span className="eyebrow">Our Expertise</span>
              <h2 style={{ margin: 0 }}>Comprehensive Repair Solutions</h2>
            </div>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#2563EB", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
              View all services <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="hover-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px", display: "block", textDecoration: "none", transition: "all 0.2s" }}>
                <div style={{ width: "48px", height: "48px", background: "#EFF6FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", marginBottom: "14px" }}>{s.icon}</div>
                <h4 style={{ marginBottom: "8px", fontSize: "1rem" }}>{s.title}</h4>
                <p style={{ fontSize: "0.875rem", marginBottom: "14px", margin: "0 0 14px" }}>{s.desc}</p>
                <span style={{ fontSize: "0.8rem", color: "#2563EB", fontWeight: 600 }}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose KM ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Why Us</span>
            <h2>Why Industry Leaders Choose KM</h2>
            <p>We combine technical expertise with a commitment to speed, ensuring your business never stops moving.</p>
          </div>
          <div className="grid-4">
            {stats.map((s, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "60px", height: "60px", background: "#EFF6FF", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", marginBottom: "4px" }}>{s.icon}</div>
                <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "#111827" }}>{s.stat}</div>
                <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#374151" }}>{s.label}</div>
                <div style={{ fontSize: "0.8rem", color: "#9CA3AF" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Our Promise</span>
            <h2>What Makes K&amp;M Different</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: "🏅", title: "Trusted & Professional", desc: "Experienced technicians delivering reliable repairs you can count on, every single time." },
              { icon: "💳", title: "Flexible Payment", desc: "Convenient payment choices designed to fit your budget and keep your fleet moving." },
              { icon: "✅", title: "Satisfaction Guarantee", desc: "Quality service backed by our commitment to customer satisfaction — we make it right." },
              { icon: "🤝", title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way, from diagnosis to delivery." },
            ].map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px", padding: "32px 24px" }}>
                <div style={{ fontSize: "2.5rem" }}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p style={{ fontSize: "0.875rem", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Reviews</span>
            <h2>What They Say</h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E5E9EF", borderRadius: "9999px", padding: "6px 16px", marginTop: "8px" }}>
              <span style={{ color: "#F59E0B", fontSize: "0.9rem" }}>{'★'.repeat(5)}</span>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827" }}>EXCELLENT</span>
              <span style={{ fontSize: "0.8rem", color: "#6B7280" }}>Based on 69 reviews</span>
            </div>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="star-row">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-text">&quot;{t.text}&quot;</p>
                <div>
                  <div className="testimonial-author">{t.name}</div>
                  <div className="testimonial-badge">✓ Verified Google Review</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section style={{ background: "#0F172A", padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <div>
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "12px" }}>Service Coverage</span>
              <h2 style={{ color: "#fff", marginBottom: "16px" }}>Service Areas & Locations</h2>
              <p style={{ color: "#94A3B8", lineHeight: 1.75, marginBottom: "28px" }}>
                We are strategically located to serve the major logistic routes. Check our coverage map to see if you are in our primary service zone.
              </p>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "#CBD5E1", fontSize: "0.875rem", marginBottom: "16px" }}>
                <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>📍</div>
                <div><div style={{ fontWeight: 600, color: "#fff" }}>Main Headquarters</div><div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>1278 State Rd S-20-233, Ridgeway, SC 29130</div></div>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", color: "#CBD5E1", fontSize: "0.875rem", marginBottom: "32px" }}>
                <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>📞</div>
                <div><div style={{ fontWeight: 600, color: "#fff" }}>24/7 Dispatch</div><div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>(803) 393-4907</div></div>
              </div>
              <Link href="/service-areas" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                Find Nearest Tech <ArrowRight size={16} />
              </Link>
            </div>
            <div>
              <div style={{ background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: "16px", padding: "24px" }}>
                <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "16px" }}>Areas We Serve</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                  {areas.map((a) => (
                    <div key={a} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#CBD5E1", fontSize: "0.85rem" }}>
                      <span style={{ color: "#60A5FA", fontSize: "0.6rem" }}>●</span> {a}
                    </div>
                  ))}
                </div>
                <Link href="/service-areas" style={{ display: "block", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.85rem", color: "#60A5FA", fontWeight: 600, textDecoration: "none" }}>
                  View all 14 service areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #F1F4F8" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="eyebrow">Get Started</span>
          <h2 style={{ marginBottom: "12px" }}>Ready to Optimize Your Fleet?</h2>
          <p style={{ marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>Get a free consultation for your fleet maintenance needs. Most roadside calls responded to within 60 minutes.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <input type="email" placeholder="Enter your email" style={{ padding: "12px 18px", border: "1.5px solid #E5E9EF", borderRadius: "10px", fontSize: "0.95rem", outline: "none", width: "260px", color: "#111827", background: "#fff" }} />
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
              <Phone size={16} /> Get Quote
            </a>
          </div>
          <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "16px" }}>Or call us directly: <a href="tel:+18033934907" style={{ color: "#2563EB", fontWeight: 600 }}>(803) 393-4907</a></p>
        </div>
      </section>
    </>
  );
}
