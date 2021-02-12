import express from "express";
import mongoose from "mongoose";
import { exerciseRouter } from "./routes";
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(express.json());
app.use("/exercises", exerciseRouter);

try {
  mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pa6xl.mongodb.net/exercises?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (err) {
  console.error(err);
}

app.listen(5000, () => {
  console.log("listening on port 5000");
});
