export async function getAllPuzzles() {
  //   const res = await fetch("/api/puzzle/");
  //   if (!res.ok) {
  //     throw new Response("Failed to fetch puzzles", { status: 499 });
  //   }
  const res = await import("../app/api/puzzle/route");
  return await (await res.GET()).json();
}
