import React from "react";

interface TokenSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export function TokenSection({ title, subtitle, children, dark }: TokenSectionProps) {
  return (
    <section
      className={`py-10 px-6 md:px-10 border-b ${
        dark
          ? "bg-[#0d1a13] border-[rgba(115,255,178,0.15)] text-white"
          : "bg-white border-[#e8e8e8] text-[#1d1b1b]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-6">
          <h2
            className={`mb-1 ${dark ? "text-[#73ffb2]" : "text-[#217446]"}`}
            style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.3 }} className={dark ? "text-white" : "text-[#1d1b1b]"}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
