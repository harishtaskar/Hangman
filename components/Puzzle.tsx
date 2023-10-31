"use client";
import React, { useState } from "react";

type Props = {
  actualString: string;
  puzzledString: any[];
  attempts: number;
  hint: string;
};

const Puzzle = (puzzle: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [style, setStyle] = useState({});
  const [inputValue, setInputValue] = useState<string[]>([]);
  const onHandleChange = (index: number, input: string) => {
    if (puzzle.actualString[index] === input) {
      inputValue.splice(index, 0, input);
      console.log(inputValue);
    } else {
      setTimeout(() => {
        inputValue.pop();
        setStyle({});
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col justify-between w-full border m-2 border-gray-500 rounded-2xl px-6 py-4">
      {visible ? (
        <div className="flex flex-col justify-between h-96">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setVisible((prev) => !prev)}
          >
            <span className="secondary_text">Guess the Word</span>
            <span className="text-black text-lg mr-4">
              Attempts left : {puzzle.attempts}
            </span>
          </div>
          <div className="flex flex-row justify-center items-center w-full max-h-full gap-4">
            {puzzle.puzzledString?.map((latter, index) => {
              if (latter === "undefined") {
                return (
                  <input
                    key={index}
                    value={inputValue[index]}
                    type="text"
                    className="text-3xl text-black font-bold w-8 text-center border border-black rounded-md"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onHandleChange(index, e.target.value)
                    }
                    style={style}
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
          <span className="text-lg text-slate-600">
            Hint : {puzzle.hint || "No hint"}
          </span>
        </div>
      ) : (
        <span
          className="secondary_text cursor-pointer"
          onClick={() => setVisible((prev) => !prev)}
        >
          {puzzle.hint}
        </span>
      )}
    </div>
  );
};

export default Puzzle;
