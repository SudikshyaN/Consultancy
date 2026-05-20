const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src/controllers/video.controller.js');
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  'const { country } = req.query;',
  "const { country } = req.query; require('fs').appendFileSync('video_requests.log', new Date().toISOString() + ' GET /api/videos country=' + country + '\\n');"
);
fs.writeFileSync(file, content);
