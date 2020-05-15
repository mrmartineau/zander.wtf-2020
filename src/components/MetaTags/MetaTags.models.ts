export interface SeoInterface {
  title: string
  description?: string
  opengraphTitle?: string
  opengraphDescription?: string
  opengraphImage?: string | null
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
}
