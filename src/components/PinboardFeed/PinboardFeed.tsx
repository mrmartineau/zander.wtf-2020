import React, { FunctionComponent } from 'react'
import { Heading, Link, Box } from 'theme-ui'
import useRequest from '../../utils/useRequest'
import { Separator } from '../Separator'
import { PinboardFeedListItem } from '../PinboardFeedListItem'

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

  if (error) return <Box sx={{ textAlign: 'center', p: 4 }}>failed to load</Box>
  if (!data) return <Box sx={{ textAlign: 'center', p: 4 }}>loading...</Box>

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
            <PinboardFeedListItem
              key={`feedItem-${tag}-${index}`}
              tags={item.t}
              url={item.u}
              title={item.d}
              desc={item.n}
            />
          )
        })}
      </Box>

      <Box sx={{ p: 'padding' }}>
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
