"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "DPF Cleaning", href: "/dpf" },
  { label: "Brakes", href: "/brakes" },
  { label: "Tires", href: "/tires" },
  { label: "Battery", href: "/battery" },
  { label: "Electrical", href: "/electrical" },
  { label: "Transmission", href: "/transmission" },
  { label: "Trailer Repair", href: "/trailer-repair" },
  { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
  { label: "Engine Diagnostics", href: "/vehicle-engine-diagnostic" },
  { label: "Steering & Suspension", href: "/steering-and-suspension" },
  { label: "Semi Truck Repair", href: "/semi-truck-repair" },
  { label: "Force Regen", href: "/force-regen" },
];

const locationLinks = [
  { label: "Columbia, SC", href: "/columbia-sc" },
  { label: "Irmo, SC", href: "/irmo-sc" },
  { label: "Lexington, SC", href: "/lexington-sc" },
  { label: "Cayce, SC", href: "/cayce-sc" },
  { label: "Rock Hill, SC", href: "/rock-hill-sc" },
  { label: "Newberry, SC", href: "/newberry-sc" },
  { label: "Winnsboro, SC", href: "/winnsboro-sc" },
  { label: "Lugoff, SC", href: "/lugoff-sc" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: "#fff",
          borderBottom: scrolled ? "1px solid #E5E9EF" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.07)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="KM Truck & Trailer Repair"
              width={160}
              height={52}
              priority
              style={{ objectFit: "contain", height: "48px", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {/* Services Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button style={{ display: "flex", alignItems: "center", gap: "4px", padding: "8px 14px", background: "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: "0.9rem", color: "#374151", borderRadius: "8px", transition: "background 0.15s" }}
                onFocus={() => setServicesOpen(true)}
              >
                Services <ChevronDown size={15} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0)" }} />
              </button>
              {servicesOpen && (
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid #E5E9EF", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", padding: "12px", width: "540px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", zIndex: 100 }}>
                  {serviceLinks.map((s) => (
                    <Link key={s.href} href={s.href} style={{ padding: "9px 14px", borderRadius: "8px", fontSize: "0.875rem", color: "#374151", fontWeight: 500, display: "block", transition: "background 0.15s, color 0.15s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                    >
                      {s.label}
                    </Link>
                  ))}
                  <div style={{ gridColumn: "1/-1", borderTop: "1px solid #F1F4F8", marginTop: "8px", paddingTop: "10px" }}>
                    <Link href="/services" style={{ padding: "9px 14px", borderRadius: "8px", fontSize: "0.875rem", color: "#2563EB", fontWeight: 600, display: "block" }}>
                      → View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/abous-us" style={{ padding: "8px 14px", fontWeight: 500, fontSize: "0.9rem", color: "#374151", borderRadius: "8px", display: "block" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F8F9FB"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >About Us</Link>

            {/* Locations Dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button style={{ display: "flex", alignItems: "center", gap: "4px", padding: "8px 14px", background: "transparent", border: "none", cursor: "pointer", fontWeight: 500, fontSize: "0.9rem", color: "#374151", borderRadius: "8px" }}>
                Locations <ChevronDown size={15} style={{ transition: "transform 0.2s", transform: locationsOpen ? "rotate(180deg)" : "rotate(0)" }} />
              </button>
              {locationsOpen && (
                <div style={{ position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%)", background: "#fff", border: "1px solid #E5E9EF", borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", padding: "12px", width: "300px", zIndex: 100 }}>
                  {locationLinks.map((l) => (
                    <Link key={l.href} href={l.href} style={{ padding: "9px 14px", borderRadius: "8px", fontSize: "0.875rem", color: "#374151", fontWeight: 500, display: "block", transition: "background 0.15s" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#374151"; }}
                    >{l.label}</Link>
                  ))}
                  <div style={{ borderTop: "1px solid #F1F4F8", marginTop: "8px", paddingTop: "10px" }}>
                    <Link href="/service-areas" style={{ padding: "9px 14px", borderRadius: "8px", fontSize: "0.875rem", color: "#2563EB", fontWeight: 600, display: "block" }}>→ All Service Areas</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact-us" style={{ padding: "8px 14px", fontWeight: 500, fontSize: "0.9rem", color: "#374151", borderRadius: "8px" }}>Contact</Link>
          </div>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="tel:+18033934907" style={{ display: "flex", alignItems: "center", gap: "7px", background: "#2563EB", color: "#fff", padding: "9px 18px", borderRadius: "9999px", fontWeight: 700, fontSize: "0.875rem", boxShadow: "0 4px 14px rgba(37,99,235,0.3)", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1D4ED8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563EB"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <Phone size={14} /> Call Now
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: "none", background: "transparent", border: "none", cursor: "pointer", padding: "6px", borderRadius: "8px", color: "#374151" }}
              className="hamburger-btn"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 999, background: "#fff", overflowY: "auto", paddingTop: "80px" }}>
          <div className="container" style={{ paddingTop: "24px", paddingBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "8px", marginTop: "8px" }}>Services</p>
              {serviceLinks.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  style={{ padding: "11px 14px", background: "#F8F9FB", borderRadius: "8px", fontSize: "0.95rem", color: "#374151", fontWeight: 500 }}
                >{s.label}</Link>
              ))}
              <div style={{ height: "1px", background: "#E5E9EF", margin: "12px 0" }} />
              {[{ label: "About Us", href: "/abous-us" }, { label: "Service Areas", href: "/service-areas" }, { label: "Contact", href: "/contact-us" }].map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  style={{ padding: "12px 14px", borderRadius: "8px", fontSize: "1rem", color: "#111827", fontWeight: 600 }}
                >{l.label}</Link>
              ))}
              <a href="tel:+18033934907" style={{ marginTop: "16px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "14px", borderRadius: "10px", fontWeight: 700, fontSize: "1.05rem", textDecoration: "none" }}>
                <Phone size={18} /> (803) 393-4907
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Offset for fixed navbar */}
      <div style={{ height: "68px" }} />

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
