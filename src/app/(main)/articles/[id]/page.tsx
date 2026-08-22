import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getArticleById } from "@/lib/services/article.service";
import { ArticleDetail } from "@/components/articles/ArticleDetail";

interface ArticlePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;

  const article = await getArticleById(id);

  if (!article) {
    return {
      title: "مقاله پیدا نشد",
    };
  }

  return {
    title: article.title,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;

  const article = await getArticleById(id);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
