import type { IDevToArticle } from "@/types";

export async function fetchBlogEntries(): Promise<IDevToArticle[]> {
  const BASE_DEV_TO_ARTICLES_FROM_USERNAME_URL: string =
    "https://dev.to/api/articles?username=";
  const DEV_TO_USERNAME: string = "franciscolunadev82";

  const res = await fetch(
    `${BASE_DEV_TO_ARTICLES_FROM_USERNAME_URL}${DEV_TO_USERNAME}`
  );

  if (!res.ok) {
    throw new Error("Failed to retrieve articles from user in dev.to");
  }

  return res.json();
}
