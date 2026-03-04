"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // ms
  type?: "up" | "left" | "right" | "scale";
}

export default function Reveal({ children, className = "", style = {}, delay = 0, type = "up" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    // Set initial state
    el.style.opacity = "0";
    el.style.transition = `all 0.6s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`;
    
    if (type === "up") el.style.transform = "translateY(40px)";
    else if (type === "left") el.style.transform = "translateX(-40px)";
    else if (type === "right") el.style.transform = "translateX(50px)";
    else if (type === "scale") el.style.transform = "scale(0.9)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          if (type === "up" || type === "left" || type === "right") {
            el.style.transform = "translate(0, 0)";
          } else if (type === "scale") {
            el.style.transform = "scale(1)";
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, type]);

  return (
    <div ref={ref} className={className} style={{ ...style, willChange: "transform, opacity" }}>
      {children}
    </div>
  );
}
