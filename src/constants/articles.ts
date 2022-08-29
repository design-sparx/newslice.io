export interface Article {
  _type: string,
  name: string,
  url: string,
  image?: Image,
  description: string,
  provider: Provider[],
  datePublished: string
  about?: Array<{
    _type: string
    readLink: string
    name: string
  }>,
  mentions?: Array<{
    _type: string
    name: string
  }>,
  category?: string
}

export interface Articles {
  _type: string,
  webSearchUrl: string,
  value: Article[]
}

export interface Provider {
  _type: string,
  name: string,
  image?: {
    _type: string,
    thumbnail: ProviderThumbnail
  }
}

export interface ProviderThumbnail {
  _type: string,
  contentUrl: string,
}

export interface Image {
  _type: string,
  thumbnail: ImageThumbnail
  isLicensed?: boolean
}

export interface ImageThumbnail {
  _type?: string,
  contentUrl?: string,
  width?: number,
  height?: number
}
