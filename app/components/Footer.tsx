"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const serviceLinks = [
  { label: "DPF Cleaning", href: "/dpf" },
  { label: "Brakes", href: "/brakes" },
  { label: "Tires", href: "/tires" },
  { label: "Battery", href: "/battery" },
  { label: "Electrical", href: "/electrical" },
  { label: "Transmission", href: "/transmission" },
  { label: "Trailer Repair", href: "/trailer-repair" },
  { label: "Emergency Roadside", href: "/emergency-roadside-repair" },
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/abous-us" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact Us", href: "/contact-us" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#F1F4F8", borderTop: "1px solid #E5E9EF" }}>
      {/* Main footer */}
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "40px" }}>

          {/* Brand Column */}
          <div>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: "16px", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="KM Truck & Trailer Repair"
              width={160}
              height={52}
              style={{ objectFit: "contain", height: "52px", width: "auto" }}
            />
          </Link>
            <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "20px", maxWidth: "280px" }}>
              Since 2013, providing trusted truck and trailer repair services with a focus on reliability, speed, and customer care.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Instagram size={16} />, href: "#" },
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Youtube size={16} />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "36px", height: "36px", border: "1px solid #D1D5DB", borderRadius: "8px", color: "#6B7280", background: "#fff", transition: "all 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563EB"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.borderColor = "#2563EB"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#fff"; (e.currentTarget as HTMLElement).style.color = "#6B7280"; (e.currentTarget as HTMLElement).style.borderColor = "#D1D5DB"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Services</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Support */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Company</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Support</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {supportLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "#111827", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>Get in Touch</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <div style={{ color: "#2563EB", marginTop: "2px", flexShrink: 0 }}><MapPin size={16} /></div>
                <span style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>1278 State Rd S-20-233,<br />Ridgeway, SC 29130</span>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ color: "#2563EB", flexShrink: 0 }}><Phone size={16} /></div>
                <a href="tel:+18033934907" style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none", fontWeight: 600, transition: "color 0.15s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#2563EB"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#6B7280"; }}
                >(803) 393-4907</a>
              </div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <div style={{ color: "#2563EB", flexShrink: 0 }}><Mail size={16} /></div>
                <a href="mailto:repair@kmtrucktrailer.com" style={{ fontSize: "0.875rem", color: "#6B7280", textDecoration: "none" }}>repair@kmtrucktrailer.com</a>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "10px", padding: "14px 16px", marginTop: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#DCFCE7", color: "#16A34A", fontSize: "0.75rem", fontWeight: 700, padding: "3px 10px", borderRadius: "9999px", marginBottom: "8px" }}>
                  ● Available 24/7
                </span>
                <p style={{ fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.5, margin: 0 }}>Emergency roadside service available any time, any day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #E5E9EF", padding: "20px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ fontSize: "0.8rem", color: "#9CA3AF", margin: 0 }}>© 2025 KM Truck & Trailer. All rights reserved.</p>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy-policy" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms-and-conditions" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Terms</Link>
            <Link href="/sitemap" style={{ fontSize: "0.8rem", color: "#9CA3AF", textDecoration: "none" }}>Sitemap</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child > div:first-child > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          footer > div:first-child > div:first-child > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
