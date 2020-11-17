import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link, Box } from 'theme-ui'
import axios from 'axios'
import { PinboardFeedListItem } from '../PinboardFeedListItem'
import { Separator } from '../Separator'

interface PinboardFeedProps {
  tag: string
  title?: string
  subtitle?: string
  count?: number
  link?: string
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
  tag,
  count = 10,
  link,
}) => {
  const FEED_PATH = `/api/airtable?tag=${tag}&count=${count}`
  const [data, setData] = useState<FeedResponse>()
  const [error, setError] = useState<any>()

  useEffect(() => {
    axios({
      url: FEED_PATH,
      method: 'GET',
    })
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        setError(error)
      })
  }, [])

  if (error) return <Box sx={{ textAlign: 'center', p: 4 }}>failed to load</Box>
  if (!data) return <Box sx={{ textAlign: 'center', p: 4 }}>loading...</Box>

  return (
    <Box>
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

      {link && (
        <Box sx={{ p: 'padding' }}>
          <Separator sx={{ mt: 0 }} />
          <Link href={link}>
            See all{' '}
            <span role="img" aria-label="Right pointing hand emoji">
              👉
            </span>
          </Link>
        </Box>
      )}
    </Box>
  )
}
