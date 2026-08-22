import Image from "next/image";
import Link from "next/link";

import type { Article } from "@/types/articles";
import { formatArticleDate, getAcademicGroupLabel } from "@/lib/utils/article";

interface ArticleDetailProps {
  article: Article;
}

export function ArticleDetail({ article }: ArticleDetailProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-primary-600"
      >
        <span aria-hidden="true">→</span>
        بازگشت به مقالات
      </Link>

      <article className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
        <div className="relative aspect-[16/9] w-full bg-surface-muted">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          ) : (
            <div
              role="img"
              aria-label="تصویر برای این مقاله موجود نیست"
              className="flex h-full items-center justify-center text-sm text-text-muted"
            >
              تصویری برای این مقاله موجود نیست
            </div>
          )}
        </div>

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
              {getAcademicGroupLabel(article.academicGroup)}
            </span>

            <time
              dateTime={article.publishedAt}
              className="text-sm text-text-muted"
            >
              {formatArticleDate(article.publishedAt)}
            </time>
          </div>

          <h1 className="mt-5 text-2xl font-bold leading-10 text-text-primary sm:text-3xl sm:leading-[1.8] lg:text-4xl">
            {article.title}
          </h1>

          <div className="mt-8 border-t border-border pt-8">
            <p className="text-base leading-8 text-text-secondary sm:text-lg sm:leading-9">
              {article.description}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
