import { ArticlesPageClient } from "@/components/articles/ArticlesPageClient";
import { getArticles } from "@/lib/services/article.service";

export default async function ArticlesPage() {
  const articles = await getArticles();

  return <ArticlesPageClient articles={articles} />;
}
