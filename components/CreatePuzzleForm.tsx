"use client";
import React, { useState } from "react";
import InputText from "./InputText";
import { useRouter } from "next/navigation";

type FormData = {
  hint: string;
  actualString: string;
  attempts: number | undefined;
};

const CreatePuzzleForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    hint: "",
    attempts: 3,
    actualString: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const puzzledString: string[] = formData.actualString
      .split("")
      .map((word, index) => {
        if (index % 2 !== 0) {
          return "undefined";
        }
        return word;
      });

    try {
      const response = await fetch("/api/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          actualString: formData.actualString,
          puzzledString: puzzledString,
          hint: formData.hint,
          attempts: formData.attempts,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-start w-full border m-2 border-gray-500 rounded-xl sm:rounded-lg sm:px-6 sm:py-4 px-4 py-5 mt-4 sm:mt-6">
      <span className="text-3xl text-black pb-4 font-bold">Create Puzzle</span>
      <form
        action=""
        className="flex flex-col gap-2 sm:gap-4"
        onSubmit={onSubmitHandler}
      >
        <InputText
          inputype="text"
          label="Puzzle Hint"
          name="hint"
          placeholder="Movies, Celebrity, etc"
          value={formData?.hint}
          onChange={onChange}
        />
        <InputText
          inputype="text"
          label="Puzzle"
          name="actualString"
          placeholder="a meaningfull word"
          value={formData?.actualString}
          onChange={onChange}
        />
        <InputText
          inputype="number"
          label="Attempts"
          name="attempts"
          value={formData?.attempts}
          placeholder="number of attempts to this puzzle"
          onChange={onChange}
        />
        <div className="flex flex-col-reverse sm:flex-row gap-2 w-full justify-end items-center mt-2">
          <button className="btn_primary">Reset</button>
          <button type="submit" className="btn_primary_filled">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePuzzleForm;
