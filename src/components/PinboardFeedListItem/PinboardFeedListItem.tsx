import React, { FunctionComponent, Fragment } from 'react'
import { Link, Box, Text } from 'theme-ui'

interface PinboardFeedListItemProps {
  url: string
  title: string
  desc: string
  tags: string[]
}

export const PinboardFeedListItem: FunctionComponent<PinboardFeedListItemProps> = ({
  url,
  title,
  desc,
  tags,
}) => {
  let urlString = url
  if ('URL' in window) {
    urlString = new URL(url).hostname
  }

  const filteredTags = tags.filter(item => {
    if (item === 'IFTTT' || item === 'TwitterLike' || item === 'Instapaper') {
      return false
    }
    return true
  })

  return (
    <li>
      <Link href={url} variant="pinboardListItemLink">
        <Text variant="pinboardListItemTitle">{title}</Text>
        {desc && <Text variant="pinboardListItemDescription">{desc}</Text>}
        <Box sx={{ mt: 1, display: 'flex' }}>
          <Text variant="pinboardListItemUrl">{urlString}</Text>{' '}
          {filteredTags.length && (
            <Fragment>
              <Box sx={{ mx: 2, opacity: 0.6 }}>•</Box>
              {filteredTags.map((item, index) => (
                <Fragment>
                  <Text
                    variant="pinboardListItemUrl"
                    key={`tag-${item}-${index}`}
                    sx={{ mr: 2 }}
                  >
                    #{item}
                  </Text>
                </Fragment>
              ))}
            </Fragment>
          )}
        </Box>
      </Link>
    </li>
  )
}
