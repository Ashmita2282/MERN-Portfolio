const express = require("express");
const app = express();
require("dotenv").config();
const dbconfig = require("./dbconfig");
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");

require("./Models/user-model");
require("./Models/portfolio-model");

app.use(express.json());
app.use(require("./Routes/portfolioRoutes"));
app.use(
  cors({
    origin: "*",
  })
);
// deployment config
__dirname = path.resolve();  

if (process.env.NODE_ENV === "production") {
app.use(express.static(path.join(__dirname, "/FrontEnd" , "build")));
// console.log(`🚀 => path.join(__dirname, "FrontEnd" , "build")):`, path.join(__dirname, "FrontEnd" , "build"));
// console.log(`🚀 => path.join(__dirname, "FrontEnd")):`, path.join(__dirname, "FrontEnd"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "FrontEnd", "build", "index.html"));
  // console.log(`🚀 => path.join(__dirname, "FrontEnd", "build", "index.html"):`, path.join(__dirname, "FrontEnd", "build", "index.html"));
});
}

const get = async () => {
  const result = await fetch("https://ashmitashrivas.onrender.com/");
  console.log(result);
};

setInterval(() => {
  get();
}, 300000);

app.listen(port, () => {
  console.log("App listening on port " + port);
});
