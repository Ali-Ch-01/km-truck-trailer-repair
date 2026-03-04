"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Check, ChevronDown, ArrowRight, Shield, Clock, CreditCard, HeartHandshake, Wrench } from "lucide-react";

import Image from "next/image";
import Reveal from "@/app/components/ui/Reveal";

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
  images?: string[];
  imageLayout?: "scattered" | "stacked" | "grid" | "sidebar-gallery" | "scattered-alt";
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
  title, heroSubtitle, bodyIntro, features, bodyContent, faqItems, relatedServices, icon, images, imageLayout = "scattered"
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", left: "70%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(80px)", animation: "floatSlow 10s ease-in-out infinite", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="page-hero__breadcrumb anim-fade-up">
            <Link href="/" style={{ fontWeight: 600 }}>Home</Link> <span>/</span>
            <Link href="/services" style={{ fontWeight: 600 }}>Services</Link> <span>/</span>
            <span style={{ color: "#E2E8F0", fontWeight: 600 }}>{title}</span>
          </div>
          <div style={{ maxWidth: "780px" }}>
            <div className="anim-fade-up delay-1" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.4)", color: "#93C5FD", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 16px", borderRadius: "9999px", marginBottom: "20px", backdropFilter: "blur(4px)" }}>
              <Clock size={14} /> 24/7 Available
            </div>
            <h1 className="anim-fade-up delay-2" style={{ color: "#fff", marginBottom: "20px", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>{title}</h1>
            <p className="anim-fade-up delay-3" style={{ color: "#CBD5E1", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, marginBottom: "32px", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>{heroSubtitle}</p>
            <div className="page-hero__ctas anim-fade-up delay-4" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.4)" }}>
                <Phone size={20} /> Call (803) 393-4907
              </a>
              <Link href="/contact-us" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "15px 28px", borderRadius: "12px", fontWeight: 600, fontSize: "1.05rem", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.06)" }}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "48px", alignItems: "start" }} className="grid-two-col">
            {/* Left Content */}
            <div>
              <Reveal type="up">
                <div className="icon-chip" style={{ width: 64, height: 64, marginBottom: 28, background: "#EFF6FF", color: "#2563EB", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {icon || <Wrench size={32} />}
                </div>
                <p style={{ fontSize: "1.15rem", color: "#111827", fontWeight: 500, lineHeight: 1.8, marginBottom: "28px" }}>{bodyIntro}</p>
              </Reveal>

              {/* Stacked Layout Header Image */}
              {images && imageLayout === "stacked" && images.length > 0 && (
                <Reveal type="scale" delay={100}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "460px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginBottom: "40px" }}>
                    <Image src={images[0]} alt={`${title} Main Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Scattered Layout Header Image */}
              {images && images.length === 2 && imageLayout === "scattered" && (
                <Reveal type="scale" delay={100}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "420px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginBottom: "40px" }}>
                    <Image src={images[0]} alt={`${title} Main Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Grid / Default Image Grid */}
              {images && (imageLayout === "grid" || (images.length !== 2 && imageLayout !== "stacked" && imageLayout !== "sidebar-gallery" && imageLayout !== "scattered-alt")) && images.length > 0 && (
                <Reveal type="scale" delay={150}>
                  <div style={{ display: "grid", gridTemplateColumns: images.length > 1 ? "1fr 1fr" : "1fr", gap: "20px", marginBottom: "40px" }}>
                    {images.map((img, idx) => (
                      <div key={idx} className="tilt-card" style={{ position: "relative", width: "100%", height: "280px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                        <Image src={img} alt={`${title} Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                      </div>
                    ))}
                  </div>
                </Reveal>
              )}



              <Reveal type="up" delay={200}>
                {bodyContent && <p style={{ color: "#475569", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "40px" }}>{bodyContent}</p>}
              </Reveal>

              {/* Scattered-Alt Layout Image 1 */}
              {images && imageLayout === "scattered-alt" && images.length > 0 && (
                <Reveal type="scale" delay={150}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", marginBottom: "50px" }}>
                    <Image src={images[0]} alt={`${title} Primary Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Features Grid */}
              <Reveal type="up">
                <h3 style={{ marginBottom: "24px", color: "#111827", fontSize: "1.8rem", fontWeight: 800 }}>What&apos;s Included</h3>
              </Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "50px" }}>
                {features.map((f, i) => (
                  <Reveal key={i} type="left" delay={i * 50}>
                    <div className="tilt-card" style={{ display: "flex", alignItems: "center", gap: "12px", padding: "16px 20px", background: "#fff", borderRadius: "12px", border: "1px solid #E5E9EF", boxShadow: "0 2px 10px rgba(0,0,0,0.02)" }}>
                      <div style={{ width: "24px", height: "24px", background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={14} color="#16A34A" />
                      </div>
                      <span style={{ fontSize: "0.95rem", color: "#1E293B", fontWeight: 600 }}>{f}</span>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Stacked Layout Secondary Image */}
              {images && imageLayout === "stacked" && images.length > 1 && (
                <Reveal type="up" delay={150}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.2)", marginBottom: "60px" }}>
                    <Image src={images[1]} alt={`${title} Secondary Service Image`} fill style={{ objectFit: "cover", objectPosition: "center 20%" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Trust Pillars */}
              <Reveal type="up">
                <h3 style={{ marginBottom: "24px", fontSize: "1.8rem", fontWeight: 800, color: "#111827" }}>Why Choose KM Truck & Trailer?</h3>
              </Reveal>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "60px" }}>
                {trustPillars.map((p, i) => (
                  <Reveal key={i} type="up" delay={i * 100}>
                    <div className="tilt-card" style={{ padding: "24px", background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start", height: "100%" }}>
                      <div style={{ width: "48px", height: "48px", background: "#EFF6FF", color: "#2563EB", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>{p.icon}</div>
                      <div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px", color: "#111827" }}>{p.title}</h4>
                        <p style={{ fontSize: "0.9rem", color: "#64748B", margin: 0, lineHeight: 1.6 }}>{p.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Scattered-Alt Layout Image 2 */}
              {images && imageLayout === "scattered-alt" && images.length > 1 && (
                <Reveal type="scale" delay={150}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "320px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.1)", marginBottom: "50px" }}>
                    <Image src={images[1]} alt={`${title} Secondary Service Image`} fill style={{ objectFit: "cover", objectPosition: "center 80%" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* FAQ */}
              <Reveal type="up">
                <h3 style={{ marginBottom: "30px", fontSize: "1.8rem", fontWeight: 800, color: "#111827" }}>Frequently Asked Questions</h3>
                <FAQAccordion items={faqItems} />
              </Reveal>
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "40px" }}>
              <Reveal type="right">
                {/* Call Card */}
                <div className="sidebar-card tilt-card" style={{ marginBottom: "24px", background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 24px", boxShadow: "0 10px 40px rgba(0,0,0,0.04)" }}>
                  <span className="sidebar-badge" style={{ animation: "pulse-glow 2s infinite" }}><span>●</span> Available 24/7</span>
                  <h4 style={{ marginBottom: "12px", fontSize: "1.2rem", fontWeight: 800, color: "#111827" }}>Need Help Now?</h4>
                  <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "24px", lineHeight: 1.6 }}>Our team is on standby around the clock for emergency service and repair.</p>
                  <a href="tel:+18033934907" style={{ display: "flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 20px", borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", marginBottom: "14px", justifyContent: "center", boxShadow: "0 4px 14px rgba(37,99,235,0.25)" }}>
                    <Phone size={20} /> (803) 393-4907
                  </a>
                  <Link href="/contact-us" style={{ display: "block", textAlign: "center", padding: "14px", border: "1.5px solid #E2E8F0", borderRadius: "12px", fontSize: "1rem", color: "#374151", fontWeight: 600, textDecoration: "none" }}>
                    Send a Message
                  </Link>
                  <div style={{ marginTop: "24px", paddingTop: "24px", borderTop: "1px solid #F1F5F9" }}>
                    <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "12px" }}>Our Location</p>
                    <p style={{ fontSize: "0.95rem", color: "#475569", margin: 0, lineHeight: 1.6 }}>1278 State Rd S-20-233<br />Ridgeway, SC 29130</p>
                  </div>
                </div>
              </Reveal>

              {/* Sidebar-Gallery Layout Image (First) */}
              {images && images.length === 2 && imageLayout === "sidebar-gallery" && (
                <Reveal type="right" delay={100}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "260px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
                    <Image src={images[0]} alt={`${title} Primary Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Scattered Layout Sidebar Image or Sidebar-Gallery Image (Second) */}
              {images && images.length === 2 && (imageLayout === "scattered" || imageLayout === "sidebar-gallery") && (
                <Reveal type="right" delay={150}>
                  <div className="tilt-card" style={{ position: "relative", width: "100%", height: "300px", borderRadius: "16px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", marginBottom: "24px" }}>
                    <Image src={images[1]} alt={`${title} Secondary Service Image`} fill style={{ objectFit: "cover" }} className="anim-scale-in" />
                  </div>
                </Reveal>
              )}

              {/* Related Services */}
              <Reveal type="right" delay={150}>
                {relatedServices && relatedServices.length > 0 && (
                  <div className="sidebar-card tilt-card" style={{ background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "24px" }}>
                    <h4 style={{ marginBottom: "16px", fontSize: "1.1rem", fontWeight: 800, color: "#111827" }}>Related Services</h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {relatedServices.map((s) => (
                        <Link key={s.href} href={s.href} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#fff", borderRadius: "10px", fontSize: "0.95rem", color: "#374151", fontWeight: 600, textDecoration: "none", border: "1px solid #E5E9EF", transition: "all 0.2s" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#2563EB"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 12px rgba(37,99,235,0.1)"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#E5E9EF"; (e.currentTarget as HTMLElement).style.color = "#374151"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                        >
                          {s.label} <ArrowRight size={16} />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--gray" style={{ padding: "80px 0", background: "#F1F5F9" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center" style={{ marginBottom: "60px" }}>
              <span className="eyebrow">What Drivers Say</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>Trusted by Truck Drivers Across SC</h2>
              <p style={{ color: "#64748B", fontSize: "1.1rem" }}>Based on 69 verified Google reviews</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} type="up" delay={i * 100}>
                <div className="tilt-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 4px 14px rgba(0,0,0,0.03)" }}>
                  <div style={{ display: "flex", gap: "4px", color: "#F59E0B", marginBottom: "16px" }}>
                    {Array.from({ length: 5 }).map((_, sid) => <span key={sid} style={{ fontSize: "1.2rem" }}>★</span>)}
                  </div>
                  <p style={{ fontSize: "1rem", color: "#374151", lineHeight: 1.7, fontStyle: "italic", flexGrow: 1, margin: "0 0 24px" }}>&quot;{t.text}&quot;</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ fontWeight: 700, color: "#111827" }}>{t.name}</div>
                    <div style={{ fontSize: "0.8rem", color: "#16A34A", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                      <Check size={12} /> Verified Google Review
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ background: "#1E293B", padding: "80px 0", color: "#fff", position: "relative", overflow: "hidden" }}>
        {/* Animated Background Orb */}
        <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none", animation: "floatSlow 10s ease-in-out infinite" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal type="scale">
            <h2 style={{ color: "#fff", marginBottom: "16px", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>Ready to Get Back on the Road?</h2>
            <p style={{ color: "#94A3B8", marginBottom: "36px", maxWidth: "520px", margin: "0 auto 36px", fontSize: "1.1rem" }}>Call us now or request service online. We respond fast - most roadside calls dispatched within 60 minutes.</p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem", boxShadow: "0 6px 20px rgba(0,0,0,0.3)" }}>
                <Phone size={20} /> Call Now: (803) 393-4907
              </a>
              <Link href="/contact-us" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "15px 32px", borderRadius: "12px", fontWeight: 600, fontSize: "1.05rem", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.06)" }}>
                Request Service Online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
