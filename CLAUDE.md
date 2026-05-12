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
