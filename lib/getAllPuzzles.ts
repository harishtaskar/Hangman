import { checkEnvironment } from "@/utils/checkEnviroments";

export async function getAllPuzzles() {
  const res = await fetch(`${checkEnvironment()}/api/puzzle/`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Response("Failed to fetch puzzles", { status: 499 });
  }
  return res.json();
}
