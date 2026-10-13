const fs = require('fs');
const path = require('path');

// Check all asset references
const assetDir = 'public/assets';
const assets = fs.readdirSync(assetDir);

const pages = [
  'src/pages/Home.jsx',
  'src/pages/History.jsx',
  'src/pages/JungleSafari.jsx',
  'src/pages/Experiences.jsx',
  'src/pages/Gallery.jsx',
  'src/pages/Contact.jsx',
  'src/pages/TheLand.jsx',
  'src/components/HeroSlider.jsx',
  'src/components/EnquiryModal.jsx',
];

let missing = [];
pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const re = /\/assets\/([a-zA-Z0-9_.-]+)/g;
  let m;
  while ((m = re.exec(c)) !== null) {
    const fn = m[1];
    if (!assets.includes(fn)) missing.push(fn + ' (in ' + p + ')');
  }
});

if (missing.length) {
  console.log('MISSING ASSETS:');
  [...new Set(missing)].forEach(x => console.log('  ' + x));
} else {
  console.log('All asset paths OK');
}

// Check CSS classes used in JSX
const cssClasses = ['shape-blob-discover','shape-organic-lake','shape-arch-tall','shape-curved-left'];
const cssContent = fs.readFileSync('src/index.css', 'utf8');
cssClasses.forEach(cls => {
  if (cssContent.includes(cls)) {
    console.log('CSS class defined: ' + cls);
  } else {
    console.log('WARNING - CSS class NOT found: ' + cls);
  }
});

console.log('Check complete');
