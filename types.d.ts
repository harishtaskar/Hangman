import { ObjectId } from "mongoose";

type PuzzleType = {
  actualString: string;
  puzzledString: string[];
  hint: string;
  attempts: number;
  _id: string;
};
