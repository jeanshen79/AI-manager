import React, { useState } from "react";

interface SwatchProps {
  name: string;
  hex: string;
  token: string;
  dark?: boolean;
}

function Swatch({ name, hex, token, dark }: SwatchProps) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isLight = isLightColor(hex);

  return (
    <button
      onClick={copy}
      className="group flex flex-col rounded-lg overflow-hidden transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
      title={`Click to copy ${hex}`}
    >
      <div
        className="h-[64px] w-full flex items-center justify-center transition-opacity"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded ${
            isLight ? "bg-black/20 text-black" : "bg-white/20 text-white"
          }`}
        >
          {copied ? "✓ Copied!" : hex}
        </span>
      </div>
      <div className={`px-2 py-2 text-left ${dark ? "bg-[#1a2820]" : "bg-white"}`}>
        <p className={`text-[11px] font-semibold ${dark ? "text-white" : "text-[#1d1b1b]"}`} style={{ fontFamily: "Inter, sans-serif" }}>{name}</p>
        <p className={`text-[10px] mt-0.5 font-mono ${dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#afafaf]"}`}>{token}</p>
      </div>
    </button>
  );
}

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
}

interface ColorGroupProps {
  label: string;
  swatches: SwatchProps[];
  dark?: boolean;
}

function ColorGroup({ label, swatches, dark }: ColorGroupProps) {
  return (
    <div className="mb-8">
      <p
        className={`mb-3 text-sm font-medium ${dark ? "text-[rgba(255,255,255,0.6)]" : "text-[#717171]"}`}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {label}
      </p>
      <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
        {swatches.map((s) => (
          <Swatch key={s.token} {...s} dark={dark} />
        ))}
      </div>
    </div>
  );
}

export function ColorPalette({ dark }: { dark?: boolean }) {
  const mtGreen = [
    { name: "50", hex: "#edf7f1", token: "--mt-green-50" },
    { name: "100", hex: "#d0ecdc", token: "--mt-green-100" },
    { name: "200", hex: "#a3d9bc", token: "--mt-green-200" },
    { name: "300", hex: "#6ec29a", token: "--mt-green-300" },
    { name: "400", hex: "#3ea97a", token: "--mt-green-400" },
    { name: "500 ★", hex: "#217446", token: "--mt-green-500" },
    { name: "600", hex: "#1a5c37", token: "--mt-green-600" },
    { name: "700", hex: "#144529", token: "--mt-green-700" },
    { name: "800", hex: "#0d2e1b", token: "--mt-green-800" },
    { name: "900", hex: "#07170e", token: "--mt-green-900" },
  ];

  const brown = [
    { name: "50", hex: "#f9f5ef", token: "--8m-brown-50" },
    { name: "100", hex: "#f0e8d9", token: "--8m-brown-100" },
    { name: "200", hex: "#e0d0b4", token: "--8m-brown-200" },
    { name: "300", hex: "#cab27c", token: "--8m-brown-300" },
    { name: "400", hex: "#b89468", token: "--8m-brown-400" },
    { name: "500 ★", hex: "#a78662", token: "--8m-brown-500" },
    { name: "600", hex: "#866952", token: "--8m-brown-600" },
    { name: "700", hex: "#644e3c", token: "--8m-brown-700" },
    { name: "800", hex: "#433428", token: "--8m-brown-800" },
    { name: "900", hex: "#221a14", token: "--8m-brown-900" },
  ];

  const blue = [
    { name: "50", hex: "#eaf6fd", token: "--8m-blue-50" },
    { name: "100", hex: "#c9eaf9", token: "--8m-blue-100" },
    { name: "200", hex: "#94d5f3", token: "--8m-blue-200" },
    { name: "300", hex: "#5dbfec", token: "--8m-blue-300" },
    { name: "400 ★", hex: "#3ca9e3", token: "--8m-blue-400" },
    { name: "500", hex: "#2490cc", token: "--8m-blue-500" },
    { name: "600", hex: "#1b72a3", token: "--8m-blue-600" },
    { name: "700", hex: "#13547a", token: "--8m-blue-700" },
    { name: "800", hex: "#0c3752", token: "--8m-blue-800" },
    { name: "900", hex: "#061b29", token: "--8m-blue-900" },
  ];

  const neutral = [
    { name: "White", hex: "#ffffff", token: "--neutral-0" },
    { name: "50", hex: "#fafafa", token: "--neutral-50" },
    { name: "100", hex: "#f5f5f5", token: "--neutral-100" },
    { name: "200", hex: "#eeeeee", token: "--neutral-200" },
    { name: "300", hex: "#e8e8e8", token: "--neutral-300" },
    { name: "400", hex: "#cccccc", token: "--neutral-400" },
    { name: "500", hex: "#afafaf", token: "--neutral-500" },
    { name: "600", hex: "#717171", token: "--neutral-600" },
    { name: "800", hex: "#2e2e2e", token: "--neutral-800" },
    { name: "900 ★", hex: "#1d1b1b", token: "--neutral-900" },
  ];

  const special = [
    { name: "螢光綠 Neon", hex: "#73ffb2", token: "--neon-green" },
    { name: "深底 Dark BG", hex: "#0d1a13", token: "--dark-bg-900" },
    { name: "深卡片 Surface", hex: "#1a2820", token: "--dark-surface" },
    { name: "經理人藍邊", hex: "#1e3a5f", token: "--border-navy" },
    { name: "警示紅", hex: "#d4183d", token: "--destructive" },
  ];

  return (
    <div>
      <ColorGroup label="經理人主綠 MT Green — Primary Brand" swatches={mtGreen} dark={dark} />
      <ColorGroup label="八分生活棕 8min Brown — Secondary A" swatches={brown} dark={dark} />
      <ColorGroup label="八分生活藍 8min Blue — Secondary B" swatches={blue} dark={dark} />
      <ColorGroup label="中性色 Neutral" swatches={neutral} dark={dark} />
      <ColorGroup label="特殊 / 語義色 Special & Semantic" swatches={special} dark={dark} />
    </div>
  );
}
