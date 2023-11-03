import mongoose from "mongoose";

const puzzleSchema = new mongoose.Schema({
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

export default mongoose.models.Puzzle || mongoose.model("Puzzle", puzzleSchema);
