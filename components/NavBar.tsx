import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <main className="bg-slate-50 py-4 drop-shadow-sm sticky">
      <nav className="flex flex-row justify-between items-center w-full">
        <Link href={"/"} className="head_text">
          Hangman
        </Link>
        <Link href={"/create-puzzle"}>
        <button className="btn_primary">Create</button>
        </Link>
      </nav>
    </main>
  );
};

export default NavBar;
