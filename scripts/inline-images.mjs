import fs from 'fs';
import path from 'path';

const distHtmlPath = path.resolve('dist/index.html');
const standaloneHtmlPath = path.resolve('dist/chapter6_presentation_standalone.html');
const publicDir = path.resolve('public');

let htmlContent = fs.readFileSync(distHtmlPath, 'utf8');

// Find all image references in dist/index.html (e.g. /images/... or images/...)
const imageFiles = fs.readdirSync(path.join(publicDir, 'images'));

console.log('Encoding images to Base64...');
imageFiles.forEach(file => {
  const filePath = path.join(publicDir, 'images', file);
  const ext = path.extname(file).replace('.', '').toLowerCase();
  const mimeType = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'png' ? 'image/png' : 'image/svg+xml';
  const base64Data = fs.readFileSync(filePath).toString('base64');
  const dataUri = `data:${mimeType};base64,${base64Data}`;

  // Replace both "/images/file" and "images/file"
  const regex1 = new RegExp(`"/images/${file}"`, 'g');
  const regex2 = new RegExp(`"images/${file}"`, 'g');
  const regex3 = new RegExp(`'/images/${file}'`, 'g');
  const regex4 = new RegExp(`'images/${file}'`, 'g');

  htmlContent = htmlContent.replace(regex1, `"${dataUri}"`);
  htmlContent = htmlContent.replace(regex2, `"${dataUri}"`);
  htmlContent = htmlContent.replace(regex3, `'${dataUri}'`);
  htmlContent = htmlContent.replace(regex4, `'${dataUri}'`);
});

// Also replace favicon / icon svgs if any
['favicon.svg', 'icons.svg'].forEach(svgFile => {
  const svgPath = path.join(publicDir, svgFile);
  if (fs.existsSync(svgPath)) {
    const base64Data = fs.readFileSync(svgPath).toString('base64');
    const dataUri = `data:image/svg+xml;base64,${base64Data}`;
    htmlContent = htmlContent.replace(new RegExp(`"/${svgFile}"`, 'g'), `"${dataUri}"`);
    htmlContent = htmlContent.replace(new RegExp(`"${svgFile}"`, 'g'), `"${dataUri}"`);
  }
});

fs.writeFileSync(standaloneHtmlPath, htmlContent, 'utf8');
console.log(`Success! Created standalone file at: ${standaloneHtmlPath}`);
console.log(`File size: ${(fs.statSync(standaloneHtmlPath).size / 1024 / 1024).toFixed(2)} MB`);
