import { Schema, model, models } from "mongoose";

const puzzleSchema = new Schema({
  puzzledString: {
    type: Object,
    required: true,
  },
  actualString: {
    type: String,
    required: [true, "String is is required"],
  },
  attempts: {
    type: Number,
    required: [true, "Attempts are required"],
  },
  hint: {
    type: String,
    required: [true, "Hint is required"],
  },
});

const Puzzle = models.Puzzle || model("Puzzle", puzzleSchema);

export default Puzzle;
