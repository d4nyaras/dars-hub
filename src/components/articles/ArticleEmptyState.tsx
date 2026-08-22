export function ArticleEmptyState() {
  return (
    <section
      aria-live="polite"
      className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface px-6 py-12 text-center shadow-card"
    >
      <div
        aria-hidden="true"
        className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary-50 text-2xl"
      >
        ?
      </div>

      <h2 className="text-lg font-bold text-text-primary">مقاله‌ای پیدا نشد</h2>

      <p className="mt-2 max-w-md text-sm leading-7 text-text-secondary">
        با تغییر عبارت جستجو یا فیلترهای انتخاب‌شده، دوباره امتحان کنید.
      </p>
    </section>
  );
}
