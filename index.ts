import express from "express";
import { exerciseRouter } from "./routes";

const app = express();
app.use(express.json());
app.use("/exercises", exerciseRouter);
app.listen(5000, () => {
  console.log("listening on port 5000");
});
