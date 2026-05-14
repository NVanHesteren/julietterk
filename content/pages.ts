import { AgeKey } from "@/lib/ages";

export interface PageSection {
  /** [headingFull, emphasisedSubstring, trailingText] */
  h: [string, string, string];
  /** body HTML - paragraphs, lists, callouts */
  b: string;
}

export interface PageFaq {
  q: string;
  a: string;
}

export interface ServicePage {
  age: AgeKey;
  img: string;
  /** [pre, emphasisedTitle, post] */
  title: [string, string, string];
  lead: string;
  sections: PageSection[];
  faqs: PageFaq[];
  related: string[];
}

import { infantPages } from "./infant-pages";
import { childPages } from "./child-pages";
import { teenPages } from "./teen-pages";

export const pages: Record<string, ServicePage> = {
  ...infantPages,
  ...childPages,
  ...teenPages,
};

export const pageSlugs = Object.keys(pages);
