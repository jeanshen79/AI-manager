import React, { useState } from "react";
import { Copy, Check, ArrowRight, ChevronRight, Info, Zap, Layers, Box } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   TOKEN DATA — 三層繼承結構
   Ref (原始值) → Sys (語義角色) → Comp (元件專屬)
═══════════════════════════════════════════════════════════ */

// ── Tier 1: Reference Tokens ──────────────────────────────
const REF_TOKENS = {
  palette: [
    { token: "--mt-ref-palette-primary10",  value: "#07170e", desc: "最深綠，高對比文字" },
    { token: "--mt-ref-palette-primary20",  value: "#0d2e1b", desc: "按壓狀態底色" },
    { token: "--mt-ref-palette-primary30",  value: "#144529", desc: "Hover 狀態底色" },
    { token: "--mt-ref-palette-primary40",  value: "#217446", desc: "★ 品牌主色 Brand Primary" },
    { token: "--mt-ref-palette-primary50",  value: "#3ea97a", desc: "淺一階主綠" },
    { token: "--mt-ref-palette-primary80",  value: "#a3d9bc", desc: "State layer tint" },
    { token: "--mt-ref-palette-primary90",  value: "#d0ecdc", desc: "Container 淺色" },
    { token: "--mt-ref-palette-primary95",  value: "#edf7f1", desc: "Surface 最淺" },
    { token: "--mt-ref-palette-neutral10",  value: "#1d1b1b", desc: "主文字色" },
    { token: "--mt-ref-palette-neutral100", value: "#ffffff", desc: "純白 On-Primary 文字" },
    { token: "--mt-ref-palette-neon50",     value: "#73ffb2", desc: "深色主題螢光強調" },
  ],
  typeface: [
    { token: "--mt-ref-typeface-brand", value: "'Noto Sans TC', sans-serif", desc: "品牌主字型 (中文)" },
    { token: "--mt-ref-typeface-plain", value: "'Inter', sans-serif",        desc: "輔助字型 (英數)" },
  ],
  spacing: [
    { token: "--mt-ref-spacing-4",  value: "4px",  desc: "基礎間距 1x" },
    { token: "--mt-ref-spacing-8",  value: "8px",  desc: "基礎間距 2x" },
    { token: "--mt-ref-spacing-12", value: "12px", desc: "基礎間距 3x" },
    { token: "--mt-ref-spacing-16", value: "16px", desc: "Icon-Label 間距來源" },
    { token: "--mt-ref-spacing-24", value: "24px", desc: "Button 水平 padding 來源" },
    { token: "--mt-ref-spacing-32", value: "32px", desc: "Button LG padding 來源" },
  ],
  shape: [
    { token: "--mt-ref-shape-corner-xs",   value: "2px",    desc: "極小圓角" },
    { token: "--mt-ref-shape-corner-sm",   value: "4px",    desc: "★ 按鈕預設圓角" },
    { token: "--mt-ref-shape-corner-md",   value: "8px",    desc: "Hero box 圓角" },
    { token: "--mt-ref-shape-corner-full", value: "9999px", desc: "Pill 形態" },
  ],
  elevation: [
    { token: "--mt-ref-elevation-shadow-brand", value: "0 4px 16px rgba(33,116,70,0.20)", desc: "品牌綠陰影" },
    { token: "--mt-ref-elevation-shadow-none",  value: "none",                            desc: "無陰影" },
  ],
  state: [
    { token: "--mt-ref-state-hover-opacity",    value: "0.08", desc: "Hover state layer 透明度" },
    { token: "--mt-ref-state-focus-opacity",    value: "0.12", desc: "Focus state layer 透明度" },
    { token: "--mt-ref-state-pressed-opacity",  value: "0.16", desc: "Pressed state layer 透明度" },
    { token: "--mt-ref-state-disabled-opacity", value: "0.38", desc: "Disabled 內容透明度" },
  ],
};

// ── Tier 2: System Tokens ─────────────────────────────────
const SYS_TOKENS = {
  color: [
    { token: "--mt-sys-color-primary",             value: "var(--mt-ref-palette-primary40)",  resolved: "#217446", desc: "主要行動色" },
    { token: "--mt-sys-color-on-primary",          value: "var(--mt-ref-palette-neutral100)", resolved: "#ffffff", desc: "主色上的文字/圖示" },
    { token: "--mt-sys-color-primary-container",   value: "var(--mt-ref-palette-primary90)",  resolved: "#d0ecdc", desc: "主色容器背景" },
    { token: "--mt-sys-color-on-primary-container",value: "var(--mt-ref-palette-primary10)",  resolved: "#07170e", desc: "容器上文字" },
    { token: "--mt-sys-color-primary-hover",       value: "var(--mt-ref-palette-primary30)",  resolved: "#144529", desc: "Hover 狀態背景" },
    { token: "--mt-sys-color-primary-pressed",     value: "var(--mt-ref-palette-primary20)",  resolved: "#0d2e1b", desc: "Pressed 狀態背景" },
    { token: "--mt-sys-color-surface-tint",        value: "var(--mt-ref-palette-primary80)",  resolved: "#a3d9bc", desc: "Surface 染色層" },
    { token: "--mt-sys-color-outline",             value: "var(--mt-ref-palette-primary40)",  resolved: "#217446", desc: "Focus ring 顏色" },
  ],
  typescale: [
    { token: "--mt-sys-typescale-label-lg-font",        value: "var(--mt-ref-typeface-brand)",    resolved: "Noto Sans TC", desc: "標籤字型" },
    { token: "--mt-sys-typescale-label-lg-size",        value: "15px",                            resolved: "15px",        desc: "MD 按鈕字級" },
    { token: "--mt-sys-typescale-label-lg-size-sm",     value: "13px",                            resolved: "13px",        desc: "SM 按鈕字級" },
    { token: "--mt-sys-typescale-label-lg-size-lg",     value: "17px",                            resolved: "17px",        desc: "LG 按鈕字級" },
    { token: "--mt-sys-typescale-label-lg-weight",      value: "500",                             resolved: "Medium 500",  desc: "字重" },
    { token: "--mt-sys-typescale-label-lg-tracking",    value: "0.01em",                          resolved: "0.01em",      desc: "字距" },
    { token: "--mt-sys-typescale-label-lg-line-height", value: "1.4",                             resolved: "1.4",         desc: "行高" },
  ],
  shape: [
    { token: "--mt-sys-shape-corner-button",      value: "var(--mt-ref-shape-corner-sm)",   resolved: "4px",    desc: "按鈕預設圓角" },
    { token: "--mt-sys-shape-corner-button-pill", value: "var(--mt-ref-shape-corner-full)", resolved: "9999px", desc: "Pill 形按鈕" },
  ],
  elevation: [
    { token: "--mt-sys-elevation-button",      value: "var(--mt-ref-elevation-shadow-brand)", resolved: "0 4px 16px rgba(33,116,70,0.20)", desc: "按鈕預設陰影" },
    { token: "--mt-sys-elevation-button-none", value: "var(--mt-ref-elevation-shadow-none)", resolved: "none",                            desc: "無陰影（flat style）" },
  ],
  state: [
    { token: "--mt-sys-state-hover-opacity",    value: "var(--mt-ref-state-hover-opacity)",    resolved: "0.08", desc: "Hover overlay" },
    { token: "--mt-sys-state-focus-opacity",    value: "var(--mt-ref-state-focus-opacity)",    resolved: "0.12", desc: "Focus overlay" },
    { token: "--mt-sys-state-pressed-opacity",  value: "var(--mt-ref-state-pressed-opacity)",  resolved: "0.16", desc: "Pressed overlay" },
    { token: "--mt-sys-state-disabled-opacity", value: "var(--mt-ref-state-disabled-opacity)", resolved: "0.38", desc: "Disabled opacity" },
  ],
};

// ── Tier 3: Component Tokens ──────────────────────────────
const COMP_TOKENS = {
  container: [
    { token: "--mt-comp-btn-primary-container-color",  value: "var(--mt-sys-color-primary)",         resolved: "#217446", desc: "預設底色" },
    { token: "--mt-comp-btn-primary-container-height", value: "40px",                                resolved: "40px",    desc: "MD 尺寸高度" },
    { token: "--mt-comp-btn-primary-container-shape",  value: "var(--mt-sys-shape-corner-button)",   resolved: "4px",     desc: "圓角半徑" },
    { token: "--mt-comp-btn-primary-container-elevation", value: "var(--mt-sys-elevation-button)",   resolved: "shadow",  desc: "預設陰影" },
  ],
  label: [
    { token: "--mt-comp-btn-primary-label-color",       value: "var(--mt-sys-color-on-primary)",          resolved: "#ffffff",      desc: "文字顏色" },
    { token: "--mt-comp-btn-primary-label-font",        value: "var(--mt-sys-typescale-label-lg-font)",   resolved: "Noto Sans TC", desc: "字型" },
    { token: "--mt-comp-btn-primary-label-size",        value: "var(--mt-sys-typescale-label-lg-size)",   resolved: "15px",         desc: "字級 (MD)" },
    { token: "--mt-comp-btn-primary-label-weight",      value: "var(--mt-sys-typescale-label-lg-weight)", resolved: "500",          desc: "字重" },
    { token: "--mt-comp-btn-primary-label-tracking",    value: "var(--mt-sys-typescale-label-lg-tracking)",resolved: "0.01em",      desc: "字距" },
    { token: "--mt-comp-btn-primary-label-line-height", value: "var(--mt-sys-typescale-label-lg-line-height)", resolved: "1.4",    desc: "行高" },
  ],
  icon: [
    { token: "--mt-comp-btn-primary-icon-color",   value: "var(--mt-sys-color-on-primary)", resolved: "#ffffff", desc: "圖示顏色" },
    { token: "--mt-comp-btn-primary-icon-size",    value: "18px",                           resolved: "18px",    desc: "圖示大小" },
  ],
  spacing: [
    { token: "--mt-comp-btn-primary-leading-space",            value: "24px",  resolved: "24px",  desc: "左側 padding（無 icon）" },
    { token: "--mt-comp-btn-primary-trailing-space",           value: "24px",  resolved: "24px",  desc: "右側 padding（無 icon）" },
    { token: "--mt-comp-btn-primary-with-icon-leading-space",  value: "16px",  resolved: "16px",  desc: "有 icon 時左側 padding" },
    { token: "--mt-comp-btn-primary-with-icon-trailing-space", value: "24px",  resolved: "24px",  desc: "有 icon 時右側 padding" },
    { token: "--mt-comp-btn-primary-icon-label-space",         value: "8px",   resolved: "8px",   desc: "Icon 與 Label 間距" },
  ],
  size: [
    { token: "--mt-comp-btn-primary-sm-height",        value: "32px",  resolved: "32px",  desc: "SM 高度" },
    { token: "--mt-comp-btn-primary-sm-leading-space", value: "14px",  resolved: "14px",  desc: "SM 水平 padding" },
    { token: "--mt-comp-btn-primary-sm-label-size",    value: "var(--mt-sys-typescale-label-lg-size-sm)", resolved: "13px", desc: "SM 字級" },
    { token: "--mt-comp-btn-primary-md-height",        value: "40px",  resolved: "40px",  desc: "MD 高度（預設）" },
    { token: "--mt-comp-btn-primary-lg-height",        value: "48px",  resolved: "48px",  desc: "LG 高度" },
    { token: "--mt-comp-btn-primary-lg-leading-space", value: "32px",  resolved: "32px",  desc: "LG 水平 padding" },
    { token: "--mt-comp-btn-primary-lg-label-size",    value: "var(--mt-sys-typescale-label-lg-size-lg)", resolved: "17px", desc: "LG 字級" },
  ],
  stateHover: [
    { token: "--mt-comp-btn-primary-hover-container-color",       value: "var(--mt-sys-color-primary-hover)",   resolved: "#144529", desc: "Hover 底色（深一階）" },
    { token: "--mt-comp-btn-primary-hover-label-color",           value: "var(--mt-sys-color-on-primary)",      resolved: "#ffffff", desc: "Hover 文字色" },
    { token: "--mt-comp-btn-primary-hover-state-layer-color",     value: "var(--mt-sys-color-on-primary)",      resolved: "#ffffff", desc: "State layer 疊色" },
    { token: "--mt-comp-btn-primary-hover-state-layer-opacity",   value: "var(--mt-sys-state-hover-opacity)",   resolved: "0.08",    desc: "State layer 透明度" },
    { token: "--mt-comp-btn-primary-hover-container-elevation",   value: "var(--mt-sys-elevation-button)",      resolved: "shadow",  desc: "Hover 陰影（維持）" },
  ],
  stateFocus: [
    { token: "--mt-comp-btn-primary-focus-container-color",     value: "var(--mt-sys-color-primary)",         resolved: "#217446", desc: "Focus 底色（不變）" },
    { token: "--mt-comp-btn-primary-focus-label-color",         value: "var(--mt-sys-color-on-primary)",      resolved: "#ffffff", desc: "Focus 文字色" },
    { token: "--mt-comp-btn-primary-focus-state-layer-color",   value: "var(--mt-sys-color-on-primary)",      resolved: "#ffffff", desc: "State layer 疊色" },
    { token: "--mt-comp-btn-primary-focus-state-layer-opacity", value: "var(--mt-sys-state-focus-opacity)",   resolved: "0.12",    desc: "State layer 透明度" },
    { token: "--mt-comp-btn-primary-focus-outline-color",       value: "var(--mt-sys-color-outline)",         resolved: "#217446", desc: "Focus ring 顏色" },
    { token: "--mt-comp-btn-primary-focus-outline-width",       value: "3px",                                 resolved: "3px",     desc: "Focus ring 寬度" },
    { token: "--mt-comp-btn-primary-focus-outline-offset",      value: "2px",                                 resolved: "2px",     desc: "Focus ring 偏移" },
  ],
  statePressed: [
    { token: "--mt-comp-btn-primary-pressed-container-color",     value: "var(--mt-sys-color-primary-pressed)",  resolved: "#0d2e1b", desc: "Pressed 底色（最深）" },
    { token: "--mt-comp-btn-primary-pressed-label-color",         value: "var(--mt-sys-color-on-primary)",       resolved: "#ffffff", desc: "Pressed 文字色" },
    { token: "--mt-comp-btn-primary-pressed-state-layer-color",   value: "var(--mt-sys-color-on-primary)",       resolved: "#ffffff", desc: "State layer 疊色" },
    { token: "--mt-comp-btn-primary-pressed-state-layer-opacity", value: "var(--mt-sys-state-pressed-opacity)",  resolved: "0.16",    desc: "State layer 透明度" },
    { token: "--mt-comp-btn-primary-pressed-container-elevation", value: "var(--mt-sys-elevation-button-none)",  resolved: "none",    desc: "Pressed 陰影消失" },
  ],
  stateDisabled: [
    { token: "--mt-comp-btn-primary-disabled-container-color",    value: "rgba(0, 0, 0, 0.12)",                  resolved: "rgba(0,0,0,0.12)", desc: "Disabled 底色" },
    { token: "--mt-comp-btn-primary-disabled-label-color",        value: "var(--mt-ref-palette-neutral10)",       resolved: "#1d1b1b",         desc: "Disabled 文字色（含 opacity）" },
    { token: "--mt-comp-btn-primary-disabled-label-opacity",      value: "var(--mt-sys-state-disabled-opacity)",  resolved: "0.38",            desc: "Disabled 文字透明度" },
    { token: "--mt-comp-btn-primary-disabled-container-elevation", value: "var(--mt-sys-elevation-button-none)", resolved: "none",            desc: "Disabled 無陰影" },
  ],
  dark: [
    { token: "--mt-comp-btn-primary-dark-container-color",      value: "#73ffb2",                              resolved: "#73ffb2",          desc: "深色主題底色（螢光綠）" },
    { token: "--mt-comp-btn-primary-dark-label-color",          value: "#0d1a13",                              resolved: "#0d1a13",          desc: "深色主題文字（深底）" },
    { token: "--mt-comp-btn-primary-dark-icon-color",           value: "#0d1a13",                              resolved: "#0d1a13",          desc: "深色主題圖示" },
    { token: "--mt-comp-btn-primary-dark-container-elevation",  value: "0 0 20px rgba(115,255,178,0.30)",      resolved: "neon glow",        desc: "深色主題發光陰影" },
    { token: "--mt-comp-btn-primary-dark-hover-container-color", value: "#52e89a",                             resolved: "#52e89a",          desc: "深色 Hover（螢光綠深一階）" },
    { token: "--mt-comp-btn-primary-dark-focus-outline-color",  value: "#73ffb2",                              resolved: "#73ffb2",          desc: "深色 Focus ring" },
  ],
};

// ── Outline Button Component Tokens ──────────────────────
// 來源：Figma CtaBtn（白底 + 主綠框線 + 主綠文字）
const OUTLINE_TOKENS = {
  container: [
    { token: "--mt-comp-btn-outline-container-color",        value: "transparent",                               resolved: "transparent",         desc: "預設底色（透明）" },
    { token: "--mt-comp-btn-outline-container-bg-hover",     value: "rgba(33, 116, 70, 0.06)",                   resolved: "rgba(33,116,70,0.06)", desc: "Hover 時輕染主色（6% tint）" },
    { token: "--mt-comp-btn-outline-container-border-color", value: "var(--mt-sys-color-primary)",               resolved: "#217446",              desc: "邊框色 = 主色" },
    { token: "--mt-comp-btn-outline-container-border-width", value: "1px",                                       resolved: "1px",                  desc: "邊框寬度" },
    { token: "--mt-comp-btn-outline-container-shape",        value: "var(--mt-sys-shape-corner-button)",         resolved: "4px",                  desc: "圓角半徑（與 Primary 一致）" },
    { token: "--mt-comp-btn-outline-container-height",       value: "40px",                                      resolved: "40px",                 desc: "MD 尺寸高度" },
  ],
  label: [
    { token: "--mt-comp-btn-outline-label-color",            value: "var(--mt-sys-color-primary)",               resolved: "#217446",              desc: "文字色 = 主色" },
    { token: "--mt-comp-btn-outline-label-font",             value: "var(--mt-sys-typescale-label-lg-font)",     resolved: "Noto Sans TC",         desc: "字型" },
    { token: "--mt-comp-btn-outline-label-size",             value: "14px",                                      resolved: "14px",                 desc: "字級（Figma 規格）" },
    { token: "--mt-comp-btn-outline-label-weight",           value: "600",                                       resolved: "Semi Bold 600",        desc: "字重（比 Primary 重一階）" },
    { token: "--mt-comp-btn-outline-label-tracking",         value: "var(--mt-sys-typescale-label-lg-tracking)", resolved: "0.01em",               desc: "字距" },
  ],
  spacing: [
    { token: "--mt-comp-btn-outline-leading-space",  value: "24px", resolved: "24px", desc: "左側 padding" },
    { token: "--mt-comp-btn-outline-trailing-space", value: "24px", resolved: "24px", desc: "右側 padding" },
    { token: "--mt-comp-btn-outline-vertical-space", value: "8px",  resolved: "8px",  desc: "上下 padding（緊湊型）" },
  ],
  stateHover: [
    { token: "--mt-comp-btn-outline-hover-container-color",        value: "rgba(33, 116, 70, 0.06)",           resolved: "rgba(33,116,70,0.06)", desc: "Hover 底色（主色 6% tint）" },
    { token: "--mt-comp-btn-outline-hover-container-border-color", value: "var(--mt-sys-color-primary)",       resolved: "#217446",              desc: "Hover 邊框色（不變）" },
    { token: "--mt-comp-btn-outline-hover-label-color",            value: "var(--mt-sys-color-primary)",       resolved: "#217446",              desc: "Hover 文字色（不變）" },
    { token: "--mt-comp-btn-outline-hover-state-layer-opacity",    value: "var(--mt-sys-state-hover-opacity)", resolved: "0.08",                 desc: "State layer 透明度" },
  ],
  stateFocus: [
    { token: "--mt-comp-btn-outline-focus-container-color",        value: "rgba(33, 116, 70, 0.08)",          resolved: "rgba(33,116,70,0.08)", desc: "Focus 底色（主色 8% tint）" },
    { token: "--mt-comp-btn-outline-focus-container-border-color", value: "var(--mt-sys-color-primary)",      resolved: "#217446",              desc: "Focus 邊框色（不變）" },
    { token: "--mt-comp-btn-outline-focus-outline-color",          value: "var(--mt-sys-color-outline)",      resolved: "#217446",              desc: "Focus ring 顏色" },
    { token: "--mt-comp-btn-outline-focus-outline-width",          value: "3px",                              resolved: "3px",                  desc: "Focus ring 寬度" },
    { token: "--mt-comp-btn-outline-focus-outline-offset",         value: "2px",                              resolved: "2px",                  desc: "Focus ring 偏移" },
  ],
  statePressed: [
    { token: "--mt-comp-btn-outline-pressed-container-color",        value: "rgba(33, 116, 70, 0.12)",           resolved: "rgba(33,116,70,0.12)", desc: "Pressed 底色（主色 12% tint）" },
    { token: "--mt-comp-btn-outline-pressed-container-border-color", value: "var(--mt-sys-color-primary)",       resolved: "#217446",              desc: "Pressed 邊框色" },
    { token: "--mt-comp-btn-outline-pressed-label-color",            value: "var(--mt-sys-color-primary-hover)", resolved: "#144529",              desc: "Pressed 文字色（深一階）" },
  ],
  stateDisabled: [
    { token: "--mt-comp-btn-outline-disabled-container-color",        value: "transparent",                          resolved: "transparent",      desc: "Disabled 底色（保持透明）" },
    { token: "--mt-comp-btn-outline-disabled-container-border-color", value: "rgba(0, 0, 0, 0.12)",                  resolved: "rgba(0,0,0,0.12)", desc: "Disabled 邊框色" },
    { token: "--mt-comp-btn-outline-disabled-label-color",            value: "var(--mt-ref-palette-neutral10)",       resolved: "#1d1b1b",          desc: "Disabled 文字色（含 opacity）" },
    { token: "--mt-comp-btn-outline-disabled-label-opacity",          value: "var(--mt-sys-state-disabled-opacity)",  resolved: "0.38",             desc: "Disabled 文字透明度" },
  ],
};

/* ═══════════════════════════════════════════════════════════
   HELPER: CopyBadge
═══════════════════════════════════════════════════════════ */
function CopyBadge({ text, dark }: { text: string; dark: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded font-mono transition-all hover:opacity-80 shrink-0"
      style={{
        backgroundColor: dark ? "rgba(115,255,178,0.08)" : "#edf7f1",
        color: dark ? "#73ffb2" : "#217446",
        border: `1px solid ${dark ? "rgba(115,255,178,0.2)" : "#a3d9bc"}`,
        fontSize: "10px",
      }}
      title={`複製 ${text}`}
    >
      {copied ? <Check size={9} /> : <Copy size={9} />}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════���═══
   COLOR SWATCH INLINE
═══════════════════════════════════════════════════════════ */
function ColorDot({ color }: { color: string }) {
  if (!color || (!color.startsWith("#") && !color.startsWith("rgba") && !color.startsWith("rgb"))) return null;
  return (
    <span
      className="inline-block w-3 h-3 rounded-full shrink-0 border"
      style={{ backgroundColor: color, borderColor: "rgba(0,0,0,0.1)" }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   TOKEN TABLE ROW
═══════════════════════════════════════════════════════════ */
interface TokenRow {
  token: string;
  value: string;
  resolved: string;
  desc: string;
}

function TokenTableRow({ row, dark, tier }: { row: TokenRow; dark: boolean; tier: "ref" | "sys" | "comp" }) {
  const tierColors = {
    ref:  { bg: dark ? "rgba(115,255,178,0.04)" : "#f0fdf4", dot: "#3ea97a" },
    sys:  { bg: dark ? "rgba(60,169,227,0.05)"  : "#eff8ff", dot: "#3ca9e3" },
    comp: { bg: dark ? "rgba(167,134,98,0.06)"  : "#fdf8f3", dot: "#a78662" },
  };
  const c = tierColors[tier];
  const border = dark ? "rgba(255,255,255,0.06)" : "#e8e8e8";

  return (
    <tr style={{ borderBottom: `1px solid ${border}`, backgroundColor: c.bg }}>
      {/* Tier dot */}
      <td className="py-2.5 pl-3 pr-2 w-5">
        <span className="w-[6px] h-[6px] rounded-full inline-block" style={{ backgroundColor: c.dot }} />
      </td>
      {/* Token name */}
      <td className="py-2.5 pr-4">
        <div className="flex items-center gap-1.5">
          <code
            className="text-[11px] font-mono break-all"
            style={{ color: dark ? "rgba(255,255,255,0.85)" : "#1d1b1b" }}
          >
            {row.token}
          </code>
          <CopyBadge text={row.token} dark={dark} />
        </div>
      </td>
      {/* Value */}
      <td className="py-2.5 pr-4 hidden md:table-cell">
        <code
          className="text-[10px] font-mono block"
          style={{ color: dark ? "rgba(255,255,255,0.45)" : "#717171", maxWidth: "260px", wordBreak: "break-all" }}
        >
          {row.value}
        </code>
      </td>
      {/* Resolved */}
      <td className="py-2.5 pr-4 hidden lg:table-cell">
        <div className="flex items-center gap-1.5">
          <ColorDot color={row.resolved} />
          <code className="text-[10px] font-mono" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#4a4a4a" }}>
            {row.resolved}
          </code>
        </div>
      </td>
      {/* Desc */}
      <td className="py-2.5 pr-3">
        <span className="text-[11px]" style={{ color: dark ? "rgba(255,255,255,0.4)" : "#afafaf", fontFamily: "Noto Sans TC, sans-serif" }}>
          {row.desc}
        </span>
      </td>
    </tr>
  );
}

/* ═══════════════════════════════════════════════════════════
   TOKEN TABLE
═══════════════════════════════════════════════════════════ */
function TokenTable({ title, rows, dark, tier }: { title: string; rows: TokenRow[]; dark: boolean; tier: "ref" | "sys" | "comp" }) {
  const [open, setOpen] = useState(true);
  const border = dark ? "rgba(255,255,255,0.08)" : "#e8e8e8";
  const headerBg = dark ? "#1a2820" : "#f5f5f5";
  const chevronColor = dark ? "rgba(255,255,255,0.4)" : "#afafaf";

  return (
    <div className="mb-4 rounded-lg overflow-hidden" style={{ border: `1px solid ${border}` }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:opacity-90"
        style={{ backgroundColor: headerBg }}
      >
        <span className="text-[12px] font-semibold" style={{ color: dark ? "rgba(255,255,255,0.7)" : "#4a4a4a", fontFamily: "Inter, sans-serif" }}>
          {title}
          <span className="ml-2 text-[10px] font-normal" style={{ color: chevronColor }}>
            {rows.length} tokens
          </span>
        </span>
        <ChevronRight
          size={14}
          style={{ color: chevronColor, transform: open ? "rotate(90deg)" : "none", transition: "transform 200ms ease" }}
        />
      </button>
      {open && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottom: `1px solid ${border}` }}>
                <th className="w-5" />
                {["Token Name", "Value (繼承)", "Resolved", "說明"].map((h) => (
                  <th
                    key={h}
                    className={`py-2 text-left text-[10px] font-semibold tracking-widest uppercase pr-4 ${
                      h === "Value (繼承)" ? "hidden md:table-cell" : h === "Resolved" ? "hidden lg:table-cell" : ""
                    }`}
                    style={{ color: dark ? "rgba(255,255,255,0.3)" : "#afafaf", fontFamily: "Inter" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <TokenTableRow key={row.token} row={row} dark={dark} tier={tier} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INTERACTIVE BUTTON PREVIEW
═══════════════════════════════════════════════════════════ */
type BtnState   = "default" | "hover" | "focus" | "pressed" | "disabled" | "dark";
type BtnSize    = "sm" | "md" | "lg";
type BtnVariant = "primary" | "outline";

interface StateConfig { bg: string; text: string; shadow: string; outline?: string; border?: string; label: string; }

const PRIMARY_STATE_CONFIGS: Record<BtnState, StateConfig> = {
  default:  { bg: "#217446",           text: "#ffffff",              shadow: "0 4px 16px rgba(33,116,70,0.20)", label: "Default" },
  hover:    { bg: "#144529",           text: "#ffffff",              shadow: "0 4px 16px rgba(33,116,70,0.25)", label: "Hover" },
  focus:    { bg: "#217446",           text: "#ffffff",              shadow: "0 4px 16px rgba(33,116,70,0.20)", outline: "3px solid #217446", label: "Focus" },
  pressed:  { bg: "#0d2e1b",           text: "#ffffff",              shadow: "none", label: "Pressed" },
  disabled: { bg: "rgba(0,0,0,0.12)",  text: "rgba(29,27,27,0.38)", shadow: "none", label: "Disabled" },
  dark:     { bg: "#73ffb2",           text: "#0d1a13",              shadow: "0 0 20px rgba(115,255,178,0.30)", label: "Dark Theme" },
};

const OUTLINE_STATE_CONFIGS: Record<BtnState, StateConfig> = {
  default:  { bg: "transparent",               text: "#217446",              shadow: "none", border: "1px solid #217446", label: "Default" },
  hover:    { bg: "rgba(33,116,70,0.06)",       text: "#217446",              shadow: "none", border: "1px solid #217446", label: "Hover" },
  focus:    { bg: "rgba(33,116,70,0.08)",       text: "#217446",              shadow: "none", border: "1px solid #217446", outline: "3px solid #217446", label: "Focus" },
  pressed:  { bg: "rgba(33,116,70,0.12)",       text: "#144529",              shadow: "none", border: "1px solid #217446", label: "Pressed" },
  disabled: { bg: "transparent",               text: "rgba(29,27,27,0.38)", shadow: "none", border: "1px solid rgba(0,0,0,0.12)", label: "Disabled" },
  dark:     { bg: "transparent",               text: "#73ffb2",              shadow: "none", border: "1px solid #73ffb2", label: "Dark Theme" },
};

// Keep legacy alias for existing code
const STATE_CONFIGS = PRIMARY_STATE_CONFIGS;

const SIZE_CONFIGS: Record<BtnSize, { height: string; px: string; fontSize: string; iconSize: number }> = {
  sm: { height: "32px", px: "14px", fontSize: "13px", iconSize: 14 },
  md: { height: "40px", px: "24px", fontSize: "15px", iconSize: 18 },
  lg: { height: "48px", px: "32px", fontSize: "17px", iconSize: 20 },
};

function InteractivePreview({ dark }: { dark: boolean }) {
  const [activeState,   setActiveState]   = useState<BtnState>("default");
  const [activeSize,    setActiveSize]    = useState<BtnSize>("md");
  const [activeVariant, setActiveVariant] = useState<BtnVariant>("primary");
  const [withIcon,      setWithIcon]      = useState(true);

  const stateConfigs = activeVariant === "primary" ? PRIMARY_STATE_CONFIGS : OUTLINE_STATE_CONFIGS;
  const s  = stateConfigs[activeState];
  const sz = SIZE_CONFIGS[activeSize];
  const previewBg = activeState === "dark" ? "#0d1a13" : dark ? "#122019" : "#f5f5f5";

  // Outline does not support "dark" state with icon the same way — keep state list same
  const stateBtns: BtnState[] = ["default", "hover", "focus", "pressed", "disabled", "dark"];
  const sizeBtns:  BtnSize[]  = ["sm", "md", "lg"];

  const border = dark ? "rgba(255,255,255,0.08)" : "#e8e8e8";

  // Live token inspector values — differ per variant
  const liveTokens = activeVariant === "primary"
    ? [
        { label: "container-color",     value: s.bg },
        { label: "label-color",         value: s.text },
        { label: "container-elevation", value: s.shadow === "none" ? "none" : "shadow" },
        { label: "container-shape",     value: "4px" },
        { label: "label-size",          value: sz.fontSize },
        { label: "height",              value: sz.height },
        { label: "leading-space",       value: withIcon ? "16px" : sz.px },
        { label: "trailing-space",      value: sz.px },
      ]
    : [
        { label: "container-color",        value: s.bg },
        { label: "container-border-color", value: s.border ?? "1px solid #217446" },
        { label: "container-border-width", value: "1px" },
        { label: "label-color",            value: s.text },
        { label: "label-size",             value: "14px" },
        { label: "label-weight",           value: "600" },
        { label: "container-shape",        value: "4px" },
        { label: "vertical-space",         value: "8px" },
      ];

  const ctrlBtn = (active: boolean, onClick: () => void, label: string) => (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded text-[11px] font-medium transition-all"
      style={{
        backgroundColor: active ? dark ? "rgba(115,255,178,0.12)" : "#edf7f1" : dark ? "#1a2820" : "#f0f0f0",
        color: active ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.55)" : "#4a4a4a",
        border: `1px solid ${active ? dark ? "rgba(115,255,178,0.3)" : "#a3d9bc" : "transparent"}`,
        fontFamily: "Inter",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-4">
      {/* Left: button preview */}
      <div>
        {/* Controls */}
        <div className="flex flex-wrap gap-4 mb-4">
          {/* Variant */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: dark ? "rgba(255,255,255,0.35)" : "#afafaf", fontFamily: "Inter" }}>Variant</p>
            <div className="flex gap-1.5">
              {ctrlBtn(activeVariant === "primary", () => setActiveVariant("primary"), "Primary")}
              {ctrlBtn(activeVariant === "outline", () => setActiveVariant("outline"), "Outline")}
            </div>
          </div>
          {/* State */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: dark ? "rgba(255,255,255,0.35)" : "#afafaf", fontFamily: "Inter" }}>State</p>
            <div className="flex flex-wrap gap-1.5">
              {stateBtns.map((st) => (
                <button
                  key={st}
                  onClick={() => setActiveState(st)}
                  className="px-3 py-1.5 rounded text-[11px] font-medium transition-all"
                  style={{
                    backgroundColor: activeState === st ? dark ? "rgba(115,255,178,0.12)" : "#edf7f1" : dark ? "#1a2820" : "#f0f0f0",
                    color: activeState === st ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.55)" : "#4a4a4a",
                    border: `1px solid ${activeState === st ? dark ? "rgba(115,255,178,0.3)" : "#a3d9bc" : "transparent"}`,
                    fontFamily: "Inter",
                  }}
                >
                  {stateConfigs[st].label}
                </button>
              ))}
            </div>
          </div>
          {/* Size */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: dark ? "rgba(255,255,255,0.35)" : "#afafaf", fontFamily: "Inter" }}>Size</p>
            <div className="flex gap-1.5">
              {sizeBtns.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setActiveSize(sz)}
                  className="px-3 py-1.5 rounded text-[11px] font-medium transition-all"
                  style={{
                    backgroundColor: activeSize === sz ? dark ? "rgba(115,255,178,0.12)" : "#edf7f1" : dark ? "#1a2820" : "#f0f0f0",
                    color: activeSize === sz ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.55)" : "#4a4a4a",
                    border: `1px solid ${activeSize === sz ? dark ? "rgba(115,255,178,0.3)" : "#a3d9bc" : "transparent"}`,
                    fontFamily: "Inter",
                  }}
                >
                  {sz.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          {/* Icon toggle */}
          <div>
            <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: dark ? "rgba(255,255,255,0.35)" : "#afafaf", fontFamily: "Inter" }}>Icon</p>
            <button
              onClick={() => setWithIcon(!withIcon)}
              className="px-3 py-1.5 rounded text-[11px] font-medium transition-all"
              style={{
                backgroundColor: withIcon ? dark ? "rgba(115,255,178,0.12)" : "#edf7f1" : dark ? "#1a2820" : "#f0f0f0",
                color: withIcon ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.55)" : "#4a4a4a",
                border: `1px solid ${withIcon ? dark ? "rgba(115,255,178,0.3)" : "#a3d9bc" : "transparent"}`,
                fontFamily: "Inter",
              }}
            >
              {withIcon ? "With Icon ✓" : "No Icon"}
            </button>
          </div>
        </div>

        {/* Button Display */}
        <div
          className="flex items-center justify-center gap-4 rounded-xl flex-wrap"
          style={{ backgroundColor: previewBg, minHeight: "160px", border: `1px solid ${border}`, padding: "24px" }}
        >
          {/* Primary Button */}
          {activeVariant === "primary" && (
            <button
              disabled={activeState === "disabled"}
              style={{
                display: "inline-flex", alignItems: "center",
                gap: withIcon ? "8px" : 0,
                height: sz.height,
                paddingLeft: withIcon ? "16px" : sz.px,
                paddingRight: sz.px,
                backgroundColor: s.bg,
                color: s.text,
                fontSize: sz.fontSize,
                fontWeight: 500,
                fontFamily: "Noto Sans TC, sans-serif",
                borderRadius: "4px",
                border: "none",
                boxShadow: s.shadow === "none" ? "none" : s.shadow,
                outline: s.outline || "none",
                outlineOffset: s.outline ? "2px" : 0,
                cursor: activeState === "disabled" ? "not-allowed" : "pointer",
                letterSpacing: "0.01em",
                transition: "all 200ms ease",
                position: "relative",
              }}
            >
              {(activeState === "hover" || activeState === "focus") && (
                <span style={{ position: "absolute", inset: 0, borderRadius: "4px", backgroundColor: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
              )}
              {withIcon && <ArrowRight size={sz.iconSize} />}
              立即閱讀
            </button>
          )}

          {/* Outline Buttons — show pair as in Figma */}
          {activeVariant === "outline" && (
            <div className="flex flex-wrap gap-3 justify-center">
              {["本期目錄", "線上購買"].map((label) => (
                <button
                  key={label}
                  disabled={activeState === "disabled"}
                  style={{
                    display: "inline-flex", alignItems: "center",
                    gap: withIcon ? "8px" : 0,
                    height: sz.height,
                    paddingLeft: sz.px,
                    paddingRight: sz.px,
                    backgroundColor: s.bg,
                    color: s.text,
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "Noto Sans TC, sans-serif",
                    borderRadius: "4px",
                    border: s.border ?? "1px solid #217446",
                    boxShadow: "none",
                    outline: s.outline || "none",
                    outlineOffset: s.outline ? "2px" : 0,
                    cursor: activeState === "disabled" ? "not-allowed" : "pointer",
                    letterSpacing: "0.01em",
                    transition: "all 200ms ease",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* State explanation */}
        <div className="mt-3 px-3 py-2.5 rounded-lg" style={{ backgroundColor: dark ? "#1a2820" : "#f0fdf4", border: `1px solid ${dark ? "rgba(115,255,178,0.1)" : "#a3d9bc"}` }}>
          <p className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.6)" : "#217446", fontFamily: "Noto Sans TC, sans-serif" }}>
            {activeVariant === "primary" && activeState === "default"  && "Primary Default：使用 --mt-sys-color-primary 作為底色，帶品牌綠陰影"}
            {activeVariant === "primary" && activeState === "hover"    && "Primary Hover：container-color 切換至 primary-hover（#30 階），疊加 8% white state layer"}
            {activeVariant === "primary" && activeState === "focus"    && "Primary Focus：底色不變，疊加 12% white state layer + 3px focus ring"}
            {activeVariant === "primary" && activeState === "pressed"  && "Primary Pressed：切換至最深 primary-pressed（#20 階），陰影消失"}
            {activeVariant === "primary" && activeState === "disabled" && "Primary Disabled：底色改為 rgba(0,0,0,0.12)，文字透明度 38%"}
            {activeVariant === "primary" && activeState === "dark"     && "Primary Dark Theme：螢光綠 #73ffb2 底色 + 深底文字 + neon glow 陰影"}
            {activeVariant === "outline" && activeState === "default"  && "Outline Default（Figma 規格）：透明底 + 1px #217446 邊框 + 主綠文字，Semi Bold 600"}
            {activeVariant === "outline" && activeState === "hover"    && "Outline Hover：底色染上 6% 主綠 tint，邊框與文字色不變"}
            {activeVariant === "outline" && activeState === "focus"    && "Outline Focus：底色改為 8% 主綠 tint + 3px focus ring，邊框不變"}
            {activeVariant === "outline" && activeState === "pressed"  && "Outline Pressed：底色加深為 12% 主綠 tint，文字色深一階 #144529"}
            {activeVariant === "outline" && activeState === "disabled" && "Outline Disabled：邊框改為 rgba(0,0,0,0.12)，文字透明度 38%"}
            {activeVariant === "outline" && activeState === "dark"     && "Outline Dark Theme：透明底 + 螢光綠 #73ffb2 邊框與文字"}
          </p>
        </div>
      </div>

      {/* Right: live token inspector */}
      <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${border}` }}>
        <div className="px-4 py-3" style={{ backgroundColor: dark ? "#1a2820" : "#f0f0f0" }}>
          <p className="text-[11px] font-semibold" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "Inter" }}>
            Live Token Inspector
          </p>
          <p className="text-[10px] mt-0.5" style={{ color: dark ? "rgba(255,255,255,0.3)" : "#afafaf", fontFamily: "Inter" }}>
            <span style={{ color: dark ? "#73ffb2" : "#217446" }}>{activeVariant === "primary" ? "btn-primary" : "btn-outline"}</span>
            {" · "}{stateConfigs[activeState].label}
            {" · "}<span style={{ color: dark ? "#73ffb2" : "#217446" }}>{activeSize.toUpperCase()}</span>
          </p>
        </div>
        <div style={{ backgroundColor: dark ? "#0d1a13" : "#ffffff" }}>
          {liveTokens.map(({ label, value }, i) => (
            <div
              key={label}
              className="flex items-center justify-between px-4 py-2.5"
              style={{ borderBottom: i < liveTokens.length - 1 ? `1px solid ${border}` : "none" }}
            >
              <code className="text-[10px] font-mono" style={{ color: dark ? "rgba(255,255,255,0.45)" : "#717171" }}>
                …-{label}
              </code>
              <div className="flex items-center gap-1.5">
                <ColorDot color={value} />
                <code className="text-[10px] font-mono" style={{ color: dark ? "rgba(255,255,255,0.8)" : "#1d1b1b" }}>
                  {value.length > 22 ? value.slice(0, 22) + "…" : value}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   INHERITANCE DIAGRAM
═══════════════════════════════════════════════════════���═══ */
function InheritanceDiagram({ dark }: { dark: boolean }) {
  const bg = dark ? "#122019" : "#f8f8f6";
  const border = dark ? "rgba(255,255,255,0.08)" : "#e8e8e8";
  const arrowColor = dark ? "rgba(255,255,255,0.25)" : "#cccccc";

  const tiers = [
    {
      tier: "01",
      name: "Reference Tokens",
      zh: "原始參考值",
      prefix: "--mt-ref-",
      color: "#3ea97a",
      bg: dark ? "rgba(62,169,122,0.08)" : "#f0fdf4",
      borderColor: dark ? "rgba(62,169,122,0.25)" : "#a3d9bc",
      icon: <Zap size={14} />,
      items: ["--mt-ref-palette-primary40: #217446", "--mt-ref-typeface-brand: Noto Sans TC", "--mt-ref-spacing-24: 24px", "--mt-ref-shape-corner-sm: 4px"],
      desc: "硬編碼的原始值，不帶語意意涵。代表全系統可用的原子值集合，不直接在元件中使用。",
    },
    {
      tier: "02",
      name: "System Tokens",
      zh: "系統語義值",
      prefix: "--mt-sys-",
      color: "#3ca9e3",
      bg: dark ? "rgba(60,169,227,0.08)" : "#eff8ff",
      borderColor: dark ? "rgba(60,169,227,0.25)" : "#94d5f3",
      icon: <Layers size={14} />,
      items: ["--mt-sys-color-primary: var(--mt-ref-palette-primary40)", "--mt-sys-typescale-label-lg-font: var(--mt-ref-typeface-brand)", "--mt-sys-shape-corner-button: var(--mt-ref-shape-corner-sm)"],
      desc: "從 Reference 繼承，賦予語意角色（「主色」而非「#217446」）。主題切換只需在此層更換映射。",
    },
    {
      tier: "03",
      name: "Component Tokens",
      zh: "元件專屬值",
      prefix: "--mt-comp-btn-primary-",
      color: "#a78662",
      bg: dark ? "rgba(167,134,98,0.08)" : "#fdf8f3",
      borderColor: dark ? "rgba(167,134,98,0.25)" : "#e0d0b4",
      icon: <Box size={14} />,
      items: ["--mt-comp-btn-primary-container-color: var(--mt-sys-color-primary)", "--mt-comp-btn-primary-label-font: var(--mt-sys-typescale-label-lg-font)", "--mt-comp-btn-primary-container-shape: var(--mt-sys-shape-corner-button)"],
      desc: "從 System 繼承，專屬於 Primary Button 的每個 slot / state。工程師只需調整此層即可客製化特定元件。",
    },
  ];

  return (
    <div className="space-y-3">
      {tiers.map((t, i) => (
        <div key={t.tier}>
          <div className="rounded-xl p-5" style={{ backgroundColor: t.bg, border: `1px solid ${t.borderColor}` }}>
            <div className="flex items-start gap-4">
              <div>
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-1"
                  style={{ backgroundColor: t.color, color: "#fff" }}
                >
                  {t.icon}
                </div>
                <span
                  className="block text-[10px] font-bold text-center"
                  style={{ color: t.color, fontFamily: "Inter" }}
                >
                  {t.tier}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <span className="text-[14px] font-bold" style={{ color: t.color, fontFamily: "Inter" }}>{t.name}</span>
                  <span className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#717171", fontFamily: "Noto Sans TC" }}>{t.zh}</span>
                  <code className="text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)", color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "monospace" }}>prefix: {t.prefix}…</code>
                </div>
                <p className="text-[12px] mb-3" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "Noto Sans TC, sans-serif", lineHeight: 1.6 }}>{t.desc}</p>
                <div className="space-y-1">
                  {t.items.map((item) => (
                    <code key={item} className="block text-[11px] font-mono" style={{ color: dark ? "rgba(255,255,255,0.7)" : "#1d1b1b" }}>{item}</code>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {i < tiers.length - 1 && (
            <div className="flex justify-center my-1">
              <div className="flex flex-col items-center gap-0.5">
                <div className="w-[1px] h-4" style={{ backgroundColor: arrowColor }} />
                <div style={{ color: arrowColor, fontSize: "10px", fontFamily: "Inter" }}>繼承 ↓</div>
                <div className="w-[1px] h-4" style={{ backgroundColor: arrowColor }} />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NAMING RULE EXPLANATION
═══════════════════════════════════════════════════════════ */
function NamingRuleExplainer({ dark }: { dark: boolean }) {
  const bg = dark ? "#122019" : "#f8f8f6";
  const border = dark ? "rgba(255,255,255,0.08)" : "#e8e8e8";
  const textMain = dark ? "#ffffff" : "#1d1b1b";
  const textMuted = dark ? "rgba(255,255,255,0.5)" : "#717171";

  // Dissect: --mt-comp-btn-primary-hover-container-color
  const segments = [
    { part: "--mt",         color: "#afafaf", label: "Namespace",  desc: "品牌前綴，避免與第三方 CSS 變數衝突\n此設計系統統一使用 mt（Manager Today）" },
    { part: "-comp",        color: "#3ea97a", label: "Token Tier", desc: "Token 所屬層級\nref（原始）/ sys（語義）/ comp（元件）" },
    { part: "-btn-primary", color: "#3ca9e3", label: "Component",  desc: "元件識別碼，使用 kebab-case\nbtn-primary / btn-outline / card / badge…" },
    { part: "-hover",       color: "#a78662", label: "State",      desc: "元件狀態（選填）\nhover / focus / pressed / disabled / dark\n省略表示 default 狀態" },
    { part: "-container",   color: "#217446", label: "Slot",       desc: "元件內的部件（插槽）\ncontainer / label / icon / outline / state-layer" },
    { part: "-color",       color: "#73ffb2", label: "Property",   desc: "CSS 屬性類型\ncolor / size / weight / height / shape / opacity / elevation / font / tracking" },
  ];

  return (
    <div>
      {/* Naming pattern display */}
      <div className="rounded-xl p-5 mb-6" style={{ backgroundColor: bg, border: `1px solid ${border}` }}>
        <p className="text-[11px] font-semibold mb-3 tracking-widest uppercase" style={{ color: textMuted, fontFamily: "Inter" }}>
          完整 Token 名稱解析
        </p>
        {/* Token string */}
        <div className="flex flex-wrap items-center gap-0 mb-6 overflow-x-auto pb-2">
          {segments.map(({ part, color }) => (
            <code
              key={part}
              className="text-[15px] font-mono font-bold"
              style={{ color }}
            >
              {part}
            </code>
          ))}
        </div>

        {/* Segment breakdown */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {segments.map(({ part, color, label, desc }) => (
            <div key={part} className="rounded-lg p-3" style={{ backgroundColor: dark ? "rgba(255,255,255,0.03)" : "#ffffff", border: `1px solid ${border}` }}>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <span className="text-[10px] font-bold tracking-wider uppercase" style={{ color, fontFamily: "Inter" }}>{label}</span>
              </div>
              <code className="block text-[11px] font-mono mb-1.5" style={{ color }}>{part}</code>
              <p className="text-[11px] whitespace-pre-line" style={{ color: textMuted, fontFamily: "Noto Sans TC, sans-serif", lineHeight: 1.6 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Naming rules table */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Tiers */}
        <div className="rounded-xl p-5" style={{ backgroundColor: bg, border: `1px solid ${border}` }}>
          <p className="text-[12px] font-bold mb-3" style={{ color: textMain, fontFamily: "Inter" }}>Token 層級規則</p>
          {[
            { tier: "ref", prefix: "--mt-ref-", example: "--mt-ref-palette-primary40", rule: "只存硬編碼原始值，不引用其他 token" },
            { tier: "sys", prefix: "--mt-sys-", example: "--mt-sys-color-primary",     rule: "只能繼承 ref 層，不能直接寫硬值" },
            { tier: "comp",prefix: "--mt-comp-",example: "--mt-comp-btn-primary-container-color", rule: "只能繼承 sys 層，元件客製化入口" },
          ].map(({ tier, prefix, example, rule }) => (
            <div key={tier} className="mb-3 pb-3" style={{ borderBottom: `1px solid ${border}` }}>
              <div className="flex items-center gap-2 mb-1">
                <code className="text-[11px] font-mono font-bold" style={{ color: tier === "ref" ? "#3ea97a" : tier === "sys" ? "#3ca9e3" : "#a78662" }}>{prefix}…</code>
              </div>
              <p className="text-[11px]" style={{ color: textMuted, fontFamily: "Noto Sans TC, sans-serif", lineHeight: 1.5 }}>{rule}</p>
            </div>
          ))}
        </div>

        {/* State / Slot rules */}
        <div className="rounded-xl p-5" style={{ backgroundColor: bg, border: `1px solid ${border}` }}>
          <p className="text-[12px] font-bold mb-3" style={{ color: textMain, fontFamily: "Inter" }}>Slot × State 命名規則</p>
          {[
            { name: "省略 state",     example: "--mt-comp-btn-primary-container-color",         rule: "代表 default（預設）狀態" },
            { name: "state 在 slot 前",example: "--mt-comp-btn-primary-hover-container-color",  rule: "先寫狀態，再寫部件，最後寫屬性" },
            { name: "Slot 清單",      example: "container / label / icon / outline / state-layer", rule: "對應元件結構中的視覺部件" },
            { name: "Property 結尾",  example: "color / size / height / weight / font / shape", rule: "對應真實 CSS 屬性類型" },
          ].map(({ name, example, rule }) => (
            <div key={name} className="mb-3 pb-3" style={{ borderBottom: `1px solid ${border}` }}>
              <p className="text-[11px] font-semibold mb-1" style={{ color: textMain, fontFamily: "Inter" }}>{name}</p>
              <code className="block text-[10px] font-mono mb-1" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#217446" }}>{example}</code>
              <p className="text-[11px]" style={{ color: textMuted, fontFamily: "Noto Sans TC, sans-serif", lineHeight: 1.5 }}>{rule}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   CSS CODE SNIPPET
═══════════════════════════════════════════════════════════ */
function CodeSnippet({ dark }: { dark: boolean }) {
  const [copied, setCopied] = useState(false);
  const code = `:root {
  /* ── Tier 1: Reference ── */
  --mt-ref-palette-primary40: #217446;
  --mt-ref-palette-primary30: #144529;
  --mt-ref-palette-primary20: #0d2e1b;
  --mt-ref-palette-neutral100: #ffffff;
  --mt-ref-shape-corner-sm: 4px;
  --mt-ref-typeface-brand: 'Noto Sans TC', sans-serif;
  --mt-ref-state-hover-opacity: 0.08;
  --mt-ref-state-disabled-opacity: 0.38;

  /* ── Tier 2: System ── */
  --mt-sys-color-primary: var(--mt-ref-palette-primary40);
  --mt-sys-color-on-primary: var(--mt-ref-palette-neutral100);
  --mt-sys-color-primary-hover: var(--mt-ref-palette-primary30);
  --mt-sys-color-primary-pressed: var(--mt-ref-palette-primary20);
  --mt-sys-shape-corner-button: var(--mt-ref-shape-corner-sm);
  --mt-sys-typescale-label-lg-font: var(--mt-ref-typeface-brand);
  --mt-sys-typescale-label-lg-size: 15px;
  --mt-sys-typescale-label-lg-weight: 500;
  --mt-sys-state-hover-opacity: var(--mt-ref-state-hover-opacity);

  /* ── Tier 3: Component ── */
  --mt-comp-btn-primary-container-color:  var(--mt-sys-color-primary);
  --mt-comp-btn-primary-container-height: 40px;
  --mt-comp-btn-primary-container-shape:  var(--mt-sys-shape-corner-button);
  --mt-comp-btn-primary-label-color:      var(--mt-sys-color-on-primary);
  --mt-comp-btn-primary-label-font:       var(--mt-sys-typescale-label-lg-font);
  --mt-comp-btn-primary-label-size:       var(--mt-sys-typescale-label-lg-size);
  --mt-comp-btn-primary-label-weight:     var(--mt-sys-typescale-label-lg-weight);
  --mt-comp-btn-primary-leading-space:    24px;
  --mt-comp-btn-primary-trailing-space:   24px;

  /* States */
  --mt-comp-btn-primary-hover-container-color:     var(--mt-sys-color-primary-hover);
  --mt-comp-btn-primary-focus-outline-color:        var(--mt-sys-color-outline);
  --mt-comp-btn-primary-focus-outline-width:        3px;
  --mt-comp-btn-primary-pressed-container-color:   var(--mt-sys-color-primary-pressed);
  --mt-comp-btn-primary-disabled-container-color:  rgba(0, 0, 0, 0.12);

  /* ── Outline Button Tokens ── */
  --mt-comp-btn-outline-container-color:        transparent;
  --mt-comp-btn-outline-container-border-color: var(--mt-sys-color-primary);
  --mt-comp-btn-outline-container-border-width: 1px;
  --mt-comp-btn-outline-container-shape:        var(--mt-sys-shape-corner-button);
  --mt-comp-btn-outline-container-height:       40px;
  --mt-comp-btn-outline-label-color:            var(--mt-sys-color-primary);
  --mt-comp-btn-outline-label-font:             var(--mt-sys-typescale-label-lg-font);
  --mt-comp-btn-outline-label-size:             14px;
  --mt-comp-btn-outline-label-weight:           600;
  --mt-comp-btn-outline-leading-space:          24px;
  --mt-comp-btn-outline-trailing-space:         24px;
  --mt-comp-btn-outline-vertical-space:         8px;

  /* Outline States */
  --mt-comp-btn-outline-hover-container-color:          rgba(33, 116, 70, 0.06);
  --mt-comp-btn-outline-focus-container-color:          rgba(33, 116, 70, 0.08);
  --mt-comp-btn-outline-focus-outline-color:            var(--mt-sys-color-outline);
  --mt-comp-btn-outline-focus-outline-width:            3px;
  --mt-comp-btn-outline-pressed-container-color:        rgba(33, 116, 70, 0.12);
  --mt-comp-btn-outline-pressed-label-color:            var(--mt-sys-color-primary-hover);
  --mt-comp-btn-outline-disabled-container-border-color: rgba(0, 0, 0, 0.12);
}

/* ── Usage: Primary ── */
.btn-primary {
  background:    var(--mt-comp-btn-primary-container-color);
  color:         var(--mt-comp-btn-primary-label-color);
  height:        var(--mt-comp-btn-primary-container-height);
  border-radius: var(--mt-comp-btn-primary-container-shape);
  font-family:   var(--mt-comp-btn-primary-label-font);
  font-size:     var(--mt-comp-btn-primary-label-size);
  font-weight:   var(--mt-comp-btn-primary-label-weight);
  border:        none;
  padding: 0 var(--mt-comp-btn-primary-trailing-space)
             0 var(--mt-comp-btn-primary-leading-space);
}
.btn-primary:hover   { background: var(--mt-comp-btn-primary-hover-container-color); }
.btn-primary:disabled {
  background: var(--mt-comp-btn-primary-disabled-container-color);
  opacity:    var(--mt-comp-btn-primary-disabled-label-opacity);
}

/* ── Usage: Outline ── */
.btn-outline {
  background:    var(--mt-comp-btn-outline-container-color);
  color:         var(--mt-comp-btn-outline-label-color);
  height:        var(--mt-comp-btn-outline-container-height);
  border-radius: var(--mt-comp-btn-outline-container-shape);
  border:        var(--mt-comp-btn-outline-container-border-width)
                 solid
                 var(--mt-comp-btn-outline-container-border-color);
  font-family:   var(--mt-comp-btn-outline-label-font);
  font-size:     var(--mt-comp-btn-outline-label-size);
  font-weight:   var(--mt-comp-btn-outline-label-weight);
  padding: 0 var(--mt-comp-btn-outline-trailing-space)
             0 var(--mt-comp-btn-outline-leading-space);
}
.btn-outline:hover   { background: var(--mt-comp-btn-outline-hover-container-color); }
.btn-outline:focus   {
  background: var(--mt-comp-btn-outline-focus-container-color);
  outline: var(--mt-comp-btn-outline-focus-outline-width)
           solid
           var(--mt-comp-btn-outline-focus-outline-color);
}
.btn-outline:active  {
  background: var(--mt-comp-btn-outline-pressed-container-color);
  color:      var(--mt-comp-btn-outline-pressed-label-color);
}
.btn-outline:disabled {
  border-color: var(--mt-comp-btn-outline-disabled-container-border-color);
  opacity:      var(--mt-sys-state-disabled-opacity);
}`;

  const bg = dark ? "#0a1510" : "#1a1a1a";
  return (
    <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${dark ? "rgba(115,255,178,0.15)" : "#e8e8e8"}` }}>
      <div className="flex items-center justify-between px-4 py-2.5" style={{ backgroundColor: dark ? "#1a2820" : "#2a2a2a" }}>
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", fontFamily: "Inter" }}>primary-button.css</span>
        <button
          onClick={() => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
          className="flex items-center gap-1 px-2 py-1 rounded text-[11px] transition-all hover:opacity-80"
          style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", fontFamily: "Inter" }}
        >
          {copied ? <Check size={11} /> : <Copy size={11} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        className="p-5 overflow-x-auto text-[12px] leading-relaxed"
        style={{ backgroundColor: bg, margin: 0, fontFamily: "monospace" }}
      >
        {code.split("\n").map((line, i) => {
          let color = "rgba(255,255,255,0.65)";
          if (line.trim().startsWith("/*") || line.trim().startsWith("*") || line.trim().startsWith("//")) color = "rgba(115,255,178,0.5)";
          else if (line.includes("var(--mt-ref")) color = "#a3d9bc";
          else if (line.includes("var(--mt-sys")) color = "#94d5f3";
          else if (line.includes("var(--mt-comp")) color = "#e0d0b4";
          else if (line.trim().startsWith("--mt-ref")) color = "#a3d9bc";
          else if (line.trim().startsWith("--mt-sys")) color = "#94d5f3";
          else if (line.trim().startsWith("--mt-comp")) color = "#e0d0b4";
          else if (line.includes("#")) color = "#73ffb2";
          return (
            <span key={i} style={{ display: "block", color }}>
              {line || " "}
            </span>
          );
        })}
      </pre>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════════ */
export function PrimaryButtonTokens({ dark }: { dark: boolean }) {
  const [activeTab, setActiveTab] = useState<"naming" | "diagram" | "ref" | "sys" | "comp" | "preview" | "code">("naming");

  const border = dark ? "rgba(255,255,255,0.08)" : "#e8e8e8";
  const pageBg = dark ? "#0d1a13" : "#ffffff";
  const sectionBg = dark ? "#122019" : "#f8f8f6";

  const tabs = [
    { id: "naming",  label: "命名規則" },
    { id: "diagram", label: "繼承架構" },
    { id: "ref",     label: "Ref Tokens" },
    { id: "sys",     label: "Sys Tokens" },
    { id: "comp",    label: "Comp Tokens" },
    { id: "preview", label: "互動預覽" },
    { id: "code",    label: "CSS 輸出" },
  ] as const;

  return (
    <div style={{ backgroundColor: pageBg, minHeight: "100vh" }}>
      {/* Page header */}
      <div
        className="px-6 md:px-10 py-10 border-b"
        style={{
          background: dark
            ? "linear-gradient(135deg, #0d1a13 0%, #172a1f 100%)"
            : "linear-gradient(135deg, #edf7f1 0%, #ffffff 60%, #fdf8f3 100%)",
          borderColor: border,
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          <span
            className="inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-4 tracking-widest uppercase"
            style={{ backgroundColor: dark ? "rgba(115,255,178,0.1)" : "#edf7f1", color: dark ? "#73ffb2" : "#217446", border: `1px solid ${dark ? "rgba(115,255,178,0.25)" : "#a3d9bc"}` }}
          >
            Component Token System
          </span>
          <h1
            style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 800, color: dark ? "#ffffff" : "#1d1b1b", lineHeight: 1.25, fontFamily: "Noto Sans TC, sans-serif", marginBottom: "12px" }}
          >
            Primary + Outline Button —<br />
            <span style={{ color: dark ? "#73ffb2" : "#217446" }}>完整 Component Token 設計</span>
          </h1>
          <p style={{ fontSize: "14px", color: dark ? "rgba(255,255,255,0.55)" : "#717171", lineHeight: 1.7, maxWidth: "600px", fontFamily: "Noto Sans TC, sans-serif" }}>
            採用 Google Material Design 3 的三層繼承架構（Ref → Sys → Comp），
            涵蓋 Primary 實心與 Outline 框線（來自 Figma CtaBtn）兩種 Variant、
            5 種互動狀態、3 種尺寸，共 <strong style={{ color: dark ? "#73ffb2" : "#217446" }}>80+ tokens</strong>。
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              { label: "Ref Tokens",     count: Object.values(REF_TOKENS).flat().length,                                         color: "#3ea97a" },
              { label: "Sys Tokens",     count: Object.values(SYS_TOKENS).flat().length,                                         color: "#3ca9e3" },
              { label: "Primary Tokens", count: Object.values(COMP_TOKENS).flat().length,                                        color: "#a78662" },
              { label: "Outline Tokens", count: Object.values(OUTLINE_TOKENS).flat().length,                                     color: "#217446" },
              { label: "States",         count: 5,                                                                               color: "#73ffb2" },
            ].map(({ label, count, color }) => (
              <div key={label} className="px-4 py-2 rounded-lg flex items-center gap-2" style={{ backgroundColor: dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)", border: `1px solid ${border}` }}>
                <span style={{ fontSize: "20px", fontWeight: 800, color, fontFamily: "Fira Sans Condensed, Inter" }}>{count}</span>
                <span style={{ fontSize: "12px", color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "Inter" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="sticky z-30 px-6 md:px-10 border-b overflow-x-auto"
        style={{ top: 0, backgroundColor: dark ? "#0d1a13" : "#ffffff", borderColor: border }}
      >
        <div className="max-w-[1200px] mx-auto flex gap-1 py-2">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className="px-4 py-2 rounded-lg text-[12px] font-medium shrink-0 transition-all"
              style={{
                backgroundColor: activeTab === id ? dark ? "rgba(115,255,178,0.1)" : "#edf7f1" : "transparent",
                color: activeTab === id ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.5)" : "#717171",
                fontFamily: "Inter, sans-serif",
                borderBottom: activeTab === id ? `2px solid ${dark ? "#73ffb2" : "#217446"}` : "2px solid transparent",
                borderRadius: "6px 6px 0 0",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 py-8">
        <div className="max-w-[1200px] mx-auto">

          {activeTab === "naming" && (
            <div>
              <div className="mb-6 p-4 rounded-xl flex gap-3" style={{ backgroundColor: dark ? "rgba(115,255,178,0.06)" : "#edf7f1", border: `1px solid ${dark ? "rgba(115,255,178,0.2)" : "#a3d9bc"}` }}>
                <Info size={16} style={{ color: dark ? "#73ffb2" : "#217446", shrink: 0, marginTop: "2px" }} />
                <div>
                  <p className="text-[13px] font-semibold mb-1" style={{ color: dark ? "#73ffb2" : "#217446", fontFamily: "Noto Sans TC" }}>命名格式</p>
                  <p className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.6)" : "#4a4a4a", fontFamily: "Noto Sans TC", lineHeight: 1.7 }}>
                    所有 token 遵循固定語法：<code style={{ fontFamily: "monospace" }}>--{"{namespace}"}-{"{tier}"}-{"{component}"}-{"{state?}"}-{"{slot}"}-{"{property}"}</code><br />
                    省略中括號部分代表選填（state 省略等於 default 狀態）
                  </p>
                </div>
              </div>
              <NamingRuleExplainer dark={dark} />
            </div>
          )}

          {activeTab === "diagram" && <InheritanceDiagram dark={dark} />}

          {activeTab === "ref" && (
            <div>
              <div className="mb-5 p-4 rounded-xl flex gap-3" style={{ backgroundColor: dark ? "rgba(62,169,122,0.06)" : "#f0fdf4", border: `1px solid ${dark ? "rgba(62,169,122,0.25)" : "#a3d9bc"}` }}>
                <Zap size={15} style={{ color: "#3ea97a", marginTop: "2px" }} />
                <p className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.6)" : "#4a4a4a", fontFamily: "Noto Sans TC", lineHeight: 1.7 }}>
                  <strong>Reference Tokens</strong>（--mt-ref-…）只存硬編碼原始值，不帶語意意涵，也不直接引用其他 token。
                  是整個系統的「原子層」，設計師在此定義可用的值集合。
                </p>
              </div>
              <TokenTable title="調色盤 Palette" rows={REF_TOKENS.palette} dark={dark} tier="ref" />
              <TokenTable title="字型 Typeface" rows={REF_TOKENS.typeface} dark={dark} tier="ref" />
              <TokenTable title="間距 Spacing" rows={REF_TOKENS.spacing} dark={dark} tier="ref" />
              <TokenTable title="圓角 Shape" rows={REF_TOKENS.shape} dark={dark} tier="ref" />
              <TokenTable title="陰影 Elevation" rows={REF_TOKENS.elevation} dark={dark} tier="ref" />
              <TokenTable title="狀態透明度 State Opacity" rows={REF_TOKENS.state} dark={dark} tier="ref" />
            </div>
          )}

          {activeTab === "sys" && (
            <div>
              <div className="mb-5 p-4 rounded-xl flex gap-3" style={{ backgroundColor: dark ? "rgba(60,169,227,0.06)" : "#eff8ff", border: `1px solid ${dark ? "rgba(60,169,227,0.25)" : "#94d5f3"}` }}>
                <Layers size={15} style={{ color: "#3ca9e3", marginTop: "2px" }} />
                <p className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.6)" : "#4a4a4a", fontFamily: "Noto Sans TC", lineHeight: 1.7 }}>
                  <strong>System Tokens</strong>（--mt-sys-…）從 Reference 繼承，賦予語意角色（「主色」而非「#217446」）。
                  主題切換（淺色→深色、MT→八分生活）只需重新映射此層。
                </p>
              </div>
              <TokenTable title="色彩角色 Color Role" rows={SYS_TOKENS.color} dark={dark} tier="sys" />
              <TokenTable title="文字規格 Typescale" rows={SYS_TOKENS.typescale} dark={dark} tier="sys" />
              <TokenTable title="圓角 Shape" rows={SYS_TOKENS.shape} dark={dark} tier="sys" />
              <TokenTable title="陰影 Elevation" rows={SYS_TOKENS.elevation} dark={dark} tier="sys" />
              <TokenTable title="狀態疊加 State" rows={SYS_TOKENS.state} dark={dark} tier="sys" />
            </div>
          )}

          {activeTab === "comp" && (
            <div>
              {/* Primary section */}
              <div className="mb-5 p-4 rounded-xl flex gap-3" style={{ backgroundColor: dark ? "rgba(167,134,98,0.06)" : "#fdf8f3", border: `1px solid ${dark ? "rgba(167,134,98,0.25)" : "#e0d0b4"}` }}>
                <Box size={15} style={{ color: "#a78662", marginTop: "2px" }} />
                <p className="text-[12px]" style={{ color: dark ? "rgba(255,255,255,0.6)" : "#4a4a4a", fontFamily: "Noto Sans TC", lineHeight: 1.7 }}>
                  <strong>Component Tokens</strong>（--mt-comp-btn-…）從 System 繼承，為每個 slot / state 建立獨立入口。
                  以下涵蓋 <strong>Primary</strong>（實心）與 <strong>Outline</strong>（空心框線，來自 Figma 設計稿 CtaBtn）兩種 Variant。
                </p>
              </div>

              {/* ── Primary ── */}
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[#217446]" />
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "Inter" }}>
                  btn-primary — 實心按鈕
                </span>
              </div>
              <TokenTable title="容器 Container" rows={COMP_TOKENS.container} dark={dark} tier="comp" />
              <TokenTable title="標籤文字 Label" rows={COMP_TOKENS.label} dark={dark} tier="comp" />
              <TokenTable title="圖示 Icon" rows={COMP_TOKENS.icon} dark={dark} tier="comp" />
              <TokenTable title="間距 Spacing" rows={COMP_TOKENS.spacing} dark={dark} tier="comp" />
              <TokenTable title="尺寸變體 Size" rows={COMP_TOKENS.size} dark={dark} tier="comp" />
              <TokenTable title="Hover 狀態" rows={COMP_TOKENS.stateHover} dark={dark} tier="comp" />
              <TokenTable title="Focus 狀態" rows={COMP_TOKENS.stateFocus} dark={dark} tier="comp" />
              <TokenTable title="Pressed 狀態" rows={COMP_TOKENS.statePressed} dark={dark} tier="comp" />
              <TokenTable title="Disabled 狀態" rows={COMP_TOKENS.stateDisabled} dark={dark} tier="comp" />
              <TokenTable title="Dark Theme 深色主題" rows={COMP_TOKENS.dark} dark={dark} tier="comp" />

              {/* ── Outline ── */}
              <div className="mt-8 mb-2 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full border-2 border-[#217446]" />
                <span className="text-[11px] font-bold tracking-widest uppercase" style={{ color: dark ? "rgba(255,255,255,0.5)" : "#717171", fontFamily: "Inter" }}>
                  btn-outline — 空心框線按鈕（Figma CtaBtn）
                </span>
              </div>
              <div className="mb-4 p-3 rounded-lg flex items-start gap-2" style={{ backgroundColor: dark ? "rgba(33,116,70,0.06)" : "#f0fdf4", border: `1px solid ${dark ? "rgba(115,255,178,0.15)" : "#a3d9bc"}` }}>
                <Info size={13} style={{ color: "#217446", marginTop: "2px", flexShrink: 0 }} />
                <p className="text-[11px]" style={{ color: dark ? "rgba(255,255,255,0.55)" : "#4a4a4a", fontFamily: "Noto Sans TC", lineHeight: 1.7 }}>
                  Outline 與 Primary 共享全部 Ref / Sys Tokens，僅在 Comp 層差異：
                  底色透明、邊框使用 <code style={{ fontFamily: "monospace" }}>--mt-sys-color-primary</code>、
                  文字色同樣為主色、字重升為 600（Semi Bold）、hover / pressed 以主色 tint 染底而非深底色。
                </p>
              </div>
              <TokenTable title="容器 Container + 邊框" rows={OUTLINE_TOKENS.container} dark={dark} tier="comp" />
              <TokenTable title="標籤文字 Label" rows={OUTLINE_TOKENS.label} dark={dark} tier="comp" />
              <TokenTable title="間距 Spacing" rows={OUTLINE_TOKENS.spacing} dark={dark} tier="comp" />
              <TokenTable title="Hover 狀態" rows={OUTLINE_TOKENS.stateHover} dark={dark} tier="comp" />
              <TokenTable title="Focus 狀態" rows={OUTLINE_TOKENS.stateFocus} dark={dark} tier="comp" />
              <TokenTable title="Pressed 狀態" rows={OUTLINE_TOKENS.statePressed} dark={dark} tier="comp" />
              <TokenTable title="Disabled 狀態" rows={OUTLINE_TOKENS.stateDisabled} dark={dark} tier="comp" />
            </div>
          )}

          {activeTab === "preview" && <InteractivePreview dark={dark} />}

          {activeTab === "code" && <CodeSnippet dark={dark} />}
        </div>
      </div>
    </div>
  );
}
