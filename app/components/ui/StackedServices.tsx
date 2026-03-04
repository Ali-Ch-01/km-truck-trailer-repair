"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}

export default function StackedServices({ services }: { services: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-cycle cards every 2.5 seconds
  const startCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services.length]);

  // Click a card to jump to it and restart the timer
  const handleCardClick = (i: number) => {
    setActiveIndex(i);
    startCycle();
  };

  // Cards visible: activeIndex (top), activeIndex+1 (middle), activeIndex+2 (bottom)
  const getCardStyle = (i: number) => {
    const total = services.length;
    // Compute distance from active slot (0 = top, 1 = middle, 2 = bottom)
    const distance = (i - activeIndex + total) % total;

    let opacity = 0;
    let translateY = 0;
    let scale = 1;
    let zIndex = 0;
    let blur = 0;
    let pointerEvents: "auto" | "none" = "none";

    if (distance === 0) {
      // Top card
      opacity = 1; translateY = 0; scale = 1; zIndex = 30; pointerEvents = "auto";
    } else if (distance === 1) {
      // Middle card
      opacity = 1; translateY = 150; scale = 0.97; zIndex = 20; pointerEvents = "auto";
    } else if (distance === 2) {
      // Bottom card
      opacity = 1; translateY = 300; scale = 0.94; zIndex = 10; pointerEvents = "auto";
    } else if (distance === total - 1) {
      // Card just about to come in (preview from below, faded)
      opacity = 0; translateY = 420; scale = 0.9; zIndex = 5; blur = 2;
    } else {
      // All others invisible
      opacity = 0; translateY = 700; scale = 0.88; zIndex = 1;
    }

    return {
      position: "absolute" as const,
      top: 80, // Offset down so top card lines up with the right-side heading
      left: 0,
      width: "100%",
      opacity,
      transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
      filter: `blur(${blur}px)`,
      zIndex,
      pointerEvents,
      transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s ease, filter 0.4s ease",
      willChange: "transform, opacity",
      transformOrigin: "top center",
    };
  };

  return (
    <section
      style={{
        background: "#F8F9FB",
        borderTop: "1px solid #E5E9EF",
        borderBottom: "1px solid #E5E9EF",
        padding: "80px 0",
      }}
    >
      <div
        className="container stacked-grid"
        style={{
          width: "100%",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* ── Left Side: Auto-Cycling Stack ── */}
        <div
          className="stacked-left"
          style={{
            flex: "1 1 50%",
            position: "relative",
            height: "680px",
            maxWidth: "520px",
            perspective: "1000px",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.href}
              style={getCardStyle(i)}
              onClick={() => handleCardClick(i)}
            >
              <Link
                href={s.href}
                style={{
                  background: "#fff",
                  border: "1px solid #E5E9EF",
                  borderRadius: "16px",
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.2s ease, border-color 0.2s ease",
                }}
                className="hover-card"
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#EFF6FF",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: "6px", fontSize: "1.2rem", color: "#111827" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", margin: "0", lineHeight: 1.5, color: "#6B7280" }}>
                    {s.desc}
                  </p>
                </div>
                {/* Click Indicator Arrow */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#F8F9FB",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#9CA3AF",
                    flexShrink: 0,
                    border: "1px solid #E5E9EF",
                    transition: "all 0.2s ease",
                  }}
                  className="card-arrow"
                >
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          ))}

          {/* Progress dots */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            gap: "6px",
            alignItems: "center",
          }}>
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(i)}
                style={{
                  width: i === activeIndex ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: i === activeIndex ? "#2563EB" : "#D1D5DB",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Right Side: Static Information ── */}
        <div className="stacked-right" style={{ flex: "1 1 50%", paddingLeft: "40px" }}>
          <span className="eyebrow" style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}>
            Our Expertise
          </span>
          <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "24px", lineHeight: 1.1 }}>
            Comprehensive<br />Repair Solutions
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "40px", maxWidth: "480px" }}>
            From minor adjustments to complete overhauls, our highly trained
            technicians ensure your fleet stays on the road. We bring the
            repair shop directly to your breakdown location.
          </p>
          <div
            className="stats-row"
            style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}
          >
            <div style={{ padding: "16px 24px", background: "#EFF6FF", borderRadius: "12px", border: "1px solid #BFDBFE", flex: "1 1 auto", minWidth: "150px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1D4ED8", marginBottom: "4px" }}>24/7</div>
              <div style={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 600 }}>Emergency Dispatch</div>
            </div>
            <div style={{ padding: "16px 24px", background: "#fff", borderRadius: "12px", border: "1px solid #E5E9EF", boxShadow: "0 4px 12px rgba(0,0,0,0.02)", flex: "1 1 auto", minWidth: "150px" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>12+</div>
              <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 600 }}>Specialized Services</div>
            </div>
          </div>

          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#2563EB",
              color: "#fff",
              padding: "14px 28px",
              borderRadius: "10px",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(37,99,235,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
