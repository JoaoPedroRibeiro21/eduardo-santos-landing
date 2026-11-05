import sharp from "sharp";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "public/images/eduardo-santos-retrato.jpg");
const output = path.join(root, "public/images/og-eduardo-santos.jpg");

const W = 1200;
const H = 630;

const portrait = await sharp(source)
  .resize({ width: 460, height: 542, fit: "cover", position: "top" })
  .toBuffer();

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect x="32" y="32" width="${W - 64}" height="${H - 64}" fill="none" stroke="#d5d0c2"/>

  <text x="72" y="100" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" letter-spacing="3.2" fill="#5d6358">EDUARDO DOS SANTOS · ADVOCACIA EM ITAPOÁ/SC</text>

  <text font-family="Georgia, Times New Roman, serif" font-size="54" fill="#121812">
    <tspan x="72" y="190">Direito de família,</tspan>
    <tspan x="72" y="252" font-style="italic" fill="#8f2f26">com tempo e clareza.</tspan>
  </text>

  <rect x="72" y="300" width="84" height="1.5" fill="#8f2f26"/>

  <text x="72" y="348" font-family="Helvetica Neue, Arial, sans-serif" font-size="16" fill="#5d6358">Divórcio, guarda, pensão, inventário,</text>
  <text x="72" y="372" font-family="Helvetica Neue, Arial, sans-serif" font-size="16" fill="#5d6358">imóveis, consumo e criminal.</text>

  <text x="72" y="552" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" letter-spacing="2" fill="#121812">OAB/SC 78.883</text>
  <text x="72" y="576" font-family="Helvetica Neue, Arial, sans-serif" font-size="13" fill="#5d6358">Itapoá, Santa Catarina</text>

  <rect x="688" y="44" width="460" height="542" fill="none" stroke="#121812" stroke-opacity="0.15"/>

  <g transform="translate(626, 438)">
    <circle cx="55" cy="55" r="55" fill="#8f2f26"/>
    <circle cx="55" cy="55" r="48" fill="none" stroke="#f2efe6" stroke-opacity="0.45"/>
    <text x="55" y="60" text-anchor="middle" font-family="Georgia, Times New Roman, serif" font-style="italic" font-size="26" fill="#f2efe6">ES</text>
    <text x="55" y="78" text-anchor="middle" font-family="Helvetica Neue, Arial, sans-serif" font-size="8" letter-spacing="1" fill="#f2efe6">OAB/SC 78.883</text>
  </g>
</svg>
`);

await sharp({
  create: {
    width: W,
    height: H,
    channels: 3,
    background: "#f2efe6",
  },
})
  .composite([
    { input: portrait, left: 688, top: 44 },
    { input: overlay, left: 0, top: 0 },
  ])
  .jpeg({ quality: 90, mozjpeg: true })
  .toFile(output);

console.log("OG image written to", output);
