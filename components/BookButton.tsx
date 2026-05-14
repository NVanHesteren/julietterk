"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

type Variant = "primary" | "clay" | "ghost" | "text";

interface BookButtonProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

export default function BookButton({
  variant = "primary",
  children,
  className = "",
  showArrow = true,
}: BookButtonProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#6F8666" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  const variantClass = `btn btn-${variant}`;

  const inlineStyles: Record<Variant, React.CSSProperties> = {
    primary: { background: "#6F8666", color: "#fff" },
    clay: { background: "#C97B5C", color: "#fff" },
    ghost: { background: "transparent", color: "#1F1E1A", border: "1px solid rgba(31,30,26,0.25)" },
    text: {},
  };

  return (
    <button
      className={`${variantClass} ${className}`}
      style={inlineStyles[variant]}
      data-cal-namespace="booking"
      data-cal-link="julietterk"
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
      {showArrow && (
        <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}
