const express = require("express");
const connect = require("./db/connect");
const cors = require("cors");
connect();
let app = express();
app.use(cors());
app.use(express.json());
app.use("/api/ideas", require("./routes/ideas"));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Your Server Listening ${PORT}...`);
});
