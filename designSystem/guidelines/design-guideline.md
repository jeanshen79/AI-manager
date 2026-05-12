# Manager Today × 八分生活 Design Guideline

> 版本 1.1.0 · 更新 2026-05-13  
> Token 架構：MD3 三層繼承 — Primitive → Semantic → Component

---

## 目錄

1. [品牌色彩](#1-品牌色彩)
2. [Neutral 灰階](#2-neutral-灰階)
3. [語意色彩角色](#3-語意色彩角色)
4. [深色主題](#4-深色主題)
5. [字型系統](#5-字型系統)
6. [間距系統](#6-間距系統)
7. [圓角規範](#7-圓角規範)
8. [陰影系統](#8-陰影系統)
9. [Z-Index 層級](#9-z-index-層級)
10. [斷點與版型](#10-斷點與版型)
11. [動畫與過渡](#11-動畫與過渡)
12. [元件規範：按鈕](#12-元件規範按鈕)
13. [無障礙規則](#13-無障礙規則)

---

## 1. 品牌色彩

### 經理人主綠 (MT Green)

| Token | CSS Variable | Hex | 用途 |
|-------|-------------|-----|------|
| `mt-green-50` | `--color-mt-green-50` | `#edf7f1` | 淺底、hover 背景 |
| `mt-green-100` | `--color-mt-green-100` | `#d0ecdc` | 輕微強調底色 |
| `mt-green-200` | `--color-mt-green-200` | `#a3d9bc` | Surface tint |
| `mt-green-300` | `--color-mt-green-300` | `#6ec29a` | — |
| `mt-green-400` | `--color-mt-green-400` | `#3ea97a` | 淺一階主色 |
| **`mt-green-500`** | `--color-mt-green-500` | **`#217446`** | **★ 品牌主色 Brand Primary** |
| `mt-green-600` | `--color-mt-green-600` | `#1a5c37` | — |
| `mt-green-700` | `--color-mt-green-700` | `#144529` | Hover 狀態底色 |
| `mt-green-800` | `--color-mt-green-800` | `#0d2e1b` | Pressed 狀態底色 |
| `mt-green-900` | `--color-mt-green-900` | `#07170e` | 最深，高對比文字用 |

### 八分生活棕 (8min Brown)

| Token | CSS Variable | Hex | 用途 |
|-------|-------------|-----|------|
| `8m-brown-300` | `--color-8m-brown-300` | `#cab27c` | 強調金色 |
| **`8m-brown-500`** | `--color-8m-brown-500` | **`#a78662`** | **★ 八分主棕 Brand Secondary A** |

### 八分生活藍 (8min Blue)

| Token | CSS Variable | Hex | 用途 |
|-------|-------------|-----|------|
| **`8m-blue-400`** | `--color-8m-blue-400` | **`#3ca9e3`** | **★ 八分主藍 Brand Secondary B** |

### 深色螢光綠 (Neon Green)

| Token | CSS Variable | Hex | 用途 |
|-------|-------------|-----|------|
| `neon-green` | `--color-neon-green` | `#73ffb2` | 深色主題 CTA 底色、強調 |
| `neon-green-dim` | `--color-neon-green-dim` | `rgba(115,255,178,0.15)` | 深色主題微光背景 |

---

## 2. Neutral 灰階

| Token | CSS Variable | Hex | 用途 |
|-------|-------------|-----|------|
| `neutral-0` | `--color-neutral-0` | `#ffffff` | 白底 |
| `neutral-50` | `--color-neutral-50` | `#fafafa` | 極淺底 |
| `neutral-100` | `--color-neutral-100` | `#f5f5f5` | 輸入框底色 |
| `neutral-200` | `--color-neutral-200` | `#eeeeee` | 分隔線 |
| `neutral-300` | `--color-neutral-300` | `#e8e8e8` | 預設邊框 |
| `neutral-400` | `--color-neutral-400` | `#cccccc` | 強邊框 |
| `neutral-500` | `--color-neutral-500` | `#afafaf` | Disabled 文字 |
| `neutral-600` | `--color-neutral-600` | `#717171` | Muted 文字 |
| `neutral-700` | `--color-neutral-700` | `#4a4a4a` | 次要文字 |
| `neutral-800` | `--color-neutral-800` | `#2e2e2e` | — |
| **`neutral-900`** | `--color-neutral-900` | **`#1d1b1b`** | **★ 主文字色** |

---

## 3. 語意色彩角色

| 語意 Token | CSS Variable | 對應值 | 用途 |
|-----------|-------------|--------|------|
| `text-primary` | `--color-text-primary` | `#1d1b1b` | 主要文字 |
| `text-secondary` | `--color-text-secondary` | `#4a4a4a` | 次要文字 |
| `text-muted` | `--color-text-muted` | `#717171` | 輔助說明文字 |
| `text-disabled` | `--color-text-disabled` | `#afafaf` | 禁用文字 |
| `text-inverse` | `--color-text-inverse` | `#ffffff` | 深色容器上的文字 |
| `text-brand` | `--color-text-brand` | `#217446` | 品牌色文字、連結 |
| `surface-page` | `--color-surface-page` | `#ffffff` | 頁面底色 |
| `surface-subtle` | `--color-surface-subtle` | `#f5f5f5` | 區塊底色 |
| `surface-hover` | `--color-surface-hover` | `#f0f0f0` | Hover 底色 |
| `border-default` | `--color-border-default` | `#e8e8e8` | 預設邊框 |
| `border-brand` | `--color-border-brand` | `#217446` | 品牌邊框、focus ring |

---

## 4. 深色主題

深色主題採用「深底 + 螢光綠強調」設計語言。

| Token | CSS Variable | 值 | 用途 |
|-------|-------------|-----|------|
| `dark-bg-900` | `--color-dark-bg-900` | `#0d1a13` | 最深底色 |
| `dark-surface` | `--color-dark-surface` | `#1a2820` | 卡片/區塊底色 |
| `dark-border` | `--color-dark-border` | `rgba(115,255,178,0.2)` | 邊框 |
| `dark-text` | `--color-dark-text` | `#ffffff` | 主要文字 |
| `dark-text-dim` | `--color-dark-text-dim` | `rgba(255,255,255,0.65)` | 次要文字 |
| `dark-accent` | `--color-dark-accent` | `#73ffb2` | 螢光綠強調色 |

---

## 5. 字型系統

### 字型家族

| 用途 | CSS Variable | 字型 |
|------|-------------|------|
| 主要內文 | `--font-family-body` | `'Noto Sans TC', 'Inter', sans-serif` |
| 英文 / 數字 | `--font-family-latin` | `'Inter', 'Noto Sans TC', sans-serif` |
| 數字排名 | `--font-family-numeric` | `'Fira Sans Condensed', 'Inter', sans-serif` |

### 字重

| Token | 值 | 用途 |
|-------|---|------|
| `font-weight-light` | 300 | 輕量 |
| `font-weight-normal` | 400 | 內文 |
| `font-weight-medium` | 500 | 按鈕、標籤 |
| `font-weight-semibold` | 600 | Outline 按鈕、小標題 |
| `font-weight-bold` | 700 | 標題 |

### 字級規模

| Token | CSS Variable | px | 使用場景 |
|-------|-------------|-----|---------|
| `text-xs` | `--text-xs` | 12px | 標籤、說明 |
| `text-sm` | `--text-sm` | 13px | 輔助文字 |
| `text-base` | `--text-base` | 16px | 內文基準 |
| `text-md` | `--text-md` | 17px | — |
| `text-lg` | `--text-lg` | 18px | 文章正文 |
| `text-xl` | `--text-xl` | 20px | h4 |
| `text-2xl` | `--text-2xl` | 22px | — |
| `text-3xl` | `--text-3xl` | 24px | h3 |
| `text-4xl` | `--text-4xl` | 28px | h2 |
| `text-5xl` | `--text-5xl` | 32px | h1 |
| `text-6xl` | `--text-6xl` | 40px | 超大標題 |

### 行高

| Token | CSS Variable | 值 | 適用 |
|-------|-------------|---|------|
| `leading-tight` | `--leading-tight` | 1.3 | 標題 |
| `leading-snug` | `--leading-snug` | 1.4 | h3、h4、按鈕 |
| `leading-normal` | `--leading-normal` | 1.5 | label、button |
| `leading-relaxed` | `--leading-relaxed` | 1.6 | 段落 p |
| `leading-loose` | `--leading-loose` | 1.8 | 文章長文 |

---

## 6. 間距系統

基礎單位 = 4px。

| Token | px | 常用場景 |
|-------|----|---------|
| `--space-1` | 4px | icon 間距 |
| `--space-2` | 8px | 緊湊元素間距 |
| `--space-3` | 12px | 一般元素間距 |
| `--space-4` | 16px | 預設 padding |
| `--space-6` | 24px | 按鈕水平 padding |
| `--space-8` | 32px | LG 按鈕水平 padding |
| `--space-10` | 40px | 區塊間距 |
| `--space-12` | 48px | 大區塊間距 |
| `--space-14` | 56px | 頁面橫向 padding |

### Section Padding

| 斷點 | 值 |
|------|---|
| Mobile | 16px |
| Tablet | 24px |
| Desktop | 40px |

---

## 7. 圓角規範

| Token | CSS Variable | px | 用途 |
|-------|-------------|-----|------|
| `radius-xs` | `--radius-xs` | 2px | 極小標籤 |
| `radius-sm` | `--radius-sm` | 4px | ★ 按鈕預設圓角 |
| `radius-md` | `--radius-md` | 6px | — |
| `radius-lg` | `--radius-lg` | 8px | Hero box、卡片 |
| `radius-xl` | `--radius-xl` | 12px | 輸入框 |
| `radius-2xl` | `--radius-2xl` | 16px | 大卡片、Widget |
| `radius-3xl` | `--radius-3xl` | 24px | 超大圓角卡片 |
| `radius-full` | `--radius-full` | 9999px | 膠囊型按鈕、標籤 |

---

## 8. 陰影系統

| Token | CSS Variable | 值 | 用途 |
|-------|-------------|---|------|
| `shadow-xs` | `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.06)` | 微弱陰影 |
| `shadow-sm` | `--shadow-sm` | `0 1px 4px rgba(0,0,0,0.08)` | 卡片 |
| `shadow-md` | `--shadow-md` | `0 2px 8px rgba(0,0,0,0.10)` | 浮起元素 |
| `shadow-lg` | `--shadow-lg` | `0 4px 16px rgba(0,0,0,0.12)` | Dropdown |
| `shadow-xl` | `--shadow-xl` | `0 8px 32px rgba(0,0,0,0.14)` | Modal |
| `shadow-brand` | `--shadow-brand` | `0 4px 16px rgba(33,116,70,0.20)` | 品牌色按鈕強調 |
| `shadow-neon` | `--shadow-neon` | `0 0 20px rgba(115,255,178,0.30)` | 深色主題發光效果 |

---

## 9. Z-Index 層級

| Token | CSS Variable | 值 | 用途 |
|-------|-------------|---|------|
| `z-below` | `--z-below` | -1 | 背景層 |
| `z-base` | `--z-base` | 0 | 預設 |
| `z-raised` | `--z-raised` | 10 | 稍微浮起 |
| `z-dropdown` | `--z-dropdown` | 100 | 下拉選單 |
| `z-sticky` | `--z-sticky` | 200 | 固定 Nav |
| `z-overlay` | `--z-overlay` | 300 | 背景遮罩 |
| `z-modal` | `--z-modal` | 400 | Modal |
| `z-popover` | `--z-popover` | 500 | Popover |
| `z-toast` | `--z-toast` | 600 | Toast 通知 |
| `z-tooltip` | `--z-tooltip` | 700 | Tooltip |

---

## 10. 斷點與版型

| 斷點 | CSS Variable | 值 |
|------|-------------|---|
| Mobile | `--breakpoint-mobile` | 375px |
| Tablet | `--breakpoint-tablet` | 768px |
| Desktop | `--breakpoint-desktop` | 1024px |
| Wide | `--breakpoint-wide` | 1280px |
| Full | `--breakpoint-full` | 1440px |

### Container 最大寬度

| 斷點 | 最大寬 |
|------|-------|
| Mobile | 100% |
| Tablet | 720px |
| Desktop | 960px |
| Wide | 1200px |

---

## 11. 動畫與過渡

| Token | CSS Variable | 值 | 用途 |
|-------|-------------|---|------|
| `transition-fast` | `--transition-fast` | `150ms ease` | Hover、微互動 |
| `transition-base` | `--transition-base` | `250ms ease` | 一般狀態切換 |
| `transition-slow` | `--transition-slow` | `400ms ease` | 展開、收合 |
| `transition-spring` | `--transition-spring` | `350ms cubic-bezier(0.34,1.56,0.64,1)` | 彈性動畫 |

> **規則：** 所有 hover/focus 互動使用 `transition-fast (150ms)`，頁面層級轉場使用 `transition-base (250ms)`，動畫應遵守 `prefers-reduced-motion`。

---

## 12. 元件規範：按鈕

### Primary Button（實心主按鈕）

| 屬性 | MD 預設 | SM | LG |
|------|--------|----|----|
| 高度 | 40px | 32px | 48px |
| 字級 | 15px | 13px | 17px |
| 水平 padding | 24px | 14px | 32px |
| 字重 | 500 (Medium) | 500 | 500 |
| 圓角 | 4px | 4px | 4px |
| 字距 | 0.01em | 0.01em | 0.01em |
| Icon 大小 | 18px | 14px | 20px |
| Icon-Label 間距 | 8px | 8px | 8px |

**狀態色彩：**

| 狀態 | 底色 | 文字色 |
|------|------|--------|
| Default | `#217446` | `#ffffff` |
| Hover | `#144529` | `#ffffff` |
| Pressed | `#0d2e1b` | `#ffffff` |
| Focus | `#217446` + 3px ring | `#ffffff` |
| Disabled | `rgba(0,0,0,0.12)` | opacity 0.38 |
| Dark Default | `#73ffb2` | `#0d1a13` |
| Dark Hover | `#52e89a` | `#0d1a13` |

---

### Outline Button（空心框線按鈕）

| 屬性 | MD 預設 |
|------|--------|
| 高度 | 40px |
| 字級 | 14px |
| 水平 padding | 24px |
| 垂直 padding | 8px |
| 字重 | 600 (Semi Bold) |
| 圓角 | 4px |
| 邊框 | 1px solid `#217446` |

**狀態色彩：**

| 狀態 | 底色 | 邊框 | 文字 |
|------|------|------|------|
| Default | transparent | `#217446` | `#217446` |
| Hover | `rgba(33,116,70,0.06)` | `#217446` | `#217446` |
| Focus | `rgba(33,116,70,0.08)` + 3px ring | `#217446` | `#217446` |
| Pressed | `rgba(33,116,70,0.12)` | `#217446` | `#144529` |
| Disabled | transparent | `rgba(0,0,0,0.12)` | opacity 0.38 |
| Dark | transparent | `#73ffb2` | `#73ffb2` |

---

## 13. 無障礙規則

| 規則 | 標準 |
|------|------|
| 色彩對比（正文）| 最低 4.5:1（WCAG AA） |
| 色彩對比（大字 18px+）| 最低 3:1 |
| 觸控目標最小尺寸 | 44×44px |
| Focus ring 寬度 | 3px，顏色 `#217446` |
| 所有互動元素 | 需有 `aria-label` 或可見文字 |
| 所有圖片 | 需有 `alt` 屬性 |
| 表單欄位 | 需有 `<label>` 對應（可用 `sr-only`） |
| 動畫 | 需遵守 `prefers-reduced-motion` |
| 慣用色文字（muted）| 最低使用 `#717171`（neutral-600），禁用 `#afafaf` 於白底正文 |
