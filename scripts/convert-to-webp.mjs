import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './src/assets/images';

const files = await readdir(IMAGES_DIR);
const pngs = files.filter(f => extname(f).toLowerCase() === '.png');

for (const file of pngs) {
  const input = join(IMAGES_DIR, file);
  const output = join(IMAGES_DIR, basename(file, '.png') + '.webp');
  await sharp(input).webp({ quality: 75, lossless: false }).toFile(output);
  console.log(`  ${file} → ${basename(output)}`);
}

console.log(`\n완료: ${pngs.length}개 변환`);
