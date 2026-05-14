"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimateProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function useInView(delay: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay * 1000);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

export function FadeUp({ children, className = "", delay = 0 }: AnimateProps) {
  const ref = useInView(delay);
  return (
    <div ref={ref} className={`animate-fade-up ${className}`}>
      {children}
    </div>
  );
}

export function FadeIn({ children, className = "", delay = 0 }: AnimateProps) {
  const ref = useInView(delay);
  return (
    <div ref={ref} className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
}

export function StaggerChildren({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useInView(0);
  return (
    <div ref={ref} className={`animate-stagger ${className}`}>
      {children}
    </div>
  );
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="animate-stagger-item">
      {children}
    </div>
  );
}
