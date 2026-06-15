import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

const data = new Uint8Array(readFileSync('C:/Users/R karthick/Downloads/rKarthick-resume.pdf'));
const pdf = await pdfjsLib.getDocument({ data }).promise;
console.log(`Pages: ${pdf.numPages}`);

for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: 1 });
  console.log(`\n=== PAGE ${pageNum} === (${viewport.width.toFixed(0)}x${viewport.height.toFixed(0)})`);

  const content = await page.getTextContent();
  let lastY = null;
  let line = '';

  for (const item of content.items) {
    if ('str' in item) {
      const y = item.transform[5].toFixed(1);
      const fontSize = Math.sqrt(item.transform[0]**2 + item.transform[1]**2).toFixed(1);
      const fontName = item.fontName || '';

      if (lastY !== null && Math.abs(parseFloat(y) - parseFloat(lastY)) > 2) {
        if (line.trim()) console.log(`  [y=${lastY} fs=${fontSize} font=${fontName}] ${line.trim()}`);
        line = '';
      }
      line += item.str;
      lastY = y;
    }
  }
  if (line.trim()) console.log(`  [y=${lastY}] ${line.trim()}`);
}
