import React, { FunctionComponent, useEffect, useState } from 'react'
import { Link, Box, Grid } from 'theme-ui'
import axios from 'axios'
import { PinboardFeedListItem } from '../PinboardFeedListItem'
import { Separator } from '../Separator'

interface PinboardFeedProps {
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
      Created: string
      Type: string
    }
    createdTime: Date
  }[]
}

export const Feed: FunctionComponent<PinboardFeedProps> = ({
  count = 50,
  link,
}) => {
  const FEED_PATH = `/api/airtable?count=${count}`
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
      <Grid
        columns={1}
        gap={0}
        as="ul"
        sx={{
          listStyleType: 'none',
        }}
      >
        {data.records.map(({ fields }, index) => {
          return (
            <PinboardFeedListItem
              key={`feedItem-${index}`}
              tags={fields.Tags}
              url={fields.URL}
              title={fields.Title}
              desc={fields.Description}
              date={fields.Created}
              type={fields.Type}
            />
          )
        })}
      </Grid>

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
