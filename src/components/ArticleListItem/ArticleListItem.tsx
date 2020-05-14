import React, { FunctionComponent } from 'react'
import { Heading, Text } from 'theme-ui'
import { StyledGatsbyLink } from '../StyledGatsbyLink'

interface ArticleListItemProps {
  title: string
  subtitle: string
  date: string
  slug: string
}

export const ArticleListItem: FunctionComponent<ArticleListItemProps> = ({
  slug,
  title,
  subtitle,
  date,
}) => {
  return (
    <StyledGatsbyLink
      to={`/writing/${slug}`}
      sx={{ variant: 'links.articleListItem' }}
    >
      <Text variant="articleListItemMetadata">{date}</Text>
      <Heading variant="articleListItemTitle" as="h3">
        {title}
      </Heading>
      <Text variant="articleListItemSubtitle">{subtitle}</Text>
    </StyledGatsbyLink>
  )
}
