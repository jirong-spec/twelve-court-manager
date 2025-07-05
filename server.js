const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'courts.json');

// 讀資料
function readData() {
  try {
    const raw = fs.readFileSync(DATA_FILE);
    return JSON.parse(raw);
  } catch {
    return Array(12).fill(null).map(() => ({
      flag1: "🇬🇧", player1: "", score1: "",
      flag2: "🇮🇹", player2: "", score2: "",
      nextPlayers: "",
    }));
  }
}

// 存資料
function saveData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// 靜態檔案（放前端 html/js/css）
app.use(express.static(path.join(__dirname, 'public')));

// API：取得所有球場資料
app.get('/courts', (req, res) => {
  res.json(readData());
});

// API：更新指定球場資料
app.post('/courts/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || id >= 12) return res.status(400).json({ error: 'Invalid court id' });

  const data = readData();
  data[id] = req.body;
  saveData(data);
  res.json({ message: `Court ${id + 1} updated` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
