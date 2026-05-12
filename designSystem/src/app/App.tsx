import React, { useState } from "react";
import { Sun, Moon, Copy, Check, ChevronRight, BookOpen, Palette, Type, SquareStack, Layers, ArrowRight, Grid3x3, MousePointerClick } from "lucide-react";
import { TokenSection } from "./components/design-system/TokenSection";
import { ColorPalette } from "./components/design-system/ColorPalette";
import { TypographyShowcase } from "./components/design-system/TypographyShowcase";
import { SpacingShowcase } from "./components/design-system/SpacingShowcase";
import { ZIndexShowcase } from "./components/design-system/ZIndexShowcase";
import { PrimaryButtonTokens } from "./components/design-system/PrimaryButtonTokens";
import {
  SectionHeader,
  ArticleListItem,
  Button,
  Card,
  Badge,
  RankingTabs,
  CategoryNav,
  SearchBar,
  DarkFeatureBlock,
} from "./components/design-system/ComponentShowcase";

/* ─────────────────────────────────────────────
   Nav Sections
───────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: "color", label: "顏色", icon: Palette },
  { id: "typography", label: "字型", icon: Type },
  { id: "spacing", label: "間距 / 圓角 / 陰影", icon: SquareStack },
  { id: "zindex", label: "Z-Index / 斷點", icon: Layers },
  { id: "components", label: "元件庫", icon: Grid3x3 },
  { id: "button-tokens", label: "Primary Button Tokens", icon: MousePointerClick },
];

/* ─────────────────────────────────────────────
   Sidebar
───────────────────────────────────────────── */
function Sidebar({
  active,
  setActive,
  dark,
  setDark,
}: {
  active: string;
  setActive: (id: string) => void;
  dark: boolean;
  setDark: (v: boolean) => void;
}) {
  const bg = dark ? "#0d1a13" : "#ffffff";
  const border = dark ? "rgba(115,255,178,0.12)" : "#e8e8e8";
  const logoGreen = "#217446";

  return (
    <aside
      className="sticky top-0 h-screen flex flex-col overflow-hidden shrink-0 w-[240px]"
      style={{ backgroundColor: bg, borderRight: `1px solid ${border}`, zIndex: 50 }}
    >
      {/* Logo Area */}
      <div
        className="px-5 py-5 border-b"
        style={{ borderColor: border }}
      >
        <div className="flex items-center gap-2 mb-1">
          <div className="w-[8px] h-[8px] rounded-full" style={{ backgroundColor: logoGreen }} />
          <span style={{ fontSize: "13px", fontWeight: 700, color: logoGreen, fontFamily: "Noto Sans TC, sans-serif" }}>
            經理人
          </span>
          <span style={{ fontSize: "11px", color: dark ? "rgba(255,255,255,0.3)" : "#afafaf", fontFamily: "Inter" }}>×</span>
          <span style={{ fontSize: "13px", fontWeight: 700, color: "#a78662", fontFamily: "Noto Sans TC, sans-serif" }}>
            八分生活
          </span>
        </div>
        <p style={{ fontSize: "11px", color: dark ? "rgba(255,255,255,0.35)" : "#afafaf", fontFamily: "Inter" }}>
          Design System v1.0
        </p>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        <p
          className="px-2 mb-3 text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: dark ? "rgba(255,255,255,0.3)" : "#afafaf", fontFamily: "Inter" }}
        >
          Design Tokens
        </p>
        {NAV_ITEMS.slice(0, 4).map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left transition-all"
              style={{
                backgroundColor: isActive
                  ? dark ? "rgba(115,255,178,0.1)" : "#edf7f1"
                  : "transparent",
                color: isActive
                  ? dark ? "#73ffb2" : "#217446"
                  : dark ? "rgba(255,255,255,0.65)" : "#4a4a4a",
              }}
            >
              <Icon size={15} />
              <span style={{ fontSize: "13px", fontWeight: isActive ? 600 : 400, fontFamily: "Noto Sans TC, sans-serif" }}>
                {label}
              </span>
              {isActive && <ChevronRight size={13} className="ml-auto" />}
            </button>
          );
        })}

        <p
          className="px-2 mb-3 mt-5 text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: dark ? "rgba(255,255,255,0.3)" : "#afafaf", fontFamily: "Inter" }}
        >
          Components
        </p>
        {NAV_ITEMS.slice(4).map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-left transition-all"
              style={{
                backgroundColor: isActive
                  ? dark ? "rgba(115,255,178,0.1)" : "#edf7f1"
                  : "transparent",
                color: isActive
                  ? dark ? "#73ffb2" : "#217446"
                  : dark ? "rgba(255,255,255,0.65)" : "#4a4a4a",
              }}
            >
              <Icon size={15} />
              <span style={{ fontSize: "13px", fontWeight: isActive ? 600 : 400, fontFamily: "Noto Sans TC, sans-serif" }}>
                {label}
              </span>
              {isActive && <ChevronRight size={13} className="ml-auto" />}
            </button>
          );
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="p-4 border-t" style={{ borderColor: border }}>
        <button
          onClick={() => setDark(!dark)}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all"
          style={{
            backgroundColor: dark ? "rgba(115,255,178,0.08)" : "#f5f5f5",
            color: dark ? "#73ffb2" : "#1d1b1b",
          }}
        >
          <span style={{ fontSize: "13px", fontWeight: 500, fontFamily: "Noto Sans TC, sans-serif" }}>
            {dark ? "深色模式" : "淺色模式"}
          </span>
          {dark ? <Moon size={15} /> : <Sun size={15} />}
        </button>
      </div>
    </aside>
  );
}

/* ─────────────────────────────────────────────
   Token Copy Tag
───────────────────────────────────────────── */
function CopyToken({ value, dark }: { value: string; dark: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[11px] transition-all hover:opacity-80"
      style={{
        backgroundColor: dark ? "rgba(115,255,178,0.1)" : "#edf7f1",
        color: dark ? "#73ffb2" : "#217446",
        border: `1px solid ${dark ? "rgba(115,255,178,0.2)" : "#a3d9bc"}`,
      }}
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
      {value}
    </button>
  );
}

/* ─────────────────────────────────────────────
   Components Section
───────────────────────────────────────────── */
function ComponentsSection({ dark }: { dark: boolean }) {
  const sectionBg = dark ? "#0d1a13" : "#ffffff";
  const altBg = dark ? "#122019" : "#f8f8f6";
  const border = dark ? "rgba(115,255,178,0.12)" : "#e8e8e8";
  const textMain = dark ? "text-white" : "text-[#1d1b1b]";
  const textMuted = dark ? "text-[rgba(255,255,255,0.45)]" : "text-[#717171]";
  const groupBg = dark ? "#1a2820" : "#f0f0f0";

  const sampleArticles = [
    { title: "為什麼優秀的主管都懂得「不管」？放手管理的藝術", category: "領導", readTime: "5 分鐘" },
    { title: "高效能人士的七個習慣，你做到了幾個？", category: "成功", readTime: "8 分鐘" },
    { title: "數位轉型的第一步：從流程自動化開始", category: "商業", readTime: "6 分鐘" },
  ];

  const subsection = (title: string, desc?: string) => (
    <div className="mb-5">
      <h4
        className={`mb-1 ${dark ? "text-white" : "text-[#1d1b1b]"}`}
        style={{ fontSize: "15px", fontWeight: 700, fontFamily: "Noto Sans TC, sans-serif" }}
      >
        {title}
      </h4>
      {desc && <p className={`text-[13px] ${textMuted}`} style={{ fontFamily: "Noto Sans TC" }}>{desc}</p>}
    </div>
  );

  return (
    <div style={{ backgroundColor: sectionBg, minHeight: "100vh" }}>
      {/* ── SectionHeader ── */}
      <div className="px-6 md:px-10 py-10 border-b" style={{ borderColor: border }}>
        <div className="max-w-[1200px] mx-auto">
          <label
            className="block mb-5 text-[11px] font-semibold tracking-widest uppercase"
            style={{ color: dark ? "#73ffb2" : "#217446", fontFamily: "Inter" }}
          >
            Components
          </label>

          {/* SectionHeader */}
          <div className={`mb-10 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
            {subsection("SectionHeader", "用於各版塊標題，支援雙品牌色彩與 CTA 連結")}
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${dark ? "bg-[#122019]" : "bg-white"}`} style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                <SectionHeader label="編輯精選" title="本週精選文章" cta="看更多" dark={dark} brand="mt" />
                <SectionHeader title="八分生活推薦" cta="探索更多" dark={dark} brand="8m" />
              </div>
              <div className="flex flex-wrap gap-2">
                <CopyToken value="<SectionHeader label='…' title='…' brand='mt' />" dark={dark} />
                <CopyToken value="brand='mt' | '8m'" dark={dark} />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className={`mb-10 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
            {subsection("Button", "七種 Variant × 三種 Size，支援圖示")}
            <div className="space-y-4">
              <div>
                <p className={`text-[11px] mb-2 ${textMuted}`} style={{ fontFamily: "Inter" }}>Variants — size md</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" icon={<ArrowRight size={15} />}>看更多</Button>
                  <Button variant="outline" icon={<ArrowRight size={15} />}>看更多</Button>
                  <Button variant="ghost">閱讀全文</Button>
                  <Button variant="8m-brown" icon={<BookOpen size={14} />} iconPosition="left">八分生活</Button>
                  <Button variant="8m-blue">立即訂閱</Button>
                  <Button variant="dark" icon={<ArrowRight size={15} />}>深度專題</Button>
                  <Button variant="neon">探索報告</Button>
                  <Button variant="primary" disabled>已訂閱</Button>
                </div>
              </div>
              <div>
                <p className={`text-[11px] mb-2 ${textMuted}`} style={{ fontFamily: "Inter" }}>Sizes — variant primary</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button variant="primary" size="sm">小按鈕 SM</Button>
                  <Button variant="primary" size="md">中按鈕 MD</Button>
                  <Button variant="primary" size="lg">大按鈕 LG</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className={`mb-10 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
            {subsection("Badge / Tag", "分類標籤、文章 Tag、廣告標記")}
            <div className="flex flex-wrap gap-2">
              <Badge variant="mt">商業</Badge>
              <Badge variant="mt">領導</Badge>
              <Badge variant="mt">管理</Badge>
              <Badge variant="8m-brown">生活風格</Badge>
              <Badge variant="8m-brown">健康</Badge>
              <Badge variant="8m-blue">科技</Badge>
              <Badge variant="8m-blue">AI</Badge>
              <Badge variant="dark">深度專題</Badge>
              <Badge variant="neutral">學習資源</Badge>
              <Badge variant="pr">PR</Badge>
            </div>
          </div>

          {/* CategoryNav */}
          <div className={`mb-10 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
            {subsection("CategoryNav", "頂部分類導覽列，支援水平捲動")}
            <div className={`rounded overflow-hidden`}>
              <CategoryNav dark={dark} />
            </div>
          </div>

          {/* SearchBar */}
          <div className={`mb-10 p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
            {subsection("SearchBar", "全站搜尋輸入框")}
            <div className="max-w-[400px]">
              <SearchBar dark={dark} />
            </div>
          </div>
        </div>
      </div>

      {/* ── ArticleListItem ── */}
      <div className="px-6 md:px-10 py-10 border-b" style={{ borderColor: border }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rank Variant */}
            <div className={`p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
              {subsection("ArticleListItem — Rank Variant")}
              <RankingTabs dark={dark} />
            </div>

            {/* Thumb Variant */}
            <div className={`p-5 rounded-xl ${dark ? "bg-[#1a2820]" : "bg-[#f5f5f5]"}`}>
              {subsection("ArticleListItem — Thumb Variant")}
              <div className={`p-3 rounded-lg ${dark ? "bg-[#122019]" : "bg-white"}`} style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}>
                {sampleArticles.map((a, i) => (
                  <ArticleListItem
                    key={i}
                    variant="thumb"
                    imageUrl={`https://picsum.photos/seed/${i + 10}/120/120`}
                    title={a.title}
                    category={a.category}
                    readTime={a.readTime}
                    dark={dark}
                    brand="mt"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="px-6 md:px-10 py-10 border-b" style={{ borderColor: border }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <SectionHeader label="Article Cards" title="文章卡片元件" dark={dark} brand="mt" />
          </div>

          {/* Featured */}
          <div className="mb-8">
            <p className={`text-[11px] mb-3 ${textMuted}`} style={{ fontFamily: "Inter" }}>Featured Variant — 大型英雄卡片</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Card
                variant="featured"
                imageUrl="https://picsum.photos/seed/mgr1/600/400"
                category="深度報告"
                title="AI 重塑企業決策：2026 管理革命完整指南"
                readTime="12 分鐘"
                dark={dark}
                brand="mt"
              />
              <Card
                variant="featured"
                imageUrl="https://picsum.photos/seed/8min1/600/400"
                category="生活科學"
                title="每日 10 分鐘冥想，改變你的大腦結構與工作表現"
                readTime="8 分鐘"
                dark={dark}
                brand="8m"
              />
            </div>
          </div>

          {/* Default Grid */}
          <div className="mb-8">
            <p className={`text-[11px] mb-3 ${textMuted}`} style={{ fontFamily: "Inter" }}>Default Variant — 標準卡片格</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "高績效團隊的秘密：從 Google 管理實驗談起", cat: "領導", img: "mgr2", readTime: "5分" },
                { title: "職場溝通的五大關鍵技巧，讓你成為溝通高手", cat: "管理", img: "mgr3", readTime: "6分" },
                { title: "從 Pomodoro 到 GTD，找到最適合你的時間管理", cat: "學習", img: "8m2", readTime: "7分" },
                { title: "斷捨離不只是整理，更是一種人生哲學", cat: "生活", img: "8m3", readTime: "4分" },
              ].map((item, i) => (
                <Card
                  key={i}
                  imageUrl={`https://picsum.photos/seed/${item.img}/400/300`}
                  category={item.cat}
                  title={item.title}
                  readTime={item.readTime}
                  date="2026.05"
                  dark={dark}
                  brand={i < 2 ? "mt" : "8m"}
                />
              ))}
            </div>
          </div>

          {/* Compact */}
          <div>
            <p className={`text-[11px] mb-3 ${textMuted}`} style={{ fontFamily: "Inter" }}>Compact Variant — 緊湊卡片 (Sidebar / 相關文章)</p>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "數位轉型的第一步：從流程自動化開始", cat: "商業", img: "mgr4" },
                { title: "每日 10 分鐘冥想，改變你的大腦結構", cat: "健康", img: "8m4" },
                { title: "遠距工作時代的領導力：如何帶領看不見的團隊", cat: "領導", img: "mgr5" },
              ].map((item, i) => (
                <Card
                  key={i}
                  variant="compact"
                  imageUrl={`https://picsum.photos/seed/${item.img}/200/200`}
                  category={item.cat}
                  title={item.title}
                  readTime="5 分鐘"
                  dark={dark}
                  brand={i === 1 ? "8m" : "mt"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Dark Feature Block ── */}
      <div className="px-6 md:px-10 py-10" style={{ backgroundColor: dark ? "#0d1a13" : "#f5f5f5" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <SectionHeader label="Dark Theme Block" title="深色深度專題區塊" dark={dark} brand="mt" />
            <p className={`text-[13px] ${textMuted}`} style={{ fontFamily: "Noto Sans TC" }}>
              深底 + 螢光綠 #73ffb2，用於深度專題、特別報告等高層級內容區
            </p>
          </div>
          <div className="max-w-[440px]">
            <DarkFeatureBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main App
───────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState("color");

  const pageBg = dark ? "#0d1a13" : "#f8f8f6";

  return (
    <div className="flex min-h-screen" style={{ backgroundColor: pageBg, fontFamily: "Noto Sans TC, sans-serif" }}>
      {/* Sidebar — hidden on mobile */}
      <div className="hidden lg:flex">
        <Sidebar active={activeSection} setActive={setActiveSection} dark={dark} setDark={setDark} />
      </div>

      {/* Mobile Top Bar */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-3 border-b z-50"
        style={{ backgroundColor: dark ? "#0d1a13" : "#ffffff", borderColor: dark ? "rgba(115,255,178,0.12)" : "#e8e8e8" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#217446]" />
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#217446" }}>經理人 Design System</span>
        </div>
        <button onClick={() => setDark(!dark)} style={{ color: dark ? "#73ffb2" : "#217446" }}>
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className="lg:hidden fixed top-[52px] left-0 right-0 z-40 flex overflow-x-auto border-b px-2 py-1"
        style={{ backgroundColor: dark ? "#0d1a13" : "#ffffff", borderColor: dark ? "rgba(115,255,178,0.12)" : "#e8e8e8" }}
      >
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full shrink-0 text-[12px] font-medium transition-all mx-0.5"
            style={{
              backgroundColor: activeSection === id ? dark ? "rgba(115,255,178,0.1)" : "#edf7f1" : "transparent",
              color: activeSection === id ? dark ? "#73ffb2" : "#217446" : dark ? "rgba(255,255,255,0.55)" : "#717171",
            }}
          >
            <Icon size={12} />
            {label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="flex-1 min-w-0 pt-[96px] lg:pt-0 overflow-auto">
        {/* Hero Header */}
        <div
          className="px-6 md:px-10 py-10 border-b"
          style={{
            background: dark
              ? "linear-gradient(135deg, #0d1a13 0%, #122019 50%, #0d1a13 100%)"
              : "linear-gradient(135deg, #edf7f1 0%, #ffffff 50%, #f9f5ef 100%)",
            borderColor: dark ? "rgba(115,255,178,0.12)" : "#e8e8e8",
          }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
              <div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-bold mb-3 tracking-widest uppercase"
                  style={{
                    backgroundColor: dark ? "rgba(115,255,178,0.12)" : "#edf7f1",
                    color: dark ? "#73ffb2" : "#217446",
                    border: `1px solid ${dark ? "rgba(115,255,178,0.25)" : "#a3d9bc"}`,
                  }}
                >
                  Design System v1.0
                </span>
                <h1
                  style={{
                    fontSize: "clamp(24px, 4vw, 40px)",
                    fontWeight: 800,
                    color: dark ? "#ffffff" : "#1d1b1b",
                    lineHeight: 1.2,
                    fontFamily: "Noto Sans TC, sans-serif",
                    marginBottom: "10px",
                  }}
                >
                  經理人 × 八分生活<br />
                  <span style={{ color: dark ? "#73ffb2" : "#217446" }}>Design Token System</span>
                </h1>
                <p style={{ fontSize: "15px", color: dark ? "rgba(255,255,255,0.55)" : "#717171", lineHeight: 1.6, fontFamily: "Noto Sans TC", maxWidth: "480px" }}>
                  雙品牌設計系統 — 模組化 Token、明暗主題交錯、行動裝置優先。<br />
                  涵蓋 Color、Typography、Spacing、Radius、Shadow、Z-index 與元件庫。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 shrink-0">
                <Badge variant="mt">經理人主綠 #217446</Badge>
                <Badge variant="8m-brown">八分棕 #a78662</Badge>
                <Badge variant="8m-blue">八分藍 #3ca9e3</Badge>
                <Badge variant="dark">螢光綠 #73ffb2</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === "color" && (
          <TokenSection title="Color" subtitle="雙品牌色彩系統" dark={false}>
            <ColorPalette dark={false} />
          </TokenSection>
        )}

        {activeSection === "typography" && (
          <TokenSection title="Typography" subtitle="字型系統與文字階層" dark={dark}>
            <TypographyShowcase dark={dark} />
          </TokenSection>
        )}

        {activeSection === "spacing" && (
          <TokenSection title="Spacing / Radius / Shadow" subtitle="間距、圓角與陰影系統" dark={dark}>
            <SpacingShowcase dark={dark} />
          </TokenSection>
        )}

        {activeSection === "zindex" && (
          <TokenSection title="Z-Index / Breakpoints / Transitions" subtitle="層級、斷點與過場動畫" dark={dark}>
            <ZIndexShowcase dark={dark} />
          </TokenSection>
        )}

        {activeSection === "components" && (
          <ComponentsSection dark={dark} />
        )}

        {activeSection === "button-tokens" && (
          <PrimaryButtonTokens dark={dark} />
        )}
      </main>
    </div>
  );
}