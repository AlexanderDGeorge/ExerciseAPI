import e, { Request, Response } from "express";
import { CRUDController } from "./CRUDController";
import {
  IExercise,
  ExerciseModel,
  ExerciseService,
} from "../models/exerciseModel";

function checkBody(body: any): body is IExercise {
  return (
    typeof body.name === "string" &&
    typeof body.description === "string" &&
    typeof body.equipment === "string" &&
    (body.difficulty === "Easy" ||
      body.difficulty === "Medium" ||
      body.difficulty === "Hard") &&
    Array.isArray(body.muscle_group)
  );
}

export class ExerciseController extends CRUDController {
  private service = new ExerciseService();

  public create(req: Request, res: Response): void {
    if (!checkBody(req.body)) {
      res.json("Insufficient params");
      return;
    }
    try {
      this.service.createExercise(req.body);
      res.json({
        message: "Success",
        ...req.body,
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  public read(req: Request, res: Response): void {
    try {
      this.service.filterExercise(
        { name: "Push-Up" },
        (err: any, data: IExercise) => {
          if (err) {
            res.send("ERROR");
          } else {
            res.send(data);
          }
        }
      );
    } catch (err) {
      console.error(err.message);
    }
  }

  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}
