import Puzzle from "@/components/Puzzle";
import "@/styles/globals.css";

const Data = [
  {
    puzzledString: [
      "J",
      "undefined",
      "v",
      "undefined",
      "undefined",
      "c",
      "undefined",
      "undefined",
      "p",
      "t",
    ],
    actualString: "Javascript",
    attempts: 3,
    hint: "Programming Language",
  },
  {
    puzzledString: ["S", "undefined", "n", "undefined", "undefined", "a", "m"],
    actualString: "Singham",
    attempts: 5,
    hint: "Movie",
  },
];

const Home = () => {
  return (
    <main>
      {Data.map((item, index) => {
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
