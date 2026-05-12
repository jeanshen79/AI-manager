import React from "react";

interface TypographyRowProps {
  label: string;
  size: string;
  weight: string;
  family: string;
  sample: string;
  token: string;
  dark?: boolean;
}

function TypographyRow({ label, size, weight, family, sample, token, dark }: TypographyRowProps) {
  return (
    <div
      className={`flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6 py-4 border-b ${
        dark ? "border-[rgba(115,255,178,0.1)]" : "border-[#e8e8e8]"
      }`}
    >
      <div className="min-w-[140px] shrink-0">
        <span
          className="inline-block px-2 py-0.5 rounded text-[10px] font-mono"
          style={{
            backgroundColor: dark ? "rgba(115,255,178,0.1)" : "#edf7f1",
            color: dark ? "#73ffb2" : "#217446",
          }}
        >
          {token}
        </span>
        <p className={`text-[11px] mt-1 ${dark ? "text-[rgba(255,255,255,0.4)]" : "text-[#afafaf]"}`} style={{ fontFamily: "Inter" }}>
          {size} · {weight} · {family}
        </p>
      </div>
      <p
        className={dark ? "text-white" : "text-[#1d1b1b]"}
        style={{ fontSize: size, fontWeight: weight, fontFamily: family, lineHeight: 1.3 }}
      >
        {sample}
      </p>
    </div>
  );
}

export function TypographyShowcase({ dark }: { dark?: boolean }) {
  const scales = [
    { label: "Display / H1", size: "32px", weight: "700", family: "Noto Sans TC", sample: "管理者必懂的五大決策框架", token: "--text-5xl" },
    { label: "H2 Section", size: "28px", weight: "600", family: "Noto Sans TC", sample: "2026 管理趨勢深度報告", token: "--text-4xl" },
    { label: "H3 Sub-section", size: "24px", weight: "600", family: "Noto Sans TC", sample: "高績效團隊的秘密", token: "--text-3xl" },
    { label: "H4 Card Title", size: "20px", weight: "500", family: "Noto Sans TC", sample: "職場溝通的關鍵技巧", token: "--text-xl" },
    { label: "Body Large", size: "17px", weight: "400", family: "Noto Sans TC", sample: "遠距工作時代的領導力：如何帶領看不見的團隊，建立高效能的協作文化。", token: "--text-md" },
    { label: "Body Base", size: "16px", weight: "400", family: "Noto Sans TC", sample: "數位轉型的第一步從流程自動化開始，逐步建立企業的 AI 應用基礎。", token: "--text-base" },
    { label: "Body Small", size: "13px", weight: "400", family: "Noto Sans TC", sample: "閱讀時間 5 分鐘 · 2026年05月12日 · 商業管理", token: "--text-sm" },
    { label: "Ranking / Numeric", size: "28px", weight: "700", family: "Fira Sans Condensed", sample: "01  02  03  04  05", token: "numeric italic" },
    { label: "Category Tag", size: "13px", weight: "600", family: "Noto Sans TC", sample: "商業  領導  管理  成功  學習資源", token: "--text-sm semibold" },
  ];

  return (
    <div>
      {/* Font families */}
      <div className={`grid md:grid-cols-3 gap-4 mb-8 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
        {[
          { name: "Noto Sans TC", role: "主字型 — 繁體中文內文", sample: "高績效領導管理" },
          { name: "Inter", role: "拉丁字型 — 英文 / 數字", sample: "Management 2026" },
          { name: "Fira Sans Condensed", role: "排名數字 — Italic Bold", sample: "01 02 03" },
        ].map((f) => (
          <div key={f.name} className={`p-4 rounded-lg ${dark ? "bg-[#122019]" : "bg-white"}`} style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
            <p className={`text-[11px] mb-1 ${dark ? "text-[rgba(255,255,255,0.5)]" : "text-[#afafaf]"}`} style={{ fontFamily: "Inter" }}>{f.role}</p>
            <p className={`mb-2 text-[11px] font-mono ${dark ? "text-[#73ffb2]" : "text-[#217446]"}`}>{f.name}</p>
            <p style={{ fontFamily: f.name, fontSize: "24px", fontWeight: f.name === "Fira Sans Condensed" ? 700 : 500, fontStyle: f.name === "Fira Sans Condensed" ? "italic" : "normal" }} className={dark ? "text-white" : "text-[#1d1b1b]"}>
              {f.sample}
            </p>
          </div>
        ))}
      </div>

      {/* Scale */}
      <div>
        {scales.map((s) => (
          <TypographyRow key={s.token + s.label} {...s} dark={dark} />
        ))}
      </div>
    </div>
  );
}
