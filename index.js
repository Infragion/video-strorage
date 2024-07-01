const fs = require('node:fs');
const content = 'Some content!';
try {
  fs.writeFileSync('public/good.txt', content);
  // file written successfully
} catch (err) {
  console.error(err);
}