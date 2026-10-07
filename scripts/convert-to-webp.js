const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertFrames() {
  const framesDir = path.join(__dirname, '..', 'public', 'frames');
  const files = fs.readdirSync(framesDir).filter(f => f.endsWith('.jpg')).sort();
  
  console.log(`Found ${files.length} JPG frames to convert to WebP...`);
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(framesDir, file);
    const outputPath = path.join(framesDir, file.replace('.jpg', '.webp'));
    
    await sharp(inputPath)
      .resize(1280, 720, { fit: 'inside' })
      .webp({ quality: 78, effort: 4 })
      .toFile(outputPath);
      
    // Remove original JPG to save disk space
    fs.unlinkSync(inputPath);
    
    if ((i + 1) % 30 === 0 || i === files.length - 1) {
      console.log(`Converted ${i + 1}/${files.length} frames...`);
    }
  }
  
  console.log('Frame conversion complete!');
}

convertFrames().catch(err => {
  console.error('Conversion failed:', err);
  process.exit(1);
});
