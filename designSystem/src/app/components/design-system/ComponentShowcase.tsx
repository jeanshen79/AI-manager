import React, { useState } from "react";
import { ChevronDown, Search, ArrowRight, Clock, Bookmark, Share2, Eye, Star, TrendingUp } from "lucide-react";

/* ─────────────────────────────────────────────
   SectionHeader Component
───────────────────────────────────────────── */
interface SectionHeaderProps {
  label?: string;
  title: string;
  cta?: string;
  dark?: boolean;
  brand?: "mt" | "8m";
}

export function SectionHeader({ label, title, cta = "看更多", dark, brand = "mt" }: SectionHeaderProps) {
  const accentColor = dark ? "#73ffb2" : brand === "mt" ? "#217446" : "#a78662";
  const titleColor = dark ? "#ffffff" : "#1d1b1b";
  const ctaColor = dark ? "#73ffb2" : brand === "mt" ? "#217446" : "#a78662";
  const borderColor = dark ? "rgba(115,255,178,0.2)" : brand === "mt" ? "#217446" : "#a78662";

  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        {label && (
          <span
            className="block text-[11px] font-semibold mb-1 tracking-widest uppercase"
            style={{ color: accentColor, fontFamily: "Inter" }}
          >
            {label}
          </span>
        )}
        <div className="flex items-center gap-2">
          <div
            className="w-[3px] h-[22px] rounded-full shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          <h3 style={{ color: titleColor, fontSize: "20px", fontWeight: 700, lineHeight: 1.3, fontFamily: "Noto Sans TC, sans-serif" }}>
            {title}
          </h3>
        </div>
      </div>
      <button
        className="flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
        style={{ color: ctaColor, fontFamily: "Noto Sans TC, sans-serif" }}
      >
        {cta}
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ArticleListItem Component
───────────────────────────────────────────── */
interface ArticleListItemProps {
  rank?: number | "PR";
  title: string;
  category?: string;
  readTime?: string;
  imageUrl?: string;
  dark?: boolean;
  brand?: "mt" | "8m";
  variant?: "rank" | "thumb" | "minimal";
}

export function ArticleListItem({ rank, title, category, readTime, imageUrl, dark, brand = "mt", variant = "rank" }: ArticleListItemProps) {
  const borderColor = dark ? "rgba(115,255,178,0.08)" : "#e8e8e8";
  const titleColor = dark ? "#ffffff" : "#1d1b1b";
  const metaColor = dark ? "rgba(255,255,255,0.45)" : "#afafaf";
  const rankColor = brand === "mt" ? "#217446" : "#a78662";
  const accentColor = dark ? "#73ffb2" : brand === "mt" ? "#217446" : "#a78662";

  return (
    <div
      className="flex items-center gap-3 py-3 cursor-pointer group transition-colors"
      style={{ borderBottom: `1px solid ${borderColor}` }}
    >
      {variant === "rank" && rank !== undefined && (
        <span
          className="shrink-0 w-8 text-center"
          style={{
            fontFamily: "Fira Sans Condensed, Inter",
            fontSize: typeof rank === "number" ? "26px" : "13px",
            fontWeight: 700,
            fontStyle: typeof rank === "number" ? "italic" : "normal",
            color: typeof rank === "number" ? rankColor : "#afafaf",
            lineHeight: 1,
          }}
        >
          {rank}
        </span>
      )}
      {variant === "thumb" && imageUrl && (
        <div className="shrink-0 w-[72px] h-[72px] rounded overflow-hidden bg-[#e8e8e8]">
          <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      <p
        className="flex-1 min-w-0 group-hover:opacity-80 transition-opacity"
        style={{ fontFamily: "Noto Sans TC, sans-serif", fontSize: "17px", fontWeight: 400, color: titleColor, lineHeight: 1.4 }}
      >
        {title}
      </p>
      {(category || readTime) && (
        <div className="shrink-0 text-right hidden sm:block">
          {category && (
            <span
              className="block text-[11px] font-semibold"
              style={{ color: accentColor, fontFamily: "Noto Sans TC" }}
            >
              {category}
            </span>
          )}
          {readTime && (
            <span className="flex items-center gap-1 text-[11px] justify-end" style={{ color: metaColor, fontFamily: "Inter" }}>
              <Clock size={10} />
              {readTime}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Button Component
───────────────────────────────────────────── */
type ButtonVariant = "primary" | "outline" | "ghost" | "dark" | "8m-brown" | "8m-blue" | "neon";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  dark?: boolean;
  onClick?: () => void;
}

export function Button({ variant = "primary", size = "md", children, icon, iconPosition = "right", disabled, onClick }: ButtonProps) {
  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    borderRadius: "4px",
    fontFamily: "Noto Sans TC, sans-serif",
    fontWeight: 500,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "all 200ms ease",
    border: "1px solid transparent",
    outline: "none",
    whiteSpace: "nowrap",
  };

  const sizes: Record<ButtonSize, React.CSSProperties> = {
    sm:  { fontSize: "13px", padding: "6px 14px" },
    md:  { fontSize: "15px", padding: "8px 20px" },
    lg:  { fontSize: "16px", padding: "11px 28px" },
  };

  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary:  { backgroundColor: "#217446", color: "#ffffff", borderColor: "#217446" },
    outline:  { backgroundColor: "transparent", color: "#217446", borderColor: "#217446" },
    ghost:    { backgroundColor: "transparent", color: "#217446", borderColor: "transparent" },
    dark:     { backgroundColor: "#1a2820", color: "#73ffb2", borderColor: "rgba(115,255,178,0.3)" },
    "8m-brown":{ backgroundColor: "#a78662", color: "#ffffff", borderColor: "#a78662" },
    "8m-blue": { backgroundColor: "#3ca9e3", color: "#ffffff", borderColor: "#3ca9e3" },
    neon:     { backgroundColor: "#73ffb2", color: "#0d1a13", borderColor: "#73ffb2" },
  };

  return (
    <button
      style={{ ...baseStyle, ...sizes[size], ...variants[variant] }}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Card Component (Article Card)
───────────────────────────────────────────── */
interface CardProps {
  imageUrl?: string;
  category?: string;
  title: string;
  excerpt?: string;
  readTime?: string;
  date?: string;
  dark?: boolean;
  brand?: "mt" | "8m";
  variant?: "default" | "featured" | "compact";
}

export function Card({ imageUrl, category, title, excerpt, readTime, date, dark, brand = "mt", variant = "default" }: CardProps) {
  const bg = dark ? "#1a2820" : "#ffffff";
  const titleColor = dark ? "#ffffff" : "#1d1b1b";
  const excerptColor = dark ? "rgba(255,255,255,0.6)" : "#717171";
  const metaColor = dark ? "rgba(255,255,255,0.4)" : "#afafaf";
  const accentColor = dark ? "#73ffb2" : brand === "mt" ? "#217446" : "#a78662";
  const tagBg = dark ? "rgba(115,255,178,0.1)" : brand === "mt" ? "#edf7f1" : "#f9f5ef";

  if (variant === "compact") {
    return (
      <div
        className="flex gap-3 p-3 rounded-lg cursor-pointer group transition-all"
        style={{ backgroundColor: bg, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
      >
        {imageUrl && (
          <div className="shrink-0 w-[80px] h-[80px] rounded overflow-hidden bg-[#e8e8e8]">
            <img src={imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
          {category && (
            <span className="text-[11px] font-semibold" style={{ color: accentColor, fontFamily: "Noto Sans TC" }}>{category}</span>
          )}
          <p
            className="line-clamp-2"
            style={{ fontSize: "15px", fontWeight: 500, color: titleColor, lineHeight: 1.4, fontFamily: "Noto Sans TC" }}
          >
            {title}
          </p>
          <span className="text-[11px] flex items-center gap-1" style={{ color: metaColor, fontFamily: "Inter" }}>
            {readTime && <><Clock size={10} />{readTime}</>}
          </span>
        </div>
      </div>
    );
  }

  if (variant === "featured") {
    return (
      <div
        className="relative rounded-xl overflow-hidden cursor-pointer group"
        style={{ minHeight: "280px", backgroundColor: dark ? "#122019" : "#1d1b1b", boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-300"
          />
        )}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(13,26,19,0.95) 0%, rgba(13,26,19,0.4) 60%, transparent 100%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          {category && (
            <span
              className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold mb-2"
              style={{ backgroundColor: "rgba(115,255,178,0.15)", color: "#73ffb2" }}
            >
              {category}
            </span>
          )}
          <p style={{ fontSize: "18px", fontWeight: 600, color: "#ffffff", lineHeight: 1.4, fontFamily: "Noto Sans TC" }}>
            {title}
          </p>
          {readTime && (
            <span className="flex items-center gap-1 mt-2 text-[12px]" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "Inter" }}>
              <Clock size={11} />{readTime}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg overflow-hidden cursor-pointer group transition-all hover:-translate-y-0.5"
      style={{ backgroundColor: bg, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
    >
      {imageUrl && (
        <div className="w-full h-[160px] overflow-hidden bg-[#e8e8e8]">
          <img src={imageUrl} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-4">
        {category && (
          <span
            className="inline-block px-2 py-0.5 rounded-full text-[11px] font-semibold mb-2"
            style={{ backgroundColor: tagBg, color: accentColor }}
          >
            {category}
          </span>
        )}
        <p
          className="mb-2 line-clamp-2"
          style={{ fontSize: "16px", fontWeight: 600, color: titleColor, lineHeight: 1.4, fontFamily: "Noto Sans TC" }}
        >
          {title}
        </p>
        {excerpt && (
          <p
            className="mb-3 line-clamp-2 text-sm"
            style={{ color: excerptColor, lineHeight: 1.5, fontFamily: "Noto Sans TC" }}
          >
            {excerpt}
          </p>
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {readTime && (
              <span className="flex items-center gap-1 text-[11px]" style={{ color: metaColor, fontFamily: "Inter" }}>
                <Clock size={10} />{readTime}
              </span>
            )}
            {date && (
              <span className="text-[11px]" style={{ color: metaColor, fontFamily: "Inter" }}>{date}</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button className="transition-colors hover:opacity-70" style={{ color: metaColor }}>
              <Bookmark size={14} />
            </button>
            <button className="transition-colors hover:opacity-70" style={{ color: metaColor }}>
              <Share2 size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Badge / Tag Component
───────────────────────────────────────────── */
type BadgeVariant = "mt" | "8m-brown" | "8m-blue" | "dark" | "neutral" | "pr";

export function Badge({ children, variant = "mt" }: { children: React.ReactNode; variant?: BadgeVariant }) {
  const styles: Record<BadgeVariant, React.CSSProperties> = {
    mt:       { backgroundColor: "#edf7f1", color: "#217446", border: "1px solid #a3d9bc" },
    "8m-brown": { backgroundColor: "#f9f5ef", color: "#a78662", border: "1px solid #e0d0b4" },
    "8m-blue":  { backgroundColor: "#eaf6fd", color: "#3ca9e3", border: "1px solid #94d5f3" },
    dark:     { backgroundColor: "rgba(115,255,178,0.1)", color: "#73ffb2", border: "1px solid rgba(115,255,178,0.3)" },
    neutral:  { backgroundColor: "#f5f5f5", color: "#717171", border: "1px solid #e8e8e8" },
    pr:       { backgroundColor: "transparent", color: "#afafaf", border: "1px solid #e8e8e8" },
  };

  return (
    <span
      style={{
        ...styles[variant],
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 10px",
        borderRadius: "9999px",
        fontSize: "11px",
        fontWeight: 600,
        fontFamily: "Noto Sans TC, sans-serif",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────────────────────────
   RankingTab Component (for Hot Articles)
───────────────────────────────────────────── */
export function RankingTabs({ dark }: { dark?: boolean }) {
  const [activeTab, setActiveTab] = useState<"mt" | "8m">("mt");

  const articles = {
    mt: [
      "為什麼優秀的主管都懂得「不管」？放手管理的藝術",
      "高效能人士的七個習慣，你做到了幾個？",
      "高績效團隊的秘密：從 Google 的管理實驗談起",
      "數位轉型的第一步：從流程自動化開始",
      "職場溝通的五大關鍵技巧",
    ],
    "8m": [
      "每日 10 分鐘冥想，改變你的大腦結構",
      "從 Pomodoro 到 GTD，找到最適合你的時間管理法",
      "斷捨離不只是整理，更是一種人生哲學",
      "建立晨間儀式，讓每天都有好的開始",
      "如何在忙碌中保持身心平衡",
    ],
  };

  const bg = dark ? "#122019" : "#ffffff";
  const borderColor = dark ? "rgba(115,255,178,0.15)" : "#e8e8e8";

  return (
    <div className="rounded-lg overflow-hidden" style={{ backgroundColor: bg, boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}>
      {/* Tabs */}
      <div className="flex">
        <button
          className="flex-1 py-2.5 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: activeTab === "mt" ? "#217446" : dark ? "#1a2820" : "#e8dccf",
            color: activeTab === "mt" ? "#ffffff" : dark ? "rgba(255,255,255,0.5)" : "#a78662",
            fontFamily: "Noto Sans TC",
          }}
          onClick={() => setActiveTab("mt")}
        >
          經理人熱門
        </button>
        <button
          className="flex-1 py-2.5 text-sm font-semibold transition-colors"
          style={{
            backgroundColor: activeTab === "8m" ? "#a78662" : dark ? "#1a2820" : "#e8dccf",
            color: activeTab === "8m" ? "#ffffff" : dark ? "rgba(255,255,255,0.5)" : "#717171",
            fontFamily: "Noto Sans TC",
          }}
          onClick={() => setActiveTab("8m")}
        >
          八分生活熱門
        </button>
      </div>
      {/* List */}
      <div className="px-4">
        {articles[activeTab].map((title, i) => (
          <ArticleListItem
            key={i}
            rank={i + 1}
            title={title}
            dark={dark}
            brand={activeTab === "mt" ? "mt" : "8m"}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   CategoryNav Component
───────────────────────────────────────────── */
export function CategoryNav({ dark }: { dark?: boolean }) {
  const [active, setActive] = useState("商業");
  const categories = ["商業", "領導", "管理", "成功", "學習資源", "深度專題"];

  const bg = dark ? "#1a2820" : "#f0f0f0";
  const activeBg = dark ? "#217446" : "#217446";
  const activeText = "#ffffff";
  const inactiveText = dark ? "rgba(255,255,255,0.65)" : "#1d1b1b";

  return (
    <div
      className="flex items-center gap-1 px-3 py-2 overflow-x-auto"
      style={{ backgroundColor: bg }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full shrink-0 transition-all text-sm font-semibold"
          style={{
            backgroundColor: active === cat ? activeBg : "transparent",
            color: active === cat ? activeText : inactiveText,
            fontFamily: "Noto Sans TC, sans-serif",
          }}
        >
          {cat}
          {active !== cat && <ChevronDown size={14} />}
        </button>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SearchBar Component
───────────────────────────────────────────── */
export function SearchBar({ dark }: { dark?: boolean }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-full"
      style={{
        backgroundColor: dark ? "#1a2820" : "#f5f5f5",
        border: dark ? "1px solid rgba(115,255,178,0.2)" : "1px solid #e8e8e8",
      }}
    >
      <Search size={16} style={{ color: dark ? "rgba(255,255,255,0.4)" : "#afafaf" }} />
      <input
        type="text"
        placeholder="搜尋文章、主題..."
        className="flex-1 bg-transparent outline-none border-none text-sm"
        style={{
          color: dark ? "rgba(255,255,255,0.8)" : "#1d1b1b",
          fontFamily: "Noto Sans TC, sans-serif",
        }}
        readOnly
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   DarkFeatureBlock — Deep Topic Section
───────────────────────────────────────────── */
export function DarkFeatureBlock() {
  return (
    <div
      className="relative rounded-xl overflow-hidden p-6"
      style={{ backgroundColor: "#0d1a13", border: "1px solid rgba(115,255,178,0.15)" }}
    >
      {/* Glowing accent */}
      <div
        className="absolute top-0 right-0 w-[200px] h-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(115,255,178,0.1) 0%, transparent 70%)" }}
      />
      <span
        className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-3 tracking-widest uppercase"
        style={{ backgroundColor: "rgba(115,255,178,0.1)", color: "#73ffb2", border: "1px solid rgba(115,255,178,0.3)" }}
      >
        深度專題
      </span>
      <h3 style={{ fontSize: "22px", fontWeight: 700, color: "#ffffff", lineHeight: 1.35, fontFamily: "Noto Sans TC", marginBottom: "8px" }}>
        AI 重塑企業決策：<br />2026 管理革命報告
      </h3>
      <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontFamily: "Noto Sans TC", marginBottom: "20px" }}>
        從 ChatGPT 到 Codex，AI 工具正在徹底改變管理者的日常工作模式。本次深度專題帶你完整掌握趨勢。
      </p>
      <div className="flex items-center gap-4 mb-6">
        {[{ icon: <Eye size={13} />, text: "12,400 次閱讀" }, { icon: <Star size={13} />, text: "4.9 評分" }, { icon: <TrendingUp size={13} />, text: "本週熱門" }].map((item, i) => (
          <span key={i} className="flex items-center gap-1.5 text-[12px]" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Inter" }}>
            {item.icon}{item.text}
          </span>
        ))}
      </div>
      <button
        className="flex items-center gap-2 px-5 py-2.5 rounded font-semibold text-sm transition-all hover:brightness-110"
        style={{ backgroundColor: "#73ffb2", color: "#0d1a13", fontFamily: "Noto Sans TC" }}
      >
        立即閱讀
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
