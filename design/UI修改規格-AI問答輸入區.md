# UI 修改規格：AI 問答輸入區

> 對應元件：文章頁底部 AI 問答 Widget（`<form>` 區塊）
> ⚠️ 以下修改**僅限手機版**，桌機版樣式不變（透過 `md:` prefix 保留原值）

---

## 修改項目一：文字輸入框左右內距縮小

**元素：** `<textarea name="question" ...>`

**問題：** 輸入框左右內距（`px-6` = 24px）視覺上太寬，壓縮後文字區域變小。

**修改：**

```diff
- class="block w-full px-6 py-[10px] bg-white ..."
+ class="block w-full px-3 md:px-6 py-[10px] bg-white ..."
```

> 同步調整 placeholder 定位：

```diff
- class="ai-placeholder-stack pointer-events-none absolute left-6 right-6 top-[10px] ..."
+ class="ai-placeholder-stack pointer-events-none absolute left-3 right-3 md:left-6 md:right-6 top-[10px] ..."
```

---

## 修改項目二：「送出」按鈕文字縮小、左右間距縮減

**元素：** `<button type="submit" ...>送出</button>`

**問題：**
- 文字偏大（`text-base` = 16px）
- 左右內距（`px-7` = 28px）過寬，與按鈕高度比例不協調

**修改：**

```diff
- class="px-7 h-11 bg-[#217446] hover:bg-[#1a5d38] text-white text-base font-semibold tracking-[0.04em] rounded-xl whitespace-nowrap self-end"
+ class="px-3 md:px-7 h-11 bg-[#217446] hover:bg-[#1a5d38] text-white text-sm md:text-base font-semibold tracking-[0.04em] rounded-xl whitespace-nowrap self-end"
```

**變更說明：**
| 屬性 | 手機版（修改後） | 桌機版（不變） |
|------|--------|--------|
| 文字大小 | `text-sm`（14px） | `md:text-base`（16px） |
| 左右內距 | `px-3`（12px） | `md:px-7`（28px） |

---

## 修改項目三：免責聲明文字縮小、加大行高

**元素：** 最下方 `<p>` 免責聲明文字

**問題：**
- 字級（`text-sm` = 14px）比上方「登入會員後可享用 3 次提問」（12px）大，視覺層級不一致
- 行高為 `leading-none`，多行時文字擠在一起

**修改：**

```diff
- class="font-normal text-sm text-[#666] text-center leading-none w-full"
+ class="font-normal text-[12px] md:text-sm text-[#666] text-center leading-[1.25] md:leading-none w-full"
```

**變更說明：**
| 屬性 | 手機版（修改後） | 桌機版（不變） |
|------|--------|--------|
| 文字大小 | `text-[12px]`，與「登入會員後可享用 3 次提問」一致 | `md:text-sm`（14px） |
| 行高 | `leading-[1.25]` | `md:leading-none` |

---

## 不動項目

- 「登入會員後可享用 **3** 次提問」文字樣式保持原樣
- 整體 Widget 框架、背景漸層、圓角、陰影不變
- 推薦問題列表區塊不變
