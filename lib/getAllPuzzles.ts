export async function getAllPuzzles() {
  // const res = await fetch("/api/puzzle", {
  //   cache: "no-store",
  // });
  // if (!res.ok) {
  //   throw new Response("Failed to fetch puzzles", { status: 499 });
  // }
  // return res.json();
  const res = await import("../app/api/puzzle/route");
  return await (await res.GET()).json();
}
