"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, MapPin, Clock, CheckCircle, Wrench,
  Users, Zap, Shield, Star, ThumbsUp, Award,
  HeartHandshake, ArrowUpRight, Quote
} from "lucide-react";

/* ─────────── Scroll-Trigger Hook ─────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────── Animated Counter ─────────── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, inView } = useInView(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start = Math.min(start + step, to);
      setVal(start);
      if (start >= to) clearInterval(timer);
    }, 35);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─────────── Data ─────────── */
const pillars = [
  { icon: <Wrench size={26} />, title: "Experience That Matters", desc: "Over a decade of hands-on expertise in truck & trailer repair." },
  { icon: <Zap size={26} />, title: "Advanced Technology", desc: "Latest diagnostic tools and modern repair equipment for accuracy." },
  { icon: <Users size={26} />, title: "Customer-First Approach", desc: "We listen, we care, and we deliver with honesty." },
  { icon: <Shield size={26} />, title: "Reliability Anytime", desc: "Count on us for dependable service, whether in our shop or on the road." },
];

const reviews = [
  { name: "Leonel Truckin",      time: "6 months ago", text: "They are so amazing people well spoken, on time and quick like ambulance, fair price. I'm encouraging everyone - if you break down call them. They really care about customers. Took 37 minutes to fix my brake leaks on my semi truck." },
  { name: "Curtis Johnson",      time: "6 months ago", text: "Breakdown on I77 S or North - call these guys. Fast and professional, affordable, got me back on the road. Thank you!" },
  { name: "Serigne Babou",       time: "7 months ago", text: "They fixed my truck & trailer all the time. The best shop around Columbia SC & Charlotte area. Thanks a lot guys." },
  { name: "Aubrey Brazelton",    time: "7 months ago", text: "Lost for words but to sum it all up - quick fix. Thank you! Excellent service from start to finish." },
  { name: "Markingley Constant", time: "7 months ago", text: "I've been in trucking for 9 years. I've never been to any shop like this. They're honest, fast and the price is very reasonable. I would recommend everyone to K&M." },
  { name: "Laughters Legion TV", time: "7 months ago", text: "Great service, great customer service, they even went beyond and gave me extra service for my coolant sensor. Thank you K&M team." },
  { name: "Daman Grewal",        time: "7 months ago", text: "This is the best diesel repair shop in South Carolina on I77 and I26 area. They are very truthful and very honest people. Highly recommended." },
  { name: "Canadian Transport",  time: "7 months ago", text: "Very sincere and talented mechanics. Must call them for repair if you are in South Carolina. Very reasonable charges." },
  { name: "M M",                 time: "7 months ago", text: "Very good company. Called them with the problem. They told me come over. Checked my truck right away. Good honest mechanics, fairly priced." },
];

const svgBrands = [
  { src: "/brands/ford.svg",        name: "Ford" },
  { src: "/brands/toyota.svg",      name: "Toyota" },
  { src: "/brands/honda.svg",       name: "Honda" },
  { src: "/brands/chevrolet.svg",   name: "Chevrolet" },
  { src: "/brands/volvo.svg",       name: "Volvo" },
  { src: "/brands/scania.svg",      name: "Scania" },
  { src: "/brands/caterpillar.svg", name: "Caterpillar" },
  { src: "/brands/johndeer.svg",    name: "John Deere" },
  { src: "/brands/man.svg",         name: "MAN" },
];
const marqueeItems = [...svgBrands, ...svgBrands];

/* ─────────── Animation CSS ─────────── */
const ANIM_CSS = `
  @keyframes marqueeScroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeRight {
    from { opacity: 0; transform: translateX(50px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes scaleUp {
    from { opacity: 0; transform: scale(0.88); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes heroTitle {
    from { opacity: 0; transform: translateY(30px) skewY(2deg); }
    to   { opacity: 1; transform: translateY(0) skewY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .anim-fadeUp    { animation: fadeUp   0.7s cubic-bezier(.22,1,.36,1) both; }
  .anim-fadeLeft  { animation: fadeLeft 0.7s cubic-bezier(.22,1,.36,1) both; }
  .anim-fadeRight { animation: fadeRight 0.7s cubic-bezier(.22,1,.36,1) both; }
  .anim-scaleUp   { animation: scaleUp  0.6s cubic-bezier(.22,1,.36,1) both; }
  .anim-fadeIn    { animation: fadeIn   0.9s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }
  .delay-5 { animation-delay: 0.5s; }
  .delay-6 { animation-delay: 0.6s; }
  .delay-7 { animation-delay: 0.7s; }
  .delay-8 { animation-delay: 0.8s; }
  .delay-9 { animation-delay: 0.9s; }
`;

/* ─────────── Section Wrapper ─────────── */
function Reveal({ children, className = "", style = {}, delay = 0, dir = "up" }: {
  children: React.ReactNode; className?: string; style?: React.CSSProperties; delay?: number; dir?: "up" | "left" | "right" | "scale" | "fade";
}) {
  const { ref, inView } = useInView();
  const animClass = { up: "anim-fadeUp", left: "anim-fadeLeft", right: "anim-fadeRight", scale: "anim-scaleUp", fade: "anim-fadeIn" }[dir];
  return (
    <div ref={ref} className={`${className} ${inView ? animClass : ""}`}
      style={{ opacity: inView ? undefined : 0, animationDelay: `${delay}s`, ...style }}>
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <style>{ANIM_CSS}</style>

      {/* ══════════ HERO ══════════ */}
      <section style={{ position: "relative", width: "100%", minHeight: "580px", display: "flex", alignItems: "center", overflow: "hidden", background: "#050A19" }}>
        <Image src="/about-highway.png" alt="Highway" fill priority quality={100} sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%", opacity: 0.42 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(5,10,25,.97) 0%,rgba(5,10,25,.82) 40%,rgba(5,10,25,.38) 70%,transparent 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,10,25,.65) 0%,transparent 40%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "130px 24px 80px" }}>
          {/* breadcrumb */}
          <div className="anim-fadeIn" style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "24px", fontSize: "0.8rem" }}>
            <Link href="/" style={{ color: "#93C5FD", textDecoration: "none" }}>Home</Link>
            <span style={{ color: "#475569" }}>/</span>
            <span style={{ color: "#CBD5E1" }}>About Us</span>
          </div>

          <div style={{ maxWidth: "680px" }}>
            <div className="anim-fadeUp" style={{ animationDelay: "0.1s" }}>
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93C5FD", marginBottom: "18px", background: "rgba(37,99,235,0.18)", border: "1px solid rgba(37,99,235,0.35)", padding: "5px 14px", borderRadius: "9999px" }}>
                Since 2013
              </span>
            </div>

            <h1 className="anim-fadeUp" style={{ animationDelay: "0.22s", color: "#fff", marginBottom: "16px", lineHeight: 1.08, fontSize: "clamp(2.4rem,5.5vw,3.8rem)", fontWeight: 900, letterSpacing: "-0.02em" }}>
              Trusted Truck &amp; Trailer<br />Repair Since 2013
            </h1>

            <div className="anim-fadeUp" style={{ animationDelay: "0.36s", display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap" }}>
              {["Expert Technicians", "24/7 Assistance"].map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "7px", color: "#93C5FD", fontSize: "0.9rem", fontWeight: 600 }}>
                  <CheckCircle size={16} color="#4ADE80" strokeWidth={2.5} /> {b}
                </div>
              ))}
            </div>

            <div className="anim-fadeUp" style={{ animationDelay: "0.5s", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", boxShadow: "0 4px 24px rgba(37,99,235,0.5)" }}>
                <Phone size={17} /> Call Us Now
              </a>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none", background: "rgba(255,255,255,0.07)", backdropFilter: "blur(6px)" }}>
                Our Services <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="anim-fadeIn" style={{ animationDelay: "0.8s", display: "flex", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}>
            {[["10+", "Years in Business"], ["69+", "5-Star Reviews"], ["24/7", "Emergency Service"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "12px", padding: "10px 18px" }}>
                <span style={{ color: "#60A5FA", fontWeight: 800, fontSize: "1.1rem" }}>{n}</span>
                <span style={{ color: "#94A3B8", fontSize: "0.75rem", marginLeft: "6px" }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHO WE ARE ══════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="grid-two-col">

            <Reveal dir="left">
              <span className="eyebrow">Who We Are</span>
              <h2 style={{ marginBottom: "20px" }}>A Little Care for Your Great Problems</h2>
              <p style={{ fontSize: "1.05rem", color: "#374151", lineHeight: 1.85, marginBottom: "20px" }}>
                At K&amp;M Truck &amp; Trailer Repair, we believe every mile matters. Since 2013, we&apos;ve been the trusted choice for drivers and fleets in Columbia, SC 29229 and surrounding areas.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "28px" }}>
                Our mission is simple: keep you moving with confidence. Every repair is done with precision, transparency, and a commitment to reducing downtime.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
                {["Founded in 2013 with a focus on honesty", "Serving all of South Carolina 24/7", "Specializing in Cummins, Detroit & Paccar", "DOT-compliant inspections and repairs", "Fully mobile roadside service available"].map((item, i) => (
                  <div key={item} className={`anim-fadeUp delay-${i + 1}`} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CheckCircle size={17} color="#2563EB" strokeWidth={2.5} />
                    <span style={{ fontSize: "0.92rem", color: "#374151" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "#2563EB", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                Discover More <ArrowUpRight size={16} />
              </Link>
            </Reveal>

            <Reveal dir="right">
              <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 24px 64px rgba(37,99,235,0.18)" }}>
                <Image src="/about-shop.png" alt="KM Truck repair shop" fill quality={90} sizes="50vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(37,99,235,0.06)" }} />
                <div style={{ position: "absolute", bottom: "18px", left: "18px", background: "rgba(5,10,25,0.88)", backdropFilter: "blur(10px)", border: "1px solid rgba(37,99,235,0.4)", borderRadius: "14px", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Wrench size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem" }}>Expert Technicians</div>
                    <div style={{ color: "#93C5FD", fontSize: "0.73rem" }}>All major brands serviced</div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══════════ BRAND MARQUEE ══════════ */}
      <section style={{ background: "#fff", borderTop: "1px solid #E5EDFF", borderBottom: "1px solid #E5EDFF", padding: "32px 0", overflow: "hidden" }}>
        <Reveal dir="fade">
          <p style={{ textAlign: "center", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#94A3B8", marginBottom: "24px" }}>
            All Brands We Service
          </p>
        </Reveal>
        <div style={{ overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to right, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "100px", background: "linear-gradient(to left, #fff, transparent)", zIndex: 2, pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", animation: "marqueeScroll 50s linear infinite", width: "max-content" }}>
            {marqueeItems.map((brand, i) => (
              <div key={i} style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "7px", margin: "0 28px", flexShrink: 0 }}>
                <div style={{ width: "120px", height: "60px", borderRadius: "14px", background: "#F8FAFF", border: "1.5px solid #E5EDFF", display: "flex", alignItems: "center", justifyContent: "center", padding: "10px 14px", transition: "box-shadow 0.3s, border-color 0.3s" }}>
                  <Image src={brand.src} alt={brand.name} width={88} height={38} style={{ objectFit: "contain", maxWidth: "88px", maxHeight: "38px" }} />
                </div>
                <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "#94A3B8", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHAT WE STAND FOR ══════════ */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }} className="grid-two-col">

            <Reveal dir="left">
              <span className="eyebrow">What We Stand For</span>
              <h2 style={{ marginBottom: "20px" }}>Why Drivers Choose Us</h2>
              <p style={{ color: "#374151", lineHeight: 1.85, fontSize: "1.02rem", marginBottom: "24px" }}>
                At K&amp;M Truck &amp; Trailer Repair, your journey is our priority. Whether it&apos;s preventive maintenance or an emergency breakdown, we&apos;re here to get you back on the road faster and safer.
              </p>
              <p style={{ color: "#6B7280", lineHeight: 1.8, marginBottom: "32px" }}>
                Every repair is done with precision, transparency, and a commitment to reducing downtime. We treat every truck like it&apos;s our own because we know your business depends on it.
              </p>
              <div style={{ background: "#EFF6FF", borderRadius: "16px", padding: "24px", border: "1px solid #BFDBFE" }}>
                <p style={{ color: "#1E3A8A", fontWeight: 700, fontSize: "1rem", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                  &ldquo;Every mile matters, and we make sure you don&apos;t miss one.&rdquo;
                </p>
              </div>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Reveal dir="right" delay={0}>
                <div style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "18px", padding: "32px" }}>
                  <div style={{ width: "52px", height: "52px", background: "#EFF6FF", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", marginBottom: "16px" }}>
                    <Award size={26} />
                  </div>
                  <h3 style={{ marginBottom: "10px", fontSize: "1.1rem" }}>Vision</h3>
                  <p style={{ color: "#6B7280", lineHeight: 1.75, margin: 0, fontSize: "0.935rem" }}>
                    To be the most trusted truck and trailer repair partner in Columbia, SC, known for reliability, expertise, and customer-first service.
                  </p>
                </div>
              </Reveal>
              <Reveal dir="right" delay={0.15}>
                <div style={{ background: "linear-gradient(135deg,#1D4ED8,#2563EB)", borderRadius: "18px", padding: "32px" }}>
                  <div style={{ width: "52px", height: "52px", background: "rgba(255,255,255,0.15)", borderRadius: "13px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", marginBottom: "16px" }}>
                    <HeartHandshake size={26} />
                  </div>
                  <h3 style={{ color: "#fff", marginBottom: "10px", fontSize: "1.1rem" }}>Mission</h3>
                  <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.75, margin: 0, fontSize: "0.935rem" }}>
                    To keep drivers and fleets moving with fast, honest, and high-quality repairs, supported by 24/7 assistance dedicated to minimizing downtime.
                  </p>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════ DARK PROMISE BANNER ══════════ */}
      <section style={{ background: "#0F172A", padding: "80px 0", overflow: "hidden", position: "relative" }}>
        {/* subtle animated gradient orb */}
        <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "360px", height: "360px", background: "radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="container grid-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", position: "relative", zIndex: 1 }}>
          <Reveal dir="left">
            <h2 style={{ color: "#fff", marginBottom: "18px", fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
              Every mile matters, and we make sure you don&apos;t miss one.
            </h2>
            <p style={{ color: "#94A3B8", lineHeight: 1.85, marginBottom: "28px", fontSize: "0.975rem" }}>
              At K&amp;M Truck &amp; Trailer Repair, it&apos;s not just about fixing trucks - it&apos;s about keeping your journey moving. We know that trust is earned on the road, which is why we treat every truck like our responsibility.
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              {[{ label: "About Us", href: "/abous-us" }, { label: "Contact Us", href: "/contact-us" }, { label: "Services", href: "/services" }].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "#60A5FA", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>
                  {l.label} <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal dir="scale">
            <div style={{ background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.28)", borderRadius: "22px", padding: "40px", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(37,99,235,0.25)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <Phone size={28} color="#60A5FA" />
              </div>
              <h3 style={{ color: "#fff", marginBottom: "10px" }}>Need Help Right Now?</h3>
              <p style={{ color: "#94A3B8", marginBottom: "24px", fontSize: "0.88rem" }}>24/7 emergency roadside service across South Carolina.</p>
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "14px 30px", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1rem", boxShadow: "0 4px 24px rgba(37,99,235,0.55)" }}>
                <Phone size={17} /> (803) 393-4907
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ CORE PILLARS ══════════ */}
      <section className="section section--gray">
        <div className="container">
          <Reveal dir="up">
            <div className="section-header section-header--center">
              <span className="eyebrow">Why Choose Us</span>
              <h2>Our Core Pillars</h2>
              <p>At K&amp;M Truck &amp; Trailer Repair, our service stands on four strong pillars that define everything we do.</p>
            </div>
          </Reveal>
          <div className="grid-4">
            {pillars.map((p, i) => (
              <Reveal key={i} dir="scale" delay={i * 0.12}>
                <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px", padding: "36px 24px", height: "100%" }}>
                  <div style={{ width: "64px", height: "64px", background: "linear-gradient(135deg,#EFF6FF,#DBEAFE)", borderRadius: "18px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB" }}>{p.icon}</div>
                  <h4 style={{ fontSize: "0.98rem", marginBottom: 0 }}>{p.title}</h4>
                  <p style={{ fontSize: "0.87rem", margin: 0, color: "#6B7280" }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REAL GOOGLE REVIEWS ══════════ */}
      <section className="section">
        <div className="container">
          <Reveal dir="up">
            <div className="section-header section-header--center">
              <span className="eyebrow">Customer Reviews</span>
              <h2>EXCELLENT</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "8px", marginBottom: "6px" }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={20} color="#F59E0B" fill="#F59E0B" />)}
                <span style={{ fontWeight: 700, fontSize: "1rem", color: "#374151", marginLeft: "6px" }}>Based on 69 reviews</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "4px" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span style={{ fontSize: "0.82rem", color: "#64748B", fontWeight: 600 }}>Google Reviews</span>
              </div>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }} className="testimonials-grid">
            {reviews.map((r, i) => (
              <Reveal key={i} dir="up" delay={Math.min(i * 0.08, 0.48)}>
                <div style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "28px 24px", display: "flex", flexDirection: "column", gap: "14px", boxShadow: "0 2px 16px rgba(37,99,235,0.06)", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, si) => <Star key={si} size={14} color="#F59E0B" fill="#F59E0B" />)}
                    </div>
                    <Quote size={18} color="#BFDBFE" />
                  </div>
                  <p style={{ color: "#374151", lineHeight: 1.72, fontSize: "0.875rem", margin: 0, flex: 1 }}>{r.text}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingTop: "10px", borderTop: "1px solid #F1F5F9" }}>
                    <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg,#DBEAFE,#BFDBFE)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8", fontWeight: 800, fontSize: "0.95rem", flexShrink: 0 }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1E293B" }}>{r.name}</div>
                      <div style={{ fontSize: "0.74rem", color: "#94A3B8" }}>{r.time}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal dir="up" delay={0.2}>
            <div style={{ textAlign: "center", marginTop: "36px" }}>
              <a href="https://www.google.com/search?q=KM+Truck+Trailer+Repair+Columbia+SC+reviews" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1.5px solid #E5E9EF", color: "#374151", padding: "11px 22px", borderRadius: "10px", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                <ThumbsUp size={16} color="#2563EB" /> Read All 69+ Reviews on Google
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ HIGHWAY BANNER ══════════ */}
      <Reveal dir="fade">
        <section style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <Image src="/about-highway.png" alt="Highway" fill quality={80} sizes="100vw" style={{ objectFit: "cover", objectPosition: "center 60%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(5,10,25,.9) 0%,rgba(5,10,25,.5) 50%,rgba(5,10,25,.78) 100%)" }} />
          <div className="container" style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", alignItems: "center" }}>
            <div style={{ maxWidth: "500px" }}>
              <span style={{ display: "inline-block", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#93C5FD", marginBottom: "12px", background: "rgba(37,99,235,0.2)", border: "1px solid rgba(37,99,235,0.35)", padding: "4px 12px", borderRadius: "9999px" }}>Mobile Service</span>
              <h2 style={{ color: "#fff", marginBottom: "12px", fontSize: "clamp(1.5rem,3vw,2.2rem)" }}>
                We Come to You - Anywhere in South Carolina
              </h2>
              <p style={{ color: "#CBD5E1", lineHeight: 1.75, margin: 0, fontSize: "0.95rem" }}>
                Broken down on I-26 or I-77? Our mobile technicians dispatch fast to get you back on the road.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ══════════ EMERGENCY CTA ══════════ */}
      <section style={{ background: "#2563EB", padding: "60px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", background: "radial-gradient(circle,rgba(255,255,255,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal dir="up">
            <h2 style={{ color: "#fff", marginBottom: "12px" }}>Need Help? In an Urgent Situation?</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "28px", fontSize: "1rem" }}>
              Please call us immediately - we&apos;re available 24/7 across South Carolina.
            </p>
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#2563EB", padding: "16px 38px", borderRadius: "12px", fontWeight: 800, fontSize: "1.2rem", textDecoration: "none", boxShadow: "0 6px 30px rgba(0,0,0,0.2)" }}>
              <Phone size={22} /> 803-393-4907
            </a>
            <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "20px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                <MapPin size={15} color="#fff" /> Columbia, SC 29229
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>
                <Clock size={15} color="#fff" /> Available 24 / 7
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
