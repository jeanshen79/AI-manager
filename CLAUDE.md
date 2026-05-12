# AI 經理人

## 專案簡介
經理人 Manager Today AI 問答功能 prototype，包含文章頁 AI Widget 與獨立 AI 問答頁。

## 技術棧
- **框架：** 純 HTML + Tailwind CSS（CDN）
- **語言：** HTML / JavaScript
- **Design System：** React + shadcn/ui（位於 `designSystem/`）

## 資料夾結構
```
AI 經理人/
├── index.html          # 主 prototype（文章頁 + AI 問答頁）
├── design/             # 設計稿截圖與 Figma 輸出
└── designSystem/       # Design Token 系統（React）
    ├── guidelines/
    │   └── design-guideline.md   # ★ 設計規範主文件
    └── src/app/assets/
        └── figma-variables.json  # Figma Token 原始資料
```

## 設計規範

> **⚠️ 執行任何 UI/UX 設計或前端開發前，必須先閱讀：**
> `designSystem/guidelines/design-guideline.md`

文件包含：品牌色彩、字型、間距、圓角、陰影、Z-Index、按鈕元件規格、無障礙標準。
所有設計決策與 CSS 值必須依照此文件的 token 執行，禁止自行定義與 token 衝突的硬編碼數值。

## 常用指令
```bash
# 開啟 prototype
open -e index.html

# 啟動 Design System
cd designSystem && pnpm dev
```

## 注意事項
- 品牌主色 `#217446`，深色主題螢光綠 `#73ffb2`
- 觸控目標最小 44×44px
- 所有 input 需有對應 `<label>`（可用 `sr-only`）
- 動畫需遵守 `prefers-reduced-motion`

---

## 已確認的 Token 值（2026-05-13 對照設計規範校正）

### 顏色
| 用途 | Token / 值 |
|------|-----------|
| 主綠 | `#217446` |
| Hover 綠 | `#144529`（非 `#1a5e38`，已校正） |
| 淺綠背景 | `#e5f5eb` |
| 輸入框 border 綠 | `#a3d9bc`（非 `#95d9b3`） |
| 內文正文 | `#1d1b1b`（非 `#333`） |
| 八分生活品牌色 | `#a78662`（棕）；排行榜數字用此色 |
| CTA gradient 終點 | `#3ea97a`（非 `#2eb76b`） |
| LINE 綠 | `#4CC764` |

### 字型
- Google Fonts 載入：`Inter:wght@400;500;600` + `Noto+Sans+TC:wght@400;500;600;700`
- body 預設 font-family：`'Noto Sans TC', sans-serif`

### 圓角
- 所有 Primary Button：`border-radius: 4px`（`rounded-sm`），禁用 `rounded-xl` / `rounded-lg`
- Pills / Badge / 全圓角：`rounded-full` 或 `rounded-[100px]` 才可用

### Z-Index 層級
| 元件 | Token 值 |
|------|---------|
| Sticky nav | `z-[200]` |
| Floating button | `z-[100]` |
| Sticky input bar | `z-[200]` |
| Modal backdrop | `z-[300]` |
| Toast | `z-[600]` |

### 無障礙
- 所有 `focus:outline-none` 必須搭配 `focus:ring focus:ring-[#217446]`
- Focus ring 規格：3px solid `#217446`

---

## AI 問答頁（`#pg-ai`）元件說明

### Sidebar（`id="ai-sidebar"`，由 `renderSidebar()` 產生）
- **訪客**：dashed 頭像 + 問候語 + 登入 CTA card（含 usageBar）
- **會員**：profile card 只顯示頭像、姓名、方案、登出按鈕
- ⚠️ sidebar **不顯示** quota 計數（已移至輸入框下方）
- ⚠️ **Manager AI 工作紀錄**已移除，`historyRowsHTML()` function 保留但不呼叫

### Quota Pill（`id="ai-quota-hint"`，由 `updateQuotaHint()` 產生）
位於 sticky input bar 輸入框正下方，四種狀態：
- 正常：綠色 pill，progress bar + `今日剩餘 X / Y 次`
- 訪客未用：綠色 pill + 「登入解鎖更多」CTA
- 最後 1 次：紅色警示 pill
- 用完：灰色 pill + `今日已用完，明日 00:00 重置`

### Letter-spacing
- Button `送出`（sticky bar）：`tracking-[0.01em]`（非 px 值）
