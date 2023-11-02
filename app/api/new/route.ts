import Puzzle from "@/model/puzzle";
import { connectToDB } from "@/utils/mongodb";

export const POST = async (req: Request) => {
  const { actualString, attempts, hint, puzzledString } = await req.json();

  try {
    await connectToDB();
    const newPuzzle = new Puzzle({
      actualString,
      attempts,
      hint,
      puzzledString,
    });
    await newPuzzle.save();
    return new Response(JSON.stringify(newPuzzle), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new Puzzle", { status: 500 });
  }
};
