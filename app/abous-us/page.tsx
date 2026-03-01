import Link from "next/link";
import type { Metadata } from "next";
import { Phone, MapPin, Mail, ArrowRight, Clock, CheckCircle, Wrench, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About KM Truck & Trailer | Trusted Since 2013 | Columbia, SC",
  description: "Learn about K&M Truck & Trailer Repair — serving South Carolina drivers since 2013 with honest, fast, and professional truck and trailer repair services.",
};

const pillars = [
  { icon: <Wrench size={28} />, title: "Experience That Matters", desc: "Over a decade of hands-on expertise in truck & trailer repair across South Carolina." },
  { icon: <Zap size={28} />, title: "Advanced Technology", desc: "Latest diagnostic tools and modern repair equipment for accurate, fast results." },
  { icon: <Users size={28} />, title: "Customer-First Approach", desc: "We listen, we care, and we deliver with honesty and full transparency." },
  { icon: <Clock size={28} />, title: "Reliability Anytime", desc: "Count on us for dependable service, whether in our shop or on the road." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>About Us</span>
          </div>
          <div style={{ maxWidth: "640px" }}>
            <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93C5FD", marginBottom: "12px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", padding: "5px 12px", borderRadius: "9999px" }}>Since 2013</span>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>Trusted Truck & Trailer Repair Since 2013</h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7 }}>At K&M Truck & Trailer Repair, we believe every mile matters. Trusted by drivers and fleets in Columbia, SC and surrounding areas for over a decade.</p>
            <div className="page-hero__ctas">
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                <Phone size={18} /> Call Us Now
              </a>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ marginBottom: "20px" }}>A Little Care for Your Great Problems</h2>
              <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                At K&M Truck & Trailer Repair, we believe every mile matters. Since 2013, we&apos;ve been the trusted choice for drivers and fleets in Columbia, SC 29229 and surrounding areas, delivering reliable truck and trailer repair services backed by honesty, skill, and dedication.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
                Our mission is simple: keep you moving with confidence. Every repair is done with precision, transparency, and a commitment to reducing downtime. We treat every truck like it&apos;s our own — because we know your business depends on it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["Founded in 2013 with a focus on honesty", "Serving all of South Carolina 24/7", "Specializing in Cummins, Detroit & Paccar", "DOT-compliant inspections and repairs"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle size={18} color="#2563EB" />
                    <span style={{ fontSize: "0.9rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { stat: "10+", label: "Years in Business" },
                { stat: "69+", label: "5-Star Reviews" },
                { stat: "24/7", label: "Service Available" },
                { stat: "100%", label: "Customer Focus" },
              ].map((s) => (
                <div key={s.stat} style={{ background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#2563EB", marginBottom: "6px" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">What We Stand For</span>
            <h2>Our Mission & Vision</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "36px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>🎯</div>
              <h3 style={{ marginBottom: "12px" }}>Our Mission</h3>
              <p>To keep drivers and fleets moving with fast, honest, and high-quality repairs, supported by 24/7 assistance and a skilled team dedicated to minimizing downtime.</p>
            </div>
            <div style={{ background: "#2563EB", borderRadius: "16px", padding: "36px" }}>
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>👁️</div>
              <h3 style={{ color: "#fff", marginBottom: "12px" }}>Our Vision</h3>
              <p style={{ color: "rgba(255,255,255,0.85)" }}>To be the most trusted truck and trailer repair partner in Columbia, SC — known for reliability, expertise, and customer-first service across all of South Carolina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Our Foundation</span>
            <h2>Our Core Pillars</h2>
            <p>At K&M Truck & Trailer Repair, our service stands on four strong pillars that define everything we do.</p>
          </div>
          <div className="grid-4">
            {pillars.map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px", padding: "36px 24px" }}>
                <div style={{ width: "60px", height: "60px", background: "#EFF6FF", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{p.icon}</div>
                <h4 style={{ fontSize: "1rem" }}>{p.title}</h4>
                <p style={{ fontSize: "0.875rem", margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise CTA */}
      <section style={{ background: "#0F172A", padding: "80px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} >
          <div>
            <h2 style={{ color: "#fff", marginBottom: "16px" }}>Every Mile Matters, and We Make Sure You Don&apos;t Miss One.</h2>
            <p style={{ color: "#94A3B8", lineHeight: 1.8, marginBottom: "24px" }}>
              At K&M Truck & Trailer Repair, it&apos;s not just about fixing trucks — it&apos;s about keeping your journey moving. We know that trust is earned on the road, which is why we treat every truck like our responsibility and every repair as a promise.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/abous-us" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#60A5FA", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>About Us <ArrowRight size={14} /></Link>
              <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#60A5FA", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Contact Us <ArrowRight size={14} /></Link>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#60A5FA", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>Services <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.2)", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "3rem", marginBottom: "12px" }}>🚛</div>
            <h3 style={{ color: "#fff", marginBottom: "8px" }}>Need Help Right Now?</h3>
            <p style={{ color: "#94A3B8", marginBottom: "20px", fontSize: "0.9rem" }}>24/7 emergency roadside service across South Carolina</p>
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              <Phone size={18} /> (803) 393-4907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
