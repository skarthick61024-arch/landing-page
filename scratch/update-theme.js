const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/help/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/report-problem/page.tsx',
  'src/app/terms/page.tsx',
];

const replacements = [
  { from: /bg-white/g, to: 'bg-[#000000]' },
  { from: /bg-gray-50/g, to: 'bg-[#0B0C0E]' },
  { from: /bg-gray-100/g, to: 'bg-[#101114]' },
  { from: /text-\[#090909\]/g, to: 'text-[#F5F5F5]' },
  { from: /text-\[#111111\]/g, to: 'text-[#F5F5F5]' },
  { from: /text-\[#6B6B6B\]/g, to: 'text-[#8D919B]' },
  { from: /text-\[#666666\]/g, to: 'text-[#8D919B]' },
  { from: /border-\[#E8E8E8\]/g, to: 'border-[#141518]' },
  { from: /prose-gray/g, to: 'prose-invert' },
  { from: /bg-\[#111111\]/g, to: 'bg-[#B7FF32]' }, // Accent color for small bullets/buttons
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply all replacements
    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });

    // Special fix for the black text on the lime background if we replaced it
    content = content.replace(/text-\[#F5F5F5\] flex items-center justify-center shrink-0/g, 'text-[#000000] flex items-center justify-center shrink-0');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
