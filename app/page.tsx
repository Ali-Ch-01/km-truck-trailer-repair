import Link from "next/link";
import { ArrowRight, Wrench, Settings, Truck, Zap, Battery, Wind, Thermometer, AlertTriangle, Shield, Clock, DollarSign, Map, CheckCircle, Phone, Star, CreditCard, HeartHandshake } from "lucide-react";
import type { Metadata } from "next";
import HeroSection from "@/app/components/ui/HeroSection";
import Reveal from "@/app/components/ui/Reveal";

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
  { icon: <Clock size={26} />, stat: "60 Min", label: "Avg Response Time", desc: "Fast dispatch anywhere in SC" },
  { icon: <Wrench size={26} />, stat: "Certified", label: "Technicians", desc: "Experts in all major truck brands" },
  { icon: <DollarSign size={26} />, stat: "Upfront", label: "Transparent Pricing", desc: "No hidden fees, ever" },
  { icon: <Map size={26} />, stat: "14+ Cities", label: "Across SC", desc: "Mobile units covering all of SC" },
];

const trustPillars = [
  { icon: <Shield size={28} />, title: "Trusted & Professional", desc: "Experienced technicians delivering reliable repairs you can count on, every single time.", color: "#2563EB", bg: "#EFF6FF" },
  { icon: <CreditCard size={28} />, title: "Flexible Payment", desc: "Convenient payment choices designed to fit your budget and keep your fleet moving.", color: "#059669", bg: "#ECFDF5" },
  { icon: <Star size={28} />, title: "Satisfaction Guarantee", desc: "Quality service backed by our commitment to customer satisfaction — we make it right.", color: "#D97706", bg: "#FFFBEB" },
  { icon: <HeartHandshake size={28} />, title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way, from diagnosis to delivery.", color: "#7C3AED", bg: "#F5F3FF" },
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
      {/* ── Animated Hero (client component) ── */}
      <HeroSection />

      {/* ── Stats Bar ── */}
      <section style={{ background: "#fff", paddingTop: "40px", paddingBottom: "0" }}>
        <div className="container">
          <Reveal type="up">
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0, background: "#F8F9FB", border: "1px solid #E5E9EF",
              borderRadius: "16px", overflow: "hidden",
            }} className="stats-bar">
              {stats.map((s, i) => (
                <Reveal key={i} type="scale" delay={i * 100}>
                  <div style={{
                    padding: "24px 20px", display: "flex", alignItems: "center", gap: "14px",
                    borderRight: i < stats.length - 1 ? "1px solid #E5E9EF" : "none",
                    height: "100%"
                  }}>
                    <div style={{
                      width: "48px", height: "48px", flexShrink: 0, background: "#EFF6FF",
                      borderRadius: "12px", display: "flex", alignItems: "center",
                      justifyContent: "center", color: "#2563EB",
                      animation: "float 6s ease-in-out infinite",
                      animationDelay: `${i * 0.8}s`
                    }}>{s.icon}</div>
                    <div>
                      <div className="stat-number" style={{ fontSize: "1.2rem", fontWeight: 800, color: "#111827", lineHeight: 1.1 }}>{s.stat}</div>
                      <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#374151" }}>{s.label}</div>
                      <div style={{ fontSize: "0.72rem", color: "#9CA3AF" }}>{s.desc}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <Reveal type="up">
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <span className="eyebrow">Our Expertise</span>
                <h2 style={{ margin: 0 }}>Comprehensive Repair Solutions</h2>
              </div>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#2563EB", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem" }}>
                View all services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "18px" }}>
            {services.map((s, i) => (
              <Reveal key={s.href} type="up" delay={i * 60}>
                <Link href={s.href} className="tilt-card" style={{
                  background: "#fff", border: "1px solid #E5E9EF", borderRadius: "14px",
                  padding: "22px", display: "block", textDecoration: "none",
                  transition: "all 0.25s ease",
                }}>
                  <div style={{
                    width: "46px", height: "46px", background: "#EFF6FF", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2563EB", marginBottom: "12px",
                    transition: "transform 0.3s ease",
                  }}>{s.icon}</div>
                  <h4 style={{ marginBottom: "6px", fontSize: "0.95rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.84rem", margin: "0 0 12px", lineHeight: 1.6 }}>{s.desc}</p>
                  <span style={{ fontSize: "0.78rem", color: "#2563EB", fontWeight: 600 }}>Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Makes K&M Different ── */}
      <section className="section" style={{ background: "#F8F9FB", borderTop: "1px solid #E5E9EF", borderBottom: "1px solid #E5E9EF" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center">
              <span className="eyebrow">Our Promise</span>
              <h2>What Makes K&amp;M Different</h2>
              <p style={{ maxWidth: "520px" }}>We don&apos;t just fix trucks — we build trust on every repair, every mile, every time.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
            {trustPillars.map((p, i) => (
              <Reveal key={i} type="scale" delay={i * 100}>
                <div className="tilt-card" style={{
                  background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px",
                  padding: "32px 24px", display: "flex", flexDirection: "column",
                  alignItems: "flex-start", gap: "14px", height: "100%",
                  transition: "all 0.3s ease",
                }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "14px",
                    background: p.bg, display: "flex", alignItems: "center",
                    justifyContent: "center", color: p.color, flexShrink: 0,
                    animation: `float 6s ${i * 1.2}s ease-in-out infinite`,
                  }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontSize: "1rem", marginBottom: "8px", color: "#111827" }}>{p.title}</h4>
                    <p style={{ fontSize: "0.875rem", margin: 0, lineHeight: 1.65, color: "#6B7280" }}>{p.desc}</p>
                  </div>
                  <div style={{ width: "36px", height: "3px", background: p.color, borderRadius: "2px", marginTop: "auto" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section">
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center">
              <span className="eyebrow">Reviews</span>
              <h2>What Drivers Say</h2>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "9999px", padding: "6px 16px", marginTop: "8px" }}>
                <span style={{ color: "#F59E0B", fontSize: "0.9rem" }}>{'★'.repeat(5)}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#111827" }}>EXCELLENT</span>
                <span style={{ fontSize: "0.8rem", color: "#6B7280" }}>Based on 69 Google reviews</span>
              </div>
            </div>
          </Reveal>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} type="up" delay={i * 150}>
                <div className="testimonial-card tilt-card" style={{ height: "100%" }}>
                  <div className="star-row">{'★'.repeat(t.stars)}</div>
                  <p className="testimonial-text">&quot;{t.text}&quot;</p>
                  <div>
                    <div className="testimonial-author">{t.name}</div>
                    <div className="testimonial-badge">✓ Verified Google Review</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section style={{ background: "#0F172A", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        {/* Animated background orb */}
        <div style={{
          position: "absolute", top: "20%", right: "-100px", width: "400px", height: "400px",
          borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(80px)",
          animation: "floatSlow 12s ease-in-out infinite", pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <Reveal type="left">
              <div>
                <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "12px" }}>Service Coverage</span>
                <h2 style={{ color: "#fff", marginBottom: "16px" }}>Service Areas &amp; Locations</h2>
                <p style={{ color: "#94A3B8", lineHeight: 1.75, marginBottom: "28px" }}>
                  Strategically located to serve the major logistic routes of South Carolina.
                </p>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "16px" }}>
                  <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60A5FA" }}>
                    <Map size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>Main Headquarters</div>
                    <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>1278 State Rd S-20-233, Ridgeway, SC 29130</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "32px" }}>
                  <div style={{ width: 36, height: 36, background: "rgba(37,99,235,0.2)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "#60A5FA" }}>
                    <Phone size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#fff", fontSize: "0.9rem" }}>24/7 Dispatch</div>
                    <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>(803) 393-4907</div>
                  </div>
                </div>
                <Link href="/service-areas" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                  Find Nearest Tech <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal type="right">
              <div style={{
                background: "rgba(37,99,235,0.08)", border: "1px solid rgba(37,99,235,0.2)",
                borderRadius: "16px", padding: "24px",
                animation: "borderPulse 4s ease-in-out infinite"
              }}>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#60A5FA", marginBottom: "16px" }}>Areas We Serve</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {areas.map((a, i) => (
                    <div key={a} style={{
                      display: "flex", alignItems: "center", gap: "6px",
                      color: "#CBD5E1", fontSize: "0.85rem",
                      animation: `fadeUp 0.5s ${i * 0.05}s both ease`
                    }}>
                      <span style={{ color: "#60A5FA", fontSize: "0.5rem" }}>●</span> {a}
                    </div>
                  ))}
                </div>
                <Link href="/service-areas" style={{ display: "block", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)", fontSize: "0.85rem", color: "#60A5FA", fontWeight: 600, textDecoration: "none" }}>
                  View all 14 service areas →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #F1F4F8" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <Reveal type="up">
            <span className="eyebrow">Get Started</span>
            <h2 style={{ marginBottom: "12px" }}>Ready to Keep Your Fleet Running?</h2>
            <p style={{ marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px", color: "#6B7280" }}>
              Get a free consultation for your fleet maintenance needs. Most roadside calls responded to within 60 minutes.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
              <input type="email" placeholder="Enter your email" style={{ padding: "12px 18px", border: "1.5px solid #E5E9EF", borderRadius: "10px", fontSize: "0.95rem", outline: "none", width: "250px", color: "#111827", background: "#fff" }} />
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                <Phone size={16} /> Get in Touch
              </a>
            </div>
            <p style={{ fontSize: "0.8rem", color: "#9CA3AF", marginTop: "16px" }}>
              Or call directly: <a href="tel:+18033934907" style={{ color: "#2563EB", fontWeight: 600 }}>(803) 393-4907</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
