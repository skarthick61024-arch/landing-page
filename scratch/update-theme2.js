const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/report-problem/page.tsx',
];

const replacements = [
  { from: /bg-\[#F7F7F7\]/g, to: 'bg-[#0B0C0E]' },
  { from: /border-\[#090909\]/g, to: 'border-[#B7FF32]' },
  { from: /bg-\[#090909\]/g, to: 'bg-[#101114]' }, // For buttons
  { from: /hover:text-\[#B7FF32\]/g, to: 'hover:text-[#F5F5F5]' },
  { from: /text-white/g, to: 'text-[#F5F5F5]' },
  { from: /hover:bg-\[#F0F0F0\]/g, to: 'hover:bg-[#141518]' },
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Apply all replacements
    replacements.forEach(({ from, to }) => {
      content = content.replace(from, to);
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
