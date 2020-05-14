import React, { FunctionComponent, Fragment } from 'react'
import { Heading, Link, Box, Text } from 'theme-ui'
import useRequest from '../../utils/useRequest'
import { Separator } from '../Separator'

interface FeedListItemProps {
  url: string
  title: string
  desc: string
  tags: string[]
}

const FeedListItem: FunctionComponent<FeedListItemProps> = ({
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
  )
}

const FEED_PATH = '/api/pinboard?tag='
const PINBOARD_PATH = 'https://pinboard.in/'

interface PinboardFeedProps {
  tag: string
  title?: string
  subtitle?: string
  count?: number
}

interface PinboardResponseItem {
  u: string
  d: string
  n: string
  dt: string
  a: string
  t: string[]
}

export const PinboardFeed: FunctionComponent<PinboardFeedProps> = ({
  subtitle,
  tag,
  count = 10,
}) => {
  const { data, error } = useRequest<PinboardResponseItem[]>({
    url: `${FEED_PATH}${tag}`,
  })

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const maxDisplayCount = count
  const newFeedList =
    data.length <= maxDisplayCount ? data : data.slice(0, maxDisplayCount)

  return (
    <Box>
      {!!subtitle && (
        <Heading>
          {subtitle}{' '}
          <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${tag}`}>[i]</Link>
        </Heading>
      )}
      <Box
        as="ul"
        sx={{
          listStyleType: 'none',
        }}
      >
        {newFeedList.map((item, index) => {
          return (
            <FeedListItem
              key={`feedItem-${index}`}
              tags={item.t}
              url={item.u}
              title={item.d}
              desc={item.n}
            />
          )
        })}
      </Box>

      <Box sx={{ p: 4 }}>
        <Separator sx={{ mt: 0 }} />
        <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${tag}`}>
          See all{' '}
          <span role="img" aria-label="Right pointing hand emoji">
            👉
          </span>
        </Link>
      </Box>
    </Box>
  )
}
