export interface SeoInterface {
  title: string
  description?: string
  opengraphTitle?: string
  opengraphDescription?: string
  opengraphImage?: string | null
  datePublished?: string
  slug?: string
}

export interface MetaInterface {
  name?: string
  content: string
  property?: string
  locales?: string[]
}

export interface MetaTagsProps {
  seoData?: SeoInterface
  extraMetatags?: MetaInterface[]
  lang?: string
  isArticle?: boolean
}
