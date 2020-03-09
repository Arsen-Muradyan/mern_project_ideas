const express = require("express");
const connect = require("./db/connect");
connect();
let app = express();
app.use((req, res, next) => {
  if (req.headers.referer === "http://localhost:3000/") {
    res.setHeader("Access-Allow-Control-Origin", "http://localhost:3000/");
    next();
  } else {
    res.json({
      error: "This Resource Blocked By CORS"
    })
  }
});
app.use(express.json());
app.use("/api/ideas", require("./routes/ideas"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Your Server Listening ${PORT}...`);
});
