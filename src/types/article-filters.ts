import type { AcademicGroup, Article } from "@/types/articles";

export type AcademicGroupFilter = AcademicGroup | "all";

export type ArticleSort = "newest" | "oldest";

export interface ArticleFilters {
  search: string;
  group: AcademicGroupFilter;
  sort: ArticleSort;
}
