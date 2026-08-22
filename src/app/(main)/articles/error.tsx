"use client";

import { ErrorState } from "@/components/articles/ArticleErrorState";

interface ArticlesErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function ArticlesError({ reset }: ArticlesErrorProps) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <ErrorState message="دریافت اطلاعات با خطا مواجه شد." onRetry={reset} />
    </main>
  );
}
