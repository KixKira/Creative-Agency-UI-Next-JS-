// api/pres/upload.js o route handler
import { PDFDocument } from "pdf-lib";
import sharp from "sharp"; // o cualquier librería para convertir PDF a imágenes
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("pdf");

    // Guardar PDF original
    const pdfBuffer = await file.arrayBuffer();
    fs.writeFileSync(
      path.join(process.cwd(), "public/pres.pdf"),
      Buffer.from(pdfBuffer)
    );

    // Convertir PDF a imágenes (necesitarás pdf-poppler, pdf2pic, o similar)
    // Ejemplo con pdf2pic:
    const { fromBuffer } = require("pdf2pic");
    const options = {
      density: 150,
      saveFilename: "page",
      savePath: path.join(process.cwd(), "public/pres-pages"),
      format: "png",
      width: 1200,
      height: 1600,
    };

    const convert = fromBuffer(Buffer.from(pdfBuffer), options);
    const pageCount = 16; // O detectarlo del PDF

    for (let i = 1; i <= pageCount; i++) {
      await convert(i);
    }

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.message });
  }
}
