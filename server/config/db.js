const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(
      "mongodb+srv://anshrusia2002:anshrusia@cluster0.hnum7xs.mongodb.net/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected ");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
