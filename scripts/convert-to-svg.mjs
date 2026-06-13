import sharp from 'sharp';
import potrace from 'potrace';
import { writeFileSync } from 'fs';
import { promisify } from 'util';

const trace = promisify(potrace.trace);

// webp → png buffer → svg
const pngBuffer = await sharp('./src/assets/images/nest-logo.webp')
  .png()
  .toBuffer();

const svg = await trace(pngBuffer, {
  color: 'black',
  background: 'transparent',
  threshold: 128,
  turdSize: 2,
  optTolerance: 0.4,
});

writeFileSync('./src/assets/images/nest-logo.svg', svg);

const size = Buffer.byteLength(svg);
console.log(`변환 완료: ${Math.round(size / 1024)}KB`);
console.log('src/assets/images/nest-logo.svg 확인 후 품질이 괜찮으면 적용하세요.');
