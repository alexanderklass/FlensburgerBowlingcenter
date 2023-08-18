const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,POST",
  })
);

app.post("/events", (req, res) => {
  const file = "C:/Users/alexk/Desktop/FlensburgerBowlingcenter/server/calendar.data.json";
  const event = req.body;
  fs.readFile(file, "utf-8", (err, data) => {
    if (err) console.log(err);
    let existingData = JSON.parse(data);
    existingData.push(event);
    const combinedData = JSON.stringify(existingData, null, 2);
    res.send(combinedData);
    fs.writeFile(file, combinedData, "utf-8", (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
