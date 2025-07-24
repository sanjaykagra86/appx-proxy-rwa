// api/proxy.js
const request = require('request');

export default function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).send('Missing URL');

  request({
    url: decodeURIComponent(url),
    headers: {
      'Referer': 'https://appx-play.akamai.net.in/',
      'User-Agent': 'Mozilla/5.0'
    }
  }).on('error', (err) => {
    res.status(500).send('Proxy Error: ' + err.message);
  }).pipe(res);
}
