import express, { Request, Response } from "express";
import { exerciseController } from "../controllers";

export const exerciseRouter = express.Router({
  strict: true,
});

exerciseRouter.get("/", (req: Request, res: Response) => {
  console.log(req.body);
  exerciseController.read(req, res);
});

exerciseRouter.post("/", (req: Request, res: Response) => {
  exerciseController.create(req, res);
});

exerciseRouter.patch("/", (req: Request, res: Response) => {
  exerciseController.update(req, res);
});

exerciseRouter.delete("/", (req: Request, res: Response) => {
  exerciseController.delete(req, res);
});
