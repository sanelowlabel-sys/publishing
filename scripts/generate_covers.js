import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/covers');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const releases = [
  { id: 'snl-048', cat: 'SNL048', title: 'Found (EP)', artist: 'Themetique', genre: 'Deep House', year: '2026', color: '#DC2626', secondary: '#991B1B' },
  { id: 'snl-047', cat: 'SNL047', title: 'Friends Around Me', artist: 'Sanque', genre: 'Deep House', year: '2026', color: '#EF4444', secondary: '#B91C1C' },
  { id: 'snl-046', cat: 'SNL046', title: 'Sanelow Dark, Vol. 22', artist: 'Various Artists', genre: 'Deep Minimal Tech', year: '2026', color: '#B91C1C', secondary: '#7F1D1D' },
  { id: 'snl-045', cat: 'SNL045', title: 'Home Town', artist: 'Thaps De Producer', genre: 'Deep House', year: '2026', color: '#DC2626', secondary: '#991B1B' },
  { id: 'snl-044', cat: 'SNL044', title: 'Sanelow Dark, Vol. 20', artist: 'Sanelow All-Stars', genre: 'Deep Underground', year: '2025', color: '#991B1B', secondary: '#450A0A' },
  { id: 'snl-043', cat: 'SNL043', title: 'Life in the Big City', artist: 'Marcus Watkins', genre: 'Tech House', year: '2025', color: '#EF4444', secondary: '#B91C1C' },
  { id: 'snl-042', cat: 'SNL042', title: 'Fatherless', artist: 'Da Conist', genre: 'Soulful Deep House', year: '2025', color: '#DC2626', secondary: '#7F1D1D' },
  { id: 'snl-041', cat: 'SNL041', title: 'Sanelow Dark, Vol. 17', artist: 'Various Artists', genre: 'Underground Tech', year: '2025', color: '#B91C1C', secondary: '#450A0A' },
  { id: 'snl-040', cat: 'SNL040', title: "Lesh's Groove", artist: 'Avenue Deep', genre: 'Afro Deep House', year: '2025', color: '#EF4444', secondary: '#991B1B' },
  { id: 'snl-039', cat: 'SNL039', title: 'Ngizula', artist: 'Spaceman & DJ Asi', genre: 'Afro House', year: '2024', color: '#DC2626', secondary: '#7F1D1D' },
  { id: 'snl-038', cat: 'SNL038', title: 'Ready Made Grooves, Vol. 6', artist: 'Sanelow Collective', genre: 'Minimal Tech', year: '2024', color: '#991B1B', secondary: '#450A0A' },
  { id: 'snl-037', cat: 'SNL037', title: 'Sanelow Dark, Vol. 14', artist: 'Various Artists', genre: 'Minimal Deep House', year: '2024', color: '#B91C1C', secondary: '#7F1D1D' }
];

releases.forEach(rel => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <radialGradient id="bgGrad-${rel.id}" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#1C1917" />
      <stop offset="70%" stop-color="#0C0A09" />
      <stop offset="100%" stop-color="#000000" />
    </radialGradient>
    <linearGradient id="redGrad-${rel.id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${rel.color}" />
      <stop offset="100%" stop-color="${rel.secondary}" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="600" height="600" fill="url(#bgGrad-${rel.id})" />

  <!-- Outer Vinyl Grooves -->
  <circle cx="300" cy="270" r="230" fill="none" stroke="#292524" stroke-width="1.5" />
  <circle cx="300" cy="270" r="200" fill="none" stroke="#1C1917" stroke-width="1.5" stroke-dasharray="3 4" />
  <circle cx="300" cy="270" r="160" fill="none" stroke="#292524" stroke-width="1" />
  <circle cx="300" cy="270" r="120" fill="none" stroke="${rel.color}" stroke-width="1.5" opacity="0.3" />

  <!-- Center Emblem -->
  <g transform="translate(300, 270)">
    <!-- Radiating sonic rays -->
    <line x1="-80" y1="0" x2="80" y2="0" stroke="${rel.color}" stroke-width="1" opacity="0.5" />
    <line x1="0" y1="-80" x2="0" y2="80" stroke="${rel.color}" stroke-width="1" opacity="0.5" />
    <line x1="-56" y1="-56" x2="56" y2="56" stroke="${rel.color}" stroke-width="1" opacity="0.3" />
    <line x1="-56" y1="56" x2="56" y2="-56" stroke="${rel.color}" stroke-width="1" opacity="0.3" />
    
    <polygon points="0,-45 45,0 0,45 -45,0" fill="url(#redGrad-${rel.id})" />
    <circle cx="0" cy="0" r="16" fill="#0C0A09" stroke="#FFFFFF" stroke-width="2" />
    <circle cx="0" cy="0" r="5" fill="${rel.color}" />
  </g>

  <!-- Header Header Stripe -->
  <rect x="35" y="35" width="530" height="46" rx="6" fill="#0C0A09" stroke="#292524" stroke-width="1.5" />
  
  <!-- Red Logo Accent -->
  <rect x="47" y="47" width="22" height="22" rx="4" fill="${rel.color}" />
  <path d="M53 58 L58 51 L63 58" stroke="#FFFFFF" stroke-width="2" fill="none" stroke-linecap="round" />
  
  <text x="80" y="63" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" letter-spacing="1">SANELOW LABEL</text>
  <text x="545" y="63" fill="#EF4444" font-family="'JetBrains Mono', monospace" font-size="13" font-weight="800" text-anchor="end">${rel.cat}</text>

  <!-- Bottom Release Info Card -->
  <rect x="35" y="410" width="530" height="155" rx="8" fill="#0C0A09" fill-opacity="0.95" stroke="#292524" stroke-width="1.5" />
  
  <text x="55" y="445" fill="${rel.color}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="800" letter-spacing="2.5">${rel.genre.toUpperCase()} • ${rel.year}</text>
  
  <text x="55" y="485" fill="#FFFFFF" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="900" letter-spacing="-0.5">${rel.title}</text>
  
  <text x="55" y="520" fill="#D6D3D1" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="600">${rel.artist}</text>

  <line x1="55" y1="535" x2="545" y2="535" stroke="#292524" stroke-width="1" />

  <text x="55" y="552" fill="#78716C" font-family="'JetBrains Mono', monospace" font-size="9.5">MASTER &amp; PUBLISHING: SANELOW LABEL PTY LTD • SAMRO | CAPASSO | RISA | SAMPRA</text>
  <text x="545" y="552" fill="#22C55E" font-family="'JetBrains Mono', monospace" font-size="9.5" font-weight="800" text-anchor="end">PRE-CLEARED</text>
</svg>`;

  fs.writeFileSync(path.join(outDir, `${rel.id}.svg`), svg);
});

console.log(`Created ${releases.length} authentic Sanelow covers in ${outDir}`);
