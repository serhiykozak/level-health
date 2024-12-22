const sharp = require('sharp');
const path = require('path');

const inputPath = 'public/images/iStock-1262287062-XL.jpg';//iStock-1295563468-XL.jpg';
const outputDir = 'public/images/hero';

// Ensure output directory exists
const fs = require('fs');
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

// Create different sizes and formats
async function optimizeImage() {
  const sizes = [
    { width: 640, suffix: 'sm' },
    { width: 1024, suffix: 'md' },
    { width: 1920, suffix: 'lg' }
  ];

  for (const size of sizes) {
    // WebP version
    await sharp(inputPath)
      .resize(size.width)
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, `hero-${size.suffix}.webp`));

    // JPG fallback
    await sharp(inputPath)
      .resize(size.width)
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(outputDir, `hero-${size.suffix}.jpg`));
  }
}

optimizeImage().catch(console.error); 