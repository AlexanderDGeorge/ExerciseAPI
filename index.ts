import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { exerciseRouter } from "./routes";
const dotenv = require("dotenv");

dotenv.config();

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

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/exercises", exerciseRouter);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
