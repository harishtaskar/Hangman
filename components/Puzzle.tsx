"use client";
import React, { useState } from "react";

type Props = {
  actualString: string;
  puzzledString: string[] | undefined[];
  attempts: number;
  hint: string;
};

const Puzzle = (puzzle: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [correctWord, setCorrectWord] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [tempResult, setTempResult] = useState<string>("");
  const onHandleChange = (index: number, input: string) => {
    if (puzzle.actualString[index] === input && puzzle.attempts > 0) {
      setTempResult("correct");
      setTimeout(() => {
        setTempResult("");
      }, 2000);
      puzzle?.puzzledString?.splice(index, 1, input);
      if (
        puzzle.actualString.toLowerCase() ===
        puzzle.puzzledString?.join("").toLowerCase()
      ) {
        setResult("finished");
        setCorrectWord(puzzle.actualString);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      }
    } else {
      if (puzzle.attempts <= 0) {
        setResult("unfinished");
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      } else {
        if (input !== "") {
          setTempResult("wrong");
          setTimeout(() => {
            setTempResult("");
            puzzle?.puzzledString?.splice(index, 1, "undefined");
          }, 1000);
          puzzle.attempts -= 1;
        }
      }
    }
  };

  return (
    <div
      className={`flex flex-col justify-between w-full border sm:m-2 m-1 border-gray-500 sm:rounded-xl rounded-lg px-3 py-2 sm:px-6 sm:py-4 transition-all ${
        result === "finished" && "bg-green-200"
      } ${result === "unfinished" && "bg-red-200"}`}
    >
      {visible ? (
        <div className="flex flex-col justify-between">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setVisible((prev) => !prev)}
          >
            <span className="secondary_text">Guess the Word</span>
            <span className="text-black sm:text-lg text-sm mr-2 sm:mr-4 font-medium">
              Attempts left : {puzzle.attempts}
            </span>
          </div>
          <div className="flex flex-row justify-center items-center w-full max-h-full gap-4 my-20">
            {puzzle.puzzledString?.map((latter, index) => {
              if (latter === "undefined") {
                return (
                  <input
                    key={index}
                    type="text"
                    value={
                      (puzzle.puzzledString[index] === "undefined" &&
                        undefined) ||
                      ""
                    }
                    className="text-3xl text-black font-bold w-8 text-center border border-black rounded-md outline-none"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onHandleChange(index, e.target.value)
                    }
                  />
                );
              } else {
                return (
                  <span key={index} className="text-3xl text-black font-bold">
                    {latter}
                  </span>
                );
              }
            })}
          </div>
          <div className="flex justify-between items-center cursor-pointer">
            <span className="sm:text-lg text-base text-slate-600">
              Hint : {puzzle.hint || "No hint"}
            </span>
            {tempResult === "correct" && (
              <span className="text-xl text-green-500 font-medium">
                Correct Word
              </span>
            )}
            {tempResult === "wrong" && (
              <span className="text-xl text-red-500 font-medium">
                Wrong Word
              </span>
            )}
          </div>
        </div>
      ) : (
        <span
          className="secondary_text cursor-pointer "
          onClick={() => setVisible((prev) => !prev)}
        >
          {puzzle.hint}{" "}
          <span className="text-base sm:text-xl text-black underline">
            {correctWord}
          </span>
        </span>
      )}
    </div>
  );
};

export default Puzzle;
