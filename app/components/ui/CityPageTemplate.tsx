"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Check, ChevronDown, Shield, CreditCard, HeartHandshake, Wrench, Truck, Zap, Settings, Battery, Wind, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

interface CityPageTemplateProps {
  city: string;
  state?: string;
  description: string;
  highways: string[];
  faqs?: { question: string; answer: string }[];
}

const coreServices = [
  { icon: <Wrench size={24} />, label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
  { icon: <Settings size={24} />, label: "Transmission Repair", href: "/transmission" },
  { icon: <Truck size={24} />, label: "Brakes", href: "/brakes" },
  { icon: <Zap size={24} />, label: "Electrical", href: "/electrical" },
  { icon: <Battery size={24} />, label: "Battery", href: "/battery" },
  { icon: <Wind size={24} />, label: "DPF Cleaning", href: "/dpf" },
  { icon: <Truck size={24} />, label: "Trailer Repair", href: "/trailer-repair" },
  { icon: <Phone size={24} />, label: "Emergency Roadside", href: "/emergency-roadside-repair" },
];

const testimonials = [
  { name: "Leonel Truckin", text: "They took 37 minutes to fix my brake leaks on my semi truck. Quick like ambulance, fair price. Wonderful service!", stars: 5 },
  { name: "Curtis Johnson", text: "Breakdown on I77 S or North call these guys - fast and professional, affordable. Got me back on the road. Thank you!", stars: 5 },
  { name: "serigne babou", text: "They fixed my truck & trailer all the time. The best shop around Columbia SC & Charlotte area. Thanks guys!", stars: 5 },
];

function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, i) => (
        <div key={i} className="faq-item" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "12px", overflow: "hidden", transition: "all 0.3s ease" }}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer", fontSize: "1.05rem", fontWeight: 600, color: "#111827" }}>
            {item.question}
            <ChevronDown size={20} style={{ transition: "transform 0.3s ease", transform: open === i ? "rotate(180deg)" : "rotate(0)", color: "#2563EB", flexShrink: 0 }} />
          </button>
          <div style={{ padding: open === i ? "0 24px 24px 24px" : "0 24px", maxHeight: open === i ? "500px" : "0", opacity: open === i ? 1 : 0, overflow: "hidden", transition: "all 0.3s ease", color: "#475569", lineHeight: 1.7 }}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

const defaultFaqs = (city: string) => [
  { question: `Do you offer mobile truck repair in ${city}, SC?`, answer: `Yes! We offer fully mobile truck and trailer repair throughout ${city}, SC and surrounding areas. Our technicians come to your location - whether it's the side of the road, a truck stop, or a warehouse.` },
  { question: `How quickly can you reach me in ${city}?`, answer: `We aim to arrive within 60 minutes for most locations in and around ${city}. For emergency situations, we prioritize dispatch to get you back on the road as quickly as possible.` },
  { question: `What truck brands do you service in ${city}?`, answer: `We service all major brands including Freightliner, Kenworth, Peterbilt, Volvo, International, Mack, and more. Our technicians specialize in Cummins, Detroit Diesel, and Paccar engines.` },
  { question: `Is 24/7 emergency service available in ${city}?`, answer: `Absolutely. Our emergency roadside team is available 24 hours a day, 7 days a week - including weekends and holidays - throughout ${city} and the greater Columbia, SC area.` },
];

const getCityBackgroundImage = (city: string) => {
  // Map exact city names to ensure every image is used exactly once across the 14 locations
  const cityImageMap: Record<string, string> = {
    "Columbia": "/bg-city-urban.png",
    "Downtown Columbia": "/bg-city-interchange.png",
    "Northeast Columbia": "/bg-city-plains.png",
    "Irmo": "/bg-city-nature.png",
    "Lexington": "/bg-city-desert.png",
    "Rock Hill": "/bg-city-bridge.png",
    "St. Andrews": "/bg-city-rain.png",
    "The Summit": "/bg-city-mountain.png",
    "Forest Acres": "/bg-city-forest.png",
    "Winnsboro": "/bg-city-industrial.png",
    "Lugoff": "/bg-city-snow.png",
    "Cayce": "/bg-city-coast.png",
    "Gaston": "/bg-city-roadside.png",
    "Newberry": "/bg-city-sunflower.png"
  };

  if (cityImageMap[city]) {
    return cityImageMap[city];
  }
  
  // Fallback hashing just in case a new city is added later
  const images = Object.values(cityImageMap);
  let hash = 0;
  for (let i = 0; i < city.length; i++) {
    hash += city.charCodeAt(i);
  }
  return images[hash % images.length];
};

export default function CityPageTemplate({ city, state = "SC", description, highways, faqs }: CityPageTemplateProps) {
  const faqItems = faqs || defaultFaqs(city);
  const heroImage = getCityBackgroundImage(city);

  return (
    <>
      {/* ── Animated Hero ── */}
      <section style={{
        position: "relative", width: "100%", minHeight: "55vh", display: "flex", alignItems: "center", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, zIndex: 0,
          transition: "transform 0.1s linear",
          animation: "kenBurns 25s ease-in-out infinite alternate",
        }}>
          <Image
            src={heroImage}
            alt={`Truck Repair Services in ${city}, ${state}`}
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
          />
        </div>
        
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(105deg, rgba(5,10,25,0.96) 0%, rgba(5,10,25,0.85) 40%, rgba(5,10,25,0.3) 100%)"
        }} />
        
        {/* Floating particles background for hero */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "20%", left: "70%", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(37,99,235,0.08)", filter: "blur(80px)", animation: "floatSlow 10s ease-in-out infinite" }} />
        </div>
        
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "clamp(80px, 12vh, 120px) 24px clamp(60px, 8vh, 80px)" }}>
          <div className="page-hero__breadcrumb anim-fade-up" style={{ marginBottom: "20px" }}>
            <Link href="/" style={{ color: "#93C5FD", textDecoration: "none", fontWeight: 600 }}>Home</Link> <span style={{ color: "#475569" }}>/</span>
            <Link href="/service-areas" style={{ color: "#93C5FD", textDecoration: "none", fontWeight: 600 }}>Service Areas</Link> <span style={{ color: "#475569" }}>/</span>
            <span style={{ color: "#CBD5E1", fontWeight: 600 }}>{city}, {state}</span>
          </div>
          <div style={{ maxWidth: "720px" }}>
            <div className="anim-fade-up delay-1" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(37,99,235,0.25)", border: "1px solid rgba(37,99,235,0.45)", color: "#93C5FD", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", padding: "8px 16px", borderRadius: "9999px", marginBottom: "24px", backdropFilter: "blur(4px)" }}>
              <MapPin size={16} /> {city}, {state}
            </div>
            
            <h1 className="anim-fade-up delay-2" style={{ color: "#fff", marginBottom: "20px", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Truck &amp; Trailer Repair<br />in <span className="shimmer-text">{city}, {state}</span>
            </h1>
            
            <p className="anim-fade-up delay-3" style={{ color: "#CBD5E1", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, marginBottom: "24px", maxWidth: "600px", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              {description}
            </p>

            {highways.length > 0 && (
              <div className="anim-fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
                {highways.map((h) => (
                  <span key={h} style={{ background: "rgba(255,255,255,0.1)", color: "#F8FAFC", fontSize: "0.85rem", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", fontWeight: 600, backdropFilter: "blur(4px)" }}>
                    {h} Routes
                  </span>
                ))}
              </div>
            )}

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

      {/* ── About Section ── */}
      <section className="section" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-two-col">
            <Reveal type="right">
              <span className="eyebrow" style={{ animation: "pulse-glow 2s infinite" }}>Serving {city}, SC</span>
              <h2 style={{ marginBottom: "20px", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>Reliable Truck & Trailer Repair - We Come to You</h2>
              <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.8, marginBottom: "20px" }}>
                If you&apos;re stranded in {city}, SC, K&M Truck & Trailer is your fastest call. We dispatch fully-equipped mobile units to your location {highways.length > 0 ? `along ${highways.join(", ")}` : "throughout the area"} - day or night, rain or shine.
              </p>
              <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: "32px", fontSize: "1rem" }}>
                Our certified technicians specialize in Detroit, Cummins, and Paccar engines, handling everything from emergency roadside fixes to complete preventive maintenance programs for fleets.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {["24/7 Emergency Response", "Mobile Repair - We Come to You", "Certified Technicians", "Honest, Transparent Pricing"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "24px", height: "24px", background: "#DCFCE7", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(22,163,74,0.2)" }}>
                      <Check size={14} color="#16A34A" />
                    </div>
                    <span style={{ fontSize: "1rem", color: "#1E293B", fontWeight: 600 }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal type="left" delay={200}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                {[
                  { stat: "10+", label: "Years Serving SC" },
                  { stat: "24/7", label: "Emergency Service" },
                  { stat: "5★", label: "Google Reviews" },
                  { stat: "60min", label: "Avg Response Time" },
                ].map((s) => (
                  <div key={s.stat} className="tilt-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 20px", textAlign: "center", boxShadow: "0 4px 14px rgba(0,0,0,0.03)" }}>
                    <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#2563EB", marginBottom: "8px", letterSpacing: "-0.02em" }}>{s.stat}</div>
                    <div style={{ fontSize: "0.9rem", color: "#64748B", fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section" style={{ background: "#F8F9FB", padding: "80px 0" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center" style={{ marginBottom: "60px" }}>
              <span className="eyebrow">Our Services</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800, color: "#111827" }}>What We Offer in {city}, SC</h2>
              <p style={{ color: "#64748B", fontSize: "1.1rem" }}>Full-service truck and trailer repair available on-site and in our shop.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
            {coreServices.map((s, i) => (
              <Reveal key={s.href} type="up" delay={i * 50}>
                <Link href={s.href} className="tilt-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "28px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", textDecoration: "none", transition: "all 0.3s ease", height: "100%" }}>
                  <div style={{ width: "60px", height: "60px", background: "#EFF6FF", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{s.icon}</div>
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, color: "#111827" }}>{s.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal type="up" delay={300}>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/services" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", background: "#111827", padding: "14px 28px", borderRadius: "12px", fontWeight: 600, textDecoration: "none", fontSize: "1rem", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>
                View All Services <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trust Pillars ── */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center" style={{ marginBottom: "50px" }}>
              <span className="eyebrow">Why Choose Us</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>Why {city} Drivers Trust KM</h2>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { icon: <Shield size={28} />, title: "Trusted & Professional", desc: "Over a decade of hands-on expertise in truck & trailer repair." },
              { icon: <CreditCard size={28} />, title: "Flexible Payment", desc: "Convenient payment options designed to fit any budget." },
              { icon: <Check size={28} />, title: "Satisfaction Guarantee", desc: "Quality repairs backed by our commitment to your satisfaction." },
              { icon: <HeartHandshake size={28} />, title: "Friendly Support", desc: "A helpful team ready to assist you every step of the way." },
            ].map((p, i) => (
              <Reveal key={i} type="up" delay={i * 100}>
                <div className="tilt-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "16px", height: "100%" }}>
                  <div style={{ width: "64px", height: "64px", background: "#EFF6FF", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{p.icon}</div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, margin: 0 }}>{p.title}</h4>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#64748B", lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" style={{ background: "#F8F9FB", padding: "80px 0" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center" style={{ marginBottom: "50px" }}>
              <span className="eyebrow">Reviews</span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>What Drivers Are Saying</h2>
              <p style={{ color: "#64748B", fontSize: "1.1rem" }}>Rated EXCELLENT - Based on 69 Google reviews</p>
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

      {/* ── FAQ ── */}
      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal type="up">
            <div className="section-header section-header--center" style={{ marginBottom: "50px" }}>
              <span className="eyebrow">FAQ</span>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.2rem)", fontWeight: 800 }}>Common Questions About Service in {city}</h2>
            </div>
          </Reveal>
          <Reveal type="up" delay={150}>
            <FAQAccordion items={faqItems} />
          </Reveal>
        </div>
      </section>

      {/* ── Dark Premium CTA ── */}
      <section style={{ background: "#1E293B", padding: "80px 0", color: "#fff", position: "relative", overflow: "hidden" }}>
        {/* Animated Background Orb */}
        <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none", animation: "floatSlow 10s ease-in-out infinite" }} />
        
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal type="scale">
            <h2 style={{ marginBottom: "16px", color: "#fff", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>Stranded in {city}? We&apos;re On the Way.</h2>
            <p style={{ marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px", color: "#94A3B8", fontSize: "1.1rem" }}>
              Call now and our team will dispatch to your location in {city}, SC right away. Day or night, we are here to help.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem", boxShadow: "0 6px 20px rgba(0,0,0,0.3)" }}>
                <Phone size={20} /> Call (803) 393-4907
              </a>
              <Link href="/contact-us" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "15px 28px", borderRadius: "12px", fontWeight: 600, fontSize: "1.05rem", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.06)" }}>
                Request Online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

