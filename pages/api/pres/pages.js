// api/pres/pages.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const pagesDir = path.join(process.cwd(), "public/pres-pages");

  try {
    if (!fs.existsSync(pagesDir)) {
      return res.json({ exists: false, pages: [] });
    }

    const files = fs
      .readdirSync(pagesDir)
      .filter((f) => f.endsWith(".png"))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0]);
        const numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
      })
      .map((f) => `/pres-pages/${f}`);

    res.json({ exists: true, pages: files });
  } catch (error) {
    res.json({ exists: false, pages: [] });
  }
}
