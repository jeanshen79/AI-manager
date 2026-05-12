import React from "react";

const spacingTokens = [
  { token: "--space-1", value: "4px", label: "Space 1" },
  { token: "--space-2", value: "8px", label: "Space 2" },
  { token: "--space-3", value: "12px", label: "Space 3" },
  { token: "--space-4", value: "16px", label: "Space 4 (Section Mobile)" },
  { token: "--space-5", value: "20px", label: "Space 5" },
  { token: "--space-6", value: "24px", label: "Space 6 (Section Tablet)" },
  { token: "--space-8", value: "32px", label: "Space 8" },
  { token: "--space-10", value: "40px", label: "Space 10 (Section Desktop)" },
  { token: "--space-12", value: "48px", label: "Space 12" },
  { token: "--space-16", value: "64px", label: "Space 16" },
  { token: "--space-20", value: "80px", label: "Space 20" },
  { token: "--space-24", value: "96px", label: "Space 24" },
];

const radiusTokens = [
  { token: "--radius-xs", value: "2px", label: "XS" },
  { token: "--radius-sm", value: "4px", label: "SM (Card, Button)" },
  { token: "--radius-md", value: "6px", label: "MD" },
  { token: "--radius-lg", value: "8px", label: "LG (Hero Box)" },
  { token: "--radius-xl", value: "12px", label: "XL" },
  { token: "--radius-2xl", value: "16px", label: "2XL" },
  { token: "--radius-3xl", value: "24px", label: "3XL" },
  { token: "--radius-full", value: "9999px", label: "Full (Pills, Badges)" },
];

const shadowTokens = [
  { token: "--shadow-xs", value: "0 1px 2px rgba(0,0,0,0.06)", label: "XS" },
  { token: "--shadow-sm", value: "0 1px 4px rgba(0,0,0,0.08)", label: "SM" },
  { token: "--shadow-md", value: "0 2px 8px rgba(0,0,0,0.10)", label: "MD (Card)" },
  { token: "--shadow-lg", value: "0 4px 16px rgba(0,0,0,0.12)", label: "LG" },
  { token: "--shadow-xl", value: "0 8px 32px rgba(0,0,0,0.14)", label: "XL (Modal)" },
  { token: "--shadow-brand", value: "0 4px 16px rgba(33,116,70,0.20)", label: "Brand" },
  { token: "--shadow-neon", value: "0 0 20px rgba(115,255,178,0.30)", label: "Neon (Dark)" },
];

export function SpacingShowcase({ dark }: { dark?: boolean }) {
  const labelColor = dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#717171]";
  const tokenColor = dark ? "text-[#73ffb2]" : "text-[#217446]";
  const bgAlt = dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]";
  const bg = dark ? "bg-[#122019]" : "bg-white";
  const border = dark ? "border-[rgba(115,255,178,0.1)]" : "border-[#e8e8e8]";
  const barColor = dark ? "bg-[#73ffb2]" : "bg-[#217446]";

  return (
    <div className="space-y-12">
      {/* Spacing */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter" }}>Spacing Scale</p>
        <div className="space-y-2">
          {spacingTokens.map(({ token, value, label }) => {
            const px = parseInt(value);
            return (
              <div key={token} className={`flex items-center gap-4 py-2 border-b ${border}`}>
                <div className="w-[170px] shrink-0">
                  <span className={`text-[10px] font-mono ${tokenColor}`}>{token}</span>
                  <p className={`text-[11px] mt-0.5 ${labelColor}`} style={{ fontFamily: "Inter" }}>{label}</p>
                </div>
                <div
                  className={`h-[20px] rounded ${barColor} shrink-0`}
                  style={{ width: `${Math.min(px * 2, 300)}px`, opacity: 0.85 }}
                />
                <span className={`text-[12px] font-mono shrink-0 ${labelColor}`}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Radius */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter" }}>Border Radius</p>
        <div className="flex flex-wrap gap-4">
          {radiusTokens.map(({ token, value, label }) => (
            <div key={token} className={`flex flex-col items-center gap-2 p-4 rounded-lg ${bgAlt}`}>
              <div
                className={`w-[56px] h-[56px] ${dark ? "bg-[#73ffb2]/20 border-2 border-[#73ffb2]/40" : "bg-[#217446]/10 border-2 border-[#217446]/30"}`}
                style={{ borderRadius: value === "9999px" ? "9999px" : value }}
              />
              <p className={`text-[11px] text-center font-medium ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter" }}>{label}</p>
              <p className={`text-[10px] font-mono ${labelColor}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter" }}>Shadow Tokens</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {shadowTokens.map(({ token, value, label }) => (
            <div
              key={token}
              className={`p-5 rounded-lg flex flex-col gap-3 ${bg}`}
              style={{ boxShadow: value }}
            >
              <p className={`text-[12px] font-semibold ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter" }}>{label}</p>
              <span className={`text-[10px] font-mono break-all ${tokenColor}`}>{token}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
