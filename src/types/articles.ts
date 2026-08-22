export type AcademicGroup =
  | "elementary"
  | "middle-school"
  | "high-school"
  | "konkur";

export type SortOrder = "newest" | "oldest";

export interface Article {
  id: string;
  title: string;
  description: string;
  academicGroup: AcademicGroup;
  publishedAt: string;
  imageUrl: string | null;
}

export interface ArticleFilters {
  search: string;
  group: AcademicGroup | "all";
  sort: SortOrder;
}
