import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const brands = [
  { name: "loreal_paris", domain: "loreal.com" },
  { name: "diptyque", domain: "diptyqueparis.com" },
  { name: "chanel", domain: "chanel.com" },
  { name: "giorgio_armani", domain: "armani.com" },
  { name: "yves_saint_laurent", domain: "ysl.com" },
  { name: "loccitane", domain: "loccitane.com" },
  { name: "givenchy", domain: "givenchy.com" },
  { name: "guerlain", domain: "guerlain.com" },
  { name: "dior", domain: "dior.com" },
  { name: "acqua_di_parma", domain: "acquadiparma.com" },
  { name: "bvlgari", domain: "bulgari.com" },
  { name: "gucci", domain: "gucci.com" },
  { name: "kenzo", domain: "kenzo.com" },
  { name: "benefit", domain: "benefitcosmetics.com" },
  { name: "lancome", domain: "lancome.com" },
  { name: "creed", domain: "creedfragrance.com" },
  { name: "charlotte_tilbury", domain: "charlottetilbury.com" },
  { name: "shiseido", domain: "shiseido.com" },
  { name: "burberry", domain: "burberry.com" },
  { name: "prada", domain: "prada.com" },
  { name: "rabanne", domain: "rabanne.com" },
  { name: "huda_beauty", domain: "hudabeauty.com" },
  { name: "boss", domain: "hugoboss.com" },
  { name: "laura_mercier", domain: "lauramercier.com" },
  { name: "sulwhasoo", domain: "sulwhasoo.com" },
  { name: "urban_decay", domain: "urbandecay.com" },
  { name: "kerastase", domain: "kerastase.com" },
  { name: "pat_mcgrath_labs", domain: "patmcgrath.com" },
  { name: "ex_nihilo", domain: "ex-nihilo-paris.com" },
  { name: "la_prairie", domain: "laprairie.com" },
  { name: "chloe", domain: "chloe.com" },
  { name: "memo_paris", domain: "memoparis.com" },
  { name: "versace", domain: "versace.com" },
  { name: "marc_jacobs", domain: "marcjacobs.com" },
  { name: "serge_lutens", domain: "sergelutens.com" },
  { name: "olaplex", domain: "olaplex.com" }
];

const targetDir = path.join(__dirname, 'src', 'assets', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(brand) {
  return new Promise((resolve, reject) => {
    const url = `https://logo.clearbit.com/${brand.domain}?size=512`;
    const filePath = path.join(targetDir, `${brand.name}.png`);
    const file = fs.createWriteStream(filePath);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${brand.name}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${brand.name}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file async if error
      reject(err);
    });
  });
}

async function run() {
  for (const brand of brands) {
    try {
      await download(brand);
    } catch (error) {
      console.error(error.message);
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}

run();
