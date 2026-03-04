import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Phone, Wrench, Settings, Truck, Zap, Battery, Wind, Thermometer, AlertTriangle, Shield, CheckCircle, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair Services | KM Truck & Trailer | SC",
  description: "Complete truck and trailer repair services in South Carolina. Engine diagnostics, DPF cleaning, brakes, tires, electrical, and 24/7 emergency roadside.",
};

const truckServices = [
  { icon: <Wrench size={24} />, title: "Engine Diagnostics & Repair", desc: "Advanced diagnostics for Cummins, Detroit Diesel & Paccar engines. Fault code reading, ECM repair, and full overhauls.", href: "/vehicle-engine-diagnostic" },
  { icon: <Settings size={24} />, title: "Transmission Repair & Overhauls", desc: "Minor adjustments to complete transmission rebuilds for automatic and manual systems.", href: "/transmission" },
  { icon: <Shield size={24} />, title: "Brake Service & Repair", desc: "Air brake inspection, drum/disc repair, ABS diagnostics - DOT compliant every time.", href: "/brakes" },
  { icon: <Truck size={24} />, title: "Tire Repair & Change", desc: "Roadside flat repair, tire mounting and balancing for all commercial sizes.", href: "/tires" },
  { icon: <Zap size={24} />, title: "Electrical System Repairs", desc: "Full electrical diagnostics, wiring repair, lighting, ECM/ECU and sensor replacement.", href: "/electrical" },
  { icon: <Battery size={24} />, title: "Battery Replacement", desc: "Battery testing, replacement, alternator checks, and mobile jump-start service.", href: "/battery" },
  { icon: <Settings size={24} />, title: "Steering & Suspension", desc: "Steering gear, tie rods, air suspension, shocks, and full alignment services.", href: "/steering-and-suspension" },
  { icon: <CheckCircle size={24} />, title: "Oil Change & Preventive Maintenance", desc: "Oil changes, filter replacements, fluid inspections, DOT pre-trip checks.", href: "/air-and-cabin-filter" },
  { icon: <Thermometer size={24} />, title: "AC & Heating Repair", desc: "Compressor repair, AC recharge, heater core, and blower motor service.", href: "/air-conditioning" },
  { icon: <Wind size={24} />, title: "DPF Cleaning & Force Regen", desc: "Certified DPF cleaning and forced regeneration for emissions compliance.", href: "/dpf" },
];

const trailerServices = [
  { icon: <Truck size={24} />, title: "Trailer Structural Repair", desc: "Frame, floor, panel, and structural repairs to keep your trailer road-ready.", href: "/trailer-repair" },
  { icon: <Truck size={24} />, title: "Trailer Tires", desc: "All trailer tire sizes - flat repair, replacement, and roadside service.", href: "/trailer-tires" },
  { icon: <Settings size={24} />, title: "Trailer Door Repair", desc: "Roll-up doors, swing doors, hinges, seals, and locking mechanisms.", href: "/trailer-door" },
  { icon: <Wrench size={24} />, title: "Liftgate Repair", desc: "Hydraulic, electrical, and platform liftgate repair for all brands.", href: "/liftgate-repair" },
  { icon: <Zap size={24} />, title: "Trailer Electrical & AC", desc: "Full trailer electrical overhauls, lighting, brake controllers, and AC systems.", href: "/trailer-electrical-a-c-overhaul-services" },
];

const roadsideServices = [
  { icon: <AlertTriangle size={24} />, title: "Emergency Roadside Repair", desc: "24/7 mobile repair for breakdowns anywhere in South Carolina.", href: "/emergency-roadside-repair" },
  { icon: <Truck size={24} />, title: "Fuel Delivery", desc: "Emergency diesel delivery when you run out of fuel on the road.", href: "/fuel-delivery" },
  { icon: <Shield size={24} />, title: "Lockout Service", desc: "Cab and trailer lockout service - fast, no-damage entry.", href: "/lockouts" },
];

function ServiceGroup({ title, services }: { title: string; services: typeof truckServices }) {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Reveal type="left">
        <h2 style={{ marginBottom: "12px", fontSize: "clamp(1.8rem, 4vw, 2.2rem)", fontWeight: 800, color: "#111827" }}>{title}</h2>
        <div style={{ width: "60px", height: "4px", background: "#2563EB", borderRadius: "2px", marginBottom: "40px" }} />
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
        {services.map((s, i) => (
          <Reveal key={s.href} type="up" delay={i * 60}>
            <Link href={s.href} className="tilt-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "16px", padding: "32px 24px", display: "flex", flexDirection: "column", height: "100%", textDecoration: "none", transition: "all 0.3s ease" }}>
              <div style={{ width: "54px", height: "54px", background: "#EFF6FF", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", marginBottom: "20px" }}>
                {s.icon}
              </div>
              <h4 style={{ marginBottom: "12px", fontSize: "1.1rem", color: "#111827", fontWeight: 700 }}>{s.title}</h4>
              <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.6, flexGrow: 1, margin: "0 0 20px" }}>{s.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", color: "#2563EB", fontWeight: 700, marginTop: "auto" }}>
                Learn more <ArrowRight size={16} />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
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
            src="/hero-truck-white.png"
            alt="Professional Truck Repair Services"
            fill
            priority
            quality={100}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "80% center" }}
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
            <span style={{ color: "#CBD5E1", fontWeight: 600 }}>Services</span>
          </div>
          <div style={{ maxWidth: "720px" }}>
            <h1 className="anim-fade-up delay-1" style={{ color: "#fff", marginBottom: "20px", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Complete Truck &amp; Trailer<br />Care, <span className="shimmer-text">All in One Place</span>
            </h1>
            <p className="anim-fade-up delay-2" style={{ color: "#CBD5E1", fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.7, marginBottom: "36px", maxWidth: "600px", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              Reliable Truck &amp; Trailer Repair Services - from emergency roadside assistance and DPF cleaning to full fleet maintenance.
            </p>
            <div className="page-hero__ctas anim-fade-up delay-3" style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none", boxShadow: "0 6px 20px rgba(37,99,235,0.4)" }}>
                <Phone size={20} /> Call Now
              </a>
              <Link href="/contact-us" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#E2E8F0", padding: "15px 28px", borderRadius: "12px", fontWeight: 600, fontSize: "1.05rem", border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none", backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.06)" }}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="section" style={{ background: "#F8F9FB", padding: "80px 0" }}>
        <div className="container">
          <ServiceGroup title="Truck Services" services={truckServices} />
          <ServiceGroup title="Trailer Services" services={trailerServices} />
          <ServiceGroup title="Emergency Roadside" services={roadsideServices} />
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ background: "#1E293B", padding: "80px 0", color: "#fff", position: "relative", overflow: "hidden" }}>
        {/* Animated Background Orb */}
        <div style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "rgba(37,99,235,0.15)", filter: "blur(100px)", borderRadius: "50%", pointerEvents: "none", animation: "floatSlow 10s ease-in-out infinite" }} />
        
        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <Reveal type="scale">
            <h2 style={{ marginBottom: "16px", color: "#fff", fontSize: "clamp(2rem, 4vw, 2.5rem)", fontWeight: 800 }}>Your Truck, Our Responsibility</h2>
            <p style={{ marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px", color: "#94A3B8", fontSize: "1.1rem" }}>
              Leave It to Us - call now for immediate assistance or to schedule your service.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+18033934907" className="tilt-card" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#2563EB", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem", boxShadow: "0 6px 20px rgba(0,0,0,0.3)" }}>
                <Phone size={20} /> (803) 393-4907
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
