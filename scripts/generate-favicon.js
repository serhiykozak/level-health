const { createCanvas } = require('canvas');
const fs = require('fs');
const toIco = require('to-ico');

// Create favicon
const generateIcon = (size) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = '#2563eb'; // blue-600
  ctx.fillRect(0, 0, size, size);
  
  // Draw a simplified stethoscope
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = size / 16;
  
  // Draw the circular part (stethoscope head)
  const centerX = size * 0.5;
  const centerY = size * 0.65;
  const radius = size * 0.2;
  
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Draw the tube
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - radius);
  ctx.lineTo(centerX, size * 0.3);
  ctx.lineTo(size * 0.3, size * 0.2);
  ctx.stroke();
  
  return canvas.toBuffer();
};

// Generate different sizes
const sizes = [16, 32, 48, 192];
const pngBuffers = sizes.map(size => generateIcon(size));

// Save favicon.ico (combines 16, 32, 48px versions)
toIco(pngBuffers.slice(0, 3)).then(buf => {
  fs.writeFileSync('./public/medical-favicon.ico', buf);
});

// Save 192px version for PWA
fs.writeFileSync('./public/medical-logo192.png', pngBuffers[3]);

console.log('Icons generated successfully!'); 