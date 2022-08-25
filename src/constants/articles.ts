export interface Article {
  source: {
    id: string | number | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string | undefined;
  urlToImage: string | undefined | null;
  publishedAt: string;
  content: string | null;
}

export interface Articles {
  status: string;
  totalResults: number;
  articles: Article[];
}
