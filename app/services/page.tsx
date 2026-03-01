import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Wrench, Settings, Truck, Zap, Battery, Wind, Thermometer, AlertTriangle, Shield, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Truck & Trailer Repair Services | KM Truck & Trailer | SC",
  description: "Complete truck and trailer repair services in South Carolina. Engine diagnostics, DPF cleaning, brakes, tires, electrical, and 24/7 emergency roadside.",
};

const truckServices = [
  { icon: <Wrench size={24} />, title: "Engine Diagnostics & Repair", desc: "Advanced diagnostics for Cummins, Detroit Diesel & Paccar engines. Fault code reading, ECM repair, and full overhauls.", href: "/vehicle-engine-diagnostic" },
  { icon: <Settings size={24} />, title: "Transmission Repair & Overhauls", desc: "Minor adjustments to complete transmission rebuilds for automatic and manual systems.", href: "/transmission" },
  { icon: <Shield size={24} />, title: "Brake Service & Repair", desc: "Air brake inspection, drum/disc repair, ABS diagnostics — DOT compliant every time.", href: "/brakes" },
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
  { icon: <Truck size={24} />, title: "Trailer Tires", desc: "All trailer tire sizes — flat repair, replacement, and roadside service.", href: "/trailer-tires" },
  { icon: <Settings size={24} />, title: "Trailer Door Repair", desc: "Roll-up doors, swing doors, hinges, seals, and locking mechanisms.", href: "/trailer-door" },
  { icon: <Wrench size={24} />, title: "Liftgate Repair", desc: "Hydraulic, electrical, and platform liftgate repair for all brands.", href: "/liftgate-repair" },
  { icon: <Zap size={24} />, title: "Trailer Electrical & AC", desc: "Full trailer electrical overhauls, lighting, brake controllers, and AC systems.", href: "/trailer-electrical-a-c-overhaul-services" },
];

const roadsideServices = [
  { icon: <AlertTriangle size={24} />, title: "Emergency Roadside Repair", desc: "24/7 mobile repair for breakdowns anywhere in South Carolina.", href: "/emergency-roadside-repair" },
  { icon: <Truck size={24} />, title: "Fuel Delivery", desc: "Emergency diesel delivery when you run out of fuel on the road.", href: "/fuel-delivery" },
  { icon: <Shield size={24} />, title: "Lockout Service", desc: "Cab and trailer lockout service — fast, no-damage entry.", href: "/lockouts" },
];

function ServiceGroup({ title, services }: { title: string; services: typeof truckServices }) {
  return (
    <div style={{ marginBottom: "60px" }}>
      <h2 style={{ marginBottom: "8px", fontSize: "1.75rem" }}>{title}</h2>
      <div style={{ width: "40px", height: "3px", background: "#2563EB", borderRadius: "2px", marginBottom: "32px" }} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="hover-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px", display: "block", textDecoration: "none", transition: "all 0.2s" }}
          >
            <div style={{ width: "48px", height: "48px", background: "#EFF6FF", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", marginBottom: "14px" }}>{s.icon}</div>
            <h4 style={{ marginBottom: "8px", fontSize: "1rem" }}>{s.title}</h4>
            <p style={{ fontSize: "0.875rem", marginBottom: "14px", margin: "0 0 14px" }}>{s.desc}</p>
            <span style={{ fontSize: "0.8rem", color: "#2563EB", fontWeight: 600 }}>Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>Services</span>
          </div>
          <div style={{ maxWidth: "680px" }}>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>Complete Truck & Trailer Care, All in One Place</h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7 }}>Reliable Truck & Trailer Repair Services — great performance, high-class service. From emergency roadside to full fleet maintenance.</p>
            <div className="page-hero__ctas">
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                <Phone size={18} /> Call Now
              </a>
              <Link href="/contact-us" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 600, border: "1.5px solid rgba(255,255,255,0.25)", textDecoration: "none" }}>
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <ServiceGroup title="Truck Services" services={truckServices} />
          <ServiceGroup title="Trailer Services" services={trailerServices} />
          <ServiceGroup title="Emergency Roadside" services={roadsideServices} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: "#0F172A", padding: "64px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: "12px" }}>Your Truck, Our Responsibility</h2>
          <p style={{ color: "#9CA3AF", marginBottom: "28px" }}>Leave It to Us — call now for immediate assistance or to schedule your service.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
              <Phone size={18} /> (803) 393-4907
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
