"use client";
import React, { useState } from "react";
import InputText from "./InputText";

type FormData = {
  hint: string;
  puzzle: string;
  attempts: number | undefined;
};

const CreatePuzzleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    hint: "",
    attempts: 3,
    puzzle: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => {
      return { ...prev, [name]: value };
    });
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-start w-full border m-2 border-gray-500 rounded-lg px-6 py-4 mt-10">
      <span className="text-3xl text-black pb-4 font-bold">Create Puzzle</span>
      <form
        action=""
        className="flex flex-col gap-4"
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
          name="puzzle"
          placeholder="a meaningfull word"
          value={formData?.puzzle}
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
        <div className="flex flex-row gap-4 w-full justify-end items-center">
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
