import Puzzle from "@/components/Puzzle";
import { getAllPuzzles } from "@/lib/getAllPuzzles";
import "@/styles/globals.css";

const Home = async () => {
  const puzzles: Promise<Puzzle[]> = await getAllPuzzles();
  const data: Puzzle[] = await puzzles;

  return (
    <main>
      {data.map((item, index) => {
        return (
          <Puzzle
            key={index}
            puzzledString={item.puzzledString}
            actualString={item.actualString}
            attempts={item.attempts}
            hint={item.hint}
          />
        );
      })}
    </main>
  );
};

export default Home;
