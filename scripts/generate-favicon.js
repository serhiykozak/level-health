const { createCanvas } = require('canvas');
const fs = require('fs');
const toIco = require('to-ico');

// Create favicon
const generateIcon = (size) => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Clear and set white background
  ctx.clearRect(0, 0, size, size);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  
  // Add a small padding to ensure the icon doesn't touch the edges
  const padding = size * 0.1;
  const drawingSize = size - (padding * 2);
  
  // Scale the context to match the size (Lucide icons are 24x24 by default)
  const scale = drawingSize / 24;
  ctx.translate(padding, padding);
  ctx.scale(scale, scale);
  
  // Apply the same rotation and flip as in the navbar
  ctx.translate(12, 12); // Move to center
  ctx.rotate(135 * Math.PI / 180); // Rotate 135 degrees
  ctx.scale(1, -1); // Flip vertically
  ctx.translate(-12, -12); // Move back
  
  // Set up for drawing the route icon
  ctx.strokeStyle = '#2563eb'; // blue-600
  ctx.fillStyle = '#2563eb'; // blue-600
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  
  // Draw the route icon using the exact SVG path
  // First circle (bottom left)
  ctx.beginPath();
  ctx.arc(6, 19, 3, 0, Math.PI * 2);
  ctx.stroke();
  
  // Middle path
  ctx.beginPath();
  ctx.moveTo(9, 19);
  ctx.lineTo(17.5, 19);
  ctx.arc(17.5, 15.5, 3.5, Math.PI/2, -Math.PI/2, true);
  ctx.lineTo(6.5, 12);
  ctx.arc(6.5, 8.5, 3.5, Math.PI/2, -Math.PI/2, false);
  ctx.lineTo(15, 5);
  ctx.stroke();
  
  // Second circle (top right)
  ctx.beginPath();
  ctx.arc(18, 5, 3, 0, Math.PI * 2);
  ctx.stroke();
  
  return canvas.toBuffer();
};

// Generate different sizes
const sizes = [16, 32, 48, 192];
const pngBuffers = sizes.map(size => generateIcon(size));

// Save favicon.ico (combines 16, 32, 48px versions)
toIco(pngBuffers.slice(0, 3)).then(buf => {
  fs.writeFileSync('./public/favicon.ico', buf);
});

// Save 192px version for PWA
fs.writeFileSync('./public/logo192.png', pngBuffers[3]);

console.log('Icons generated successfully!'); 