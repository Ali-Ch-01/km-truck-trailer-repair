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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const { top, height } = containerRef.current.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          
          const scrollableDistance = height - viewportHeight;
          let progress = -top / scrollableDistance;
          
          progress = Math.max(0, Math.min(1, progress));
          setScrollYProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use a taller container so we have enough scroll space for all 12 cards to pass through 3 slots
  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: "relative", 
        height: `${100 + (services.length * 20)}vh`,
        background: "#F8F9FB",
        borderTop: "1px solid #E5E9EF",
        borderBottom: "1px solid #E5E9EF"
      }}
    >
      <div 
        style={{ 
          position: "sticky", 
          top: 0, 
          height: "100vh", 
          display: "flex", 
          alignItems: "center", 
          overflow: "hidden" 
        }}
      >
        <div className="container" style={{ width: "100%", display: "flex", gap: "60px", alignItems: "center" }}>
          
          {/* ── Left Side: Scrolling Stack ── */}
          <div style={{ 
            flex: "1 1 50%", 
            position: "relative", 
            height: "750px", // Enough height for 3 cards
            maxWidth: "520px",
            perspective: "1000px" // Add perspective to prevent text blur on 3D transforms
          }}>
            {services.map((s, i) => {
              const numCards = services.length;
              // We want 3 cards visible at roughly any time.
              // As progress goes 0->1, the top card moves up and out, and bottom card moves up into view.
              
              // Map overall progress to an "active index" (0 to numCards - 1)
              // We add +2 to the scrollable range so the very last card can reach the top position safely
              const scrollPosition = scrollYProgress * (numCards + 1);
              
              // Calculate distance from this specific card to the current scroll focal point
              // If distance is 0, it's the top card.
              // If distance is 1, it's the middle card.
              // If distance is 2, it's the bottom card.
              const distance = i - scrollPosition + 1; // +1 offset so first card starts in middle/bottom
              
              // Determine card state based on distance
              let opacity = 0;
              let translateY = 0;
              let scale = 1;
              let blur = 0;

              if (distance < -1) {
                // Scrolled way past top
                opacity = 0;
                translateY = -200;
                scale = 0.9;
              } else if (distance < 0) {
                // Fading out at the top
                opacity = 1 + distance; // Distance is negative (-1 to 0), so opacity drops 0 to 1
                translateY = distance * 100; // Moves up slowly
                scale = 1 + (distance * 0.05); // Shrinks slightly
                blur = distance * -4;
              } else if (distance >= 0 && distance <= 2) {
                // Actively visible (3 cards)
                // We space them out vertically by ~220px
                opacity = 1;
                translateY = distance * 230; 
                scale = 1;
              } else if (distance > 2 && distance < 3) {
                // Emerging from bottom
                const bottomProgress = distance - 2; // 0 to 1
                opacity = 1 - bottomProgress;
                translateY = 460 + (bottomProgress * 150); // Starts lower, moves up to position 2 (460px)
                scale = 0.95 + (bottomProgress * 0.05);
              } else {
                // Waiting at bottom
                opacity = 0;
                translateY = 600;
                scale = 0.9;
              }

              // Use translate3d to force hardware acceleration and reduce blur
              return (
                <div 
                  key={s.href}
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 0,
                    width: "100%",
                    opacity: opacity,
                    transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                    filter: `blur(${blur}px)`,
                    transformOrigin: "top center",
                    // Snappy, smooth hardware-accelerated transitions
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease, filter 0.4s ease",
                    zIndex: numCards - i, // Top cards (lower index) appear above bottom cards
                    pointerEvents: opacity > 0.5 ? "auto" : "none",
                    willChange: "transform, opacity, filter"
                  }}
                >
                  <Link href={s.href} style={{
                    background: "#fff", 
                    border: "1px solid #E5E9EF", 
                    borderRadius: "16px",
                    padding: "24px 32px", 
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    textDecoration: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.2s ease, border-color 0.2s ease"
                  }}
                  className="hover-card"
                  >
                    <div style={{
                      width: "60px", height: "60px", background: "#EFF6FF", borderRadius: "14px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#2563EB", flexShrink: 0
                    }}>
                      {s.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: "6px", fontSize: "1.2rem", color: "#111827" }}>{s.title}</h3>
                      <p style={{ fontSize: "0.9rem", margin: "0", lineHeight: 1.5, color: "#6B7280" }}>{s.desc}</p>
                    </div>
                    
                    {/* Click Indicator Arrow */}
                    <div style={{
                      width: "40px", height: "40px", background: "#F8F9FB", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#9CA3AF", flexShrink: 0, border: "1px solid #E5E9EF",
                      transition: "all 0.2s ease"
                    }} className="card-arrow">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* ── Right Side: Static Information ── */}
          <div style={{ flex: "1 1 50%", paddingLeft: "40px" }}>
            <span className="eyebrow" style={{ fontSize: "0.85rem", letterSpacing: "0.15em" }}>Our Expertise</span>
            <h2 style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)", marginBottom: "24px", lineHeight: 1.1 }}>
              Comprehensive<br/>Repair Solutions
            </h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "40px", maxWidth: "480px" }}>
              From minor adjustments to complete overhauls, our highly trained technicians ensure your fleet stays on the road. We bring the repair shop directly to your breakdown location.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "40px" }}>
              <div style={{ padding: "16px 24px", background: "#EFF6FF", borderRadius: "12px", border: "1px solid #BFDBFE" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#1D4ED8", marginBottom: "4px" }}>24/7</div>
                <div style={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 600 }}>Emergency Dispatch</div>
              </div>
              <div style={{ padding: "16px 24px", background: "#fff", borderRadius: "12px", border: "1px solid #E5E9EF", boxShadow: "0 4px 12px rgba(0,0,0,0.02)" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", marginBottom: "4px" }}>12+</div>
                <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 600 }}>Specialized Services</div>
              </div>
            </div>

            <Link href="/services" style={{ 
              display: "inline-flex", alignItems: "center", gap: "8px", 
              background: "#2563EB", color: "#fff", padding: "14px 28px", 
              borderRadius: "10px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 6px 20px rgba(37,99,235,0.25)", transition: "all 0.2s ease" 
            }}>
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
