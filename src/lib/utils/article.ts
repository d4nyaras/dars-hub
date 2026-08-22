import type { AcademicGroup } from "@/types/articles";

const academicGroupLabels: Record<AcademicGroup, string> = {
  elementary: "ابتدایی",
  "middle-school": "متوسطه اول",
  "high-school": "متوسطه دوم",
  konkur: "کنکور",
};

export function getAcademicGroupLabel(group: AcademicGroup): string {
  return academicGroupLabels[group];
}

export function formatArticleDate(date: string): string {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
