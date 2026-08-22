"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import type { AcademicGroup, Article } from "@/types/articles";

import { ArticleControls } from "./ArticleControls";
import { ArticleEmptyState } from "./ArticleEmptyState";
import { ArticleList } from "./ArticleList";

type SortOrder = "newest" | "oldest";

interface ArticlesPageClientProps {
  articles: Article[];
}

const validAcademicGroups: AcademicGroup[] = [
  "elementary",
  "middle-school",
  "high-school",
  "konkur",
];

const validSortOrders: SortOrder[] = ["newest", "oldest"];

function isAcademicGroup(value: string | null): value is AcademicGroup {
  return value !== null && validAcademicGroups.includes(value as AcademicGroup);
}

function isSortOrder(value: string | null): value is SortOrder {
  return value !== null && validSortOrders.includes(value as SortOrder);
}

export function ArticlesPageClient({ articles }: ArticlesPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";

  const groupParam = searchParams.get("group");
  const group = isAcademicGroup(groupParam) ? groupParam : null;

  const sortParam = searchParams.get("sort");
  const sort: SortOrder = isSortOrder(sortParam) ? sortParam : "newest";

  function updateUrl(updates: {
    search?: string;
    group?: AcademicGroup | null;
    sort?: SortOrder;
  }) {
    const params = new URLSearchParams(searchParams.toString());

    if (updates.search !== undefined) {
      const value = updates.search.trim();

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
    }

    if (updates.group !== undefined) {
      if (updates.group) {
        params.set("group", updates.group);
      } else {
        params.delete("group");
      }
    }

    if (updates.sort !== undefined) {
      if (updates.sort === "newest") {
        params.delete("sort");
      } else {
        params.set("sort", updates.sort);
      }
    }

    const queryString = params.toString();

    router.replace(queryString ? `${pathname}?${queryString}` : pathname);
  }

  const filteredArticles = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("fa");

    const result = articles.filter((article) => {
      const matchesSearch =
        normalizedSearch === "" ||
        article.title.toLocaleLowerCase("fa").includes(normalizedSearch);

      const matchesGroup = group === null || article.academicGroup === group;

      return matchesSearch && matchesGroup;
    });

    return [...result].sort((a, b) => {
      const firstDate = new Date(a.publishedAt).getTime();
      const secondDate = new Date(b.publishedAt).getTime();

      return sort === "newest"
        ? secondDate - firstDate
        : firstDate - secondDate;
    });
  }, [articles, search, group, sort]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          مقالات آموزشی
        </h1>

        <p className="mt-2 text-base text-text-secondary">
          مقالات موردنیاز خود را جستجو و بر اساس گروه تحصیلی پیدا کنید.
        </p>

        <div className="mt-6">
          <ArticleControls
            search={search}
            group={group}
            sort={sort}
            onSearchChange={(value) => updateUrl({ search: value })}
            onGroupChange={(value) => updateUrl({ group: value })}
            onSortChange={(value) => updateUrl({ sort: value })}
          />
        </div>
      </header>

      {filteredArticles.length === 0 ? (
        <ArticleEmptyState />
      ) : (
        <ArticleList articles={filteredArticles} />
      )}
    </main>
  );
}
