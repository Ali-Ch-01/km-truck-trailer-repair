"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Check, ChevronDown, Shield, CreditCard, HeartHandshake, Wrench, Truck, Zap, Settings, Battery, Wind } from "lucide-react";

interface CityPageTemplateProps {
  city: string;
  state?: string;
  description: string;
  highways: string[];
  faqs?: { question: string; answer: string }[];
}

const coreServices = [
  { icon: <Wrench size={22} />, label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
  { icon: <Settings size={22} />, label: "Transmission Repair", href: "/transmission" },
  { icon: <Truck size={22} />, label: "Brakes", href: "/brakes" },
  { icon: <Zap size={22} />, label: "Electrical", href: "/electrical" },
  { icon: <Battery size={22} />, label: "Battery", href: "/battery" },
  { icon: <Wind size={22} />, label: "DPF Cleaning", href: "/dpf" },
  { icon: <Truck size={22} />, label: "Trailer Repair", href: "/trailer-repair" },
  { icon: <Phone size={22} />, label: "Emergency Roadside", href: "/emergency-roadside-repair" },
];

const testimonials = [
  { name: "Leonel Truckin", text: "They took 37 minutes to fix my brake leaks on my semi truck. Quick like ambulance, fair price. Wonderful service!", stars: 5 },
  { name: "Curtis Johnson", text: "Breakdown on I77 S or North call these guys — fast and professional, affordable. Got me back on the road. Thank you!", stars: 5 },
  { name: "serigne babou", text: "They fixed my truck & trailer all the time. The best shop around Columbia SC & Charlotte area. Thanks guys!", stars: 5 },
];

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {item.question}
            <ChevronDown size={18} style={{ transition: "transform 0.25s", transform: open === i ? "rotate(180deg)" : "rotate(0)", color: "#2563EB", flexShrink: 0 }} />
          </button>
          {open === i && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

const defaultFaqs = (city: string) => [
  { question: `Do you offer mobile truck repair in ${city}, SC?`, answer: `Yes! We offer fully mobile truck and trailer repair throughout ${city}, SC and surrounding areas. Our technicians come to your location — whether it's the side of the road, a truck stop, or a warehouse.` },
  { question: `How quickly can you reach me in ${city}?`, answer: `We aim to arrive within 60 minutes for most locations in and around ${city}. For emergency situations, we prioritize dispatch to get you back on the road as quickly as possible.` },
  { question: `What truck brands do you service in ${city}?`, answer: `We service all major brands including Freightliner, Kenworth, Peterbilt, Volvo, International, Mack, and more. Our technicians specialize in Cummins, Detroit Diesel, and Paccar engines.` },
  { question: `Is 24/7 emergency service available in ${city}?`, answer: `Absolutely. Our emergency roadside team is available 24 hours a day, 7 days a week — including weekends and holidays — throughout ${city} and the greater Columbia, SC area.` },
];

export default function CityPageTemplate({ city, state = "SC", description, highways, faqs }: CityPageTemplateProps) {
  const faqItems = faqs || defaultFaqs(city);

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/service-areas">Service Areas</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>{city}, {state}</span>
          </div>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.35)", color: "#93C5FD", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "9999px", marginBottom: "16px" }}>
              <MapPin size={12} /> {city}, {state}
            </div>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>Truck & Trailer Repair in {city}, {state}</h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7 }}>{description}</p>
            {highways.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "16px" }}>
                {highways.map((h) => (
                  <span key={h} style={{ background: "rgba(255,255,255,0.1)", color: "#E2E8F0", fontSize: "0.75rem", padding: "4px 12px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.15)", fontWeight: 600 }}>{h}</span>
                ))}
              </div>
            )}
            <div className="page-hero__ctas">
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
                <Phone size={18} /> Call (803) 393-4907
              </a>
              <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <div>
              <span className="eyebrow">Serving {city}, SC</span>
              <h2 style={{ marginBottom: "16px" }}>Reliable Truck & Trailer Repair — We Come to You</h2>
              <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, marginBottom: "20px" }}>
                If you&apos;re stranded in {city}, SC, K&M Truck & Trailer is your fastest call. We dispatch fully-equipped mobile units to your location {highways.length > 0 ? `along ${highways.join(", ")}` : "throughout the area"} — day or night, rain or shine.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
                Our certified technicians specialize in Detroit, Cummins, and Paccar engines, handling everything from emergency roadside fixes to complete preventive maintenance programs for fleets.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {["24/7 Emergency Response", "Mobile Repair — We Come to You", "Certified Technicians", "Honest, Transparent Pricing"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "22px", height: "22px", background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={13} color="#16A34A" />
                    </div>
                    <span style={{ fontSize: "0.9rem", color: "#374151", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {[
                { stat: "10+", label: "Years Serving SC" },
                { stat: "24/7", label: "Emergency Service" },
                { stat: "5★", label: "Google Reviews" },
                { stat: "60min", label: "Avg Response Time" },
              ].map((s) => (
                <div key={s.stat} style={{ background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: "#2563EB", marginBottom: "4px" }}>{s.stat}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6B7280", fontWeight: 500 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Our Services</span>
            <h2>What We Offer in {city}, SC</h2>
            <p>Full-service truck and trailer repair available on-site and in our shop.</p>
          </div>
          <div className="grid-4">
            {coreServices.map((s) => (
              <Link key={s.href} href={s.href} style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(37,99,235,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E9EF"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ width: "52px", height: "52px", background: "#EFF6FF", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{s.icon}</div>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#111827" }}>{s.label}</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#2563EB", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why {city} Drivers Trust KM Truck & Trailer</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: <Shield size={24} />, title: "Trusted & Professional", desc: "Over a decade of hands-on expertise in truck & trailer repair." },
              { icon: <CreditCard size={24} />, title: "Flexible Payment", desc: "Convenient payment options designed to fit any budget." },
              { icon: <Check size={24} />, title: "Satisfaction Guarantee", desc: "Quality repairs backed by our commitment to your satisfaction." },
              { icon: <HeartHandshake size={24} />, title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way." },
            ].map((p, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "12px" }}>
                <div style={{ width: "52px", height: "52px", background: "#EFF6FF", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Reviews</span>
            <h2>What Drivers Are Saying</h2>
            <p>Rated EXCELLENT — Based on 69 Google reviews</p>
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

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div className="section-header section-header--center">
            <span className="eyebrow">FAQ</span>
            <h2>Common Questions About Service in {city}</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#111827", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: "12px" }}>Stranded in {city}? We&apos;re On the Way.</h2>
          <p style={{ color: "#9CA3AF", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>Call now and our team will dispatch to your location in {city}, SC right away.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
              <Phone size={18} /> Call (803) 393-4907
            </a>
            <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
              Request Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
