import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/articles";
import { formatArticleDate, getAcademicGroupLabel } from "@/lib/utils/article";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <Link
        href={`/articles/${article.id}`}
        className="flex h-full flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-muted">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              role="img"
              aria-label="تصویری برای این مقاله موجود نیست"
              className="flex h-full items-center justify-center text-sm text-text-muted"
            >
              تصویری برای این مقاله موجود نیست
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
            {getAcademicGroupLabel(article.academicGroup)}
          </span>

          <h2 className="mt-4 line-clamp-2 text-lg font-bold leading-8 text-text-primary transition-colors group-hover:text-primary-600">
            {article.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-7 text-text-secondary">
            {article.description}
          </p>

          <time
            dateTime={article.publishedAt}
            className="mt-auto pt-5 text-xs text-text-muted"
          >
            {formatArticleDate(article.publishedAt)}
          </time>
        </div>
      </Link>
    </article>
  );
}
