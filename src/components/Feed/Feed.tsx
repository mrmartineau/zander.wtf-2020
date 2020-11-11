import React, { FunctionComponent } from 'react'
import { Heading, Link, Box } from 'theme-ui'
import useRequest from '../../utils/useRequest'
// import { Separator } from '../Separator'
import { PinboardFeedListItem } from '../PinboardFeedListItem'

interface PinboardFeedProps {
  tag: string
  title?: string
  subtitle?: string
  count?: number
}

interface FeedResponse {
  records: {
    id: string
    fields: {
      Title: string
      URL: string
      Description: string
      Tags: string[]
      Date: Date
    }
    createdTime: Date
  }[]
}

export const Feed: FunctionComponent<PinboardFeedProps> = ({
  subtitle,
  tag,
  count = 10,
}) => {
  const FEED_PATH = `/api/airtable?tag=${tag}&count=${count}`
  const { data, error } = useRequest<FeedResponse>({
    url: FEED_PATH,
  })

  if (error) return <Box sx={{ textAlign: 'center', p: 4 }}>failed to load</Box>
  if (!data) return <Box sx={{ textAlign: 'center', p: 4 }}>loading...</Box>

  return (
    <Box>
      {!!subtitle && (
        <Heading>
          {subtitle}{' '}
          {/* <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${tag}`}>[i]</Link> */}
        </Heading>
      )}
      <Box
        as="ul"
        sx={{
          listStyleType: 'none',
        }}
      >
        {data.records.map(({ fields }, index) => {
          return (
            <PinboardFeedListItem
              key={`feedItem-${tag}-${index}`}
              tags={fields.Tags}
              url={fields.URL}
              title={fields.Title}
              desc={fields.Description}
            />
          )
        })}
      </Box>

      {/* <Box sx={{ p: 'padding' }}>
        <Separator sx={{ mt: 0 }} />
        <Link href={`${PINBOARD_PATH}u:MrMartineau/t:${tag}`}>
          See all{' '}
          <span role="img" aria-label="Right pointing hand emoji">
            👉
          </span>
        </Link>
      </Box> */}
    </Box>
  )
}
