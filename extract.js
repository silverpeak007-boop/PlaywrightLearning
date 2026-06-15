const fs = require('fs');
const pdf = require('@cyber2024/pdf-parse-fixed');

const buf = fs.readFileSync('C:/Users/R karthick/Downloads/rKarthick-resume.pdf');
pdf(buf).then(data => {
  console.log(data.text);
}).catch(err => {
  console.error(err);
});
