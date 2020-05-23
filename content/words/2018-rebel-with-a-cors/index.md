---
slug: rebel-with-a-cors
title: Rebel with a CORS
subtitle: How to make your own simple CORS-enabled API from one that has CORS disabled
date: 2018-02-14
modified: 2020-05-21
---

As a front-end developer, I often consume various 3rd party APIs while developing. These APIs could be for weather, crypto currency prices or the latest XKCD comic.

The problem with some of them is that they do not support cross-origin requests (CORS), which means that client-side AJAX calls to these services do not work. This is frustrating but can easily be fixed with the help of a few lines of code in your own micro-service.

### Creating the micro-service

All you need to create a simple micro-service is a package called [_micro_](https://github.com/zeit/micro). It is a very simple package that enables the creation of asynchronous micro-services, and if you read the project's readme, you'll see that a simple service can be created with no more than a few lines:

```js
module.exports = (req, res) => {
  res.end('Hello world')
}
```

Obviously the above is completely useless, but let me show how easy it is to consume almost any API, at least any API that didn't need authentication, using micro.

From [comic #1810](https://xkcd.com/1810/)

For this example, I'll use the free API from the [XKCD comic](https://xkcd.com/), which cannot be used in AJAX calls on the client-side because CORS is disabled. Calling the url [https://xkcd.com/info.0.json](https://xkcd.com/info.0.json) returns the latest comic, like so:

```json
{
  "month": "2",
  "num": 1954,
  "link": "",
  "year": "2018",
  "news": "",
  "safe_title": "Impostor Syndrome",
  "transcript": "",
  "alt": "It's actually worst in people who study the Dunning-Kruger effect. We tried to organize a conference on it, but the only people who would agree to give the keynote were random undergrads.",
  "img": "https://imgs.xkcd.com/comics/impostor_syndrome.png",
  "title": "Impostor Syndrome",
  "day": "12"
}
```

And it can return a specific comic if passed the correct comic ID ([https://xkcd.com/1500/info.0.json](https://xkcd.com/1500/info.0.json)):

```json
{
  "month": "3",
  "num": 1500,
  "link": "",
  "year": "2015",
  "news": "",
  "safe_title": "Upside-Down Map",
  "transcript": "((A mercator projection of the world map is shown. All the continents have been rotated one hundred eighty degrees.))\\n\\n((Cuba is next to alaska, and alaska is touching the tip of south america, which is all near the equator. Mexico is now friends with greenland.\\n\\n((Iceland, the UK, and asia are all close together. Japan and Taiwan haven't moved with the asian continent, and are technically European.))\\n\\n((Siberia is now equatorial. Africa is pretty temperate, except for the north bits which are somewhat antarctic.))\\n\\nCaption: This upside-down map will change your perspective on the world!\\n\\n{{Title text: Due to their proximity across the channel, there's long been tension between North Korea and the United Kingdom of Great Britain and Southern Ireland.}}",
  "alt": "Due to their proximity across the channel, there's long been tension between North Korea and the United Kingdom of Great Britain and Southern Ireland.",
  "img": "https://imgs.xkcd.com/comics/upside_down_map.png",
  "title": "Upside-Down Map",
  "day": "18"
}
```

All the micro-service needs to do is to pass-through any requests to the original API and set a few headers to allow for cross-origin requests so that they can be used in AJAX calls on the client-side, like so:

```js
const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: ['GET'] })
const DOMAIN = 'https://xkcd.com/'

const handler = async function(req, res) {
  const params = req.url
  const path = `${DOMAIN}${params}`
  const response = await axios(path)
  send(res, 200, response.data)
}

module.exports = cors(handler)
```

That's 14 lines of code!

The example above passes any slug information into the API (e.g. `1000/0.json`), so calling https://xkcd.now.sh/1000/0.json (my version of the API), would map to https://xkcd.com/1000/0.json. This could be the end of our journey, but I’d like to improve the API UX a bit by changing the endpoints:

- **xkcd.now.sh** should return the latest comic
- **xkcd.now.sh/1000** should return comic ID 1000

See below on how to achieve that:

```js
const axios = require('axios')
const { send } = require('micro')
const microCors = require('micro-cors')
const cors = microCors({ allowMethods: \['GET'\] })
const DOMAIN = 'https://xkcd.com/'
const PATH = 'info.0.json'
const handler = async function(req, res) {
  let id = req.url.replace('/', '')
  const comicId = id ? `${id}/` : ''
  const path = `${DOMAIN}${comicId}${PATH}`
  const response = await axios(path)
  id = response.data.num
  let newResponse
  if (id >= 1084) {
    newResponse = {
        ...response.data,
        imgRetina: `${response.data.img.replace('.png', '')}_2x.png`,
      }
    } else {
      newResponse = {
      ...response.data,
    }
  }
  send(res, 200, newResponse)
}

module.exports = cors(handler)
```

That's 29 lines of code! See it [here](https://github.com/mrmartineau/xkcd-api/blob/master/index.js) 👀

You can see above that beyond _micro_, there are two other packages that the service relies on:

- [_axios_](https://github.com/axios/axios) for the HTTP requests
- [_micro-cors_](https://github.com/possibilities/micro-cors) is a simple CORS for micro

My example with the XKCD API returns all of the original data and actually changes the response data slightly as well as how the API is consumed. I decided to add the retina image path (if there is one) as well as simplify the call to the API. So instead of calling xkcd.com/1894/info.0.json you can call xkcd.now.sh/1894.

So, for example: calling [https://xkcdapi.now.sh/1894](https://xkcdapi.now.sh/1894) would request this URL from the original XKCD API: [https://xkcd.com/1894/info.0.json](https://xkcd.com/1894/info.0.json).

```json
{
  "month": "9",
  "num": 1894,
  "link": "",
  "year": "2017",
  "news": "",
  "safe_title": "Real Estate",
  "transcript": "",
  "alt": "I tried converting the prices into pizzas, to put it in more familiar terms, and it just became a hard-to-think-about number of pizzas.",
  "img": "https://imgs.xkcd.com/comics/real_estate.png",
  "title": "Real Estate",
  "day": "25",
  "imgRetina": "https://imgs.xkcd.com/comics/real_estate_2x.png"
}
```

The code for this service is hosted on GitHub at [https://github.com/mrmartineau/xkcd-api](https://github.com/mrmartineau/xkcd-api) and can be tested using Postman [here](https://www.getpostman.com/collections/2254fd6b4db3e7345ddd).

### Hosting your new API

I use [_now_](https://vercel.com/now) by [_Vercel_](https://vercel.com) to host my various apps and APIs. _now_ supports the JavaScript language features that this micro-service requires (async/await) as well as HTTPS out of the box. If your hosting does not support these features, you will need to transpile the code back to a version it does support.

From [comic #1700](https://xkcd.com/1700/)

### Other examples

For an example of an even more simple pass-through API, you can see my CORS enabled version of the Pinboard feeds API. The code is hosted on GitHub at [https://github.com/mrmartineau/pinboard-api](https://github.com/mrmartineau/pinboard-api)

---

My thanks go to [Roo Williams](https://roowilliams.com/), [Ashley Nolan](https://ashleynolan.co.uk/) & [Ciaran Park](http://www.ciaranpark.com/) for their help with the title of this post. Other suggestions from them include:

- No CORS for concern: getting that API
- Be-CORS you're worth it
- COR Blimey gov'nr
- CORS, Ugh, what is is it good for
- Just CORS
