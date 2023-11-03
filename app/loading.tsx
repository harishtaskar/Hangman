"use client";
import React from "react";
import { ColorRing } from "react-loader-spinner";

const loading = () => {
  return (
    <main className="mt-20 flex items-center">
      <ColorRing
        colors={["black", "black", "black", "black", "black"]}
        visible={true}
        height="70"
        width="70"
      />
    </main>
  );
};

export default loading;
