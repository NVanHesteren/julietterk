export type AgeKey = "infant" | "child" | "teen";

export const AGE: Record<AgeKey, { label: string; short: string; best: string }> = {
  infant: { label: "Infant · 0 to 1 year",   short: "Infant", best: "Infants 0 to 12 months" },
  child:  { label: "Child · 1 to 12 years",  short: "Child",  best: "Children 1 to 12" },
  teen:   { label: "Adolescent · 13 to 18 years", short: "Teen", best: "Teens 13 to 18" },
};
