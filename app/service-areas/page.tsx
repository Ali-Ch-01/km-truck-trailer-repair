import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import Reveal from "@/app/components/ui/Reveal";

export const metadata: Metadata = {
  title:
    "Service Areas | KM Truck & Trailer | Columbia, SC & Surrounding Areas",
  description:
    "KM Truck & Trailer serves truck drivers across South Carolina. Find your nearest service location in Columbia, Lexington, Rock Hill, and 11 more cities.",
};

const areas = [
  { city: "Columbia", slug: "columbia-sc", highways: ["I-77", "I-26", "I-20"] },
  { city: "Irmo", slug: "irmo-sc", highways: ["I-26"] },
  { city: "St. Andrews", slug: "st-andrews-sc", highways: ["I-26"] },
  {
    city: "Downtown Columbia",
    slug: "downtown-columbia-sc",
    highways: ["I-126", "I-77"],
  },
  { city: "The Summit", slug: "the-summit-sc", highways: ["I-77"] },
  { city: "Forest Acres", slug: "forest-acres-sc", highways: ["I-77"] },
  {
    city: "Northeast Columbia",
    slug: "northeast-columbia-sc",
    highways: ["I-20"],
  },
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
      {/* ── Animated Hero with Image ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/service-areas-bg.png"
          alt="Service Areas across South Carolina"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(105deg, rgba(5,10,25,0.95) 0%, rgba(5,10,25,0.7) 40%, rgba(5,10,25,0.2) 100%)",
          }}
        />
        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 2,
            padding: "clamp(80px, 12vh, 120px) 24px clamp(60px, 8vh, 80px)",
          }}
        >
          <div
            className="page-hero__breadcrumb anim-fade-up"
            style={{ marginBottom: "20px" }}
          >
            <Link href="/" style={{ color: "#93C5FD", textDecoration: "none" }}>
              Home
            </Link>{" "}
            <span style={{ color: "#475569" }}>/</span>
            <span style={{ color: "#CBD5E1" }}>Service Areas</span>
          </div>
          <div style={{ maxWidth: "680px" }}>
            <h1
              className="anim-fade-up delay-1"
              style={{
                color: "#fff",
                marginBottom: "20px",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              We Come to You<br />Wherever You Are in SC
            </h1>
            <p
              className="anim-fade-up delay-2"
              style={{
                color: "#CBD5E1",
                fontSize: "clamp(1rem, 2vw, 1.15rem)",
                lineHeight: 1.7,
                marginBottom: "36px",
                maxWidth: "560px",
                textShadow: "0 1px 8px rgba(0,0,0,0.3)",
              }}
            >
              K&M Truck & Trailer serves drivers and fleets across 14+ cities in
              South Carolina with 24/7 mobile repair units. Don&apos;t see your
              city? Call us, we may still help.
            </p>
            <div
              className="page-hero__ctas anim-fade-up delay-3"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <a
                href="tel:+18033934907"
                className="tilt-card"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#2563EB",
                  color: "#fff",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textDecoration: "none",
                  boxShadow: "0 6px 20px rgba(37,99,235,0.4)",
                }}
              >
                <Phone size={20} /> Call (803) 393-4907
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Areas Grid (Animated) ── */}
      <section className="section" style={{ paddingTop: "60px" }}>
        <div className="container">
          <Reveal type="up">
            <div className="section-header section-header--center">
              <span
                className="eyebrow"
                style={{ animation: "pulse-glow 2s infinite" }}
              >
                Coverage Map
              </span>
              <h2>Cities We Serve in South Carolina</h2>
              <p>
                Click any city to learn more about our services in that area.
              </p>
            </div>
          </Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {areas.map((area, i) => (
              <Reveal key={area.slug} type="up" delay={i * 50}>
                <Link
                  href={`/${area.slug}`}
                  className="tilt-card"
                  style={{
                    background: "#fff",
                    border: "1px solid #E5E9EF",
                    borderRadius: "14px",
                    padding: "26px",
                    display: "block",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        background: "#EFF6FF",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#2563EB",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          color: "#111827",
                          margin: 0,
                          fontWeight: 700,
                        }}
                      >
                        {area.city}
                      </h4>
                      <span style={{ fontSize: "0.8rem", color: "#64748B" }}>
                        South Carolina
                      </span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "20px",
                    }}
                  >
                    {area.highways.map((h) => (
                      <span
                        key={h}
                        style={{
                          background: "#F8F9FB",
                          color: "#475569",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "6px",
                          border: "1px solid #E5E9EF",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.85rem",
                      color: "#2563EB",
                      fontWeight: 600,
                    }}
                  >
                    View Area <ArrowRight size={16} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Not Listed CTA (Animated) ── */}
      <section
        style={{
          background: "#1E293B",
          padding: "80px 0",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          marginTop: "40px",
        }}
      >
        {/* Animated Background Orb */}
        <div
          style={{
            position: "absolute",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            background: "rgba(37,99,235,0.15)",
            filter: "blur(100px)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "floatSlow 10s ease-in-out infinite",
          }}
        />

        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <Reveal type="scale">
            <h2
              style={{
                marginBottom: "16px",
                color: "#fff",
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
              }}
            >
              Don&apos;t See Your City?
            </h2>
            <p
              style={{
                marginBottom: "32px",
                maxWidth: "520px",
                margin: "0 auto 32px",
                color: "#94A3B8",
                fontSize: "1.1rem",
              }}
            >
              Call us directly, our mobile units cover a wide radius and we may
              still be able to reach you for emergency repairs.
            </p>
            <a
              href="tel:+18033934907"
              className="tilt-card"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#2563EB",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: "12px",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }}
            >
              <Phone size={20} /> Call (803) 393-4907
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
