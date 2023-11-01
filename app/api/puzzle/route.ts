import Puzzle from "@/model/puzzle";
import { connectToDB } from "@/utils/mongodb";

export const GET = async (req: Request) => {
  try {
    connectToDB();
    const puzzle = await Puzzle.find({});
    return new Response(JSON.stringify(puzzle), { status: 200 });
  } catch (error) {
    return new Response("Failed to find posts", { status: 500 });
  }
};
