"use client";

import type { AcademicGroup } from "@/types/articles";

interface ArticleControlsProps {
  search: string;
  group: AcademicGroup | null;
  sort: "newest" | "oldest";
  onSearchChange: (value: string) => void;
  onGroupChange: (value: AcademicGroup | null) => void;
  onSortChange: (value: "newest" | "oldest") => void;
}

const academicGroups: {
  value: AcademicGroup | null;
  label: string;
}[] = [
  { value: null, label: "همه گروه‌ها" },
  { value: "elementary", label: "ابتدایی" },
  { value: "middle-school", label: "متوسطه اول" },
  { value: "high-school", label: "متوسطه دوم" },
  { value: "konkur", label: "کنکور" },
];

export function ArticleControls({
  search,
  group,
  sort,
  onSearchChange,
  onGroupChange,
  onSortChange,
}: ArticleControlsProps) {
  return (
    <section
      aria-label="فیلتر و مرتب‌سازی مقالات"
      className="grid gap-4 rounded-2xl border border-border bg-surface p-4 shadow-card sm:p-5 lg:grid-cols-[minmax(0,1fr)_220px_180px]"
    >
      <div>
        <label
          htmlFor="article-search"
          className="mb-2 block text-sm font-semibold text-text-primary"
        >
          جستجو
        </label>

        <input
          id="article-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="عنوان مقاله را جستجو کنید..."
          className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-text-primary outline-none transition-colors placeholder:text-text-muted focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
        />
      </div>

      <div>
        <label
          htmlFor="academic-group"
          className="mb-2 block text-sm font-semibold text-text-primary"
        >
          گروه تحصیلی
        </label>

        <select
          id="academic-group"
          value={group ?? ""}
          onChange={(event) => {
            const value = event.target.value as AcademicGroup | "";

            onGroupChange(value === "" ? null : value);
          }}
          className="h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm text-text-primary outline-none transition-colors focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
        >
          {academicGroups.map((academicGroup) => (
            <option
              key={academicGroup.value ?? "all"}
              value={academicGroup.value ?? ""}
            >
              {academicGroup.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="article-sort"
          className="mb-2 block text-sm font-semibold text-text-primary"
        >
          مرتب‌سازی
        </label>

        <select
          id="article-sort"
          value={sort}
          onChange={(event) => {
            onSortChange(event.target.value as "newest" | "oldest");
          }}
          className="h-11 w-full rounded-xl border border-border bg-surface px-3 text-sm text-text-primary outline-none transition-colors focus:border-primary-500 focus:ring-4 focus:ring-primary-100"
        >
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
        </select>
      </div>
    </section>
  );
}
