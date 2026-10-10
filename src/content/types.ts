// Content model shared by posts, white papers and the pages that render them.
//
// Inline text (paragraphs, list items, table cells, quotes, footnotes) supports a
// small markup subset, rendered by src/site/Inline.tsx:
//   **bold**   *italic*   `code`   [label](https://url)   [^1] (footnote ref)

export type Tag =
  | 'Agentic AI'
  | 'Evals'
  | 'Supply Chain AI'
  | 'LLMs'
  | 'Research notes'
  | 'Cybersecurity';

export type PostKind = 'Essay' | 'Lesson' | 'Case study' | 'Guide';

export type Block =
  | { t: 'h2'; id: string; text: string }
  | { t: 'h3'; text: string }
  | { t: 'p'; text: string }
  | { t: 'list'; items: string[]; ordered?: boolean }
  | { t: 'code'; code: string; lang?: string; file?: string }
  | { t: 'mermaid'; code: string; label: string; caption?: string }
  | { t: 'table'; head: string[]; rows: string[][]; numeric?: boolean[]; caption?: string }
  | { t: 'quote'; text: string }
  | { t: 'callout'; text: string; title?: string }
  | { t: 'video'; src: string; poster?: string; title: string; caption?: string }
  | { t: 'figure'; src: string; alt: string; caption?: string };

export interface Post {
  slug: string;
  title: string;
  /** ISO date, YYYY-MM-DD */
  date: string;
  tag: Tag;
  /** Extra topics shown in the post meta row */
  topics?: string[];
  mins: number;
  kind: PostKind;
  /** Part of the "365 Days of AI Lessons" series */
  series?: boolean;
  summary?: string;
  /** Full text. Posts without a body render their summary only. */
  body?: Block[];
  footnotes?: string[];
  /** Old /blog/:id identifier, kept so old links redirect */
  legacyId?: string;
}

export interface PaperSection {
  id: string;
  n: string;
  title: string;
  paras: string[];
}

export interface WhitePaper {
  slug: string;
  no: string;
  title: string;
  subtitle: string;
  date: string;
  pages: number;
  topics: string[];
  abstract: string;
  findings?: string[];
  sections?: PaperSection[];
  /** Path under /public when a PDF exists */
  pdf?: string;
  bibtex?: string;
}

export type PubStatus = 'Published' | 'Under review' | 'Patent pending';

export interface Publication {
  year: number;
  /** Short venue label for the cinematic list, e.g. "BigData 24" */
  venueShort: string;
  title: string;
  short?: string;
  desc: string;
  venue: string;
  status: PubStatus;
  note?: string;
  links: { label: string; href: string }[];
  noLinks?: string;
}
