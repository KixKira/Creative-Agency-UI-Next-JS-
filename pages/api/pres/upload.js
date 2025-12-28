import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "12mb", // aumenta si tu PDF es más grande
    },
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "Método no permitido" });
    return;
  }

  try {
    const { filename, data } = req.body || {};
    if (!data)
      return res.status(400).json({ ok: false, error: "No hay datos" });

    // Espera data como dataURL: data:application/pdf;base64,AAAA...
    const match = data.match(/^data:application\/pdf;base64,(.+)$/);
    const base64 = match ? match[1] : null;
    if (!base64)
      return res.status(400).json({ ok: false, error: "Formato inválido" });

    const buffer = Buffer.from(base64, "base64");
    const outPath = path.join(process.cwd(), "public", "pres.pdf");

    await fs.promises.writeFile(outPath, buffer);
    // En dev funcionará. En hosting serverless (Vercel) no persistirá — ver nota.
    return res
      .status(200)
      .json({ ok: true, url: "/pres.pdf", size: buffer.length });
  } catch (err) {
    console.error("Upload pres error:", err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
