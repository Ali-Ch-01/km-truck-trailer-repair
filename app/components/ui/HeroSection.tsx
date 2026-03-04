"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  /* Subtle parallax on scroll */
  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 3D tilt on CTA button hover */
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };
  const resetTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(600px) rotateY(0) rotateX(0) scale(1)";
  };

  const trustBadges = [
    { label: "Since 2013" },
    { label: "All Brands Serviced" },
    { label: "Fully Mobile" },
    { label: "DOT Compliant" },
  ];

  return (
    <section style={{
      position: "relative", width: "100%", minHeight: "100svh",
      display: "flex", alignItems: "center", overflow: "hidden"
    }}>
      {/* ── Background image with Ken Burns + parallax ── */}
      <div ref={imgRef} style={{
        position: "absolute", inset: 0, zIndex: 0,
        transition: "transform 0.1s linear",
        animation: "kenBurns 22s ease-in-out infinite alternate",
      }}>
        <Image
          src="/hero-truck-white.png"
          alt="Professional semi truck on a highway"
          fill
          priority
          quality={100}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "60% center" }}
        />
      </div>

      {/* ── Floating particles ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        {[
          { w: 6, h: 6, top: "15%", left: "72%", delay: "0s", dur: "7s", opacity: 0.35 },
          { w: 10, h: 10, top: "65%", left: "80%", delay: "1.5s", dur: "9s", opacity: 0.2 },
          { w: 4, h: 4, top: "30%", left: "85%", delay: "0.8s", dur: "6s", opacity: 0.45 },
          { w: 8, h: 8, top: "75%", left: "68%", delay: "2s", dur: "11s", opacity: 0.25 },
          { w: 5, h: 5, top: "45%", left: "78%", delay: "3s", dur: "8s", opacity: 0.3 },
          { w: 12, h: 12, top: "20%", left: "90%", delay: "1s", dur: "13s", opacity: 0.15 },
          { w: 3, h: 3, top: "55%", left: "92%", delay: "4s", dur: "7s", opacity: 0.5 },
          { w: 7, h: 7, top: "85%", left: "75%", delay: "2.5s", dur: "10s", opacity: 0.2 },
        ].map((p, i) => (
          <div key={i} style={{
            position: "absolute",
            top: p.top, left: p.left,
            width: p.w, height: p.h,
            borderRadius: "50%",
            background: "#60A5FA",
            opacity: p.opacity,
            animation: `particleDrift ${p.dur} ${p.delay} ease-in-out infinite`,
          }} />
        ))}
        {/* Glowing orbs */}
        {[
          { size: 300, top: "10%", left: "60%", color: "rgba(37,99,235,0.08)", delay: "0s" },
          { size: 200, top: "55%", left: "75%", color: "rgba(96,165,250,0.06)", delay: "3s" },
        ].map((orb, i) => (
          <div key={i} style={{
            position: "absolute",
            top: orb.top, left: orb.left,
            width: orb.size, height: orb.size,
            borderRadius: "50%",
            background: orb.color,
            filter: "blur(60px)",
            animation: `floatSlow 10s ${orb.delay} ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* ── Directional gradient overlay ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(105deg, rgba(5,10,25,0.96) 0%, rgba(5,10,25,0.88) 35%, rgba(5,10,25,0.55) 58%, rgba(5,10,25,0.10) 80%, transparent 100%)"
      }} />
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        background: "linear-gradient(to top, rgba(5,10,25,0.4) 0%, transparent 30%)"
      }} />

      {/* ── Hero content (staggered animations) ── */}
      <div className="container" style={{ position: "relative", zIndex: 3, padding: "0 24px clamp(40px, 6vh, 60px)" }}>
        <div style={{ maxWidth: "610px" }}>

          {/* Badge */}
          <div className="anim-fade-up delay-1 live-dot" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(37,99,235,0.22)", border: "1px solid rgba(37,99,235,0.45)",
            color: "#93C5FD", fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.10em", textTransform: "uppercase",
            padding: "8px 18px", borderRadius: "9999px", marginBottom: "28px"
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#4ADE80", display: "inline-block",
              boxShadow: "0 0 8px #4ADE80",
              animation: "pulse-glow 2s ease-in-out infinite"
            }} />
            Available 24 / 7 | South Carolina
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up delay-2" style={{
            color: "#fff",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 900, lineHeight: 1.02, marginBottom: "24px",
            letterSpacing: "-0.02em",
            textShadow: "0 2px 24px rgba(0,0,0,0.5)"
          }}>
            Keeping Your<br />
            <span className="shimmer-text">Fleet Moving</span>
          </h1>

          {/* Sub-copy */}
          <p className="anim-fade-up delay-3" style={{
            color: "#CBD5E1", fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            lineHeight: 1.75, marginBottom: "36px", maxWidth: "500px",
            textShadow: "0 1px 8px rgba(0,0,0,0.3)"
          }}>
            Professional roadside assistance and comprehensive fleet maintenance across South Carolina. We minimize downtime so you can maximize delivery.
          </p>

          {/* CTAs - 3D tilt on hover */}
          <div className="anim-fade-up delay-4" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "40px" }}>
            <div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
            >
              <a href="tel:+18033934907" style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "#2563EB", color: "#fff", padding: "16px 32px",
                borderRadius: "12px", fontWeight: 700, fontSize: "1.1rem",
                textDecoration: "none", boxShadow: "0 6px 28px rgba(37,99,235,0.5)",
                whiteSpace: "nowrap"
              }}>
                <Phone size={20} /> Call (803) 393-4907
              </a>
            </div>
            <div
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              style={{ transition: "transform 0.2s ease", transformStyle: "preserve-3d" }}
            >
              <Link href="/services" style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                color: "#E2E8F0", padding: "15px 28px", borderRadius: "12px",
                fontWeight: 600, fontSize: "1.05rem",
                border: "1.5px solid rgba(255,255,255,0.3)", textDecoration: "none",
                whiteSpace: "nowrap", backdropFilter: "blur(4px)",
                background: "rgba(255,255,255,0.06)"
              }}>
                View Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Trust badges */}
          <div className="anim-fade-up delay-5" style={{ display: "flex", gap: "22px", flexWrap: "wrap" }}>
            {trustBadges.map((b, i) => (
              <div key={b.label} style={{
                display: "flex", alignItems: "center", gap: "7px",
                color: "#94A3B8", fontSize: "0.9rem",
                animation: `fadeUp 0.6s ${0.6 + i * 0.1}s both ease`
              }}>
                <CheckCircle size={16} color="#4ADE80" /> {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
