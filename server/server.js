import express from 'express'
import path from 'path'

const app = express()

if (env.trim() === 'development') {
  const webpack = require('webpack')
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpackConfig = require('../webpack.config')

  const compiler = webpack(webpackConfig)

  // Hot reloading
  app.use(
    webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    })
  )
}

app.use(express.static(path.join(__dirname, '../public')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

app.listen(8000, () => {
  console.log('Running on localhost:8000')
})
