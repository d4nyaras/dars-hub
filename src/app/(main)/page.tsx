import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
      <section className="w-full max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-700">
          محتوای آموزشی
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
          یادگیری بهتر، با محتوای درست
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text-secondary sm:text-lg">
          مجموعه‌ای از مقالات آموزشی رایگان برای دانش‌آموزان در مقاطع و گروه‌های
          تحصیلی مختلف. موضوع موردنظر خود را پیدا کنید و یادگیری را شروع کنید.
        </p>

        <div className="mt-8">
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-100"
          >
            مشاهده مقالات
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
