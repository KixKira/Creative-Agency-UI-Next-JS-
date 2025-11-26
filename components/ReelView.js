import React from "react";
import Link from "next/link";

function getYouTubeEmbed(url) {
  try {
    const u = new URL(url);
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
  } catch (e) {
    // fallthrough
  }
  return url;
}

export default function ReelView({ item }) {
  if (!item) {
    return (
      <main className="container">
        <h1>Reel no encontrado</h1>
        <p>El reel solicitado no existe.</p>
        <p>
          <Link href="/">Volver al inicio</Link>
        </p>
      </main>
    );
  }

  const embedUrl = getYouTubeEmbed(item.videoCover || "");

  return (
    <main className="container" style={{ padding: "3rem 0" }}>
      <h1 style={{ marginBottom: "1rem" }}>{item.title}</h1>
      {item.subtitle && (
        <div
          className="subtitle"
          style={{ marginBottom: "1.5rem" }}
          dangerouslySetInnerHTML={{ __html: item.subtitle }}
        />
      )}

      {embedUrl ? (
        <div
          className="video-wrapper"
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src={embedUrl}
            title={item.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p>No hay video disponible.</p>
      )}

      <p style={{ marginTop: "1.5rem" }}>
        <Link href="/">Volver al inicio</Link>
      </p>
    </main>
  );
}
