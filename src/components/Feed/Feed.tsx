import React, { useEffect, useState } from 'react'
import { Box, Grid } from 'theme-ui'
import { PinboardFeedListItem } from '../PinboardFeedListItem'
import axios from 'axios'

interface FeedProps {
  title?: string
  subtitle?: string
  count?: number
  tag?: string
}

interface FeedResponse {
  body: {
    offset: number
    limit: number
    count: number
    _links: {
      next: string | null
      prev: string | null
    }
    data: Bookmark[]
  }
}

export interface Bookmark {
  title: string | null
  url: string | null
  description: string | null
  tags: string[] | null
  note: string | null
  star: boolean
  created_at: string
  modified_at: string
  key: string
  click_count: number
  type: BookmarkType
  image: string
  excerpt: string | null
}

export type BookmarkType =
  | 'link'
  | 'article'
  | 'video'
  | 'audio'
  | 'recipe'
  | 'image'
  | 'document'
  | 'product'
  | 'game'
  | 'note'
  | 'event'

export const Feed = ({ tag = 'zm:link', count = 50 }: FeedProps) => {
  const FEED_PATH = `/api/otter?tag=${tag}&count=${count}`
  const [likesData, setLikesData] = useState<Bookmark[]>([])

  useEffect(() => {
    const fetchLikes = async () => {
      const { data } = await axios.get<FeedResponse>(FEED_PATH)
      setLikesData(data.body.data)
    }
    fetchLikes()
  }, [])

  if (likesData?.length) {
    return (
      <Grid
        columns={1}
        gap={0}
        as="ul"
        sx={{
          listStyleType: 'none',
        }}
      >
        {likesData.map(({ key, ...rest }) => {
          return <PinboardFeedListItem key={`feedItem-${key}`} {...rest} />
        })}
      </Grid>
    )
  }
  return <Box sx={{ textAlign: 'center', p: 4 }}>loading...</Box>
}
