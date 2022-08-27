export interface TrendingArticles {
  _type: string,
  value: TrendingArticle[]
}

export interface TrendingArticle {
  _type: string,
  webSearchUrl: string,
  name: string,
  image: {
    _type: string,
    url: string,
    provider: Array<{
      _type: string,
      name: string
    }>
  },
  isBreakingNews: boolean,
  query: {
    _type: string,
    text: string
  },
  newsSearchUrl: string
}
