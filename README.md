# 12 球場比賽管理系統
這是一個簡易的比賽管理網頁工具，支援 12 球場的分數、選手與下一場排程設定，可多人透過瀏覽器在同一區域網路內同時連線與管理。

### 📦 專案內容

#### ✅ 前端：純 HTML + JavaScript

#### ✅ 後端：Node.js + Express API

#### ✅ 資料儲存：記憶體內（重啟後清空）

#### ✅ 密碼保護：可設定密碼才能修改資料
---

## 🚀 使用方法

### 1️⃣ 安裝 Node.js 套件

```bash
npm install
```
這會自動安裝 express 和 cors 等必要套件。

### 2️⃣ 啟動後端伺服器

```bash
node server.js
```
啟動後，後端 API 會在 http://localhost:3000 提供服務。

### 3️⃣ 開啟網頁（前端）
打開 public/index.html 即可開始使用管理介面。

## 🌐 多人使用方式（區域網連線）
若你想讓區域網內的其他設備能夠共同編輯資料：

### 1.查詢你的電腦 IP 位址：

Windows：使用 ipconfig 找到 IPv4 位址

macOS/Linux：使用 ifconfig 或 ip a

### 2.修改前端設定：

打開 public/index.html，找到這行：

請打開 `public/index.html`，找到這兩行：

```js
const API_BASE = "http://192.168.x.x:3000"; // 請改成你的伺服器 IP
const PASSWORD = "1234"; // 可自訂管理密碼
```
將 192.168.x.x 改成你自己電腦（或 VPS）的 IPv4 位址，確保同一區域網路內的其他人能正確連線。
也可以修改"1234"成自己的密碼。

### 3.確保其他人跟你在同一個 Wi-Fi 或區網內，並使用同一個 IP 開啟這個 HTML，即可同步使用。

