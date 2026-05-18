const fs = require('fs');
const file = 'src/app.js';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
  "if (mongoose.connection.readyState === 1) {",
  "console.log('readyState in app.js:', mongoose.connection.readyState);\n  if (mongoose.connection.readyState === 1) {"
);
fs.writeFileSync(file, content);
