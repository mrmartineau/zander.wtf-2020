import { ContentfulMetaSeoInterface } from '../../types/custom-contentful'

export interface MetaInterface {
  name?: string
  content: string
  property?: string
  locales?: string[]
}

export interface MetaTagsProps {
  seoData: ContentfulMetaSeoInterface
  extraMetatags?: MetaInterface[]
  lang?: string
}
