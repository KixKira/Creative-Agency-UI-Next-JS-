import React, { useState, useEffect } from "react";
import { Title } from "@/components/common/Title";

export default function Pres() {
  const [exists, setExists] = useState(false);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/pres.pdf", { method: "HEAD" })
      .then((res) => {
        setExists(res.ok);
      })
      .catch(() => setExists(false));
  }, []);

  const isAdmin =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("admin") === "1";

  const onFile = (e) => setFile(e.target.files?.[0] ?? null);

  const upload = async (e) => {
    e.preventDefault();
    if (!file) return setStatus("Selecciona un archivo PDF.");
    setStatus("Subiendo...");
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataURL = reader.result; // data:application/pdf;base64,...
        const resp = await fetch("/api/pres/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: file.name, data: dataURL }),
        });
        const json = await resp.json();
        if (json.ok) {
          setStatus("Subida correcta.");
          setExists(true);
        } else {
          setStatus("Error: " + (json.error || "subida fallida"));
        }
      } catch (err) {
        setStatus("Error: " + err.message);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <section className="pres-page">
      <div className="container">
        <div className="heading-title">
          <Title title="Presentación - JU WE" />
        </div>

        {exists ? (
          <div style={{ marginTop: 20 }}>
            <div className="pdf-embed">
              <iframe src="/pres.pdf" title="Presentación" />
            </div>
            <div style={{ marginTop: 8 }}>
              <a
                className="download-link"
                href="/pres.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            <p>No hay PDF subido todavía.</p>
          </div>
        )}

        {isAdmin && (
          <div style={{ marginTop: 18 }}>
            <h4>Subir PDF (admin)</h4>
            <form onSubmit={upload}>
              <input accept="application/pdf" type="file" onChange={onFile} />
              <div style={{ marginTop: 8 }}>
                <button className="button-primary" type="submit">
                  Subir
                </button>
              </div>
            </form>
            <div
              style={{
                marginTop: 8,
                color: status.startsWith("Error") ? "tomato" : "inherit",
              }}
            >
              {status}
            </div>
            <div style={{ marginTop: 8, color: "#666" }}>
              Nota: el upload escribe en <code>/public/pres.pdf</code> (dev
              only).
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
