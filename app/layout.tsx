import NavBar from "@/components/NavBar";
import { Metadata } from "next";
import React from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hangman",
    template: " %s | Hangman ",
  },
  description: "This is a game of guessing names",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
