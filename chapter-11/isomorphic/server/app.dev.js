const express = require('express');
const path = require('path');

const requestHandler = require('./requestHandler.js');

const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.dev.js');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  });

function getAssetManifest() {
  //const content = webpackDevMiddleware.fileSystem.readFileSync(__dirname + '/../build/asset-manifest.json');
  const content = webpackDevMiddleware.fileSystem.readFileSync(__dirname + '/../build/asset-manifest.json');
  return JSON.parse(content);
}

const app = express();

let assetManifest = null;

app.use(express.static(path.resolve(__dirname, '../build')));

app.use(webpackDevMiddleware);
app.use(require('webpack-hot-middleware')(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.get('*', (req, res) => {
  if (!assetManifest) {
    assetManifest = getAssetManifest();
  }

  return requestHandler(req, res, assetManifest);
});

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

module.exports = app;