import Link from "next/link";

export default function ArticleNotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-3xl items-center justify-center px-4 py-12">
      <section className="w-full rounded-2xl border border-border bg-surface px-6 py-12 text-center shadow-card sm:px-10">
        <div
          aria-hidden="true"
          className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary-50 text-xl font-bold text-primary-600"
        >
          404
        </div>

        <h1 className="mt-5 text-2xl font-bold text-text-primary">
          مقاله پیدا نشد
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-text-secondary">
          مقاله‌ای که به دنبال آن هستید وجود ندارد یا ممکن است حذف شده باشد.
        </p>

        <Link
          href="/articles"
          className="mt-6 inline-flex rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          مشاهده مقالات
        </Link>
      </section>
    </main>
  );
}
