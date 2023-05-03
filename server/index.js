const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const bodyParser = require("body-parser");
const PORT = 5000;
const path = require("path");
const cors = require("cors");
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
