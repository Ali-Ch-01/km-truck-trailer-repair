import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | KM Truck & Trailer | Columbia, SC & Surrounding Areas",
  description: "KM Truck & Trailer serves truck drivers across South Carolina. Find your nearest service location in Columbia, Lexington, Rock Hill, and 11 more cities.",
};

const areas = [
  { city: "Columbia", slug: "columbia-sc", highways: ["I-77", "I-26", "I-20"] },
  { city: "Irmo", slug: "irmo-sc", highways: ["I-26"] },
  { city: "St. Andrews", slug: "st-andrews-sc", highways: ["I-26"] },
  { city: "Downtown Columbia", slug: "downtown-columbia-sc", highways: ["I-126", "I-77"] },
  { city: "The Summit", slug: "the-summit-sc", highways: ["I-77"] },
  { city: "Forest Acres", slug: "forest-acres-sc", highways: ["I-77"] },
  { city: "Northeast Columbia", slug: "northeast-columbia-sc", highways: ["I-20"] },
  { city: "Winnsboro", slug: "winnsboro-sc", highways: ["US-321"] },
  { city: "Lugoff", slug: "lugoff-sc", highways: ["US-1", "I-20"] },
  { city: "Cayce", slug: "cayce-sc", highways: ["I-26", "US-1"] },
  { city: "Gaston", slug: "gaston-sc", highways: ["I-26"] },
  { city: "Lexington", slug: "lexington-sc", highways: ["US-1", "I-20"] },
  { city: "Newberry", slug: "newberry-sc", highways: ["I-26"] },
  { city: "Rock Hill", slug: "rock-hill-sc", highways: ["I-77", "US-21"] },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link href="/">Home</Link> <span>/</span>
            <span style={{ color: "#CBD5E1" }}>Service Areas</span>
          </div>
          <div style={{ maxWidth: "640px" }}>
            <h1 style={{ color: "#fff", marginBottom: "16px" }}>We Come to You — Wherever You Are in SC</h1>
            <p style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.7 }}>
              K&M Truck & Trailer serves drivers and fleets across 14+ cities in South Carolina with 24/7 mobile repair units. Don&apos;t see your city? Call us — we may still help.
            </p>
            <div className="page-hero__ctas">
              <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 24px", borderRadius: "10px", fontWeight: 700, textDecoration: "none" }}>
                <Phone size={18} /> Call (803) 393-4907
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="eyebrow">Coverage Map</span>
            <h2>Cities We Serve in South Carolina</h2>
            <p>Click any city to learn more about our services in that area.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {areas.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="hover-card" style={{ background: "#fff", border: "1px solid #E5E9EF", borderRadius: "14px", padding: "24px", display: "block", textDecoration: "none", transition: "all 0.2s" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#EFF6FF", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#2563EB", flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "#111827", margin: 0 }}>{area.city}</h4>
                    <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>South Carolina</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {area.highways.map((h) => (
                    <span key={h} style={{ background: "#F1F4F8", color: "#374151", fontSize: "0.7rem", fontWeight: 600, padding: "2px 8px", borderRadius: "9999px", border: "1px solid #E5E9EF" }}>{h}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", color: "#2563EB", fontWeight: 600 }}>
                  View Area <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section style={{ background: "#F8F9FB", padding: "64px 0", borderTop: "1px solid #E5E9EF" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "12px" }}>Don&apos;t See Your City?</h2>
          <p style={{ marginBottom: "28px", maxWidth: "460px", margin: "0 auto 28px" }}>Call us directly — our mobile units cover a wide radius and we may still be able to reach you for emergency repairs.</p>
          <a href="tel:+18033934907" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#2563EB", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, textDecoration: "none", fontSize: "1rem" }}>
            <Phone size={18} /> Call (803) 393-4907
          </a>
        </div>
      </section>
    </>
  );
}
