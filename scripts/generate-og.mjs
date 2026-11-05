import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public/images/eduardo-santos-retrato.jpg");
const output = path.join(root, "public/images/og-eduardo-santos.jpg");

const W = 1200;
const H = 630;

const portrait = await sharp(source)
  .resize({ width: 520, height: H, fit: "cover", position: "top" })
  .toBuffer();

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="blend" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#050508" stop-opacity="1"/>
      <stop offset="18%" stop-color="#050508" stop-opacity="0.88"/>
      <stop offset="45%" stop-color="#050508" stop-opacity="0"/>
      <stop offset="100%" stop-color="#050508" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#c9a84c"/>
      <stop offset="100%" stop-color="#c9a84c" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect x="0" width="680" height="${H}" fill="#050508"/>
  <rect x="600" width="600" height="${H}" fill="url(#blend)"/>
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" fill="none" stroke="#c9a84c" stroke-opacity="0.22"/>

  <text x="72" y="104" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" letter-spacing="4" fill="#c9a84c">EDUARDO SANTOS · ADVOCACIA EM ITAPOÁ/SC</text>

  <text font-family="Georgia, Times New Roman, serif" font-size="46" font-weight="bold" fill="#f2ede4">
    <tspan x="72" y="186">Orientação jurídica</tspan>
    <tspan x="72" y="244">com <tspan font-style="italic" fill="#c9a84c">clareza</tspan> para as</tspan>
    <tspan x="72" y="302">decisões que importam.</tspan>
  </text>

  <rect x="72" y="352" width="90" height="1" fill="url(#gold)"/>

  <text x="72" y="396" font-family="Helvetica Neue, Arial, sans-serif" font-size="15" letter-spacing="1.2" fill="#a89f8c">Família · Inventário · Imobiliário</text>
  <text x="72" y="420" font-family="Helvetica Neue, Arial, sans-serif" font-size="15" letter-spacing="1.2" fill="#a89f8c">Consumidor · Criminal</text>

  <text x="72" y="540" font-family="Helvetica Neue, Arial, sans-serif" font-size="15" letter-spacing="2" fill="#d8d0c2">ITAPOÁ · SC</text>
  <text x="72" y="567" font-family="Helvetica Neue, Arial, sans-serif" font-size="15" letter-spacing="1.2" fill="#8a8175">Atendimento presencial e on-line</text>

  <text x="380" y="540" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" letter-spacing="2.2" fill="#8a8175">OAB/SC 78.883</text>
</svg>
`);

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: "#050508",
  },
})
  .composite([
    { input: portrait, left: 680, top: 0 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(output);

console.log("OG image written to", output);
