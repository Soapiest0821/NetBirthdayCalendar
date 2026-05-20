export async function getUser() {
  const res = await fetch("/api/user", {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("서버 오류 in api/user.ts");
  }

  return res.json();
}
