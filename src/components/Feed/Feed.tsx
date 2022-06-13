import React from 'react'
import { Box, Grid } from 'theme-ui'
import useAxios from 'axios-hooks'
import { PinboardFeedListItem } from '../PinboardFeedListItem'

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
  const [{ data, loading, error }] = useAxios<FeedResponse>(FEED_PATH)
  // const [data, setData] = useLocalStorageState<Bookmark[]>('zm-links', {
  //   ssr: true,
  //   defaultValue: [],
  // })
  // const [error, setError] = useState<any>()

  // useEffect(() => {
  //   axios
  //     .get<any, FeedResponse>(FEED_PATH)
  //     .then(({ data }) => {
  //       console.log(`🚀 ~ useEffect ~ data`, data.body.data)
  //       setData(data)
  //     })
  //     .catch(error => {
  //       setError(error)
  //     })
  // }, [])

  if (error) {
    return <Box sx={{ textAlign: 'center', p: 4 }}>failed to load</Box>
  }
  if (loading) {
    return <Box sx={{ textAlign: 'center', p: 4 }}>loading...</Box>
  }
  // return (
  //   <Box sx={{ textAlign: 'center', p: 4 }}>
  //     {JSON.stringify(data.body.data, null, 2)}
  //   </Box>
  // )
  return (
    <Grid
      columns={1}
      gap={0}
      as="ul"
      sx={{
        listStyleType: 'none',
      }}
    >
      {data?.body?.data.map(({ key, ...rest }) => {
        return <PinboardFeedListItem key={`feedItem-${key}`} {...rest} />
      })}
    </Grid>
  )
}
