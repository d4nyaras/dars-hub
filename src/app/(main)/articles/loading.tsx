import { ArticleListSkeleton } from "@/components/articles/ArticleListSkeleton";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <header className="mb-8">
        <div className="h-10 w-48 animate-pulse rounded-lg bg-surface-muted" />

        <div className="mt-3 h-5 w-80 max-w-full animate-pulse rounded-md bg-surface-muted" />
      </header>

      <ArticleListSkeleton />
    </main>
  );
}
