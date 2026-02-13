const express = require("express");
const cors = require("cors");
const generateTemplate = require("./templates/generator");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/generate", (req, res) => {
  const { name, industry, color, tone } = req.body;

  if (!name || !industry || !color || !tone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const html = generateTemplate(name, industry, color, tone);
  res.json({ html });
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
