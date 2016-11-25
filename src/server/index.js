// external imports
import path from 'path'
import fs from 'fs'
import express from 'express'
import cors from 'cors'
import https from 'https'
// local imports
import { buildDir } from '../../config/projectPaths'
import getMemes from './requestHandlers/getMemeLinks'

// create Express app
const app = express()

const isProduction = process.env.NODE_ENV === "PROD"
const keyPath = isProduction ? "/etc/letsencrypt/live/www.topkekkle.com/privkey.pem" :
  "/home/jsjaspreet/dev/projects/topkek/privkey.pem"
const certPath = isProduction ? "/etc/letsencrypt/live/www.topkekkle.com/cert.pem" :
  "/home/jsjaspreet/dev/projects/topkek/cert.pem"

// add static file handling
app.use('/static', express.static(buildDir))
app.use('/static', express.static(path.join(__dirname, 'assets')))

app.use(cors())

// use jade as templating engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'templates'))


// meme links
app.get('/api/memes', getMemes)

app.all('*', (req, res) => {
  const resetCssLocation = '/static/styles/reset.css'
  const bundleLocation = '/static/client.js'
  res.render('index.pug', {
    bundleLocation,
    resetCssLocation
  })
})

// grab port
const port = process.env.PORT || process.argv[2] || 5050

// listen
https.createServer({
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath)
}, app)
     .listen(port)
