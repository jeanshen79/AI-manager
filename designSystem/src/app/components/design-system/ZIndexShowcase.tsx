import React from "react";

const zTokens = [
  { token: "--z-below", value: "-1", label: "Below — 背景層" },
  { token: "--z-base", value: "0", label: "Base — 基礎" },
  { token: "--z-raised", value: "10", label: "Raised — 浮起元件" },
  { token: "--z-dropdown", value: "100", label: "Dropdown — 下拉選單" },
  { token: "--z-sticky", value: "200", label: "Sticky — 固定導覽" },
  { token: "--z-overlay", value: "300", label: "Overlay — 遮罩" },
  { token: "--z-modal", value: "400", label: "Modal — 彈窗" },
  { token: "--z-popover", value: "500", label: "Popover — 浮動提示" },
  { token: "--z-toast", value: "600", label: "Toast — 通知訊息" },
  { token: "--z-tooltip", value: "700", label: "Tooltip — 工具提示" },
];

const breakpoints = [
  { label: "Mobile", value: "375px", token: "--breakpoint-mobile", desc: "行動裝置首要" },
  { label: "Tablet", value: "768px", token: "--breakpoint-tablet", desc: "平板斷點" },
  { label: "Desktop", value: "1024px", token: "--breakpoint-desktop", desc: "桌機斷點" },
  { label: "Wide", value: "1280px", token: "--breakpoint-wide", desc: "寬螢幕" },
  { label: "Full", value: "1440px", token: "--breakpoint-full", desc: "全寬" },
];

export function ZIndexShowcase({ dark }: { dark?: boolean }) {
  const tokenColor = dark ? "text-[#73ffb2]" : "text-[#217446]";
  const labelColor = dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#717171]";
  const border = dark ? "border-[rgba(115,255,178,0.1)]" : "border-[#e8e8e8]";
  const textMain = dark ? "text-white" : "text-[#1d1b1b]";
  const bg = dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]";
  const barBg = dark ? "bg-[rgba(115,255,178,0.15)]" : "bg-[#e8f5ee]";
  const barFill = dark ? "bg-[#73ffb2]" : "bg-[#217446]";

  return (
    <div className="space-y-12">
      {/* Z-Index */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${textMain}`} style={{ fontFamily: "Inter" }}>Z-Index Stack</p>
        <div className="space-y-2">
          {zTokens.map(({ token, value, label }, i) => {
            const maxVal = 700;
            const pct = Math.max((parseInt(value) / maxVal) * 100, 2);
            return (
              <div key={token} className={`flex items-center gap-4 py-2 border-b ${border}`}>
                <div className="w-[190px] shrink-0">
                  <span className={`text-[10px] font-mono ${tokenColor}`}>{token}</span>
                  <p className={`text-[11px] mt-0.5 ${labelColor}`} style={{ fontFamily: "Inter" }}>{label}</p>
                </div>
                <div className={`flex-1 h-[18px] rounded-full ${barBg} overflow-hidden`}>
                  <div
                    className={`h-full rounded-full ${barFill}`}
                    style={{ width: `${pct}%`, opacity: 0.6 + (i / zTokens.length) * 0.4 }}
                  />
                </div>
                <span className={`text-[12px] font-mono w-10 text-right shrink-0 ${labelColor}`}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Breakpoints */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${textMain}`} style={{ fontFamily: "Inter" }}>Breakpoints & Layout</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {breakpoints.map(({ label, value, token, desc }) => {
            const width = parseInt(value);
            const maxWidth = 1440;
            const pct = (width / maxWidth) * 100;
            return (
              <div key={token} className={`p-4 rounded-lg ${bg}`}>
                <p className={`text-[13px] font-semibold mb-1 ${textMain}`} style={{ fontFamily: "Inter" }}>{label}</p>
                <p className={`text-[11px] mb-3 ${labelColor}`} style={{ fontFamily: "Inter" }}>{desc}</p>
                <div className={`h-[6px] rounded-full ${barBg} mb-2`}>
                  <div className={`h-full rounded-full ${barFill}`} style={{ width: `${pct}%` }} />
                </div>
                <span className={`text-[12px] font-mono ${tokenColor}`}>{value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transition Tokens */}
      <div>
        <p className={`text-[13px] font-semibold mb-4 ${textMain}`} style={{ fontFamily: "Inter" }}>Transition Tokens</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { token: "--transition-fast", value: "150ms ease", label: "Fast — 按鈕 Hover" },
            { token: "--transition-base", value: "250ms ease", label: "Base — 一般過場" },
            { token: "--transition-slow", value: "400ms ease", label: "Slow — 卡片展開" },
          ].map(({ token, value, label }) => (
            <div key={token} className={`p-4 rounded-lg ${bg}`}>
              <p className={`text-[11px] font-mono mb-1 ${tokenColor}`}>{token}</p>
              <p className={`text-[13px] font-semibold mb-1 ${textMain}`} style={{ fontFamily: "Inter" }}>{value}</p>
              <p className={`text-[11px] ${labelColor}`} style={{ fontFamily: "Inter" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
