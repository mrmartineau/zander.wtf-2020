import React, { FunctionComponent, Fragment } from 'react'
import { Link, Box, Text, Grid } from 'theme-ui'
import { format } from 'date-fns'

interface PinboardFeedListItemProps {
  url: string
  title: string
  desc: string
  tags: string[]
  date: string
  type: string
}

export const PinboardFeedListItem: FunctionComponent<PinboardFeedListItemProps> = ({
  url,
  title,
  desc,
  tags,
  date,
  type,
}) => {
  let urlString = url
  if ('URL' in window) {
    urlString = new URL(url).hostname.replace('www.', '')
  }
  let filteredTags: string[] = []

  if (tags?.length > 0) {
    filteredTags = tags.filter(item => {
      if (
        [
          'IFTTT',
          'TwitterLike',
          'Instapaper',
          'Link',
          'Reading',
          'zm:link',
        ].includes(item)
      ) {
        return false
      }
      return true
    })
  }

  return (
    <Link href={url} variant="pinboardListItemLink">
      <Grid columns="1rem 1fr" gap="padding">
        <Box sx={{ position: 'relative' }}>
          <Text variant="verticalTag">{type}</Text>
        </Box>
        <Box>
          <Text variant="pinboardListItemTitle" className="feedBit">
            {title}
          </Text>
          {desc && (
            <Text variant="pinboardListItemDescription" className="feedBit">
              {desc}
            </Text>
          )}
          <Text
            variant="pinboardListItemUrl"
            sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', fontSize: 0 }}
          >
            {urlString}
            {filteredTags.length > 0 && (
              <Fragment>
                <Box sx={{ ml: 2 }}>•</Box>
                {filteredTags.map((item, index) => (
                  <Fragment key={index}>
                    <Text key={`tag-${item}-${index}`} sx={{ ml: 2 }}>
                      #{item}
                    </Text>
                  </Fragment>
                ))}
              </Fragment>
            )}
            <Box sx={{ mx: 2 }}>•</Box>
            {format(new Date(date), 'PPP')}
          </Text>
        </Box>
      </Grid>
    </Link>
  )
}
