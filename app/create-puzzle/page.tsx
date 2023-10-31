import CreatePuzzleForm from "@/components/CreatePuzzleForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Puzzle",
  description: "Create puzzle description",
};

const CreatePuzzle = () => {
  return (
    <main>
      <CreatePuzzleForm />
    </main>
  );
};

export default CreatePuzzle;
