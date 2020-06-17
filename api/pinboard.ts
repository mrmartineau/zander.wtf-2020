import { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

export default async (req: NowRequest, res: NowResponse) => {
  const requestPath = `https://feeds.pinboard.in/json/u:MrMartineau/t:${req.query.tag}/?count=10`
  const { data } = await axios(requestPath)
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(data)
}
