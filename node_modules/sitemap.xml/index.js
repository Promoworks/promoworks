module.exports = createMiddleware

var readFileSync = require('fs').readFileSync;

function createMiddleware(path) {

  if (!path) throw new Error('No path provided for sitemap.xml file')

  var sitemap = readFileSync(path),
      headers = { 
        'Content-Type': 'application/xml',
        'Content-Length': sitemap.length
      }

  return function middleware(req, res, next) {
    if ('/sitemap.xml' !== req.url) return next()
    res.writeHead(200, headers)
    res.end(sitemap)
  }

}
