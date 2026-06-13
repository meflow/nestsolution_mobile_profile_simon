import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, extname, basename } from 'path';
import ttf2woff2 from 'ttf2woff2';

const FONTS_DIR = './src/assets/fonts';

const files = readdirSync(FONTS_DIR).filter(f => extname(f).toLowerCase() === '.ttf');

for (const file of files) {
  const input = readFileSync(join(FONTS_DIR, file));
  const output = ttf2woff2(input);
  const outName = basename(file, '.ttf') + '.woff2';
  writeFileSync(join(FONTS_DIR, outName), output);
  const before = Math.round(input.length / 1024);
  const after = Math.round(output.length / 1024);
  console.log(`  ${file} → ${outName} (${before}KB → ${after}KB)`);
}

console.log(`\n완료: ${files.length}개 변환`);
