interface ErrorStateProps {
  message: string;
  onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <section
      role="alert"
      className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-12 text-center"
    >
      <div
        aria-hidden="true"
        className="mb-4 flex size-14 items-center justify-center rounded-full bg-white text-xl text-red-600 shadow-sm"
      >
        !
      </div>

      <h2 className="text-lg font-bold text-text-primary">
        مشکلی پیش آمده است
      </h2>

      <p className="mt-2 max-w-md text-sm leading-7 text-text-secondary">
        {message}
      </p>

      <button
        type="button"
        onClick={onRetry}
        className="mt-6 rounded-xl bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 active:bg-primary-700"
      >
        تلاش مجدد
      </button>
    </section>
  );
}
