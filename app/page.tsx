import Puzzle from "@/components/Puzzle";
import { getAllPuzzles } from "@/lib/getAllPuzzles";
import "@/styles/globals.css";
import { PuzzleType } from "@/types";

const Home = async () => {
  const puzzles: Promise<PuzzleType[]> = await getAllPuzzles();
  const data: PuzzleType[] = await puzzles;

  return (
    <main className="main">
      {data.map((item, index) => {
        return (
          <Puzzle
            key={item._id}
            puzzledString={item.puzzledString}
            actualString={item.actualString}
            attempts={item.attempts}
            hint={item.hint}
            id={item._id}
          />
        );
      })}
    </main>
  );
};

export default Home;
