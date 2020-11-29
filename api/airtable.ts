import { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

export default async (req: NowRequest, res: NowResponse) => {
  const requestPath = `https://api.airtable.com/v0/appaU6WzgLaVQp5xt/bookmarks?fields%5B%5D=Title&fields%5B%5D=URL&fields%5B%5D=Description&fields%5B%5D=Tags&fields%5B%5D=Created&fields%5B%5D=Type&sort%5B0%5D%5Bfield%5D=Created&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=${req.query.count}`
  const { data } = await axios(requestPath, {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}` },
  })
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.send(data)
}
