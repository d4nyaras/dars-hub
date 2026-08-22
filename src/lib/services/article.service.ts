import type { Article } from "@/types/articles";

const API_URL = process.env.APP_URL;

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${API_URL}/api/articles`);

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  return response.json();
}

export async function getArticleById(id: string): Promise<Article | null> {
  const response = await fetch(`${API_URL}/api/articles/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch article");
  }

  return response.json();
}
