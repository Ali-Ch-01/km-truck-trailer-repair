"use client";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>Contact Us</span>
          </div>
          <h1 style={{ color: "#fff", marginBottom: "12px" }}>We Would Love to Hear From You</h1>
          <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "520px" }}>
            Have a question or need our service? We&apos;re just a call or message away. Our team responds fast.
          </p>
        </div>
      </section>

      {/* Emergency Strip */}
      <div style={{ background: "#DC2626", padding: "14px 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <AlertTriangle size={18} color="#fff" />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>In an urgent situation?</span>
          <a href="tel:+18033934907" style={{ color: "#fff", fontWeight: 800, textDecoration: "none", fontSize: "0.95rem", border: "1.5px solid rgba(255,255,255,0.5)", padding: "4px 14px", borderRadius: "9999px" }}>
            Please call: (803) 393-4907
          </a>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "48px", alignItems: "start" }} className="grid-two-col">

            {/* Contact Form */}
            <div>
              <span className="eyebrow">Send a Message</span>
              <h2 style={{ marginBottom: "8px" }}>Leave Us a Message</h2>
              <p style={{ marginBottom: "32px" }}>Fill out the form and one of our team members will get back to you shortly.</p>

              {submitted ? (
                <div style={{ background: "#DCFCE7", border: "1px solid #86EFAC", borderRadius: "14px", padding: "32px", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: "12px" }}>✅</div>
                  <h3 style={{ color: "#166534", marginBottom: "8px" }}>Message Sent!</h3>
                  <p style={{ color: "#166534" }}>We&apos;ll get back to you as soon as possible. For urgent help, call (803) 393-4907.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Full Name *</label>
                      <input required type="text" placeholder="John Smith" style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E9EF", borderRadius: "8px", fontSize: "0.95rem", outline: "none", transition: "border 0.2s", color: "#111827" }} onFocus={(e) => e.currentTarget.style.borderColor = "#2563EB"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E9EF"} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Phone Number *</label>
                      <input required type="tel" placeholder="(555) 000-0000" style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E9EF", borderRadius: "8px", fontSize: "0.95rem", outline: "none", color: "#111827" }} onFocus={(e) => e.currentTarget.style.borderColor = "#2563EB"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E9EF"} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Email Address</label>
                    <input type="email" placeholder="you@company.com" style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E9EF", borderRadius: "8px", fontSize: "0.95rem", outline: "none", color: "#111827" }} onFocus={(e) => e.currentTarget.style.borderColor = "#2563EB"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E9EF"} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Service Needed</label>
                    <select style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E9EF", borderRadius: "8px", fontSize: "0.95rem", outline: "none", color: "#374151", background: "#fff" }}>
                      <option value="">Select a service...</option>
                      <option>DPF Cleaning / Force Regen</option>
                      <option>Engine Diagnostics & Repair</option>
                      <option>Transmission Repair</option>
                      <option>Brake Service</option>
                      <option>Tire Repair & Replacement</option>
                      <option>Electrical Repair</option>
                      <option>Battery Service</option>
                      <option>Trailer Repair</option>
                      <option>Emergency Roadside</option>
                      <option>Fuel Delivery</option>
                      <option>Lockout Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>Message *</label>
                    <textarea required rows={5} placeholder="Describe your issue or what service you need..." style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E9EF", borderRadius: "8px", fontSize: "0.95rem", outline: "none", color: "#111827", resize: "vertical", fontFamily: "Inter, sans-serif" }} onFocus={(e) => e.currentTarget.style.borderColor = "#2563EB"} onBlur={(e) => e.currentTarget.style.borderColor = "#E5E9EF"} />
                  </div>
                  <button type="submit" style={{ background: "#2563EB", color: "#fff", padding: "14px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1D4ED8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563EB"; }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "#F8F9FB", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px" }}>
                <h4 style={{ marginBottom: "20px" }}>Where You Can Find Us</h4>
                {[
                  { icon: <MapPin size={18} color="#2563EB" />, label: "Location", value: "1278 State Rd S-20-233\nRidgeway, SC 29130" },
                  { icon: <Phone size={18} color="#2563EB" />, label: "Call Us", value: "(803) 393-4907", href: "tel:+18033934907" },
                  { icon: <Mail size={18} color="#2563EB" />, label: "Email Us", value: "repair@kmtrucktrailer.com", href: "mailto:repair@kmtrucktrailer.com" },
                  { icon: <Clock size={18} color="#2563EB" />, label: "Hours", value: "24/7 - Always Available" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "18px", paddingBottom: "18px", borderBottom: i < 3 ? "1px solid #E5E9EF" : "none" }}>
                    <div style={{ marginTop: "2px", flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#9CA3AF", marginBottom: "4px" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: "0.9rem", color: "#111827", fontWeight: 600, textDecoration: "none" }}>{item.value}</a>
                      ) : (
                        <div style={{ fontSize: "0.9rem", color: "#111827", fontWeight: 500, whiteSpace: "pre-line" }}>{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "#0F172A", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "8px" }}>⚡</div>
                <h4 style={{ color: "#fff", marginBottom: "8px", fontSize: "1rem" }}>Emergency? Call Now</h4>
                <p style={{ fontSize: "0.85rem", color: "#94A3B8", marginBottom: "16px" }}>Roadside assistance dispatched within 60 min</p>
                <a href="tel:+18033934907" style={{ display: "block", background: "#2563EB", color: "#fff", padding: "12px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
                  (803) 393-4907
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
