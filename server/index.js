const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const bodyParser = require("body-parser");
const PORT = 5000;
const path = require("path");
const cors = require("cors");
const node_env = "production";
/********************
 * CONNECT DATABASE *
 ********************/
app.use(
  cors({
    origin: [/localhost:\d{4}$/],
  })
);
connectDB();

/*******************
 * INIT MIDDLEWARE *
 *******************/
app.use(express.json());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

/*****************
 * DEFINE ROUTER *
 *****************/

app.use("/", require("./routes/meeting"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

if (node_env === "production") {
  const __directory = path.resolve();
  app.use(express.static(path.join(__directory, "/client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__directory, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API service running 🚀");
  });
}
