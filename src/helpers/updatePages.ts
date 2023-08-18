const PAGES = "pages"

export const updatePages = (pages: string[]) => {
  const currentPages: string[] = JSON.parse(localStorage.getItem(PAGES) || "[]")

  if (currentPages.length < pages.length) {
    localStorage.setItem(PAGES, JSON.stringify(pages))
  }
}
