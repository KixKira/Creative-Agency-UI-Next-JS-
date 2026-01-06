import { Title } from "@/components/common/Title";
import React, { useState, useEffect, useRef } from "react";

export default function Pres() {
  const [exists, setExists] = useState(false);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [numPages, setNumPages] = useState(0);
  const [pdfDoc, setPdfDoc] = useState(null);
  const [renderedPages, setRenderedPages] = useState([]);
  const canvasRefs = useRef([]);

  useEffect(() => {
    // Cargar PDF.js desde CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
    script.async = true;
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      checkPDF();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const checkPDF = async () => {
    try {
      const response = await fetch("/pres.pdf", { method: "HEAD" });
      if (response.ok) {
        setExists(true);
        loadPDF();
      } else {
        setExists(false);
        setLoading(false);
      }
    } catch (error) {
      setExists(false);
      setLoading(false);
    }
  };

  const loadPDF = async () => {
    try {
      const loadingTask = window.pdfjsLib.getDocument("/pres.pdf");
      const pdf = await loadingTask.promise;
      setPdfDoc(pdf);
      setNumPages(pdf.numPages);
      setLoading(false);

      // Renderizar todas las páginas
      renderAllPages(pdf);
    } catch (error) {
      console.error("Error loading PDF:", error);
      setExists(false);
      setLoading(false);
    }
  };

  const renderAllPages = async (pdf) => {
    const pages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport: viewport,
      }).promise;

      pages.push(canvas.toDataURL());
    }
    setRenderedPages(pages);
  };

  const isAdmin =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("admin") === "1";

  const onFile = (e) => setFile(e.target.files?.[0] ?? null);

  const upload = async () => {
    if (!file) return setStatus("Selecciona un archivo PDF.");
    setStatus("Subiendo...");
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const dataURL = reader.result;
        const resp = await fetch("/api/pres/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: file.name, data: dataURL }),
        });
        const json = await resp.json();
        if (json.ok) {
          setStatus("Subida correcta.");
          setExists(true);
          window.location.reload();
        } else {
          setStatus("Error: " + (json.error || "subida fallida"));
        }
      } catch (err) {
        setStatus("Error: " + err.message);
      }
    };
    reader.readAsDataURL(file);
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/pres.pdf";
    link.download = "Presentacion-JUWEARE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pres-page">
      <div className="container">
        <div className="heading-title">
          <Title title="Presentación - JU WE" />
        </div>

        {loading ? (
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <p>Cargando presentación...</p>
          </div>
        ) : exists ? (
          <div style={{ marginTop: 20 }}>
            <div
              className="pdf-pages-container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
                padding: "20px 0",
              }}
            >
              {renderedPages.map((pageImg, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    maxWidth: "900px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={pageImg}
                    alt={`Página ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                    }}
                  />
                  {/* <div
                    style={{
                      padding: "8px",
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#666",
                      backgroundColor: "#f5f5f5",
                    }}
                  >
                    Página {index + 1} de {numPages}
                  </div> */}
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <button
                className="download-link"
                onClick={downloadPDF}
                style={{
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                  fontSize: "14px",
                  textDecoration: "underline",
                }}
              >
                📥 Descargar PDF completo
              </button>
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
            <div>
              <input accept="application/pdf" type="file" onChange={onFile} />
              <div style={{ marginTop: 8 }}>
                <button className="button-primary" onClick={upload}>
                  Subir
                </button>
              </div>
            </div>
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
