import type { Article } from "@/types/articles";
import { ArticleCard } from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <section
      aria-label="مقالات آموزشی"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
