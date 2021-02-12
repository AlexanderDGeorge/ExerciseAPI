import Mongoose, { Schema } from "mongoose";

interface IExercise {
  _id?: String;
  name: String;
  description: String;
  equipment: String;
  difficulty: String;
  muscle_group: Array<String>;
}

const exerciseSchema = new Schema({
  name: String,
  description: String,
  equipment: String,
  difficulty: String,
  muscle_group: Array,
});

const ExerciseModel = Mongoose.model("Exercises", exerciseSchema);

class ExerciseService {
  public createExercise(exerciseParams: IExercise) {
    const newExercise = new ExerciseModel(exerciseParams);
    newExercise.save();
  }

  public filterExercise(query: any, callback: any) {
    ExerciseModel.find(query, callback);
  }

  public updateExerise(query: any, exerciseParams: IExercise) {
    ExerciseModel.findOneAndUpdate(query, exerciseParams);
  }

  public deleteExercise(query: any) {
    ExerciseModel.findOneAndDelete(query);
  }
}

export { IExercise, ExerciseModel, ExerciseService };
