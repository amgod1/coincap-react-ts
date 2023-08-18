export const getPages = (): string[] =>
  JSON.parse(localStorage.getItem("pages") || "[]")
