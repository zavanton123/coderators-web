export interface Snippet {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: Array<string>;
  author: string;
  published_at: Date;
  updated_at: Date
}