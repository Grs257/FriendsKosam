const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/convert", async (req, res) => {
  const { url } = req.body;

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      res.json({ directLink: url });
    } else {
      res.status(400).json({ error: "Invalid TeraBox URL" });
    }
  } catch (error) {
    res.status(400).json({ error: "Unable to connect to TeraBox URL" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
