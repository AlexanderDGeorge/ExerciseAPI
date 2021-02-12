import express, { Request, Response } from "express";
import { exerciseController } from "../controllers";

export const exerciseRouter = express.Router({
  strict: true,
});

exerciseRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello from ExerciseRouter");
  exerciseController.read(req, res);
});

exerciseRouter.post("/", (req: Request, res: Response) => {
  res.send("Hello from ExerciseRouter");
  exerciseController.create(req, res);
});

exerciseRouter.patch("/", (req: Request, res: Response) => {
  res.send("Hello from ExerciseRouter");
  exerciseController.update(req, res);
});

exerciseRouter.delete("/", (req: Request, res: Response) => {
  res.send("Hello from ExerciseRouter");
  exerciseController.delete(req, res);
});
