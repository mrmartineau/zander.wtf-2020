export interface SeoInterface {
  title: string
  description?: string
  opengraphTitle?: string
  opengraphDescription?: string
  opengraphImage?: string
  datePublished?: string
  dateModified?: string
  slug?: string
  canonical?: string
}

export interface MetaInterface {
  name?: string
  content: string
  property?: string
  locales?: string[]
}

export interface MetaTagsProps {
  seoData?: SeoInterface
  lang?: string
  isArticle?: boolean
}
