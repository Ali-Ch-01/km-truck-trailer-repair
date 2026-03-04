"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Check, ChevronDown, ArrowRight, Shield, Clock, CreditCard, HeartHandshake, Wrench, Zap, Truck, Settings } from "lucide-react";

interface FAQItem { question: string; answer: string; }
interface ServiceLink { label: string; href: string; }

interface ServicePageTemplateProps {
  title: string;
  heroSubtitle: string;
  bodyIntro: string;
  features: string[];
  bodyContent?: string;
  faqItems: FAQItem[];
  relatedServices?: ServiceLink[];
  icon?: React.ReactNode;
}

const trustPillars = [
  { icon: <Shield size={24} />, title: "Trusted & Professional", desc: "Experienced technicians delivering reliable repairs you can count on." },
  { icon: <CreditCard size={24} />, title: "Flexible Payment", desc: "Convenient payment choices designed to fit your budget." },
  { icon: <Check size={24} />, title: "Satisfaction Guarantee", desc: "Quality service backed by our commitment to customer satisfaction." },
  { icon: <HeartHandshake size={24} />, title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way." },
];

const testimonials = [
  { name: "Leonel Truckin", text: "They are so amazing people, well spoken, on time and quick like ambulance. Fair price. They took 37 minutes to fix my brake leaks on my semi truck.", stars: 5 },
  { name: "Markingley Constant", text: "I've been in trucking business for 9 years. I've never been to any shop like this. They're honest, fast, the price is very reasonable. Highly recommend!", stars: 5 },
  { name: "Daman Grewal", text: "This is the best diesel repair shop in South Carolina on I-77 and I-26 area. They are very truthful and very honest people. Highly recommend.", stars: 5 },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {item.question}
            <ChevronDown size={18} style={{ transition: "transform 0.25s", transform: open === i ? "rotate(180deg)" : "rotate(0)", flexShrink: 0, color: "#2563EB" }} />
          </button>
          {open === i && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
    </div>
  );
}

export default function ServicePageTemplate({
  title, heroSubtitle, bodyIntro, features, bodyContent, faqItems, relatedServices, icon
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <Link href="/services">Services</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>{title}</span>
          </div>
          <div style={{ maxWidth: "680px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.35)", color: "#93C5FD", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: "9999px", marginBottom: "16px" }}>
              <Clock size={12} /> 24/7 Available
            </div>
            <h1 className="page-hero" style={{ color: "#fff", marginBottom: "16px" }}>{title}</h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7 }}>{heroSubtitle}</p>
            <div className="page-hero__ctas">
              <a href="tel:+18033934907" className="btn btn--primary btn--lg" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Phone size={18} /> Call (803) 393-4907
              </a>
              <Link href="/contact-us" className="btn btn--secondary btn--lg" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)" }}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "start" }} className="grid-two-col">
            {/* Left Content */}
            <div>
              <div className="icon-chip" style={{ width: 56, height: 56, marginBottom: 24 }}>
                {icon || <Wrench size={26} />}
              </div>
              <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.8, marginBottom: "28px" }}>{bodyIntro}</p>
              {bodyContent && <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>{bodyContent}</p>}

              {/* Features Grid */}
              <h3 style={{ marginBottom: "20px", color: "#111827" }}>What&apos;s Included</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "40px" }}>
                {features.map((f, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 16px", background: "#F8F9FB", borderRadius: "10px", border: "1px solid #E5E9EF" }}>
                    <div style={{ width: "22px", height: "22px", background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={13} color="#16A34A" />
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>

              {/* Trust Pillars */}
              <h3 style={{ marginBottom: "20px" }}>Why Choose KM Truck & Trailer?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "48px" }}>
                {trustPillars.map((p, i) => (
                  <div key={i} style={{ padding: "20px", background: "#fff", border: "1px solid #E5E9EF", borderRadius: "12px", display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ color: "#2563EB", flexShrink: 0, marginTop: "2px" }}>{p.icon}</div>
                    <div>
                      <h4 style={{ fontSize: "0.9rem", marginBottom: "4px" }}>{p.title}</h4>
                      <p style={{ fontSize: "0.8rem", margin: 0 }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <h3 style={{ marginBottom: "20px" }}>Frequently Asked Questions</h3>
              <FAQAccordion items={faqItems} />
            </div>

            {/* Sidebar */}
            <div>
              {/* Call Card */}
              <div className="sidebar-card" style={{ marginBottom: "20px" }}>
                <span className="sidebar-badge"><span>●</span> Available 24/7</span>
                <h4 style={{ marginBottom: "6px" }}>Need Help Now?</h4>
                <p style={{ fontSize: "0.875rem", marginBottom: "16px" }}>Our team is on standby around the clock for emergency roadside service.</p>
                <a href="tel:+18033934907" style={{ display: "flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 18px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", marginBottom: "10px", justifyContent: "center" }}>
                  <Phone size={18} /> (803) 393-4907
                </a>
                <Link href="/contact-us" style={{ display: "block", textAlign: "center", padding: "11px", border: "1.5px solid #E5E9EF", borderRadius: "10px", fontSize: "0.875rem", color: "#374151", fontWeight: 600, textDecoration: "none" }}>
                  Send a Message
                </Link>
                <div style={{ marginTop: "20px", paddingTop: "20px", borderTop: "1px solid #F1F4F8" }}>
                  <p style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "12px" }}>Our Location</p>
                  <p style={{ fontSize: "0.85rem", color: "#6B7280", margin: 0 }}>1278 State Rd S-20-233<br />Ridgeway, SC 29130</p>
                </div>
              </div>

              {/* Related Services */}
              {relatedServices && relatedServices.length > 0 && (
                <div className="sidebar-card">
                  <h4 style={{ marginBottom: "16px" }}>Related Services</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {relatedServices.map((s) => (
                      <Link key={s.href} href={s.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: "#F8F9FB", borderRadius: "8px", fontSize: "0.875rem", color: "#374151", fontWeight: 500, textDecoration: "none", border: "1px solid #E5E9EF", transition: "all 0.15s" }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E9EF"; (e.currentTarget as HTMLElement).style.color = "#374151"; }}
                      >
                        {s.label} <ArrowRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--gray">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">What Drivers Say</span>
            <h2>Trusted by Truck Drivers Across SC</h2>
            <p>Based on 69 verified Google reviews</p>
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

      {/* CTA Banner */}
      <section style={{ background: "#111827", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: "12px" }}>Ready to Get Back on the Road?</h2>
          <p style={{ color: "#9CA3AF", marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>Call us now or request service online. We respond fast - most roadside calls within 60 minutes.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
              <Phone size={18} /> Call Now: (803) 393-4907
            </a>
            <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "transparent", color: "#fff", padding: "12px 28px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
              Request Service Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
